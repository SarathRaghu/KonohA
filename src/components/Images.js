import React from "react"
import { useState } from "react"
import 'boxicons'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Images.css'
import { click } from "@testing-library/user-event/dist/click"
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

function Images(){
    const location=useLocation()
    const [image,setImage]=useState(null)
    const [fileName,setFilename]=useState("No selected file")

    return (
        <div className="Images">
            <h1>Welcome To KonohA Gallery</h1>
            <div className="im-1">
                <h2>This is where you can upload,</h2>
                <h3>preview and save your important </h3>
                <h4>images that you want to remember</h4>
                <h5>for ever......</h5>
                <h6>So Let's Enjoyyyy....</h6>
            </div>
            <div className="im-2">
                <main>
                    <form
                    onClick={() => document.querySelector(".upload").click()}
                    >
                        <input className="upload" type="file" accept='image/*' hidden 
                        onChange={({ target : {files}})=>{
                            files[0] && setFilename(files[0].name)
                            if(files)
                            {
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }}/>
                        
                        {image ?
                        <img src={image} width={500} height={300} alt={fileName} />
                        :
                        <>
                        <MdCloudUpload size={60} className="up" color="white"/>
                        <label className="l1">Upload Your Picture</label>
                        </>
                        }
                        <button className="but">Save</button>
                    </form>
                    <section>
                        <AiFillFileImage color="white" />
                        <span>
                            {fileName}
                            <MdDelete className="del"
                            onClick={() => {
                                setFilename("No selected file")
                                setImage(null)
                            }}/>
                        </span>
                    </section>
                </main>
            </div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <Link className="conn1" to="/">Login</Link>
            <Link className="conn2" to="/Signup">SignUp</Link>
            <Link className="conn3" to="/MyProfile">My Profile</Link>
            <Link className="conn4" to="/Home">Home</Link>
        </div>
    )
}

export default Images