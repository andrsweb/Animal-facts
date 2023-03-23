import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/hero/Hero'

const App = () => {

	return (
		<div className="Wrapper">
			<Header text="Animals facts" />
			<main>
				<Hero />
			</main>
		</div>
	)
}

export default App
