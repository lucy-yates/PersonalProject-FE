import "./music.css";
import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import ReadyForIt from "../../ReadyForIt.mp3";



function FavouriteMusic(){


    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");
    const [text6, setText6] = useState("");
    const [text7, setText7] = useState("");
    const [text8, setText8] = useState("");
    const [text9, setText9] = useState("");
    const [text10, setText10] = useState("");
    // const[music1, setMusic1] = useState(Audio);
    const taytay = new Audio(ReadyForIt);
    // function handleMusic1(){
    //     <audio controls autoplay>
    //                         <source src={ReadyForIt} type="audio/mpeg" />
    //                     </audio>
    //         };

    function handleMouseOver1() {
        
      setText1(<div style={{ backgroundColor: "#BABABA", color: "#000000"}}>
        <p >Taylor Swift - Reputation</p>
        <p style={{fontStyle: "italic"}}><b>♫</b> In the middle of the night, in my dreams, you should see the things we do <b>♫</b></p>
      </div>);
      setText2("");
   <audio controls>
                             <source src={taytay} type="audio/mpeg" />
                       </audio>

       };
    
    function handleMouseOver2(){
        setText2(<div>
            <p>The 1975 - The 1975</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> God, I love the way you love yourself <b>♫</b></p>
          </div>);
        setText1("");
    }

    function handleMouseOver3() {
        
        setText3(<div style={{ backgroundColor: "#BF9C78", color: "#FFFFFF"}}>
            <p>Silk Sonic - An Evening With Silk Sonic</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> After last night, I think I'm in love with you <b>♫</b></p>
          </div>);
        setText4("");
      };
      
      function handleMouseOver4(){
          setText4(<div style={{ backgroundColor: "#DF2A2A", color: "#FFFFFF"}} >
            <p>The Wombats - Beautiful People Will Ruin Your Life</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> You could give an aspirin the headache of its life <b>♫</b></p>
          </div>);
          setText3("");
      }

      function handleMouseOver5() {
        
        setText5(<div  style={{backgroundColor: "#FFB647", color: "#FFFFFF"}}>
            <p>Tyler, the Creator - Flower Boy</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> I wonder if you look both ways when you cross my mind <b>♫</b></p>
          </div>);
        setText6("");
      };
      
      function handleMouseOver6(){
          setText6(<div style={{backgroundColor: "#E0D42E", color: "#FFFFFF"}} >
            <p>Post Malone - beerbongs & bentleys</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> I'm here, but dont count on me to stay <b>♫</b></p>
          </div>);
          setText5("");
      }

      function handleMouseOver7() {
        
        setText7(<div style={{backgroundColor: "#A6EE90", color: "#FFFFFF"}} >
            <p>Rizzle Kicks - Stereo Typical</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> She feeds my addiction, she leaks something different <b>♫</b></p>
          </div>);
        setText8("");
      };
      
      function handleMouseOver8(){
          setText8(<div  style={{backgroundColor: "#2556B6", color: "#FFFFFF"}}>
            <p>King Charles - LoveBlood</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> I'd give it all up for your hand in my hand <b>♫</b></p>
          </div>);
          setText7("");
      }
      function handleMouseOver9() {
        
        setText9(<div   style={{backgroundColor: "#DA9EFF", color: "#FFFFFF"}}>
            <p>Busted - Night Driver</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> I'll break your heart in the end <b>♫</b></p>
          </div>);
        setText10("");
      };
      
      function handleMouseOver10(){
          setText10(<div  style={{backgroundColor: "#EA4D65", color: "#FFFFFF"}}>
            <p>Childish Gambino - Because the Internet</p>
            <p style={{fontStyle: "italic"}}> <b>♫</b> I'll be right by your side 'til 3005 <b>♫</b></p>
          </div>);
          setText9("");
      }
 

    function handleMouseOut() {
        setText1("");
        setText2("");
        setText3("");
        setText4("");
        setText5("");
        setText6("");
        setText7("");
        setText8("");
        setText9("");
        setText10("");
      }

        return (
            <div>

            
            <div className="container">
           
          
          


            <div className="gallery-wrap" style={{marginTop: "50px"}}>
              <div className="item item-1" id="1" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut}>
              {text1 && <p className="text">{text1}</p>}
             
              
              </div>

              <div className="item item-2" id="2" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut}>
              {text2 && <p className="text">{text2}</p>}
              </div>

              <div className="item item-3" id="3"onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut}>
              {text3 && <p className="text">{text3}</p>}
              </div>
              <div className="item item-4"id="4" onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut}>
              {text4 && <p className="text">{text4}</p>}
              </div>
              <div className="item item-5" id="5"onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut} >
              {text5 && <p className="text">{text5}</p>}
              </div>
              <div className="item item-6"id="6" onMouseOver={handleMouseOver6} onMouseOut={handleMouseOut} >
              {text6 && <p className="text">{text6}</p>}
              </div>
              <div className="item item-7"id="7" onMouseOver={handleMouseOver7} onMouseOut={handleMouseOut}>
              {text7 && <p className="text">{text7}</p>}
              </div>
              <div className="item item-8" id="8" onMouseOver={handleMouseOver8} onMouseOut={handleMouseOut}>
              {text8 && <p className="text">{text8}</p>}
              </div>
              <div className="item item-9"id="9" onMouseOver={handleMouseOver9} onMouseOut={handleMouseOut}>
              {text9 && <p className="text">{text9}</p>}
              </div>
              <div className="item item-10"id="10" onMouseOver={handleMouseOver10} onMouseOut={handleMouseOut}>
              {text10 && <p className="text">{text10}</p>}
              </div>
            </div>
           </div>
          
           <div>
           <Card style={{marginTop: "50px"}} border="light" border-10>
                        <Card.Body>
                            <Card.Title><h1><b>About the albums</b></h1></Card.Title>
                            <Card.Text>
                               <h3><b>Reputation - Taylor Swift</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 55:38 <b>Genre:</b> Electropop/R&B  <b>Favourite song:</b>  Gorgeous </h4>
                            </Card.Text>
                            <Card.Text>
                            Reputation is the sixth album by the American singer-songwriter Taylor Swift, realised 2017. Reputation sold two million copies worldwide within one week of release. The album spent four non-consecutive weeks at number one, was 2017's best-selling album in the United States, and topped the 2018 Billboard 200 Year-End chart.
                            </Card.Text>
                            
                            <Card.Text>
                               <h3><b>The 1975 - The 1975</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 50:41 <b>Genre:</b> Electropop/Pop Rock/Indie Pop  <b>Favourite song:</b>  Robbers </h4>
                            </Card.Text>
                            <Card.Text>
                            The 1975 is the self-titled debut studio album by English band the 1975, released 2013. The album topped the UK Albums Chart on 8 September, selling 31,538 copies in the first week. On 26 September 2014, it was certified platinum by the British Phonographic Industry for sales of over 300,000 copies. As of December 2018, it has sold 584,808 copies in the UK.
                            </Card.Text>

                            <Card.Text>
                               <h3><b>An Evening with Silk Sonic - Silk Sonic</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 31:19 <b>Genre:</b> R&B/Soul/Funk/Hip Hop/Pop  <b>Favourite song:</b>  Smokin out the window </h4>
                            </Card.Text>
                            <Card.Text>
                            An Evening with Silk Sonic is the debut studio album by American musical superduo Silk Sonic, composed of Bruno Mars and Anderson Paak, released 2021. The album debuted at number two on the Billboard 200 with first-week sales of 104,000 equivalent album units, which consists of 42,000 album sales, 60,000 streaming units calculated from the 82.6 million on-demand streams of the album's tracks, and 2,000 in track equivalent album units. In its second week, the album remained in the top ten and fell to number four, earning 50,000 album-equivalent units. By the end of 2021, the album had surpassed a billion streams.
                            </Card.Text>

                            <Card.Text>
                               <h3><b>Beautiful People Will Ruin Your Life - The Wombats</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 38:43 <b>Genre:</b> Pop Rock  <b>Favourite song:</b>  Lethal combination </h4>
                            </Card.Text>
                            <Card.Text>
                            Beautiful People Will Ruin Your Life is the fourth major studio album by British rock band The Wombats, released 2018. The album reached number three on the official UK album charts and was certified gold by the British Phonographic Industry for sales of over 100,000 copies.
                            </Card.Text>

                            <Card.Text>
                               <h3><b>Flower Boy - Tyler, the Creator</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 46:33 <b>Genre:</b> Hip Hop/Jazz Rap/Neo Soul  <b>Favourite song:</b>  See You Again </h4>
                            </Card.Text>
                            <Card.Text>
                            Flower Boy is the fourth studio album by American rapper Tyler, the Creator, released 2017.Flower Boy debuted at number two on the US Billboard 200 with 106,000 album-equivalent units of which 70,000 were pure album sales.
                            </Card.Text>

                            <Card.Text>
                               <h3> Reputation - Taylor Swift</h3> 
                            </Card.Text>
                            <Card.Text>
                            My name is Lucy Ubsdell-Yates and I am a 22 year old junior software engineer.
                            </Card.Text>

                            <Card.Text>
                               <h3> Reputation - Taylor Swift</h3> 
                            </Card.Text>
                            <Card.Text>
                            My name is Lucy Ubsdell-Yates and I am a 22 year old junior software engineer.
                            </Card.Text>

                            <Card.Text>
                               <h3> Reputation - Taylor Swift</h3> 
                            </Card.Text>
                            <Card.Text>
                            My name is Lucy Ubsdell-Yates and I am a 22 year old junior software engineer.
                            </Card.Text>

                            <Card.Text>
                               <h3> Reputation - Taylor Swift</h3> 
                            </Card.Text>
                            <Card.Text>
                            My name is Lucy Ubsdell-Yates and I am a 22 year old junior software engineer.
                            </Card.Text>

                            <Card.Text>
                               <h3> Reputation - Taylor Swift</h3> 
                            </Card.Text>
                            <Card.Text>
                            My name is Lucy Ubsdell-Yates and I am a 22 year old junior software engineer.
                            </Card.Text>

                        </Card.Body>
                    </Card>
           </div>
           
          
          </div>
        );
      }
export default FavouriteMusic;