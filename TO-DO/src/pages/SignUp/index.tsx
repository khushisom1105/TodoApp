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


const schema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  fullName: z.string().min(1, "Full Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters long"),
  
});
type FormData = z.infer<typeof schema>;

enum ACCOUNT_TYPE {
  STUDENT = "STUDENT",
  INSTRUCTOR = "INSTRUCTOR",
  EMPLOYEE = "EMPLOYEE",
}

interface TabData {
  id: number;
  tabName: string;
  type: ACCOUNT_TYPE;
}

const SignUpPage: React.FC = () => {
  const [accountType, setAccountType] = useState<ACCOUNT_TYPE>(ACCOUNT_TYPE.STUDENT);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
   // mode: "onChange",
    resolver: zodResolver(schema),
  });

  const tabData: TabData[] = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
    {
      id: 3,
      tabName: "Employee",
      type: ACCOUNT_TYPE.EMPLOYEE,
    },
  ];

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await ApiHandler("post", URLL.SignUp, {
        fullName: data.fullName,
        uname: data.username,
        email: data.email,
        phone: data.phone,
        role: accountType,
        password: data.password
      });
      console.log(data); // Handle the form submission
      toast.success("Form submitted successfully!");
      navigate("/Login")
    } catch (e) {
      console.log(e.response.data.message);
      toast.error(e.message.message)
    }
    console.log("data inside");
  };
  const handleBlur = (fieldName: string) => {
    trigger(fieldName);
  };

  return (
    <>  <Header></Header>
      <div className="min-h-screen flex items-center justify-center bg-[#EBEAFF]">

        <div className="bg-white p-8 rounded-lg shadow-lg w-3/6 ">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
          <Tab tabData={tabData} field={accountType}  setField={setAccountType} />
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
              htmlFor="fullName"
              text="Full Name *"
              type="text"
              id="fullName"
              name="fullName"
              bg="bg-white mb-4"
              register={register}
              err={errors.fullName?.message}
              divcss={""}
              onChange={undefined}
              onBlur={() => handleBlur("fullName")}
              isDisable={false}
              iconOne={undefined}
              iconTwo={undefined}
            />
            <Input
              htmlFor="phone"
              text="Phone No *"
              type="text"
              id="phone"
              name="phone"
              bg="bg-white mb-4"
              register={register}
              err={errors.phone?.message}
              divcss={""}
              onChange={undefined}
              onBlur={() => handleBlur("phone")}
              isDisable={false}
              iconOne={undefined}
              iconTwo={undefined}
            />
            <Input
              htmlFor="username"
              text="Username *"
              type="text"
              id="username"
              name="username"
              bg="bg-white mb-4"
              register={register}
              err={errors.username?.message}
              divcss={""}
              onChange={undefined}
              onBlur={() => handleBlur("username")}
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
            <Input
              htmlFor="confirmPassword"
              text="Confirm Password *"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              bg="bg-white mb-4"
              register={register}
              err={errors.confirmPassword?.message}
              divcss={""}
              onChange={undefined}
              onBlur={() => handleBlur("confirmPassword")}
              isDisable={false}
              iconOne={<FaEye/>}
              iconTwo={<FaEyeSlash/>}
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#3D3BF3] text-white rounded-md hover:bg-[#9694FF] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?
              <a href="/Login" className="text-[#3D3BF3] hover:underline">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;


