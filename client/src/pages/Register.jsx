import { useState } from "react";
import { NavLink, Navigate,useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = ()=>{
  
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

  const handleInput =(e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(user);
    
    try {
      const response = await fetch('http://localhost:5000/api/register',{
        method:"POST",
        headers:{
          "Content-Type":'application/json',
        },
        body:JSON.stringify(user),
      });
      

      if(response.ok){
        const responseData = response.json();
        console.log(responseData);
        storeTokenInLS(responseData.token);
        setUser({username:"",email:"",phone:"",password:""});
        navigate('/login');
        console.log(responseData);
      }
      else{
        alert("Invalid Credintals");
      }
    } catch (error) {
      console.log('register catch',error);
      
    } 
    
  }


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                     
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                  <p>Already Having Account<span><NavLink to="/login">Login</NavLink></span></p>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};


