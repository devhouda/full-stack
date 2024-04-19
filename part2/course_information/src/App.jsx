import Course from "./components/Course";

const Total = ({ course }) => {
  let sum = 0;
  let sum_arr = [];
  let total = course.parts.reduce((s, p) => {
    sum_arr.push(p.exercises);
    return sum_arr;
  }, 0);
  total.forEach((el) => (sum += el));
  return <h3>total of {sum} exercises</h3>;
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
          <Total course={course} />
        </div>
      ))}
    </>
  );
};

export default App;
