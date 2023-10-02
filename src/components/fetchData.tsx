import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState: State = {
  data: [],
  smallData: [],
  currentPage: 1,
  currentPageSmall: 1,
  itemsPerPage: 8,
};

//createContext smo definisali da ne moze biti ni u jednom trenutku 'null' tako da tamo gde budemo pozvali useContex 
//mozemo koristii '!' znak.
export const DataDispatchContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => { },
});


export interface Item {
  title: string;
  description: string;
  id: string;
  image: string;
}

export interface State {
  data: Item[];
  smallData: Item[];
  currentPage: number;
  currentPageSmall: number;
  itemsPerPage: number;
}

type Action =
  | { type: "SET_DATA"; payload: Item[] }
  | { type: "SET_SMALL_DATA"; payload: Item[] }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_CURRENT_PAGE_SMALL"; payload: number }
  | { type: "SET_ITEMS_PER_PAGE"; payload: number };

function dataReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_SMALL_DATA":
      return { ...state, smallData: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_CURRENT_PAGE_SMALL":
      return { ...state, currentPage: action.payload };
    case "SET_ITEMS_PER_PAGE":
      return { ...state, itemsPerPage: action.payload };
    default:
      return state;
  }
}

async function fetchData(url: string, dispatch: React.Dispatch<Action>, actionType: Action) {
  try {
    const response = await axios.get(url);
    dispatch({ type: actionType.type, payload: response.data });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
}

function DataFetcher({ children }: { children: React.ReactNode }) {


  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [smallDataLoaded, setSmallDataLoaded] = useState(false);

  useEffect(() => {
    fetchData("http://localhost:4000/data", dispatch, { type: "SET_DATA", payload: [] })
      .then(() =>
        fetchData(
          "http://localhost:4000/small-data",
          dispatch,
          { type: "SET_SMALL_DATA", payload: [] }
        )
      )
      .then(() => setSmallDataLoaded(true))
      .catch((err) => console.error(err));
  }, []);

  return (
    <DataDispatchContext.Provider value={{ state, dispatch }}>
      {smallDataLoaded && children}
    </DataDispatchContext.Provider>
  );
}

export default DataFetcher;


export { };
