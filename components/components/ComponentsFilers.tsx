import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {};

function ComponentsFilers({}: Props) {
  let [activeTab, setActiveTab] = useState(mainFilters[0]);
  return (
    <div className="  font-medium text-white">
      {/* <div className=' flex items-center justify-between md:mx-5 pt-5  border-b-[1px] border-homeborder pb-3'>

                <div className={` bg-[#151617] p-1.5 rounded-xl border-2 border-[#1D1E20]`}>
                    {mainFilters.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab)}
                            className={`${activeTab.name === tab.name ? "" : "hover:text-white/60"
                                } relative text-xs rounded-lg px-5 py-2 shadow-2xl transition focus-visible:outline-2`}
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {activeTab.name === tab.name && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-[#232527] rounded-lg"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <div className=' relative z-10'>
                                {tab.name}
                            </div>
                        </button>
                    ))}
                </div>
                <button className=' w-24 md:hover:opacity-80 active:opacity-60 text-center px-4 py-2 border-[1px] rounded-lg text-xs flex justify-between items-center bg-[#F9FAFB09] border-[#2A2A2A]'>
                    <div>Filters</div>
                    <IoFilterSharp />
                </button>
            </div> */}
    </div>
  );
}

export default ComponentsFilers;

const mainFilters = [
  {
    name: "React JS",
  },
  {
    name: "React Native",
  },
  // {
  //     name: 'TrexUI',
  // },
];

// let tabs = [
//     { id: "world", label: "World" },
//     { id: "ny", label: "N.Y." },
//     { id: "business", label: "Business" },
//     { id: "arts", label: "Arts" },
//     { id: "science", label: "Science" },
// ];

// const [selected, setSelected] = React.useState(mainFilters[0])
{
  /* <div className={` bg-[#151617] p-1.5 rounded-xl border-2 border-[#1D1E20]`}>
                    {
                        mainFilters.map((item) => {
                            return (
                                <button key={item.name}
                                    onClick={() => setSelected(item)}
                                    className={`${selected.name == item.name ? "bg-[#232527]" : ""} text-xs rounded-lg px-5 py-2 shadow-2xl`}>
                                    {item.name}
                                </button>
                            )
                        })
                    }
                </div> */
}
