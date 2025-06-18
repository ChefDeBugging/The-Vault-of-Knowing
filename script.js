const npcPages = [
  { name: "Tharn Vellmor", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/celestial-highlands/tharn-vellmor.html" },
  { name: "Selene Vale", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/celestial-highlands/selene-vale.html" },
  { name: "Ilreth Solshade", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/celestial-highlands/ilreth-solshade.html" },
  { name: "Yethryn Dorr", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/celestial-highlands/yethryn-dorr.html" },
  { name: "Kaelen Duskwind", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/twilight-isles/kaelen-duskwind.html" },
  { name: "Revna Hollowthorn", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/twilight-isles/revna-hollowthorn.html" },
  { name: "Sister Meriel Vael", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/twilight-isles/sister-meriel-vael.html" },
  { name: "Velka Aresk", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/twilight-isles/velka-aresk.html" },
  { name: "Vaela Raen", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/twilight-isles/vaela-raen.html" },
  { name: "Captain Yorra Vayne", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/empire-of-tides/captain-yorra-vayne.html" },
  { name: "Gravik Irontide", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/empire-of-tides/gravik-irontide.html" },
  { name: "Fenra Veln", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/empire-of-tides/fenra-veln.html" },
  { name: "Captain Maxwell", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/empire-of-tides/captain-maxwell.html" },
  { name: "Tolla Jinxfuse", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/ember-desert/tolla-jinxfuse.html" },
  { name: "Nirre Glintstream", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/ember-desert/nirra-glintstream.html" },
  { name: "Quen Maddrek", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/ember-desert/quen-maddrek.html" },
  { name: "Sazhra Dunewhisper", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/ember-desert/sazhra-dunewhisper.html" },
  { name: "Ragor Flintskin", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/ember-desert/ragor-flintskin.html" },
  { name: "Ilyen Starroot", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/ember-desert/ilyen-starroot.html" },
  { name: "Dren Volgar", path: "/Vaeloria-Info-Hub/npc-index/npc-pages/ember-desert/dren-volgar.html" },
];

const searchForm = document.querySelector("form[role='search']");
if (searchForm) {
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
      alert("No Lore found by that name. Please check your spelling.");
    }
  });
}
