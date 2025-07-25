import { safeTw } from './plugins';

const naskClasses = [
    'mask-heart', 'mask-squircle',
    'mask-hexagon', 'mask-hexagon-2', 'mask-decagon', 'mask-pentagon', 
    'mask-diamond', 'mask-circle', 
    'mask-star', 'mask-star-2', 
    'mask-triangle', 'mask mask-triangle-2', 'mask-triangle-3', 'mask-triangle-4'
];
const justifyMap = [
    'items-start',
    'items-center',
    'items-end',
    'items-stretch',
    'items-baseline'
];
const alignMap = [
    'justify-start',
    'justify-center',
    'justify-end',
    'justify-between',
    'justify-around',
    'justify-evenly'
];


const allSizesClassDaisy =(namesClassDaisy)=> {
    const breakpoints = ['', 'sm', 'md', 'lg', 'xl']; // '' = без breakpoint
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    const combinations: string[] = [];

    for (const className of namesClassDaisy) {
        for (const size of sizes) {
            for (const bp of breakpoints) {
                const prefix = bp ? `${bp}:` : '';
                combinations.push(`${prefix}${className}-${size}`);
            }
        }
    }
    return combinations.join(' ');
}
export const __generate =()=> {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const namesClassDaisy = ['radio', 'input', 'textarea', 'select', 'btn', 'badge', 'divider', 'tabs', 'table'];
    const colors = ['primary', 'secondary', 'error', 'accent', 'success', 'warning', 'info'];
    const nameBreacpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
    const breakpoints = ['', 'sm:', 'md:', 'lg:', 'xl:'];

    // breacpoints
    const classesSize = namesClassDaisy.flatMap(name =>
        nameBreacpoints.map(bp => [`${name}-${bp}`])
    ).flat();
    // системные цвета
    const classesColors = namesClassDaisy.flatMap(name =>
        colors.map(color => [`${name}-${color}`])
    ).flat();
    // autosize
    const classes = breakpoints.flatMap(bp =>
        sizes.map(size => [`${bp}w-${size}`, `${bp}h-${size}`])
    ).flat();

    // any token
    classes.push(
        ...justifyMap, ...alignMap, ...naskClasses,
        'top-1', 'top-2', 'top-1 sm:top-1 md:top-2 lg:top-2 xl:top-2', 
        'rotate-180', 'dropdown-hover', 
        'btn-soft', 'btn-info', 'btn-gnost', 'btn-outline btn-dash btn-link btn-circle btn-square',
        'badge-soft', 'badge-gnost badge-outline badge-dash badge-link',
        'divider-start divider-end divider-horizontal divider-vertical',
        'tabs-lift tabs-box tabs-border tab-active', 'chat-start chat-end',
        'tooltip-top tooltip-bottom tooltip-left tooltip-right tooltip-open',
        'modal-open', 'mask',
        'indicator-center indicator-start indicator-end indicator-top indicator-middle indicator-bottom',
        'footer-horizontal footer-vertical footer-center footer-title',
        'menu-xs menu-sm menu-md menu-lg menu-xl', 
        'text-shadow-xs text-shadow-md text-shadow-sm text-shadow-lg text-shadow-2xs',
        'dock-xs dock-sm dock-md dock-lg dock-xl'
    );
    const allDaisySizeClass = allSizesClassDaisy(namesClassDaisy);

    safeTw([...classes, ...classesSize, ...classesColors, allDaisySizeClass]);
}

