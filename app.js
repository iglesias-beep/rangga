/* ====================================================
   RANGGA PORTFOLIO — APP.JS
   Three.js, GSAP reveals, card tilt, particles background
   ==================================================== */

// ── TRANSLATIONS ──
const T = {
    ID: {
        nav_home: "Beranda", nav_about: "Tentang", nav_stack: "Tech Stack",
        nav_projects: "Proyek", nav_experience: "Pengalaman", nav_contact: "Kontak",
        hero_name: "BACKEND", hero_role: "Developer",
        hero_tag: "Tersedia untuk proyek baru",
        hero_desc: 'Selamat Datang di Portofolio saya, <span class="hero-highlight">Nama Saya Rangga,</span> dan sering di panggil <span class="hero-highlight">Harvee</span>',
        hero_cta: "LIHAT PROYEK", hero_cta2: "HUBUNGI",
        about_heading: "IDENTITAS", about_subtitle: "Rangga",
        about_desc: "Backend developer yang fokus membangun arsitektur server, REST API, dan sistem database yang handal. Berpengalaman dengan Node.js, Python, dan berbagai teknologi cloud. Passionate dalam menulis kode yang bersih, efisien, dan mudah di-maintain.",
        stat_projects: "Proyek Selesai", stat_apis: "API Endpoints",
        stat_years: "Tahun Pengalaman", stat_uptime: "Uptime Server",
        stack_heading: "TECH STACK",
        projects_heading: "PROYEK",
        card_img_1: "Proyek 1", card_title_1: "To-Do List API",
        card_desc_1: "REST API sederhana untuk manajemen tugas (CRUD) lengkap dengan autentikasi user dasar.",
        card_img_2: "Proyek 2", card_title_2: "Bot Discord Auto-Reply",
        card_desc_2: "Bot Discord yang bisa membalas pesan secara otomatis dan mengambil data dari public API.",
        card_img_3: "Proyek 3", card_title_3: "Sistem Kasir Sederhana",
        card_desc_3: "Aplikasi backend untuk mencatat transaksi penjualan dan stok barang menggunakan database.",
        card_img_4: "Proyek 4", card_title_4: "Contact Form API",
        card_desc_4: "API endpoint untuk menerima data dari form kontak website dan menyimpannya ke database.",
        
        about_story_1_title: "Dari rasa penasaran, jadilah passion.",
        about_story_1_desc: "Semua berawal saat saya duduk di kelas 8 SMP. Berawal dari rasa penasaran melihat di balik layar pembuatan animasi 3D dan game, saya mulai mencari tahu bagaimana teknologi bekerja. Ketertarikan itu mendorong saya belajar HTML dan CSS secara otodidak, membuat halaman web sederhana sebagai langkah pertama saya di dunia koding.",
        about_story_2_title: "Perjalanan menuju dunia backend.",
        about_story_2_desc: "Titik baliknya terjadi ketika saya mencoba membuat form kontak. Karena bingung mengapa data tidak bisa terkirim, saya terdorong mempelajari sistem di balik layar (server-side) dan mulai mendalami bahasa PHP. Memasuki masa SMK, saya mantap memilih jurusan RPL untuk fokus sepenuhnya menjadi seorang Backend Developer, menikmati setiap proses merancang logika sistem.",
        
        // Experience keys
        experience_heading: "PENGALAMAN",
        exp_title_1: "Eksperimen Pertama: Bot Discord", exp_date_1: "2026 - Sekarang", exp_company_1: "Proyek Pribadi (Belajar Mandiri)",
        exp_desc_1_1: "Membuat bot auto-reply sederhana untuk server Discord teman sekelas menggunakan Node.js dan discord.js.",
        exp_desc_1_2: "Belajar cara membaca dokumentasi API, menangani pesan masuk, dan memecahkan bug pertama yang seru.",
        
        exp_title_2: "Merakit Web Portofolio", exp_date_2: "2026", exp_company_2: "Proyek Pribadi (Eksperimen)",
        exp_desc_2_1: "Mulai belajar dasar-dasar koding lewat HTML dan CSS secara otodidak, lalu merakit halaman website portofolio ini.",
        exp_desc_2_2: "Mencoba-coba berbagai class CSS, memodifikasi desain, dan belajar bagaimana kode bisa mengubah tampilan layar.",

        contact_heading: "KONTAK", contact_sub: "Mari Berkolaborasi!",
        contact_desc: "Punya proyek backend yang menantang? Butuh API yang scalable atau arsitektur microservices? Hubungi saya.",
        form_name: "Nama", form_msg: "Pesan", form_send: "KIRIM PESAN",
        success_title: "Terkirim!", success_desc: "Pesan berhasil dikirim.", success_close: "TUTUP",
        dock_home: "Beranda", dock_about: "Tentang", dock_stack: "Stack",
        dock_projects: "Proyek", dock_experience: "Pengalaman", dock_contact: "Kontak"
    },
    EN: {
        nav_home: "Home", nav_about: "About", nav_stack: "Tech Stack",
        nav_projects: "Projects", nav_experience: "Experience", nav_contact: "Contact",
        hero_name: "BACKEND", hero_role: "Developer",
        hero_tag: "Available for new projects",
        hero_desc: 'Welcome to my Portfolio, <span class="hero-highlight">My Name is Rangga,</span> and often called <span class="hero-highlight">Harvee</span>',
        hero_cta: "VIEW PROJECTS", hero_cta2: "CONTACT",
        about_heading: "IDENTITY", about_subtitle: "Rangga",
        about_desc: "A backend developer focused on building robust server architectures, REST APIs, and reliable database systems. Experienced with Node.js, Python, and various cloud technologies. Passionate about writing clean, efficient, and maintainable code.",
        stat_projects: "Projects Done", stat_apis: "API Endpoints",
        stat_years: "Years Experience", stat_uptime: "Server Uptime",
        stack_heading: "TECH STACK",
        projects_heading: "PROJECTS",
        card_img_1: "Project 1", card_title_1: "To-Do List API",
        card_desc_1: "A simple REST API for task management (CRUD) complete with basic user authentication.",
        card_img_2: "Project 2", card_title_2: "Discord Auto-Reply Bot",
        card_desc_2: "A Discord bot that can reply to messages automatically and fetch data from a public API.",
        card_img_3: "Project 3", card_title_3: "Simple POS System",
        card_desc_3: "A backend application to record sales transactions and manage item stock using a database.",
        card_img_4: "Project 4", card_title_4: "Contact Form API",
        card_desc_4: "An API endpoint to receive data from a website contact form and save it to a database.",
        
        about_story_1_title: "From curiosity to passion.",
        about_story_1_desc: "It all started when I was in 8th grade. Driven by curiosity about how 3D animations and games are made behind the scenes, I began exploring how technology works. That interest led me to self-teach HTML and CSS, creating simple web pages as my first steps into the world of coding.",
        about_story_2_title: "Journey into the backend world.",
        about_story_2_desc: "The turning point happened when I tried building a contact form. Confused as to why the data wasn't being sent, I was driven to learn about server-side systems and began diving into PHP. Entering vocational high school (SMK), I firmly chose the Software Engineering (RPL) major to focus entirely on becoming a Backend Developer, enjoying every process of designing system logic.",
        
        // Experience keys
        experience_heading: "EXPERIENCE",
        exp_title_1: "First Experiment: Discord Bot", exp_date_1: "2026 - Present", exp_company_1: "Personal Project (Self-Taught)",
        exp_desc_1_1: "Built a simple auto-reply bot for my class Discord server using Node.js and discord.js.",
        exp_desc_1_2: "Learned how to read API documentation, handle incoming messages, and solve my first exciting bugs.",
        
        exp_title_2: "Building a Web Portfolio", exp_date_2: "2026", exp_company_2: "Personal Project (Experiment)",
        exp_desc_2_1: "Started learning the basics of coding through HTML and CSS self-taught, then built this portfolio website.",
        exp_desc_2_2: "Experimented with CSS classes, modified designs, and learned how code changes the visual display.",

        contact_heading: "CONTACT", contact_sub: "Let's Collaborate!",
        contact_desc: "Have a challenging backend project? Need scalable APIs or microservices architecture? Contact me.",
        form_name: "Name", form_msg: "Message", form_send: "SEND MESSAGE",
        success_title: "Sent!", success_desc: "Message sent successfully.", success_close: "CLOSE",
        dock_home: "Home", dock_about: "About", dock_stack: "Stack",
        dock_projects: "Projects", dock_experience: "Experience", dock_contact: "Contact"
    }
};

