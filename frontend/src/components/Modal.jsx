import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ title, isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
            <div className="modal-content" style={{
                background: 'var(--card-bg)', padding: '24px', borderRadius: '12px', width: '500px', maxHeight: '90vh', overflowY: 'auto'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#5b6b7c' }}>{title}</h2>
                    {/* No X button in header per screenshot, but good UX to have or rely on actions */}
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
