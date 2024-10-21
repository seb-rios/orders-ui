import React, { createContext, useState } from "react";

interface Preferences {
  isNavCollapsed: boolean;
}

interface PreferencesContextType {
  preferences: Preferences;
  setNavCollapse: (isNavCollapsed: boolean) => void;
}

export const PreferencesContext = createContext<
  PreferencesContextType | undefined
>(undefined);

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preferences, setPreferences] = useState<Preferences>({
    isNavCollapsed: false,
  });

  const setNavCollapse = (isNavCollapsed: boolean) => {
    setPreferences((prev) => ({ ...prev, isNavCollapsed }));
  };

  return (
    <PreferencesContext.Provider value={{ preferences, setNavCollapse }}>
      {children}
    </PreferencesContext.Provider>
  );
};
