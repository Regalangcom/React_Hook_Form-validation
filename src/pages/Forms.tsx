import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

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

const Forms = () => {
  // lalu agar validation bekerja maka tambahkan resolver
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchemas),
  });

  const { handleSubmit, control } = form;

  const OnSubmit = handleSubmit((values) => {
    alert(`Username : ${values.username} , Password : ${values.password}`);
  });

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Login
        </h2>

        <Form {...form}>
          <form onSubmit={OnSubmit}>
            <FormField
              control={control}
              name="username"
              // field seperti {... register }
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    {/* tidak perlu memanggil condisional rendering nya  */}
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={control}
              name="password"
              // field seperti {... register }
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    {/* tidak perlu memanggil condisional rendering nya  */}
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </Form>
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

export default Forms;
