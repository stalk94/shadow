import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import writeFilePlugin from './plugins/vite-write';
import viteSource from './plugins/vite-source';
import viteSafeTw from './plugins/vite-tw-safe';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';


export default defineConfig({
    root: 'src',
    publicDir: '../public',
    plugins: [
        react(), 
        tailwindcss(), 
        viteSafeTw(), 
        viteSource(), 
        writeFilePlugin(), 
        tsconfigPaths()
    ],
    server: {
        port: 3001
    },
    build: {
        outDir: 'dist',
        lib: {
            entry: 'index.ts',
            name: 'MyLib',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
            //src: path.resolve(__dirname, 'src'),
        }
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env': '{}'
    },
});