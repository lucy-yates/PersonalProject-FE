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
                            This was our second project in our incubation stage. We were tasked on following on from the previous project with a stronger focus on soft skills.
                            </Card.Text>
                            <Card.Text>
                            When we decided on whos project to continue working on, we reviewed feedback from all of the previous projects to ensure we could consider these in our sprint. One of the biggest themes in the feedback was around time allocation and planning. We were very aware that time was even more limited with this sprint and so a strict schedule would be crucial to succeed. We then did a “walkthrough” of the current code, commenting throughout to explain what each block was doing, and we reviewed the previous outstanding issues on the Jira board before creating our own. We decided that having both item’s and carts fully CRUD-able would be our MVP as not all functionality available in the back end was being utilised in the front end. We then added some stretch goals for ourselves that we knew would require some research to achieve, this was to further our learning whilst implementing a bigger feature into to the application.

                            </Card.Text>
                            <Card.Text>
                           As well as ensuring our items were fully crudable, we knew we wanted to work on improving the accessibility of our application. We used Microsoft’s accessibility insights app for web to asses and we made some improvements. We increased the colour contrast, ensured we could tab through the interactive elements in a logical order with your keyboard, and added descriptive alternative tags for pictures.
                            </Card.Text>
                            <Card.Text>
                            We managed to reach our MVP quite quickly so we decided to look at our stretch goals. The options we considered were making the existing log in page functional, converting the cart and item relationship to many to many to allow items to be added to more than one cart at the same time, and lastly adding functionality to process an order to allow carts to be reused for future orders. We split the goals between us to research, deciding to forgo the log in page for this sprint as we felt the others added more value. We came together to discuss our findings and decided that although a many to many relationship is vital for a shopping environment, the time and research required would not be possible during this sprint. 
                            </Card.Text>
                            <Card.Text>
                            With our previous orders page, the specific task involved two primary aspects: deleting items from the cart upon completion of an order to allow the cart to be utilised again for future orders and transferring the relevant order data to the previous orders page. To efficiently handle these tasks, my partner and I decided to divide the responsibilities based on our respective strengths and expertise. My partner focused on implementing the functionality to delete multiple items from the cart, while I took the lead in transferring the order data to the previous orders page. We came across a few issues when trying to achieve this goal, the first being turning the items array within the cart into a string. The customer's name was easily being transferred but the console was saying that items were not defined. When trying to redefine items, we learnt about the reduce function to flatten the item array in every cart into a single array and set this new flattened array to be the value of items. Then in the code for our complete button, we now could map items using just the item name and connect them using a comma to turn them into a string. The system now read this easily and could update the purchased value for our past order with the stringified items array. We wanted to empty the cart when the order had been completed and we knew this would use the remove from cart function we had previously made. So within our complete order button we added a line utilising the for each function to repeat the RemoveFromCart logic for each item. Then to guarantee the system used the right details, where we implemented the onclick for our button, we fed in the specific cart variables. By dividing the tasks based on our strengths and expertise, my partner and I successfully delivered the enhanced functionality for managing previous orders on our website. Our collaborative approach and division of responsibilities enabled us to deliver a robust and user-friendly solution within the project timeline, and we both gained new knowledge in doing so.

                            </Card.Text>
                            <Card.Text>
                            Once we had finished our coding we then moved to testing our project. The testing that had previously been done was no longer successful but we managed to make amendments to resolve this. We split tests from one large file to 3 smaller files to improve readability and usability. We added additional tests to cover the new functionality, and improved the existing tests by linking to a h2 database and SQL files held in our back end. This meant that for each test the database reset to the same state each time, allowing us to remove the specific ordering of the tests so that they could run in any order completely independently of one another. We achieved over the 80% coverage we were aiming for and are really happy with how it went!
                            </Card.Text>
                            <Card.Text>
                            On reflection, we both feel like we have done extremely well in this project. We worked incredibly well together as our skills differed but complemented each other, if one person would have a gap in their knowledge the other would help. When we came across hurdles we did not let this stop us and we were quick to use some positive aggression to shake each other out of the funk and adapted quickly to make the best use of our time. During the project we used peer coding as well as independent tasks which showed our trust in each others skills to get the work done. We maintained open communication throughout the project, this helped us build confidence in working independently knowing if there was an issue in whatever we were doing we could always ask for help.

                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </div>
        
                    
        
                </div>
            );
}
export default LP