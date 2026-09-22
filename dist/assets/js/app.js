(function () {
  "use strict";

  const data = window.portfolioData;
  if (!data) return;

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const tags = (items) => `<div class="tag-list">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;

  function projectCard(project) {
    const links = [
      project.github ? `<a href="${escapeHtml(project.github)}" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>` : "",
      project.live ? `<a href="${escapeHtml(project.live)}" target="_blank" rel="noreferrer">Live project <span>↗</span></a>` : "",
    ].join("");
    const highlights = project.highlights?.length
      ? `<ul class="project-highlights">${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      : "";

    return `<article class="project-card" data-category="${escapeHtml(project.category)}">
      <div class="project-card-top"><span class="project-category">${escapeHtml(project.categoryLabel)}</span><span class="project-date">${escapeHtml(project.date)}</span></div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      ${highlights}
      ${tags(project.technologies)}
      <div class="project-links">${links}</div>
    </article>`;
  }

  function renderHome() {
    const expertise = document.querySelector("#expertise-grid");
    if (expertise) {
      expertise.innerHTML = data.expertise.map((item) => `<article class="expertise-card"><span>${escapeHtml(item.number)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p>${tags(item.skills)}</article>`).join("");
    }

    const featured = document.querySelector("#featured-projects");
    if (featured) featured.innerHTML = data.projects.filter((project) => project.featured).map(projectCard).join("");

    const experience = document.querySelector("#experience-list");
    if (experience) {
      experience.innerHTML = data.experience.map((item) => `<article class="timeline-item"><div><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.organization)}</p></div><time>${escapeHtml(item.date)}</time><p>${escapeHtml(item.description)}</p></article>`).join("");
    }

    const education = document.querySelector("#education-list");
    if (education) {
      education.innerHTML = data.education.map((item) => `<article class="timeline-item compact"><div><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.organization)}</p></div><time>${escapeHtml(item.date)}</time><p>${escapeHtml(item.detail)}</p></article>`).join("");
    }

    const skills = document.querySelector("#skills-grid");
    if (skills) skills.innerHTML = data.skillGroups.map((group) => `<article class="skill-group"><h3>${escapeHtml(group.title)}</h3>${tags(group.items)}</article>`).join("");
  }

  function renderProjects() {
    const grid = document.querySelector("#all-projects");
    const count = document.querySelector("#project-count");
    const filterGroup = document.querySelector("#project-filters");
    if (!grid || !filterGroup) return;

    function applyFilter(category) {
      const visible = category === "all" ? data.projects : data.projects.filter((project) => project.category === category);
      grid.innerHTML = visible.map(projectCard).join("");
      if (count) count.textContent = `${visible.length} project${visible.length === 1 ? "" : "s"}`;
    }

    filterGroup.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      filterGroup.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      applyFilter(button.dataset.filter);
    });

    applyFilter("all");
  }

  function setupNavigation() {
    const button = document.querySelector("[data-menu-button]");
    const nav = document.querySelector("[data-nav]");
    if (!button || !nav) return;
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        button.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      }
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((item) => { item.textContent = new Date().getFullYear(); });
  setupNavigation();
  if (document.body.dataset.page === "home") renderHome();
  if (document.body.dataset.page === "projects") renderProjects();
})();
