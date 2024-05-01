export const Persons = ({ filter, persons }) => {
  const personsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );
  const names = () =>
    personsToShow.map((person) => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ));
  return <>{names()}</>;
};