let lang = localStorage.getItem("sessho_lang") || "ID";

function applyLang(l) {
    lang = l;
    localStorage.setItem("sessho_lang", l);
    document.querySelectorAll("[data-translate]").forEach(el => {
        const k = el.getAttribute("data-translate");
        if (T[l] && T[l][k]) {
            if (k === "hero_desc") {
                el.innerHTML = T[l][k];
            } else {
                el.textContent = T[l][k];
            }
            if (el.classList.contains("hacker-text")) el.setAttribute("data-text", T[l][k]);
        }
    });
    // Update dock labels
    document.querySelectorAll("[data-translate-attr]").forEach(el => {
        try {
            const map = JSON.parse(el.getAttribute("data-translate-attr"));
            for (const [attr, key] of Object.entries(map)) {
                if (T[l] && T[l][key]) el.setAttribute(attr, T[l][key]);
            }
        } catch (e) {}
    });
    document.getElementById("lang-text").textContent = l;
    document.getElementById("lang-flag").textContent = l === "ID" ? "🇮🇩" : "🇬🇧";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    applyLang(lang === "ID" ? "EN" : "ID");
});

// ── NETWORK BACKGROUND VISUALIZATION (2D Canvas Full-page) ──
(function initNetwork() {
    const canvas = document.getElementById("network-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    let mouse = { x: null, y: null };
    const particles = [];
    const PARTICLE_COUNT = 70;
    const CONNECTION_DIST = 130;
    const MOUSE_RADIUS = 160;

    function resize() {
        w = canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
        h = canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }

    class Particle {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.radius = Math.random() * 1.8 + 1;
            this.baseRadius = this.radius;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
            if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

            // Mouse interaction
            if (mouse.x !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    this.x += dx * force * 0.02;
                    this.y += dy * force * 0.02;
                    this.radius = this.baseRadius + force * 1.5;
                } else {
                    this.radius += (this.baseRadius - this.radius) * 0.1;
                }
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = document.body.classList.contains("light-mode") 
                ? "rgba(0, 184, 107, 0.35)" 
                : "rgba(0, 255, 136, 0.4)";
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles.length = 0;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        const isLight = document.body.classList.contains("light-mode");
        const strokeColor = isLight ? "0, 184, 107" : "0, 255, 136";
        const accentColor = isLight ? "0, 136, 170" : "0, 180, 216";

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    const opacity = (1 - dist / CONNECTION_DIST) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${strokeColor}, ${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }

        // Draw connections to mouse
        if (mouse.x !== null) {
            for (const p of particles) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS) {
                    const opacity = (1 - dist / MOUSE_RADIUS) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        particles.forEach(p => { p.update(); p.draw(); });
        drawConnections();
        requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
        mouse.x = null; mouse.y = null;
    });

    init();
    animate();
    window.addEventListener("resize", () => {
        resize();
        particles.forEach(p => {
            if (p.x > window.innerWidth) p.x = window.innerWidth * Math.random();
            if (p.y > window.innerHeight) p.y = window.innerHeight * Math.random();
        });
    });
})();

// ── THREE.JS HERO 3D OBJECT ──
(function initHero3D() {
    const container = document.getElementById("three-container");
    if (!container) return;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create group to hold the sphere elements
    const group = new THREE.Group();
    scene.add(group);

    // Dynamic color picker based on active light/dark mode
    function getAccentColor() {
        return document.body.classList.contains("light-mode") ? 0x00b86b : 0x00ff88;
    }

    // 1. Core Sphere (glowing wireframe)
    const geometry = new THREE.IcosahedronGeometry(2.4, 2);
    const material = new THREE.MeshBasicMaterial({
        color: getAccentColor(),
        wireframe: true,
        transparent: true,
        opacity: 0.35
    });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // 2. Glowing Nodes (particles on vertices)
    const count = geometry.attributes.position.count;
    const positions = geometry.attributes.position.array;
    
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Draw glowing circle texture dynamically on canvas
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext('2d');
    const grad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(0, 255, 136, 0.8)');
    grad.addColorStop(1, 'rgba(0, 255, 136, 0)');
    pCtx.fillStyle = grad;
    pCtx.fillRect(0, 0, 16, 16);
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const pointsMaterial = new THREE.PointsMaterial({
        color: getAccentColor(),
        size: 0.38,
        map: pTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const particles = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(particles);

    // 3. Outer Orbiting Network Nodes
    const outerCount = 30;
    const outerPositions = new Float32Array(outerCount * 3);
    for (let i = 0; i < outerCount * 3; i += 3) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 2.8 + Math.random() * 1.2;
        outerPositions[i] = r * Math.sin(phi) * Math.cos(theta);
        outerPositions[i+1] = r * Math.sin(phi) * Math.sin(theta);
        outerPositions[i+2] = r * Math.cos(phi);
    }
    const outerGeometry = new THREE.BufferGeometry();
    outerGeometry.setAttribute('position', new THREE.BufferAttribute(outerPositions, 3));
    const outerMaterial = new THREE.PointsMaterial({
        color: document.body.classList.contains("light-mode") ? 0x0088aa : 0x00b4d8,
        size: 0.22,
        map: pTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    const outerParticles = new THREE.Points(outerGeometry, outerMaterial);
    group.add(outerParticles);

    // Mouse control coordinates
    let targetX = 0, targetY = 0;
    let mouseX = 0, mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        targetX = (e.clientX - window.innerWidth / 2) * 0.0008;
        targetY = (e.clientY - window.innerHeight / 2) * 0.0008;
    });

    const clock = new THREE.Clock();
    function animateLoop() {
        requestAnimationFrame(animateLoop);
        const elapsedTime = clock.getElapsedTime();

        // Slow rotations
        sphere.rotation.y = elapsedTime * 0.12;
        sphere.rotation.x = elapsedTime * 0.08;
        particles.rotation.y = elapsedTime * 0.12;
        particles.rotation.x = elapsedTime * 0.08;
        outerParticles.rotation.y = -elapsedTime * 0.16;

        // Interactive mouse lag follow (lerp)
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        group.rotation.y = mouseX;
        group.rotation.x = mouseY;

        renderer.render(scene, camera);
    }
    animateLoop();

    // Listen for theme toggle to update colors dynamically
    const themeBtn = document.getElementById("dock-theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            setTimeout(() => {
                const newColor = getAccentColor();
                material.color.setHex(newColor);
                pointsMaterial.color.setHex(newColor);
                outerMaterial.color.setHex(document.body.classList.contains("light-mode") ? 0x0088aa : 0x00b4d8);
            }, 50);
        });
    }

    // Resize Three.js viewport
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
})();

