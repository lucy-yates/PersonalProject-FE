import france from "../../fact5.png";
import four from "../../fact6.png";
import piano from "../../fact7.png";
import forty from "../../fact8.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Carousel } from 'react-bootstrap';

function AboutMe() {
    return (

    <div className="row">
            <div className="col">
                <img src={france} style={{ height: "300px", marginLeft: "20px" }}></img>
                <img src= {four} style={{height: "300px", marginLeft: "35px", marginTop: "250px"}}></img>
              
            </div>

            <div className="col">
            <Card border="light" border-10>
                        <Card.Body>
                            <Card.Title><h1>About Me</h1></Card.Title>
                            <Card.Text>
                                Welcome to L², where the convergence of passion for software engineering and an appreciation for the extraordinary has given birth to a unique online shopping experience.
                            </Card.Text>
                            <Card.Text>
                                Our story begins with Lucy and Liam, two driven individuals who embarked on a transformative journey through a software reskilling cohort at Lloyds Banking Group. Under the guidance of the infamous trainer, <i>Jordan Harrison</i>, a diabolical software engineer, they honed their skills and absorbed the intricacies of coding.
                            </Card.Text>
                            <Card.Text>
                                Lucy and Liam's original aspiration was to become software engineers for Lloyds Banking Group. However, destiny had a different path in mind. Undeterred by the twists of fate, they joined forces and ventured into the world of entrepreneurship, carving out a space for themselves in the vast digital landscape.
                            </Card.Text>
                            <Card.Text>
                                Our journey took an unexpected turn when Lucy and Liam, drawing inspiration from a legacy project at Lloyds, decided to weave their coding expertise into an online shopping platform. Thus, L² was born, a haven for those seeking exotic goods and, for the more adventurous, some intriguing and questionable occult artifacts.
                            </Card.Text>
                            <Card.Text>
                                The success of L² has been nothing short of phenomenal, growing rapidly from its modest beginnings. What sets us apart is not just the diversity of our offerings but the dedication and passion that Lucy and Liam infuse into every line of code. Our online shop is a testament to their unwavering commitment to deliver a seamless and enjoyable shopping experience.
                            </Card.Text>
                            <Card.Text>
                                At L², we believe in pushing boundaries, embracing the extraordinary, and challenging the status quo. Our team may be small, but our ambitions are grand. We invite you to explore our digital emporium, where innovation meets curiosity, and discover treasures that transcend the ordinary.
                            </Card.Text>
                            <Card.Text>
                                Thank <b>you</b> for being a part of our journey. Your adventure begins here at L².
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
            </div>

            <div className="col">
            <img src={forty} style={{ height: "300px", marginLeft: "150px", marginRight: "5px"}}></img>
            <img src= {piano} style={{height: "300px", marginLeft: "160px", marginRight: "5px", marginTop: "250px"}}></img>
            </div>

        </div>
    );
}
export default AboutMe;