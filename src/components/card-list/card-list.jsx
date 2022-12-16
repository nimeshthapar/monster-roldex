import CardListDetails from './card-list-details';

const CardList = ({ monsters }) => {
	return (
		<ul className="card-lists">
			{monsters.map((m) => (
				<CardListDetails
					key={m.id}
					name={m.name}
					id={m.id}
					email={m.email}
				/>
			))}
		</ul>
	);
};

export default CardList;
