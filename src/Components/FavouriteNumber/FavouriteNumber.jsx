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
                    <img src={two}  alt="math fact"  style={{ height: "300px", marginLeft: "20px", position: "fixed" }}></img>
                    <img src= {googolplex}  alt="math fact"  style={{height: "300px", marginLeft: "20px", marginTop: "450px", position: "fixed"}}></img>
                  
                </div>
    
                <div className="col">
                    <CreateVisitor/>
                    <DisplayVisitor/>
                    
                </div>
    
                <div className="col">
                <img src={cards}  alt="math fact"  style={{ height: "300px", marginLeft: "80px", position: "fixed"}}></img>
                <img src= {a}  alt="math fact"  style={{height: "300px", marginLeft: "90px", marginTop: "450px", position: "fixed" }}></img>
                </div>
    
            </div>
        
);
}
export default FavouriteNumber