import { useEffect, useState } from "react";
import { getAllGroup } from "src/api/apiGroups";

const GroupTable = () => {
    const [groupName, setGroupName] = useState([]);
    const [redirect, setRedirect] = useState(false);
    useEffect(()=>{
        getAllGroup()
         .then(response => setGroupName(response.data))
         .catch(err => alert("Something went wrong!"))
       },[])
    return(
        <>  <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Create</th>
                    <th scope="col">Update</th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                {groupName.map((item, i) => 
                    <tr>
                        <th scope="row">{item.name}</th>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                  </tr>
                )
                }
                </tbody>
              </table>

        </>
    )
}

export default GroupTable;