import tempcloud from "../../spaceholder.png";

function PreviousProjects(){
    return (

        <div className="row">
                    <div className="col">
                         <img src={tempcloud}  alt="math fact"   style={{ height: "300px", marginLeft: "20px", position: "fixed" }}></img> 
                         <img src= {tempcloud}  alt="math fact"  style={{height: "300px", marginLeft: "55px", marginTop: "450px", position: "fixed"}}></img>
                       
                       
                    </div>
        
                    <div className="col">
                      
                    </div>
        
                    <div className="col">
                    <img src={tempcloud}  alt="math fact"  style={{ height: "300px", marginLeft: "100px", position: "fixed"}}></img> 
                    <img src= {tempcloud} alt="math fact"   style={{height: "300px", marginLeft: "160px",  marginTop: "450px", position: "fixed"}}></img>
                    </div>
        
                </div>
            );
}
export default PreviousProjects