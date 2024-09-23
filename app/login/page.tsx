"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/auth/password-input";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

const formSchema = z.object({
  email: z.string().min(2, "Email required").email("Invalid email format"),
  password: z.string().min(1, "Password required"),
});

export default function Login() {
  const [isMobile, setIsMobile] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main className="flex h-screen">
      {!isMobile && (
        <div className="w-[40%] bg-military-green grid place-items-center">
          <div className="text-white text-center flex flex-col gap-4">
            <Image
              className="m-auto"
              src="/logo.png"
              alt="Philippine Army Logo"
              width={175}
              height={175}
            />
            <h1 className="text-xl">Philippine Army</h1>
            <p className="text-3xl font-extrabold">Combined Arms center</p>
          </div>
        </div>
      )}
      <div
        className={`${
          isMobile
            ? "w-full flex justify-center mt-20"
            : "w-[60%] grid place-items-center"
        } `}
      >
        <div className={`${isMobile ? "w-[80%]" : "w-[60%]"}`}>
          <div className="mb-4 grid gap-2">
            {!isMobile ? (
              <>
                <p className="text-3xl font-bold">Login</p>
                <p className="text-xl">Enter your credentials to continue</p>
              </>
            ) : (
              <div className="text-center flex flex-col gap-2 mb-4">
                <Image
                  className="m-auto"
                  src="/logo.png"
                  alt="Philippine Army Logo"
                  width={120}
                  height={120}
                />
                <div>
                  <h1>Philippine Army</h1>
                  <p className="text-lg font-bold">Combined Arms center</p>
                </div>
              </div>
            )}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@domain.com" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      The email you use for your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput field={field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      The email you use for your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center text-gray-500 hover:text-gray-800">
                <Checkbox
                  id="rememberMe"
                  className="mr-2 border-gray-500 hover:border-gray-800"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Button type="submit" className="w-full font-semibold">
                Log in
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
