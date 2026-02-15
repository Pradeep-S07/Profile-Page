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

    projects: [{
        title: { type: String, required: true },
        description: { type: String, required: true },
        technologies: [{ type: String }],
        link: { type: String },
        githubLink: { type: String },
        imageUrl: { type: String }
    }],

    certifications: [{
        title: { type: String, required: true },
        provider: { type: String, required: true },
        date: { type: String },
        link: { type: String }
    }],

    socials: {
        type: Map,
        of: String,
        default: {}
    },

    meta: {
        resumeDownloads: { type: Number, default: 0 },
        profileViews: { type: Number, default: 0 }
    },

    careerVision: {
        description: { type: String }, // What Best Describes You?
        aspiration: { type: String },  // What Is Your Long-Term Career Aspiration?
        field: { type: String },       // Aspirational Field
        inspiration: { type: String }, // Who Is Your Inspiration?
        currentAim: { type: String }   // What Are You Aiming For Right Now?
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
