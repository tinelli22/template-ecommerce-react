import { createContext, useContext, useReducer } from "react";
import ActionsType, { ActionType } from "./actionsTypes";

export interface IAppState {
  navigation: "opened" | "closed";
}

export const initialValuesAppState: IAppState = {
  navigation: "closed",
};

export type StateAction = {
  type: ActionType;
  payload: typeof initialValuesAppState[keyof typeof initialValuesAppState];
};

type StateContextType = {
  state: IAppState;
  dispatch: React.Dispatch<StateAction>;
};

const StateContext = createContext<StateContextType>({
  state: initialValuesAppState,
  dispatch: () => {},
});

type Reducer = {
  (state: IAppState, action: StateAction): IAppState;
};

export const StateProvider = ({ children }: any) => {
  const reducer: Reducer = (state: IAppState, action: StateAction) => {
    switch (action.type) {
      case ActionsType.TOGGLE_NAVIGATION:
        return state;
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValuesAppState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
