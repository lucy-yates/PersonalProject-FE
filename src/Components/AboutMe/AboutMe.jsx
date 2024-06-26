import france from "../../fact5.png";
import four from "../../fact6.png";
import piano from "../../fact7.png";
import forty from "../../fact8.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';

function AboutMe() {
    return (

    <div className="row">
            <div className="col">
                <img src={france} alt="math fact" style={{ height: "300px", marginLeft: "20px" , position: "fixed"}}></img>
                <img src= {four} alt="math fact"  style={{height: "300px", marginLeft: "35px", marginTop: "450px", position: "fixed"}}></img>
              
            </div>

            <div className="col">
            <Card style={{marginTop: "45px", textAlign: "center", fontWeight:"350", fontSize: "large"}} border="light" border-10>
                        <Card.Body>
                            <Card.Title ><h2 style={{fontWeight:"500"}}>✩₊˚.⋆☾⋆⁺₊✧ About Me ✩₊˚.⋆☾⋆⁺₊✧</h2></Card.Title>
                            
                            <Card.Text>
                           My name is Lucy Ubsdell-Yates and I am a 22 year old junior software engineer based on the south coast.
                            </Card.Text>
                            
                            <Card.Text >
                                I've been training since November 2023 and have gained skills in HTML, CSS, JavaScript and Java while building experience in React, Eclipse, MySQL and VS code.
                            </Card.Text>
                            <Card.Text>
                             Before working at LBG, I studied Mathematics at the University of Chichester. Maths has always been my favourite subject at school. The way maths exists with or without us is fascinating. We use symbols to represent natural occurences and phenomena, but even if we didn't it would still occur. A fair two-sided coin has a 50% chance of landing on a certain side whether we say it does or not. We have just decided to give methods for representing these events.
                            </Card.Text>
                            <Card.Text>
                             As well as Mathematics, I have always loved music. The first birthday present I asked for when turning three was an Atomic Kitten album. I enjoy all music from hard rock to country and have always had the skill to pick up song lyrics after just one listen. 
                            </Card.Text>
                            <Card.Text>
                           This website is a display of my new skills with my own personal spin. On the pages you will see some of my favourite maths facts as well as a page dedicated to the rainbow of my favourite albums, make sure to have your volume up.
                            </Card.Text>
                            <Card.Text>
                            Thank you for visiting my website, I hope you enjoy and don't forget to check in and tell me your favourite song and number! ♥
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
            </div>

            <div className="col">
            <img src={forty} alt="math fact"   style={{ height: "300px", marginLeft: "150px", marginRight: "5px", position: "fixed"}}></img>
            <img src= {piano} alt="math fact"   style={{height: "300px", marginLeft: "160px", marginRight: "5px", marginTop: "450px", position: "fixed"}}></img>
            </div>

        </div>
    );
}
export default AboutMe;