import React from "react"
import { useState } from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Notes.css'
import { v4 as uuid } from "uuid";

function Notes(){
    const location=useLocation()

    return (
        <div className="Notes">
            <h2>Welcome To KonohA Notes</h2>
            <form action="/action_page.php">
                <textarea className="Note" ></textarea>
                <input className="b" type="submit"/>
            </form>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <Link className="conn1" to="/">Login</Link>
            <Link className="conn2" to="/Signup">SignUp</Link>
            <Link className="conn3" to="/MyProfile">My Profile</Link>
            <Link className="conn4" to="/Home">Home</Link>

        </div>
    )
}

export default Notes