import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/auth";

export const Login =()=>{
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }

  const navigate = useNavigate();
  const {storeTokenInLS}=useAuth();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(user);

        try {
          const response = await fetch('http://localhost:5000/api/Login',{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        });
        console.log(response);

        if(response.ok){
          alert("Login Succesful");
          const res_data = response.json();
          console.log(res_data);
          storeTokenInLS(res_data.token);
          setUser({email:"",password:""});
          navigate('/profile');
        }
        else{
          ("Login error");
        }
        } catch (error) {
          console.log(error.message);
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
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onClick={handleSubmit}>
                  
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      value={user.email}
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
                    Login
                  </button>
                  <p>Register yourself <span><NavLink to="/signup">Register</NavLink></span></p>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
        </>
    )
}