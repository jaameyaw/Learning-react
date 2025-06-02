import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';

function App() {
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

        </section>

      </main>
    </div>
  );
}

export default App;
