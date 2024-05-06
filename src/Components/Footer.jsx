import facelogo from "../assets/facebookicon.png"
import tweetlogo from "../assets/twittericon.png"
import instalogo from "../assets/instagramicon.png"
import gitlogo from "../assets/githubicon.png"

function Footer(){
    return(
        <div id="footer">            
            <img src={tweetlogo} alt="Twitter Logo" width="25px" height="25px"></img>
            <img src={facelogo} alt="Facebook Logo" width="25px" height="25px"></img>
            <img src={instalogo} alt="Instagram Logo" width="25px" height="25px"></img>
            <img src={gitlogo} alt="GitHub Logo" width="25px" height="25px"></img>
        </div>
    )
}
export default Footer