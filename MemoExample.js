import React, { useMemo, useState } from "react";

export default function MemoExample() {


    const data = new Array(1000000).fill(0).map((_,i) => {
            return {
                id: i,
                name : `User${i}`,
                selected : i === 100000
            };
        }
    );
    const [users,setUsers] = useState(data);
    const [selected , setSelectedUser] = useState(undefined);
    const [count , setCount] = useState(0);

    useMemo(() => {
        const filteredUser = users.filter((user)=> {
            return user.selected
        });
        console.log(filteredUser);
        setSelectedUser(filteredUser?.[0]?.name);
    } ,[users]);


    return (
        <div>
            <button onClick={() => setCount(count+1)}>Counter</button>
            <br/>
            <label>Counter   </label>
            <strong>{count}</strong>
            <br/>
            <label>SelectedItem  </label>
            <strong>{selected}</strong>
        </div>
    )



    

}