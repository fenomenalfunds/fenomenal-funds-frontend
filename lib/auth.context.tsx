import React, {useReducer, useContext, useEffect} from "react";

export const AuthStateContext = React.createContext({})

const initialState = {
	id: "",
	username: "",
	photo: "",
	fullname: "",
	email: ""
}

const reducer = (state, action) => {
	switch (action.type) {
		case "setAuthDetails":
			return {
				id: action.payload.id,
				username: action.payload.username,
				photo: action.payload.photo,
				fullname: action.payload.fullname,
				email: action.payload.email
			}
		case "removeAuthDetails":
			return {
				id: initialState.id,
				username: initialState.username,
				photo: initialState.photo,
				fullname: initialState.fullname,
				email: initialState.email
			}
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

export const AuthProvider = ({ children }: any) => {
	let localState = null
	if (typeof localStorage !== "undefined" && localStorage.getItem("userInfo")) {
		localState = JSON.parse(localStorage.getItem("userInfo") || "")
	}
	const [state, dispatch] = useReducer(reducer, localState || initialState)

	if (typeof localStorage !== "undefined") {
		useEffect(() => {
			localStorage.setItem("userInfo", JSON.stringify(state))
		}, [state])
	}
	return <AuthStateContext.Provider value={[state, dispatch]}>
		{children}
	</AuthStateContext.Provider>
}

export const useAuth: any = () => useContext(AuthStateContext);