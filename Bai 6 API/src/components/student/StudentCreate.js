import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as studentService from "../../services/StudentService";

function StudentCreate() {
    const [form, setForm] = useState({
        id: 4,
        name: "HaiTT",
        address: "abc"
    });

    const navigate = useNavigate();

    const validateStudent = {
        id: Yup.number().required("ID không được để trống")
            .min(0, "ID không được nhỏ hơn 0")
            .max(10000000000),
        name: Yup.string().required("Name không được để trống")
            .min(4, "Name không được nhỏ hơn 4 kí tự")
            .matches(/^[A-Za-z ]{4,100}$/)
    }
    //
    useEffect(() => {
        console.log(form)
    }, [form]);
    //
    const onSubmit = async (value) => {
        // Tắt mặc định của thẻ/sự kiện
        // e.preventDefault();
        console.log(form)
        console.log(value)
        //     Thêm mới thành công (API client)
        try {
            await studentService.addStudent(value);
            toast.success("Thêm mới thành công")
            navigate("/students")
        } catch (e) {
            console.log("Lỗi")
            toast.error("Lỗi");
        }




    }
    //
    // const changeForm = (e) => {
    //     setForm({
    //         ...form,
    //         // keys
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <>
            {/*<form>*/}
            {/*    <label htmlFor="id">Name</label>*/}
            {/*    <input type="text" name="id" id="id" value={form.id} onChange={changeForm}/>*/}
            {/*    <label htmlFor="name">Name</label>*/}
            {/*    <input type="text" name="name" id="name" value={form.name} onChange={changeForm}/>*/}
            {/*    <label htmlFor="address">Name</label>*/}
            {/*    <input type="text" name="address" id="address"  value={form.address} onChange={changeForm}/>*/}
            {/*    <button onClick={onSubmit} type="submit">Thêm mới</button>*/}
            {/*</form>*/}
            <Formik initialValues={form} onSubmit={onSubmit} validationSchema={Yup.object(validateStudent)}>
                <Form>
                    {/*Làm thế nào để chuyển thành input type number*/}
                    ID<Field name="id"></Field>
                    <ErrorMessage name="id" component="span"></ErrorMessage>
                    ID<Field name="name"></Field>
                    <ErrorMessage name="name" component="span"></ErrorMessage>
                    ID<Field name="address"></Field>
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
        </>
    )
}

export default StudentCreate;