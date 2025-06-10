import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {

  const [tabContent, settabContent] = useState()

  function handleSelect(selectedButton) {
    settabContent(selectedButton);
  }


  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(({id, image, title, description}) => (
            <CoreConcepts key={id} 
            image={image} 
            title={title} 
            description={description} />))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === 'components'} onSelect={() => {handleSelect('components')}}>Components</TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={() => {handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => {handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={() => {handleSelect('state')}}>State</TabButton>
          </menu>
          
          {!tabContent? <p>Please select one of the buttons</p> 
          :<div id="tab-content">
            <h3>{ EXAMPLES[tabContent].title}</h3>
            <p>{ EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>}
        </section>

      </main>
    </div>
  );
}

export default App;
