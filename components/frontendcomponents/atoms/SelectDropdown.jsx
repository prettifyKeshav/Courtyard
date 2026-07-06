// "use client";

// import React from "react";
// // import Select from "react-select";
// const Select = dynamic(() => import("react-select"), { ssr: false });
// import dynamic from "next/dynamic";


// const SelectDropdown = ({
//     options = [],
//     value,
//     onChange,
//     placeholder = "Select...",
//     isMulti = false,
//     isSearchable = true,
//     isClearable = true,
//     isDisabled = false,
//     className = "",
// }) => {

//     const customStyles = {
//         control: (provided, state) => ({
//             ...provided,
//             borderColor: state.isFocused ? "#6366f1" : "#e5e7eb",
//             boxShadow: "none",
//             "&:hover": {
//                 borderColor: "#6366f1",
//             },
//             padding: "4px",
//             borderRadius: "10px",
//             minHeight: "44px",
//         }),
//         option: (provided, state) => ({
//             ...provided,
//             backgroundColor: state.isFocused ? "#eef2ff" : "#fff",
//             color: "#111827",
//             padding: "10px",
//             cursor: "pointer",
//         }),
//         multiValue: (provided) => ({
//             ...provided,
//             backgroundColor: "#eef2ff",
//         }),
//         multiValueLabel: (provided) => ({
//             ...provided,
//             color: "#4338ca",
//         }),
//         multiValueRemove: (provided) => ({
//             ...provided,
//             color: "#4338ca",
//             ":hover": {
//                 backgroundColor: "#c7d2fe",
//                 color: "#1e1b4b",
//             },
//         }),
//     };

//     return (
//         <div className={`w-full ${className}`}>
//             <Select
//                 options={options}
//                 value={value}
//                 onChange={onChange}
//                 placeholder={placeholder}
//                 isMulti={isMulti}
//                 isSearchable={isSearchable}
//                 isClearable={isClearable}
//                 isDisabled={isDisabled}
//                 styles={customStyles}
//                 classNamePrefix="react-select"
//             />
//         </div>
//     );
// };

// export default SelectDropdown;

'use client'
import React from "react";
import Select from "react-select";
import { useEffect, useState } from 'react'

const customStyles = {
    control: (base, state) => ({
        ...base,
        width: "100%",
        height: "100%",
        color: "#fff",
        backgroundColor: "none",
        border: "none",
        borderRadius: "none",
        borderBottom: state.isFocused ? "1px solid #173254" : "1px solid #666666",
        boxShadow: state.isFocused ? "none" : "none",
        '&:hover': {
            borderColor: '#173254'
        }
    }),
    label: (base, state) => ({
        ...base,
        display: "none"
    }),
    valueContainer: (base, state) => ({
        ...base,
        height: "100%",
        color: state.isFocused ? "#173254" : "#173254",
        padding: 0,
    }),
    input: (base, state) => ({
        ...base,
        width: "100%",
        height: "32px",
        color: "#173254",
        padding: 0,
        minHeight: "100%",
        minWidth: "100%"
    }),
    placeholder: (base, state) => ({
        ...base,
        color: "#666",
        fontFamily: 'Lato'
    }),
    option: (base, state) => ({
        ...base,
        width: "100%",
        background: state.isFocused ? "#fff" : "#fff",
        marginBottom: "5px",
        fontSize: "16px",
        padding: "4px 10px",
        color: state.isFocused ? "#173254" : "#173254",
        "&:hover": {
            background: "#173254",
            color: "#fff"
        }
    }),
    singleValue: (base, state) => ({
        ...base,
        color: "#173254",
    }),
    menu: (base) => ({
        ...base,
        zIndex: 10,
    })
}

export default function SelectDropdown({
    id,
    placeholder,
    options,
    selectedValue,
    onValueChange,
    styles: overrideStyles
}) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const mergedStyles = {
        ...customStyles,
        ...(overrideStyles || {})
    };

    if (!isClient) return null
    return (
        <Select
            inputId={id}
            placeholder={placeholder}
            options={options}
            value={selectedValue}
            onChange={onValueChange}
            styles={mergedStyles}
            components={{ IndicatorSeparator: () => null }}
        />
    );
}