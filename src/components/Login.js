import React, {useEffect,useState} from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import './Login.css'
import 'boxicons'

function Login(){

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/Home",{state:{id:email}})
                    alert('Successfully Logged In')
                }
                else if(res.data==="notexist"){
                    alert("Incorrect Email or Password")
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <h2>KonohA is Waiting....</h2>
            <form action="POST">
                <input className="mail" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/> 
                <input className="pass" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" name="" id=""/> 
            <input className="sub" type="submit" onClick={submit}/>
            </form>

            <br />
            <p>New User?</p>
            <Link className="conn" to="/Signup">Signup</Link>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <a className="b1" href="https://www.facebook.com"><i class='bx bxl-facebook-square'></i></a>
            <a className="b2" href="https://www.instagram.com"><i class='bx bxl-instagram' ></i></a>
            <a className="b3" href="https://www.linkedin.com/feed/"><i class='bx bxl-linkedin-square'></i></a>
        </div>
    )
}

export default Login