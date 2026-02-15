const express = require('express');
const router = express.Router();
const {
    getProfile,
    updateProfile,
    addSkill,
    endorseSkill,
    addExperience,
    addEducation,
    addCertification
} = require('../controllers/profileController');

router.get('/', getProfile);
router.put('/', updateProfile);
router.post('/skill', addSkill);
router.post('/endorse', endorseSkill);
router.post('/experience', addExperience);
router.post('/education', addEducation);
router.post('/certification', addCertification);

module.exports = router;
