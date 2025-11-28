import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const navigate = useNavigate();

  const gotoAddContactPage = () => {
    navigate("/add-contact");
  };

  const gotoHomePage = () => {
    navigate("/");
  };

  const handleCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    console.log(e.target.value);
    setSurname(e.target.value);
  };

  const handleJobTitle = (e) => {
    console.log(e.target.value);
    setJobTitle(e.target.value);
  };

  const handleImgUrl = (e) => {
    console.log(e.target.value);
    setImgUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <main className="max-w-6xl mx-auto  body-background">
      <Header
        gotoAddContactPage={gotoAddContactPage}
        gotoHomePage={gotoHomePage}
      />
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route
          path="/add-contact"
          element={
            <AddContact
              handleSurname={handleSurname}
              handleName={handleName}
              handleImgUrl={handleImgUrl}
              handleJobTitle={handleJobTitle}
              handleCategory={handleCategory}
              handlleSubmit={handleSubmit}
              name={name}
              surname={surname}
              category={category}
              jobTitle={jobTitle}
              imgUrl={imgUrl}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
