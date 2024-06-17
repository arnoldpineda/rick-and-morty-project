import { FC, Fragment, ReactNode } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Outlet />
    </Fragment>
  );
};

export default MainLayout;
