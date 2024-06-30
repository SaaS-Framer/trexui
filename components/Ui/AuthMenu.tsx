import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "./Button";
import { IoLogOut } from "react-icons/io5";

type Props = {};

function AuthMenu({}: Props) {
  const { data: session, status } = useSession();
  return (
    <>
      {session?.user?.email && session?.user?.image ? (
        <div className=" flex gap-3">
          <img
            alt={session?.user?.email}
            src={session?.user?.image}
            width={30}
            height={30}
            className="rounded-full"
          />
          {/* Logout button */}
          <button
            aria-label="Logout"
            onClick={() => {
              signOut();
            }}
          >
            <IoLogOut size={30} />
          </button>
        </div>
      ) : (
        <Button
          text="Login"
          small
          variation="secondary"
          handlePress={() => signIn("google")}
        />
      )}
    </>
  );
}

export default AuthMenu;
