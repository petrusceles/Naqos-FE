import { createContext, useContext, useReducer } from "react";
import { ownerFormReducer } from "./reducer.js";
import { Outlet } from "react-router-dom";
const OwnerFormContext = createContext(null);
const OwnerFormDispatchContext = createContext(null);

export const OwnerFormProvider = ({ children }) => {
  const [ownerForm, dispatch] = useReducer(ownerFormReducer);

  return (
    <>
      <OwnerFormContext.Provider value={ownerForm}>
        <OwnerFormDispatchContext.Provider value={dispatch}>
          {children}
        </OwnerFormDispatchContext.Provider>
      </OwnerFormContext.Provider>
    </>
  );
};

export const OwnerFormContextLayout = () => {
  return (
    <OwnerFormProvider>
      <Outlet />
    </OwnerFormProvider>
  );
};

export const useOwnerForm = () => {
  return useContext(OwnerFormContext);
};

export const useOwnerFormDispatch = () => {
  return useContext(OwnerFormDispatchContext);
};
