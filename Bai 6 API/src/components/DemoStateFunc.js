// function DemoStateFunc() {
//
// }

import {useState} from "react";

const DemoStateFunc = () => {
    const [num, setNum] = useState(0);
    const [student, setStudent] = useState({
        id: 1,
        name: "Hai"
    });

    const increment = () => {
        // setNum(num + 1);
        // setNum(num + 1);
        // setNum(num + 1);
        setNum(prevState => {
            return prevState + 1;
        })
        setNum(prevState => {
            return prevState + 1;
        })
        setNum(prevState => prevState + 1);
        // setStudent({name: "C11"})
    }

    return (
        <>
            <h1>{num}</h1>
            <h1>{student.id} {student.name}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default DemoStateFunc;