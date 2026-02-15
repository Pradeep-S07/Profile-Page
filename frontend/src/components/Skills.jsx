import React, { useState } from 'react';
import { Plus, ThumbsUp } from 'lucide-react';

const Skills = ({ skills, onEndorse, onAddSkill }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newSkill, setNewSkill] = useState('');

    const handleAdd = () => {
        if (newSkill.trim()) {
            onAddSkill(newSkill.trim());
            setNewSkill('');
            setIsAdding(false);
        }
    };

    return (
        <div className="card">
            <div className="card-title">
                <span>Skills</span>
                <button onClick={() => setIsAdding(!isAdding)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                    <Plus size={20} />
                </button>
            </div>

            {isAdding && (
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <input
                        className="input"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Skill name"
                        style={{ padding: '6px' }}
                    />
                    <button onClick={handleAdd} className="btn-primary" style={{ padding: '6px 12px' }}>Add</button>
                </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill, idx) => (
                    <button
                        key={idx}
                        className="pill"
                        onClick={() => onEndorse(skill.name)}
                        title="Click to endorse"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                        {skill.name}
                        {skill.endorsements > 0 && (
                            <span style={{
                                fontSize: '0.75rem',
                                background: 'rgba(59, 130, 246, 0.1)',
                                padding: '2px 6px',
                                borderRadius: '10px',
                                color: 'var(--primary)',
                                display: 'flex', alignItems: 'center', gap: '2px'
                            }}>
                                <ThumbsUp size={10} />
                                {skill.endorsements}
                            </span>
                        )}
                    </button>
                ))}
            </div>
            <p style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                * Innovation Feature: Click a skill to endorse it!
            </p>
        </div>
    );
};

export default Skills;
