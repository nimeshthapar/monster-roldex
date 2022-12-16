import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
	const [monstersState, setMonstersState] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const data = await response.json();
			setMonstersState(data);
		};

		fetchData();
	}, []);

	const onSearchChangeHandler = (e) => {
		setSearchInput(() => e.target.value);
	};

	const filteredList = monstersState.filter((s) =>
		s.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<div className="App">
			<h1 className="app-title">Monster Rolodex</h1>
			<SearchBox onSearch={onSearchChangeHandler} />
			<CardList monsters={filteredList} />
		</div>
	);
};

export default App;
