import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {

	const navigate = useNavigate();
	const handleBackBtn = () => {
		navigate(-1);
	};

    return (
		<>
			<h1>헤더입니다. <button onClick={handleBackBtn}> <h3>뒤로가기</h3> </button></h1>
		</>
    );
}

export default Header;