import { ChangeEventHandler } from 'react';

interface ISearchBoxProps {
	onSearch: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ onSearch }: ISearchBoxProps) => {
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
