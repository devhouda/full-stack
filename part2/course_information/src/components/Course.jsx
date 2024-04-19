const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
    </>
  );
};
const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </>
  );
};
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Course;
