import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [captainData, setCaptainData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCaptainData((prev) => {
      if (name === "firstname" || name === "lastname") {
        return {
          ...prev,
          fullname: {
            ...prev.fullname,
            [name]: value,
          },
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCaptainSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(captainData);
    setCaptainData({
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
    });
  };
  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          alt="uber-logo"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        />
        <form onSubmit={handleCaptainSignUpSubmit}>
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex gap-5 mb-6">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              name="firstname"
              value={captainData.fullname.firstname}
              onChange={handleInputChange}
              required
              placeholder="Firstname"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              name="lastname"
              value={captainData.fullname.lastname}
              onChange={handleInputChange}
              required
              placeholder="Lastname"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            name="email"
            value={captainData.email}
            onChange={handleInputChange}
            required
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            name="password"
            value={captainData.password}
            onChange={handleInputChange}
            required
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
