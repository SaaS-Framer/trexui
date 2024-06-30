import React, { useEffect } from "react";
import { Sandpack, SandpackCodeEditor } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { IoCopyOutline, IoCodeWorking, IoEyeOutline } from "react-icons/io5";
import { RiRestartLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoDesktopOutline } from "react-icons/io5";
import { IoMdLaptop } from "react-icons/io";
import { IoMdTabletPortrait } from "react-icons/io";
import { BiMobile } from "react-icons/bi";
import { MdLaptop } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import useDebounce from "../hooks/useDebounce";
import { codeColorReplacer } from "@/util/codeColorReplacer";
import Loading from "../Ui/Loading";
import { useToast } from "@/context/ToastProvider";
import Toast from "../Ui/Toast";

type Props = {
  initCode: string;
  editorHeight?: number;
  colors?: unknown;
};

function ComponentsViewer({ initCode, editorHeight = 600, colors }: Props) {
  const [code, setCode] = React.useState(codeColorReplacer(initCode, colors));
  const [showCode, setShowCode] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState("100%");
  const [loading, setLoading] = React.useState(true);
  const { handleOpenToast } = useToast();
  const [stateColors, setStateColors] = React.useState(
    JSON.parse(colors as any)
  );
  const lines = (String(code).match(/\n/g) || "").length + 1;
  const finalColors = useDebounce(stateColors, 50);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setCode(codeColorReplacer(initCode, JSON.stringify(finalColors, null, 2)));
  }, [finalColors]);

  const handleReset = () => {
    handleOpenToast(<Toast text="Code Reset to Default" />)
    setCode(initCode);
    setShowCode(false);
    deviceSize("100%");
    setStateColors(JSON.parse(colors as any));
  };
  const handleCopy = () => {
    handleOpenToast(<Toast text="Code Copied to Clipboard" />)
    navigator.clipboard.writeText(code);
  }
  const deviceSize = (val: string) => {
    setScreenSize(val);
  };
  const handlePreview = () => {
    setShowCode(!showCode);
  };
  const colorArray = Object.entries(stateColors);
  return (
    <div className=" w-full overflow-hidden ">
      <div className=" relative rounded-t-xl bg-[#111] ">
        <div className=" flex h-20 flex-col items-center justify-between px-3 text-xs md:h-10 md:flex-row">
          {colorArray.length > 0 && (
            <div className=" flex items-center gap-2 py-2 ">
              <div>Choose colors:</div>
              {colorArray.map(([key, value]) => {
                return (
                  <div key={key}>
                    <label id="color" className=" hidden">
                      {value as any}
                    </label>
                    <input
                      className=" rounded-full border-[1px] border-[#ffffff3f]"
                      aria-labelledby="color"
                      type="color"
                      value={value as any}
                      onChange={(e) => {
                        setStateColors((prev: any) => {
                          return {
                            ...prev,
                            [key]: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className=" hidden items-center gap-1 py-2 md:flex">
            <button
              aria-label="Desktop"
              className=" flex h-7 w-7 items-center justify-center rounded-full hover:bg-homebackground"
              onClick={() => deviceSize("100%")}
            >
              <IoDesktopOutline size={17} />
            </button>
            <button
              aria-label="Laptop"
              className=" flex h-7 w-7 items-center justify-center rounded-full hover:bg-homebackground"
              onClick={() => deviceSize("1280px")}
            >
              <MdLaptop size={17} />
            </button>
            <button
              aria-label="Tablet"
              className=" flex h-7 w-7 items-center justify-center rounded-full hover:bg-homebackground"
              onClick={() => deviceSize("390px")}
            >
              <AiOutlineMobile size={15} />
            </button>
          </div>
          <div className=" flex items-center gap-3 py-2 ">
            {/* <button className=' w-7 h-7 rounded-full hover:bg-homebackground flex items-center justify-center' >
                            <FiEdit size={16} />
                        </button> */}
            <button
              aria-label="Preview Code Toggle"
              className=" flex h-7 w-7 items-center justify-center rounded-full hover:bg-homebackground"
              onClick={handlePreview}
            >
              {!showCode ? (
                <IoCodeWorking size={18} />
              ) : (
                <IoEyeOutline size={18} />
              )}
            </button>
            <button
              aria-label="Reset Code"
              className=" flex h-7 w-7 items-center justify-center rounded-full hover:bg-homebackground"
              onClick={handleReset}
            >
              <RiRestartLine size={15} />
            </button>
            <button
              aria-label="Copy Code"
              className=" flex h-7 w-7 items-center justify-center rounded-full hover:bg-homebackground"
              onClick={handleCopy}
            >
              <IoCopyOutline
                size={15}
              />
            </button>
          </div>
        </div>
        {loading && (
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              backgroundColor: "#111",
              zIndex: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </div>
        )}
        <SandpackProvider
          theme={{
            ...atomDark,
            colors: {
              surface1: "#111",
              surface2: "#111",
              surface3: "#111",
            },
          }}
          template="react"
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
          }}
          files={{
            "/App.js": code,
          }}
        >
          <SandpackLayout
            style={{
              width: "100%",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: showCode ? "block" : "none",
                width: "100%",
              }}
            >
              <SandpackCodeEditor
                readOnly={true}
                showReadOnly
                style={{
                  flex: 1,
                  height: editorHeight,
                }}
              />
            </div>
            <div
              style={{
                display: !showCode ? "block" : "none",
                width: screenSize,
                height: "100%",
              }}
            >
              <SandpackPreview
                showRefreshButton={false}
                showOpenInCodeSandbox={false}
                style={{
                  flex: 1,
                  height: editorHeight,
                  borderRadius: 100,
                }}
              />
            </div>
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}

export default ComponentsViewer;
