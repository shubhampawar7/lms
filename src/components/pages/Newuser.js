import React, { useState } from "react";

function Newuser() {



    const [user, setUser] = useState({
        name: "",
        author: "",
        noofpages: "",
        category: ""

    });

    //destructuring  it create local var 
    const { name, author, noofpages, category } = user;


    const onInputChange = e => {

        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })  //use spread all past data remain
    }


    return (
        <>

            <div class="container-fluid d-flex justify-content-center align-items-center main-container">
                <div class="container d-flex justify-content-center align-items-center ">

                    <form class="form-newuser w-auto mt-20">
                        <h1 style={{ color: "aquamarine" }}>Add new Book</h1>
                        <div class="form-outline mb-4 ">
                            <label class="form-label" for="form4Example1" >Name</label>

                            <input type="text" id="form4Example1" class="form-control" name="name" value={name} onChange={e => onInputChange(e)} />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form4Example2" >Author</label>

                            <input type="email" id="form4Example2" class="form-control" name="author" value={author} onChange={e => onInputChange(e)} />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form4Example2" >No of pages</label>

                            <input type="email" id="form4Example2" class="form-control" name="noofpages" value={noofpages} onChange={e => onInputChange(e)} />
                        </div>

                        <div class="form-outline  mb-4">
                            <label class="form-label" for="form4Example3" >Category </label>

                            <textarea class="form-control" id="form4Example3" name="category" value={category} onChange={e => onInputChange(e)}></textarea>
                        </div>



                        <button type="submit" class="btn btn-primary btn-block  ">Add Book</button>
                    </form>
                </div>


            </div>

        </>
    );
}
export default Newuser;