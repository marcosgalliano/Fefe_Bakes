import { SET_FILTERS } from "../actionTypes";

export const setFilters = (filters) => ({
    type: SET_FILTERS,
    payload: filters,
});