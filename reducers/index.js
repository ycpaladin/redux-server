import actionTypes from '../constants/actionTypes'
const { ADD } = actionTypes

export default function index(state = [{ name: 'kevin' }, { name: 'lxy' }, { name: 'ccw' }], action) {
    switch (action.type) {
        case ADD:
            return state.push({ name: action.name })
        default:
            return state;
    }
}