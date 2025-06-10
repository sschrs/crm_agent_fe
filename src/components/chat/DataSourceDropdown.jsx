import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataSource } from "../../redux/slicers/sessionSlice";

export const DataSourceDropdown = () => {
    const session = useSelector(state => state.session);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    const options = [
        { value: "billing", label: "Billing" },
        { value: "usage", label: "Usage" },
        { value: "campaign", label: "Campaign" },
        { value: "crm", label: "Crm"}
    ];

    const toggleOption = (value) => {
        let newSelection;
        if (session.dataSource.includes(value)) {
            newSelection = session.dataSource.filter(item => item !== value);
        } else {
            newSelection = [...session.dataSource, value];
        }
        dispatch(setDataSource(newSelection));
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedLabels = options
        .filter(opt => session.dataSource.includes(opt.value))
        .map(opt => opt.label)
        .join(", ") || "Select Data Sources";

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button
                className="form-select text-start"
                type="button"
                onClick={() => setOpen(!open)}
            >
                {selectedLabels}
            </button>
            {open && (
                <div className="dropdown-menu show w-100 p-2 border">
                    {options.map((opt) => (
                        <div className="form-check" key={opt.value}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`ds-${opt.value}`}
                                checked={session.dataSource.includes(opt.value)}
                                onChange={() => toggleOption(opt.value)}
                            />
                            <label className="form-check-label" htmlFor={`ds-${opt.value}`}>
                                {opt.label}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
