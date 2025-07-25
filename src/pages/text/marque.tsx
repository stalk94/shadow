import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { MarqueText } from '@/components/text';
import TypographyInfo from './typography';


export default function InfoMarque(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="base" description=""
                code={`<MarqueText variant='button'>This converter creates fancy symbols. The explanation starts with unicode; an industry standard which</MarqueText>`}
            >
                <div className="flex justify-center">
                    <MarqueText variant='button'>
                        1 This converter creates fancy symbols. 2The explanation starts with unicode; an industry standard which
                    </MarqueText>
                </div>
            </Section>

            {/* speed */}
            <Section
                title="speed"
                description="x2 pxPerSecond = 200"
                code={variants
                    .map((variant) => `<MarqueText pxPerSecond={200} variant='button'>1 This converter creates fancy symbols</MarqueText>`)
                    .join('\n')
                }
            >
                 <div className="flex justify-center">
                    <MarqueText pxPerSecond={200} variant='button'>
                        1 This converter creates fancy symbols
                    </MarqueText>
                </div>
            </Section>


            {/* short text */}
            <Section
                title="short text"
                description="short width text requires more `copies`"
                code={variants
                    .map(
                        (variant, i) =>
                            `<MarqueText variant="h6" tracking='tighter' color="${colorsCustom[i]}">${variant}</MarqueText>`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center flex-col">
                    {variants.map((variant, i) => (
                        <div key={i} className="flex flex-col m-auto">
                            <MarqueText
                                key={variant}
                                variant='h6'
                                color={colorsCustom[i]}
                                tracking='tighter'
                            >
                                {variant}
                            </MarqueText>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


InfoMarque.meta = {
    ...TypographyInfo.meta,
    pxPerSecond: {
        values: ['number'],
        type: 'number',
        default: 100,
        description: 'Speed of the marquee animation in pixels per second.'
    },
    copies: {
        values: ['number'],
        type: 'number',
        default: 4,
        description: 'Number of duplicated elements to ensure smooth scrolling.'
    },
    pauseOnHover: {
        values: ['any'],
        type: 'boolean',
        default: 'false',
        description: 'Pauses the marquee animation when the user hovers over it.'
    },
    gap: {
        values: ['number'],
        type: 'number',
        default: 12,
        description: 'Space in pixels between repeated marquee items.'
    }
}