import React, { useState } from "react";
import Input from "../../Components/Ui/input";
import Tab from "../../Components/Ui/toggle";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "../../Components/Ui/Header";
import ApiHandler from "../../services/apiHandler";
import URLL from "../../services/getApi";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import User from "../../services/userProile";


const schema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});
type FormData = z.infer<typeof schema>;


const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
   // mode: "onChange",
    resolver: zodResolver(schema),
  });


  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await ApiHandler("post", URLL.Login, {      
        email: data.email,
        password: data.password
      });
      console.log("Just Response ",response ,"Response Data",response.data);
      // User.setId(response.data.id);
      // User.setName(response.data.full_name);
      console.log(data); // Handle the form submission
      toast.success("Log in successful!");
      navigate("/main");
    } catch (e) {
      console.log(e.response.data.message);
      toast.error(e.response.data.message)
    }
    console.log("data inside");
  };
  const handleBlur = (fieldName: string) => {
    trigger(fieldName);
  };

  return (
    <>  <Header></Header>
      <div className="min-h-screen flex items-center justify-center bg-[#EBEAFF]">

        <div className="bg-white p-8 rounded-lg shadow-lg w-96 ">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
         
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <Input
              htmlFor="email"
              text="Email *"
              type="text"
              id="email"
              name="email"
              bg="bg-white mb-4"
              register={register}
              err={errors.email?.message}
              divcss={""}
              onChange={undefined}
              onBlur={() => handleBlur("email")}
              isDisable={false}
              iconOne={undefined}
              iconTwo={undefined}
            />
            
            <Input
              htmlFor="password"
              text="Password *"
              type="password"
              id="password"
              name="password"
              bg="bg-white mb-4"
              register={register}
              err={errors.password?.message}
              divcss={""}
              onChange={undefined}
              onBlur={() => handleBlur("password")}
              isDisable={false}
              iconOne={<FaEye/>}
              iconTwo={<FaEyeSlash/>}
            />
        
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#3D3BF3] text-white rounded-md hover:bg-[#9694FF] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <a href="/SignUp" className="text-[#3D3BF3] hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;


