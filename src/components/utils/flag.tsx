import React from 'react';
import type { FlagProps } from './types';

const imgNot = 'https://static.thenounproject.com/png/3405765-200.png';
const countryCodes = {
    "Russia": "RU",
    "Germany": "DE",
    "United States": "US",
    "France": "FR",
    "Italy": "IT",
    "Spain": "ES",
    "United Kingdom": "GB",
    "China": "CN",
    "Japan": "JP",
    "Canada": "CA",
    "Australia": "AU",
    "Brazil": "BR",
    "India": "IN",
    "Mexico": "MX",
    "Ukraine": "UA",
    "Belarus": "BY",
    "Kazakhstan": "KZ",
    "Turkey": "TR",
    "Sweden": "SE",
    "Netherlands": "NL",
    "Switzerland": "CH",
    "South Korea": "KR",
    "Albania": "AL",
    "Andorra": "AD",
    "Armenia": "AM",
    "Austria": "AT",
    "Azerbaijan": "AZ",
    "Belgium": "BE",
    "Bosnia and Herzegovina": "BA",
    "Bulgaria": "BG",
    "Croatia": "HR",
    "Cyprus": "CY",
    "Czech Republic": "CZ",
    "Denmark": "DK",
    "Estonia": "EE",
    "Finland": "FI",
    "Georgia": "GE",
    "Greece": "GR",
    "Hungary": "HU",
    "Iceland": "IS",
    "Ireland": "IE",
    "Kosovo": "XK",
    "Latvia": "LV",
    "Liechtenstein": "LI",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Malta": "MT",
    "Moldova": "MD",
    "Monaco": "MC",
    "Montenegro": "ME",
    "North Macedonia": "MK",
    "Norway": "NO",
    "Poland": "PL",
    "Portugal": "PT",
    "Romania": "RO",
    "San Marino": "SM",
    "Serbia": "RS",
    "Slovakia": "SK",
    "Slovenia": "SI",
    "Vatican City": "VA"
}
const sizes = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 26,
    xl: 32,
    xxl: 48
}


export default ({ code, size = 'sm', margin }: FlagProps)=> {
    const chek =(code: string)=> {
        if(code) code = code.toUpperCase();
        if(code==='EN') code = 'GB';

        if(countryCodes[code]) return countryCodes[code];
        else return code;
    }
    
    return(
        <img 
            alt={`flag-${code}`} 
            style={{
                width: sizes[size] ?? 20,
                height: sizes[size] ?? 20,
                marginTop: margin ?? '4px'
            }}
            onError={(e)=> e.target.src = imgNot}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${chek(code)}.svg`}
        />
    );
}