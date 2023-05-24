import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Home.css'

function Home(){
    const location=useLocation()

    return (
        <div className="homepage">

            {/* <h1>Hello {location.state.id} and welcome to the Home</h1> */}
            <h2>Welcome To KonohA Community</h2>
            <h3>Here is an App which can be used by you to make your</h3>
            <h4>forgettable</h4>
            <h5>things</h5>
            <h6>Unforgettable</h6>


            <label className="l1">You can create and</label> 
            <label className="l2">save your important notes</label>
            <button className="b1"><i class='bx bxs-notepad'></i></button>


            <label className="l3">You can Upload and</label> 
            <label className="l4">save your important notes</label>
            <button className="b2" href=""><i class='bx bxs-file-doc'></i></button>


            <label className="l5">You can upload and</label> 
            <label className="l6">save your important images</label>
            <button className="b3"><i class='bx bx-images'></i></button>
            
    
            <Link className="conn1" to="/">Login</Link>
            <Link className="conn2" to="/Signup">SignUp</Link>
            <Link className="conn3" to="/MyProfile">My Profile</Link>
            <Link className="conn4" to="/Home">Home</Link>
            <Link className="conn5" to="/Notes">Notes</Link>
            <Link className="conn6" to="/Files">Documents</Link>
            <Link className="conn7" to="/Images">Images</Link>


            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


        </div>
    )
}

export default Home