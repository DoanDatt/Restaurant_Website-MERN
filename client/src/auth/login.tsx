/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { userSignupSchema, type LoginInputState } from "@/schemas/userSchema";
import { LockKeyhole, Mail } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const loginSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const filedErrors = result.error.formErrors.fieldErrors;
      setErrors(filedErrors as Partial<LoginInputState>);
      return;
    }
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
        {/* Input Mail */}
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        {/* Input Password */}
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
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
          Don't have an account?
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
