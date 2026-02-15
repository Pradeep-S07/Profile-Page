import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const AddProjectModal = ({ isOpen, onClose, onAdd, initialData }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: '',
        link: '',
        githubLink: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title || '',
                description: initialData.description || '',
                technologies: initialData.technologies ? initialData.technologies.join(', ') : '',
                link: initialData.link || '',
                githubLink: initialData.githubLink || ''
            });
        } else {
            setFormData({
                title: '',
                description: '',
                technologies: '',
                link: '',
                githubLink: ''
            });
        }
    }, [initialData, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
            technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(t => t)
        };
        onAdd(dataToSubmit);
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
        marginBottom: '6px',
        fontWeight: '500'
    };

    return (
        <Modal title={initialData ? "Edit Project" : "Add Project"} isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>Project Title *</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label style={labelStyle}>Description *</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                        required
                    />
                </div>
                <div>
                    <label style={labelStyle}>Technologies (comma separated)</label>
                    <input
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleChange}
                        placeholder="React, Node.js, MongoDB"
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label style={labelStyle}>Live Demo Link</label>
                    <input
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label style={labelStyle}>GitHub Repository Link</label>
                    <input
                        name="githubLink"
                        value={formData.githubLink}
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
                            color: 'var(--primary)',
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
                            background: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            padding: '8px 24px',
                            borderRadius: '4px',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        {initialData ? "UPDATE" : "ADD"}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AddProjectModal;
