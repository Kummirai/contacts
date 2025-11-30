import ContactCard from "../components/ContactCard";
import Message from "../components/Message";
import SelectCategory from "../components/SelectCategory";

const Contacts = ({
  contacts,
  handleDeleteContact,
  handleEditContact,
  updateContact,
  message,
  contactCategory,
  handleSelectCategory,
  selectedValue,
}) => {
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
