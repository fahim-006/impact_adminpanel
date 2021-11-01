
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "src/api/apiUser";
import UsersTable from "./UsersTable";

export default function Manage_user() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers()
      .then(response => setUsers(response.data))
      .catch(err => alert("Something went wrong!"))
  },[])


  return (
    <div>
      <Link className="btn btn-info mb-2" to="/user/add_user" >Add User</Link>
      
         <div className="container my-5">
            <table className="table table-hover">
                <thead>
                    <tr>
                      <th scope="col" width="15%">User Name</th>
                      <th scope="col" width="15%">Email</th>
                      <th scope="col" width="15%">Name</th>
                      <th scope="col" width="15%">Phone</th>
                      <th scope="col" width="15%">Address</th>
                      <th scope="col" width="15%">Group</th>
                      <th scope="col" width="15%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) => <UsersTable
                          item={item}
                          key={item._id} 
                          />   
                    )}
                </tbody>
            </table>
            
         </div>
         
      
    </div>
  );
}
