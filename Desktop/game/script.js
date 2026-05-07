// Civil Engineering Skills Database
const engineeringSkills = [
    { name: "AutoCAD Design", description: "Professional 2D and 3D design" },
    { name: "Structural Analysis", description: "Load calculations and stress analysis" },
    { name: "Project Management", description: "Coordinating construction projects" },
    { name: "BIM Modeling", description: "Building Information Modeling" },
    { name: "Hydraulics", description: "Water flow and pressure systems" },
    { name: "Geotechnical Engineering", description: "Soil mechanics and foundations" },
    { name: "Foundation Design", description: "Deep and shallow foundations" },
    { name: "Construction Management", description: "Site supervision and scheduling" },
    { name: "CAD Programming", description: "LISP and Python scripting" },
    { name: "Road Design", description: "Highway and traffic engineering" },
    { name: "Environmental Engineering", description: "Waste management systems" },
    { name: "Steel Structures", description: "Metal framework design" }
];

// Random Projects
const projects = [
    { title: "Urban Infrastructure Development", desc: "Designed and managed a comprehensive urban development project focusing on sustainable infrastructure." },
    { title: "Bridge Construction Project", desc: "Led the design and supervision of a modern cable-stayed bridge spanning 500 meters." },
    { title: "Water Treatment Facility", desc: "Engineered a state-of-the-art water treatment plant serving 100,000+ residents." },
    { title: "Highway Expansion", desc: "Managed the expansion of a major highway with innovative traffic management solutions." },
    { title: "Building Restoration", desc: "Oversaw structural restoration of a heritage building using modern engineering techniques." },
    { title: "Smart City Initiative", desc: "Contributed to smart city infrastructure including IoT-enabled traffic and utilities systems." },
    { title: "Tunnel Engineering", desc: "Designed underground tunnel systems for transportation with advanced safety features." },
    { title: "Sustainable Parking Structure", desc: "Created an eco-friendly multi-level parking facility with green roofs and solar panels." }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeSkills();
    initializeProjects();
});

// Get random items from array
function getRandomItems(arr, count) {
    let shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Populate skills
function initializeSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    const randomSkills = getRandomItems(engineeringSkills, 6);
    
    randomSkills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        skillsGrid.appendChild(card);
    });
}

// Initialize projects
function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    const randomProjects = getRandomItems(projects, 3);
    
    randomProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;
        projectsGrid.appendChild(card);
    });
}


// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}
