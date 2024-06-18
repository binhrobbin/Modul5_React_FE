import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import * as studentService from "../../services/StudentService"
import {useSelector} from "react-redux";

const StudentListFunc = () => {
   const students = useSelector(store => store.students);
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);

    useEffect(() => {
        // getAll();

    }, [name]);

    // const getAll = async () => {
    //     //     Call API
    //     const temp = await studentService.getAll();
    //     // const temp = [
    //     //     {
    //     //     id: 1,
    //     //     name: "haiTT",
    //     //     address: "Quảng Nam"
    //     //     },
    //     //     {
    //     //         id: 2,
    //     //         name: "haiTT2",
    //     //         address: "Quảng Nam"
    //     //     },
    //     //     {
    //     //         id: 3,
    //     //         name: "haiTT3",
    //     //         address: "Quảng Nam"
    //     //     }]
    //     const result = temp.filter(student => student.name.includes(name));
    //     setStudents(result);
    // }

    useEffect(() => {
        return () => {
            //     clean up
        }
    }, [])

    const increment = () => {
        setNumber(prevState => prevState + 1);
    }

    return (
        <>
            <NavLink to="/create">
                <button>Thêm mới</button>
            </NavLink>
            <h1>{number}</h1>
            <button onClick={increment}>Increment</button>
            <h1>Danh sách học sinh</h1>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <table border="1" width="500px">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) =>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.address}</td>
                    </tr>
                )}
                </tbody>

            </table>
        </>
    )
}

export default StudentListFunc;