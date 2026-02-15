import React, { useState } from 'react';
import Modal from './Modal';

const AddCertificationModal = ({ isOpen, onClose, onAdd, initialData }) => {
    const [formData, setFormData] = useState({
        title: '',
        provider: '',
        link: '',
        certificateId: '',
        date: '',
        expiryDate: '',
        description: ''
    });

    React.useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                title: '',
                provider: '',
                link: '',
                certificateId: '',
                date: '',
                expiryDate: '',
                description: ''
            });
        }
    }, [initialData, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
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
        boxSizing: 'border-box',
        height: '42px'
    };

    const textareaStyle = {
        ...inputStyle,
        height: 'auto',
        resize: 'vertical',
        fontFamily: 'inherit'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '6px',
        fontWeight: '500'
    };

    return (
        <Modal title={initialData ? "Edit Certification" : "Add Certification"} isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>Certification *</label>
                    <input name="title" value={formData.title} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                    <label style={labelStyle}>Provider *</label>
                    <input name="provider" value={formData.provider} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                    <label style={labelStyle}>Certificate Url</label>
                    <input name="link" value={formData.link} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                    <label style={labelStyle}>Certificate ID</label>
                    <input name="certificateId" value={formData.certificateId} onChange={handleChange} style={inputStyle} />
                </div>

                <div>
                    <label style={labelStyle}>Issued Date</label>
                    <input
                        type="text"
                        name="date"
                        placeholder="dd-mm-yyyy"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                        value={formData.date}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                    />
                </div>
                <div>
                    <label style={labelStyle}>Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        placeholder="dd-mm-yyyy"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                        value={formData.expiryDate}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                    />
                </div>

                <div>
                    <div className="flex justify-between">
                        <label style={labelStyle}>Description</label>
                        <small style={{ fontSize: '10px', color: '#9ca3af' }}>max character 200 - 0</small>
                    </div>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        style={textareaStyle}
                        rows="3"
                    ></textarea>
                </div>

                <div className="flex justify-end gap-3" style={{ marginTop: '8px' }}>
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
                            cursor: 'pointer',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}
                    >
                        {initialData ? "UPDATE" : "ADD"}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddCertificationModal;
