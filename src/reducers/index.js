import store from '../store'
const initialState={
	gifData:{},
	isFetching:false,
	isError:false
};
const asyncReducer = (state=initialState, action) => {
	switch(action.type){
		case 'FETCH_GIF':
			return Object.assign({},state,{
				isFetching:true,
				gifData:{},
				isError:false 
			}
			)
		case 'FETCHED_GIF':
			return Object.assign({},state,{
				gifData: action.data,
				isFetching:false,
			 	isError:false 
			})
		case 'RECEIVE_ERROR':
			return Object.assign({},state,{
				isError:true,
				isFetching:false
			})
		default:
			return state
	}
}
export default asyncReducer 
