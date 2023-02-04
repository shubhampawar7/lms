import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";  //use for http requests 
import './index.css'
import data from './db.json';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { v4 as uuid } from 'react-uuid';
import Login from "./Login";

// import json from '/home/shubhamp/check/lms/db.json';
// import Mainimg from '/home/shubhamp/practice/Library_management_system/lms/src/components/images/Main.jpeg'
// import bgimg from '/home/shubhamp/practice/Library_management_system/lms/src/components/images/logo.jpeg';

// import bootstrap from 'bootstrap';



function Dashboard() {

    const navigate = useNavigate();




    //***add book start***
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [noofpages, setPages] = useState("");
    const [category, setCategory] = useState("");
    //***add book end***


    //***fetch json data using import start***
    const [users, setData] = useState(data);
    //***fetch json data using import end***

    //***model popup start
    const [modal, setmodel] = useState(false)
    //***model popup end***

    //***print username on header start***
    const getemail = localStorage.getItem("emaildata")
    //***print username on header end***


    // *** ADD BOOK START ***    
    function handleSubmitpopup(e) {
        e.preventDefault();

        const name = e.target.names.value;
        const author = e.target.authors.value;
        const pages = e.target.pagess.value;
        const Category = e.target.categorys.value;

        const newuser = { name, author, pages, Category }

        setData((prevList) => {
            return prevList.concat(newuser)
        })
        // alert(" Added Succsfully")
        setTimeout(function () { alert("added succesfully") }, 400);
    }
    // *** ADD BOOK END ***   




    //TRYEDIT
    function handleSubmitpopupedit(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const author = e.target.author.value;
        const pages = e.target.pages.value;
        const Category = e.target.category.value;

        const newuser = { name, author, pages, Category }
        const newlist = users.map(list => (

            list.id === users.id ? ({ ...list, [e.target.name]: e.target.value }) : (list)
            // list.id === user.id ? ({ ...list, newuser} ): (list)           


        ))
        setData(newlist)


    }
    // END





    //*********EDIT DATA START*********  
    const [updateState, setUpdateState] = useState(-1);

    function handleEdit(id) {
        setUpdateState(id)
    }

    function Edit({ user, users, setData }) {

        function handleInput(e) {
            e.preventDefault();



            const newlist = users.map(list => (

                list.id === user.id ? ({ ...list, [e.target.name]: e.target.value }) : (list)
                // list.id === user.id ? ({ ...list, newuser} ): (list)           


            ))
            setData(newlist)


        }
        return (
            <>
                <tr >
                    {/* <td ><input  type="text" name="id" value={user.id} onChange={handleInput} /></td> */}
                    <td><input type="text" name="name" value={user.name} onChange={(e) => handleInput(e)} /> </td>
                    <td><input type="text" name="author" value={user.author} onChange={handleInput} /></td>
                    <td><input type="number" name="pages" value={user.pages} onChange={handleInput} /></td>
                    <td><input type="text" name="Category" value={user.Category} onChange={handleInput} /></td>
                    <td> <button class="btn btn-outline-success" type="submit" onChange={handleInput} >update</button>
                        {/* <button class="btn btn-outline-danger" onClick={(e) => window.location.reload(false)}>Cancel</button> */}
                        <button class="btn btn-outline-danger" onClick={   (e)=>handleCancel(e)   }>Cancel</button>

                    </td>
                    {/* / onClick={() => setUserId(null)}   (e)=>handleCancel(e)   */}
                </tr>


            </>
        )
    }

    //*********EDIT DATA END*********


    //*********UPDATE BOOK START*********
    function handleUpdate(e) {
        e.preventDefault();
        setUpdateState(-1)
    }
    function handleCancel(e) {
        e.preventDefault();

    }


    //-1
    // const [userId, setUserId] = useState(null)
    //*********UPDATE BOOK END*********dd

// this is dev branch



    //***DELETE DATA START***
    let history = useNavigate();//***after delete navigate
    //***delete data
    const handleDelete = (id) => {

        var index = users.map(function (e) {
            return e.id;
            console.log(e.id)
        }).indexOf(id);

        users.splice(index, 1) //***it goes to users and delete paritcular index
        history('/dashboard');
    }
    //********DELETE DATA END************




    //*********JSON API START*********
    // fetch json start
    // const loadUser = async () => {
    //     const result = await axios.get("http://localhost:3003/users");

    //     console.log(users.name)
    //     setData(result.data)
    // }



    // useEffect(() => {
    //     loadUser();

    // }, [])
    //*********JSON API END*********




    //*********CLEAR LOCAL STORAGE START*********  
    const handleClick = () => {
        localStorage.clear();
    }
    //*********CLEAR LOCAL STORAGE END*********




    return (
        <>

            {/* NAVBAR START */}

            <nav className="navbar navbar-expand-md navbar-light bg-secondary bg-gradient sticky-lg-top  ">
                <div className="container-fluid">

                    {/* navbar brand img start */}
                    <Link className="navbar-brand bg-imageFluid" to="/dashboard" >
                        <img style={{ height: "50px", width: "90%" }} src="https://img.freepik.com/free-vector/open-book-icon-education-symbol-flat-design-vector-illustration_53876-136267.jpg?w=740&t=st=1674148367~exp=1674148967~hmac=c6571fea419550f1011fc6b78f63949db0d117f26d06d17f5a2dd189cf265604" />
                    </Link>
                    {/* navbar brand img end*/}



                    {/* toggle button start */}
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    {/* toggle button end */}

                    {/* style={{ width: "auto", margin: "auto", height: "auto " }} */}


                    {/* heading start */}
                    <div className="nav-brand lead " ><h1 id="heading"> Library Management System </h1></div>
                    {/* heading end */}

                    {/* className="collapse navbar-collapse" */}
                    <div id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto f-right mb-0">

                            <li className="nav-item m-auto f-right">
                                <Link className="nav-link " aria-current="page" to="/dashboard">Home</Link>
                            </li>

                            <li className="nav-item m-auto f-right">
                                <Link className="nav-link " aria-current="page" >{getemail}</Link>
                            </li>

                            <li className="nav-item f-right m-auto">
                                {/* <NavLink className="btn btn-outline-dark btn-info" to="/" onClick={handleClick} role="button">Logout</NavLink> */}
                                <NavLink to="/" ><button class="btn btn-primary btn-md  " onClick={handleClick} type="submit" >Logout <i class="fa-solid fa-right-from-bracket "></i></button></NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            {/* NAVBAR END */}




            {/* Dashboard image start */}
            <div className="image-content">
                <img className="image-main" src="https://media.istockphoto.com/id/638383032/photo/textbooks-stacked-on-school-desk-with-chalkboard-background.jpg?b=1&s=170667a&w=0&k=20&c=v0pEsXCm4L5g45kSSYsMmdy9frASELzGrD6bFIehczI=" alt="image" ></img>
                {/* <h1 class="centered-text ">Welcome to Library Management System </h1> */}
                <p class="h1 centered-text ">Welcome to Library Management System </p>
                <a class="centered" href="#book-list"> <button className="btn btn-success book-button" >See Book list</button></a>
            </div>
            {/* Dashboard image end */}


            {/* book list table start */}
            <section class="main_heading  my-2" id="book-list">
                <div class="text-center">
                    <h1 id="contactus" class="display-4">Books List</h1>
                    <hr class="w-25  mx-auto bg-dark" style={{ height: "3px" }} />

                    {/* <NavLink class="d-flex justify-content-center align-items-center " >
                    <button class="btn btn-lg btn-primary" onClick={() => setmodel(true)}>Add new user</button>
                    </NavLink> */}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" > Add Book</button>
                    {/* <button type="button" class="btn btn-primary"  onClick={()=><Addlist setData={setData}  />}> Add Book</button> */}
                    {/* onClick={()=><Addlist setData={setData}  />} */}



                    <br />
                </div>



                {/* MODAL START*/}
                <div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header bg-success">
                                    <h5 class="modal-title ms-auto" id="exampleModalLabel">Add Book</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                </div>

                                <div class="modal-body">
                                    <form onSubmit={handleSubmitpopup} >
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Name</label>
                                            <input type="text" name="names" class="form-control" id="recipient-name" required />
                                        </div>

                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Author:</label>
                                            <input type="text" class="form-control" name="authors" id="text" required></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">no of pages:</label>
                                            <input type="number" class="form-control" name="pagess" id="text" required ></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">category:</label>
                                            <input type="text" class="form-control" name="categorys" id="text" required></input>
                                        </div>
                                        <button type="submit" class="btn btn-success m-auto" data-bs-dismiss="modal" required >Save</button>
                                        <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Close</button>

                                    </form>
                                </div>

                                <div class="modal-footer">
                                    {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                    {/* <button type="button" class="btn btn-primary"  onClick={(e) => handleAdd(e)} typeof="submit" >Save changes</button> */}

                                </div>
                                {/* <button type="submit" class="btn btn-primary m-auto mb-4" >Save</button> */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAL END   */}


                {/* MODAL Edit START*/}
                <div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header bg-success">
                                    <h5 class="modal-title ms-auto" id="exampleModalLabel">Add Book</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                </div>

                                <div class="modal-body">
                                    <form onSubmit={handleSubmitpopup} >
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Name</label>
                                            <input type="text" name="names" class="form-control" id="recipient-name" required />
                                        </div>

                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Author:</label>
                                            <input type="text" class="form-control" name="authors" id="text" required></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">no of pages:</label>
                                            <input type="number" class="form-control" name="pagess" id="text" required ></input>
                                        </div>

                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">category:</label>
                                            <input type="text" class="form-control" name="categorys" id="text" required></input>
                                        </div>
                                        <button type="submit" class="btn btn-success m-auto" data-bs-dismiss="modal" required >Save</button>
                                        <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Close</button>

                                    </form>
                                </div>

                                <div class="modal-footer">
                                    {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                    {/* <button type="button" class="btn btn-primary"  onClick={(e) => handleAdd(e)} typeof="submit" >Save changes</button> */}

                                </div>
                                {/* <button type="submit" class="btn btn-primary m-auto mb-4" >Save</button> */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* MODAL END   */}



                {/* TABLE START */}

                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 ">
                            <form onSubmit={handleUpdate}>
                                <table class="table  table-striped table-hover">
                                    <thead class="table-dark ">
                                        <tr>
                                            {/* <th scope="col">No</th> */}
                                            <th scope="col">Name</th>
                                            <th scope="col">Author</th>
                                            <th scope="col">No of pages</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Action</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user, index) => (

                                                updateState === user.id ? (<Edit user={user} users={users} setData={setData} />  ) : (
                                                    <tr>

                                                        {/* <th scope="row">{index + 1}</th> */}
                                                        <td>{user.name}</td>
                                                        <td>{user.author}</td>
                                                        <td>{user.pages}</td>
                                                        <td>{user.Category}</td>
                                                        <td>  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleEditModals" onClick={() => handleEdit(user.id)}> Edit</button>
                                                            {/* <td>   <button type="button" class="btn btn-outline-primary m-1" onClick={() => handleEdit(user.id)}> Edit <i class="fa-solid fa-pen-to-square"></i></button> */}
                                                            <button class="btn btn-outline-danger" onClick={() => handleDelete(user.id)}>Delete<i class="fa-solid fa-trash-can"></i></button>
                                                        </td>


                                                    </tr>

                                                )

                                            ))

                                        }

                                    </tbody>
                                </table>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
            {/* TABLE END */}




            {/* {
                status ? <div><Addlist setData={setData} /></div> : false
            }
            <button type="submit" class="btn btn-info m-auto d-flex mb-20" onClick={() => { setStatus(!status) }}>Add Book</button> */}


            {/* <div><Addlist /></div> */}









        </>
    );


}




export default Dashboard;