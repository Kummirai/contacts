import ContactCard from "../components/contactCard";
import Message from "../components/Message";

const Contacts = ({
  contacts,
  handleDeleteContact,
  handleEditContact,
  updateContact,
  message,
}) => {
  return (
    <main className="my-10 gap-4  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
  );
};

export default Contacts;
