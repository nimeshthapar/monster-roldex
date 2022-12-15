import { Component } from 'react';
import CardListDetails from './card-list-details';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<ul className="card-lists">
				{monsters.map((m) => (
					<CardListDetails name={m.name} id={m.id} email={m.email} />
				))}
			</ul>
		);
	}
}

export default CardList;
