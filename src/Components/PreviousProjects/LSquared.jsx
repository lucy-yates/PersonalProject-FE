
import lsquared from "../../LSquared.png";
import { Card } from 'react-bootstrap';

function LSquared(){
    return (

        <div className="row">
                    
        
        <div className="col">
        <Card style={{marginTop: "25px", marginLeft: "25px", marginBottom:"25px"}} border="light" border-10>
            <Card.Body>
                <Card.Title><h1>Project 4 - L Squared</h1></Card.Title>
                
                <Card.Text>
                This was our first project in our incubation stage. We were given a back-end repository containing legacy code that had been created to do specific tasks, such as allocate an Item to a Cart. With the code now outdated, it required to be brought up to date with contemporary coding practices. Our aim was to bring this code into the twenty-first century ensuring usability and functionality remained resilient. 
                            </Card.Text>
                            <Card.Text>
                            We needed to introduce React to enhance the user interface and to utilise modern front end development practices for the benefit of the clientele. We also needed to refactor the Java backend to adopt a microservices architecture using Spring-Boot and implement Spring data for efficient database interaction. Following successful completion of the above, we were tasked with testing using Selenium to ensure the integrity of our application was maintained. 

                            </Card.Text>
                            
                            <Card.Text>
                            We decided to start with our back-end as we agreed this would make the most sense as well as we appreciated a successful backend would provide the structure and foundation for us to build our React application later. 

                            </Card.Text>
                          
                            <Card.Text>
                            Based on the legacy code received, we knew there would two components our application would be centred on, Carts and Items. Therefore, we created Domains, Repos, Rests and Services for both. Within both Item and Cart classes, we assigned an id which was automatically incremented. For our carts, we assigned them to be one per customer to ensure a smooth transition on our Front-End, and as per our interpretation of the legacy code, we gave our items a name, a price and a quantity. We interpreted that we needed to be able to link the two classes  so we chose to use a One to Many relationship, where the Cart ID was the foreign key between the two tables within our SQL schema. We ensured everything working by testing with vigour on Postman to make ensure flawless functionality of the CRUD (Create, Read, Update & Delete) Methodology.  

                            </Card.Text>
                            <Card.Text>
                            Following the completion of our Back-End application, we then moved on to creating our React application. Our interpretation of the project brief was that our application would serve as the internal, back-office, management system of a store that would deal with an array of commodities. 

                            </Card.Text>
                            <Card.Text>
                            Within React, utilising imported Axios, we used Post requests to link the front-end to our back-end so we could retrieve the data from our SQL Tables seamlessly. Following interpretation of the legacy code, and ensuring consistency between Front & Back, we once again had our two main Components, Item and Cart, and we broke them down to into three JSX files each, for example Item. CreateItem. and DisplayItem.  
                            </Card.Text>
                            <Card.Text>
                            When it came to testing, we struggled briefly with the concept of testing a few our aspects but managed to achieve 77.9% coverage.
                            </Card.Text>
                           
                            <Card.Text>
                            Overall the project went well. Throughout the project we received great value from morning shouts and daily retros. The morning shouts gave us the opportunity to outline what would wanted to achieve within the day, and the retro allowed us to celebrate success, or put in place a realistic plan of attack for the following day.

                            </Card.Text>
                           
            </Card.Body>
        </Card>
        </div>

        <div className="col">
             <img src={lsquared} alt="l squared logo" style={{ width: "825px", marginRight: "25px",marginLeft: "25px", marginTop: "25px", position: "fixed" }}></img> 
            
        </div>
        

    </div>
            );
}
export default LSquared