type initialState = {
  amount: number;
  date: string;
  name: string;
  type: string;
};

const initialState: initialState = {
  amount: 0,
  date: '',
  name: '',
  type: '',
};

const addExpense = (state: initialState = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return initialState;
  }
};

export default addExpense;
