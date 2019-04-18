import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


export const getCharacters = () => dispatch => {
	dispatch({type: FETCHING});
	
	axios.get("https://swapi.co/api/people")
		.then(res => {
				console.log("Here is the res: ", res);
				dispatch({
					type: SUCCESS,
					payload: res.data.results
				});
		})
		.catch(err => dispatch({
			type: FAILURE,
			payload: "Error! The data could not be fetched from the API."
		}))
}
