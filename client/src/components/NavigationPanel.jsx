import { Button } from "./ui/button";
import { IoAdd } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { IoCubeOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    title: "Products",
    link: "/products",
    icon: <IoCubeOutline />,
  },
  {
    title: "Billing",
    link: "/billing",
    icon: <FiFileText />,
  },
  {
    title: "Vendors",
    link: "/vendors",
    icon: <LuUsers />,
  },
  {
    title: "Delivery",
    link: "/delivery",
    icon: <LuTruck />,
  },
];

function NavigationPanel() {
  return (
    <section className="py-[40px] relative lg:top-3 top-10 lg:block hidden  px-[23px] border-r w-fit h-full">
      <div>
        <Button>
          {" "}
          <IoAdd className="scale-150 mx-4" /> Quick add
        </Button>
        {links.map((item, i) => {
          return (
            <Link
              to={item.link}
              key={i}
              className="flex items-center justify-start cursor-pointer py-4 px-4 my-6 gap-2 text-[20px] transition-all hover:bg-[#EBE8FC] hover:text-primary rounded-md"
            >
              {item.icon}
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="w-[226px] h-[172px] bg-[#EBE8FC] mt-20 flex flex-col gap-2 rounded-[16px] justify-center items-center">
        <h4 className="w-[163px] h-[62px] text-center">Have some questions?</h4>
        <Button size="sm">look at the faqs</Button>
      </div>
    </section>
  );
}

export default NavigationPanel;
