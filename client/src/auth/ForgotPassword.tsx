import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const loading = false;
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <h1 className="font-extrabold text-2xl mb-2">ForgotPassword</h1>
        <p className="text-sm text-gray-600">
          Enter your address to reset your password
        </p>
      </div>
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Enter your email"
          value={email}
          className="pl-10"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
      </div>
      {loading ? (
        <Button disabled className="bg-orange hover:bg-hoverOrange">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button className="bg-orange hover:bg-hoverOrange">
          Send Reset Link
        </Button>
      )}
      <span className="text-center">
        Back to{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </span>
    </div>
  );
};
export default ForgotPassword;
