import React, { useState } from 'react';
import Modal from './Modal';

const AddEducationModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        location: '',
        startDate: '',
        isCurrent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({ institution: '', degree: '', fieldOfStudy: '', location: '', startDate: '', isCurrent: false });
    };

    return (
        <Modal title="Add Your Education" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>College *</label>
                    <input name="institution" value={formData.institution} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Degree *</label>
                    <input name="degree" value={formData.degree} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Field of Study *</label>
                    <input name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Location *</label>
                    <input name="location" value={formData.location} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Date of Joining *</label>
                    <input type="text" name="startDate" placeholder="dd-mm-yyyy" value={formData.startDate} onChange={handleChange} className="input" required />
                </div>

                <div className="form-group" style={{ display: 'flex', gap: '8px' }}>
                    <input type="checkbox" name="isCurrent" checked={formData.isCurrent} onChange={handleChange} />
                    <label>Currently studying here / not completed *</label>
                </div>

                <div className="flex justify-between" style={{ marginTop: '24px' }}>
                    <button type="button" onClick={onClose} style={{ background: 'transparent', color: '#3b82f6', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '8px 16px', fontWeight: '500', cursor: 'pointer' }}>Cancel</button>
                    <button type="submit" className="btn" style={{ background: '#3b82f6', color: 'white', padding: '8px 24px', borderRadius: '4px' }}>Add</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddEducationModal;
