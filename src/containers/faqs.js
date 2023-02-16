import React from "react";
import { Accorditon } from "../components";
import OptForm from "../components/opt-form";

import faqsData from '../fixtures/faqs.json'



export default function FaqsContainer() {
  return (
    <div>
        <Accorditon>
            <Accorditon.Title>Frequently Asked Question</Accorditon.Title>
            {faqsData.map (item =>
                <Accorditon.Item key={item.id}>
                    <Accorditon.Header>{item.header}</Accorditon.Header>
                    <Accorditon.Body>{item.body}</Accorditon.Body>
                </Accorditon.Item>    
            )}
            <Accorditon.Item />
            <OptForm>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button>Try it now</OptForm.Button>
              <OptForm.Break />
              <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text> 
            </OptForm>
        </Accorditon>
    </div>
  )
}
