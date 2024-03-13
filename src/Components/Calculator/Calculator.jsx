import CreateCalculator from "./CreateCalculator";
import zero from "../../fact1.png";
import divide from "../../fact2.png";
import odd from "../../fact3.png";
import birthday from "../../fact4.png";
function Calculator() {
    return (

        <div className="row">
            <div className="col">
                <img src={zero} style={{ height: "300px", marginLeft: "20px" }}></img>
                <img src= {odd} style={{height: "300px", marginLeft: "75px", marginTop: "250px"}}></img>
              
            </div>

            <div className="col">
                <CreateCalculator />
            </div>

            <div className="col">
            <img src={divide} style={{ height: "300px", marginLeft: "50px", marginRight: "20px"}}></img>
            <img src= {birthday} style={{height: "300px", marginLeft: "60px", marginRight: "20px", marginTop: "250px"}}></img>
            </div>

        </div>
    );
}
export default Calculator;