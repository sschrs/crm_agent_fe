import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKnowledgeBase } from "../../redux/slicers/sessionSlice";
import axios from "axios";
import { newKnowledgeBase } from "../../api/knowledgeBase";

export const KnowledgeBaseDropdown = () => {
    const dispatch = useDispatch();
    const session = useSelector((state) => state.session);
    const selected = session.knowledgeBase || [];

    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newName, setNewName] = useState("");
    const [newFile, setNewFile] = useState(null);
    const dropdownRef = useRef();

    const options = [
        { label: "Knowledge 1", value: "knowledge1" },
        { label: "Knowledge 2", value: "knowledge2" },
        { label: "Knowledge 3", value: "knowledge3" },
        { label: "New Knowledge Base", value: "new" }
    ];

    const toggleOption = (value) => {
        const updated = selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value];

        dispatch(setKnowledgeBase(updated));
    };

    const selectedLabels =
        selected.length === 0
            ? "Select Knowledge Base"
            : options
                  .filter((opt) => selected.includes(opt.value))
                  .map((opt) => opt.label)
                  .join(", ");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleUpload = async () => {
        if (!newName || !newFile) return;

        const formData = new FormData();
        formData.append("name", newName);
        formData.append("file", newFile);

        try {
            const response = await newKnowledgeBase(formData);

            const newValue = response.data.value;
            dispatch(setKnowledgeBase([...selected, newValue]));
            setShowModal(false);
            setNewName("");
            setNewFile(null);
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    return (
        <>
            <div className="dropdown w-100" ref={dropdownRef}>
                <div
                    className="form-select text-start"
                    onClick={() => setOpen(!open)}
                    style={{ cursor: "pointer", userSelect: "none" }}
                >
                    {selectedLabels}
                </div>

                {open && (
                    <div className="dropdown-menu show w-100 p-2 border">
                        {options.map((opt) => {
                            const isNew = opt.value === "new";
                            return (
                                <div
                                    className="form-check"
                                    key={opt.value}
                                    onClick={() => {
                                        if (isNew) {
                                            setShowModal(true);
                                            setOpen(false);
                                        }
                                    }}
                                    style={{ cursor: isNew ? "pointer" : "default" }}
                                >
                                    {!isNew ? (
                                        <>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`kb-${opt.value}`}
                                                checked={selected.includes(opt.value)}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    toggleOption(opt.value);
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`kb-${opt.value}`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {opt.label}
                                            </label>
                                        </>
                                    ) : (
                                        <span className="form-check-label text-primary">
                                            ➕ {opt.label}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Knowledge Base</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Upload File</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => setNewFile(e.target.files[0])}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleUpload}>
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
