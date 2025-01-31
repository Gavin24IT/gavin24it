// Scroll Handler for Planets
const scrollController = {
    lastScroll: 0,
    ticking: false,

    handleScroll: function() {
        this.lastScroll = window.pageYOffset;

        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.updatePlanets(this.lastScroll);
                this.ticking = false;
            });
            this.ticking = true;
        }
    },

    updatePlanets: function(scrolled) {
        const planets = {
            mercury: { speed: 0.1, rotation: 0.05 },
            venus: { speed: 0.15, rotation: -0.07 },
            earth: { speed: 0.2, rotation: 0.1 },
            mars: { speed: 0.25, rotation: -0.12 },
            jupiter: { speed: 0.3, rotation: 0.15 },
            saturn: { speed: 0.35, rotation: -0.18 },
            uranus: { speed: 0.4, rotation: 0.2 },
            neptune: { speed: 0.45, rotation: -0.22 }
        };

        Object.keys(planets).forEach(planetId => {
            const planet = document.getElementById(planetId);
            if (planet) {
                const { speed, rotation } = planets[planetId];
                planet.style.transform =
                    `translate3d(0, ${scrolled * speed}px, 0)
                     rotate(${scrolled * rotation}deg)`;
            }
        });
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => scrollController.handleScroll());
});
