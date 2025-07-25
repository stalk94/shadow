import { forwardRef } from 'react';
import type { BaseFooter } from './types';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';


const Footer = forwardRef<HTMLElement, BaseFooter>(function Footer(
    {
        style = {},
        className,
        children,
        isCenter,
        orientation = 'horizontal',
        orientationBreacpoints,
        ...props
    },
    ref
) {
    const { variants, autosizes } = useTheme();


    return (
        <footer 
            ref={ref} 
            className={cs(`
                footer
                ${isCenter && 'footer-center'} 
                footer-${orientation}
                ${className}
            `)}
            style={style}
            { ...props }
        >
           { children }
        </footer>
    );
});


export default Footer;