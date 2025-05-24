// src/App.jsx
import { AuthProvider } from "./auth/authProvider";
import Router from "./routes/Router"; // halaman-halaman
import AxiosInterceptor from "./api/axiosInterceptor";


const App = () => {
  return (
    <AuthProvider>
      <AxiosInterceptor />
      <Router />
    </AuthProvider>
  );
};

export default App;
