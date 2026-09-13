let currentLanguage = "en";

const languageContent = {
    en: {
        title: "Pablo Interiano — Junior Software Developer",
        description: "Portfolio of Pablo Interiano, a Junior Software Developer focused on full-stack web development, reliable business workflows, and responsive interfaces.",
        ogDescription: "Full-stack web development with Laravel, Angular, Node.js, PHP, and SQL.",
        systemReady: "SYSTEM / READY",
        systemHint: "Select a layer to inspect its role.",
        caseStudyTitle: (project) => "Project " + project + " Case Study",
        metaStates: [["SYSTEM / ACTIVE", "BUILD / WEB APPLICATIONS"], ["MODE / FULL STACK", "STATUS / OPEN TO REMOTE"], ["LOCATION / TEGUCIGALPA, HN", "PI. / SYSTEM ORIGIN"]]
    },
    es: {
        title: "Pablo Interiano — Desarrollador de Software Junior",
        description: "Portafolio de Pablo Interiano, Desarrollador de Software Junior enfocado en desarrollo web full stack, procesos de negocio confiables e interfaces responsivas.",
        ogDescription: "Desarrollo web full stack con Laravel, Angular, Node.js, PHP y SQL.",
        skipLink: "Ir al contenido principal", languageLabel: "Idioma", mainNavigation: "Navegación principal", themeToggle: "Cambiar tema visual", menuToggle: "Abrir o cerrar el menú de navegación",
        navWork: "Proyectos", navProcess: "Cómo trabajo", navExperience: "Experiencia", navTechnologies: "Tecnologías", navAbout: "Perfil", navContact: "Contacto", emailMe: "Escríbeme ↗",
        heroBadge: "DESARROLLADOR DE SOFTWARE JUNIOR · DISPONIBLE PARA OPORTUNIDADES REMOTAS", heroHeadline: "Desarrollo aplicaciones web confiables para procesos organizacionales reales.", viewWork: "Ver proyectos", scroll: "DESPLAZAR",
        workLabel: "02 / PROYECTOS SELECCIONADOS", workTitle: "Proyectos seleccionados", projectOneMeta: "· SISTEMA DE RECURSOS HUMANOS", projectOneTitle: "Sistema de Gestión de Recursos Humanos", projectOneDescription: "Plataforma interna de RR. HH. que respalda procesos de colaboradores, nómina, deducciones, impuesto sobre la renta hondureño, reportes y validación.", projectOneRole: "ROL / Desarrollo full stack · Procesos de nómina y reportes",
        projectTwoMeta: "· PLATAFORMA UNIVERSITARIA DE INVESTIGACIÓN", projectTwoTitle: "Plataforma de Gestión de Investigación SICIHT", projectTwoDescription: "Plataforma universitaria para registro de proyectos, solicitudes, resultados esperados, repositorios de archivos, notificaciones y procesos administrativos de investigación.", projectTwoRole: "ROL / Desarrollo full stack · Flujos de base de datos y administración",
        projectThreeMeta: "· PLATAFORMA UNIVERSITARIA", projectThreeTitle: "Plataforma de Vinculación Universitaria de la UNAH", projectThreeDescription: "Plataforma universitaria en producción para la oferta, registro y validación de cursos completados y microcredenciales.", projectThreeRole: "ROL / Desarrollo frontend · Interfaces responsivas",
        projectFourMeta: "· SISTEMA INTERNO DE SOPORTE", projectFourTitle: "Mesa de Servicio Interna", projectFourDescription: "Sistema interno de tickets que centraliza el registro, la asignación, el seguimiento y la resolución de solicitudes de soporte técnico.", projectFourRole: "ROL / Desarrollo full stack · Flujos de solicitudes de soporte", caseStudy: "Explorar caso de estudio ↗",
        processLabel: "03 / CÓMO TRABAJO", processTitle: "Cómo trabajo", processUnderstand: "ENTENDER", processUnderstandDescription: "Primero comprendo el problema, los objetivos de negocio y las restricciones antes de elegir el stack tecnológico.", processBuild: "CONSTRUIR", processBuildDescription: "Me enfoco en código mantenible, tipado seguro, interfaces útiles y comportamiento predecible y determinista.", processIterate: "ITERAR", processIterateDescription: "Entrego pronto, recopilo métricas reales, mejoro continuamente y hago evolucionar los sistemas según su uso.",
        experienceLabel: "04 / EXPERIENCIA", experienceTitle: "Experiencia", coveloRole: "Practicante de Desarrollo de Software", coveloCompany: "Fundación COVELO · Tegucigalpa, Honduras · jun 2026 – actualidad", coveloOne: "Desarrollo de un sistema interno de gestión de tickets de mesa de servicio con Django y Python para solicitudes de soporte técnico.", coveloTwo: "Desarrollé funcionalidades de gestión de Recursos Humanos con Laravel, Livewire, JavaScript y SQL para procesos de colaboradores, nómina y reportes.", coveloThree: "Implementé deducciones de nómina y cálculos del impuesto sobre la renta de Honduras con validación y controles para evitar registros duplicados.", coveloFour: "Desarrollé filtros y exportaciones de reportes, además de componentes responsivos de WordPress y optimizaciones para el sitio en producción.",
        sicihtRole: "Practicante de Desarrollo Full Stack", sicihtCompany: "SICIHT UNAH · Tegucigalpa, Honduras · nov 2025 – mar 2026", sicihtOne: "Desarrollé y mantuve funcionalidades de gestión de investigación universitaria con Angular, Node.js, Express y SQL Server.", sicihtTwo: "Creé tablas, procedimientos almacenados y consultas para registros, solicitudes, repositorios y notificaciones.", sicihtThree: "Implementé cambios coordinados en frontend, backend y base de datos para procesos administrativos mediante Git y GitLab.", unahRole: "Desarrollador Frontend", unahCompany: "Plataforma de Vinculación Universitaria de la UNAH · 2025", unahOne: "Desarrollé interfaces responsivas en producción con Next.js para flujos de registro y validación de cursos.", unahTwo: "Respaldé la oferta de cursos, la validación de cursos completados y los procesos de microcredenciales.",
        technologiesLabel: "05 / TECNOLOGÍAS", technologiesTitle: "Herramientas con las que trabajo", toolchainMap: "HERRAMIENTAS / MAPA DE SEÑALES", dataCategory: "Datos", storedProcedures: "Procedimientos almacenados", toolsCategory: "Herramientas",
        aboutLabel: "06 / PERFIL", aboutTitle: "Detrás del código", aboutText: "Estudiante de Ingeniería en Sistemas con experiencia práctica en el desarrollo y mantenimiento de aplicaciones web con Laravel, Livewire, Angular, Node.js, PHP y SQL. Convierto requerimientos organizacionales en soluciones de software confiables mediante lógica de negocio, APIs REST, desarrollo de bases de datos, interfaces responsivas y trabajo en producción.", basedIn: "Ubicación", languages: "Idiomas", spokenLanguages: "Español · Inglés B2 · Francés A2", focus: "Enfoque", focusValue: "Desarrollo Web Full Stack", status: "Estado", statusValue: "Disponible para oportunidades remotas", educationTitle: "EDUCACIÓN Y CERTIFICACIÓN", unahEducation: "UNAH · Ingeniería en Sistemas", unahDate: "2021 – Graduación prevista mar 2027", frontEndCertification: "Desarrollo Front-End", bilingualProgram: "Programa bilingüe · 2021",
        contactLabel: "07 / CONTACTO", contactLineOne: "CONSTRUYAMOS", contactLineTwo: "ALGO", contactLineThree: "ÚTIL", contactSub: "¿Tienes una oportunidad de desarrollo de software junior, una aplicación web o un proceso organizacional que pueda mejorar? Hablemos.", email: "Correo", phone: "Teléfono", connect: "Conectar ↗", viewCode: "Ver código ↗", portfolio: "Portafolio", visitSite: "Visitar sitio ↗", copyright: "© 2026 Pablo Interiano. Todos los derechos reservados.", builtWith: "Creado con HTML, CSS, JavaScript y Anime.js", closeModal: "Cerrar modal", caseStudyOverview: "Resumen del caso de estudio", modalBody: "Los detalles del proyecto están disponibles a solicitud.", easterEgg: "Logro desbloqueado: encontraste el easter egg.",
        systemReady: "SISTEMA / LISTO", systemHint: "Selecciona una capa para conocer su función.", caseStudyTitle: (project) => "Caso de estudio del proyecto " + project,
        metaStates: [["SISTEMA / ACTIVO", "DESARROLLO / APLICACIONES WEB"], ["MODO / FULL STACK", "ESTADO / DISPONIBLE REMOTO"], ["UBICACIÓN / TEGUCIGALPA, HN", "PI. / ORIGEN DEL SISTEMA"]],
        nodes: {
            interfaces: { text: "Interfaz", detail: "INTERFACES", copy: "Interfaces web responsivas desarrolladas con Angular, React, Next.js, Livewire, HTML y CSS.", label: "Interfaces" },
            engineering: { text: "Ingeniería", detail: "LÓGICA BACKEND", copy: "Flujos de negocio implementados con Laravel, Node.js, Express, PHP y Django.", label: "Lógica backend" },
            data: { text: "Datos", detail: "BASES DE DATOS", copy: "SQL Server, MySQL, procedimientos almacenados, datos de reportes y controles de validación.", label: "Bases de datos" },
            systems: { text: "Sistemas", detail: "ENTREGA", copy: "Trabajo en producción respaldado por Git, GitLab, Docker, Linux, Bash y Scrum.", label: "Entrega" },
            product: { text: "Producto", detail: "RESULTADOS", copy: "Requerimientos organizacionales convertidos en soluciones de software confiables y útiles.", label: "Resultados de producto" }
        }
    }
};

