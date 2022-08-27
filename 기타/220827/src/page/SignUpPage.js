export default function SignUpPage({ $target }) {
  const roleArr = [
    ["", "직군을 선택해주세요"],
    ["backend", "백엔드"],
    ["frontend", "프론트엔드"],
    ["fullstack", "풀스택"],
  ];
  const mbti = [
    ["", "MBTI를 선택해주세요"],
    "ENFJ",
    "ENTJ",
    "ENFP",
    "ENTP",
    "ESFJ",
    "ESTJ",
    "ESFP",
    "ESTP",
    "INFJ",
    "INTJ",
    "INFP",
    "INTP",
    "ISFJ",
    "ISTJ",
    "ISFP",
    "ISTP",
  ];
  this.$element = document.createElement("div");
  this.$element.id = "form_container";

  // name
  this.form_elem = document.createElement("span");
  this.form_elem.className = "form_elem";

  this.input_name = document.createElement("input");
  this.input_name.id = "name";
  this.input_name.placeholder = "이름";

  this.label = document.createElement("label");
  this.label.for = "name";
  this.label.innerText = "이름 *(필수)";

  this.form_elem.appendChild(this.label);
  this.form_elem.appendChild(this.input_name); // 이름 인풋 추가
  this.$element.appendChild(this.form_elem); // 이름 인풋 추가

  // email
  this.form_elem = document.createElement("span");
  this.form_elem.className = "form_elem";

  this.input_email = document.createElement("input");
  this.input_email.id = "email";
  this.input_email.placeholder = "이메일";

  this.label = document.createElement("label");
  this.label.for = "email";
  this.label.innerText = "이메일 *(필수)";

  this.form_elem.appendChild(this.label);

  this.form_elem.appendChild(this.input_email); // 이메일 인풋 추가
  this.$element.appendChild(this.form_elem); // 이메일 인풋 추가

  // nick
  this.form_elem = document.createElement("span");
  this.form_elem.className = "form_elem";

  this.input_nick = document.createElement("input");
  this.input_nick.id = "nickname";
  this.input_nick.placeholder = "닉네임";

  this.label = document.createElement("label");
  this.label.for = "nickname";
  this.label.innerText = "닉네임 *(필수)";

  this.form_elem.appendChild(this.label);

  this.form_elem.appendChild(this.input_nick); // 이메일 인풋 추가
  this.$element.appendChild(this.form_elem); // 이메일 인풋 추가

  // role
  this.form_elem = document.createElement("span");
  this.form_elem.className = "form_elem";

  this.input_role = document.createElement("select");
  this.input_role.id = "role";
  this.input_role.placeholder = "role";

  roleArr.forEach((v) => {
    // option select에 붙이기
    this.role_option = document.createElement("option");
    this.role_option.value = v[0];
    this.role_option.innerText = v[1];

    this.input_role.appendChild(this.role_option);
  });

  this.label = document.createElement("label");
  this.label.for = "role";
  this.label.innerText = "직군 *(필수)";

  this.form_elem.appendChild(this.label);

  this.form_elem.appendChild(this.input_role); // role 추가
  this.$element.appendChild(this.form_elem); // role 추가

  // mbti
  this.form_elem = document.createElement("span");
  this.form_elem.className = "form_elem";

  this.input_mbti = document.createElement("select");
  this.input_mbti.id = "mbti";
  this.input_mbti.placeholder = "mbti";

  mbti.forEach((v, i) => {
    // option select에 붙이기
    if (i > 0) {
      this.role_option = document.createElement("option");
      this.role_option.value = v;
      this.role_option.innerText = v;

      this.input_mbti.appendChild(this.role_option);
    } else {
      this.role_option = document.createElement("option");
      this.role_option.value = v[0];
      this.role_option.innerText = v[1];

      this.input_mbti.appendChild(this.role_option);
    }
  });

  this.label = document.createElement("label");
  this.label.for = "mbti";
  this.label.innerText = "MBTI *(필수)";

  this.form_elem.appendChild(this.label);

  this.form_elem.appendChild(this.input_mbti); // mbti 추가
  this.$element.appendChild(this.form_elem); // mbti 추가

  // submit
  this.form_elem = document.createElement("span");
  this.form_elem.className = "form_elem";

  this.input_submit = document.createElement("button");
  this.input_submit.type = "subtmit";
  this.input_submit.innerText = "등록";

  // submit 시 동작
  this.input_submit.addEventListener("click", (e) => {
    e.preventDefault();
    let canSignUp = true; // 가입가능한지
    const getData = JSON.parse(localStorage.getItem("personalInfo"));

    const data = {
      name: this.input_name.value,
      email: this.input_email.value,
      nickname: this.input_nick.value,
      role: this.input_role.value,
      mbti: this.input_mbti.value,
    };

    for (let i = 0; i < getData.length; i++) {
      if (getData[i].nickname === data.nickname) {
        canSignUp = false;
        break;
      } else if (getData[i].email === data.email) {
        canSignUp = false;
        break;
      }
    }

    if (canSignUp) {
      data.idx = getData.length + 1;
      getData.push(data);
      console.log("asdf");
      localStorage.setItem("personalInfo", JSON.stringify(getData)); // 가져온 데이터에 추가해서 다시보내기
      alert("성공적으로 등록되었습니다.");
    } else {
      alert("이메일 혹은 닉네임이 이미 등록되어 있습니다.");
    }
  });

  this.form_elem.appendChild(this.input_submit); // 등록버튼 추가
  this.$element.appendChild(this.form_elem); // 등록버튼 추가

  $target.appendChild(this.$element);
}
