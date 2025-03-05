import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">Authentication</h2>
      <label className="flex items-center justify-center gap-2 mt-4">
        <input type="checkbox" onChange={toggleAuth} />
        I'm not a robot
      </label>
      <p className="mt-2">
        {isAuthenticated ? "✅ You are authenticated!" : "❌ You are not authenticated!"}
      </p>
    </div>
  );
};

export default Auth;
