import Auth from "./Auth";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex items-center justify-center h-screen">
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;
