export const PersonForm = ({
  newName,
  newNumber,
  persons,
  setNewName,
  setNewNumber,
  setPersons,
  handleNameChange,
  handleNumberChange,
}) => {
  const addNewName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    console.log(nameObject);
    const all_names = persons.map((person) => person.name);
    if (all_names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };
  return (
    <form onSubmit={addNewName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
