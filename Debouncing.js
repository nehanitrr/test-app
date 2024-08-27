import { useCallback, useEffect, useState } from "react"

export default function Debouncing() {
    const [filteredResults, setSearchResults] = useState([]);
    const [responseData, setResponseData] = useState([]);
    const [searchString, setSearchString] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => setResponseData(res));
    },[]);

    const handleChange = (event) => {
        const keyword = event?.target?.value?.toLowerCase();
        console.log(keyword);
        if (!keyword) {
            setSearchResults([]);
            setSearchString(null);
            return;
        };
        
        const filteredResults = responseData?.filter((item) => {
            console.log(item?.name , keyword);
            return item.name.toLowerCase().indexOf(keyword) > -1
        });
        console.log("filtered results" , filteredResults);
        setSearchResults(filteredResults);
        setSearchString(keyword);
    }

    const debounce = (func) => {
        let timer;
        return function (...args){
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(
                () => {
                    timer = null;
                    func.apply(this, args)
                 } , 
            500);
        }
    }

    const handleOptimizedSearch = useCallback(debounce(handleChange),[]);

    return <div>
        <input type="search" placeholder="Enter search string" onChange={handleOptimizedSearch}></input>
        <br/>

        <ul>
            {filteredResults?.map((item , idx) =>{
                return <li id={idx}>{item.name}</li>
            })}
        </ul>

        
        {filteredResults?.length === 0  && !!searchString &&
            <strong>No search results found</strong>
        }
        
    </div>;
}