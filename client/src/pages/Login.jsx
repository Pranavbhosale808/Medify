import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Login() {
  const [password, setPassword] = useState({
    eye: false,
    type: "password",
  });
  return (
    <main>
      <section className="flex w-full h-screen">
        <div className="w-[70%] lg:px-60 m-auto">
          <h1 className="my-8 mx-4">Welcome back!</h1>
          <form className="flex flex-col lg:space-y-8 space-y-4">
            <div className="text-left">
              <Label>E-mail</Label>
              <Input placeholder="jhon.doe@gmail.com" />
            </div>

            <div className="text-left">
              <Label>Password</Label>
              <div className="relative w-full">
                <Input placeholder="****************" type={password.type} />
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
            <Button className="outline">Login</Button>
            <Button variant="outline" className="text-subtitle">
              <FaGoogle className="mx-2" />
              Continue with Google
            </Button>
          </form>
          <p className="text-left my-8 font-semibold">
            New here?{" "}
            <a className="text-secondary" href="">
              Register
            </a>
          </p>
        </div>
        <div className=" w-1/2 bg-subtitle lg:block hidden"></div>
      </section>
    </main>
  );
}

export default Login;
