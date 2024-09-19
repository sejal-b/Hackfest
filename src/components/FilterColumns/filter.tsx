import React, { useEffect, useRef, useState } from 'react';

interface MultiSelectDropdownCheckboxProps {
    options: string[];
    onSelectionChange: (selectedOptions: string[]) => void;
    placeholder?: string;
}

const MultiSelectDropdownCheckbox: React.FC<MultiSelectDropdownCheckboxProps> = ({
                                                                                     options,
                                                                                     onSelectionChange,
                                                                                     placeholder = 'Filter',
                                                                                 }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const previousSelectedOptions = useRef<string[]>([]);

    const areSelectionsDifferent = (prev: string[], current: string[]) => {
        if (prev.length !== current.length) return true;
        return prev.some(item => !current.includes(item));
    };

    useEffect(() => {
        if (areSelectionsDifferent(previousSelectedOptions.current, selectedOptions)) {
            onSelectionChange(selectedOptions);
            previousSelectedOptions.current = [...selectedOptions];
        }
    }, [selectedOptions, onSelectionChange]);

    return (
        <div className="relative inline-block text-right ml-auto">
            <button
                type="button"
                onClick={toggleDropdown}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={isOpen}
                style={{ marginLeft: '8px' }}
            >
                {placeholder}
                <span className="ml-1" style={{color: 'black'}}>&#9660;</span>
            </button>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        {options.map((option) => (
                            <label
                                key={option}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiSelectDropdownCheckbox;
