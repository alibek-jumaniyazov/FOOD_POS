import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email == "alibekjumaniyazov007@gmail.com" && password == "123") {
      localStorage.setItem(
        "isAuthenticated",
        JSON.stringify({ email: email, password: password, token: "lokaydo" })
      );
      navigate("/");
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      alert("Invalid email or password");
      console.log("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#252836]">
      <div className="!p-8 w-[420px] h-auto rounded-2xl  flex flex-col gap-[10px] bg-[#1f1d2b]">
        <h2 className="text-3xl font-bold text-center text-white !mb-4">
          FoodPos Login
        </h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-[15px] p-2.5 "
        >
          <div>
            <input
              type="email"
              placeholder="Enter email..."
              className="mt-1 block w-full px-4 py-2  outline-none border border-[#EA7C69] rounded-[10px] !p-1.5 placeholder:!text-[#E0E6E9] text-[#E0E6E9]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="relative">
              <input
                placeholder="Enter password..."
                type={showPassword ? "text" : "password"}
                className="mt-1 block w-full px-4 py-2  outline-none border border-[#EA7C69] rounded-[10px] !p-1.5 placeholder:!text-[#E0E6E9] text-[#E0E6E9]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#EA7C69] hover:bg-[#ea7c69a6] text-white font-semibold !p-2 rounded-xl transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
