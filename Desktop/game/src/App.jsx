import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==================== LOADING SCREEN ====================
const LoadingScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 3000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] flex items-center justify-center z-50"
        >
            <div className="text-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-20 h-20 mx-auto mb-8 border-4 border-transparent border-t-[#00d4ff] border-r-[#00d4ff] rounded-full"
                />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold text-[#00d4ff] mb-4"
                >
                    Game
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-[#e0e0e0] text-lg"
                >
                    Loading Portfolio...
                </motion.p>
            </div>
        </motion.div>
    );
};

// ==================== FLOATING PARTICLES ====================
const FloatingParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
    }));

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
                    initial={{ 
                        x: 0, 
                        y: 0,
                        opacity: 0.3,
                    }}
                    animate={{ 
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{ 
                        left: `${particle.left}%`, 
                        top: `${particle.top}%` 
                    }}
                />
            ))}
        </div>
    );
};

// ==================== MOUSE TRACKING GLOW ====================
const MouseGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl opacity-20 z-0"
            style={{
                background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
                transition: 'all 0.3s ease-out',
            }}
        />
    );
};

// ==================== HERO SECTION ====================
const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const skills = ['Structural Analysis', 'BIM Modeling', 'CAD Design', 'Project Management'];
    const [skillIndex, setSkillIndex] = useState(0);

    useEffect(() => {
        const skill = skills[skillIndex];
        let index = 0;
        const interval = setInterval(() => {
            if (index <= skill.length) {
                setDisplayText(skill.substring(0, index));
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setSkillIndex((prev) => (prev + 1) % skills.length);
                    setDisplayText('');
                }, 2000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [skillIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 max-w-4xl"
            >
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8 relative w-40 h-40 mx-auto"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#ff6b35] p-1">
                        <div className="w-full h-full rounded-full bg-[#0a0e27] flex items-center justify-center text-4xl font-bold text-[#00d4ff]">
                            G
                        </div>
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#ff6b35] border-r-[#ff6b35]"
                    />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-7xl md:text-8xl font-bold mb-6 text-[#00d4ff] drop-shadow-lg"
                    style={{ textShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
                >
                    Game
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-2xl md:text-3xl text-[#e0e0e0] mb-8"
                >
                    Civil Engineering Student
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg text-[#b0b0b0] mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    Passionate about designing innovative infrastructure solutions with cutting-edge CAD technologies, structural analysis, and sustainable engineering practices.
                </motion.p>

                {/* Animated Skills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-12 h-12 flex items-center justify-center"
                >
                    <span className="text-xl text-[#ff6b35] font-semibold">
                        Skilled in: <span className="text-[#00d4ff]">{displayText}</span>
                        <span className="animate-pulse">|</span>
                    </span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#00d4ff] text-[#0a0e27] font-bold rounded-lg text-lg smooth-transition"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-[#ff6b35] text-[#ff6b35] font-bold rounded-lg text-lg smooth-transition"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </motion.button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#00d4ff]"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

// ==================== ABOUT SECTION ====================
const AboutSection = () => {
    const stats = [
        { label: 'Projects', value: 12, suffix: '+' },
        { label: 'Years Learning', value: 4, suffix: '' },
        { label: 'Collaborations', value: 8, suffix: '+' },
        { label: 'Certifications', value: 5, suffix: '' },
    ];

    return (
        <section id="about" className="relative py-20 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-12 text-center text-[#00d4ff]"
                    style={{ textShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Bio */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="glass-effect p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">Who I Am</h3>
                        <p className="text-[#b0b0b0] leading-relaxed mb-4">
                            I'm Game, a dedicated civil engineering student with a passion for innovative infrastructure design and sustainable engineering solutions. My academic journey has equipped me with strong technical skills in structural analysis, CAD design, and project management.
                        </p>
                        <p className="text-[#b0b0b0] leading-relaxed">
                            I excel at solving complex engineering problems through a combination of theoretical knowledge and practical application. I'm committed to continuous learning and staying updated with the latest industry standards and technologies.
                        </p>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="glass-effect p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-[#ff6b35] mb-4">Education</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold text-[#00d4ff]">B.Tech in Civil Engineering</p>
                                <p className="text-[#b0b0b0] text-sm">Expected Graduation: 2026</p>
                            </div>
                            <div>
                                <p className="font-bold text-[#00d4ff]">Specialization: Structural Design</p>
                                <p className="text-[#b0b0b0] text-sm">Focus on modern infrastructure</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-effect-light p-6 rounded-xl text-center"
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2"
                            >
                                {stat.value}{stat.suffix}
                            </motion.p>
                            <p className="text-[#b0b0b0] text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Bars */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-effect p-8 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold text-[#00d4ff] mb-8">Technical Skills</h3>
                    <div className="space-y-6">
                        {[
                            { name: 'AutoCAD Design', level: 90 },
                            { name: 'Structural Analysis', level: 85 },
                            { name: 'BIM Modeling', level: 80 },
                            { name: 'Project Management', level: 75 },
                        ].map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-[#e0e0e0] font-medium">{skill.name}</span>
                                    <span className="text-[#ff6b35]">{skill.level}%</span>
                                </div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ delay: index * 0.15, duration: 1 }}
                                    className="h-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#ff6b35]"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

// ==================== SKILLS SECTION ====================
const SkillsSection = () => {
    const skills = [
        { name: 'AutoCAD', icon: '📐', color: 'from-blue-500 to-cyan-500' },
        { name: 'Civil 3D', icon: '🏗️', color: 'from-orange-500 to-red-500' },
        { name: 'Revit', icon: '🏢', color: 'from-purple-500 to-pink-500' },
        { name: 'Structural Design', icon: '🔨', color: 'from-cyan-500 to-blue-500' },
        { name: 'Surveying', icon: '📍', color: 'from-green-500 to-emerald-500' },
        { name: 'Project Planning', icon: '📊', color: 'from-yellow-500 to-orange-500' },
        { name: 'Teamwork', icon: '👥', color: 'from-pink-500 to-rose-500' },
        { name: 'Problem Solving', icon: '💡', color: 'from-indigo-500 to-purple-500' },
    ];

    return (
        <section id="skills" className="relative py-20 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#ff6b35]"
                    style={{ textShadow: '0 0 20px rgba(255, 107, 53, 0.3)' }}
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                            whileHover={{ y: -10, boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)' }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className="glass-effect-light p-6 rounded-xl text-center cursor-pointer group"
                        >
                            <motion.div
                                className="text-5xl mb-4 group-hover:scale-110 transition-transform"
                            >
                                {skill.icon}
                            </motion.div>
                            <p className="text-[#e0e0e0] font-bold">{skill.name}</p>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                                className={`h-1 mt-3 rounded-full bg-gradient-to-r ${skill.color}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

// ==================== PROJECTS SECTION ====================
const ProjectsSection = () => {
    const projects = [
        { 
            title: 'Bridge Design Project', 
            desc: 'Cable-stayed bridge spanning 500m with advanced structural analysis',
            tools: ['AutoCAD', 'Civil 3D', 'STAAD Pro'],
            image: '🌉'
        },
        { 
            title: 'Smart City Concept', 
            desc: 'Integrated urban development with sustainable infrastructure',
            tools: ['Revit', 'BIM', 'AutoCAD'],
            image: '🏙️'
        },
        { 
            title: 'Highway Planning System', 
            desc: 'Comprehensive highway design with traffic management solutions',
            tools: ['Civil 3D', 'AutoCAD', 'Surveying'],
            image: '🛣️'
        },
        { 
            title: 'Water Supply Design', 
            desc: 'Multi-stage water distribution network for urban areas',
            tools: ['AutoCAD', 'Hydraulics', 'Surveying'],
            image: '💧'
        },
        { 
            title: 'Structural Analysis Project', 
            desc: 'Advanced FEA modeling of multi-story building structure',
            tools: ['STAAD Pro', 'SAP2000', 'AutoCAD'],
            image: '🏗️'
        },
        { 
            title: 'Sustainable Parking', 
            desc: 'Eco-friendly multi-level parking with green roofs',
            tools: ['Revit', 'BIM', 'AutoCAD'],
            image: '🅿️'
        },
    ];

    return (
        <section id="projects" className="relative py-20 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#00d4ff]"
                    style={{ textShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ y: -15, boxShadow: '0 0 50px rgba(0, 212, 255, 0.4)' }}
                            transition={{ delay: index * 0.08, duration: 0.6 }}
                            className="glass-effect rounded-2xl overflow-hidden group"
                        >
                            {/* Image Area */}
                            <div className="w-full h-40 bg-gradient-to-br from-[#1a1f3a] to-[#2d3561] flex items-center justify-center text-7xl overflow-hidden relative">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {project.image}
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#00d4ff] mb-2">{project.title}</h3>
                                <p className="text-[#b0b0b0] text-sm mb-4">{project.desc}</p>

                                {/* Tools */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tools.map((tool, i) => (
                                        <span key={i} className="text-xs bg-[#2d3561] text-[#ff6b35] px-3 py-1 rounded-full">
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 py-2 px-4 bg-[#00d4ff] text-[#0a0e27] font-bold rounded-lg text-sm"
                                    >
                                        Preview
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 py-2 px-4 border border-[#ff6b35] text-[#ff6b35] font-bold rounded-lg text-sm"
                                    >
                                        Details
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

// ==================== TIMELINE SECTION ====================
const TimelineSection = () => {
    const timeline = [
        { year: '2022', title: 'Started Engineering', desc: 'Began formal civil engineering education' },
        { year: '2023', title: 'First CAD Course', desc: 'Mastered AutoCAD and basic design principles' },
        { year: '2024', title: 'BIM Certification', desc: 'Completed advanced BIM modeling certification' },
        { year: '2025', title: 'Internship Program', desc: 'Completed industry internship with major firm' },
    ];

    return (
        <section className="relative py-20 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#ff6b35]"
                    style={{ textShadow: '0 0 20px rgba(255, 107, 53, 0.3)' }}
                >
                    Journey
                </motion.h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00d4ff] to-[#ff6b35]"
                        style={{ originY: 0 }}
                    />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                            >
                                <div className="w-1/2 px-6">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="glass-effect p-6 rounded-xl"
                                    >
                                        <p className="text-[#ff6b35] font-bold text-lg">{item.year}</p>
                                        <h3 className="text-[#00d4ff] font-bold mb-2">{item.title}</h3>
                                        <p className="text-[#b0b0b0] text-sm">{item.desc}</p>
                                    </motion.div>
                                </div>

                                {/* Timeline Node */}
                                <div className="w-0 flex justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        className="w-6 h-6 bg-gradient-to-br from-[#00d4ff] to-[#ff6b35] rounded-full border-4 border-[#0a0e27] relative z-10"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

// ==================== SERVICES SECTION ====================
const ServicesSection = () => {
    const services = [
        { name: 'Structural Drafting', icon: '📐', desc: 'Professional structural drawings and designs' },
        { name: '3D Modeling', icon: '🎯', desc: 'Advanced 3D visualization and BIM models' },
        { name: 'Site Planning', icon: '📍', desc: 'Comprehensive site analysis and planning' },
        { name: 'CAD Design', icon: '✏️', desc: 'Precise CAD designs for projects' },
        { name: 'Analysis & Consultation', icon: '📊', desc: 'Structural analysis and expert consultation' },
        { name: 'Project Coordination', icon: '🤝', desc: 'Team coordination and project management' },
    ];

    return (
        <section className="relative py-20 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#00d4ff]"
                    style={{ textShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}
                >
                    Services
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            whileHover={{ y: -10, boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)' }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-effect p-8 rounded-2xl text-center group"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="text-6xl mb-4 group-hover:scale-110 transition-transform"
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-[#ff6b35] mb-3">{service.name}</h3>
                            <p className="text-[#b0b0b0] text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

// ==================== TESTIMONIALS SECTION ====================
const TestimonialsSection = () => {
    const testimonials = [
        { name: 'Prof. John Smith', role: 'Academic Advisor', text: 'Exceptional student with outstanding technical skills and dedication to learning.' },
        { name: 'Sarah Johnson', role: 'Project Manager', text: 'Reliable team member with excellent problem-solving abilities and attention to detail.' },
        { name: 'Michael Chen', role: 'Senior Engineer', text: 'Impressive grasp of modern engineering tools and commitment to sustainable design.' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="relative py-20 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#ff6b35]"
                    style={{ textShadow: '0 0 20px rgba(255, 107, 53, 0.3)' }}
                >
                    Testimonials
                </motion.h2>

                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="glass-effect p-8 md:p-12 rounded-2xl text-center mb-8"
                >
                    <p className="text-[#e0e0e0] text-lg mb-6 italic">"{testimonials[currentIndex].text}"</p>
                    <p className="text-[#00d4ff] font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-[#b0b0b0]">{testimonials[currentIndex].role}</p>
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-center gap-4">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-[#00d4ff]' : 'bg-[#2d3561]'
                            }`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

// ==================== CONTACT SECTION ====================
const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    return (
        <section id="contact" className="relative py-20 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center text-[#00d4ff]"
                    style={{ textShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}
                >
                    Get In Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {[
                            { icon: '📧', label: 'Email', value: 'game@example.com' },
                            { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
                            { icon: '📍', label: 'Location', value: 'Your City, Country' },
                        ].map((contact, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="glass-effect p-6 rounded-xl"
                            >
                                <p className="text-3xl mb-2">{contact.icon}</p>
                                <p className="text-[#b0b0b0] text-sm">{contact.label}</p>
                                <p className="text-[#00d4ff] font-bold">{contact.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('Thank you for your message! I will get back to you soon.');
                            setFormData({ name: '', email: '', message: '' });
                        }}
                    >
                        <motion.div whileFocus={{ scale: 1.02 }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-[#1a1f3a] border border-[#2d3561] rounded-lg p-4 text-[#e0e0e0] focus:border-[#00d4ff] focus:outline-none"
                                required
                            />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-[#1a1f3a] border border-[#2d3561] rounded-lg p-4 text-[#e0e0e0] focus:border-[#00d4ff] focus:outline-none"
                                required
                            />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-[#1a1f3a] border border-[#2d3561] rounded-lg p-4 text-[#e0e0e0] focus:border-[#00d4ff] focus:outline-none resize-none"
                                required
                            />
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-[#0a0e27] font-bold rounded-lg text-lg"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

// ==================== FOOTER ====================
const Footer = () => {
    return (
        <footer className="relative border-t border-[#2d3561] py-16 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    >
                        <h3 className="text-3xl font-bold text-[#00d4ff] mb-4">Game</h3>
                        <p className="text-[#b0b0b0]">Civil Engineering Portfolio</p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                    >
                        <h4 className="text-[#00d4ff] font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-[#b0b0b0]">
                            {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="hover:text-[#00d4ff] transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    >
                        <h4 className="text-[#ff6b35] font-bold mb-4">Follow</h4>
                        <div className="flex gap-4">
                            {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                                <motion.a
                                    key={social}
                                    whileHover={{ scale: 1.2, color: '#00d4ff' }}
                                    href="#"
                                    className="text-[#b0b0b0] text-lg"
                                >
                                    {social[0]}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="border-t border-[#2d3561] pt-8 flex flex-col md:flex-row justify-between items-center text-[#b0b0b0] text-sm"
                >
                    <p>&copy; 2026 Game - Civil Engineering Portfolio. All rights reserved.</p>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="mt-4 md:mt-0 p-3 rounded-full bg-[#2d3561] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0e27]"
                    >
                        ↑
                    </motion.button>
                </motion.div>
            </motion.div>
        </footer>
    );
};

// ==================== MAIN APP ====================
export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <LoadingScreen onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] text-[#e0e0e0] overflow-hidden"
                >
                    {/* Background Effects */}
                    <MouseGlow />
                    <FloatingParticles />

                    {/* Navigation */}
                    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect">
                        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
                            <motion.h1
                                animate={{ textShadow: ['0 0 10px rgba(0, 212, 255, 0.5)', '0 0 30px rgba(0, 212, 255, 0.8)', '0 0 10px rgba(0, 212, 255, 0.5)'] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="text-3xl font-bold text-[#00d4ff]"
                            >
                                Game
                            </motion.h1>
                            <ul className="hidden md:flex gap-8">
                                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                    <motion.li key={item} whileHover={{ color: '#ff6b35' }}>
                                        <a href={`#${item.toLowerCase()}`} className="text-[#e0e0e0] hover:text-[#00d4ff] transition-colors">
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Sections */}
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <TimelineSection />
                    <ServicesSection />
                    <TestimonialsSection />
                    <ContactSection />
                    <Footer />
                </motion.div>
            )}
        </>
    );
}
