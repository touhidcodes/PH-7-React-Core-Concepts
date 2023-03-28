import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const newStyle = {
	color: "red",
	backgroundColor: "aqua",
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h2 style={newStyle}>Hi i am touhidcodes</h2>
			<h2 className="new">Hi i am touhidcodes</h2>
			<h1>Bite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
