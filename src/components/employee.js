import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Employee() {

    const [data, setData] = useState([])
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'authorization': token,
        }
    }
    useEffect(() => {
        axios.get('http://localhost:3001/getEmployee', config)
            .then(res => {
                if (res.data.status === "success") {
                    setData(res.data.result);
                    // console.log(res.data.result.length);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id, config)
            .then(res => {
                if (res.data.Status === "Success") {
                    window.location.reload(true);
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Employee List</h3>
            </div>
            <Link to="/create" className='btn btn-success'>Add Employee</Link>
            <div className='mt-3'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((employee, index) => {
                            return <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Link to={`/employeeedit/` + employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                                    <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee