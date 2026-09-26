/**
 * main.js
 * Renders content from data.js into the DOM, handles the
 * theme switcher, and drives the floating bottom dock nav
 * (active-section highlighting + sliding indicator).
 */

(function () {
  "use strict";

  const ICONS = {
    github:
      '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.64 0 8.13c0 3.6 2.29 6.65 5.47 7.73.4.08.55-.17.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.91-3.64-4.02 0-.89.31-1.61.82-2.18-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.83a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.83 2.2-.83.44 1.12.16 1.95.08 2.15.51.57.82 1.28.82 2.18 0 3.12-1.87 3.81-3.65 4.02.29.25.54.75.54 1.51 0 1.09-.01 1.97-.01 2.24 0 .22.15.48.55.39A8.14 8.14 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z"/></svg>',
    linkedin:
      '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M14.82 0H1.18C.53 0 0 .52 0 1.16v13.68C0 15.48.53 16 1.18 16h13.64c.65 0 1.18-.52 1.18-1.16V1.16C16 .52 15.47 0 14.82 0ZM4.75 13.63H2.38V6h2.37v7.63Zm-1.19-8.66a1.37 1.37 0 1 1 0-2.74 1.37 1.37 0 0 1 0 2.74Zm10.06 8.66h-2.37V9.9c0-.89-.02-2.04-1.25-2.04-1.25 0-1.44.97-1.44 1.98v3.79H6.19V6h2.27v1.04h.03c.32-.6 1.09-1.24 2.25-1.24 2.41 0 2.86 1.58 2.86 3.64v4.19Z"/></svg>',
    globe:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.9 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.9-3.8-9s1.3-6.4 3.8-9Z"/></svg>'
  };

  /* ---------- Theme switcher ---------- */
  const root = document.documentElement;
  const THEME_KEY = "sm-portfolio-theme";
  const themeToggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-pressed", theme === "light");
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {
      /* localStorage unavailable — fall back silently */
    }
    const prefersLight =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(saved || (prefersLight ? "light" : "dark"));
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = root.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        /* ignore */
      }
    });
  }

  /* ---------- Render helpers ---------- */
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderSocialLinks(container, socials) {
    if (!container) return;
    container.innerHTML = "";
    socials.forEach(function (s) {
      const a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", s.label);
      a.title = s.label;
      a.innerHTML = ICONS[s.icon] || s.label;
      container.appendChild(a);
    });
  }

  function renderProfile(data) {
    document.title = data.profile.name + " — " + data.profile.role;

    const heroName = document.getElementById("hero-name");
    const heroRole = document.getElementById("hero-role");
    const heroSummary = document.getElementById("hero-summary");
    const heroPhoto = document.getElementById("hero-photo");
    const resumeLink = document.getElementById("resume-link");
    const footerName = document.getElementById("footer-name");
    const footerName2 = document.getElementById("footer-name-2");
    const footerYear = document.getElementById("footer-year");
    const contactEmail = document.getElementById("contact-email");
    const contactPhone = document.getElementById("contact-phone");
    const contactLocation = document.getElementById("contact-location");

    if (heroName) heroName.textContent = data.profile.name;
    if (heroRole) heroRole.textContent = data.profile.role;
    if (heroSummary) heroSummary.textContent = data.profile.summary;
    if (heroPhoto) {
      heroPhoto.src = data.profile.photo;
      heroPhoto.alt = data.profile.name + " — portrait";
    }
    if (resumeLink) resumeLink.href = data.profile.resumeFile;
    if (footerName) footerName.textContent = data.profile.name;
    if (footerName2) footerName2.textContent = data.profile.name;
    if (footerYear) footerYear.textContent = new Date().getFullYear();
    if (contactEmail) {
      contactEmail.textContent = data.profile.email;
      contactEmail.href = "mailto:" + data.profile.email;
    }
    if (contactPhone) contactPhone.textContent = data.profile.phone;
    if (contactLocation) contactLocation.textContent = data.profile.location;

    const statsWrap = document.getElementById("hero-stats");
    if (statsWrap) {
      data.profile.stats.forEach(function (stat) {
        const item = el("div", "stat");
        item.appendChild(el("span", "stat__value mono", stat.value));
        item.appendChild(el("span", "stat__label", stat.label));
        statsWrap.appendChild(item);
      });
    }

    renderSocialLinks(document.getElementById("hero-socials"), data.profile.socials);
    renderSocialLinks(document.getElementById("footer-socials"), data.profile.socials);
  }

  function renderEducation(data) {
    const wrap = document.getElementById("education-content");
    if (!wrap) return;
    const edu = data.education;

    const header = el("div", "edu__header");
    header.appendChild(el("h3", "edu__degree", edu.degree));
    header.appendChild(el("span", "edu__period mono", edu.period));
    wrap.appendChild(header);
    wrap.appendChild(el("p", "edu__school", edu.school + " — " + edu.detail));

    const list = el("ul", "edu__courses");
    edu.coursework.forEach(function (c) {
      list.appendChild(el("li", null, c));
    });
    wrap.appendChild(list);
  }

  function renderSkills(data) {
    const wrap = document.getElementById("skills-content");
    if (!wrap) return;
    Object.keys(data.skills).forEach(function (group) {
      const groupEl = el("div", "skill-group");
      groupEl.appendChild(el("h3", "skill-group__title", group));
      const tagWrap = el("div", "skill-tags");
      data.skills[group].forEach(function (skill) {
        tagWrap.appendChild(el("span", "skill-tag mono", skill));
      });
      groupEl.appendChild(tagWrap);
      wrap.appendChild(groupEl);
    });
  }

  function renderProjects(data) {
    const wrap = document.getElementById("projects-content");
    if (!wrap) return;

    data.projects.forEach(function (project) {
      const card = el("article", "project");
      card.id = "project-" + project.id;

      const media = el("div", "project__media");
      const img = document.createElement("img");
      img.src = project.cover;
      img.alt = project.title + " — project cover";
      img.loading = "lazy";
      media.appendChild(img);
      card.appendChild(media);

      const body = el("div", "project__body");
      const heading = el("div", "project__heading");
      heading.appendChild(el("h3", "project__title", project.title));
      heading.appendChild(el("span", "project__stack mono", project.stack));
      body.appendChild(heading);

      const list = el("ul", "project__bullets");
      project.bullets.forEach(function (b) {
        list.appendChild(el("li", null, b));
      });
      body.appendChild(list);

      if (project.embed) {
        const embedWrap = el("div", "project__embed");
        const iframe = document.createElement("iframe");
        iframe.title = project.embed.title;
        iframe.src = project.embed.src;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.loading = "lazy";
        embedWrap.appendChild(iframe);
        body.appendChild(embedWrap);
      }

      const links = el("div", "project__links");
      const ghLink = el("a", "btn btn--ghost btn--small", ICONS.github + "<span>View on GitHub</span>");
      ghLink.href = project.github;
      ghLink.target = "_blank";
      ghLink.rel = "noopener noreferrer";
      links.appendChild(ghLink);
      body.appendChild(links);

      card.appendChild(body);
      wrap.appendChild(card);
    });
  }

  function renderExperience(data) {
    const wrap = document.getElementById("experience-content");
    if (!wrap) return;

    data.experience.forEach(function (job) {
      const item = el("div", "timeline-item");

      const meta = el("div", "timeline-item__meta");
      meta.appendChild(el("span", "timeline-item__period mono", job.period));
      item.appendChild(meta);

      const content = el("div", "timeline-item__content");
      content.appendChild(el("h3", "timeline-item__role", job.role));
      content.appendChild(el("p", "timeline-item__org", job.org));
      const list = el("ul", "timeline-item__bullets");
      job.bullets.forEach(function (b) {
        list.appendChild(el("li", null, b));
      });
      content.appendChild(list);
      item.appendChild(content);

      wrap.appendChild(item);
    });
  }

  function renderCertifications(data) {
    const wrap = document.getElementById("certifications-content");
    if (!wrap) return;

    data.certifications.forEach(function (cert) {
      const item = el("div", "cert");
      const badge = el("div", "cert__badge", initials(cert.issuer));
      item.appendChild(badge);
      const body = el("div", "cert__body");
      body.appendChild(el("h3", "cert__title", cert.title));
      body.appendChild(el("p", "cert__meta mono", cert.issuer + " · " + cert.date));
      item.appendChild(body);
      wrap.appendChild(item);
    });
  }

  function initials(str) {
    return str
      .split(/[\s&]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) { return w[0]; })
      .join("")
      .toUpperCase();
  }

  /* ---------- Floating dock: active-section highlight ---------- */
  function initDock() {
    const dock = document.getElementById("dock");
    if (!dock) return;
    const links = Array.prototype.slice.call(dock.querySelectorAll("a[data-section]"));
    const indicator = dock.querySelector(".dock__indicator");
    const sections = links
      .map(function (link) {
        return document.getElementById(link.dataset.section);
      })
      .filter(Boolean);

    function setActive(link) {
      links.forEach(function (l) { l.classList.remove("is-active"); });
      if (!link) return;
      link.classList.add("is-active");
      if (indicator) {
        indicator.style.left = link.offsetLeft + "px";
        indicator.style.width = link.offsetWidth + "px";
      }
    }

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const match = links.find(function (l) { return l.dataset.section === entry.target.id; });
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) { observer.observe(s); });

    // Set an initial active state without waiting for scroll.
    setActive(links[0]);
    window.addEventListener("resize", function () {
      const current = dock.querySelector("a.is-active");
      if (current) setActive(current);
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    renderProfile(SITE_DATA);
    renderEducation(SITE_DATA);
    renderSkills(SITE_DATA);
    renderProjects(SITE_DATA);
    renderExperience(SITE_DATA);
    renderCertifications(SITE_DATA);
    initDock();
  });
})();
