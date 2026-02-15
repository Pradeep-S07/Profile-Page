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
import AddSocialsModal from '../components/AddSocialsModal';
import EditSocialsModal from '../components/EditSocialsModal';
import CareerVisionModal from '../components/CareerVisionModal';
import Projects from '../components/Projects';
import AddProjectModal from '../components/AddProjectModal';

import {
    getProfile, endorseSkill, addSkill, updateProfile,
    addExperience, addEducation, addCertification,
    addSocial, updateSocial, deleteSocial, updateCareerVision,
    updateExperience, deleteExperience, updateEducation, deleteEducation,
    updateCertification, deleteCertification,
    addProject, updateProject, deleteProject
} from '../services/api';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalState, setModalState] = useState({
        editProfile: false,
        addExp: false,
        addEdu: false,
        addCert: false,
        addSocial: false,
        editSocial: false,
        careerVision: false,
        addProject: false
    });
    const [editingItem, setEditingItem] = useState(null);

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

    const handleSaveExperience = async (data) => {
        try {
            let res;
            if (editingItem && editingItem._id) {
                res = await updateExperience(editingItem._id, data);
            } else {
                res = await addExperience(data);
            }
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addExp: false }));
            setEditingItem(null);
        } catch (error) { console.error(error); }
    };

    const handleDeleteExperience = async (id) => {
        if (!window.confirm("Are you sure you want to delete this experience?")) return;
        try {
            const res = await deleteExperience(id);
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    const handleSaveEducation = async (data) => {
        try {
            let res;
            if (editingItem && editingItem._id) {
                res = await updateEducation(editingItem._id, data);
            } else {
                res = await addEducation(data);
            }
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addEdu: false }));
            setEditingItem(null);
        } catch (error) { console.error(error); }
    };

    const handleDeleteEducation = async (id) => {
        if (!window.confirm("Are you sure you want to delete this education?")) return;
        try {
            const res = await deleteEducation(id);
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    const handleSaveCertification = async (data) => {
        try {
            let res;
            if (editingItem && editingItem._id) {
                res = await updateCertification(editingItem._id, data);
            } else {
                res = await addCertification(data);
            }
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addCert: false }));
            setEditingItem(null);
        } catch (error) { console.error(error); }
    };

    const handleDeleteCertification = async (id) => {
        if (!window.confirm("Are you sure you want to delete this certification?")) return;
        try {
            const res = await deleteCertification(id);
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    const handleSaveProject = async (data) => {
        try {
            let res;
            if (editingItem && editingItem._id) {
                res = await updateProject(editingItem._id, data);
            } else {
                res = await addProject(data);
            }
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addProject: false }));
            setEditingItem(null);
        } catch (error) { console.error(error); }
    }

    const handleDeleteProject = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            const res = await deleteProject(id);
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    // New Handlers
    const handleAddSocial = async (data) => {
        try {
            const res = await addSocial(data);
            setProfile(res.data);
            setModalState(prev => ({ ...prev, addSocial: false }));
        } catch (error) { console.error(error); }
    };

    const handleUpdateSocial = async (platform, link) => {
        try {
            const res = await updateSocial({ platform, link });
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    const handleDeleteSocial = async (platform) => {
        try {
            const res = await deleteSocial(platform);
            setProfile(res.data);
        } catch (error) { console.error(error); }
    };

    const handleUpdateCareerVision = async (data) => {
        try {
            const res = await updateCareerVision(data);
            setProfile(res.data);
            setModalState(prev => ({ ...prev, careerVision: false }));
        } catch (error) { console.error(error); }
    };


    if (!profile) return <div className="p-8 text-center">Loading Profile...</div>;

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-color)', transition: 'background 0.3s' }}>
            <Navbar profilePic={profile.profilePicture} />

            <div className="container page-content">
                {/* Header Section */}
                <ProfileHeader
                    profile={profile}
                    onEdit={() => setModalState(prev => ({ ...prev, editProfile: true }))}
                    onAddSocial={() => setModalState(prev => ({ ...prev, addSocial: true }))}
                    onEditSocial={() => setModalState(prev => ({ ...prev, editSocial: true }))}
                    onCareerVision={() => setModalState(prev => ({ ...prev, careerVision: true }))}
                />

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
                        <Experience
                            experience={profile.experience}
                            onAdd={() => { setEditingItem(null); setModalState(prev => ({ ...prev, addExp: true })); }}
                            onEdit={(item) => { setEditingItem(item); setModalState(prev => ({ ...prev, addExp: true })); }}
                            onDelete={handleDeleteExperience}
                        />
                        <Education
                            education={profile.education}
                            onAdd={() => { setEditingItem(null); setModalState(prev => ({ ...prev, addEdu: true })); }}
                            onEdit={(item) => { setEditingItem(item); setModalState(prev => ({ ...prev, addEdu: true })); }}
                            onDelete={handleDeleteEducation}
                        />
                        <Certification
                            certifications={profile.certifications}
                            onAdd={() => { setEditingItem(null); setModalState(prev => ({ ...prev, addCert: true })); }}
                            onEdit={(item) => { setEditingItem(item); setModalState(prev => ({ ...prev, addCert: true })); }}
                            onDelete={handleDeleteCertification}
                        />

                        <Projects
                            projects={profile.projects}
                            onAdd={() => { setEditingItem(null); setModalState(prev => ({ ...prev, addProject: true })); }}
                            onEdit={(item) => { setEditingItem(item); setModalState(prev => ({ ...prev, addProject: true })); }}
                            onDelete={handleDeleteProject}
                        />
                    </div>
                </div>
            </div>

            {/* Modals */}
            {modalState.editProfile && (
                <EditProfile
                    profile={profile}
                    onSave={handleUpdateProfile}
                    onClose={() => setModalState(prev => ({ ...prev, editProfile: false }))}
                />
            )}

            <AddExperienceModal
                isOpen={modalState.addExp}
                onClose={() => { setModalState(prev => ({ ...prev, addExp: false })); setEditingItem(null); }}
                onAdd={handleSaveExperience}
                initialData={editingItem}
            />

            <AddEducationModal
                isOpen={modalState.addEdu}
                onClose={() => { setModalState(prev => ({ ...prev, addEdu: false })); setEditingItem(null); }}
                onAdd={handleSaveEducation}
                initialData={editingItem}
            />

            <AddCertificationModal
                isOpen={modalState.addCert}
                onClose={() => { setModalState(prev => ({ ...prev, addCert: false })); setEditingItem(null); }}
                onAdd={handleSaveCertification}
                initialData={editingItem}
            />

            <AddProjectModal
                isOpen={modalState.addProject}
                onClose={() => { setModalState(prev => ({ ...prev, addProject: false })); setEditingItem(null); }}
                onAdd={handleSaveProject}
                initialData={editingItem}
            />

            <AddSocialsModal
                isOpen={modalState.addSocial}
                onClose={() => setModalState(prev => ({ ...prev, addSocial: false }))}
                onAdd={handleAddSocial}
            />

            <EditSocialsModal
                isOpen={modalState.editSocial}
                onClose={() => setModalState(prev => ({ ...prev, editSocial: false }))}
                socials={profile.socials}
                onUpdate={handleUpdateSocial}
                onDelete={handleDeleteSocial}
            />

            <CareerVisionModal
                isOpen={modalState.careerVision}
                onClose={() => setModalState(prev => ({ ...prev, careerVision: false }))}
                vision={profile.careerVision}
                onUpdate={handleUpdateCareerVision}
            />

        </div>
    );
};

export default ProfilePage;
