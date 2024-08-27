import './styles.css';
import React , { Suspense, use } from 'react';

export default function GridLights() {
    let arr = [];
    for(let i = 0 ; i < 3;i++){
        arr[i] = Array(3).fill(false);
    }
    const [selected,setSelected] = React.useState(arr);
    const [users,setUsers] = React.useState([]);
    const [todos,setTodos] = React.useState([]);

    const updateSelection = (row,col) => {
        let tempArr = selected;
        tempArr[row][col] = true;
        setSelected(tempArr);
    }

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => console.log(res));
        
    } , []);

    React.useEffect(() => {
        const getTodos = async() => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const res = await api.json();
            console.log(res);
            setTodos(res);
        }
        getTodos();
    } , []);

  return (
    <>
    <Suspense fallback={<div>loading....</div>}>
        <progress value={null} />
        <div style={{transform: [{scaleX : '40%'}]}}>React</div>
        <div style={{transform: [{scaleX : '60%'}]}}>React</div>
        {
        Array(3).fill(0).map((_,idx) => {
            return <div key={idx} className='row'>
            {Array(3).fill(0).map((_,cidx) => {
                console.log(selected[idx][cidx]);
                return <ButtonComponent idx={idx} cidx={cidx} updateSelection={updateSelection} isSelected={selected[idx][cidx]}/>
            })}
            </div>
        })
        }
        <pre>{JSON.stringify(users)}</pre>
    </Suspense>
    </>
  );
}

function ButtonComponent({idx , cidx , updateSelection , isSelected}) {
    console.log("ButtonComponent rendered")
    return <button type="button"
    onClick={() => updateSelection(idx,cidx)}
    disabled={isSelected}
    className={isSelected ? "color-box" : "box"}/>;
}
