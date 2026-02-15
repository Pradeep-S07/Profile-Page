import React, { useState } from 'react';
import { X } from 'lucide-react';

const EditProfile = ({ profile, onSave, onClose }) => {
    const [formData, setFormData] = useState({ ...profile });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Handle nested careerVision
        if (name.startsWith('vision.')) {
            const field = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                careerVision: { ...prev.careerVision, [field]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal">
            <div className="modal-content animate-fadeIn">
                <div className="flex justify-between" style={{ marginBottom: '24px' }}>
                    <h2>Edit Profile</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <input name="role" value={formData.role} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Location</label>
                        <input name="location" value={formData.location} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={3}
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                        />
                    </div>

                    <hr style={{ margin: '24px 0', borderColor: 'var(--border-color)' }} />
                    <h3>Career Vision</h3>

                    <div className="form-group">
                        <label>Vision Title</label>
                        <input name="vision.title" value={formData.careerVision?.title || ''} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Target Domain</label>
                        <input name="vision.targetDomain" value={formData.careerVision?.targetDomain || ''} onChange={handleChange} />
                    </div>

                    <div className="flex" style={{ marginTop: '24px', justifyContent: 'flex-end' }}>
                        <button type="button" onClick={onClose} className="btn-outline" style={{ marginRight: '16px' }}>Cancel</button>
                        <button type="submit" className="btn">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
