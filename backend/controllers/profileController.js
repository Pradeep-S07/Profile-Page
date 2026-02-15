const Profile = require('../models/Profile');

// @desc    Get profile data
// @route   GET /api/profile
// @access  Public
const getProfile = async (req, res) => {
    try {
        let profile = await Profile.findOne();

        // Seed if not exists (for demo purposes)
        if (!profile) {
            profile = await Profile.create({
                name: "Pradeep Selvam",
                role: "Full Stack Developer",
                location: "Coimbatore",
                bio: "I am Pradeep Selvam, a passionate Full Stack Developer and Digital Marketer with a background in Information Technology. I have hands-on experience with the MERN stack, Java, Spring Boot, REST APIs, and UI/UX design using Figma. I also specialize in SEO and Email Marketing, having successfully ranked my own website on Google. I enjoy building scalable, user-focused applications and continuously learning new technologies to solve real-world problems.",
                email: "pradeepselvam2021@gmail.com",
                league: "Bronze",
                rank: 24,
                points: 100,
                skills: [
                    { name: "Java", endorsements: 0 },
                    { name: "MySQL", endorsements: 0 },
                    { name: "Python", endorsements: 0 },
                    { name: "JavaScript", endorsements: 0 },
                    { name: "React", endorsements: 0 },
                    { name: "MongoDB", endorsements: 0 },
                    { name: "Node.js", endorsements: 0 },
                    { name: "Express.js", endorsements: 0 },
                    { name: "Firebase", endorsements: 0 },
                    { name: "Vue.js", endorsements: 0 },
                    { name: "CI/CD", endorsements: 0 },
                    { name: "Docker", endorsements: 0 },
                    { name: "Git", endorsements: 0 },
                    { name: "REST APIs", endorsements: 0 }
                ],
                experience: [
                    {
                        role: "Full Stack Developer Intern",
                        company: "Cognifyz Technologies",
                        location: "Remote",
                        startDate: "Jun 2025",
                        endDate: "Jul 2025"
                    },
                    {
                        role: "Software Engineering Virtual Experience",
                        company: "JPMorganChase",
                        location: "Remote",
                        startDate: "Nov 2025",
                        endDate: "Jan 2026"
                    }
                ],
                education: [
                    {
                        degree: "B.Tech - IT",
                        institution: "K.G.I.S.L. Institute Of Technology, Coimbatore",
                        startDate: "Oct 2022",
                        endDate: "Present"
                    }
                ],
                certifications: [
                    {
                        title: "Jenkins For Beginners",
                        provider: "KodeKloud",
                        date: "Mar 2025",
                        link: "Certificate Link"
                    },
                    {
                        title: "Testing And Advanced REST With Spring Boot",
                        provider: "packt",
                        date: "May 2025",
                        link: "Certificate Link"
                    },
                    {
                        title: "Introduction To Android Mobile Application Development",
                        provider: "Meta",
                        date: "Jun 2025",
                        link: "Certificate Link"
                    },
                    {
                        title: "Build A Full Stack App Using React And Express",
                        provider: "Coursera",
                        date: "Aug 2025",
                        link: "Certificate Link"
                    }
                ],
                careerVision: {
                    title: "Head of Technology",
                    currentRole: "Software Developer",
                    targetDomain: "Learning & Development",
                    inspiredBy: "Pradeep"
                }
            });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update profile
// @route   PUT /api/profile
// @access  Public
const updateProfile = async (req, res) => {
    try {
        const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a skill
// @route   POST /api/profile/skill
// @access  Public
const addSkill = async (req, res) => {
    const { name } = req.body;
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.skills.push({ name, endorsements: 0 });
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Endorse a skill
// @route   POST /api/profile/endorse
// @access  Public
const endorseSkill = async (req, res) => {
    const { skillName } = req.body; // Expecting skillName in body
    try {
        const profile = await Profile.findOne();
        if (profile) {
            const skill = profile.skills.find(s => s.name === skillName);
            if (skill) {
                skill.endorsements += 1;
                await profile.save();
                res.status(200).json(profile);
            } else {
                res.status(404).json({ message: "Skill not found" });
            }
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add experience
// @route   POST /api/profile/experience
// @access  Public
const addExperience = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.experience.push(req.body);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add education
// @route   POST /api/profile/education
// @access  Public
const addEducation = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.education.push(req.body);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add certification
// @route   POST /api/profile/certification
// @access  Public
const addCertification = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.certifications.push(req.body);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProfile,
    updateProfile,
    addSkill,
    endorseSkill,
    addExperience,
    addEducation,
    addCertification
};
