
import magyc from "../../MAGYC.jpeg";
import { Card } from 'react-bootstrap';

function MAGYC(){
    return (
<div className="row">
                    
        
                    <div className="col">
                    <Card style={{marginTop: "75px", marginLeft: "150px"}} border="light" border-10>
                        <Card.Body>
                            <Card.Title><h1>Project 2 - MAGYC</h1></Card.Title>
                           
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
                                This website is a summary of my new software skills while staying true to my character.
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
                         <img src={magyc} alt="magyc logo" style={{ height: "500px", marginRight: "200px",marginLeft: "200px", marginTop: "75px", position: "fixed" }}></img> 
                        
                    </div>
                    
        
                </div>
            );
}
export default MAGYC