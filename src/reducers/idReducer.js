import { LEAGUE_ID } from '../actions/types'

export default (state = null, action) => {
    switch(action.type) {
        case LEAGUE_ID:
            return { ...state, leagueId: action.payload }
        default:
            return state
    }
}