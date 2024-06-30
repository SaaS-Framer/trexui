import React from "react";

type Props = {
  text?: string;
  small?: boolean;
  variation?: "primary" | "secondary" | "tertiary";
  handlePress?: () => void;
};

function Button({
  text = "Button",
  small = false,
  variation = "primary",
  handlePress = () => {},
}: Props) {
  return (
    <button
      onClick={handlePress}
      className={`flex items-center justify-center bg-gradient-to-r
        ${
          variation === "primary"
            ? "from-pink-500 via-purple-500 to-indigo-500"
            : variation === "secondary"
            ? " bg-primary"
            : " border-2 border-pink-600 bg-white "
        }
        } w-fit transform rounded-3xl leading-5
        text-[#fefefe] transition duration-200  active:scale-90  ${
          small ? "px-5 py-1.5 text-xs font-semibold" : "text-md px-8 py-2.5"
        }
        `}
    >
      {text}
    </button>
  );
}

export default Button;
