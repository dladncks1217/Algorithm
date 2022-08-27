export default function HomePage({ $target }) {
  this.$element = document.createElement("div");
  this.$element.id = "cards_container";
  const data = JSON.parse(localStorage.getItem("personalInfo"));

  data.forEach((v) => {
    this.card = document.createElement("div");
    this.card.idx = v.idx;

    this.cardfront = document.createElement("div");
    this.cardfront.className = "card card_plane card_plane--front";

    this.cardfront.innerText = v.nickname;
    this.card.appendChild(this.cardfront);
    // this.cardfront.addEventListener('click',(e)=>{
    //     console.log('asdf')
    //     e.preventDefault();
    //     this.cardback.hidden = false;
    //     this.cardfront.hidden = true;

    // })

    this.cardback = document.createElement("div");
    this.cardback.className = "card card_plane card_plane--back";
    this.cardback.hidden = true;

    this.cardback.innerText = v.mbti;
    // this.cardback.addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     this.cardfront.hidden = false;
    //     this.cardback.hidden = true;
    // })

    this.card.appendChild(this.cardback);
    this.card.appendChild(this.cardfront);
    this.$element.appendChild(this.card);
    this.$element.appendChild(this.card);
  });

  $target.appendChild(this.$element);
}
