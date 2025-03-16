import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LogIn = () =>{
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    var navigate = useNavigate();
    var loggedIn = async (event)=>{
        event.preventDefault();
        var req = await axios.post('http://localhost:3001/login',{
            email,password 
        })
        console.log(req.data);
        var isLoginSuccess = req.data.isLoggedIn;
        console.log(isLoginSuccess);
        if(isLoginSuccess)
        {
            navigate('/home');
        }
        else{
            var message = req.data.message;
            console.log(message);
            alert(message);
        }
    }
    function click(){
        alert("Form submitted successfully");
    }
    return (
    <section>
        <h1>LogIn page</h1>
        <form onSubmit={loggedIn}>
        <label>Enter your email:
        <input type ="email" placeholder="example@gmail.com" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
        </label><br />
         <label>Enter your password:
        <input type ="password" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
        </label><br />
        <button onClick={click}>Submit</button>
        <p>If doesn't have account? <Link to = "/signup">SignUp</Link></p>
        </form>
    </section>);
}

export default LogIn;