import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState({
    eye: false,
    type: "password",
  });

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response) {
        const responseData = response.json();
        setUser({ username: "", email: "", phone: "", password: "" });
        console.log(user);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <main>
      <section className="flex flex-row-reverse w-full h-full">
        <div className="w-[70%] lg:px-60 m-auto">
          <h1 className="my-8 mx-4 text-center">Welcome</h1>
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div className="text-left">
              <Label>E-mail</Label>
              <Input
                placeholder="jhon.doe@gmail.com"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="text-left">
              <Label>Phone</Label>
              <Input
                placeholder="jhon.doe@gmail.com"
                name="phone"
                value={user.phone}
                onChange={handleInput}
              />
            </div>

            <div className="text-left">
              <Label>Username</Label>
              <Input
                placeholder="jhon.doe@gmail.com"
                name="username"
                value={user.username}
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
                <small className=" cursor-pointer">forgot password ?</small>
              </div>
            </div>
            {/* <div className="text-left">
              <Label>Company Name</Label>
              <Input placeholder="Huma medical store" />
            </div>
            <div className="text-left">
              <Label>Buisness location</Label>
              <Input placeholder="Delhi, NCR" />
            </div> */}
            <div className="flex gap-2 items-center justify-start">
              <Checkbox />
              <Label className="font-medium">
                By signing up you agree to our{" "}
                <span className="text-secondary">Privacy poilicy</span> and{" "}
                <span className="text-secondary">T&C</span>
              </Label>
            </div>
            <Button className="outline" type="submit">
              Register
            </Button>
            <Button variant="outline" className="text-subtitle">
              <FaGoogle className="mx-2" />
              Continue with Google
            </Button>
          </form>
          <p className="text-left my-8 font-semibold">
            Already a member?{" "}
            <Link className="text-secondary" to="/login">
              Log in
            </Link>
          </p>
        </div>
        <div className=" w-1/2 bg-subtitle lg:block hidden"></div>
      </section>
    </main>
  );
}
export default Register;
