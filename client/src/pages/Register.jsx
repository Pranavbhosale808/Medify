import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Register() {
  const [password, setPassword] = useState({
    eye: false,
    type: "password",
  });
  return (
    <main>
      <section className="flex flex-row-reverse w-full h-full">
        <div className="w-[70%] lg:px-60 m-auto">
          <h1 className="my-8 mx-4 text-center">Welcome</h1>
          <form className="flex flex-col space-y-6">
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
                <small className=" cursor-pointer">forgot password ?</small>
              </div>
            </div>
            <div className="text-left">
              <Label>Company Name</Label>
              <Input placeholder="Huma medical store" />
            </div>
            <div className="text-left">
              <Label>Buisness location</Label>
              <Input placeholder="Delhi, NCR" />
            </div>
            <div className="flex gap-2 items-center justify-start">
              <Checkbox />
              <Label className="font-medium">
                By signing up you agree to our{" "}
                <span className="text-secondary">Privacy poilicy</span> and{" "}
                <span className="text-secondary">T&C</span>
              </Label>
            </div>
            <Button className="outline">Register</Button>
            <Button variant="outline" className="text-subtitle">
              <FaGoogle className="mx-2" />
              Continue with Google
            </Button>
          </form>
          <p className="text-left my-8 font-semibold">
            Already a member?{" "}
            <a className="text-secondary" href="">
              Log in
            </a>
          </p>
        </div>
        <div className=" w-1/2 bg-subtitle lg:block hidden"></div>
      </section>
    </main>
  );
}

export default Register;
