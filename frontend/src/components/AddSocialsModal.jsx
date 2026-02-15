import React, { useState } from 'react';
import Modal from './Modal';

const AddSocialsModal = ({ isOpen, onClose, onAdd }) => {
    const [platform, setPlatform] = useState('LinkedIn');
    const [link, setLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ platform, link });
        setPlatform('LinkedIn');
        setLink('');
        onClose();
    };

    const inputStyle = {
        width: '100%',
        padding: '10px 12px',
        borderRadius: '4px',
        border: '1px solid #e5e7eb',
        fontSize: '14px',
        color: '#374151',
        outline: 'none',
        marginBottom: '16px',
        boxSizing: 'border-box'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '6px',
        fontWeight: '500'
    };

    return (
        <Modal title="Add Socials" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>Social Media *</label>
                    <div style={{ position: 'relative', marginBottom: '16px' }}>
                        <select
                            value={platform}
                            onChange={(e) => setPlatform(e.target.value)}
                            style={{ ...inputStyle, appearance: 'none', background: 'white', marginBottom: 0 }}
                        >
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="GitHub">GitHub</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Website">Website</option>
                        </select>
                        <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Link *</label>
                    <input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        style={inputStyle}
                        required
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
                            background: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            padding: '8px 24px',
                            borderRadius: '4px',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        ADD
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddSocialsModal;
