import CreateCalculator from "./CreateCalculator";
import zero from "../../fact1.png";
import divide from "../../fact2.png";
import odd from "../../fact3.png";
import birthday from "../../fact4.png";
function Calculator() {
    return (

        <div className="row">
            <div className="col">
                <img src={zero} alt="math fact"   style={{ height: "300px", marginLeft: "20px", position: "fixed" }}></img>
                <img src= {odd}  alt="math fact"  style={{height: "300px", marginLeft: "75px", marginTop: "450px", position: "fixed"}}></img>
              
            </div>

            <div className="col">
                <CreateCalculator />
            </div>

            <div className="col">
            <img src={divide}  alt="math fact"  style={{ height: "300px", marginLeft: "150px", position: "fixed"}}></img>
            <img src= {birthday}  alt="math fact"  style={{height: "300px", marginLeft: "160px",  marginTop: "450px", position: "fixed"}}></img>
            </div>

        </div>
    );
}
export default Calculator;