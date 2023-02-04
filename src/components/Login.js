import React, { useState, useRef, useEffect } from "react";
import index from './index.css'
import bootstrap from 'bootstrap';
import { Redirect, Navigate, NavLink, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
   


  


    //**********function start***********

    const navigate = useNavigate();

     //check username and pass start
     const email = useRef()         //it returns only one item . 
     const password = useRef()
 
     // check wrong pass
     const [failed, setFailed] = useState("")
 
     //store in localstorage
     const getemail = localStorage.getItem("emaildata")
     const getpass = localStorage.getItem("passdata")


    //check username and pass start ***
    function formData(e) {
        e.preventDefault()
        // console.log(user, pass)

        //check pass
        if (email.current.value == "shubhamp" && password.current.value == "12345") {
            localStorage.setItem("emaildata", "shubhamp");//to store in local storage
            localStorage.setItem("passdata", "12345")
            navigate('/dashboard')
            setTimeout(function () { alert("Login succesfully") }, 400);
        }

        else {
            console.log("wrong")
            setFailed("Wrong Password ?")
        }

    }
    //check username and pass end



    // usename validation ***



    let userEvent = "";  //intial dec null it changes its states


    //for username validation
    const [userValiddata, setuserValid] = useState(1);


    function Uservalid(event) {
        userEvent = event.target.value;

        if (userEvent.length < 5) {

            if (userEvent.length == 0) {
                setuserValid(1)
            }
            else {
                setuserValid(2);
            }
        }
        else {
            setuserValid(1)


        }
    }
    //***username validation end----***


    //*** password validation  ***

    let passEvent = "";
    //for password validation
    const [passValiddata, setpassValid] = useState(1);

    function Passvalid(event) {
        passEvent = event.target.value;

        if (passEvent.length < 5) {
            if (passEvent.length == 0) {
                setpassValid(1)
            }
            else {
                setpassValid(2);
            }
        }


        else {
            setpassValid(1)


        }
    }
    //***  password validation end  ***


    //**********function end***********






    // function Data() {

    //     setDatauser(userEvent)
    //     setDatapass(passEvent)

    // }








    return (

        <>
            <section class="vh-100  main-section gradient-custom">
                <div class="container-fluid py-5 h-100 main-container">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">

                            <div className="formMain ">
                                <h1 style={{ color: "white" }} class="d-flex justify-content-center">Login</h1>
                                {
                                    getemail && getpass ?  (<Navigate to="/dashboard"  element={<Dashboard />} replace/> ):(
                                        <form className="formInner" onSubmit={formData}>

                                            <div class="form-outline form-dark mb-4">
                                                <label class="form-label" for="typeEmailX">Username :</label>
                                                <input id="typeEmailX" class="form-control form-control-lg" type="text" placeholder="username" required onChange={Uservalid} ref={email} />
                                                {userValiddata == 1 ? ("") : (<p style={{ color: "red" }}>minimum 5 char required *</p>)}
                                            </div>

                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label" for="typePasswordX">Password</label>
                                                <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="password" required onChange={Passvalid} ref={password} />
                                                {passValiddata == 1 ? ("") : (<ul style={{ color: "red", listStyle: "none" }}><li> Min 8 characters required.</li></ul>)}
                                            </div>

                                            <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>{failed}</p>

                                            <button class="btn btn-primary btn-lg px-5 " type="submit">Login</button>

                                        </form>)
                                }


                            </div>
                            {/* <div>
                            <table style={{ border: "2px solid black" }}>
                                <tr className="tableRow"><th className="tableHeading">Username</th><th >password</th></tr>
                                <tr className="tableRow"><td className="tabledata">{datauser}-</td><td >{datapass}-</td></tr>


                            </table>

                        </div> */}

                        </div>
                    </div>

                </div>


            </section>


        </>
    );



}

export default Login;