import React from "react";
import { Link } from "react-router-dom"; 
 export default  function LandingPage(){
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                  <h2>Video Call</h2>
                </div>
                <div className="navlist">
                    <p>Join as Guest </p>
                    <p>Register</p>
                   <div role="button">
                    <p>Login</p>
                   </div>
                </div>
            </nav>
              <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#FF9839"}}>Connect</span> with your Loved Ones</h1>
                    <p>Cover a distance by Apna VideoCall</p>
                    <div role= "button"><Link to={"/auth"}>Get Started</Link>
                     </div>
                   
                    {/* <p style={{color:"white"}}>Get Started</p> */}
                </div>
               <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5nUGeL73QB82J4-CBDo1VCanVckHA1AvsQ&s"></img>
                </div>
              </div>
              </div>
    )

 }