const express = require('express');
const router = express.Router();
const {
    getProfile,
    updateProfile,
    addSkill,
    endorseSkill,
    addExperience,
    addEducation,
    addCertification,
    addSocial,
    updateSocial,
    deleteSocial,
    updateCareerVision,
    updateExperience,
    deleteExperience,
    updateEducation,
    deleteEducation,
    updateCertification,
    deleteCertification,
    addProject,
    updateProject,
    deleteProject,
    trackResumeDownload
} = require('../controllers/profileController');

router.get('/', getProfile);
router.put('/', updateProfile);
router.post('/skill', addSkill);
router.post('/endorse', endorseSkill);
router.post('/experience', addExperience);
router.post('/education', addEducation);
router.post('/certification', addCertification);
router.post('/social', addSocial);
router.put('/social', updateSocial);
router.delete('/social/:platform', deleteSocial);
router.put('/career-vision', updateCareerVision);

router.put('/experience/:id', updateExperience);
router.delete('/experience/:id', deleteExperience);

router.put('/education/:id', updateEducation);
router.delete('/education/:id', deleteEducation);

router.put('/certification/:id', updateCertification);
router.delete('/certification/:id', deleteCertification);

router.post('/project', addProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);
router.post('/resume-download', trackResumeDownload);

module.exports = router;
