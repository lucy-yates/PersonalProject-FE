import axios from "axios";
import { useState } from "react";
import DisplayVisitor from "./DisplayVisitor";

function CreateVisitor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [favouriteNumber, setFavouriteNumber] = useState("");


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
      })
      .then((response) => {
        console.log(response);
        setName("");
        setAge("");
        setFavouriteNumber("");
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
        <h1>Tell me your favourite number!</h1>
        <div style={{ display: "flex", flexDirection: "column" }} >
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Age
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Favourite Number
          <input
            type="text"
            value={favouriteNumber}
            onChange={(e) => setFavouriteNumber(e.target.value)}
          />
        </label>
        </div>
        <button type="submit" class="btn btn-outline-dark ">
          Register
        </button>
      </form>
    </div>
  );
}

export default CreateVisitor;