function languageText(key) {
    return languageContent[currentLanguage][key] ?? languageContent.en[key];
}

function initLanguage() {
    const select = document.getElementById("language-select");
    const defaults = new Map([...document.querySelectorAll("[data-i18n]")].map((element) => [element.dataset.i18n, element.textContent.trim()]));
    const nodeDefaults = new Map([...document.querySelectorAll("[data-i18n-node]")].map((node) => [node.dataset.i18nNode, { text: node.textContent, detail: node.dataset.detail, copy: node.dataset.copy, label: node.getAttribute("aria-label") }]));
    const applyLanguage = (language) => {
        currentLanguage = language === "es" ? "es" : "en";
        document.documentElement.lang = currentLanguage;
        document.title = languageText("title");
        document.querySelector('meta[name="description"]')?.setAttribute("content", languageText("description"));
        document.querySelector('meta[property="og:title"]')?.setAttribute("content", languageText("title"));
        document.querySelector('meta[property="og:description"]')?.setAttribute("content", languageText("ogDescription"));
        document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = currentLanguage === "es" ? languageText(element.dataset.i18n) : defaults.get(element.dataset.i18n); });
        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => { element.setAttribute("aria-label", currentLanguage === "es" ? languageText(element.dataset.i18nAriaLabel) : element.dataset.i18nAriaLabel === "mainNavigation" ? "Main Navigation" : element.dataset.i18nAriaLabel === "languageLabel" ? "Language" : element.dataset.i18nAriaLabel === "themeToggle" ? "Switch visual theme" : element.dataset.i18nAriaLabel === "menuToggle" ? "Toggle navigation menu" : "Close modal"); });
        document.querySelectorAll("[data-i18n-node]").forEach((node) => {
            const initial = nodeDefaults.get(node.dataset.i18nNode);
            const translation = languageContent[currentLanguage].nodes?.[node.dataset.i18nNode];
            node.textContent = translation?.text ?? initial.text;
            node.dataset.detail = translation?.detail ?? initial.detail;
            node.dataset.copy = translation?.copy ?? initial.copy;
            node.setAttribute("aria-label", translation?.label ?? initial.label);
        });
        select.value = currentLanguage;
        localStorage.setItem("portfolio-language", currentLanguage);
        window.dispatchEvent(new Event("portfolio:languagechange"));
    };
    const storedLanguage = localStorage.getItem("portfolio-language");
    applyLanguage(storedLanguage || (navigator.language?.startsWith("es") ? "es" : "en"));
    select?.addEventListener("change", () => applyLanguage(select.value));
}

