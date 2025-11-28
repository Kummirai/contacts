import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);

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

  const handleContact = (e) => {
    console.log(e.target.value);
    setContact(e.target.value);
  };

  const handleImgUrl = (e) => {
    console.log(e.target.value);
    setImgUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchContacts = async () => {
    const response = await fetch("http://localhost:3000/api/contacts");
    const data = await response.json();
    console.log(data.data);
    setContacts(data.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <main className="max-w-6xl mx-auto  body-background">
      <Header
        gotoAddContactPage={gotoAddContactPage}
        gotoHomePage={gotoHomePage}
      />
      <Routes>
        <Route path="/" element={<Contacts contacts={contacts} />} />
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
              handleContact={handleContact}
              name={name}
              surname={surname}
              category={category}
              jobTitle={jobTitle}
              imgUrl={imgUrl}
              contact={contact}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
