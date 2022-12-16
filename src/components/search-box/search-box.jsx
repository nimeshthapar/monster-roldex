const SearchBox = ({ onSearch }) => {
	return (
		<input
			type={'search'}
			placeholder={'Search Monsters'}
			className="search-box"
			onChange={onSearch}
		/>
	);
};

export default SearchBox;
