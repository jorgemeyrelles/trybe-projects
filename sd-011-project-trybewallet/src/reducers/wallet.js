import {
  ACTION_CURRENCIES,
  ACTION_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTION_CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, action.payload],
    };
  case ACTION_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