// ── HACKER TEXT SCRAMBLE ──
const hackerChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function hackerEffect(el) {
    const original = el.getAttribute("data-text") || el.textContent;
    let iteration = 0;
    const interval = setInterval(() => {
        el.textContent = original.split("").map((ch, i) => {
            if (ch === " ") return " ";
            if (i < iteration) return original[i];
            return hackerChars[Math.floor(Math.random() * hackerChars.length)];
        }).join("");
        if (iteration >= original.length) clearInterval(interval);
        iteration += 1 / 2;
    }, 30);
}

document.querySelectorAll(".hacker-text").forEach(el => {
    el.addEventListener("mouseenter", () => hackerEffect(el));
});

// ── CUSTOM CURSOR ──
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");
let mx = 0, my = 0, rx = 0, ry = 0;

if (dot && ring) {
    window.addEventListener("mousemove", e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + "px"; dot.style.top = my + "px";
    });
    (function cursorLoop() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + "px"; ring.style.top = ry + "px";
        requestAnimationFrame(cursorLoop);
    })();
    document.querySelectorAll("a,button,.border-glow-card,.social-card,.tech-card,.stat-box,.photo-card,input,textarea,.dock-item,.timeline-card").forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
}

// ── GSAP SCROLLTRIGGER ANIMATIONS (Enhanced Scroll Reveal) ──
(function initGSAPScrollTrigger() {
    // Register scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Section header fade-in and slide-up with hacker effect trigger
    document.querySelectorAll(".section-header.anim-reveal").forEach(header => {
        gsap.fromTo(header, 
            { opacity: 0, y: 35 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.9, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                onComplete: () => {
                    header.querySelectorAll(".hacker-text").forEach(el => hackerEffect(el));
                }
            }
        );
    });

    // Staggered grid cards for tech stack
    if (document.querySelector(".tech-grid")) {
        gsap.fromTo(".tech-grid .tech-card",
            { opacity: 0, y: 40, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.04,
                ease: "back.out(1.6)",
                scrollTrigger: {
                    trigger: ".tech-grid",
                    start: "top 82%"
                }
            }
        );
    }

    // Staggered gallery project cards reveal
    if (document.querySelector(".gallery-grid")) {
        gsap.fromTo(".gallery-grid .border-glow-card",
            { opacity: 0, y: 45 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.12,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".gallery-grid",
                    start: "top 80%"
                }
            }
        );
    }

    // Timeline nodes and cards staggered reveals
    document.querySelectorAll(".timeline-item").forEach(item => {
        const dot = item.querySelector(".timeline-dot");
        const card = item.querySelector(".timeline-card");
        
        gsap.fromTo(dot,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(2.2)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%"
                }
            }
        );
        
        gsap.fromTo(card,
            { opacity: 0, x: -35 },
            {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%"
                }
            }
        );
    });

    // About grid layout slide up and fade
    if (document.querySelector(".about-grid")) {
        gsap.fromTo(".about-grid .about-visual, .about-grid .about-info",
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1.1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-grid",
                    start: "top 82%"
                },
                onComplete: () => {
                    // Trigger skill bar width animation
                    document.querySelectorAll(".skill-bar-fill").forEach(bar => {
                        bar.style.width = bar.dataset.width + "%";
                    });
                }
            }
        );
    }

    // About story sections slide up and fade
    document.querySelectorAll(".about-story.anim-reveal").forEach((story, i) => {
        gsap.fromTo(story,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: i * 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: story,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // About profile card slide up and fade
    const cardWrapper = document.querySelector(".about-card-wrapper.anim-reveal");
    if (cardWrapper) {
        gsap.fromTo(cardWrapper,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: cardWrapper,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    }

    // Stats box grid staggered zoom-in
    if (document.querySelector(".stats-grid")) {
        gsap.fromTo(".stats-grid .stat-box",
            { opacity: 0, y: 30, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".stats-grid",
                    start: "top 88%"
                },
                onComplete: () => {
                    document.querySelectorAll(".stat-number").forEach(num => animateCounter(num));
                }
            }
        );
    }
})();

// ── STATS COUNTER ANIMATION ──
const countedSet = new Set();
function animateCounter(el) {
    if (countedSet.has(el)) return;
    countedSet.add(el);
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
    }
    requestAnimationFrame(update);
}

