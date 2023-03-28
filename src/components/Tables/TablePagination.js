import React, { useState} from 'react';
import '../Tables/Table.css';

export const TableForm = () => {
    const datatableUsers = [
    {
      "name": "Person1",
      "position": "Chemist",
      "office": "Damietta",
      "email": "csle@netlog.com",
      "phone": "532 179 1377",
      "id": 1
    },
    {
      "name": "Person2",
      "position": "Executive",
      "office": "Ferreiras",
      "email": "inerney1@youtu.be",
      "phone": "383 685 3274",
      "id": 2
    },
    {
      "name": "Person3",
      "position": "Account",
      "office": "Cornillon",
      "email": "kokeshot@un.com",
      "phone": "927 119 1091",
      "id": 3
    },
    {
      "name": "Person4",
      "position": "VP Sales",
      "office": "Chernoyerkovskaya",
      "email": "hdayton3@un.org",
      "phone": "518 243 8139",
      "id": 4
    },
    {
      "name": "Person5",
      "position": "Recruiter",
      "office": "Sukatani",
      "email": "baek@insider.com",
      "phone": "976 264 4693",
      "id": 5
    },
      
  ]
    
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(datatableUsers.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
      
        return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                        <div className="card-body p-0 p-b-50">                           
                            
                            <div className="table-responsive">
                                <table className="table table-text-small mb-0">
                                    <thead className="thead-primary table-sorting">
                                        <tr>
                                            <th className="table_title">#</th>
                                            <th className="table_title">Name</th>
                                            <th className="table_title">Position</th>
                                            <th className="table_title">Email</th>
                                            <th className="table_title">Phone</th>
                                            <th className="table_title">Office</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData(current, size).map((data, index) => {
                                                return (
                                                    <tr key={data.id}>
                                                        <td>{data.id}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.position}</td>
                                                       <td>{data.email}</td> 
                                                       <td>{data.phone}</td>
                                                       <td>{data.office}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                          
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>
      
        </>
    );
};


