import { useSession } from "next-auth/react";
import React from "react";

const AuthUser = () => {
  const { data: session } = useSession();
  // console.log(session?.user);
  return (
    <div>
      <h1>Logged In</h1>
      {session?.user ? (
        <>
          <h1>{session.user.name}</h1>
          <button>Sign Out</button>
        </>
      ) : (
        <button>Sign In</button>
      )}
    </div>
  );
};

export default AuthUser;
