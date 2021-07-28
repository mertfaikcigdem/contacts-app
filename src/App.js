import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Craig",
      phone_number: "+5546871",
    },
    {
      fullname: "Dawson",
      phone_number: "+9854567",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="App">
      <div className="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContacts={setContacts} contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