document.addEventListener("DOMContentLoaded", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    initLanguage();
    initTheme();
    initNavigation();
    initSystemDiagram(reducedMotion);
    initModal();
    initEasterEgg();

    if (!reducedMotion && typeof anime !== "undefined") {
        initHeroAnimation();
        initHeroWorkTransition();
        initSectionAnimations();
        initContactAnimation();
        initArtMotion();
    }
});

function initTheme() {
    const toggle = document.getElementById("theme-toggle");
    const storedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let theme = storedTheme || (prefersDark ? "dark" : "light");

    function applyTheme() {
        document.documentElement.dataset.theme = theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute(
            "content",
            theme === "dark" ? "#0A0908" : "#F2F4F3"
        );
    }

    applyTheme();
    toggle?.addEventListener("click", () => {
        theme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("portfolio-theme", theme);
        applyTheme();
    });
}

function initNavigation() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const links = document.querySelectorAll(".nav-link, .mobile-nav-link");

    const setMenu = (open) => {
        mobileNav?.classList.toggle("open", open);
        mobileNav?.setAttribute("aria-hidden", String(!open));
        toggle?.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
    };

    toggle?.addEventListener("click", () => setMenu(!mobileNav?.classList.contains("open")));
    links.forEach((link) => link.addEventListener("click", () => setMenu(false)));

    const sections = [...document.querySelectorAll("main section[id]")];
    const navigation = [...document.querySelectorAll(".nav-link")];
    const navigationRoot = document.querySelector(".navbar nav");
    const marker = document.createElement("span");
    marker.className = "nav-marker";
    marker.setAttribute("aria-hidden", "true");
    navigationRoot?.append(marker);
    let activeLink;

    const setActiveNavigation = (sectionId) => {
        activeLink = navigation.find((link) => link.getAttribute("href") === "#" + sectionId);
        navigation.forEach((link) => {
            const isActive = link === activeLink;
            link.classList.toggle("active", isActive);
            if (isActive) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });
        if (!activeLink || !navigationRoot) {
            marker.style.opacity = "0";
            return;
        }

        const navigationBounds = navigationRoot.getBoundingClientRect();
        const linkBounds = activeLink.getBoundingClientRect();
        marker.style.opacity = "1";
        marker.style.transform = "translateX(" + (linkBounds.left - navigationBounds.left + linkBounds.width / 2 - 3) + "px)";
    };

    setActiveNavigation("hero");
    navigation.forEach((link) => {
        link.addEventListener("click", () => setActiveNavigation(link.getAttribute("href").slice(1)));
    });
    window.addEventListener("resize", () => {
        if (activeLink) setActiveNavigation(activeLink.getAttribute("href").slice(1));
    });
    document.fonts?.ready?.then(() => {
        if (activeLink) setActiveNavigation(activeLink.getAttribute("href").slice(1));
    });
    const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        setActiveNavigation(visible.target.id);
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0, .1, .4] });

    sections.forEach((section) => observer.observe(section));

    let scheduled = false;
    window.addEventListener("scroll", () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
            navbar?.classList.toggle("scrolled", window.scrollY > 24);
            scheduled = false;
        });
    }, { passive: true });
}

