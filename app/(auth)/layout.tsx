import { FC, ReactNode } from "react";
import AuthLayout from "../features/auth/components/auth-layout";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
