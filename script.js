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
    alert("No NPC found by that name. Please check your spelling.");
  }
});

