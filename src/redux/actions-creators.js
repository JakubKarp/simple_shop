import ACTIONS from './actions';
import { getProducts } from '../service/service';

export const fetchDataStarted = () => {
  return {
    type: ACTIONS.FETCH_DATA_START,
  };
};

export const fetchDataSucceeded = (data) => {
  return {
    type: ACTIONS.FETCH_DATA_SUCCEEDED,
    payload: {
      data,
    },
  };
};

export const fetchDataFailed = (data) => {
  return {
    type: ACTIONS.FETCH_DATA_FAIL,
    payload: data,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataStarted());

    const data = await getProducts();
    if (data?.items?.length > 0) {
      dispatch(fetchDataSucceeded(data.items));
    } else {
      dispatch(fetchDataFailed(data));
    }
  };
};

export const setActiveFilter = () => {
  return {
    type: ACTIONS.SET_ACTIVE_FILTER,
  };
};

export const unsetActiveFilter = () => {
  return {
    type: ACTIONS.UNSET_ACTIVE_FILTER,
  };
};

export const setPromoFilter = () => {
  return {
    type: ACTIONS.SET_PROMO_FILTER,
  };
};

export const unsetPromoFilter = () => {
  return {
    type: ACTIONS.UNSET_PROMO_FILTER,
  };
};

export const setSearchData = (searchData) => {
  return {
    type: ACTIONS.SET_SEARCH_DATA,
    payload: {
      searchData,
    },
  };
};

export const unsetSearchData = () => {
  return {
    type: ACTIONS.UNSET_SEARCH_DATA,
  };
};
