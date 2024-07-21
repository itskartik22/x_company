"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader } from "../ui/card";

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

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  businessMail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

const DiscussForm = ({buttonText, buttonColor} : {
  buttonText : string,
  buttonColor : string
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      businessMail: "",
      businessName: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div id="discussion-section" className="bg-white p-4 rounded-md flex self-baseline shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex flex-col">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Dev" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business name</FormLabel>
                    <FormControl>
                      <Input placeholder="ABC Technologies PVT LTD" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone no</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 9600XXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessMail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business mail</FormLabel>
                    <FormControl>
                      <Input placeholder="demoaccount@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button className={`${buttonColor == "green" ? "bg-[#80A948]" : "bg-[#FFBA00]"} hover:bg-[#fed053] self-end`} type="submit">{buttonText}</Button>
        </form>
      </Form>
    </div>
  );
};

export default DiscussForm;
