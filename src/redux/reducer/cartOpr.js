const cart = [];

const cartOpr = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((data) => data.id === product.id);
      if (exist) {
        return state.map((data) =>
          data.id === product.id ? { ...data, qty: data.qty + 1 } : data
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETEITEM":
      const exist2 = state.find((data) => data.id === product.id);
      if (exist2.qty === 1) {
        return state.filter((data) => data.id !== exist2.id);
      } else {
        return state.map((data) =>
          data.id === product.id ? { ...XMLDocument, qty: data.qty - 1 } : data
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default cartOpr;
