import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UseUser = () => {
  const context = useContext(UserContext)
  if (!context) throw Error("useUser must be used inside UserContextProvider")
  return context
}