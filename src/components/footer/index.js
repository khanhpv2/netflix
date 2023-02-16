import React from 'react'
import {Container, Row, Column, Link, Title, Text, Break} from './styles/footer'

export default function Footer({ children, ...restProp}) {
  return (
    <div>
        <Container {...restProp} >{children}</Container>
    </div>
  )
}



Footer.Row =  function FooterRow ({ children, ...restProp}) {
    return <Row {...restProp}>{children}</Row>
}

Footer.Column =  function FooterColumn ({ children, ...restProp}) {
    return <Column {...restProp}>{children}</Column>
}

Footer.Link =  function FooterLink ({ children, ...restProp}) {
    return <Link {...restProp}>{children}</Link>
}

Footer.Title =  function FooterTitle ({ children, ...restProp}) {
    return <Title {...restProp}>{children}</Title>
}

Footer.Text =  function FooterTitle ({ children, ...restProp}) {
    return <Text {...restProp}>{children}</Text>
}

Footer.Break =  function FooterBreak ({ children, ...restProp}) {
    return <Break {...restProp}>{children}</Break>
}


