import Login from "./components/Login";
import { Dashboard } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
