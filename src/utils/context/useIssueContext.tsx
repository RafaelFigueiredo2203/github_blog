import { useContext } from "react";
import { IssueContext } from "./issue-context";

export const useIssueContext = () => {
  const context = useContext(IssueContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};