import React, { useState } from 'react';
import { Mail, Download, Share2, MoreVertical, Edit, Link, Eye, Settings } from 'lucide-react';

const ProfileHeader = ({ profile, onEdit }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    if (!profile) return null;

    return (
        <div className="card" style={{ padding: '32px' }}>
            <div className="header-top-row">
                {/* Avatar */}
                <div style={{ flexShrink: 0 }}>
                    <img
                        src={profile.profilePicture || "https://ui-avatars.com/api/?name=Pradeep+Selvam"}
                        alt={profile.name}
                        className="header-avatar"
                    />
                </div>

                {/* Main Info */}
                <div style={{ flex: 1, position: 'relative' }}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 style={{ fontSize: '1.5rem', margin: '0 0 4px 0', color: 'var(--text-main)' }}>
                                {profile.name}
                                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: '400', marginLeft: '8px' }}>
                                    ( {profile.role} )
                                </span>
                            </h1>
                            <p className="text-gray text-sm" style={{ marginBottom: '12px' }}>{profile.location}</p>
                        </div>

                        {/* Dropdown Menu */}
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                            >
                                <MoreVertical size={20} />
                            </button>

                            {showDropdown && (
                                <div style={{
                                    position: 'absolute', right: 0, top: '100%',
                                    background: 'var(--card-bg)', border: '1px solid var(--border-color)',
                                    borderRadius: '8px', boxShadow: 'var(--shadow-sm)',
                                    zIndex: 10, minWidth: '180px', padding: '8px 0'
                                }}>
                                    <button onClick={() => { setShowDropdown(false); onEdit(); }} className="dropdown-item" style={{
                                        display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', textAlign: 'left'
                                    }}>
                                        <Edit size={16} color="#3b82f6" /> Edit Profile
                                    </button>
                                    <button className="dropdown-item" style={{
                                        display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', textAlign: 'left'
                                    }}>
                                        <Share2 size={16} color="#3b82f6" /> Share Profile
                                    </button>
                                    <button className="dropdown-item" style={{
                                        display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', textAlign: 'left'
                                    }}>
                                        <Link size={16} color="#3b82f6" /> Add Socials
                                    </button>
                                    <button className="dropdown-item" style={{
                                        display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', textAlign: 'left'
                                    }}>
                                        <Eye size={16} color="#3b82f6" /> Career Vision
                                    </button>
                                    <button className="dropdown-item" style={{
                                        display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', textAlign: 'left'
                                    }}>
                                        <Settings size={16} color="#3b82f6" /> Settings
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <p style={{ lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '16px', fontSize: '0.95rem', maxWidth: '800px' }}>
                        {profile.bio}
                    </p>

                    <div className="flex flex-col gap-2">
                        <a href={`mailto:${profile.email}`} className="flex items-center gap-2" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            <Mail size={16} /> {profile.email}
                        </a>
                        <div style={{ marginTop: '8px' }}>
                            <button className="btn-primary">
                                <Download size={16} /> Download Resume
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Card */}
                <div style={{ width: '280px', flexShrink: 0 }}>
                    <div style={{
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        background: 'var(--card-bg)',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: '12px' }}>
                            <div className="flex items-center gap-4">
                                {/* Coin Icon Placeholder */}
                                <div style={{ width: '32px', height: '32px', background: '#d97706', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>🏆</div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>League</div>
                                    <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{profile.league}</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Rank</div>
                                <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{profile.rank}</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Points</div>
                                <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{profile.points}</div>
                            </div>
                        </div>
                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', textAlign: 'center' }}>
                            <a href="#" style={{ color: '#d97706', fontSize: '0.875rem', fontWeight: '500', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                View My Rewards <span style={{ fontSize: '12px' }}>›</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
