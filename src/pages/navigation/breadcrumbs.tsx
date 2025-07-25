import Breadcrumbs from '@/components/breadcrumbs';
import { Section, Grid as BreadcrumbsGrid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Divdder, Typography } from '@/index';
import { Cog8ToothIcon, HomeIcon, TrashIcon } from '@heroicons/react/24/outline';
import { baseMeta } from '../meta';


export default function InfoBreadcrumbs(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* default */}
            <Section
                title="Breadcrumbs"
                description="Basic breadcrumb navigation"
                code={`<Breadcrumbs size="sm" pathname="catalog/test" />`}
            >
                <div className="flex justify-start">
                    <Breadcrumbs
                        size="md"
                        pathname="catalog/test"
                        Link={({ href, children }) => (
                            <div onClick={() => console.log(href)}>{children}</div>
                        )}
                    />
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Different sizes"
                code={sizes
                    .map((size) => `<Breadcrumbs size="${size}" pathname="catalog/test" />`)
                    .join('\n')}
            >
                <BreadcrumbsGrid className="flex-col">
                    {sizes.map((size, i) => (
                        <div key={i} className="flex flex-col justify-start">
                            <Breadcrumbs
                                size={size}
                                pathname={`${size}/test`}
                                Link={({ href, children }) => (
                                    <div onClick={() => console.log(href)}>{children}</div>
                                )}
                            />
                        </div>
                    ))}
                </BreadcrumbsGrid>
            </Section>

            {/* colors */}
            <Section
                title="Colors"
                description="Different theme colors"
                code={colors
                    .map(
                        (color) =>
                            `<Breadcrumbs size="sm" color="${color}" pathname="catalog/test" />`
                    )
                    .join('\n')}
            >
                <BreadcrumbsGrid className="flex-col">
                    {colors.map((color, i) => (
                        <div key={i} className="flex flex-col">
                            <Breadcrumbs
                                size="sm"
                                color={color}
                                pathname={`${color}/test`}
                                Link={({ href, children }) => (
                                    <div onClick={() => console.log(href)}>{children}</div>
                                )}
                            />
                        </div>
                    ))}
                </BreadcrumbsGrid>
            </Section>
        </div>
    );
}

const { children, ...rest } = baseMeta;
InfoBreadcrumbs.meta = {
   ...rest,
    pathname: {
        values: ['string'],
        type: 'string',
        description: 'path'
    }, 
    Link: {
        values: ['ComponentType<{ href: string; children: React.ReactNode }>'],
        type: 'func',
        description: ''
    }, 
    separator: {
        values: ['string', 'ReactNode'],
        default: '›',
        type: 'enum',
        description: 'path'
    }, 
    nameMap: {
        values: ['Record<string, string>'],
        type: 'object',
        description: 'path map'
    },
    classNameHomeicon: baseMeta.className
}