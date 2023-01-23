import React, { useState } from "react";

export default function Object1() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />

      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is -{name.firstNameName}</h2>
      <h2>Your first name is -{name.lastNameName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
