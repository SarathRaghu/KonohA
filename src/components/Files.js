import React from "react"
import 'boxicons'
import { useState } from "react"
import { useLocation,useNavigate,Link } from 'react-router-dom'
import './Files.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

function Files(){
    const location=useLocation()
    const [image,setImage]=useState(null)
    const [fileName,setFilename]=useState("No selected file")

    return (
        <div className="Files">
            <h1>Welcome To KonohA Folder</h1>
            <div className="fi-1">
                <main>
                    <form
                    onClick={() => document.querySelector(".upload").click()}
                    >
                        <input className="upload" type="file" hidden
                        onChange={({ target : {files}})=>{
                            files[0] && setFilename(files[0].name)
                            if(files)
                            {
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }}/>
                        
                        {image ?
                        <img src={image} width={700} height={550} alt={fileName} />
                        :
                        <>
                        <MdCloudUpload size={80} className="up" color="black"/>
                        <label className="l1">Upload Your File</label>
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

export default Files