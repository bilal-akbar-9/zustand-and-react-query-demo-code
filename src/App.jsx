import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCount from './hooks/useCount'

function App() {
  const { dislikeCount, likeCount, incrementDislike ,increment } = useCount();
  return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={incrementDislike}>dislikeCount is: {dislikeCount}</button>
				<button onClick={increment}>Like is: {likeCount}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App
