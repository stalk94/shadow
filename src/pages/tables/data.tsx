import { DataTable, ColumnDataTable } from '@/components/tables/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import Avatar from '@/components/avatar';
import { Flag } from '@/index';


const tab = {
    xs: 'xss',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg'
}
const testData = [
    { name: "Amy Elsner", country: 'RU', rating: 4, data: '03-11-2025', image: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' },
    { name: "John Doe", country: 'US', rating: 5, data: '12-05-2024', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: "Emma Smith", country: 'UK', rating: 3, data: '07-19-2023', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: "Carlos Rodríguez", country: 'ES', rating: 4, data: '11-22-2022', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: "Sofia Müller", country: 'DE', rating: 2, data: '05-14-2021', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: "Luca Moretti", country: 'IT', rating: 5, data: '09-30-2020', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: "Isabelle Dubois", country: 'FR', rating: 3, data: '04-10-2019', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: "Hiroshi Tanaka", country: 'JP', rating: 4, data: '08-27-2025', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: "Chen Wei", country: 'CN', rating: 5, data: '06-13-2024', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { name: "Olga Ivanova", country: 'RU', rating: 2, data: '03-03-2023', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { name: "Pedro Gomez", country: 'MX', rating: 3, data: '01-29-2022', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { name: "Fatima Al-Farsi", country: 'AE', rating: 4, data: '11-05-2021', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { name: "William Johnson", country: 'CA', rating: 5, data: '07-21-2020', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: "Elena Petrova", country: 'RU', rating: 3, data: '02-14-2019', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { name: "Mohammed Hassan", country: 'EG', rating: 2, data: '12-09-2025', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { name: "Aisha Khan", country: 'PK', rating: 4, data: '05-18-2024', image: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { name: "Benjamin Andersson", country: 'SE', rating: 5, data: '08-26-2023', image: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { name: "Laura García", country: 'AR', rating: 3, data: '10-31-2022', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { name: "Nathan Brown", country: 'AU', rating: 4, data: '06-20-2021', image: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { name: "Mia Nilsson", country: 'NO', rating: 2, data: '03-25-2020', image: 'https://randomuser.me/api/portraits/women/19.jpg' }
];



export default function InfoDataTable(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section 
                title="List" 
                description="кнопка" 
                code={`<Badge size='sm'>default</Badge>`}
            >
                <div className="flex justify-center">
                    <DataTable
                        size='sm'
                        value={testData}
                        header={
                            <div>
                                header
                            </div>
                        }
                        footer={
                            <div>
                                footer
                            </div>
                        }
                    >
                        <ColumnDataTable
                            header="Image"
                            field="image"
                            body={(data) => <Avatar size={tab.sm} src={data?.image} />}
                        />
                        <ColumnDataTable header="Name" filter filterPlaceholder="По именам" sortable field="name" />
                        <ColumnDataTable
                            header="Rating"
                            sortable
                            field="rating"
                            body={(data) => (
                                <div className={`rating rating-xs`}>
                                    {[1, 2, 3, 4, 5].slice(0, data.rating).map((_, i) => (
                                        <div
                                            key={i}
                                            className="mask mask-star bg-amber-300"
                                            aria-label="1 star"
                                        />
                                    ))}
                                </div>
                            )}
                        />
                        <ColumnDataTable header="Data" sortable field="data" />
                        <ColumnDataTable
                            header="Country"
                            sortable
                            field="country"
                            body={(data) => <Flag size='sm' code={data?.country} />}
                        />
                    </DataTable>
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="DataTable sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Badge size="${size}" shadow="sm">${size}</Badge>`)
                    .join('\n')}
            >
                <div className="flex flex-col justify-center items-center">
                    {sizes.map((size) => (
                        <div key={size} className="flex min-w-80 flex-col border-1 rounded border-[#535353] mb-2">
                            <DataTable
                                size={size}
                                value={[testData[1]]}
                                header={
                                    <div>
                                        {size}
                                    </div>
                                }
                                footer={
                                    <div>
                                        footer
                                    </div>
                                }
                            >
                                <ColumnDataTable
                                    header="Image"
                                    field="image"
                                    body={(data) => <Avatar size={tab[size]} src={data?.image} />}
                                />
                                <ColumnDataTable header="Name" filter filterPlaceholder="По именам" sortable field="name" />
                                <ColumnDataTable header="Data" sortable field="data" />
                                <ColumnDataTable
                                    header="Country"
                                    sortable
                                    field="country"
                                    body={(data) => <Flag size={size} code={data?.country} />}
                                />
                            </DataTable>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


InfoDataTable.meta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    title: {
        values: ['string'],
        type: 'string',
        description: 'Заголовок компонента, если предусмотрен.'
    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        type: 'enum',
        description: 'Размер тени компонента.'
    },
    variant: {
        values: ['contained', 'outline', 'dash', 'soft', 'ghost', 'link'],
        default: 'contained',
        type: 'enum',
        description: 'Визуальный стиль компонента.'
    },
    color: {
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    isGradient: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Включает градиентную заливку.'
    },
    selected: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отображает компонент как выбранный.'
    },
    disabled: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отключает компонент.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}