import React from 'react';
import { Sparkles } from 'lucide-react';

const CareerVision = ({ vision }) => {
    if (!vision) return null;

    return (
        <div className="card" style={{ padding: '24px 32px' }}>
            <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '400', marginBottom: '8px' }}>Your Career Vision</h3>
                <div className="flex justify-between items-center">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>{vision.title}</h2>
                    <div style={{ background: '#f3f4f6', padding: '8px', borderRadius: '50%' }}>
                        <Sparkles size={20} color="#f59e0b" fill="#f59e0b" />
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', marginTop: '24px' }}>
                <div>
                    <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '6px' }}>What you're growing into right now</p>
                    <p style={{ fontWeight: '500', color: '#111827', fontSize: '1rem' }}>{vision.currentRole}</p>
                </div>
                <div>
                    <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '6px' }}>The space you want to grow in</p>
                    <p style={{ fontWeight: '500', color: '#111827', fontSize: '1rem' }}>{vision.targetDomain}</p>
                </div>
                <div>
                    <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '6px' }}>Inspired by</p>
                    <p style={{ fontWeight: '500', color: '#111827', fontSize: '1rem' }}>{vision.inspiredBy}</p>
                </div>
            </div>
        </div>
    );
};

export default CareerVision;
