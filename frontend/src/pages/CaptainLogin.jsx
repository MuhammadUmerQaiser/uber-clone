import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [captainData, setCaptainData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaptainData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptainLoginSubmit = (e) => {
    e.preventDefault();
    console.log(captainData);
    setCaptainData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          alt="uber-logo"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        />
        <form onSubmit={handleCaptainLoginSubmit}>
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
            required
            value={captainData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-sm"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
