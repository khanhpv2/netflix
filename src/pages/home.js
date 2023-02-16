import React from "react";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import HeaderContainer from "../containers/header";
import { OptForm, Feature } from "../components";
export default function Home() {
  return (
    <div>
      <HeaderContainer>
        <Feature>
            <Feature.Title>
                Unlimited films, TV programs and more
            </Feature.Title>
            <Feature.SubTitle>
                Watch anywhere. Cancel at any time  
            </Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break /> 
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}
