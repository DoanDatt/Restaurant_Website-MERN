/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

type SignUpInputState = {
  fullname: string;
  email: string;
  password: string;
  contact: string;
};
const SignUp = () => {
  const loading = false;
  const [input, setInput] = useState<SignUpInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const loginSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 shadow-sm "
        onSubmit={loginSubmitHandler}
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl text-black">PatelEast</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your full name"
              className="pl-10 focus-visible:ring-1"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
            />
            <User className="absolute inset-y-2 left-2 text-gray-200 pointer-events-none" />
            {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 focus-visible:ring-1"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-200 pointer-events-none" />
            {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter your password"
              className="pl-10 focus-visible:ring-1"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-200 pointer-events-none" />
            {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your contact"
              className="pl-10 focus-visible:ring-1"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
            />
            <PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-200 pointer-events-none" />
            {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
          </div>
        </div>

        <div className="mb-10">
          {loading ? (
            <Button disabled className="bg-gray-400 cursor-not-allowed">
              No
            </Button>
          ) : (
            <Button
              className="bg-(--orange) hover:bg-(--hoverOrange)"
              type="submit"
            >
              Submit
            </Button>
          )}
          <div className="mt-4">
            <Link
              to="/forgot-password"
              className="hover:text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
          </div>
        </div>
        <Separator />
        <p className="mt-2">
          Already have an account?
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
