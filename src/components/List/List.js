import { useState } from "react";
import "../Style/style.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <div>
        <input
          placeholder="Filter contact"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div>
        <ul className="list">
          {filtered.map((contact, i) => (
            <li key={i}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>
          ))}
        </ul>
        <p>Total Contacts ({filtered.length})</p>
      </div>
    </div>
  );
}

export default List;
