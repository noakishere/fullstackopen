import React from "react";

const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Content = ({
	part1,
	part2,
	part3,
	exercises1,
	exercises2,
	exercises3,
}) => {
	return (
		<>
			<Part part={part1} exercise={exercises1} />
			<Part part={part2} exercise={exercises2} />
			<Part part={part3} exercise={exercises3} />
		</>
	);
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
	return (
		<>
			<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
		</>
	);
};

const Part = ({ part, exercise }) => {
	return (
		<>
			<p>
				{part} {exercise}
			</p>
		</>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content
				part1={course.parts[0].name}
				part2={course.parts[1].name}
				part3={course.parts[2].name}
				exercises1={course.parts[0].exercises}
				exercises2={course.parts[1].exercises}
				exercises3={course.parts[2].exercises}
			/>
			<Total
				exercises1={course.parts[0].exercises}
				exercises2={course.parts[1].exercises}
				exercises3={course.parts[2].exercises}
			/>
		</div>
	);
};

export default App;
