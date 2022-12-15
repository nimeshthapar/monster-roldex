import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchInput: '',
		};
	}

	componentDidMount() {
		const fetchData = async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const data = await response.json();
			this.setState(() => ({ monsters: data }));
		};

		fetchData();
	}

	onSearchChangeHandler = (e) => {
		this.setState(() => ({
			searchInput: e.target.value,
		}));
	};

	render() {
		const { monsters, searchInput } = this.state;
		const { onSearchChangeHandler } = this;

		const filteredList = monsters.filter((s) =>
			s.name.toLowerCase().includes(searchInput.toLowerCase())
		);

		return (
			<div className="App">
				<h1 className="app-title">Monster Rolodex</h1>
				<SearchBox onSearch={onSearchChangeHandler} />
				<CardList monsters={filteredList} />
			</div>
		);
	}
}

export default App;
