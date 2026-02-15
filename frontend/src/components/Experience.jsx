import React from 'react';
import { Building2, Plus, MoreVertical } from 'lucide-react';

const Experience = ({ experience, onAdd }) => {
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
                    <div key={index} className="flex gap-4">
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
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '2px' }}>{exp.role}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>{exp.company}, {exp.location}</p>
                                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '4px' }}>
                                        Started: {exp.startDate} - Ended: {exp.endDate}
                                    </p>
                                </div>
                                <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
