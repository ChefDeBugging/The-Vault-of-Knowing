(function () {
  // 1) Ensure a <base> tag so all relative paths resolve from the site root.
  (function ensureBaseTag() {
    let base = document.querySelector('base');
    if (!base) {
      base = document.createElement('base');
      document.head.prepend(base);
    }
    const parts = location.pathname.split('/').filter(Boolean);
    // If it's a GitHub Pages project site: https://user.github.io/REPO/...
    // parts[0] is "REPO". For user/org sites or custom domains, just "/".
    const href =
      location.hostname.endsWith('github.io') && parts.length
        ? `/${parts[0]}/`
        : '/';
    base.setAttribute('href', href);
  })();

const searchIndex = [
  // NPCs
  { name: "Tharn Vellmor", type: "npc", path: "npc-index/npc-pages/celestial-highlands/tharn-vellmor.html" },
  { name: "Selene Vale", type: "npc", path: "npc-index/npc-pages/celestial-highlands/selene-vale.html" },
  { name: "Ilreth Solshade", type: "npc", path: "npc-index/npc-pages/celestial-highlands/ilreth-solshade.html" },
  { name: "Yethryn Dorr", type: "npc", path: "npc-index/npc-pages/celestial-highlands/yethryn-dorr.html" },
  { name: "Kaelen Duskwind", type: "npc", path: "npc-index/npc-pages/twilight-isles/kaelen-duskwind.html" },
  { name: "Revna Hollowthorn", type: "npc", path: "npc-index/npc-pages/twilight-isles/revna-hollowthorn.html" },
  { name: "Sister Meriel Vael", type: "npc", path: "npc-index/npc-pages/twilight-isles/sister-meriel-vael.html" },
  { name: "Velka Aresk", type: "npc", path: "npc-index/npc-pages/twilight-isles/velka-aresk.html" },
  { name: "Vaela Raen", type: "npc", path: "npc-index/npc-pages/twilight-isles/vaela-raen.html" },
  { name: "Captain Yorra Vayne", type: "npc", path: "npc-index/npc-pages/empire-of-tides/captain-yorra-vayne.html" },
  { name: "Gravik Irontide", type: "npc", path: "npc-index/npc-pages/empire-of-tides/gravik-irontide.html" },
  { name: "Fenra Veln", type: "npc", path: "npc-index/npc-pages/empire-of-tides/fenra-veln.html" },
  { name: "Captain Maxwell", type: "npc", path: "npc-index/npc-pages/empire-of-tides/captain-maxwell.html" },
  { name: "Tolla Jinxfuse", type: "npc", path: "npc-index/npc-pages/ember-desert/tolla-jinxfuse.html" },
  { name: "Nirre Glintstream", type: "npc", path: "npc-index/npc-pages/ember-desert/nirra-glintstream.html" },
  { name: "Quen Maddrek", type: "npc", path: "npc-index/npc-pages/ember-desert/quen-maddrek.html" },
  { name: "Sazhra Dunewhisper", type: "npc", path: "npc-index/npc-pages/ember-desert/sazhra-dunewhisper.html" },
  { name: "Ragor Flintskin", type: "npc", path: "npc-index/npc-pages/ember-desert/ragor-flintskin.html" },
  { name: "Ilyen Starroot", type: "npc", path: "npc-index/npc-pages/ember-desert/ilyen-starroot.html" },
  { name: "Dren Volgar", type: "npc", path: "npc-index/npc-pages/ember-desert/dren-volgar.html" },
  { name: "Basheera Venn", type: "npc", path: "npc-index/npc-pages/ember-desert/basheera-venn.html" },
  { name: "Khatir Solgrim", type: "npc", path: "npc-index/npc-pages/ember-desert/khatir-solgrim.html" },
  { name: "Yanni Kelso", type: "npc", path: "npc-index/npc-pages/ember-desert/yanni-kelso.html" },
  { name: "The Ember Rat", type: "npc", path: "npc-index/npc-pages/ember-desert/yanni-kelso.html" },
  { name: "Orama Tal", type: "npc", path: "npc-index/npc-pages/ember-desert/orama-tal.html" },
  { name: "Hett Mosswick", type: "npc", path: "npc-index/npc-pages/eltoria/hett-mosswick.html" },
  { name: "Kess TalRen", type: "npc", path: "npc-index/npc-pages/eltoria/kess-talren.html" },
  { name: "Dorus Kel", type: "npc", path: "npc-index/npc-pages/eltoria/dorus-kel.html" },
  { name: "Vess Talorin", type: "npc", path: "npc-index/npc-pages/eldara/vess-talorin.html" },
  { name: "Brenn Talveth", type: "npc", path: "npc-index/npc-pages/eldara/brenn-talveth.html" },
  { name: "Lira Solmere", type: "npc", path: "npc-index/npc-pages/eldara/lira-solmere.html" },
  { name: "Mazrik Vallo", type: "npc", path: "npc-index/npc-pages/trade-cities/mazrik-vallo.html" },
  { name: "The Coin", type: "npc", path: "npc-index/npc-pages/trade-cities/mazrik-vallo.html" },
  { name: "Shae Grindlehook", type: "npc", path: "npc-index/npc-pages/trade-cities/shae-grindlehook.html" },
  { name: "Mirek Vance", type: "npc", path: "npc-index/npc-pages/trade-cities/mirek-vance.html" },
  { name: "Corren Vox", type: "npc", path: "npc-index/npc-pages/trade-cities/corren-vox.html" },
  { name: "Korran Dirge", type: "npc", path: "npc-index/npc-pages/trade-cities/korran-dirge.html" },
  { name: "Tarnel Verin", type: "npc", path: "npc-index/npc-pages/trade-cities/tarnel-verin.html" },
  { name: "Ilvara Sunsheen", type: "npc", path: "npc-index/npc-pages/unknown-wandering/ilvara-sunsheen.html" },
  { name: "Torak the Blue", type: "npc", path: "npc-index/npc-pages/unknown-wandering/torak-the-blue.html" },
  { name: "Malric Gorr", type: "npc", path: "npc-index/npc-pages/unknown-wandering/malric-gorr.html" },
  { name: "Three Tooth", type: "npc", path: "npc-index/npc-pages/unknown-wandering/malric-gorr.html" },
  { name: "Three-Tooth", type: "npc", path: "npc-index/npc-pages/unknown-wandering/malric-gorr.html" },
  { name: "Arvyn Drehl", type: "npc", path: "npc-index/npc-pages/unknown-wandering/arvyn-drehl.html" },
  // Books, Journals, Notes

  // Locations

  // Crafting
  { name: "Alchemy", type: "crafting", path: "crafting/alchemy-index/alchemy-index.html" },
  // Lore
  { name: "The War of the Dead", type: "war", path: "deeper-lore-index/wars/ember-desert/ember-wars.html#war-of-dead" },
  { name: "The Fractured Arcanum", type: "war", path: "deeper-lore-index/wars/ember-desert/ember-wars.html#fractured-arcanum" },
  { name: "The Red Tide", type: "war", path: "deeper-lore-index/wars/empire-of-tides/empire-wars.html#red-tide" },
  { name: "The Sundering of the Heavens", type: "war", path: "deeper-lore-index/wars/ironwood/ironwood-wars.html#sundering-heavens" },
  { name: "The War of Chains", type: "war", path: "deeper-lore-index/wars/ironwood/ironwood-wars.html#war-of-chains" },
  { name: "The Shattered Arcana", type: "war", path: "deeper-lore-index/wars/ironwood/ironwood-wars.html#shattered-arcana" },
  { name: "The Shadow Fell", type: "war", path: "deeper-lore-index/wars/twilight-isles/twilight-wars.html#shadow-fell" },
  { name: "Ashes of Divinity", type: "lore", path: "deeper-lore-index/creation/creation.html" },
  { name: "Creation", type: "lore", path: "deeper-lore-index/creation/creation.html" },
  { name: "The Chronicle of Ages", type: "lore", path: "deeper-lore-index/history/history.html" },
  { name: "History", type: "lore", path: "deeper-lore-index/history/history.html" },
  { name: "Deeper Lore" , type: "lore", path: "deeper-lore-index/dplore-index.html" },
  { name: "The Deep Archives" , type: "lore", path: "the-deep/the-deep-index.html" },
  // Maps

  // Players

  // Guilds

  // Keep
];

  function initSearch() {
    const searchForm = document.querySelector("form[role='search']");
    if (!searchForm) return;
    const searchInput = searchForm.querySelector("input[type='search']");
    if (!searchInput) return;

    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = (searchInput.value || "").trim().toLowerCase();
      if (!query) return;

      const matches = searchIndex.filter(({ name }) =>
        name.toLowerCase().includes(query)
      );

      if (matches.length === 1) {
        // With <base> set, relative paths resolve correctly everywhere.
        window.location.href = matches[0].path;
      } else if (matches.length > 1) {
        const grouped = matches.reduce((acc, item) => {
          (acc[item.type] ||= []).push(item.name);
          return acc;
        }, {});
        let message = `Several records match that request. You will need to be more specific. Are any of these what you wish to see?\n\n`;
        for (const [type, names] of Object.entries(grouped)) {
          message += `${type.toUpperCase()}:\n  ${names.join("\n  ")}\n\n`;
        }
        alert(message + "The strands of knowledge weave too broadly. Tighter cords will reveal the correct thread.");
      } else {
        alert("No such scroll or tome can be located. You may wish to rephrase, or consult the Deep Archives... If access is permitted.");
      }
    });
  }

  // Wait for DOM so the form exists.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch);
  } else {
    initSearch();
  }
})();

