import two from "../../fact9.png";
import googolplex from "../../fact10.png";
import cards from "../../fact11.png";
import a from "../../fact12.png";
import CreateVisitor from "./CreateVisitor";
import DisplayVisitor from "./DisplayVisitor";

function FavouriteNumber() {
return (
    

        <div className="row">
                <div className="col">
                    <img src={two} style={{ height: "300px", marginLeft: "20px" }}></img>
                    <img src= {googolplex} style={{height: "300px", marginLeft: "20px", marginTop: "250px"}}></img>
                  
                </div>
    
                <div className="col">
                    <CreateVisitor/>
                    <DisplayVisitor/>
                    
                </div>
    
                <div className="col">
                <img src={cards} style={{ height: "300px", marginLeft: "150px"}}></img>
                <img src= {a} style={{height: "300px", marginLeft: "160px", marginTop: "250px"}}></img>
                </div>
    
            </div>
        
);
}
export default FavouriteNumber