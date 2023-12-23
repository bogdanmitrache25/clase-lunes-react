import React, { useEffect, useState } from "react";
import "./Apis.css";

export const UsersApp = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetch = () => {
    fetchUsers();
  };

  // Use effect es un hook que hace que solo se llame una vez al componente.
  // Con el botón no haría falta usar el use effect. Lo comento, pero si quitara el boton deberiamos utilizarlo .
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

  return (
    <>
      <h1 className="usuarios">Usuarios</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            Nombre : {user.name} <br /> Email : {user.email} <br /> Dirección :{" "}
            {user.address.street} {user.address.suite} <br /> Ciudad :{" "}
            {user.address.city} <br />
            Teléfono: {user.phone} <hr />
          </li>
        ))}
      </ol>
      <button onClick={handleFetch}>Llamar a la Api</button>
    </>
  );
};