(function () {
  /** 1) Compute the site base path (e.g., "/REPO/" on GH Pages project sites) */
  function computeBasePath() {
    // If you ever want to hardcode it, set window.__BASE_PATH__ = "/YourRepo/";
    if (typeof window.__BASE_PATH__ === "string") {
      return ensureTrailingSlash(window.__BASE_PATH__);
    }

    const host = location.hostname;
    const parts = location.pathname.split("/").filter(Boolean);

    // On GitHub Pages project sites every page path starts with /REPO/...
    // Example: https://user.github.io/REPO/some/folder/page.html
    if (host.endsWith("github.io") && parts.length > 0) {
      // parts[0] === "REPO"
      return `/${parts[0]}/`;
    }

    // Custom domain or user/org root: just "/"
    return "/";
  }

  function ensureTrailingSlash(p) {
    return p.endsWith("/") ? p : p + "/";
  }

  const BASE_PATH = computeBasePath();               // "/REPO/" or "/"
  const ORIGIN_BASE = location.origin + BASE_PATH;   // "https://.../REPO/" or "https://.../"

  /** 2) Turn any internal href into a full absolute URL under our BASE_PATH */
  function isInternalHref(href) {
    if (!href) return false;
    if (href.startsWith("#")) return false;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return false;
    // external absolute
    if (/^https?:\/\//i.test(href)) {
      try { return new URL(href).origin === location.origin; }
      catch { return false; }
    }
    return true; // relative or root-like -> internal
  }

  function resolveFromSiteRoot(raw) {
    // Special cases for "home"
    if (raw === "/" || raw === "./" || raw === "./index.html" || raw === "index.html") {
      return ORIGIN_BASE;
    }

    // If the href starts with a domain-root "/", map it under BASE_PATH
    if (raw.startsWith("/")) {
      return new URL(raw.slice(1), ORIGIN_BASE).href;
    }

    // Otherwise, resolve relative paths (./, ../, plain) against ORIGIN_BASE.
    // new URL() will correctly collapse any "../" segments.
    return new URL(raw, ORIGIN_BASE).href;
  }

  /** 3) Normalize all <a> tags currently in DOM (navbar, dropdowns, etc.) */
  function normalizeAnchors(root = document) {
    root.querySelectorAll?.("a[href]").forEach(a => {
      const original = a.getAttribute("href"); // attribute value
      if (!isInternalHref(original)) return;

      const fixed = resolveFromSiteRoot(original);
      if (fixed && a.href !== fixed) {
        a.setAttribute("href", fixed);
      }
    });
  }

  /** 4) Observe late-added nodes (useful for dropdowns populated by JS) */
  function startObserver() {
    const mo = new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type === "childList") {
          m.addedNodes.forEach(node => {
            if (node.nodeType === 1) normalizeAnchors(node);
          });
        } else if (m.type === "attributes" && m.attributeName === "href" && m.target.tagName === "A") {
          const a = m.target;
          const original = a.getAttribute("href");
          if (isInternalHref(original)) {
            const fixed = resolveFromSiteRoot(original);
            if (fixed && a.href !== fixed) a.setAttribute("href", fixed);
          }
        }
      }
    });
    mo.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });
  }

  /** 5) Patch your search redirect to use the same resolver */
  function patchSearch() {
    const form = document.querySelector("form[role='search']");
    if (!form) return;
    const input = form.querySelector("input[type='search']");
    if (!input) return;

    // We assume your searchIndex variable exists in this scope or global.
    form.addEventListener("submit", function (e) {
      // Only intercept if the handler hasn't already prevented default elsewhere
      // (If your search already calls preventDefault, this is fine.)
      e.preventDefault();
      const q = (input.value || "").trim().toLowerCase();
      if (!q || !Array.isArray(window.searchIndex)) return;

      const matches = window.searchIndex.filter(({ name }) =>
        String(name).toLowerCase().includes(q)
      );

      if (matches.length === 1) {
        // IMPORTANT: resolve with our router, not raw path
        location.href = resolveFromSiteRoot(matches[0].path);
      } else if (matches.length > 1) {
        const grouped = matches.reduce((acc, item) => {
          (acc[item.type] ||= []).push(item.name);
          return acc;
        }, {});
        let message = `Several records match that request. You will need to be more specific. Are any of these what you wish to see?\n\n`;
        for (const [type, names] of Object.entries(grouped)) {
          message += `${type.toUpperCase()}:\n  ${names.join("\n  ")}\n\n`;
        }
        alert(message + "The strands of knowledge weave too broadly. Tighter cords will reveal the correct thread.");
      } else {
        alert("No such scroll or tome can be located. You may wish to rephrase, or consult the Deep Archives... If access is permitted.");
      }
    }, { capture: true });
  }

  /** 6) JS helper you can call from onclick handlers: goto('path/to/page.html') */
  window.goto = function (path) {
    location.href = resolveFromSiteRoot(path);
  };

  /** 7) Init */
  function init() {
    normalizeAnchors(document);
    startObserver();
    patchSearch();
    // Debug: uncomment to verify computed base
    // console.log({ BASE_PATH, ORIGIN_BASE });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to opened accordion
  document
    .querySelectorAll('#accordionExample .accordion-collapse')
    .forEach(collapseEl => {
      collapseEl.addEventListener('shown.bs.collapse', function () {
        const header = this.previousElementSibling;
        const y = header.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });

  // === FILTER LOGIC FOR BOOKS/JOURNALS/NOTES ===
  const filterDropdown = document.getElementById("categoryFilter");
  if (filterDropdown) {
    filterDropdown.addEventListener("change", function () {
      const selected = this.value;
      const entries = document.querySelectorAll(".book-entry");

      entries.forEach((entry) => {
        const category = entry.getAttribute("data-category");
        entry.style.display = (selected === "all" || category === selected)
          ? "block"
          : "none";
      });
    });
  }
});

  let currentSpread = 1;
  const totalSpreads = 3;

  function showSpread(num) {
    for (let i = 1; i <= totalSpreads; i++) {
      const spread = document.getElementById(`spread${i}`);
      if (i === num) {
        spread.classList.add('active');
      } else {
        spread.classList.remove('active');
      }
    }
  }

  function nextSpread() {
    if (currentSpread < totalSpreads) {
      currentSpread++;
      showSpread(currentSpread);
    }
  }

  function prevSpread() {
    if (currentSpread > 1) {
      currentSpread--;
      showSpread(currentSpread);
    }
  }