const makeTables = (data) => {
  const tableBody = document.getElementById("table-body");

  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  data.forEach((item) => {
    const row = document.createElement("tr");
    const indexCell = document.createElement("td");
    indexCell.textContent = item.index;
    row.appendChild(indexCell);
    const nicknameCell = document.createElement("td");
    nicknameCell.textContent = item.nickname;
    row.appendChild(nicknameCell);
    const dateOfHireCell = document.createElement("td");
    const dateOfHire = new Date(item.dateOfHire);
    dateOfHireCell.textContent = dateOfHire.toLocaleDateString();
    row.appendChild(dateOfHireCell);
    const verifiedCell = document.createElement("td");
    verifiedCell.textContent = item.verified ? "Yes" : "No";
    row.appendChild(verifiedCell);
    tableBody.appendChild(row);
  });
};

const filterVerifiedData = (data) => {
  return data.filter((item) => item.verified === true);
};

const problem1EventHandlers = (() => {
  const indexHeader = document.querySelector("#index-header");
  const verifiedHeader = document.querySelector("#filter-verified");
  const nicknameHeader = document.querySelector("#nickname-header");
  const hireDateHeader = document.querySelector("#date-of-hire-header");
  const topButton = document.querySelector(".scroll-up");

  const observer = new IntersectionObserver(() => {
    topButton.style.display = "block";
  });

  observer.observe(topButton);

  indexHeader.addEventListener("click", (e) => {
    e.preventDefault();
    if (!verifiedHeader.checked) {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => a.index - b.index);
          makeTables(data);
        });
    } else {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          const filteredData = filterVerifiedData(data);
          filteredData.sort((a, b) => a.index - b.index);
          makeTables(filteredData);
        });
    }
  });

  verifiedHeader.addEventListener("change", (e) => {
    e.preventDefault();
    if (!verifiedHeader.checked) {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          makeTables(data);
        });
    } else {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          makeTables(filterVerifiedData(data));
        });
    }
  });

  nicknameHeader.addEventListener("click", (e) => {
    e.preventDefault();
    if (!verifiedHeader.checked) {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => {
            if (a.nickname > b.nickname) return 1;
            if (a.nickname < b.nickname) return -1;
          });
          makeTables(data);
        });
    } else {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => {
            if (a.nickname > b.nickname) return 1;
            if (a.nickname < b.nickname) return -1;
          });
          const newData = filterVerifiedData(data);
          makeTables(newData);
        });
    }
  });

  hireDateHeader.addEventListener("click", (e) => {
    e.preventDefault();
    if (!verifiedHeader.checked) {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => {
            if (a.dateOfHire > b.dateOfHire) return 1;
            if (a.dateOfHire < b.dateOfHire) return -1;
          });
          makeTables(data);
        });
    } else {
      fetch("./../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => {
            if (a.dateOfHire > b.dateOfHire) return 1;
            if (a.dateOfHire < b.dateOfHire) return -1;
          });
          const newData = filterVerifiedData(data);
          makeTables(newData);
        });
    }
  });

  topButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
})();
