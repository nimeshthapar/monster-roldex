import CardListDetails from './card-list-details';
import { Monster } from '../../App';

const CardList = ({ monsters }: { monsters: Monster[] }) => {
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
