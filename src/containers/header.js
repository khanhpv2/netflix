import React from "react";
import { Header } from "../components";
import * as ROUTES from "../components/constants/routes";
import logo from "../logo.svg";
export default function HeaderContainer({ children }) {
  return (
    <div>
      <Header>
        <Header.Frame >
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </div>
  );
}
