import Indicator from '@/components/utils/indicator';
import Avatar from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';

const positions = ["top", "middle", "bottom"];
const alignts = ["start", "center", "end"];


export default function InfoIndicator(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* basic */}
            <Section
                title="Basic"
                description="Badge over avatar"
                code={`
                    <Indicator content="new">
                        <Avatar src="..." />
                    </Indicator>
                `}
            >
                <div className="flex justify-center">
                    <Indicator className="badge badge-success" content="new">
                        <Avatar
                            size="lg"
                            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        />
                    </Indicator>
                </div>
            </Section>

            {/* positions */}
            <Section
                title="Positions"
                description="Custom placement of indicator"
                code={positions
                    .map(
                        (pos) =>
                            `<Indicator position="${pos}" content="${pos}"><Avatar /></Indicator>`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center flex-wrap gap-6">
                    {positions.map((pos, i) => (
                        <Indicator
                            key={i}
                            className="badge badge-success"
                            content={pos}
                            position={pos}
                            shadow="lg"
                        >
                            <Avatar
                                size="lg"
                                src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                            />
                        </Indicator>
                    ))}
                </div>
            </Section>

            {/* alignments */}
            <Section
                title="Alignments"
                description="Align indicator in corners"
                code={alignts
                    .map(
                        (al) =>
                            `<Indicator align="${al}" content="${al}"><Avatar /></Indicator>`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center flex-wrap gap-6">
                    {alignts.map((al, i) => (
                        <Indicator
                            key={i}
                            className="badge badge-warning"
                            content={al}
                            align={al}
                            shadow="lg"
                        >
                            <Avatar
                                size="lg"
                                src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                            />
                        </Indicator>
                    ))}
                </div>
            </Section>

            {/* custom content */}
            <Section
                title="Custom badge"
                description="Custom content style"
                code={`
                    <Indicator content="1" className="rounded-b-xl border-2 bg-[#343434] p-1 text-green-500">
                        <Avatar />
                    </Indicator>
                `}
            >
                <div className="flex justify-center">
                    <Indicator
                        className="rounded-b-xl border-2 bg-[#343434] p-1 mt-1 text-xs text-center text-green-500"
                        content="1"
                    >
                        <Avatar
                            size="lg"
                            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        />
                    </Indicator>
                </div>
            </Section>

            {/* multiple indicators */}
            <Section
                title="Multiple"
                description="Many indicators per item"
                code={`
                    <Indicator content={[{ position: 'top-end', align: 'start', content: '●' }, ...]}>
                        <Avatar />
                    </Indicator>
                `}
            >
                <div className="flex justify-center">
                    <Indicator
                        content={positions.flatMap((pos) =>
                            alignts.map((al) => ({
                                content: '●',
                                position: pos,
                                align: al,
                                className:
                                    'badge badge-success badge-dash hover:bg-[#67f667] cursor-pointer',
                            }))
                        )}
                    >
                        <Avatar
                            size="lg"
                            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        />
                    </Indicator>
                </div>
            </Section>
        </div>
    );
}



InfoIndicator.meta = {
    ...baseMeta,
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Content inside the component. Will be wrapped `content`.'
    },
    content: {
        values: ['ItemIndicator[]', 'React.ReactNode'],
        type: 'enum',
        description: 'Wraps `children`.'
    },
    position: {
        values: ["top", "middle", "bottom"],
        type: 'enum',
        default: 'top',
        description: ''
    },
    align: {
        values: ["start", "center", "end"],
        type: 'enum',
        default: 'end',
        description: ''
    }
}