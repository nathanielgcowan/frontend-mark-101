import { FETCH_BANDS, NEW_BAND } from './types';

export const newBand = bandData => dispatch => {
    fetch('http://localhost:3001/bands', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bandData)
    })
    .then(response => response.json())
    .then(singular => dispatch({
        type: NEW_BAND,
        payload: singular
    })
    );
};

export const fetchBands = () => dispatch => {
    fetch('http://localhost:3001/bands')
    .then(response => response.json())
    .then(plural => dispatch({ type: FETCH_BANDS, payload: plural }))
}