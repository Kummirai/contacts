import ContactCard from "../components/ContactCard";
import Message from "../components/Message";
import SelectCategory from "../components/SelectCategory";
import { Navigate } from "react-router-dom";

const Contacts = ({
  contacts,
  handleDeleteContact,
  handleEditContact,
  updateContact,
  message,
  contactCategory,
  handleSelectCategory,
  selectedValue,
  user,
}) => {
  // If user is NOT logged in → redirect
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  // If user is logged in → show content
  return (
    <>
      <SelectCategory
        contactCategory={contactCategory}
        handleSelectCategory={handleSelectCategory}
        selectedValue={selectedValue}
      />

      <main className="my-10 mt-0 gap-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {contacts?.map((contact) => (
          <ContactCard
            key={contact._id}
            contact={contact}
            handleDeleteContact={handleDeleteContact}
            handleEditContact={handleEditContact}
            updateContact={updateContact}
          />
        ))}
        <Message message={message} />
      </main>
    </>
  );
};

export default Contacts;
