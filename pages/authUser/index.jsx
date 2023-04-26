import { useSession } from "next-auth/react";
import React from "react";

const AuthUser = () => {
  // const { data: session } = useSession();
  // console.log(session?.user);
  return (
    <div>
      <h1>Logged In</h1>
    </div>
  );
};

export default AuthUser;
