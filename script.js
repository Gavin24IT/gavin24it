// Matrix Rain Effect
const matrix = () => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
        ctx.fillStyle = 'rgba(0, 16, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        drops.forEach((drop, i) => {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drop * fontSize);
            
            if (drop * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    };

    setInterval(draw, 50);
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
};

// Fake Hacked Effect (Intense Version)
const triggerHackedEffect = (formData) => {
    const body = document.body;
    const container = document.querySelector('.container');

    // Hide the main content
    container.style.display = "none";

    // Create a hacked overlay
    const hackedOverlay = document.createElement('div');
    hackedOverlay.id = 'hacked-overlay';
    hackedOverlay.style.position = 'fixed';
    hackedOverlay.style.top = '0';
    hackedOverlay.style.left = '0';
    hackedOverlay.style.width = '100%';
    hackedOverlay.style.height = '100%';
    hackedOverlay.style.backgroundColor = 'black';
    hackedOverlay.style.zIndex = '1000';
    hackedOverlay.style.overflow = 'hidden';
    hackedOverlay.style.color = 'red';
    hackedOverlay.style.fontFamily = 'monospace';
    hackedOverlay.style.fontSize = '1.5rem';
    hackedOverlay.style.padding = '2rem';
    hackedOverlay.style.whiteSpace = 'pre-wrap';
    hackedOverlay.style.animation = 'glitch 0.1s infinite';
    hackedOverlay.innerText = "INITIATING SYSTEM SCAN...\n\n";
    body.appendChild(hackedOverlay);

    // Play Windows XP error sound continuously
    const errorSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2993/2993-preview.mp3'); // Replace with Windows XP error sound URL
    errorSound.loop = true; // Loop the sound
    errorSound.play();

    // Fake error messages
    const errorMessages = [
        "ERROR: SYSTEM BREACH DETECTED",
        "WARNING: UNAUTHORIZED ACCESS",
        "CRITICAL: DATA CORRUPTION",
        "ALERT: MALWARE INJECTION",
        "FAILURE: NETWORK COMPROMISED",
        "WARNING: FIREWALL BYPASSED",
        "ERROR: ENCRYPTION FAILED",
        "CRITICAL: BACKDOOR ACTIVATED",
        "ALERT: DATA EXFILTRATION",
        "FAILURE: SYSTEM SHUTDOWN IMMINENT"
    ];

    // Fake code injections
    const fakeCode = [
        "> Injecting payload: 0x7DF9FF...",
        "> Exploiting vulnerability: CVE-2023-XXXX...",
        "> Bypassing security protocols...",
        "> Accessing root directory...",
        "> Extracting sensitive data...",
        "> Deploying ransomware...",
        "> Overwriting system files...",
        "> Establishing persistent backdoor..."
    ];

    // Generate fake errors and code injections
    let errorCount = 0;
    const errorInterval = setInterval(() => {
        const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        const randomCode = fakeCode[Math.floor(Math.random() * fakeCode.length)];
        hackedOverlay.innerText += `> ${randomError}\n`;
        hackedOverlay.innerText += `${randomCode}\n\n`;
        errorCount++;

        // Scroll to bottom
        hackedOverlay.scrollTop = hackedOverlay.scrollHeight;

        // Add random glitch effect
        if (errorCount % 5 === 0) {
            hackedOverlay.style.animation = 'none';
            setTimeout(() => {
                hackedOverlay.style.animation = 'glitch 0.1s infinite';
            }, 100);
        }

        // Stop after 5 seconds
        if (errorCount > 30) {
            clearInterval(errorInterval);
            hackedOverlay.innerText += "\n\n> SYSTEM COMPROMISED: YOU'VE BEEN HACKED!\n";
            hackedOverlay.innerText += "> INITIATING EMERGENCY SHUTDOWN...\n";

            // Countdown to shutdown
            let countdown = 3;
            const countdownInterval = setInterval(() => {
                hackedOverlay.innerText += `> SHUTDOWN IN: ${countdown}...\n`;
                hackedOverlay.scrollTop = hackedOverlay.scrollHeight;
                countdown--;

                if (countdown < 0) {
                    clearInterval(countdownInterval);
                    hackedOverlay.innerText += "> SHUTDOWN COMPLETE.\n";
                    hackedOverlay.innerText += "> ALL DATA HAS BEEN EXFILTRATED.\n";

                    // Stop the error sound
                    errorSound.pause();

                    // Reset after 3 seconds
                    setTimeout(() => {
                        body.removeChild(hackedOverlay);
                        container.style.display = "block";
                        alert("Just kidding! Your data is safe. 😉");

                        // Submit the form data to Formspree
                        fetch('https://formspree.io/f/mbldydjv', {
                            method: 'POST',
                            body: formData,
                            headers: {
                                'Accept': 'application/json'
                            }
                        })
                        .then(response => {
                            if (response.ok) {
                                console.log('Form submitted successfully');
                            } else {
                                console.error('Form submission failed');
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });

                    }, 3000);
                }
            }, 1000);
        }
    }, 200); // Add a new error every 200ms
};

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    // Start matrix rain
    matrix();

    // Add event listener to the form submit button
    document.querySelector('.cyber-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        const formData = new FormData(e.target); // Capture form data
        triggerHackedEffect(formData); // Trigger the hacked effect
    });

    // Glitch effect for headers
    document.querySelectorAll('.glitch').forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.animation = 'glitch 0.3s infinite';
        });
        
        element.addEventListener('mouseout', () => {
            element.style.animation = 'glitch 3s infinite';
        });
    });

    // Terminal typing effect
    document.querySelectorAll('.terminal-text').forEach(element => {
        const text = element.innerText;
        element.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    });
});
