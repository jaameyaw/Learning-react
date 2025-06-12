import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import Section from './components/Section';
import TabsWrapper from './components/TabsWrapper';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {

  const [tabContent, settabContent] = useState()

  function handleSelect(selectedButton) {
    settabContent(selectedButton);
  }


  return (
    <>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concepts) => (
            <CoreConcepts key={concepts.id} {...concepts} />))}
          </ul>
        </section>

        <Section id="examples" title='Examples'>
          
          <TabsWrapper 
            buttons={
              <>
              <TabButton isSelected={tabContent === 'components'} onClick={() => {handleSelect('components')}}>Components</TabButton>
              <TabButton isSelected={tabContent === 'jsx'} onClick={() => {handleSelect('jsx')}}>JSX</TabButton>
              <TabButton isSelected={tabContent === 'props'} onClick={() => {handleSelect('props')}}>Props</TabButton>
              <TabButton isSelected={tabContent === 'state'} onClick={() => {handleSelect('state')}}>State</TabButton>
              </>
          } />
          
          {!tabContent? <p>Please select one of the buttons</p> 
          :<div id="tab-content">
            <h3>{ EXAMPLES[tabContent].title}</h3>
            <p>{ EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>}
        </Section>

      </main>
    </>
  );
}

export default App;
