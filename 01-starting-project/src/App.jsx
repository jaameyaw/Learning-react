import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {

  const [tabContent, settabContent] = useState('components')

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
            <CoreConcepts {...CORE_CONCEPTS[0]}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts {...CORE_CONCEPTS[2]}           
            />
            <CoreConcepts {...CORE_CONCEPTS[3]}
            />
            
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => {handleSelect('components')}}>Components</TabButton>
            <TabButton onSelect={() => {handleSelect('jsx')}}>JSX</TabButton>
            <TabButton onSelect={() => {handleSelect('props')}}>Props</TabButton>
            <TabButton onSelect={() => {handleSelect('state')}}>State</TabButton>
          </menu>
          
          <div id="tab-content">
            <h3>{ EXAMPLES[tabContent].title}</h3>
            <p>{ EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
