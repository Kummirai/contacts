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
  const [isUpdatingContact, setIsUpdatingContact] = useState(false);

  const navigate = useNavigate();

  const gotoAddContactPage = () => {
    navigate("/add-contact");
  };

  const gotoHomePage = () => {
    navigate("/");
    setIsUpdatingContact(false);
    resetFields();
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleImgUrl = (e) => {
    setImgUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      category: category,
      name: name,
      surname: surname,
      jobTitle: jobTitle,
      contact: contact,
      imgUrl: imgUrl,
    };

    const response = await fetch("http://localhost:3000/api/contacts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    });

    const data = await response.json();
    console.log(data);
    fetchContacts();
    navigate("/");
    resetFields();
  };

  const resetFields = () => {
    setCategory("");
    setName("");
    setSurname("");
    setImgUrl("");
    setContact("");
    setJobTitle("");
  };

  const handleEditContact = async (id) => {
    const response = await fetch(`http://localhost:3000/api/contacts/${id}`);
    const data = await response.json();
    const contactData = data.data;
    setCategory(contactData.category);
    setName(contactData.name);
    setSurname(contactData.surname);
    setImgUrl(contactData.imgUrl);
    setContact(contactData.contact);
    setJobTitle(contactData.jobTitle);
    setIsUpdatingContact(true);

    navigate("/add-contact");
  };

  const handleDeleteContact = async (id) => {
    const response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE",
    });
    const message = await response.json();
    fetchContacts();
    console.log(message);
  };

  const fetchContacts = async () => {
    const response = await fetch("http://localhost:3000/api/contacts");
    const data = await response.json();

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
        isUpdatingContact={isUpdatingContact}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Contacts
              contacts={contacts}
              handleEditContact={handleEditContact}
              handleDeleteContact={handleDeleteContact}
            />
          }
        />
        <Route
          path="/add-contact"
          element={
            <AddContact
              handleSurname={handleSurname}
              handleName={handleName}
              handleImgUrl={handleImgUrl}
              handleJobTitle={handleJobTitle}
              handleCategory={handleCategory}
              handleSubmit={handleSubmit}
              handleContact={handleContact}
              name={name}
              surname={surname}
              category={category}
              jobTitle={jobTitle}
              imgUrl={imgUrl}
              contact={contact}
              isUpdatingContact={isUpdatingContact}
              gotoHomePage={gotoHomePage}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
