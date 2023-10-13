import { ACTION_CLICKED_FAVORITE } from '../actions/favorite';

export const initialState = {
  favoriteList: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CLICKED_FAVORITE:
      // favoriteList에 값이 존재한다면
      const hasItem = state.favoriteList.filter((item) => item === action.clicked).length > 0;

      if (hasItem) {
        return {
          ...state,
          favoriteList: state.favoriteList.filter((item) => item !== action.clicked),
        };
      }
      return {
        ...state,
        favoriteList: state.favoriteList.concat([action.clicked]),
      };
  }
  return {
    ...state,
  };
};
