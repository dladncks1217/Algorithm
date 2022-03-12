const input = document.querySelector(".SearchInput__input");
const data = document.querySelector(".SearchInput__input").value;
const ul = document.querySelector("#ul");

let beforeresult = 0; // 이전 값들의 개수

const Suggestion = document.querySelector(".Suggestion");
Suggestion.style.visibility = "hidden"; // 첫 화면은 안보이게

function wordsplice(word1, word2) {
  // li에서 span을 나눌 부분 검사 함수입니다.
  let result = [];
  let start = word1.indexOf(word2);
  if (start === 0) {
    result.push(word1.substr(0, word1.length - word2.length)); // 시작부분
    result.push("");
    result.push(word1.substr(word2.length + 1, word1.length)); // 마지막부분
  } else {
    console.log("asdf");
    result.push(word1.substr(0, start)); // 시작부분
    result.push(word2); // 중간부분
    result.push(word1.substr(start + word2.length)); // 마지막부분
  }
  console.log(result + "결과임");
  return result;
}

async function start(data) {
  const url =
    location.protocol === "https:"
      ? "https://cors-anywhere.herokuapp.com/https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword="
      : "http://cors-anywhere.herokuapp.com/http://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=";
  try {
    const response = await fetch(url + data, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("err", e);
  }
}

ul.addEventListener("click", (e) => {
  // 결과 클릭 시
  if (ul.childElementCount > 5) {
    const result = document.querySelector(".resultclass");
  }
  if (ul.childElementCount > 0) {
    const selectedli = document.querySelector("#selected");
    const selectedresult = e.target.innerText;
    const newnode = document.createElement("li");
    newnode.className = "resultclass";
    newnode.innerText = selectedresult;
    selectedli.appendChild(newnode);
    alert(selectedresult); // alert 띄워주기
  }
});

input.addEventListener("keydown", async (e) => {
  if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40) {
    // 위아래 키 눌렀을때 예외처리
    const ul = document.querySelector("#ul");
    //
    if (ul.childElementCount !== 0) {
      // 결과값이 있는 상황이라면
      const selected = document.querySelector(".Suggestion__item--selected"); // 현재 선택된 노드
      if (e.which === 40) {
        // 내려가는 키보드
        const next = selected.nextElementSibling; // 다음노드
        next.className = "Suggestion__item--selected"; // 다음거 이름넣기
        selected.classList.remove("Suggestion__item--selected"); // 선택이였던 값 지우기
      } else if (e.which === 38) {
        // 올라가는 키보드
        const last = selected.previousElementSibling; // 이전노드
        last.className = "Suggestion__item--selected"; // 이전거 이름넣기
        selected.classList.remove("Suggestion__item--selected"); // 선택이였던 값 지우기
      }
    }
  } else if (e.which === 13) {
    const selectedli = document.querySelector("#selected");
    e.preventDefault();
    if (ul.childElementCount !== 0) {
      // 결과값이 있는 상황이라면
      const selectedresult = document.querySelector(
        ".Suggestion__item--selected"
      );
      const newnode = document.createElement("li");
      newnode.className = "resultclass";
      newnode.innerText = selectedresult.innerText;
      selectedli.appendChild(newnode);
      alert(selectedresult.innerText); // alert 띄워주기
    }
  } else {
    if (e.target.value === "") {
      // 값 없으면 창 안뜨게
      const Suggestion = document.querySelector(".Suggestion");
      Suggestion.style.visibility = "hidden";
    }

    const result = ["Java", "JavaFX Script", "JavaScript", "Join Java"]; // 더미데이터
    // const result = []
    // const result = await start(e.target.value);

    console.log(result);
    const input = document.querySelector(".Suggestion__item--matched");
    const ul = document.querySelector("#ul");
    const Suggestion = document.querySelector(".Suggestion");
    if (result.length === 0) {
      Suggestion.style.visibility = "hidden";
    } else {
      Suggestion.style.visibility = "visible";
    }

    for (let i = 0; i < beforeresult; i++) {
      // 리스트들 삭제하기
      const node = document.querySelector("#ul li");
      console.log(node);
      ul.removeChild(node);
    }
    result.forEach((v, i) => {
      // 리스트들 새로 만들기
      // const listspan = wordsplice(v,e.target.value);
      const list = document.createElement("li");
      // const span = document.createElement('span');
      // span.className = 'Suggestion__item--matched';
      if (i === 0) {
        list.className = "Suggestion__item--selected";
      }
      list.innerText = v;
      // list.innerText = listspan[0];
      // span.innerText = listspan[1];
      // list.innerText = listspan[2];
      // list.appendChild(span);
      ul.appendChild(list);
    });
    beforeresult = result.length;
  }
});
