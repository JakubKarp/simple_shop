import ACTIONS from './actions';

const defaultState = {
  promo_filter: false,
  active_filter: false,
  isLoading: false,
  data: [],
  active_data: [],
  promo_data: [],
  all_data: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.FETCH_DATA_SUCCEEDED:
      return {
        ...state,
        data: action.payload.data,
        all_data: action.payload.data,
        isLoading: false,
      };
    case ACTIONS.FETCH_DATA_FAIL:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case ACTIONS.SET_ACTIVE_FILTER:
      return {
        ...state,
        data: state.promo_filter
          ? state.promo_data.filter((item) => item.active === true)
          : state.data.filter((item) => item.active === true),
        active_data: state.all_data.filter((item) => item.active === true),
        active_filter: true,
      };
    case ACTIONS.UNSET_ACTIVE_FILTER:
      return {
        ...state,
        data: state.promo_filter ? state.promo_data : state.all_data,
        active_filter: false,
      };
    case ACTIONS.SET_PROMO_FILTER:
      return {
        ...state,
        data: state.active_filter
          ? state.active_data.filter((item) => item.promo === true)
          : state.data.filter((item) => item.promo === true),
        promo_data: state.all_data.filter((item) => item.promo === true),
        promo_filter: true,
      };
    case ACTIONS.UNSET_PROMO_FILTER:
      return {
        ...state,
        data: state.active_filter ? state.active_data : state.all_data,
        promo_filter: false,
      };
    case ACTIONS.SET_SEARCH_DATA:
      return {
        ...state,
        data: action.payload.searchData,
      };
    case ACTIONS.UNSET_SEARCH_DATA:
      return {
        ...state,
        data: state.all_data,
      };
    default:
      return state;
  }
};

export default reducer;