function initSystemDiagram(reducedMotion) {
    const container = document.getElementById("system-core");
    const svg = document.getElementById("core-svg");
    const center = container?.querySelector(".core-center-node");
    const nodes = [...(container?.querySelectorAll(".orbital-node") || [])];
    const inspector = container?.querySelector("#system-inspector");
    if (!container || !svg || !center) return;
    const canAnimate = !reducedMotion && typeof anime !== "undefined";
    const nodeDepths = [20, -4, 14, -12, 8];
    const routes = [[0, 4, 3], [1, 2, 4], [2, 0, 3], [3, 1, 2], [4, 0, 1]];
    let selectedNode;
    let connectionPoints = [];
    let signal;
    let signalTimer;
    let metaTimer;
    let routeBusy = false;

    const drawLines = () => {
        svg.replaceChildren();
        connectionPoints = [];
        const bounds = container.getBoundingClientRect();
        const centerBounds = center.getBoundingClientRect();
        const centerX = centerBounds.left + centerBounds.width / 2 - bounds.left;
        const centerY = centerBounds.top + centerBounds.height / 2 - bounds.top;

        nodes.forEach((node) => {
            const nodeBounds = node.getBoundingClientRect();
            const nX = nodeBounds.left + nodeBounds.width / 2 - bounds.left;
            const nY = nodeBounds.top + nodeBounds.height / 2 - bounds.top;
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", centerX);
            line.setAttribute("y1", centerY);
            line.setAttribute("x2", nodeBounds.left + nodeBounds.width / 2 - bounds.left);
            line.setAttribute("y2", nodeBounds.top + nodeBounds.height / 2 - bounds.top);
            line.setAttribute("stroke", "var(--border)");
            line.setAttribute("stroke-width", "1");
            line.setAttribute("stroke-dasharray", "3 5");
            svg.append(line);
            connectionPoints.push({ x: nX, y: nY });
        });

        signal = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        signal.setAttribute("class", "system-signal");
        signal.setAttribute("cx", centerX);
        signal.setAttribute("cy", centerY);
        signal.setAttribute("r", "0");
        svg.append(signal);
    };

    const updateInspector = (node) => {
        const label = inspector?.querySelector(".system-inspector-label");
        const copy = inspector?.querySelector("p");
        if (!node) {
            container.classList.remove("has-selection");
            if (label) label.textContent = languageText("systemReady");
            if (copy) copy.textContent = languageText("systemHint");
            return;
        }
        container.classList.add("has-selection");
        if (label) label.textContent = node.dataset.detail;
        if (copy) copy.textContent = node.dataset.copy;
    };

    function startNodeFloat(node, index) {
        if (!canAnimate) return;
        anime({
            targets: node,
            translateY: index % 2 ? -3 : 3,
            translateZ: nodeDepths[index],
            direction: "alternate",
            duration: 2800 + index * 250,
            easing: "easeInOutSine",
            loop: true
        });
    }

    function releaseNode() {
        if (!selectedNode) return;
        const previous = selectedNode;
        const index = nodes.indexOf(previous);
        selectedNode = undefined;
        nodes.forEach((node) => {
            node.classList.remove("is-selected");
            node.setAttribute("aria-pressed", "false");
        });
        updateInspector();
        if (!canAnimate) return;
        anime.remove(previous);
        anime({
            targets: previous,
            translateX: 0,
            translateY: 0,
            translateZ: nodeDepths[index],
            scale: 1,
            duration: 360,
            easing: "easeOutCubic",
            complete: () => startNodeFloat(previous, index)
        });
    }

    function selectNode(node) {
        if (selectedNode === node) {
            releaseNode();
            return;
        }
        releaseNode();
        selectedNode = node;
        const index = nodes.indexOf(node);
        nodes.forEach((item) => {
            const isSelected = item === node;
            item.classList.toggle("is-selected", isSelected);
            item.setAttribute("aria-pressed", String(isSelected));
        });
        updateInspector(node);
        if (!canAnimate) return;
        anime.remove(node);
        anime({
            targets: node,
            translateX: 0,
            translateY: 0,
            translateZ: 54,
            scale: 1.08,
            duration: 420,
            easing: "easeOutCubic"
        });
        sendSignal(routes[index]);
    }

    nodes.forEach((node, index) => {
        node.addEventListener("click", () => selectNode(node));
        node.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectNode(node);
            }
            if (event.key === "Escape") {
                event.preventDefault();
                releaseNode();
            }
            if (["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].includes(event.key)) {
                event.preventDefault();
                const direction = event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1;
                const next = nodes[(index + direction + nodes.length) % nodes.length];
                next.focus();
                selectNode(next);
            }
        });
    });

    drawLines();
    new ResizeObserver(drawLines).observe(container);
    if (!canAnimate) return;

    const sendSignal = (routeIndexes = [0, 2, 4]) => {
        if (routeBusy || !signal || connectionPoints.length < 3) return;
        routeBusy = true;
        const bounds = container.getBoundingClientRect();
        const centerBounds = center.getBoundingClientRect();
        const origin = {
            x: centerBounds.left + centerBounds.width / 2 - bounds.left,
            y: centerBounds.top + centerBounds.height / 2 - bounds.top
        };
        const route = [...routeIndexes.map((index) => connectionPoints[index]).filter(Boolean), origin];
        let from = origin;

        route.forEach((to, index) => {
            const point = { x: from.x, y: from.y, radius: index === 0 ? 0 : 4 };
            anime({
                targets: point,
                x: to.x,
                y: to.y,
                radius: index === route.length - 1 ? 0 : 4,
                delay: index * 420,
                duration: 520,
                easing: "easeInOutSine",
                update: () => {
                    signal.setAttribute("cx", String(point.x));
                    signal.setAttribute("cy", String(point.y));
                    signal.setAttribute("r", String(point.radius));
                }
            });
            from = to;
        });
        window.setTimeout(() => { routeBusy = false; }, route.length * 420 + 560);
    };

    const metaLines = [...container.querySelectorAll(".system-meta")];
    let metaIndex = 0;
    const cycleMeta = () => {
        const metaStates = languageText("metaStates");
        metaIndex = (metaIndex + 1) % metaStates.length;
        anime({
            targets: metaLines,
            opacity: [1, 0],
            duration: 180,
            easing: "easeInQuad",
            complete: () => {
                metaLines.forEach((line, index) => { line.textContent = metaStates[metaIndex][index]; });
                anime({ targets: metaLines, opacity: [0, 1], duration: 260, easing: "easeOutQuad" });
            }
        });
    };

    window.addEventListener("portfolio:languagechange", () => {
        metaIndex = 0;
        languageText("metaStates")[0].forEach((text, index) => { if (metaLines[index]) metaLines[index].textContent = text; });
        updateInspector(selectedNode);
    });

    new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            sendSignal();
            signalTimer = window.setInterval(sendSignal, 9000);
            metaTimer = window.setInterval(cycleMeta, 6500);
            return;
        }
        window.clearInterval(signalTimer);
        window.clearInterval(metaTimer);
    }, { threshold: .2 }).observe(container);

    nodes.forEach(startNodeFloat);

    if (window.matchMedia("(pointer: fine)").matches) {
        let pointerFrame;
        container.addEventListener("pointermove", (event) => {
            if (pointerFrame) return;
            pointerFrame = requestAnimationFrame(() => {
                const bounds = container.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - .5;
                const y = (event.clientY - bounds.top) / bounds.height - .5;
                container.style.setProperty("--tilt-x", String(-y * 5) + "deg");
                container.style.setProperty("--tilt-y", String(x * 5) + "deg");
                anime({
                    targets: center,
                    translateX: -50 + x * 18,
                    translateY: -50 + y * 18,
                    translateZ: 38,
                    duration: 280,
                    easing: "easeOutQuad"
                });
                nodes.forEach((node, index) => {
                    if (node === selectedNode) return;
                    anime({
                        targets: node,
                        translateX: -x * nodeDepths[index],
                        translateZ: nodeDepths[index],
                        duration: 280,
                        easing: "easeOutQuad"
                    });
                });
                pointerFrame = undefined;
            });
        });
        container.addEventListener("pointerleave", () => {
            container.style.setProperty("--tilt-x", "0deg");
            container.style.setProperty("--tilt-y", "0deg");
            anime({ targets: center, translateX: -50, translateY: -50, translateZ: 38, duration: 350, easing: "easeOutQuad" });
            nodes.forEach((node, index) => {
                anime({ targets: node, translateX: 0, translateZ: nodeDepths[index], duration: 350, easing: "easeOutQuad" });
            });
        });
    }

    container.addEventListener("portfolio:easter", () => {
        anime({
            targets: nodes,
            translateX: (_, index) => (index - 2) * 15,
            translateY: (_, index) => (index % 2 ? -18 : 18),
            translateZ: (_, index) => nodeDepths[index],
            scale: 1.08,
            delay: anime.stagger(80),
            duration: 450,
            easing: "easeOutCubic"
        });
        window.setTimeout(() => {
            nodes.forEach((node, index) => {
                anime({ targets: node, translateX: 0, translateY: 0, translateZ: nodeDepths[index], scale: 1, duration: 600, easing: "easeOutCubic" });
            });
        }, 2600);
    });
}

