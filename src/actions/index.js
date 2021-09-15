import football from '../apis/football'
import { FETCH_TEAMS, LEAGUE_ID } from './types';

export const leagueId = (id = 106) => (dispatch) => {
    dispatch({
        type: LEAGUE_ID,
        payload: id
    })
}

export const fetchTeams = (id = 106) => async (dispatch, getState) => {
    if(!getState().leagueId || getState().leagueId.leagueId !== id) {
        const { data } = await football.get('/teams', { params: {
            league: id,
            season: 2021
        }});
    
        dispatch({
            type: FETCH_TEAMS,
            payload: data.response
        })
    }
}