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

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "Username required")
    .email("Invalid email format"),
  password: z.string().min(1, "Password required"),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <main className=" flex h-screen">
      <div className="w-[40%] bg-[#221F20] grid place-items-center">
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
      <div className="w-[60%] grid place-items-center">
        <div className="w-[60%]">
          <div className="mb-4 grid gap-2">
            <p className="text-3xl font-extrabold">Login</p>
            <p className="text-xl">Get access to different courses</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
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
                      <Input
                        type="password"
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      The email you use for your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center">
                <Checkbox id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