function initHeroAnimation() {
    anime.timeline({ easing: "easeOutQuart" })
        .add({ targets: ".hero-badge", opacity: [.65, 1], translateY: [14, 0], duration: 500 })
        .add({ targets: ".hero-title", opacity: [.45, 1], translateY: [24, 0], duration: 720 }, "-=260")
        .add({ targets: ".hero-headline, .hero-subline", opacity: [.55, 1], translateY: [12, 0], duration: 500 }, "-=420")
        .add({ targets: ".hero-actions", opacity: [.55, 1], translateY: [10, 0], duration: 450 }, "-=380")
        .add({ targets: "#system-core", opacity: [.5, 1], scale: [.97, 1], duration: 720 }, "-=600")
        .add({ targets: ".system-calibration", opacity: [0, 1], rotate: [-18, 0], duration: 640 }, "-=570")
        .add({
            targets: "#core-svg line",
            strokeDashoffset: [18, 0],
            opacity: [0, 1],
            delay: anime.stagger(75),
            duration: 520
        }, "-=500")
        .add({ targets: ".core-center-node", scale: [.82, 1], duration: 420 }, "-=450");
}

function initHeroWorkTransition() {
    const hero = document.getElementById("hero");
    const content = hero?.querySelector(".hero-content");
    const system = document.getElementById("system-core");
    if (!hero || !content || !system) return;
    const labels = system.querySelectorAll(".orbital-node, .system-meta");
    const diagram = system.querySelector("#core-svg");
    const calibration = system.querySelector(".system-calibration");

    let scheduled = false;
    window.addEventListener("scroll", () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
            const progress = Math.min(Math.max(window.scrollY / (hero.offsetHeight * .65), 0), 1);
            content.style.opacity = String(1 - progress * .55);
            system.style.opacity = String(1 - progress * .14);
            labels.forEach((label) => { label.style.opacity = String(1 - progress); });
            diagram.style.opacity = String(1 - progress * .65);
            calibration.style.opacity = String(1 - progress * .8);
            scheduled = false;
        });
    }, { passive: true });
}

