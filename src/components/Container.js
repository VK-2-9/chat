import profile from "../assets/images/profile.jpg"


function Container(){
    return(
        <div className="container">
         <input type="text" placeholder="Search" className="input" />

         <div className="chat-list">
            <div className="chat">
                 <img src={profile} alt="Profile" className="profile" ></img>
                    <div className="text">
                        <p style={{fontWeight:"bolder", fontSize:"20px"}}>VK</p>
                        <p style={{fontWeight:"normal", fontSize:"13px"}}>Hey VK, I am here</p>
                    </div>
            </div>

            <div>
                <img src={profile} alt="Profile" className="profile-pic" ></img>
                <p>VK</p>
                <p>Hey VK, I am here</p>
            </div>
        </div>
        </div>
    )
}

export default Container;