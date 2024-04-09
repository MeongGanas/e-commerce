"use client";
import { Google } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import SubmitButton from "../components/button";
import { useFormState } from "react-dom";

export default function Page() {
  // const [formState, dispatch] = useFormState();
  return (
    <form action="" method="POST" className="form">
      <h1 className="text-3xl font-bold">Login to continue</h1>
      <div className="my-5">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className="input"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            required
          />
        </div>
      </div>
      <SubmitButton name="Login" />

      <div className="w-full flex justify-center py-5 items-center gap-3">
        <span className="w-full h-0.5 bg-black rounded-sm"></span>
        <h1 className="min-w-fit">or login with</h1>
        <span className="w-full h-0.5 bg-black rounded-sm"></span>
      </div>

      <Button
        className="w-full bg-white font-semibold"
        radius="sm"
        startContent={<Google />}
      >
        Google
      </Button>
    </form>
  );
}
