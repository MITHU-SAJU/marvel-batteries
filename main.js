gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /* ================= HERO ================= */
    gsap.from(".hero-content h1, .hero-content h2, .hero-content p, .hero-content a", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.utils.toArray(".spec-box").forEach((box, i) => {
        gsap.from(box, {
            scrollTrigger: {
                trigger: box,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power3.out"
        });
    });

    /* ================= BENEFITS SECTION ================= */
    gsap.utils.toArray(".benefit-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            opacity: 0,
            y: 50,          // bottom → top
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power3.out"
        });
    });



    /* ================= CAPACITY PLANS ================= */
    gsap.utils.toArray(".capacity-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            opacity: 0,
            y: 60,          // bottom → top
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power3.out"
        });
    });



    /* ================= TIMELINE ================= */
    gsap.from(".timeline-step", {
        scrollTrigger: {
            trigger: ".timeline-wrapper",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out"
    });

    gsap.from(".warranty-circle-wrapper", {
        scrollTrigger: {
            trigger: ".warranty-highlight",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        scale: 0.6,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    });

    gsap.from(".warranty-highlight h2, .warranty-highlight p", {
        scrollTrigger: {
            trigger: ".warranty-highlight",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
    });

    /* ================= QUOTE SECTION ================= */
    gsap.from(".quote-mark", {
        scrollTrigger: {
            trigger: ".quote-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    });

    gsap.from(".quote-text, .quote-author", {
        scrollTrigger: {
            trigger: ".quote-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out"
    });

    /* ================= ABOUT (BOTTOM → TOP) ================= */
    gsap.from("#about .col-lg-10", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out"
    });

    /* ================= VISION (LEFT → RIGHT) ================= */
    gsap.from(".vision-card", {
        scrollTrigger: {
            trigger: ".vision-card",
            start: "top 85%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        x: -50,
        duration: 0.7,
        ease: "power3.out"
    });

    /* ================= MISSION (RIGHT → LEFT) ================= */
    gsap.from(".mission-card", {
        scrollTrigger: {
            trigger: ".mission-card",
            start: "top 85%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        x: 50,
        duration: 0.7,
        ease: "power3.out"
    });


    gsap.from(".accordion-item", {
        scrollTrigger: {
            trigger: ".faq-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 25,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
    });

    gsap.from(".faq-cta-card", {
        scrollTrigger: {
            trigger: ".faq-cta-card",
            start: "top 85%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out"
    });



    /* ================= CONTACT SECTION ================= */
    const contactTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        }
    });

    /* FORM CARD (BOTTOM → UP) */
    contactTl.from(".contact-form", {
        opacity: 0,
        y: 60,          // bottom → up
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out"
    })

        /* FORM FIELDS (STAGGER – BOTTOM → UP) */
        .from(".contact-form .form-control, .contact-form button", {
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.4")

        /* MAP (BOTTOM → UP) */
        .from(".map-wrapper", {
            opacity: 0,
            y: 60,          // bottom → up
            scale: 0.96,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.5");



    /* SECTION HEADING */
    gsap.from(".testimonials-section .text-center", {
        scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 85%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out"
    });

    /* TESTIMONIAL CARDS – SAFE PER-CARD ANIMATION */
    gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play reverse play reverse"
            },
            opacity: 0,
            y: 50,
            scale: 0.96,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power3.out"
        });
    });



});

/* Refresh ScrollTrigger after images and fonts finish loading to avoid misaligned triggers */
window.addEventListener('load', () => {
    // allow one tick for layout to stabilise
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 50);
});
