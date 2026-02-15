import React from 'react';
import { GraduationCap, MoreVertical, Plus } from 'lucide-react';

const Education = ({ education, onAdd }) => {
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
                    <div key={index} className="flex gap-4">
                        {/* Icon */}
                        <div style={{
                            width: '48px', height: '48px',
                            background: '#f9fafb', // Greyish background in screenshot for Education icon? Actually looks white/grey.
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid #e5e7eb',
                            color: '#4b5563', // Grey icon color
                            flexShrink: 0
                        }}>
                            <GraduationCap size={24} strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1 }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '2px' }}>{edu.degree}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>{edu.institution}</p>
                                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '4px' }}>
                                        {edu.startDate} — {edu.endDate}
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

export default Education;
