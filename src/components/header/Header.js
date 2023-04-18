import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewCard, sortByAscendingOrder } from '../../store/slices/cardSlice';
import "./header.css"
function Header() {
	const dispatch = useDispatch()
	return (
		<header className="headerContainer">
			<button onClick={() => dispatch(addNewCard())}>Add Card</button>
			<button onClick={() => dispatch(sortByAscendingOrder())}>Sort Cards</button>
		</header>
	);
}

export default Header;
