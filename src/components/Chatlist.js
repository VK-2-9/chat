import profile from "../assets/images/profile.jpg";

var list = [
  {
    img:  profile ,
    name: "VK",
    message: "Hey VK, I am here",
  },
  {
    img:  profile ,
    name: "dK",
    message: "H am here",
  },
  {
    img:  profile ,
    name: "cK",
    message: "Hey VK,re",
  },
  {
    img:  profile ,
    name: "bK",
    message: "HI am here",
  },
  {
    img:  profile ,
    name: "aK",
    message: "Hey Vere",
  },
];

function Chatlist() {
  return (
    <div>
      {list.map((item) => (
        <div className="chat">
          <img src={item.img} alt="Profile" className="profile"></img>
          <div className="text">
            <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
              {item.name}
            </p>
            <p style={{ fontWeight: "normal", fontSize: "13px" }}>
              {item.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chatlist;
