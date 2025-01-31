:root {
    --primary: #7DF9FF;
    --secondary: #B19CD9;
    --neon: #FF10F0;
    --dark: #000000;
    --space: #000C40;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(45deg, var(--dark) 25%, var(--space) 100%);
    color: white;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

/* Planets */
.space {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
}

.planet {
    position: absolute;
    animation: float 20s infinite ease-in-out;
    filter: drop-shadow(0 0 20px var(--primary));
    will-change: transform;
    backface-visibility: hidden;
}

@keyframes float {
    0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
    50% { transform: translate3d(0, -20px, 0) rotate(5deg); }
}

/* Mobile Planet Positioning */
@media (max-width: 768px) {
    .planet {
        display: none; /* Hide planets on mobile */
    }
}

/* Container */
.container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 4rem 0 2rem;
}

.welcome {
    font-size: 2.5rem;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

.welcome span {
    background: linear-gradient(45deg, var(--primary), var(--neon));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.tagline {
    font-size: 1.2rem;
    color: var(--secondary);
}

/* Sections */
.section {
    margin: 2rem 0;
    padding: 1.5rem;
    border: 2px solid rgba(125, 249, 255, 0.2);
    border-radius: 20px;
    background: rgba(0, 0, 30, 0.5);
    backdrop-filter: blur(10px);
    transition: transform 0.3s;
}

h2 {
    color: var(--primary);
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--primary);
}

/* Skills Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.skill-card {
    padding: 1rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(125, 249, 255, 0.1);
}

/* Timeline */
.timeline {
    position: relative;
    padding-left: 1rem;
    border-left: 2px solid var(--primary);
}

.timeline-item {
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 8px;
}

/* Contact Form */
.contact-form {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(125, 249, 255, 0.2);
    color: white;
    border-radius: 8px;
}

.submit-btn {
    background: var(--primary);
    color: var(--dark);
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-3px);
}

/* Animations */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
/* Portfolio Button */
.portfolio-btn {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.8rem 2rem;
    background: linear-gradient(45deg, var(--primary), var(--neon));
    color: var(--dark);
    font-weight: bold;
    text-decoration: none;
    border-radius: 50px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(125, 249, 255, 0.3);
}

.portfolio-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(125, 249, 255, 0.5);
}
