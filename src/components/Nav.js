import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const navigate = useNavigate();
	return (
		<nav>
			<button onClick={() => navigate('/about')}>About</button>
			<button onClick={() => navigate('/home')}>Home</button>
		</nav>
	);
};

export default Nav;
