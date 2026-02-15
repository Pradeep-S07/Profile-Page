import React, { useState } from 'react';
import Modal from './Modal';


const AddExperienceModal = ({ isOpen, onClose, onAdd, initialData }) => {
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        isCurrent: false
    });

    React.useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                role: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                isCurrent: false
            });
        }
    }, [initialData, isOpen]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
            endDate: formData.isCurrent ? 'Present' : formData.endDate
        };
        onAdd(dataToSubmit);
    };

    const inputStyle = {
        width: '100%',
        padding: '10px 12px',
        borderRadius: '4px',
        border: '1px solid #e5e7eb',
        fontSize: '14px',
        color: '#374151',
        outline: 'none',
        transition: 'border-color 0.2s',
        marginBottom: '16px',
        boxSizing: 'border-box', // Ensure padding doesn't affect width
        height: '42px'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '6px',
        fontWeight: '500'
    };

    return (
        <Modal title={initialData ? "Edit Experience" : "Add Experience"} isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit} style={{ padding: '0' }}>
                <div>
                    <label style={labelStyle}>Role *</label>
                    <input
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label style={labelStyle}>Company Name *</label>
                    <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label style={labelStyle}>Location</label>
                    <input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Date of joining</label>
                    <input
                        type="text"
                        name="startDate"
                        placeholder="dd-mm-yyyy"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                        value={formData.startDate}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                    />
                </div>
                <div>
                    <label style={labelStyle}>Date of leaving</label>
                    <input
                        type="text"
                        name="endDate"
                        placeholder="dd-mm-yyyy"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                        value={formData.endDate}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: formData.isCurrent ? 'not-allowed' : 'pointer', backgroundColor: formData.isCurrent ? '#f3f4f6' : 'white' }}
                        disabled={formData.isCurrent}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', marginTop: '-8px' }}>
                    <input
                        type="checkbox"
                        name="isCurrent"
                        checked={formData.isCurrent}
                        onChange={handleChange}
                        id="isCurrent"
                        style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <label htmlFor="isCurrent" style={{ fontSize: '14px', color: '#6b7280', cursor: 'pointer', fontWeight: '400' }}>
                        Currently working in this role
                    </label>
                </div>

                <div className="flex justify-end gap-3">
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

export default AddExperienceModal;
