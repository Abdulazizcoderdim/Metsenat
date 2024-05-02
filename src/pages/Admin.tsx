import { UserButton, SignOutButton } from "@clerk/clerk-react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Filter,
  LogOut,
  Search,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const data = [
  {
    number: 1,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "blue",
  },
  {
    number: 2,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "yellow",
  },
  {
    number: 3,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "green",
  },
  {
    number: 4,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "gray",
  },
  {
    number: 5,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "yellow",
  },
  {
    number: 6,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "gray",
  },
  {
    number: 7,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "blue",
  },
  {
    number: 8,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "blue",
  },
  {
    number: 9,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "green",
  },
  {
    number: 10,
    fish: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sum: "30 000 000",
    oldSum: "0",
    date: "15.01.2021",
    holat: "Yangi",
    colorHolati: "yellow",
  },
];

const Admin = () => {
  return (
    <>
      <div className="container py-5 border-b-2 w-full flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <img
            className="w-[83.11px] h-[30.91px]"
            src="../../public/Metsenat.png"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-2xl uppercase font-bold">metsenat</h1>
            <p className="-mt-2 text-green-600 uppercase text-base font-semibold">
              pro
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-gray-100  text-3xl flex items-center justify-center p-1 rounded-lg">
            <UserButton showName={true} />
          </div>

          <div className="cursor-pointer">
            <SignOutButton redirectUrl="/" children={<LogOut />} />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-gray-50 w-full">
        <div className="container py-10 flex justify-between">
          <div className="flex items-center h-[40px] w-[579px]">
            <NavLink
              to="/dashboard"
              className="text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-200 h-full w-full font-medium uppercase border-[2px] border-r-0 flex justify-center items-center border-blue-600 rounded-r-none rounded-l-lg"
            >
              dashboard
            </NavLink>
            <NavLink
              to="/admin"
              className="text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-200 h-full w-full font-medium uppercase border-[2px] flex justify-center items-center border-blue-600"
            >
              homiylar
            </NavLink>
            <NavLink
              to="/talabalar"
              className="text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-200 h-full w-full font-medium uppercase border-[2px] border-l-0 flex justify-center items-center border-blue-600 rounded-r-lg rounded-l-none"
            >
              talabalar
            </NavLink>
          </div>
          <div className="flex gap-x-4">
            <div className="w-[280px] px-4 rounded-md flex items-center bg-gray-200 gap-2 h-[40px]">
              <Search className="text-gray-400" />
              <input
                type="text"
                className="w-full bg-transparent border-none outline-none h-full"
                placeholder="Izlash"
              />
            </div>
            <div className="w-[123px] gap-x-2 rounded-md cursor-pointer hover:bg-blue-300 transition-all duration-300 h-[40px] flex items-center justify-center bg-blue-200 text-blue-400">
              <span>
                <Filter />
              </span>
              <p className="font-medium">Filter</p>
            </div>
          </div>
        </div>
      </div>
      {/* end content */}

      {/* section */}
      <div className="container py-10 bg-gray-100 w-full flex flex-col gap-y-5">
        <table className="flex flex-col gap-4 w-full">
          <tr className="flex justify-between text-gray-400 font-thin uppercase px-3">
            <th>#</th>
            <th className="w-[222px]">f.i.sh.</th>
            <th className="w-[224px]">Tel.Raqami</th>
            <th className="w-[211px]">Homiylik summasi</th>
            <th>Sarflangan summa</th>
            <th>Sana</th>
            <th>Holati</th>
            <th>Amallar</th>
          </tr>

          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-white rounded-lg h-[68px] px-3 flex items-center  justify-between font-medium"
            >
              <td>{item.number}</td>
              <td className="w-[222px]">{item.fish}</td>
              <td className="w-[224px]">{item.phone}</td>
              <td className="w-[211px]">
                {item.sum} <span className="text-gray-400">UZS</span>
              </td>
              <td>
                {item.oldSum} <span className="text-gray-400">UZS</span>
              </td>
              <td>{item.date}</td>
              <td
                className={`text-${
                  index == item.number - 1 && item.colorHolati
                }-600`}
              >
                {item.holat}
              </td>
              <td className="text-blue-600">
                <Eye />
              </td>
            </tr>
          ))}
        </table>

        {/* number  */}
        <div className="flex justify-between w-full">
          <div>
            <p className="text-[15px] font-normal">
              59 tadan 1-10 ko‘rsatilmoqda
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-normal">Ko‘rsatish</p>
              <div className="flex w-[54px] h-[32px] bg-white items-center justify-center border border-gray-400 rounded-md gap-1 cursor-pointer">
                <span>10</span> <ChevronDown className="w-[12px] h-[12px]" />
              </div>
            </div>

            {/* slider */}
            <div className="bg-transparent h-[32px] w-[272px] gap-3 flex justify-center items-center">
              <div className="w-[32px] bg-white cursor-pointer rounded-md h-full flex items-center justify-center border border-gray-400">
                <ChevronLeft />
              </div>

              {Array.from({ length: 5 }, (_, i) => (
                <div className="w-[32px] font-bold cursor-pointer bg-white rounded-md h-full flex items-center justify-center border border-gray-400">
                  {i + 1 && i + 1 == 3 ? (
                    <span className="text-black font-bold">...</span>
                  ) : <span>{i + 1}</span> && i + 1 == 5 ? (
                    <span className="text-black font-bold">10</span>
                  ) : <span>{i + 1}</span> && i + 1 == 4 ? (
                    <span className="text-black font-bold">9</span>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
              ))}
              <div className="w-[32px] bg-white cursor-pointer rounded-md h-full flex items-center justify-center border border-gray-400">
                <ChevronRight />
              </div>
            </div>
            {/* end slider */}
          </div>
        </div>
      </div>
      {/* end section */}
    </>
  );
};

export default Admin;
