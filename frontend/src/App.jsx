import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);
  const [isUpdatingContact, setIsUpdatingContact] = useState(false);
  const [contactId, setContactId] = useState("");
  const [message, setMessage] = useState("");
  const [contactCategory, setContactCategory] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const location = useLocation();

  const navigate = useNavigate();
  const currentUrl = location.pathname;
  console.log(currentUrl);

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
    setMessage(data);
    fetchContacts();
    fectchCategories();
    setTimeout(() => {
      setMessage("");
      navigate("/");
      resetFields();
    }, 1000);
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
    setContactId(contactData._id);
    setIsUpdatingContact(true);

    navigate("/add-contact");
  };

  const submitEdit = async (id) => {
    const edittedContact = {
      category,
      name,
      surname,
      contact,
      jobTitle,
      imgUrl,
    };
    const response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edittedContact),
    });
    const data = await response.json();
    setMessage(data);
    fetchContacts();
    setTimeout(() => {
      setMessage("");
      navigate("/contacts");
      resetFields();
    }, 1000);
  };

  const handleDeleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setMessage(data);
      setTimeout(() => {
        setMessage("");
      }, 1000);
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const fectchCategories = async () => {
    const response = await fetch(
      "http://localhost:3000/api/contacts/categories",
    );
    const data = await response.json();
    setContactCategory(data.data);
  };

  const handleSelectCategory = async (event) => {
    const category = event.target.value;
    if (category === "All") {
      fetchContacts();
    } else {
      const response = await fetch(
        `http://localhost:3000/api/contacts/categories/${category}`,
      );
      const data = await response.json();
      setContacts(data.data);
    }
  };

  const fetchContacts = async () => {
    const response = await fetch("http://localhost:3000/api/contacts");
    const data = await response.json();

    setContacts(data.data);
  };

  useEffect(() => {
    fetchContacts();
    fectchCategories();
  }, []);

  return (
    <main
      className={
        currentUrl === "/"
          ? "w-full body-background h-full"
          : "max-w-6xl mx-auto  body-background h-full"
      }
    >
      <Header
        gotoAddContactPage={gotoAddContactPage}
        gotoHomePage={gotoHomePage}
        isUpdatingContact={isUpdatingContact}
        selectedValue={selectedValue}
        currentUrl={currentUrl}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={
            <Contacts
              contacts={contacts}
              handleEditContact={handleEditContact}
              handleDeleteContact={handleDeleteContact}
              message={message}
              contactCategory={contactCategory}
              handleSelectCategory={handleSelectCategory}
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
              contactId={contactId}
              isUpdatingContact={isUpdatingContact}
              gotoHomePage={gotoHomePage}
              submitEdit={submitEdit}
              message={message}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
