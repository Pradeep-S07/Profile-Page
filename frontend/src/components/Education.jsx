import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, MoreVertical, Plus, Edit2, Trash2 } from 'lucide-react';

const Education = ({ education, onAdd, onEdit, onDelete }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="card">
            <div className="card-title">
                <span>Education</span>
                <button onClick={onAdd} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                    <Plus size={20} />
                </button>
            </div>

            <div className="flex flex-col gap-6">
                {education.map((edu, index) => (
                    <div key={edu._id || index} className="flex gap-4" style={{ position: 'relative' }}>
                        {/* Icon */}
                        <div style={{
                            width: '48px', height: '48px',
                            background: '#f9fafb',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid #e5e7eb',
                            color: '#4b5563',
                            flexShrink: 0
                        }}>
                            <GraduationCap size={24} strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1 }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>{edu.degree}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{edu.institution}</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                        {edu.startDate} — {edu.endDate}
                                    </p>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <button
                                        onClick={() => setActiveMenu(activeMenu === (edu._id || index) ? null : (edu._id || index))}
                                        style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}
                                    >
                                        <MoreVertical size={18} />
                                    </button>

                                    {activeMenu === (edu._id || index) && (
                                        <div ref={menuRef} style={{
                                            position: 'absolute',
                                            right: 0,
                                            top: '100%',
                                            background: 'var(--card-bg)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '6px',
                                            boxShadow: 'var(--shadow-sm)',
                                            zIndex: 10,
                                            minWidth: '120px',
                                            overflow: 'hidden'
                                        }}>
                                            <button
                                                onClick={() => { onEdit(edu); setActiveMenu(null); }}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '8px',
                                                    width: '100%', padding: '8px 12px',
                                                    background: 'none', border: 'none',
                                                    textAlign: 'left', cursor: 'pointer',
                                                    fontSize: '0.875rem', color: 'var(--text-main)'
                                                }}
                                                onMouseEnter={(e) => e.target.style.background = 'var(--bg-color)'}
                                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                            >
                                                <Edit2 size={14} /> Edit
                                            </button>
                                            <button
                                                onClick={() => { onDelete(edu._id); setActiveMenu(null); }}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '8px',
                                                    width: '100%', padding: '8px 12px',
                                                    background: 'none', border: 'none',
                                                    textAlign: 'left', cursor: 'pointer',
                                                    fontSize: '0.875rem', color: '#ef4444'
                                                }}
                                                onMouseEnter={(e) => e.target.style.background = 'var(--bg-color)'}
                                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                            >
                                                <Trash2 size={14} /> Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Education;
