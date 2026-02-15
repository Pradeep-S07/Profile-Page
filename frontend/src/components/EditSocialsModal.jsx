import React, { useState } from 'react';
import Modal from './Modal';
import { Check, Trash2 } from 'lucide-react';

const EditSocialsModal = ({ isOpen, onClose, socials, onUpdate, onDelete }) => {
    // We'll manage local state for edits if needed, but for now assuming direct updates or simple list
    // The screenshot shows a list of inputs with Check (save) and Trash (delete) icons.

    // In a real app, you might want to edit the link. 
    // Let's assume passed `socials` is an object or array of objects { platform, link }

    // Mapping object to array for rendering if necessary
    const socialList = Object.entries(socials || {}).map(([platform, link]) => ({ platform, link }));

    const handleLinkChange = (platform, newLink) => {
        onUpdate(platform, newLink);
    };

    const inputStyle = {
        width: '100%',
        padding: '10px 12px',
        borderRadius: '4px',
        border: '1px solid #e5e7eb',
        fontSize: '14px',
        color: '#374151',
        outline: 'none',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '6px',
        fontWeight: '500',
        minWidth: '80px'
    };

    return (
        <Modal title="Edit Socials" isOpen={isOpen} onClose={onClose}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {socialList.map(({ platform, link }) => (
                    <div key={platform} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <label style={labelStyle}>{platform} :</label>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <input
                                value={link}
                                onChange={(e) => handleLinkChange(platform, e.target.value)}
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#10b981' }}>
                                <Check size={18} />
                            </button>
                            <button
                                onClick={() => onDelete(platform)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-3" style={{ marginTop: '32px' }}>
                <button
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
                    onClick={onClose}
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
                    DONE
                </button>
            </div>
        </Modal>
    );
};

export default EditSocialsModal;