function initSectionAnimations() {
    const targets = document.querySelectorAll(".project-card, .process-card, .timeline-item, .tech-grid > div, .about-layout");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            anime({
                targets: entry.target,
                opacity: [0, 1],
                translateY: [22, 0],
                duration: 650,
                easing: "easeOutCubic"
            });
            observer.unobserve(entry.target);
        });
    }, { threshold: .12 });

    targets.forEach((target) => {
        target.style.opacity = "0";
        observer.observe(target);
    });

    const timeline = document.querySelector(".timeline");
    if (timeline) {
        timeline.style.setProperty("--timeline-scale", "0");
        new IntersectionObserver((entries, timelineObserver) => {
            if (!entries[0].isIntersecting) return;
            const line = { scale: 0 };
            anime({
                targets: line,
                scale: 1,
                duration: 850,
                easing: "easeOutCubic",
                update: () => timeline.style.setProperty("--timeline-scale", String(line.scale))
            });
            timeline.querySelectorAll(".timeline-item").forEach((item, index) => {
                anime({
                    targets: item,
                    opacity: [0, 1],
                    translateY: [10, 0],
                    delay: 300 + index * 130,
                    duration: 420,
                    easing: "easeOutCubic",
                    begin: () => item.classList.add("is-active")
                });
            });
            timelineObserver.unobserve(timeline);
        }, { threshold: .2 }).observe(timeline);
    }
}

