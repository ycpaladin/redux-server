import actionTypes from '../constants/actionTypes'
const { ADD } = actionTypes

export function addItem(name) {
    return {
        type: ADD,
        name
    }
}