// ── MOBILE MENU ──
const menuToggle = document.getElementById("menu-toggle");
const navRight = document.getElementById("nav-right");
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navRight.classList.toggle("open");
        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });
    document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", () => {
            navRight.classList.remove("open");
            const icon = menuToggle.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        });
    });
}

// ── GENERALIZED 3D CARD TILT EFFECT ──
(function initTiltCards() {
    const cards = document.querySelectorAll(".photo-card, .tech-card, .border-glow-card, .timeline-card");
    
    cards.forEach(card => {
        const inner = card.querySelector(".photo-card-inner");
        
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const px = (x / rect.width) - 0.5;
            const py = (y / rect.height) - 0.5;
            
            let maxTilt = 12;
            if (card.classList.contains("tech-card")) maxTilt = 22; // Small cards tilt more

            const tiltX = -py * maxTilt;
            const tiltY = px * maxTilt;

            // Target elements based on nested hierarchy
            if (inner) {
                inner.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
            } else {
                card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
                card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.4), 0 0 25px var(--primary-glow)";
            }

            // Apply 3D Pop Out translateZ for child items
            const img = card.querySelector(".photo-card-img");
            if (img) {
                img.style.transform = `translateZ(30px) translateX(${-px * 12}px) translateY(${-py * 12}px)`;
            }
            
            const icon = card.querySelector(".tech-card i, .card-img-preview i");
            if (icon) {
                icon.style.transform = `translateZ(32px) scale(1.15)`;
            }
            
            const tag = card.querySelectorAll(".card-tag");
            tag.forEach(t => {
                t.style.transform = `translateZ(20px)`;
            });

            const date = card.querySelector(".timeline-date");
            if (date) {
                date.style.transform = `translateZ(25px)`;
            }
        });
        
        card.addEventListener("mouseleave", () => {
            if (inner) {
                inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
            } else {
                card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
                card.style.boxShadow = "";
            }

            const img = card.querySelector(".photo-card-img");
            if (img) {
                img.style.transform = "translateZ(0px) translateX(0) translateY(0)";
            }
            
            const icon = card.querySelector(".tech-card i, .card-img-preview i");
            if (icon) {
                icon.style.transform = "translateZ(0px) scale(1)";
            }
            
            const tag = card.querySelectorAll(".card-tag");
            tag.forEach(t => {
                t.style.transform = "translateZ(0px)";
            });

            const date = card.querySelector(".timeline-date");
            if (date) {
                date.style.transform = "translateZ(0px)";
            }
        });
    });
})();

