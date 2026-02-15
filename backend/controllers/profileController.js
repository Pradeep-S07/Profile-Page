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
                socials: {
                    LinkedIn: "https://linkedin.com/in/pradeepselvam",
                    GitHub: "https://github.com/pradeepselvam",
                    Website: "https://pradeepselvam.com"
                },
                projects: [
                    {
                        title: "E-Commerce Platform",
                        description: "A full-featured online store built with React and Node.js.",
                        technologies: ["React", "Redux", "Node.js", "MongoDB"],
                        link: "#",
                        githubLink: "https://github.com/pradeepselvam/ecommerce",
                        imageUrl: ""
                    },
                    {
                        title: "Portfolio Website",
                        description: "Personal portfolio showcasing projects and skills.",
                        technologies: ["React", "Framer Motion", "CSS"],
                        link: "#",
                        githubLink: "https://github.com/pradeepselvam/portfolio",
                        imageUrl: ""
                    }
                ],
                meta: {
                    resumeDownloads: 12,
                    profileViews: 104
                },
                careerVision: {
                    description: "Passionate Developer",
                    aspiration: "Head of Technology",
                    field: "EdTech",
                    inspiration: "My Mentor",
                    currentAim: "Mastering MERN Stack"
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
        const updateData = { ...req.body };
        delete updateData._id;
        delete updateData.createdAt;
        delete updateData.updatedAt;

        const profile = await Profile.findOneAndUpdate({}, updateData, { new: true, upsert: true });
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

// @desc    Add/Update social link
// @route   POST /api/profile/social
// @route   PUT /api/profile/social
const addSocial = async (req, res) => {
    const { platform, link } = req.body;
    try {
        const profile = await Profile.findOne();
        if (profile) {
            // Mongoose Map
            if (!profile.socials) {
                profile.socials = {};
            }
            // If it's a Map in schema but behaving like object in JSON sometimes, handled by Mongoose
            // Using Map set
            profile.socials.set(platform, link);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSocial = async (req, res) => {
    // Reuse addSocial logic since Map.set overwrites
    return addSocial(req, res);
};

// @desc    Delete social link
// @route   DELETE /api/profile/social/:platform
const deleteSocial = async (req, res) => {
    const { platform } = req.params;
    try {
        const profile = await Profile.findOne();
        if (profile && profile.socials) {
            profile.socials.delete(platform);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile (or Socials) not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update Career Vision
// @route   PUT /api/profile/career-vision
const updateCareerVision = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            if (!profile.careerVision) profile.careerVision = {};
            // Mongoose subdoc update
            Object.assign(profile.careerVision, req.body);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update experience by ID
// @route   PUT /api/profile/experience/:id
const updateExperience = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            const experience = profile.experience.id(req.params.id);
            if (experience) {
                const updatedData = { ...req.body };
                delete updatedData._id;
                experience.set(updatedData);
                await profile.save();
                res.status(200).json(profile);
            } else {
                res.status(404).json({ message: "Experience entry not found" });
            }
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete experience by ID
// @route   DELETE /api/profile/experience/:id
const deleteExperience = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.experience.pull(req.params.id); // Mongoose pull by ID
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update education by ID
// @route   PUT /api/profile/education/:id
const updateEducation = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            const education = profile.education.id(req.params.id);
            if (education) {
                const updatedData = { ...req.body };
                delete updatedData._id;
                education.set(updatedData);
                await profile.save();
                res.status(200).json(profile);
            } else {
                res.status(404).json({ message: "Education entry not found" });
            }
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete education by ID
// @route   DELETE /api/profile/education/:id
const deleteEducation = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.education.pull(req.params.id);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update certification by ID
// @route   PUT /api/profile/certification/:id
const updateCertification = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            const certification = profile.certifications.id(req.params.id);
            if (certification) {
                const updatedData = { ...req.body };
                delete updatedData._id;
                certification.set(updatedData);
                await profile.save();
                res.status(200).json(profile);
            } else {
                res.status(404).json({ message: "Certification entry not found" });
            }
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete certification by ID
// @route   DELETE /api/profile/certification/:id
const deleteCertification = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.certifications.pull(req.params.id);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add project
// @route   POST /api/profile/project
const addProject = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.projects.push(req.body);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update project
// @route   PUT /api/profile/project/:id
const updateProject = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            const project = profile.projects.id(req.params.id);
            if (project) {
                const updatedData = { ...req.body };
                delete updatedData._id;
                project.set(updatedData);
                await profile.save();
                res.status(200).json(profile);
            } else {
                res.status(404).json({ message: "Project not found" });
            }
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete project
// @route   DELETE /api/profile/project/:id
const deleteProject = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            profile.projects.pull(req.params.id);
            await profile.save();
            res.status(200).json(profile);
        } else {
            res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Increment resume download count
// @route   POST /api/profile/resume-download
const trackResumeDownload = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (profile) {
            if (!profile.meta) profile.meta = { resumeDownloads: 0, profileViews: 0 };
            profile.meta.resumeDownloads = (profile.meta.resumeDownloads || 0) + 1;
            await profile.save();
            res.status(200).json({ downloads: profile.meta.resumeDownloads });
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
};
