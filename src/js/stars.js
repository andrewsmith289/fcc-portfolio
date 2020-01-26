const particles = [];

function setup() {
    const canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('splash');

    const particlesLength = Math.floor(window.innerWidth / 20);

    for(let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}

function draw() {
   
    clear();
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    });  
    console.log(particles.length)  
}

class Particle {
    constructor() {
        // Position
        this.pos = createVector(random(width), random(height));
        // Size
        this.size = 10;
        // Velocity
        this.vel = createVector(random(-5, 5), random(-5,5));
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    draw() {
        noStroke();
        fill('rgba(255,255,255,0.5)');
        circle(this.pos.x, this.pos.y, this.size);
    }

    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

            if (d < 120) {
                stroke('rgba(255,255,255,0.5');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}