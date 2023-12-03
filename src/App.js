import { useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  function addUser() {
    const trimmedName = name.trim();
    if (trimmedName !== "") {
      setUsers((prevUsers) => [...prevUsers, trimmedName]);
      setName("");
    }
  }
  function nameChange(e) {
    setName(e.target.value);
  }
  return (
    <div className="App">
      <h1>Kullanıcı Ekleyin</h1>
      <div>
        <input
          style={{ fontSize: "24px" }}
          placeholder="İsim ekleyin"
          onChange={nameChange}
          value={name}
        />
        <button style={{ fontSize: "24px" }} onClick={addUser}>
          Kullanıcı ekle
        </button>
      </div>
      <h2>{users ? users.length : 0} kullanıcı var </h2>
      <div>
        {users.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </div>
    </div>
  );
}
