import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { getAllUsers } from "src/api/apiUser";

export default function Manage_GroupOf_user_DataTable(props) {
  const [users, setUsers] = useState([]);
  const userName = [];


  useEffect(()=>{
    getAllUsers()
      .then(response => setUsers(response.data))
      .catch(err => alert("Something went wrong!"))
  })
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title="Manage User"
        columns={[
          { title: "User Name", field: "userName" },
          { title: "Email", field: "email" },
          { title: "Name", field: "name" },
          { title: "Phone", field: "phone" },
          { title: "Address", field: "address" },
          { title: "Group", field: "group" },
        ]}


        data={
          

          users.map((user,i) => {
              userName[i] = user.userName
          })
    
      }
        actions={[
          {
            icon: "edit",
            tooltip: "Edit User",
            onClick: (event, rowData) => alert("You Edit " + rowData.name),
          },
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) =>
              window.confirm("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
}
