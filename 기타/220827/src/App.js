import ContentTitle from "./components/ContentTitle.js";
import Header from "./components/Header.js";
import HomePage from "./page/HomePage.js";
import SignUpPage from "./page/SignupPage.js";
// import new_data from './data/new_data.js';

export default function App({ $target }) {
  const nowURL = location.pathname;

  new Header({ $target });
  new ContentTitle({ $target, $targetURL: nowURL });

  // for(let i =0;i<new_data.length;i++){
  //     new_data[i].idx = i+1;
  // }
  // localStorage.setItem("personalInfo",JSON.stringify(new_data))

  if (nowURL === "/web/") {
    new HomePage({ $target });
  } else if (nowURL === "/web/signup") {
    new SignUpPage({ $target });
  }
}
