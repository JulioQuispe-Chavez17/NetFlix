import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>

        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}

// 1: 49 del video https://www.youtube.com/watch?v=x_EEwGe-a9o&list=WL&index=5&ab_channel=KarlHadwen