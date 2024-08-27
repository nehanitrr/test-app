import React, { useCallback , useState }  from "react";
import Search from "./Search";

function CallBackExample () {

    const [count , setCount] = useState(0);

    const handleSearch = useCallback((e) => {
        console.log(e?.target?.value);
    },[]);
    return(
        <div>
           <label>Search Unit</label>
           <Search handleSearch={handleSearch}/>
           <br/>

           <button onClick={() => setCount(count+1)}>Counter</button>
            <br/>
           <label>Counter </label>
            <strong>{count}</strong>
        </div>
    );
}

export default CallBackExample;