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
  { name: "Orama Tal", type: "npc", path: "npc-index/npc-pages/ember-desert/orama-tal.html" },
  { name: "Hett Mosswick", type: "npc", path: "npc-index/npc-pages/eltoria/hett-mosswick.html" },
  { name: "Kess TalRen", type: "npc", path: "npc-index/npc-pages/eltoria/kess-talren.html" },
  { name: "Dorus Kel", type: "npc", path: "npc-index/npc-pages/eltoria/dorus-kel.html" },
  { name: "Vess Talorin", type: "npc", path: "npc-index/npc-pages/eldara/vess-talorin.html" },
  { name: "Brenn Talveth", type: "npc", path: "npc-index/npc-pages/eldara/brenn-talveth.html" },
  { name: "Lira Solmere", type: "npc", path: "npc-index/npc-pages/eldara/lira-solmere.html" },
  // Books, Journals, Notes

  // Locations

  // Crafting

  // Lore
  
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
