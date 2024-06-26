import "./music.css";
import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import Gorgeous from "../../gorgeousclip.mp3";
import Robbers from "../../robbersclip.mp3";
import SmokingOutTheWindow from "../../smokingoutthewindowclip.mp3";
import LethalCombination from "../../lethalcombinationclip.mp3";
import SeeYouAgain from "../../seeyouagainclip.mp3";
import RichAndSad from "../../richandsadclip.mp3";
import MissCigarette from "../../misscigaretteclip.mp3";
import LoveLust from "../../lovelustclip.mp3";
import ThoseDaysAreGone from "../../thosedaysaregoneclip.mp3";
import v3005 from "../../v3005clip.mp3";
import useSound from "use-sound";




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
    const soundUrl1 = Gorgeous;
    const [play1,{stop}] = useSound(soundUrl1)
    const soundUrl2 = Robbers;
    const [play2, { stop: stop2}] = useSound(soundUrl2)
    const soundUrl3 = SmokingOutTheWindow;
    const [play3, { stop: stop3}] = useSound(soundUrl3)
    const soundUrl4 = LethalCombination;
    const [play4, { stop: stop4}] = useSound(soundUrl4)
    const soundUrl5 = SeeYouAgain;
    const [play5, { stop: stop5}] = useSound(soundUrl5)
    const soundUrl6 = RichAndSad;
    const [play6, { stop: stop6}] = useSound(soundUrl6)
    const soundUrl7 = MissCigarette;
    const [play7, { stop: stop7}] = useSound(soundUrl7)
    const soundUrl8 = LoveLust;
    const [play8, { stop: stop8}] = useSound(soundUrl8)
    const soundUrl9 = ThoseDaysAreGone;
    const [play9, { stop: stop9}] = useSound(soundUrl9)
    const soundUrl10 = v3005;
    const [play10, { stop: stop10}] = useSound(soundUrl10)

 

    

    function handleMouseOver1() {
        
      setText1(<div style={{ backgroundColor: "#BABABA", color: "#000000"}}>
        <p >Taylor Swift - Reputation</p>
        {/* <p style={{fontStyle: "italic"}}><b>♫</b> In the middle of the night, in my dreams, you should see the things we do baby <b>♫</b></p> */}
      </div>);
      setText2("");


       };
    
    function handleMouseOver2(){
        setText2(<div>
            <p>The 1975 - The 1975</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> God, I love the way you love yourself <b>♫</b></p> */}
          </div>);
        setText1("");
    }

    function handleMouseOver3() {
        
        setText3(<div style={{ backgroundColor: "#BF9C78", color: "#FFFFFF"}}>
            <p>Silk Sonic - An Evening With Silk Sonic</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> After last night, I think I'm in love with you <b>♫</b></p> */}
          </div>);
        setText4("");
      };
      
      function handleMouseOver4(){
          setText4(<div style={{ backgroundColor: "#DF2A2A", color: "#FFFFFF"}} >
            <p>The Wombats - Beautiful People Will Ruin Your Life</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> You could give an aspirin the headache of its life <b>♫</b></p> */}
          </div>);
          setText3("");
      }

      function handleMouseOver5() {
        
        setText5(<div  style={{backgroundColor: "#FFB647", color: "#FFFFFF"}}>
            <p>Tyler, the Creator - Flower Boy</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> I wonder if you look both ways when you cross my mind <b>♫</b></p> */}
          </div>);
        setText6("");
      };
      
      function handleMouseOver6(){
          setText6(<div style={{backgroundColor: "#E0D42E", color: "#FFFFFF"}} >
            <p>Post Malone - Beerbongs & Bentleys</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> I'm here, but dont count on me to stay <b>♫</b></p> */}
          </div>);
          setText5("");
      }

      function handleMouseOver7() {
        
        setText7(<div style={{backgroundColor: "#A6EE90", color: "#FFFFFF"}} >
            <p>Rizzle Kicks - Stereo Typical</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> She feeds my addiction, she leaks something different <b>♫</b></p> */}
          </div>);
        setText8("");
      };
      
      function handleMouseOver8(){
          setText8(<div  style={{backgroundColor: "#2556B6", color: "#FFFFFF"}}>
            <p>King Charles - LoveBlood</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> I'd give it all up for your hand in my hand <b>♫</b></p> */}
          </div>);
          setText7("");
      }
      function handleMouseOver9() {
        
        setText9(<div   style={{backgroundColor: "#DA9EFF", color: "#FFFFFF"}}>
            <p>Busted - Night Driver</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> I'll break your heart in the end <b>♫</b></p> */}
          </div>);
        setText10("");
      };
      
      function handleMouseOver10(){
          setText10(<div  style={{backgroundColor: "#EA4D65", color: "#FFFFFF"}}>
            <p>Childish Gambino - Because the Internet</p>
            {/* <p style={{fontStyle: "italic"}}> <b>♫</b> I'll be right by your side 'til 3005 <b>♫</b></p> */}
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
<div>
  {/* <h1 style={{textAlign: "center", color: "black", fontWeight: "300"}}> <b>My Rainbow of Music</b> </h1>  */}
  <br/>
  <h4 style={{textAlign: "center", color: "black", fontWeight: "300"}}>  VOLUME: ▁▂▃▄▅▆▇ 100%</h4>
</div>
            
            <div className="container">
           
          
          

          
            <div className="gallery-wrap" style={{marginTop: "50px"}}>


               
              <div className="item item-1" id="1" onMouseOver={()=> { handleMouseOver1(); play1(); }} onMouseOut={()=> {handleMouseOut(); stop();}}>
              {text1 && <p className="text">{text1}</p>}
              </div>
              

              <div className="item item-2" id="2" onMouseOver={()=> { handleMouseOver2(); play2(); }} onMouseOut={()=> {handleMouseOut(); stop2();}}>
              {text2 && <p className="text">{text2}</p>}
              </div>

              <div className="item item-3" id="3"onMouseOver={()=> { handleMouseOver3(); play3(); }} onMouseOut={()=> {handleMouseOut(); stop3();}}>
              {text3 && <p className="text">{text3}</p>}
              </div>
             
              <div className="item item-4"id="4" onMouseOver={()=> { handleMouseOver4(); play4(); }} onMouseOut={()=> {handleMouseOut(); stop4();}}>
              {text4 && <p className="text">{text4}</p>}
              </div>
             
              <div className="item item-5" id="5" onMouseOver={()=> { handleMouseOver5(); play5(); }} onMouseOut={()=> {handleMouseOut(); stop5();}} >
              {text5 && <p className="text">{text5}</p>}
              </div>
             
              <div className="item item-6"id="6" onMouseOver={()=> { handleMouseOver6(); play6(); }} onMouseOut={()=> {handleMouseOut(); stop6();}} >
              {text6 && <p className="text">{text6}</p>}
              </div>
             
              <div className="item item-7"id="7" onMouseOver={()=> { handleMouseOver7(); play7(); }} onMouseOut={()=> {handleMouseOut(); stop7();}}>
              {text7 && <p className="text">{text7}</p>}
              </div>
             
              <div className="item item-8" id="8" onMouseOver={()=> { handleMouseOver8(); play8(); }} onMouseOut={()=> {handleMouseOut(); stop8();}}>
              {text8 && <p className="text">{text8}</p>}
              </div>
             
              <div className="item item-9"id="9" onMouseOver={()=> { handleMouseOver9(); play9(); }} onMouseOut={()=> {handleMouseOut(); stop9();}}>
              {text9 && <p className="text">{text9}</p>}
              </div>
             
              <div className="item item-10"id="10" onMouseOver={()=> { handleMouseOver10(); play10(); }} onMouseOut={()=> {handleMouseOut(); stop10();}}>
              {text10 && <p className="text">{text10}</p>}
              </div>
            
            </div>
           </div>
          
           <div>
           <Card style={{marginTop: "50px"}} border="light" border-10>
                        <Card.Body>
                            <Card.Title><h1><b> About the albums  </b></h1></Card.Title>
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
                               <h3><b>Beerbongs & Bentleys - Post Malone</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 64:26 <b>Genre:</b> Hip Hop/Pop/R&B  <b>Favourite song:</b>  Rich & Sad </h4>
                            </Card.Text>
                            <Card.Text>
                            Beerbongs & Bentleys is the second studio album by American rapper and singer Post Malone, released 2018. In the United States, on the day of its release, Beerbongs & Bentleys broke streaming records on Spotify. The album achieved 47.9 million streams in the US and 78,744,000 streams globally on the music service within 24 hours. The album debuted at number one on the US Billboard 200, opening with 461,000 album-equivalent units in its first week, with 153,000 coming from pure sales.
                            </Card.Text>

                            <Card.Text>
                               <h3><b>Stereo Typical - Rizzle Kicks</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 49:39 <b>Genre:</b> Hip Hop  <b>Favourite song:</b>  Miss Cigarette </h4>
                            </Card.Text>
                            <Card.Text>
                            Stereo Typical is the debut studio album by English hip hop duo Rizzle Kicks, released 2011. The album reached number five on the official UK album charts and currently holds a Metacritic score of 70.
                            </Card.Text>


                            <Card.Text>
                               <h3><b>LoveBlood - King Charles</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 38:10 <b>Genre:</b> Pop/Rock  <b>Favourite song:</b>  LoveLust </h4>
                            </Card.Text>
                            <Card.Text>
                            LoveBlood is the debut studio album by English singer and songwriter King Charles, released 2012. The album reached number thirty six on the official UK album charts and after a near tragic accident which left him in intensive care for 10 days with brain trauma, and a long road to recovery, the album recieved 3.5/5 stars
                            </Card.Text>
                           
                           
                           <Card.Text>
                               <h3><b>Night Driver - Busted</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 43:52 <b>Genre:</b> Synthpop/Alternative Pop <b>Favourite song:</b>  Those Days Are Gone </h4>
                            </Card.Text>
                            <Card.Text>
                            Night Driver is the third studio album by English pop rock band Busted, released 2016.  The album reached number thirteen on the official UK album charts and was certified silver by the British Phonographic Industry for sales of over 60,000 copies.
                            </Card.Text>

                            <Card.Text>
                               <h3><b>Because the Internet - Childish Gambino</b></h3> 
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Duration:</b> 57:52 <b>Genre:</b> Hip Hop <b>Favourite song:</b>  V.3005 </h4>
                            </Card.Text>
                            <Card.Text>
                            Because the Internet is the second studio album by American recording artist Donald Glover, under the stage name Childish Gambino, released 2013. The album reached number seven on the US Billboard 200 and was met with generally positive reviews.
                            </Card.Text>

                        </Card.Body>
                    </Card>
           </div>
           
          
          </div>
        );
      }
export default FavouriteMusic;