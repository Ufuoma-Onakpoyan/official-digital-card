import ProfilePic from "../assets/Imagae1.png"
import mailicon from "../assets/mail.png"
import linkdlnicon from "../assets/linkendln.png"
function Info(){
    return(
        <div className="divInfo">
            <img className="info-Img" src={ProfilePic} alt="Profile Picture" width="280px" height="290px"></img> 

            <div className="bodyElements">
                <h1 className="info-title">Onakpoyan Ufuoma</h1>
                <h2 className="info-jobtitle">Frontend Developer</h2>
                <h5 className="info-text">ufuomaonakpoyan.website</h5>


            
                <div className="info-button">
                    <button className="info-emailbtn">
                        <img src={mailicon}></img>
                        Email
                    </button>


                    <button className="info-Linkedlnbtn">
                        <img src={linkdlnicon}></img>
                        Linkedln
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default Info