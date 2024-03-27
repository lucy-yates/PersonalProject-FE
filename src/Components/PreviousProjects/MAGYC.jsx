
import magyc from "../../MAGYC.jpeg";
import { Card } from 'react-bootstrap';

function MAGYC(){
    return (
<div className="row">
                    
        
                    <div className="col">
                    <Card style={{marginTop: "25px", marginLeft: "25px", marginBottom:"25px"}} border="light" border-10>
                        <Card.Body>
                            <Card.Title><h1>Project 2 - MAGYC</h1></Card.Title>
                           
                            <Card.Text>
                            The goal for our project was to create a back-end server and to connect it to a previous teams front-end application.
                            </Card.Text>
                            <Card.Text>
                            The previous team created the front-end application, this was written in react and they used axios and a JSON server to act as their back end originally.
                            </Card.Text>
                            <Card.Text>
                            Our job was to create this new back-end to replace the JSON server. We wrote our back-end in springboot and had it connect with our MySQL database to store and fetch data.
                            </Card.Text>
                            <Card.Text>
                            While planning, we had to look at the original code base and made sure we understood it. We ran the front-end to see if there were any issues in the code. we identified a few issues and made sure we added these to our plan. 
                            </Card.Text>
                          
                            <Card.Text>
                            Building the back-end allowed us to establish a solid foundation for our prokect. By focussing on the core functionality, data and logic behind the scenes, we were able to ensure our back-end was working correctly. We built the domain, rest, service and controller packages and designed the @OneToMany and @ManyToOne to bring everything together.
                            </Card.Text>
                            <Card.Text>
                            we tested using postman to ensure everything was working before connecting our two applications. There were exisiting axios requests in the front-end, which allow the sending and receiving of data. By simply amending the path in these, we were able to link these together. At this point we faced a dew issues with our @OneToMany and @ManyToOne relationships but we learnt we needed to give the back reference and managed reference a matching value.
                            </Card.Text>
                            <Card.Text>
                            During this project, we developed a better understanding of the software we had used.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </div>
        
                    <div className="col">
                         <img src={magyc} alt="magyc logo" style={{ height: "500px", marginRight: "25px",marginLeft: "150px", marginTop: "25px", position: "fixed" }}></img> 
                        
                    </div>
                    
        
                </div>
            );
}
export default MAGYC