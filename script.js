(function () {
  const data = window.PORTFOLIO;
  const $ = (sel) => document.querySelector(sel);

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    }
    [].concat(children).forEach((c) => c != null && c !== false && node.append(c));
    return node;
  };

  // Small inline line icons
  const ICONS = {
    cap: '<path d="M22 9 12 4 2 9l10 5 10-5Z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 9v6"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14.2-1.5 7.8 5-3 5 3-1.5-7.8"/><path d="m12 6 .9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.1l2-.3Z"/>',
  };
  const svgIcon = (name) => {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("fill", "none");
    s.setAttribute("stroke", "currentColor");
    s.setAttribute("stroke-width", "1.5");
    s.setAttribute("stroke-linecap", "round");
    s.setAttribute("stroke-linejoin", "round");
    s.innerHTML = ICONS[name];
    return s;
  };

  // "unsplash:<id>" → responsive Unsplash CDN URLs; anything else is used as-is
  const imgUrl = (ref, w) =>
    ref && ref.startsWith("unsplash:")
      ? `https://images.unsplash.com/photo-${ref.slice(9)}?auto=format&fit=crop&w=${w}&q=75`
      : ref;
  const setImg = (img, ref, widths = [640, 1024, 1600, 2200], sizes = "100vw") => {
    if (!img || !ref) return;
    if (ref.startsWith("unsplash:")) {
      img.srcset = widths.map((w) => `${imgUrl(ref, w)} ${w}w`).join(", ");
      img.sizes = sizes;
    }
    img.src = imgUrl(ref, widths[Math.min(1, widths.length - 1)]);
  };

  // Simple text fields
  document.querySelectorAll("[data-field]").forEach((node) => {
    const value = data[node.dataset.field];
    if (value) node.textContent = value;
  });

  // Hero
  const title = $("#hero-title");
  const emph = data.headlineEmphasis;
  if (emph && data.headline.includes(emph)) {
    const [before, after] = data.headline.split(emph);
    title.append(before, el("em", { text: emph }), after);
  } else {
    title.textContent = data.headline;
  }
  setImg($("#hero-img"), data.heroImage);

  // Stats
  $("#stats-list").append(
    ...(data.stats || []).map((s) =>
      el("div", { class: "stat reveal" }, [
        el("span", { class: "stat-value", text: s.value }),
        el("span", { class: "stat-label", text: s.label }),
      ])
    )
  );

  // About
  if (data.photo) {
    const photo = $("#portrait-photo");
    photo.src = data.photo;
    photo.alt = `Portrait of ${data.name}`;
    photo.hidden = false;
    photo.addEventListener("error", () => (photo.hidden = true));
  }
  $("#about-text").append(...data.about.map((p) => el("p", { text: p })));
  if (data.partners && data.partners.length) {
    $("#partners").append(...data.partners.map((p) => el("li", { text: p })));
  } else {
    $(".partners").remove();
  }

  // Research interests
  $("#interests-list").append(
    ...(data.interests || []).map((r, i) =>
      el("li", { class: "interest" }, [
        el("span", { class: "interest-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("span", { class: "interest-title", text: typeof r === "string" ? r : r.title }),
      ])
    )
  );
  if (data.interestsImage) setImg($("#interests-img"), data.interestsImage, [480, 800, 1200], "(max-width: 860px) 100vw, 40vw");
  else $(".interests-figure").remove();

  // Publications
  $("#projects").append(
    ...data.projects.map((p, i) => {
      const featured = i === 0;
      const media = p.image
        ? el("div", { class: "pub-media" }, [
            (() => {
              const img = el("img", { alt: "", loading: "lazy" });
              setImg(img, p.image, [480, 800, 1200], featured ? "(max-width: 860px) 100vw, 60vw" : "(max-width: 860px) 100vw, 30vw");
              return img;
            })(),
            p.year ? el("span", { class: "pub-year", text: p.year }) : null,
          ])
        : null;
      const read = p.link
        ? el("a", { class: "pub-link", href: p.link, target: "_blank", rel: "noopener" }, [
            "Read report ",
            el("span", { class: "arrow", "aria-hidden": "true", text: "↗" }),
          ])
        : el("span", { class: "pub-soon", text: "Link coming soon" });
      return el("article", { class: `pub reveal${featured ? " pub-featured" : ""}` }, [
        media,
        el("div", { class: "pub-body" }, [
          p.publisher ? el("p", { class: "pub-publisher", text: p.publisher }) : null,
          el("h3", { class: "pub-title", text: p.title, lang: /[ঀ-৿]/.test(p.title) ? "bn" : null }),
          p.subtitle ? el("p", { class: "pub-subtitle", text: p.subtitle }) : null,
          el("p", { class: "pub-desc", text: p.description }),
          read,
        ]),
      ]);
    })
  );

  // Quote band
  if (data.quote) setImg($("#quote-img"), data.quoteImage);
  else $(".quote-band").remove();

  // Experience
  $("#experience-list").append(
    ...data.experience.map((x) =>
      el("li", { class: "reveal" }, [
        el("div", { class: "when", text: x.when }),
        el("div", { class: "what" }, [
          el("h3", { text: x.title }),
          el("p", { class: "org", text: x.org }),
          el("p", { class: "desc", text: x.description }),
        ]),
      ])
    )
  );

  // Featured project
  const proj = data.featuredProject;
  if (proj) {
    document.querySelectorAll("[data-project]").forEach((n) => (n.textContent = proj[n.dataset.project] || ""));
    $("#project-facts").append(
      ...(proj.facts || []).map((f) => el("div", {}, [el("dt", { text: f.label }), el("dd", { text: f.value })]))
    );
    (proj.images || []).slice(0, 2).forEach((im, i) => {
      const img = $(`#project-img-${i + 1}`);
      img.src = im.src;
      img.alt = im.caption || "";
      $(`#project-cap-${i + 1}`).textContent = im.caption || "";
    });
    if (!proj.images || proj.images.length < 2) $(".project-second").remove();
    if (proj.link) {
      const a = $("#project-link");
      a.href = proj.link;
      a.append(proj.linkLabel || "Visit project website", " ", el("span", { class: "arrow", "aria-hidden": "true", text: "↗" }));
      a.hidden = false;
    }
  } else {
    $("#project").remove();
  }

  // Education
  if (data.education && data.education.length) {
    $("#education-list").append(
      ...data.education.map((e) =>
        el("article", { class: "edu reveal" }, [
          el("div", { class: "edu-top" }, [
            el("span", { class: "edu-icon", "aria-hidden": "true" }, svgIcon("cap")),
            el("span", { class: "edu-when", text: e.when }),
          ]),
          el("h3", { class: "edu-degree", text: e.degree }),
          el("p", { class: "edu-school", text: e.school }),
          e.thesis
            ? el("div", { class: "edu-thesis" }, [
                el("span", { class: "edu-label", text: "Thesis" }),
                el("p", { text: `“${e.thesis}”` }),
              ])
            : null,
          el("dl", { class: "edu-meta" }, [
            e.supervisor ? el("div", {}, [el("dt", { text: "Supervisor" }), el("dd", { text: e.supervisor })]) : null,
            e.note ? el("div", {}, [el("dt", { text: "Funding" }), el("dd", { text: e.note })]) : null,
          ]),
        ])
      )
    );
  } else {
    $("#education").remove();
  }

  // Awards
  if (data.awards && data.awards.length) {
    $("#awards-list").append(
      ...data.awards.map((a) =>
        el("article", { class: "award reveal" }, [
          el("span", { class: "award-icon", "aria-hidden": "true" }, svgIcon("award")),
          el("div", { class: "award-body" }, [
            el("p", { class: "award-when", text: a.when }),
            el("h3", { class: "award-title", text: a.title }),
            el("p", { class: "award-issuer", text: a.issuer }),
            a.description ? el("p", { class: "award-desc", text: a.description }) : null,
          ]),
        ])
      )
    );
  } else {
    $("#awards").remove();
  }

  // Field research
  if (data.fieldwork && data.fieldwork.length) {
    $("#fieldwork-list").append(
      ...data.fieldwork.map((f, i) => {
        const img = el("img", { alt: "", loading: "lazy" });
        setImg(img, f.image, [480, 800, 1200], i === 0 ? "(max-width: 860px) 100vw, 50vw" : "(max-width: 860px) 100vw, 25vw");
        return el("figure", { class: `field reveal${i === 0 ? " field-featured" : ""}` }, [
          f.image ? img : null,
          el("figcaption", {}, [
            el("span", { class: "field-when", text: f.when }),
            el("strong", { text: f.title }),
            el("span", { class: "field-place", text: f.place }),
          ]),
        ]);
      })
    );
  } else {
    $("#fieldwork").remove();
  }

  // Contact
  setImg($("#contact-img"), data.contactImage);
  const email = $("#email-link");
  email.textContent = data.email;
  email.href = `mailto:${data.email}`;
  $("#socials").append(
    ...data.socials.map((s) =>
      el("li", {}, el("a", { class: "btn btn-ghost", href: s.url, target: "_blank", rel: "noopener", text: s.label + " ↗" }))
    )
  );
  $("#year").textContent = new Date().getFullYear();

  // Theme toggle
  const root = document.documentElement;
  $(".theme-toggle").addEventListener("click", () => {
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  // Nav: transparent over the hero, solid once scrolled past it
  const nav = $("#nav");
  const hero = $(".hero");
  const onScroll = () => {
    nav.classList.toggle("solid", scrollY > hero.offsetHeight - 80);
    nav.classList.toggle("scrolled", scrollY > 8);
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  const links = [...document.querySelectorAll(".nav nav a")];
  if ("IntersectionObserver" in window) {
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => sectionObs.observe(s));

    // Reveal on scroll
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((n) => revealObs.observe(n));
  } else {
    document.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
  }
})();
