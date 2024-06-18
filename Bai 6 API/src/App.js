import logo from './logo.svg';
import './App.css';
import React from 'react'
import StudentList from "./components/student/StudentList";
import DemoState from "./components/DemoState";
import DemoStateFunc from "./components/DemoStateFunc";
import StudentListFunc from "./components/student/StudentListFunc";
import StudentCreate from "./components/student/StudentCreate";
import {BrowserRouter, HashRouter, NavLink, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const id ="c11";
  const nameClass = "c1123g1"
  const hello = (name) => {
    alert("Hello "+ name)
  }

  const students = [
    {
      id: '1'
    },
    {

    }
  ]
  return (
    // React.createElement("h1", {name: 'c11', id:'c11'}, "Xin chào C11")
  // <>
  //   <h1 id={id} name="c11">Xin chào</h1>
  //   <button onClick={() => hello('hai')}>A</button>
  // </>

  //     Hiển thị 1 mảng học sinh với thông tin id, name, address
  //     Giải thích tác dụng của key props
  //     Deadline 15h chiều nay

      <>
      {/*<StudentList nameClass = {nameClass}/>*/}
      {/*  <DemoStateFunc></DemoStateFunc>*/}
      {/*  <StudentListFunc/>*/}
      {/*  <StudentCreate/>*/}

        <BrowserRouter>
          <NavLink to="/students">List</NavLink>
          <NavLink to="/create">Create</NavLink>
          <Routes>
            <Route path="students" element={<StudentListFunc/>}></Route>
            <Route path="create" element={<StudentCreate/>}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </>
  );
}

export default App;
