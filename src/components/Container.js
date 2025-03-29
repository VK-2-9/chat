import profile from "../assets/images/profile.jpg";

import Chatlist from "../components/Chatlist";

function Container() {
  return (
    <div className="container">
      <input type="text" placeholder="Search" className="input" />

      <Chatlist ></Chatlist>
    </div>
  );
}

export default Container;
