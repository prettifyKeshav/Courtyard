"use client";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "@/src/hooks/useClickOutside";
import Image from "next/image";
import "@/uploads/styles/component/custom-dropdown/custom-dropdown.css"

const Select = ({
    className = "",
    variant = "",
    label,
    name,
    id,
    onChange,
    value,
    required = false,
    options = [],
    isLight = false,
    placeholder,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const selectRef = useRef(null);
    const searchRef = useRef(null);

    useClickOutside(selectRef, () => {
        setIsOpen(false);
        setSearch("");
    });

    const handleSelect = (val) => {
        onChange?.({ target: { name, value: val } });
        setIsOpen(false);
        setSearch("");
    };

    const handleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setSearch("");
    };

    useEffect(() => {
        if (isOpen && placeholder && searchRef.current) {
            setTimeout(() => searchRef.current?.focus(), 50);
        }
    }, [isOpen, placeholder]);

    const filteredOptions = placeholder
        ? options.filter((opt) =>
            opt.toLowerCase().includes(search.toLowerCase())
        )
        : options;

    return (
        <>
            <div
                ref={selectRef}
                className={`sel-root ${variant} ${isLight ? "sel-root--light" : ""} ${className}`}
                onClick={handleOpen}
            >
                <span className="sel-display">
                    {value || label}
                </span>

                <Image
                    src="/assets/icon/arrow-down-gray.svg"
                    alt="down"
                    width={20}
                    height={9}
                    className={`sel-arrow ${isOpen ? "sel-arrow--open" : ""}`}
                />

                <div
                    className={`sel-panel ${isOpen ? "sel-panel--open" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="sel-panel-inner">
                        <ul className="sel-list">

                            <li className="sel-group-label">{label}</li>

                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((opt) => (
                                    <li
                                        key={opt}
                                        className={`sel-option ${value === opt ? "sel-option--active" : ""}`}
                                        onClick={() => handleSelect(opt)}
                                    >
                                        {opt}
                                    </li>
                                ))
                            ) : (
                                <li className="sel-empty">No results found</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <select
                className="sel-native"
                name={name}
                id={id}
                value={value}
                required={required}
                onChange={onChange}
                readOnly
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;