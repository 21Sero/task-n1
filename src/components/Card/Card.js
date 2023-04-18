import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCardItem } from '../../store/slices/cardSlice';
import "./card.css"
function Card({ number, id }) {
	const dispatch = useDispatch()
	return (
		<div className="card">
			<span className="delete-icon fa fa-trash" onClick={() => dispatch(deleteCardItem(id))}> </span>
			<p>{number}</p>
		</div>
	);
}

export default Card;
