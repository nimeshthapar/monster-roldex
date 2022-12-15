import { Component } from 'react';

export default class CardListDetails extends Component {
	render() {
		const { id, name, email } = this.props;
		return (
			<li className="card-list" key={id}>
				<img
					src={`https://robohash.org/${id}?set=set2&size=180x180`}
					alt={name}
				/>
				<h2>{name}</h2>
				<p>{email}</p>
			</li>
		);
	}
}
