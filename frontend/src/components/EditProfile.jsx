import React, { useState, useEffect } from 'react';
import { X, Pen } from 'lucide-react';
import Modal from './Modal';

const EditProfile = ({ profile, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        bio: '',
        profilePicture: '',
        resumeLink: ''
    });

    useEffect(() => {
        if (profile) {
            const names = profile.name ? profile.name.split(' ') : ['', ''];
            setFormData({
                firstName: names[0] || '',
                lastName: names.slice(1).join(' ') || '',
                email: profile.email || '',
                location: profile.location || '',
                bio: profile.bio || '',
                profilePicture: profile.profilePicture || '',
                resumeLink: profile.resumeLink || ''
            });
        }
    }, [profile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const base64 = await convertToBase64(file);
            setFormData(prev => ({ ...prev, [field]: base64 }));
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProfile = {
            ...profile,
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            location: formData.location,
            bio: formData.bio,
            profilePicture: formData.profilePicture, // Send Base64 string
            resumeLink: formData.resumeLink      // Send Base64 string (or link)
        };
        onSave(updatedProfile);
        onClose();
    };

    const inputStyle = {
        width: '100%',
        padding: '10px 12px',
        borderRadius: '4px',
        border: '1px solid var(--border-color)',
        fontSize: '14px',
        color: 'var(--text-main)',
        background: 'var(--bg-color)',
        outline: 'none',
        marginBottom: '16px'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        color: 'var(--text-secondary)',
        marginBottom: '6px',
        fontWeight: '500'
    };

    return (
        <Modal isOpen={true} onClose={onClose}>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={formData.profilePicture || profile?.profilePicture || "https://ui-avatars.com/api/?name=User"}
                            alt="Profile"
                            style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid white', objectFit: 'cover' }}
                        />
                        <label htmlFor="profilePicInput" style={{
                            position: 'absolute', bottom: '0', right: '0',
                            background: '#3b82f6', color: 'white',
                            border: 'none', borderRadius: '50%',
                            width: '24px', height: '24px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer'
                        }}>
                            <Pen size={12} />
                        </label>
                        <input
                            id="profilePicInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileChange(e, 'profilePicture')}
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
                    <div>
                        <label style={labelStyle}>First Name *</label>
                        <input name="firstName" value={formData.firstName} onChange={handleChange} style={inputStyle} required />
                    </div>

                    <div>
                        <label style={labelStyle}>Last Name *</label>
                        <input name="lastName" value={formData.lastName} onChange={handleChange} style={inputStyle} required />
                    </div>

                    <div>
                        <label style={labelStyle}>Email ID *</label>
                        <input name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                    </div>

                    <div>
                        <label style={labelStyle}>Location</label>
                        <input name="location" value={formData.location} onChange={handleChange} style={inputStyle} />
                    </div>

                    <div>
                        <label style={labelStyle}>Resume (PDF/Doc)</label>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'resumeLink')}
                            style={{ ...inputStyle, padding: '6px' }}
                        />
                        {formData.resumeLink && <span style={{ fontSize: '12px', color: 'green', display: 'block', marginTop: '-12px', marginBottom: '12px' }}>Resume Selected/Uploaded</span>}
                    </div>

                    <div>
                        <div className="flex justify-between">
                            <label style={labelStyle}>Bio</label>
                            <span style={{ fontSize: '10px', color: '#9ca3af' }}>max character (500 - 453)</span>
                        </div>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={4}
                            style={{ ...inputStyle, resize: 'none' }}
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
            </div>
        </Modal>
    );
};

export default EditProfile;
