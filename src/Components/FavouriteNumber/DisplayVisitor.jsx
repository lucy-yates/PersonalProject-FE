import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayVisitor() {
    const [visitors, setVisitors] = useState([]);
    const [editingVisitor, setEditingVisitor] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        favouriteNumber: ""
    });

    const getVisitor = () => {
        axios
            .get("http://localhost:8081/visitor/get")
            .then((response) => {
                setVisitors(response.data);
            })
            .catch(console.error);
    };

    useEffect(() => {
        getVisitor();
    }, [visitors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:8081/visitor/update/${editingVisitor.id}`, formData)
            .then(() => {
                getVisitor();
                setEditingVisitor(null);
                setFormData({
                    name: "",
                    age: "",
                    favouriteNumber: ""
                });
            })
            .catch(console.error);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleEdit = (visitor) => {
        setEditingVisitor(visitor);
        setFormData({
            name: visitor.name,
            age: visitor.age,
            favouriteNumber: visitor.favouriteNumber
        });
    };

    const handleCancel = () => {
        setEditingVisitor(null);
        setFormData({
            name: "",
            age: "",
            favouriteNumber: ""
        });
    };

    const deleteVisitor = (visitorId) => {
        axios
            .delete(`http://localhost:8081/visitor/remove/${visitorId}`)
            .then(() => {
                getVisitor();
            })
            .catch(console.error);
    };

    return (
        <div className="container mt-4" style={{ marginTop: "10px" }}>
            <h1 style={{ color: '#000000' }} >Visitors</h1>
            <div className="row">
                {visitors.map((visitor) => (
                    <div key={visitor.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">ID: {visitor.id}</p>
                                <p className="card-text">Name: {visitor.name}</p>
                                <p className="card-text">Age: {visitor.age}</p>
                                <p className="card-text">Favourite Number: {visitor.favouriteNumber}</p>
                                {editingVisitor && editingVisitor.id === visitor.id ? (
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                        <input type="text" name="age" value={formData.age} onChange={handleChange} />
                                        <input type="text" name="favouriteNumber" value={formData.favouriteNumber} onChange={handleChange} />
                                        <button type="submit">Save</button>
                                        <button type="button" onClick={handleCancel}>Cancel</button>
                                    </form>
                                ) : (
                                    <>
                                        <button class="btn btn-outline-dark " style={{ backgroundColor: '#DFF7DE'}} onClick={() => handleEdit(visitor)}>Edit</button>
                                        <button class="btn btn-outline-dark "style={{ backgroundColor: '#DFF7DE', marginLeft: "15px"}} onClick={() => deleteVisitor(visitor.id)}>Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayVisitor;