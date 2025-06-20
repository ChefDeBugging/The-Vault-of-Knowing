// search-npc.js

// This array maps known NPC names to their page paths
const npcPages = [
  { name: "Tharn Vellmor", path: "npc-index/npc-pages/celestial-highlands/tharn-vellmor.html" },
  { name: "Selene Vale", path: "npc-index/npc-pages/celestial-highlands/selene-vale.html" },
  { name: "Ilreth Solshade", path: "npc-index/npc-pages/celestial-highlands/ilreth-solshade.html" },
  { name: "Yethryn Dorr", path: "npc-index/npc-pages/celestial-highlands/yethryn-dorr.html" },
  { name: "Kaelen Duskwind", path: "npc-index/npc-pages/twilight-isles/kaelen-duskwind.html" },
  { name: "Revna Hollowthorn", path: "npc-index/npc-pages/twilight-isles/revna-hollowthorn.html" },
  { name: "Sister Meriel Vael", path: "npc-index/npc-pages/twilight-isles/sister-meriel-vael.html" },
  { name: "Velka Aresk", path: "npc-index/npc-pages/twilight-isles/velka-aresk.html" },
  { name: "Vaela Raen", path: "npc-index/npc-pages/twilight-isles/vaela-raen.html" },
  { name: "Captain Yorra Vayne", path: "npc-index/npc-pages/empire-of-tides/captain-yorra-vayne.html" },
  { name: "Gravik Irontide", path: "npc-index/npc-pages/empire-of-tides/gravik-irontide.html" },
  { name: "Fenra Veln", path: "npc-index/npc-pages/empire-of-tides/fenra-veln.html" },
  { name: "Captain Maxwell", path: "npc-index/npc-pages/empire-of-tides/captain-maxwell.html" },
  { name: "Tolla Jinxfuse", path: "npc-index/npc-pages/ember-desert/tolla-jinxfuse.html" },
  { name: "Nirra Glintstream", path: "npc-index/npc-pages/ember-desert/nirra-glintstream.html" },
  { name: "Quen Maddrek", path: "npc-index/npc-pages/ember-desert/quen-maddrek.html" },
  { name: "Sazhra Dunewhisper", path: "npc-index/npc-pages/ember-desert/sazhra-dunewhisper.html" },
  { name: "Ragor Flintskin", path: "npc-index/npc-pages/ember-desert/ragor-flintskin.html" },
  { name: "Ilyen Starroot", path: "npc-index/npc-pages/ember-desert/ilyen-starroot.html" },
  { name: "Dren Volgar", path: "npc-index/npc-pages/ember-desert/dren-volgar.html" },
  { name: "Basheera Venn", path: "npc-index/npc-pages/ember-desert/basheera-venn.html" },
  { name: "Khatir Solgrim", path: "npc-index/npc-pages/ember-desert/khatir-solgrim.html" },
  { name: "Yanni Kelso", path: "npc-index/npc-pages/ember-desert/yanni-kelso.html" },
  { name: "Ora'ma Tal", path: "npc-index/npc-pages/ember-desert/orama-tal.html" },
  { name: "Hett Mosswick", path: "npc-index/npc-pages/eltoria/hett-mosswick.html" },
  { name: "Kess Tal'Ren", path: "npc-index/npc-pages/eltoria/kess-talren.html" },
  { name: "Dorus Kel", path: "npc-index/npc-pages/eltoria/dorus-kel.html" },
  { name: "Vess Talorin", path: "npc-index/npc-pages/eldara/vess-talorin.html" },
  { name: "Brenn Talveth", path: "npc-index/npc-pages/eldara/brenn-talveth.html" },
  { name: "Lira Solmere", path: "npc-index/npc-pages/eldara/lira-solmere.html" },
];

// Attach listener to search form
const searchForm = document.querySelector("form[role='search']");
const searchInput = searchForm.querySelector("input[type='search']");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();

  if (!query) return;

  const result = npcPages.find(({ name }) =>
    name.toLowerCase().includes(query)
  );

  if (result) {
    window.location.href = result.path;
  } else {
    alert("No lore found by that name. Please check your spelling.");
  }
});
