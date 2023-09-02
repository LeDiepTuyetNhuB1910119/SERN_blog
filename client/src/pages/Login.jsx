import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input
} from "@chakra-ui/react";

const Login = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-gray-50 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(http://www.hcma4.vn/danhgiabaigiang/assets/img/backgrounds/1.jpg)",
      }}
    >
      <div className="max-w-md w-full mx-auto bg-white rounded-md z-10 font-montserrat">
        <div className="flex flex-col items-center gap-1 py-2 rounded-t-md border-2 border-b-slate-400 bg-slate-300">
          <img
            className="flex-1 w-16 h-16"
            src="https://filehcma4.hcma.vn/pic/GDDT/news/Logo1.png"
            alt="LogoKVIV"
          />
          <h1 className="flex-1 text-xl font-medium text-red-500">
            HỌC VIỆN CHÍNH TRỊ KV IV
          </h1>
        </div>
        <form className="w-2/3 mx-auto flex flex-col justify-center items-center">
          <FormControl className="mt-4">
            <Input errorBorderColor='crimson' placeholder="Tên đăng nhập" name="username" />
            <FormErrorMessage>Lỗi rồi</FormErrorMessage>
          </FormControl>
          <FormControl className="mt-4">
            <Input type="password" errorBorderColor='crimson' placeholder="Mật khẩu" name="password" />
            <FormErrorMessage>Lỗi rồi</FormErrorMessage>
          </FormControl>
          <button className="mt-4 mb-4 px-8 py-3 bg-sky-700 rounded-md hover:bg-primary cursor-pointer text-white">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
