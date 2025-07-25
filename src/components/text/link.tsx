import type { LinkProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';
import Typography from './Typography';


const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
    {
        style = {},
        children,
        size,
        color,
        className,
        ...props
    },
    ref
) {
    const { variants } = useTheme();


    return (
        <Typography
            as='a'
            ref={ref}
            className={`hover:opacity-70 link ${className ?? ''}`}
            style={{
                color: variants[color] ?? color,
                ...style
            }}
            { ...props }
        >
            { children }
        </Typography>
    )
});


export default Link;