import lp from "../../LPLogo.png"
import { Card } from 'react-bootstrap';

function LP(){
    return (

        <div className="row">
                    <div className="col">
                         <img src={lp} alt="lp logo" style={{ width: "875px", marginLeft: "25px", marginTop: "25px", marginBottom: "25px", position: "fixed" }}></img> 
                        
                    </div>
        
                    <div className="col">
                    <Card style={{marginTop: "25px", marginRight: "25px", marginBottom: "25px"}} border="light" border-10>
                        <Card.Body>
                            <Card.Title><h1>Project 5 - LP</h1></Card.Title>
                            
                            <Card.Text>
                            For our first project, we were set with the challenge of building a real estate agencts website. My team decided to call our estate agency JALAL.
                            </Card.Text>
                            <Card.Text>
                            We followed the methodology of agile, and the scrum framework. In following agile, within the confines of our set-up we focussed on individuals and interactions over processes and tools ensuring that we were all valued and that we communicated well. By following our scrum framwork, we really embraced the planning, implementation and retro values of the framework. Both scrum and agile were extremely valuable as they not only built team rapport but allowed us to celebrate our wins and plan to overcome our obstacles.
                            </Card.Text>
                            <Card.Text>
                           As part of our planning stage, in order to breakdown our MVP into manageable chunks, we created user stories and acceptance criteria. After this we split them into epics. As this was our first project, we used peer learning, working closely as a group. Taking it in turns to code with support from the remaining group members. While completing the project we used JIRA, MIRO, VS Code and GitHub. We used React for the code and for styling we used a combination of Bootstrap and CSS.
                            </Card.Text>
                            <Card.Text>
                            We started with the code for our buyers and sellers. We used JSON arrays and HTTP post requests so all our data could be saved and displayed.
                            </Card.Text>
                            <Card.Text>
                            We then moved on to properties, we followed a similar process to buyers and sellers to begin with. We then added a filter using a for loop to select the wanted properties. We also made sure the property status was ammendable.
                            </Card.Text>
                            <Card.Text>
                            Finally we went to bookings. We styled our bookings in a table so that the data wasclear for the user to understand. Again, using AXIOS, we linked our booking page to our JSON file so we could keep track of our bookings.
                            </Card.Text>
                            <Card.Text>
                            We learnt a lot from the project and it massively helped us in our future projects.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </div>
        
                    
        
                </div>
            );
}
export default LP