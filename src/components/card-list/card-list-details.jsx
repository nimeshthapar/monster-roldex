const CardListDetails = ({ id, name, email }) => {
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
};

export default CardListDetails;
