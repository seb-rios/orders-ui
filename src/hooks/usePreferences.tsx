import React, { useContext } from "react";
import { PreferencesContext } from "../context/Preferences";

export const usePreferences = () => {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error(
      "usePreferences must be used within the PreferencesProvider"
    );
  }
  return context;
};
