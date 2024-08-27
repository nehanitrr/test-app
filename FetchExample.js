import './styles.css';
import React , { Suspense } from 'react';

export default function FetchExample() {
    const [users,setUsers] = React.useState([]);
    const [todos,setTodos] = React.useState([]);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => setUsers(res));
        
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
    <Suspense fallback={<progress value={null}/>}>
        <pre>{JSON.stringify(users , null , 2)}</pre>
        <pre>{JSON.stringify(todos , null , 2)}</pre>
    </Suspense>
    </>
  );
}
