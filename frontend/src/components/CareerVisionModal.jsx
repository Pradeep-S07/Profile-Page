import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const CareerVisionModal = ({ isOpen, onClose, vision, onUpdate }) => {
    const [formData, setFormData] = useState({
        description: '', // "What Best Describes You?"
        aspiration: '',  // "What Is Your Long-Term Career Aspiration?"
        field: '',       // "Aspirational Field"
        inspiration: '', // "Who Is Your Inspiration?"
        currentAim: ''   // "What Are You Aiming For Right Now?"
    });

    useEffect(() => {
        if (vision) {
            setFormData({
                description: vision.description || '',
                aspiration: vision.aspiration || '',
                field: vision.field || '',
                inspiration: vision.inspiration || '',
                currentAim: vision.currentAim || ''
            });
        }
    }, [vision]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        onClose();
    };

    const inputStyle = {
        width: '100%',
        padding: '10px 12px',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        fontSize: '14px',
        color: 'var(--text-main)',
        background: 'var(--bg-color)',
        outline: 'none',
        marginBottom: '16px',
        boxSizing: 'border-box'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        color: 'var(--text-secondary)',
        fontWeight: '600',
        marginBottom: '8px'
    };

    return (
        <Modal title="Career Vision" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>What Best Describes You? *</label>
                    <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>What Is Your Long-Term Career Aspiration?*</label>
                    <input
                        name="aspiration"
                        value={formData.aspiration}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Aspirational Field*</label>
                    <input
                        name="field"
                        value={formData.field}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Who Is Your Inspiration?*</label>
                    <input
                        name="inspiration"
                        value={formData.inspiration}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>What Are You Aiming For Right Now?*</label>
                    <input
                        name="currentAim"
                        value={formData.currentAim}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div className="flex justify-end gap-3" style={{ marginTop: '24px' }}>
                    <button
                        type="button"
                        onClick={onClose}
                        style={{
                            background: 'transparent',
                            color: '#3b82f6',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '8px 16px',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        CANCEL
                    </button>
                    <button
                        type="submit"
                        style={{
                            background: '#eff6ff',
                            color: '#3b82f6',
                            border: 'none',
                            padding: '8px 24px',
                            borderRadius: '4px',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        UPDATE
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default CareerVisionModal;
