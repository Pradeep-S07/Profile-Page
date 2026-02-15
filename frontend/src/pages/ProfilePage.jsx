import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileHeader from '../components/ProfileHeader';
import CareerVision from '../components/CareerVision';
import ProfileCompleted from '../components/ProfileCompleted';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certification from '../components/Certification';
import EditProfile from '../components/EditProfile';
import AddExperienceModal from '../components/AddExperienceModal';
import AddEducationModal from '../components/AddEducationModal';
import AddCertificationModal from '../components/AddCertificationModal';

import { getProfile, endorseSkill, addSkill, updateProfile, addExperience, addEducation, addCertification } from '../services/api';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalState, setModalState] = useState({
        editProfile: false,
        addExp: false,
        addEdu: false,
        addCert: false
    });

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = () => {
        getProfile().then(res => {
            setProfile(res.data);
            setLoading(false);
        }).catch(err => setLoading(false));
    };

    const handleEndorse = async (skillName) => {
        try {
            const res = await endorseSkill(skillName);
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    const handleAddSkill = async (skillName) => {
        try {
            const res = await addSkill({ name: skillName });
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    const handleUpdateProfile = async (data) => {
        try {
            const res = await updateProfile(data);
            setProfile(res.data);
            setModalState(prev => ({ ...prev, editProfile: false }));
        } catch (error) { console.error(error); }
    };

    const handleAddExperience = async (data) => {
        try {
            const res = await addExperience(data);
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addExp: false }));
        } catch (error) { console.error(error); }
    };

    const handleAddEducation = async (data) => {
        try {
            const res = await addEducation(data);
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addEdu: false }));
        } catch (error) { console.error(error); }
    };

    const handleAddCertification = async (data) => {
        try {
            const res = await addCertification(data);
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addCert: false }));
        } catch (error) { console.error(error); }
    };


    if (!profile) return <div className="p-8 text-center">Loading Profile...</div>;

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-color)', transition: 'background 0.3s' }}>
            <Navbar profilePic={profile.profilePicture} />

            <div className="container page-content">
                {/* Header Section */}
                <ProfileHeader profile={profile} onEdit={() => setModalState({ ...modalState, editProfile: true })} />

                {/* Career Vision Section */}
                <div style={{ marginBottom: '24px' }}>
                    <CareerVision vision={profile.careerVision} />
                </div>

                {/* Main Content Grid */}
                <div className="grid-layout">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <ProfileCompleted />
                        <Skills
                            skills={profile.skills}
                            onEndorse={handleEndorse}
                            onAddSkill={handleAddSkill}
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <div style={{ position: 'relative' }}>
                            <Experience experience={profile.experience} />
                            {/* Overlay the plus button action */}
                            <div style={{ position: 'absolute', top: '24px', right: '24px', pointerEvents: 'none' }}>
                                {/* Transparent hit area or handled via prop in component if refactored. 
                                     For now, let's wrap the component or reuse the button inside it.
                                     Actually, I need to pass the "onAdd" prop to Experience if I want that + button to work.
                                     Let's modify Experience.jsx, Education.jsx, Certification.jsx to accept onAdd prop.
                                 */}
                            </div>
                        </div>

                        {/* 
                           I need to pass the open modal handlers to the components so their + buttons work.
                           I will update Experience, Education, Certification components to accept an onAdd prop.
                        */}
                        <Experience experience={profile.experience} onAdd={() => setModalState({ ...modalState, addExp: true })} />
                        <Education education={profile.education} onAdd={() => setModalState({ ...modalState, addEdu: true })} />
                        <Certification certifications={profile.certifications} onAdd={() => setModalState({ ...modalState, addCert: true })} />
                    </div>
                </div>
            </div>

            {/* Modals */}
            {modalState.editProfile && (
                <EditProfile
                    profile={profile}
                    onSave={handleUpdateProfile}
                    onClose={() => setModalState({ ...modalState, editProfile: false })}
                />
            )}

            <AddExperienceModal
                isOpen={modalState.addExp}
                onClose={() => setModalState({ ...modalState, addExp: false })}
                onAdd={handleAddExperience}
            />

            <AddEducationModal
                isOpen={modalState.addEdu}
                onClose={() => setModalState({ ...modalState, addEdu: false })}
                onAdd={handleAddEducation}
            />

            <AddCertificationModal
                isOpen={modalState.addCert}
                onClose={() => setModalState({ ...modalState, addCert: false })}
                onAdd={handleAddCertification}
            />

        </div>
    );
};

export default ProfilePage;
