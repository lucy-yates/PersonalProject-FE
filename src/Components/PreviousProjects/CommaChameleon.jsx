import cc from "../../Comma Chameleon.png"
import { Card } from 'react-bootstrap';

function CommaChameleon(){
    return (

        <div className="row">
        <div className="col">
             <img src={cc} alt="cc logo" style={{ height: "500px", marginLeft: "25px", marginTop: "25px", position: "fixed" }}></img> 
            
        </div>

        <div className="col">
        <Card style={{marginTop: "25px", marginRight: "25px", marginBottom: "25px"}} border="light" border-10>
            <Card.Body>
                <Card.Title><h1>Project 3 - Comma Chameleon</h1></Card.Title>
              
                <Card.Text>
                           For our third project, we were given another teams full stack application and were asked to test it using selenium.
                            </Card.Text>
                            <Card.Text>
                            We used a Jira board to help us plan our approach to make sure our MVP was clearly mapped out. The project was just about testing so editing the code to fix any errors was planned out as stretch goals.
                            </Card.Text>
                            <Card.Text>
                            We first tested buyers. Adding a new buyer worked perfectly but we faced issues when trying to use the delete button. This was due to the button not having the functionality in the react application. We had the same outcome when testing sellers, where adding a seller was ok but again the delete button did not work for the same reason.
                            </Card.Text>
                            <Card.Text>
                            We then tested adding properties. We pulled the CSS selector from each input field and responses consisted of send keys and clicks. In general, testing went smoothly for this section with no issues.
                            </Card.Text>
                           
                            <Card.Text>
                            When testing the filter for our properties, we came across an issue where our test was running successfully but we couldnt see the desired result on the webpage. After analysing our selenium, we came to the consulsion that we needed to add a thread.sleep to slow down the testing.
                            </Card.Text>
                            <Card.Text>
                            When testing the bookings, we couldn't understand why the tests were failing but we realised that the time aspect of the booking was written incorrectly in the react app so we quickly changed this and the test then ran smoothly.
                            </Card.Text>
                            <Card.Text>
                            Overall, we managed to achieve 74.5% coverage and developed a deeper understanding of how testing is essential to web developement.
                            </Card.Text>
                            
            </Card.Body>
        </Card>
        </div>

        

    </div>
            );
}
export default CommaChameleon