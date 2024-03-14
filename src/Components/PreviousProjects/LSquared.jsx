
import lsquared from "../../LSquared.png";
import { Card } from 'react-bootstrap';

function LSquared(){
    return (

        <div className="row">
                    
        
        <div className="col">
        <Card style={{marginTop: "75px", marginLeft: "150px"}} border="light" border-10>
            <Card.Body>
                <Card.Title><h1>Project 4 - L Squared</h1></Card.Title>
                
                <Card.Text>
                            Mr. Worldwide to infinity
                            </Card.Text>
                            <Card.Text>
                            You know the roof on fire
                            </Card.Text>
                            <Card.Text>
                            We gon' boogie oogie oogie, jiggle, wiggle and dance
                            </Card.Text>
                            <Card.Text>
                            Like the roof on fire 
                            </Card.Text>
                          
                            <Card.Text>
                            We gon' drink drinks and take shots until we fall out
                            </Card.Text>
                            <Card.Text>
                            Like the roof on fire
                            </Card.Text>
                            <Card.Text>
                            Now baby give a booty naked, take off all your clothes
                            </Card.Text>
                            <Card.Text>
                            And light the roof on fire
                            </Card.Text>
                            <Card.Text>
                            Tell her, tell her baby, baby, baby, baby, baby, baby, baby, baby, baby
                            </Card.Text>
                            <Card.Text>
                            I'm on fire
                            </Card.Text>
                            <Card.Text>
                            I tell her baby, baby, baby, baby, baby, baby, baby, baby, baby
                            </Card.Text>
                            <Card.Text>
                            I'm a fireball
                            </Card.Text>
            </Card.Body>
        </Card>
        </div>

        <div className="col">
             <img src={lsquared} alt="l squared logo" style={{ height: "500px", marginRight: "200px",marginLeft: "200px", marginTop: "75px", position: "fixed" }}></img> 
            
        </div>
        

    </div>
            );
}
export default LSquared