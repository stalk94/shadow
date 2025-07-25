import fs from 'fs';
import path from 'path';


function generateTailwindSafeClasses(options) {
    const outputFile = options.outputFile ?? 'src/TailwindSafeClasses.tsx';
    const componentName = options.componentName ?? 'TailwindSafeClasses';

    const uniqueClasses = Array.from(new Set(options.classGroups)).join(' ');

    const component = `
        // 🚀 Auto-generated by generateTailwindSafeClasses
        const ${componentName} = () => (
        <div className="hidden">
            ${uniqueClasses}
        </div>
        );

        export default ${componentName};
    `.trim();

    const fullPath = path.resolve(process.cwd(), outputFile);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, component, 'utf-8');

    console.log(`[tailwind-safe] Generated component: ${outputFile}`);
}


export default function tailwindSafeServerPlugin() {
    return {
        name: 'vite-plugin-tailwind-safe-server',
        configureServer(server) {
            server.middlewares.use('/tailwind-safe', async (req, res) => {
                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    return res.end('Method Not Allowed');
                }

                let body = '';
                req.on('data', chunk => body += chunk);
                req.on('end', () => {
                    try {
                        const json = JSON.parse(body);

                        if (!Array.isArray(json.classGroups)) {
                            res.statusCode = 400;
                            return res.end('Invalid payload: classGroups[] required');
                        }

                        generateTailwindSafeClasses({
                            classGroups: json.classGroups,
                            outputFile: json?.outputFile,
                            componentName: json?.componentName
                        });

                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({ success: true }));
                    } 
                    catch (e) {
                        res.statusCode = 500;
                        res.end(`Error: ${e.message}`);
                    }
                });
            });
        }
    };
}