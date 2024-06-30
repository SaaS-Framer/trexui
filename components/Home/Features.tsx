import React from "react";
import { TbMoonFilled } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { SiReactos } from "react-icons/si";

type Props = {};

function Features({}: Props) {
  return (
    <div className="  container mx-auto flex flex-col items-center pb-10 md:pb-16 lg:flex-row">
      <div className=" grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => {
          return (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;

const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className=" w-full rounded-xl bg-white/[0.05] p-3 text-white backdrop-blur-xl">
      <div className=" flex items-center gap-2.5">
        <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500/80 via-purple-500/80 to-indigo-500/80 text-sm">
          {icon}
        </div>
        <div className=" font-semibold">{title}</div>
      </div>
      <div className=" px-1 py-3 text-sm text-gray-300">{description}</div>
    </div>
  );
};

const data = [
  {
    title: "Intuitive UI",
    description:
      "We have wide range of amazing UI components, such as buttons, forms, pages, and more.",
    icon: <SiReactos size={14} />,
  },
  {
    title: "Easy Customization",
    description:
      "Easily customize the components using our editor and make them look like your own.",
    icon: <IoIosSettings size={20} />,
  },
  {
    title: "Responsive",
    description:
      "Our components are responsive and work on all devices, from mobile to desktop.",
    icon: <FaMobile size={14} />,
  },
  {
    title: "Dark Mode",
    description:
      "We have dark mode support out of the box, so you don't have to worry about it.",
    icon: <TbMoonFilled size={16} />,
  },
];
