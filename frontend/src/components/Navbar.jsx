import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ profilePic }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="flex items-center gap-4">
                    {/* Logo Placeholder */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--text-main)' }}>
                        <div style={{ width: '24px', height: '24px', border: '2px solid currentColor', borderRadius: '4px', transform: 'rotate(45deg)' }}></div>
                        Gidy
                    </div>

                    <div className="nav-links flex" style={{ marginLeft: '40px', gap: '24px', fontWeight: '500', fontSize: '0.95rem' }}>
                        <a href="#" className="nav-link">Jobs</a>
                        <a href="#" className="nav-link">Hackathons</a>
                        <a href="#" className="nav-link">Projects</a>
                        <a href="#" className="nav-link">Tasks</a>
                        <a href="#" className="nav-link">Organization</a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="theme-toggle" title="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <div className="flex items-center gap-2">
                        <img
                            src={profilePic || "https://ui-avatars.com/api/?name=Pradeep+Selvam"}
                            alt="Profile"
                            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-main)' }}><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
