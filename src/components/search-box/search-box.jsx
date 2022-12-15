import { Component } from 'react';

export default class SearchBox extends Component {
	render() {
		return (
			<input
				type={'search'}
				placeholder={'Search Monsters'}
				className="search-box"
				onChange={this.props.onSearch}
			/>
		);
	}
}
