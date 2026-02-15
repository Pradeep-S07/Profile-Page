import React, { useState } from 'react';
import Modal from './Modal';

const AddCertificationModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        provider: '',
        link: '',
        certificateId: '',
        date: '',
        expiryDate: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({ title: '', provider: '', link: '', certificateId: '', date: '', expiryDate: '', description: '' });
    };

    return (
        <Modal title="Add Certification" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Certification *</label>
                    <input name="title" value={formData.title} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Provider *</label>
                    <input name="provider" value={formData.provider} onChange={handleChange} className="input" required />
                </div>
                <div className="form-group">
                    <label>Certificate Url</label>
                    <input name="link" value={formData.link} onChange={handleChange} className="input" />
                </div>
                <div className="form-group">
                    <label>Certificate ID</label>
                    <input name="certificateId" value={formData.certificateId} onChange={handleChange} className="input" />
                </div>

                <div className="form-group">
                    <label>Issued Date</label>
                    <input type="text" name="date" placeholder="dd-mm-yyyy" value={formData.date} onChange={handleChange} className="input" />
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" name="expiryDate" placeholder="dd-mm-yyyy" value={formData.expiryDate} onChange={handleChange} className="input" />
                </div>

                <div className="form-group">
                    <label>Description <small>(max character 200 - 0)</small></label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="input" rows="3"></textarea>
                </div>

                <div className="flex justify-between" style={{ marginTop: '24px' }}>
                    <button type="button" onClick={onClose} style={{ background: 'transparent', color: '#3b82f6', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '8px 16px', fontWeight: '500', cursor: 'pointer' }}>CANCEL</button>
                    <button type="submit" className="btn" style={{ background: '#3b82f6', color: 'white', padding: '8px 24px', borderRadius: '4px' }}>ADD</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddCertificationModal;
