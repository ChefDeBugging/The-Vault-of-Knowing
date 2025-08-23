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
  // Maps

  // Players

  // Guilds

  // Keep
];

const searchForm = document.querySelector("form[role='search']");
if (searchForm) {
  const searchInput = searchForm.querySelector("input[type='search']");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    // Search through everything: NPCs, Books, Places, etc.
    const matches = searchIndex.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );

    if (matches.length === 1) {
      window.location.href = matches[0].path;
    } else if (matches.length > 1) {
      const grouped = matches.reduce((acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item.name);
        return acc;
      }, {});
      let message = `Multiple matches found:\n\n`;
      for (const [type, names] of Object.entries(grouped)) {
        message += `${type.toUpperCase()}:\n  ${names.join("\n  ")}\n\n`;
      }
      alert(message + "Try being more specific.");
    } else {
      alert("No match found. Try a different search.");
    }
  });
}



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