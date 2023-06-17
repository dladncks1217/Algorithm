const makeTables = (data, keyword) => {
  const section = document.querySelector("#section");
  const table = document.createElement("table");
  section.appendChild(table);

  const headers = ["ID", "Photographer", "Introduction"];
  const headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  const rows = data.map((element) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = element.id;
    row.appendChild(idCell);

    const photographerCell = document.createElement("td");
    element.photographer = element.photographer.replaceAll(
      keyword,
      `<span class="highlight">${keyword}</span>`
    );
    photographerCell.innerHTML = element.photographer;
    row.appendChild(photographerCell);

    const introCell = document.createElement("td");
    element.introduction = element.introduction.replaceAll(
      keyword,
      `<span class="highlight">${keyword}</span>`
    );
    introCell.innerHTML = element.introduction;
    row.appendChild(introCell);

    return row;
  });

  rows.forEach((row) => {
    table.appendChild(row);
  });
};

const problem2EventHandlers = (() => {
  const section = document.querySelector("#section");
  const searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value;

    fetch("./../data/data2.json")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.filter((item) => {
          if (item.photographer.includes(keyword)) return true;
          if (item.introduction.includes(keyword)) return true;
          return false;
        });
        const table = section.querySelector("table");
        section.removeChild(table);
        makeTables(newData, keyword);
      });
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      fetch("./../data/data2.json")
        .then((response) => response.json())
        .then((data) => {
          const newKeyword = document.createElement("li");
          newKeyword.textContent = e.target.value;
          section.appendChild(newKeyword);
          const table = section.querySelector("table");
          section.removeChild(table);

          makeTables(data);
          e.target.value = "";
        });
    }
  });
})();
