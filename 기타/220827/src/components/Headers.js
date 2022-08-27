export default function Header({ $target, initialState }) {
  this.$element = document.createElement("header"); // 헤더에
  this.$element.className = "header";

  this.header_left = document.createElement("div"); // home버튼
  this.header_left.className = "header_left";
  this.$element.appendChild(this.header_left);
  this.menu_home = document.createElement("span");
  this.menu_home.className = "header_left";
  this.menu_home.id = "menu_home";
  this.menu_home.innerText = "HOME";
  this.header_left.appendChild(this.menu_home);

  this.header_right = document.createElement("div"); // signup버튼
  this.header_right.className = "header_right";
  this.$element.appendChild(this.header_right);
  this.menu_signup = document.createElement("span");
  this.menu_signup.className = "header_right";
  this.menu_signup.id = "menu_signup";
  this.menu_signup.innerText = "SIGNUP";
  this.header_right.appendChild(this.menu_signup);

  this.header_left.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "/web/";
  });

  this.header_right.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "/web/signup";
  });

  $target.appendChild(this.$element);
}
