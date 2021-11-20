import { FETCH_BANDS, NEW_BAND, REMOVE_BAND, UPDATE_BAND } from '../actions/types';

const initialState = {
    bands: []
};
// object with a property that refers to an array

function bandsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BANDS:
            console.log(action.payload);
            const listofbands = action.payload;
            return { ...state, bands: listofbands };
        case NEW_BAND:
            let thelist = state.bands;
            thelist.push(action.payload)
            return { ...state, bands: thelist }

        case REMOVE_BAND:
            const filteredlist = state.bands.filter(e=>{
                return e.id !== action.payload.id
            })
            return { ...state, bands: filteredlist }
        case UPDATE_BAND:
            //filter out the old
            let updatedlist = state.bands.filter(e=>{
                return e.id !== action.payload.id
            })
            //add in the new
            updatedlist.push(action.payload)
            //return updated state
            return { ...state, bands:updatedlist}

        default:
            return state;
    }
}

export default  bandsReducer;