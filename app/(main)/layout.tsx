import { FC, ReactNode } from "react";
import DashboardProvider from "./Provider";

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <DashboardProvider>
      {children}
    </DashboardProvider>
  );
};

export default DashboardLayout;