import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {

  const [tabContent, settabContent] = useState('components')

  function handleSelect(selectedButton) {
    console.log(selectedButton);
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
            <TabButton onSelect={() => {handleSelect('Components')}}>Components</TabButton>
            <TabButton onSelect={() => {handleSelect('JSX')}}>JSX</TabButton>
            <TabButton onSelect={() => {handleSelect('Props')}}>Props</TabButton>
            <TabButton onSelect={() => {handleSelect('State')}}>State</TabButton>
          </menu>
          Dynamic Content
        </section>

      </main>
    </div>
  );
}

export default App;
