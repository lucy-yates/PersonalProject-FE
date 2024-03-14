import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayVisitor() {
    const [visitors, setVisitors] = useState([]);

    DisplayVisitor.getVisitor = function () {
        axios
            .get("http://localhost:8081/visitor/get")
            .then((response) => {
                setVisitors(response.data);
            })
            .catch(console.error);
    };

    function deleteVisitor(visitorId) {
        axios
            .delete(`http://localhost:8081/visitor/remove/${visitorId}`)
            .then(() => {
                DisplayVisitor.getVisitor();
            })
            .catch(console.error);
    }

    useEffect(() => {
        DisplayVisitor.getVisitor();
    }, []);

    return (
        <div className="container mt-4" style={{marginTop: "10px"}}>
            <h1 style={{ color: '#000000' }} >Visitors</h1>
            <div className="row">
                {visitors.map((singleVisitor) => (
                    <div key={singleVisitor.id} className="col-md-4 mb-4">
                        <div className= "card h- 100">
                        <div className="card">
                            <div className="card-body">
                                {/* <h5 className="card-title">{singleVisitor.id}</h5> */}

                                <p className="card-text">ID: {singleVisitor.id} </p>
                                <p className="card-text">Name: {singleVisitor.name}</p>
                                <p className="card-text">Age: {singleVisitor.age}</p>
                                <p className="card-text">Favourite Number: {singleVisitor.favouriteNumber}</p>
                                <button
                                    //  className="btn btn-danger"
                                    style={{ backgroundColor: '#DFF7DE' }}
                                    onClick={() => deleteVisitor(singleVisitor.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayVisitor;