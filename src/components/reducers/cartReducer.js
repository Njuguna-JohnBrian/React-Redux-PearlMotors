import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import Item7 from "../../images/item7.jpg";
import Item8 from "../../images/item8.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_DISCOUNT,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Mercedes-Benz",
      model: "A-CLass",
      mileage: "1234",
      YOM: 2021,
      price: 1110,
      img: Item1,
    },
    {
        id: 2,
        title: "AUDI",
        model: "A4 Allroad",
        mileage: "1234",
        YOM: 2012,
        price: 1000,
        img: Item2,
      },
      {
        id: 3,
        title: "GMC",
        model: "Acadia",
        mileage: "1234",
        YOM: 2019,
        price: 1300,
        img: Item3,
      },
      {
        id: 3,
        title: "HONDA",
        model: "Accord Hybrid",
        mileage: "1234",
        YOM: 2021,
        price: 1500,
        img: Item3,
      },
      {
        id: 3,
        title: "SUBARU",
        model: "Ascent",
        mileage: "1234",
        YOM: 2020,
        price: 1430,
        img: Item4,
      },
      {
        id: 4,
        title: "Mercedes-Benz",
        model: "C-Class",
        mileage: "1234",
        YOM: 2021,
        price: 2440,
        img: Item5,
      },
      {
        id: 5,
        title: "KIA",
        model: "Carnival",
        mileage: "1234",
        YOM: 2020,
        price: 1570,
        img: Item6,
      },
      {
        id: 6,
        title: "Porsche",
        model: "Cayenne Coupe",
        mileage: "1234",
        YOM: 2020,
        price: 1770,
        img: Item7,
      },
      {
        id: 7,
        title: "Bentley",
        model: "Continental GT",
        mileage: "1234",
        YOM: 2018,
        price: 1920,
        img: Item8,
      },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_DISCOUNT) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_DISCOUNT") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
