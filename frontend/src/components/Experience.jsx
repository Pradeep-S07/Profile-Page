import React, { useState, useRef, useEffect } from 'react';
import { Building2, Plus, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const Experience = ({ experience, onAdd, onEdit, onDelete }) => {
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
                <span>Experience</span>
                <button onClick={onAdd} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                    <Plus size={20} />
                </button>
            </div>

            <div className="flex flex-col gap-6">
                {experience.map((exp, index) => (
                    <div key={exp._id || index} className="flex gap-4" style={{ position: 'relative' }}>
                        {/* Icon */}
                        <div style={{
                            width: '48px', height: '48px',
                            background: '#eff6ff',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid #dbeafe',
                            color: '#3b82f6',
                            flexShrink: 0
                        }}>
                            <Building2 size={24} strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1 }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>{exp.role}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{exp.company}, {exp.location}</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                        Started: {exp.startDate} - Ended: {exp.endDate}
                                    </p>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <button
                                        onClick={() => setActiveMenu(activeMenu === (exp._id || index) ? null : (exp._id || index))}
                                        style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}
                                    >
                                        <MoreVertical size={18} />
                                    </button>

                                    {activeMenu === (exp._id || index) && (
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
                                                onClick={() => { onEdit(exp); setActiveMenu(null); }}
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
                                                onClick={() => { onDelete(exp._id); setActiveMenu(null); }}
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

export default Experience;
