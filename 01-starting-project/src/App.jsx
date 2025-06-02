import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import configImg from './assets/config.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header () {
  const descriptions = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src= {reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcepts (props) {
  return (
    <li>
      <img src= {props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts
            title = "Components"
            description = "Building blocks of UI."
            image = {componentImg}
            />
            <CoreConcepts 
            title = "Configuration"
            description = "how do you set react up"
            image = {configImg} 
            />
            <CoreConcepts />
            
          </ul>

        </section>

      </main>
    </div>
  );
}

export default App;
