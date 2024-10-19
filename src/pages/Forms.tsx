import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// declare from kita sepeti apa menggunakan bantuan  typescript

const LoginFormSchemas = z.object({
  username: z
    .string()
    .min(3, "Usename Minimal 3 Karakter")
    .max(16, "Username max 16 karakter"),
  password: z
    .string()
    .min(3, "Password Minimal 3 Karakter")
    .max(16, "Password max 16 karakter"),
});

// buat bentuk form nya
// infer mengambil bentuk loginFormSchemas, mmebuat sebuah object
type LoginFormSchema = z.infer<typeof LoginFormSchemas>;

const Form = () => {
  // lalu agar validation bekerja maka tambahkan resolver
  const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchemas),
  });

  const OnSubmit = handleSubmit((values) => {
    alert(`Username : ${values.username} , Password : ${values.password}`);
  });
  <p>testsing</p>;
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Login
        </h2>
        <form>
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            {formState.errors?.username && (
              <p className="text-red-600 text-sm">
                {formState.errors?.username.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            {formState.errors?.password && (
              <p className="text-red-600 text-sm">
                {formState.errors?.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={OnSubmit}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <hr className="my-6 border-gray-300" />
        <p className="text-center text-sm text-gray-600">
          New to Amazon?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Create your account
          </a>
        </p>
      </div>
    </main>
  );
};

export default Form;
