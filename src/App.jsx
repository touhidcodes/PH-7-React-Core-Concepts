import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const newStyle = {
	color: "red",
	backgroundColor: "aqua",
};

const nayoks = ["Sakib", "Rakib", "Moksud", "Bulbul"];

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			{nayoks.map((nayok) => (
				<Person name={nayok}></Person>
			))}
			<Person name='Sakib al Hasan' profession='Cricket'></Person>
			<Person name='Sakib Khan' profession='Actor'></Person>
			<Friend name='Sakib' profession='Student'></Friend>
			<Friend name='Rahim' profession='Freelancer'></Friend>
		</div>
	);
}

function Person(props) {
	return (
		<div className='person'>
			<h1>Name: {props.name}</h1>
			<p>Profession: {props.profession}</p>
		</div>
	);
}

function Friend(props) {
	return (
		<div className='person'>
			<h1>Friend: {props.name}</h1>
			<p>Profession: {props.profession}</p>
		</div>
	);
}

export default App;
