import cake from "../../fact13.png";
import hundred from "../../fact14.png";
import paper from "../../fact15.png";
import dice from "../../fact16.png";

function PenPortrait() {
    return (

<div className="row">
            <div className="col">
                <img src={cake}  alt="math fact"  style={{ height: "300px", marginLeft: "20px", position: "fixed" }}></img>
                <img src= {hundred}  alt="math fact"  style={{height: "300px", marginLeft: "55px", marginTop: "450px", position: "fixed"}}></img>
              
            </div>

            <div className="col">
              
            </div>

            <div className="col">
            <img src={paper} alt="math fact"   style={{ height: "300px", marginLeft: "100px", position: "fixed"}}></img>
            <img src= {dice} alt="math fact"   style={{height: "300px", marginLeft: "160px",  marginTop: "450px", position: "fixed"}}></img>
            </div>

        </div>
    );

}
export default PenPortrait