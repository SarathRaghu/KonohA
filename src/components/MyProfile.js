import React from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './MyProfile.css'

function MyProfile(){
    const location=useLocation()

    return (
        <div className="MyProfile">
            <h1>Welcome To Your Profile</h1>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <Link className="conn1" to="/">Login</Link>
            <Link className="conn2" to="/Signup">SignUp</Link>
            <Link className="conn3" to="/MyProfile">My Profile</Link>
            <Link className="conn4" to="/Home">Home</Link>
            <Link className="conn5" to="/Notes">Notes</Link>
            <Link className="conn6" to="/Files">Documents</Link>
            <Link className="conn7" to="/Images">Images</Link>

            <button className="b1"><i class='bx bxs-notepad'></i></button>
            <button className="b2" href=""><i class='bx bxs-file-doc'></i></button>
            <button className="b3"><i class='bx bx-images'></i></button>
        </div>
    )
}

export default MyProfile