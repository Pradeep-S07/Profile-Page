import React, { useState, useRef, useEffect } from 'react';
import { Layers, Plus, MoreVertical, Edit2, Trash2, ExternalLink, Github } from 'lucide-react';

const Projects = ({ projects, onAdd, onEdit, onDelete }) => {
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
                <span>Projects</span>
                <button onClick={onAdd} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                    <Plus size={20} />
                </button>
            </div>

            <div className="flex flex-col gap-6">
                {projects && projects.map((project, index) => (
                    <div key={project._id || index} className="flex gap-4" style={{ position: 'relative' }}>
                        {/* Icon/Image */}
                        <div style={{
                            width: '48px', height: '48px',
                            background: 'var(--bg-color)',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid var(--border-color)',
                            color: 'var(--primary)',
                            flexShrink: 0,
                            overflow: 'hidden'
                        }}>
                            {project.imageUrl ? (
                                <img src={project.imageUrl} alt="Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <Layers size={24} strokeWidth={1.5} />
                            )}
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1 }}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '4px' }}>{project.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>{project.description}</p>

                                    {/* Tech Stack */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                                        {project.technologies && project.technologies.map(tech => (
                                            <span key={tech} style={{
                                                fontSize: '0.75rem',
                                                background: 'var(--bg-color)',
                                                color: 'var(--text-secondary)',
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                border: '1px solid var(--border-color)'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--primary)', textDecoration: 'none' }}>
                                                <ExternalLink size={12} /> Live Demo
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                                                <Github size={12} /> Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <button
                                        onClick={() => setActiveMenu(activeMenu === (project._id || index) ? null : (project._id || index))}
                                        style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '4px' }}
                                    >
                                        <MoreVertical size={18} />
                                    </button>

                                    {activeMenu === (project._id || index) && (
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
                                                onClick={() => { onEdit(project); setActiveMenu(null); }}
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
                                                onClick={() => { onDelete(project._id); setActiveMenu(null); }}
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

export default Projects;