function initContactAnimation() {
    const heading = document.querySelector(".contact-heading");
    const contactArt = document.querySelector(".contact-art");
    if (!heading) return;

    new IntersectionObserver((entries, observer) => {
        if (!entries[0].isIntersecting) return;
        anime({
            targets: ".contact-word",
            opacity: [0, 1],
            translateY: [26, 0],
            delay: anime.stagger(110),
            duration: 680,
            easing: "easeOutQuart"
        });
        anime({
            targets: contactArt,
            opacity: [0, Number.parseFloat(getComputedStyle(contactArt).opacity)],
            scale: [.96, 1],
            duration: 900,
            easing: "easeOutCubic"
        });
        anime({
            targets: ".contact-links a",
            opacity: [0, 1],
            translateX: [16, 0],
            delay: anime.stagger(90, { start: 180 }),
            duration: 500,
            easing: "easeOutCubic"
        });
        observer.unobserve(heading);
    }, { threshold: .2 }).observe(heading);
}

function initArtMotion() {
    const drawPaths = (element, duration = 800) => {
        const paths = element.querySelectorAll("path");
        paths.forEach((path, index) => {
            const length = path.getTotalLength?.();
            if (!length) return;
            path.style.strokeDasharray = String(length);
            path.style.strokeDashoffset = String(length);
            anime({
                targets: path,
                strokeDashoffset: [length, 0],
                opacity: [0, 1],
                delay: index * 100,
                duration,
                easing: "easeOutCubic"
            });
        });
    };

    const heroArt = document.querySelector(".hero-art");
    if (heroArt) drawPaths(heroArt, 1100);

    const artObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            drawPaths(entry.target);
            anime({
                targets: entry.target.querySelectorAll(".art-node, .art-shape, .art-ring"),
                opacity: [0, 1],
                scale: [.92, 1],
                delay: anime.stagger(80, { start: 180 }),
                duration: 650,
                easing: "easeOutCubic"
            });
            observer.unobserve(entry.target);
        });
    }, { threshold: .18 });

    document.querySelectorAll(".project-art, .tech-art, .about-art").forEach((art) => artObserver.observe(art));

    const featuredProject = document.querySelector(".project-card--one");
    if (featuredProject) {
        featuredProject.style.setProperty("--wine-progress", "0");
        new IntersectionObserver((entries, observer) => {
            if (!entries[0].isIntersecting) return;
            const transition = { value: 0 };
            anime({
                targets: transition,
                value: 1,
                duration: 950,
                easing: "easeInOutQuad",
                update: () => featuredProject.style.setProperty("--wine-progress", String(transition.value))
            });
            anime({
                targets: featuredProject.querySelector(".project-ghost"),
                translateX: [-10, 0],
                translateY: [8, 0],
                duration: 850,
                easing: "easeOutCubic"
            });
            observer.unobserve(featuredProject);
        }, { threshold: .25 }).observe(featuredProject);
    }

    if (window.matchMedia("(pointer: fine)").matches) {
        document.querySelectorAll(".project-card").forEach((project) => {
            const art = project.querySelector(".project-art");
            if (!art) return;
            project.addEventListener("pointermove", (event) => {
                const bounds = project.getBoundingClientRect();
                const movement = (event.clientX - bounds.left) / bounds.width - .5;
                anime({ targets: art, translateX: movement * 16, duration: 350, easing: "easeOutQuad" });
            });
            project.addEventListener("pointerleave", () => {
                anime({ targets: art, translateX: 0, duration: 450, easing: "easeOutQuad" });
            });
        });
    }

    const technologies = document.getElementById("technologies");
    const techArt = technologies?.querySelector(".tech-art");
    const colors = ["var(--accent)", "var(--brass-500)", "var(--sage-500)", "var(--text-secondary)"];
    technologies?.querySelectorAll(".tech-grid > div").forEach((group, index) => {
        group.addEventListener("pointerenter", () => {
            const paths = techArt?.querySelectorAll("path") || [];
            anime({ targets: techArt, opacity: .3, scale: 1.015, duration: 260, easing: "easeOutQuad" });
            paths.forEach((path) => path.style.stroke = colors[index]);
        });
        group.addEventListener("pointerleave", () => {
            anime({ targets: techArt, opacity: .16, scale: 1, duration: 350, easing: "easeOutQuad" });
            techArt?.querySelectorAll("path").forEach((path) => path.style.removeProperty("stroke"));
        });
    });

    document.querySelectorAll(".process-card").forEach((row) => {
        row.addEventListener("focusin", () => row.classList.add("is-focused"));
        row.addEventListener("focusout", () => row.classList.remove("is-focused"));
    });
}

