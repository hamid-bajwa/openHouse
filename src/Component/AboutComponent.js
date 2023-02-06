import React, { useState, useEffect } from "react";
import "./css/About.css";
function About() {
  const [user, setUser] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .then((error) => setErrors(error));
  }, []);

  if (errors) {
    return <div>An error occured:{errors.message} </div>;
  }

  return (
    <div className="About">
      <h1>About us</h1>

      {user.length ? (
        <ul>
          {user.map(user=> (
            <li key={user.id}> {user.id}</li>
          ))}
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default About;
