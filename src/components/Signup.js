import React, {useEffect,useState} from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import './Signup.css'
import 'boxicons'

function Signup(){

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            
            await axios.post("http://localhost:3000/Signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exist")
                    
                }
                else if(res.data==="notexist"){
                    history("/",{state:{id:email}})
                    alert('Successfully Signed Up.')
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })

        }
        catch{
            console.log(e);

        }
    }

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <h2>Enjoyy KonohA</h2>

            <input className="fname" type="text" placeholder="First Name" name="" id="" required/>
            <input className="lname" type="text" placeholder="Last Name" name="" id="" required/>

            <form action="POST">
                <input className="mail" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" required/> 
                <input className="pass" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" name="" id="" required/> 
            <input className="sub" type="submit" onClick={submit}/>
            </form>

            <br />
            <p>Already Signed?</p>
            <Link className="conn" to="/">Login Page</Link>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <a className="b1" href="https://www.facebook.com"><i class='bx bxl-facebook-square'></i></a>
            <a className="b2" href="https://www.instagram.com"><i class='bx bxl-instagram' ></i></a>
            <a className="b3" href="https://www.linkedin.com/feed/"><i class='bx bxl-linkedin-square'></i></a>
        </div>
    )
}

export default Signup