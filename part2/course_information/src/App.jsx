const Total = ({ course }) => {
  let sum = 0;
  let sum_arr = [];
  let total = course.parts.reduce((s, p) => {
    sum_arr.push(p.exercises);
    return sum_arr;
  }, 0);
  total.forEach((el) => (sum += el));
  return <p>total of {sum} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
    </>
  );
};
const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
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

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
      <Total course={course} />
    </>
  );
};

export default App;
