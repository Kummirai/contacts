import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/add-contact");
  };

  return (
    <main className="max-w-6xl mx-auto my-5">
      <Header handleButtonClick={handleButtonClick} />
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/add-contact" element={<AddContact />} />
      </Routes>
    </main>
  );
}

export default App;
