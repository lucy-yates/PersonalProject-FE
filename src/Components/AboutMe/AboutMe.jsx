import france from "../../fact5.png";
import four from "../../fact6.png";
import piano from "../../fact7.png";
import forty from "../../fact8.png"

function AboutMe() {
    return (

    <div className="row">
            <div className="col">
                <img src={france} style={{ height: "300px", marginLeft: "20px" }}></img>
                <img src= {four} style={{height: "300px", marginLeft: "35px", marginTop: "250px"}}></img>
              
            </div>

            <div className="col">
                
                
            </div>

            <div className="col">
            <img src={forty} style={{ height: "300px", marginLeft: "50px", marginRight: "5px"}}></img>
            <img src= {piano} style={{height: "300px", marginLeft: "60px", marginRight: "5px", marginTop: "250px"}}></img>
            </div>

        </div>
    );
}
export default AboutMe;