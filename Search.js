import React , {memo} from "react";

function Search ({handleSearch}) {
    return(
        <div>
            <input onChange={handleSearch}></input>
        </div>
    );
}

export default memo(Search);