import ContactCard from "../components/contactCard";

const Contacts = ({}) => {
  const contacts = [
    {
      id: 1,
      name: "Milton",
      surname: "Kumirai",
      jobTitle: "Web Developer",
      category: "Business",
      contactDetail: "ajaxmilton@hotmail.com",
    },
  ];

  return (
    <main className="my-15 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </main>
  );
};

export default Contacts;
