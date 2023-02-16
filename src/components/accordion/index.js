import React, { createContext, useContext, useState } from "react";


import {Container, Frame, Title, Item, Inner, Header, Body} from './styles/accorditon'

const ToggleContext = createContext();

export default function Accorditon({ children, ...restProps }) {
  return (
    <div>
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    </div>
  );
}

Accorditon.Title = function AccorditonTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accorditon.Frame = function AccorditonFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accorditon.Item = function AccorditonItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{toggleShow ,setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accorditon.Header = function AccorditonHeader({ children, ...restProps }) {
  const {toggleShow, setToggleShow} = useContext(ToggleContext)
  return (
    <Header onClick={() => setToggleShow((toggleShow) => !toggleShow) } {...restProps}>
      {children}
      {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
      {toggleShow ? (<img src="/images/icons/close-slim.png" alt="Close" />) : (<img src="/images/icons/add.png" alt="Open" />) }
      
    </Header>
  );
};

Accorditon.Body = function AccorditonBody ( {children, ...restProps}) {
    const {toggleShow } = useContext(ToggleContext);
    return toggleShow ?  <Body {...restProps}>{children}</Body> : null;  

}