function initModal() {
    const overlay = document.getElementById("modal-overlay");
    const closeButton = document.getElementById("modal-close");
    const title = document.getElementById("modal-title");
    const buttons = document.querySelectorAll(".open-modal");
    let opener;

    const close = () => {
        overlay?.classList.remove("active");
        overlay?.setAttribute("aria-hidden", "true");
        opener?.focus();
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            opener = button;
            title.textContent = languageText("caseStudyTitle")(button.dataset.project);
            overlay?.classList.add("active");
            overlay?.setAttribute("aria-hidden", "false");
            closeButton?.focus();
        });
    });

    closeButton?.addEventListener("click", close);
    overlay?.addEventListener("click", (event) => {
        if (event.target === overlay) close();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && overlay?.classList.contains("active")) close();
    });
}

function initEasterEgg() {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];
    const toast = document.getElementById("toast");
    let index = 0;

    document.addEventListener("keydown", (event) => {
        index = event.key === code[index] ? index + 1 : 0;
        if (index !== code.length) return;

        toast?.classList.add("show");
        document.body.classList.add("easter-egg");
        document.getElementById("system-core")?.dispatchEvent(new Event("portfolio:easter"));
        window.setTimeout(() => {
            toast?.classList.remove("show");
            document.body.classList.remove("easter-egg");
        }, 4000);
        index = 0;
    });
}
