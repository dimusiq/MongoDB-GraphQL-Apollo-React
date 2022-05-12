import jwtDecode from 'jwt-decode';
import { useReducer, createContext } from 'react';

const initialState = {
	user: null,
};

if (localStorage.getItem('generateToken')) {
  const decodedToken = jwtDecode(localStorage.getItem('generateToken'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('generateToken');
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
	user: null,
	login: (userData) => {},
	logout: () => {},
});

function authReducer(state, action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload,
			};
		case 'LOGOUT':
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
}

function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = (userData) => {
		localStorage.setItem('generateToken', userData.token);
		dispatch({
			type: 'LOGIN',
			payload: userData,
		});
	};

	function logout() {
		localStorage.removeItem('generateToken');
		dispatch({ type: 'LOGOUT' });
	}

	return (
		<AuthContext.Provider
			value={{ user: state.user, login, logout }}
			{...props}
		/>
	);
}

export { AuthContext, AuthProvider };
