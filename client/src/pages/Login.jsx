import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/store/auth";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState({
    eye: false,
    type: "password",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { handleLogin } = useContext(AuthContext);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = response.json();
        setUser({ email: "", password: "" });
        console.log(user);
        handleLogin(user);
        navigate("/");
      }
    } catch (error) {
      handleLogin(user);
      console.log("Error");
      navigate("/login");
    }
  };

  return (
    <main>
      <section className="flex w-full h-screen">
        <div className="w-[70%] lg:px-60 m-auto">
          <h1 className="my-8 mx-4">Welcome back!</h1>
          <form
            className="flex flex-col lg:space-y-8 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="text-left">
              <Label>E-maill</Label>
              <Input
                placeholder="jhon.doe@gmail.com"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="text-left">
              <Label>Password</Label>
              <div className="relative w-full">
                <Input
                  placeholder="****************"
                  type={password.type}
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                {password.eye ? (
                  <IoEyeOutline
                    onClick={() =>
                      setPassword({ eye: false, type: "password" })
                    }
                    className="text-subtitle absolute top-5 right-5 cursor-pointer scale-125"
                  />
                ) : (
                  <IoEyeOffOutline
                    onClick={() => setPassword({ eye: true, type: "text" })}
                    className="text-subtitle absolute top-5 right-5 cursor-pointer scale-125"
                  />
                )}
              </div>
              <small className=" cursor-pointer">forgot password ?</small>
            </div>
            <Button className="outline" type="submit">
              Login
            </Button>
            <Button variant="outline" className="text-subtitle">
              <FaGoogle className="mx-2" />
              Continue with Google
            </Button>
          </form>
          <p className="text-left my-8 font-semibold">
            New here?{" "}
            <Link className="text-secondary" to="/register">
              Register
            </Link>
          </p>
        </div>
        <div className=" w-1/2 bg-subtitle lg:block hidden"></div>
      </section>
    </main>
  );
}

export default Login;
