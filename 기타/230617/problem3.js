const makeTables = (data) => {
  const tableData = document.getElementById("table-body");
  const noCTRLC = () => {
    alert("개인정보에 대한 복사는 금지됩니다.");
    return false;
  };

  const emailDataRenderFilter = (data) => {
    let newData = "~" + data;
    newData = newData.replace(
      "~",
      '<span class="privateName" oncopy="return false">'
    );
    newData = newData.replace("@", "</span>@");
    return newData;
  };

  data.forEach((item) => {
    const row = document.createElement("tr");

    const userNameCell = document.createElement("td");
    userNameCell.innerHTML = `<span class="privateName" oncopy="return false">${item.profile.name}<span>`;
    const emailCell = document.createElement("td");

    emailCell.innerHTML = emailDataRenderFilter(item.email);

    row.appendChild(userNameCell);
    row.appendChild(emailCell);

    tableData.appendChild(row);
  });
  const nameSpan = document.querySelectorAll(".privateName");
  nameSpan.forEach((item) => {
    item.addEventListener("copy", noCTRLC);
  });
};

const changeNameToStar = (Name) => {
  const newName = Name.split("").map((item, index) => {
    if (index > 2) return "*";
    return item;
  });
  return newName.join("");
};

const changeEmailToStar = (email) => {
  let isFinished = false;
  const newEmail = email.split("").map((item, index) => {
    if (item === "@") isFinished = true;
    if (!isFinished) {
      if (index > 2) return "*";
      return item;
    }
    return item;
  });
  return newEmail.join("");
};

const problem3EventHandlers = (() => {
  const toggle = document.querySelector("#toggleProtection");

  fetch("../data/data3.json")
    .then((res) => res.json())
    .then((data) => {
      const newData = data.map((user) => {
        return {
          ...user,
          profile: {
            address: user.profile.address,
            birthday: user.profile.birthday,
            name: changeNameToStar(user.profile.name),
          },
          email: changeEmailToStar(user.email),
        };
      });
      const tablebody = document.getElementById("table-body");
      const trDatas = tablebody.querySelectorAll("tr");
      trDatas.forEach((item) => {
        tablebody.removeChild(item);
      });
      makeTables(newData);
    });

  toggle.addEventListener("change", (e) => {
    if (e.target.checked) {
      fetch("../data/data3.json")
        .then((res) => res.json())
        .then((data) => {
          const tablebody = document.getElementById("table-body");
          const trDatas = tablebody.querySelectorAll("tr");
          trDatas.forEach((item) => {
            tablebody.removeChild(item);
          });
          makeTables(data);
        });
    } else {
      fetch("../data/data3.json")
        .then((res) => res.json())
        .then((data) => {
          const newData = data.map((user) => {
            return {
              ...user,
              profile: {
                address: user.profile.address,
                birthday: user.profile.birthday,
                name: changeNameToStar(user.profile.name),
              },
              email: changeEmailToStar(user.email),
            };
          });
          const tablebody = document.getElementById("table-body");
          const trDatas = tablebody.querySelectorAll("tr");
          trDatas.forEach((item) => {
            tablebody.removeChild(item);
          });
          makeTables(newData);
        });
    }
  });
})();
