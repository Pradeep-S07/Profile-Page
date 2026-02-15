import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProfileCompleted = () => {
    return (
        <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: 1 }}>
                <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>🎓</span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>Profile Completed</h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                    Mission complete! Profile at 100% and you're good to go!
                </p>
            </div>
            <div>
                <CheckCircle size={28} color="#10b981" />
            </div>
        </div>
    );
};

export default ProfileCompleted;
