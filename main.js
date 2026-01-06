gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    const mm = gsap.matchMedia();

    mm.add(
        {
            desktop: "(min-width: 992px)",
            tablet: "(min-width: 576px) and (max-width: 991.98px)",
            mobile: "(max-width: 575.98px)"
        },
        (context) => {

            const { desktop, tablet, mobile } = context.conditions;

            /* ================= PRESETS ================= */
            const presets = {
                hero: {
                    y: mobile ? 30 : 60,
                    duration: mobile ? 0.7 : 1,
                    stagger: mobile ? 0.12 : 0.2
                },
                card: {
                    y: mobile ? 20 : 50,
                    scale: mobile ? 1 : 0.95,
                    duration: mobile ? 0.5 : 0.6
                },
                smallCard: {
                    y: mobile ? 18 : 40,
                    duration: mobile ? 0.45 : 0.6
                }
            };

            /* ================= HELPERS ================= */
            const scrollDefaults = (trigger, extra = {}) => ({
                trigger,
                start: mobile ? "top 95%" : "top 85%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
                ...extra
            });

            /* ================= HERO ================= */
            gsap.from(
                ".hero-content h1, .hero-content h2, .hero-content p, .hero-content a",
                {
                    opacity: 0,
                    y: presets.hero.y,
                    duration: presets.hero.duration,
                    stagger: presets.hero.stagger,
                    ease: "power3.out"
                }
            );

            /* ================= SPEC BOX ================= */
            gsap.utils.toArray(".spec-box").forEach((box, i) => {
                gsap.from(box, {
                    scrollTrigger: scrollDefaults(box),
                    opacity: 0,
                    y: presets.smallCard.y,
                    duration: presets.smallCard.duration,
                    delay: i * 0.04,
                    ease: "power3.out"
                });
            });

            /* ================= BENEFITS ================= */
            gsap.utils.toArray(".benefit-card").forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: scrollDefaults(card),
                    opacity: 0,
                    y: presets.card.y,
                    scale: presets.card.scale,
                    duration: presets.card.duration,
                    delay: i * 0.04,
                    ease: "power3.out"
                });
            });

            /* ================= CAPACITY ================= */
            gsap.utils.toArray(".capacity-card").forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: scrollDefaults(card),
                    opacity: 0,
                    y: presets.card.y,
                    scale: presets.card.scale,
                    duration: presets.card.duration,
                    delay: i * 0.04,
                    ease: "power3.out"
                });
            });

            /* ================= TIMELINE ================= */
            gsap.from(".timeline-step", {
                scrollTrigger: scrollDefaults(".timeline-wrapper", {
                    start: mobile ? "top 98%" : "top 80%"
                }),
                opacity: 0,
                y: mobile ? 18 : 40,
                stagger: mobile ? 0.06 : 0.12,
                duration: mobile ? 0.45 : 0.6,
                ease: "power2.out"
            });

            /* ================= WARRANTY ================= */
            gsap.from(".warranty-circle-wrapper", {
                scrollTrigger: scrollDefaults(".warranty-highlight"),
                scale: mobile ? 0.85 : 0.6,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            });

            /* ================= QUOTE ================= */
            gsap.from(".quote-text, .quote-author", {
                scrollTrigger: scrollDefaults(".quote-section"),
                opacity: 0,
                y: mobile ? 18 : 30,
                stagger: 0.12,
                duration: 0.6,
                ease: "power3.out"
            });

            /* ================= TESTIMONIALS ================= */
            gsap.from(".testimonials-section .text-center", {
                scrollTrigger: scrollDefaults(".testimonials-section"),
                opacity: 0,
                y: mobile ? 18 : 40,
                duration: 0.7,
                ease: "power3.out"
            });

            gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: scrollDefaults(card),
                    opacity: 0,
                    y: mobile ? 18 : 50,
                    scale: mobile ? 1 : 0.96,
                    duration: mobile ? 0.5 : 0.6,
                    delay: i * 0.03,
                    ease: "power3.out"
                });
            });

            /* ================= ABOUT ================= */
            gsap.from("#about .col-lg-10", {
                scrollTrigger: scrollDefaults("#about"),
                opacity: 0,
                y: mobile ? 28 : 60,
                duration: mobile ? 0.7 : 0.9,
                ease: "power3.out"
            });

            gsap.from(".vision-card", {
                scrollTrigger: scrollDefaults(".vision-card"),
                opacity: 0,
                x: mobile ? -18 : -50,
                duration: 0.7,
                ease: "power3.out"
            });

            gsap.from(".mission-card", {
                scrollTrigger: scrollDefaults(".mission-card"),
                opacity: 0,
                x: mobile ? 18 : 50,
                duration: 0.7,
                ease: "power3.out"
            });

            /* ================= FAQ ================= */
            gsap.from(".accordion-item", {
                scrollTrigger: scrollDefaults(".faq-section"),
                opacity: 0,
                y: mobile ? 12 : 25,
                stagger: 0.08,
                duration: mobile ? 0.4 : 0.5,
                ease: "power2.out"
            });



            /* ================= CLEANUP ================= */
            return () => {
                ScrollTrigger.getAll().forEach(st => st.kill());
            };
        }
    );

    /* ================= REFRESH ================= */
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
});
