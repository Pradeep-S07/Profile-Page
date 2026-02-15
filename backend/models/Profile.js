const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, default: 'https://ui-avatars.com/api/?name=User&background=random' },
    resumeLink: { type: String, default: '#' },

    // Stats
    league: { type: String, default: 'Bronze' },
    rank: { type: Number, default: 0 },
    points: { type: Number, default: 0 },

    skills: [{
        name: { type: String, required: true },
        endorsements: { type: Number, default: 0 }
    }],

    experience: [{
        role: { type: String, required: true },
        company: { type: String, required: true },
        location: { type: String },
        startDate: { type: String, required: true }, // Keeping strict type as String for ease or Date if preferred
        endDate: { type: String, required: true }
    }],

    education: [{
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true }
    }],

    certifications: [{
        title: { type: String, required: true },
        provider: { type: String, required: true },
        date: { type: String },
        link: { type: String }
    }],

    careerVision: {
        title: { type: String },
        currentRole: { type: String },
        targetDomain: { type: String },
        inspiredBy: { type: String }
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