// ── TECH CARD DYNAMIC HOVER COLORS ──
document.querySelectorAll(".tech-card").forEach(card => {
    const color = card.dataset.color;
    if (color) {
        card.style.setProperty("--hover-color", color);
        card.style.setProperty("--hover-glow", color + "33");
    }
});

// ── CONTACT FORM ──
const form = document.getElementById("contact-form");
const successEl = document.getElementById("form-success");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const btn = document.getElementById("send-btn");
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span>';

        if (!document.getElementById("sp-style")) {
            const s = document.createElement("style");
            s.id = "sp-style";
            s.textContent = `.spinner{display:inline-block;width:18px;height:18px;border:2px solid rgba(5,5,5,0.3);border-top-color:#050505;border-radius:50%;animation:sp .6s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}`;
            document.head.appendChild(s);
        }

        setTimeout(() => {
            successEl.classList.add("active");
            form.reset();
            btn.disabled = false;
            btn.innerHTML = `<span>${T[lang].form_send}</span> <i class="fa-solid fa-paper-plane"></i>`;
        }, 1200);
    });
}
document.getElementById("success-close")?.addEventListener("click", () => {
    successEl.classList.remove("active");
});

// ── SMOOTH SCROLL NAV ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// ── FLOATING BOTTOM DOCK CONTROLS ──
(function initBottomDock() {
    const dock = document.getElementById("mac-dock");
    if (!dock) return;

    const sections = document.querySelectorAll("section");
    const dockItems = dock.querySelectorAll("a.dock-item");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 220) {
                current = section.getAttribute("id");
            }
        });
        dockItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${current}`) {
                item.classList.add("active");
            }
        });
    });

    // Language Toggle from Dock
    const dockLangToggle = document.getElementById("dock-lang-toggle");
    if (dockLangToggle) {
        dockLangToggle.addEventListener("click", () => {
            applyLang(lang === "ID" ? "EN" : "ID");
        });
    }

    // Theme Toggle
    const dockThemeToggle = document.getElementById("dock-theme-toggle");
    const dockThemeIcon = document.getElementById("dock-theme-icon");

    let currentTheme = localStorage.getItem("sessho_theme") || "dark";
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        if (dockThemeIcon) {
            dockThemeIcon.classList.remove("fa-moon");
            dockThemeIcon.classList.add("fa-sun");
        }
    }

    if (dockThemeToggle) {
        dockThemeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const isLight = document.body.classList.contains("light-mode");
            localStorage.setItem("sessho_theme", isLight ? "light" : "dark");

            if (dockThemeIcon) {
                if (isLight) {
                    dockThemeIcon.classList.remove("fa-moon");
                    dockThemeIcon.classList.add("fa-sun");
                    dockThemeToggle.setAttribute("data-label", "Light Mode");
                } else {
                    dockThemeIcon.classList.remove("fa-sun");
                    dockThemeIcon.classList.add("fa-moon");
                    dockThemeToggle.setAttribute("data-label", "Dark Mode");
                }
            }
        });
    }
})();

// ── SPOTLIGHT TEXT EFFECT ──
document.querySelectorAll(".spotlight-text").forEach(el => {
    el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--mouse-x", x + "px");
        el.style.setProperty("--mouse-y", y + "px");
        el.classList.add("spotlight-active");
    });
    el.addEventListener("mouseleave", () => {
        el.classList.remove("spotlight-active");
    });
});

// Spotlight active style (injected dynamically)
(function injectSpotlightStyle() {
    const style = document.createElement("style");
    style.textContent = `
        .spotlight-text.spotlight-active {
            background-image: radial-gradient(
                circle 80px at var(--mouse-x) var(--mouse-y),
                var(--primary) 0%,
                var(--silver-dim) 100%
            );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
        }
    `;
    document.head.appendChild(style);
})();

// ── INIT ──
window.addEventListener("load", () => {
    applyLang(lang);
    document.querySelectorAll(".hero .hacker-text").forEach(el => hackerEffect(el));
});