import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";


const Header = () => {

  return (
    <div className="container py-5 border w-full flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          className="w-[83.11px] h-[30.91px]"
          src="../../public/Metsenat.png"
          alt=""
        />
        <h1 className="text-2xl uppercase font-medium">metsenat</h1>
        <span className="bg-red-600 text-white rounded-md w-[48px] h-[22px] flex justify-center uppercase">
          club
        </span>
      </div>
      <div className="flex items-center gap-10">

        <div className="flex items-center gap-7">
          <Link to="/asosiy" className="text-base font-medium">
            Asosiy
          </Link>
          <Link to="/grantlar" className="text-base font-medium">
            Grantlar
          </Link>
          <Link to="/soliq-imtiyozlari" className="text-base font-medium">
            Soliq imtiyozlari
          </Link>
        </div>

      
      <div className="flex items-center gap-2">
        <LogIn />
        <div className="text-base font-medium"><SignInButton children="Kirish" mode="modal" forceRedirectUrl="/admin"/></div>
      </div>

      <div className="flex items-center px-7 py-2 border-[3px] font-medium cursor-pointer text-blue-600 border-blue-600 rounded-md">
        <p><SignUpButton children="Ro‘yxatdan o’tish" mode="modal" forceRedirectUrl="/admin"/></p>
      </div>
       
      </div>
    </div>
  );
};

export default Header;
