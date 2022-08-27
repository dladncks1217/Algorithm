export default function ContentTitle({ $target, $targetURL }) {
  this.$element = document.createElement("div");
  this.$element.className = "content_title";
  this.content_title = document.createElement("h1");

  // 주소가 /web일때
  if ($targetURL === "/web/") {
    this.content_title.innerText = "GreatPeoPle!";
    this.$element.appendChild(this.content_title);
  } else if ($targetURL === "/web/signup") {
    this.content_title.innerText = "SignUp, GreatPeoPle!";
    this.$element.appendChild(this.content_title);
  }

  $target.appendChild(this.$element);
}
