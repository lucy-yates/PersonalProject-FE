import axios from "axios";
import { useState } from "react";
import DisplayVisitor from "./DisplayVisitor";

function CreateVisitor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [favouriteNumber, setFavouriteNumber] = useState("");
  const [favouriteSong, setFavouriteSong] = useState("");


  function checkVisitor() {
    axios.get("http://localhost:8081/visitor/get").then((response) => {

      for (const visitor of response.data) {
        if (
          visitor.name &&
          visitor.age &&
          visitor.name.toLowerCase() === name.toLowerCase()
        ) {
          alert("Visitor already listed")
          return;
        }
      }
      createVisitor();
    }).catch(error => {
      console.error(error);
    });
  }


  function createVisitor() {
    axios
      .post("http://localhost:8081/visitor/create", {
        name,
        age,
        favouriteNumber,
        favouriteSong,
      })
      .then((response) => {
        console.log(response);
        setName("");
        setAge("");
        setFavouriteNumber("");
        setFavouriteSong("");
        alert("Visitor added successfully");


        DisplayVisitor.getVisitor();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div 
     style={{ display: "flex", justifyContent: "center" }} 
    >
      <form
      style={{ color: '#000000', marginTop: "10px" }}
        onSubmit={(e) => {
          e.preventDefault();
          checkVisitor();
        }}
      >
        <h1 style={{textAlign: "center"}}>Check-In Here</h1>
        <div style={{ display: "flex", flexDirection: "column" }} >
        <label>
         
          <input
          class="form-control form-control-lg"
          placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br/>
        <label>
        
          <input
          class="form-control form-control-lg"
          placeholder="Age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br/>
        <label>
          
          <input
          class="form-control form-control-lg"
          placeholder="Favourite Number"
            type="text"
            value={favouriteNumber}
            onChange={(e) => setFavouriteNumber(e.target.value)}
          />
        </label>
        <br/>
        <label>
          
          <input
          class="form-control form-control-lg"
          placeholder="Favourite Song"
            type="text"
            value={favouriteSong}
            onChange={(e) => setFavouriteSong(e.target.value)}
          />
        </label>
        </div>
        <br/>
        <button  type="submit" class="btn btn-outline-dark  btn-lg btn-block">
          Register
        </button>
      </form>
    </div>
  );
}

export default CreateVisitor;