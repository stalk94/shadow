import React, { forwardRef, useRef } from 'react';
import { FormWrapper, ValidatorBottomLabel } from './atomize';
import { useClientValidity, useCache } from '../hooks';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import type { BaseProps } from './type';


const BaseInput = forwardRef<HTMLInputElement, BaseProps>(function BaseInput(
    {
        style,
        type,
        placeholder,
        size,
        colorBorder,
        labelLeft,
        labelTop,
        labelRight,
        validator,
        onChange,
        value,
        required,
        styleInput,
        className,
        ...props
    },
    ref
) {
    const uid = useUids(type);
    const { styles } = useTheme();
    const [val, setVal] = useCache(value);

    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;
    const isInvalid = useClientValidity(inputRef);


    const handle = (newValue: string) => {
        setVal(newValue);
        onChange?.(newValue);
    }
    

    return(
        <>
            <style>
                {`
                    input[data-id="${uid}"]::placeholder {
                        color: ${styles?.input?.placeholderColor}
                    }
                `}
            </style>
            
            <FormWrapper 
                data-id={uid}
                labelLeft={labelLeft}
                labelRight={labelRight}
                labelTop={labelTop}
                size={size}
                colorBorder={colorBorder}
                validator={validator}
                required={required}
                style={style}
                styleInput={styleInput}
                className={className}
            >
                <input
                    ref={inputRef}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    style={{
                        display: 'block', 
                        width: '100%', 
                        color: (style?.color ?? styles?.input?.fontColor)
                    }}
                    value={val}
                    onChange={(e)=> handle(e.target.value)}
                    { ...props }
                />
                { validator && typeof validator === 'boolean' && isInvalid &&
                    <ValidatorBottomLabel data-id={props['data-id']}>
                        !
                    </ValidatorBottomLabel>
                }
            </FormWrapper>
            { validator && isInvalid &&
                (typeof validator === 'object' || typeof validator === 'string') && 
                    <ValidatorBottomLabel data-id={props['data-id']}>
                        { validator }
                    </ValidatorBottomLabel>
            }
        </>
    );
});

export default BaseInput;