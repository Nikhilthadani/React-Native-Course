import { createContext, useContext, useState } from "react";

const AppStateContext = createContext({
  selectedGroup: null,
  setSelectedGroup: (groupId) => {},
});
export const useAppState = () => useContext(AppStateContext);
const AppStateProvider = ({ children }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <AppStateContext.Provider value={{ selectedGroup, setSelectedGroup }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
