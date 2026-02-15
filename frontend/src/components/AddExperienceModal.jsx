import React, { useState } from 'react';
import Modal from './Modal';

const AddExperienceModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        isCurrent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        // Reset form or let parent handle close which resets
        setFormData({ role: '', company: '', location: '', startDate: '', endDate: '', isCurrent: false });
    };

    return (
        <Modal title="Add Experience" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Role *</label>
                    <input name="role" value={formData.role} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Company Name *</label>
                    <input name="company" value={formData.company} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input name="location" value={formData.location} onChange={handleChange} className="input" />
                </div>

                <div className="form-group">
                    <label>Date of joining</label>
                    <input type="text" name="startDate" placeholder="dd-mm-yyyy" value={formData.startDate} onChange={handleChange} className="input" />
                </div>
                <div className="form-group">
                    <label>Date of leaving</label>
                    <input type="text" name="endDate" placeholder="dd-mm-yyyy" value={formData.endDate} onChange={handleChange} className="input" disabled={formData.isCurrent} />
                </div>

                <div className="form-group" style={{ display: 'flex', gap: '8px' }}>
                    <input type="checkbox" name="isCurrent" checked={formData.isCurrent} onChange={handleChange} />
                    <label>Currently working in this role</label>
                </div>

                <div className="flex justify-between" style={{ marginTop: '24px' }}>
                    <button type="button" onClick={onClose} style={{ background: 'transparent', color: '#3b82f6', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '8px 16px', fontWeight: '500', cursor: 'pointer' }}>CANCEL</button>
                    <button type="submit" className="btn" style={{ background: '#3b82f6', color: 'white', padding: '8px 24px', borderRadius: '4px' }}>ADD</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddExperienceModal;
