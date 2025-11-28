import ContactCard from "../components/contactCard";

const Contacts = ({}) => {
  const contacts = [
    {
      id: 1,
      name: "Kimberly",
      surname: "Jones",
      jobTitle: "Business Admin",
      category: "Business",
      contactDetail: "kimberely@hotmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1688350839154-1a131bccd78a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Kyle",
      surname: "Kumar",
      jobTitle: "Graphic Designer",
      category: "Marketing",
      contactDetail: "kyle@hotmail.com",
      image:
        "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Keith",
      surname: "Smith",
      jobTitle: "Web Developer",
      category: "Software Development",
      contactDetail: "+27 84 212 0009",
      image:
        "https://plus.unsplash.com/premium_photo-1689570350306-3aa2bc42189e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Kate",
      surname: "Stones",
      jobTitle: "Accountant",
      category: "Banking",
      contactDetail: "kate@yahoo.com",
      image:
        "https://images.unsplash.com/photo-1699899657680-421c2c2d5064?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="my-10 gap-4  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </main>
  );
};

export default Contacts;
