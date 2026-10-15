(function () {
  const data = window.PORTFOLIO;
  const $ = (sel) => document.querySelector(sel);

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    }
    [].concat(children).forEach((c) => c && node.append(c));
    return node;
  };

  const tagList = (items) => el("ul", { class: "tags" }, items.map((t) => el("li", { text: t })));

  // Simple text fields
  document.querySelectorAll("[data-field]").forEach((node) => {
    const value = data[node.dataset.field];
    if (value) node.textContent = value;
  });
  document.title = `${data.name} — ${data.role}`;

  // About
  if (data.photo) {
    const photo = $("#portrait-photo");
    photo.src = data.photo;
    photo.alt = `Portrait of ${data.name}`;
    photo.hidden = false;
    photo.addEventListener("error", () => (photo.hidden = true));
  }
  $("#about-text").append(...data.about.map((p) => el("p", { text: p })));
  // Publications
  $("#projects").append(
    ...data.projects.map((p) => {
      const thumb = p.image ? el("img", { class: "card-thumb", src: p.image, alt: "", loading: "lazy" }) : null;
      const read = p.link
        ? el("a", { class: "card-link", href: p.link, target: "_blank", rel: "noopener" }, [
            "Read report ",
            el("span", { class: "arrow", "aria-hidden": "true", text: "↗" }),
          ])
        : null;
      return el("article", { class: "card reveal" }, [
        thumb,
        el("div", { class: "card-body" }, [
          el("div", { class: "card-head" }, [el("h3", { text: p.title }), el("span", { class: "year", text: p.year })]),
          el("p", { text: p.description }),
          tagList(p.tags || []),
          read,
        ]),
      ]);
    })
  );

  // Research interests
  $("#interests-list").append(
    ...(data.interests || []).map((r, i) => {
      const title = typeof r === "string" ? r : r.title;
      return el("li", { class: "interest" }, [
        el("sup", { class: "interest-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("span", { class: "interest-title", text: title }),
      ]);
    })
  );

  // Experience
  $("#experience-list").append(
    ...data.experience.map((x) =>
      el("li", { class: "reveal" }, [
        el("div", { class: "when", text: x.when }),
        el("div", {}, [
          el("h3", {}, [x.title + " · ", el("span", { class: "org", text: x.org })]),
          el("p", { text: x.description }),
        ]),
      ])
    )
  );

  // Field research (optional)
  if (data.fieldwork && data.fieldwork.length) {
    $("#fieldwork-list").append(
      ...data.fieldwork.map((f) =>
        el("li", { class: "reveal" }, [
          el("div", { class: "when", text: f.when }),
          el("div", {}, [el("h3", { text: f.title }), el("p", { text: f.place })]),
        ])
      )
    );
  } else {
    $("#fieldwork").remove();
  }

  // Contact
  const email = $("#email-link");
  email.textContent = data.email;
  email.href = `mailto:${data.email}`;
  $("#socials").append(
    ...data.socials.map((s) =>
      el("li", {}, el("a", { href: s.url, target: "_blank", rel: "noopener", text: s.label + " ↗" }))
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

  // Nav border on scroll + active section highlight
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
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
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((n) => revealObs.observe(n));
  } else {
    document.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
  }
})();
