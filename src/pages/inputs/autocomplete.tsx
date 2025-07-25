import { AutoComplete } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoAutoComplete(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="ColorPicker"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <AutoComplete 
                        size='sm'
                        placeholder="autocomplete"
                        options={[
                            'apple',
                            'banana',
                            'egs',
                            'road',
                            'jam',
                            'olive'
                        ]}
                    />
                </div>
            </Section>
        </div>
    );
}


InfoAutoComplete.meta = {
    ...inputsMeta
}