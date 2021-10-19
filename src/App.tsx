import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  // Passing simple props
  const personName = {
    fName: "Sandeep",
    lName: "Kumar"
  }
  // Array Props 
  const nameList = [
    {
      fName: "Sandy",
      lName: "Kumar"
    },
    {
      fName: "Deep",
      lName: "Kumar"
    },
    {
      fName: "Ravi",
      lName: "Kumar"
    }
  ]
  return (
    <div className="App">
      <hr />
      <hr />
      <hr />
      <Status status='error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading> This is Oscar.</Heading>
      </Oscar>
      {/* Optional props pass method */}
      <Greet name='Sandeep Kumar' isLoggedIn={true} />
      <hr />
      {/* <Greet name='Sandeep Kumar' msaCount={24} isLoggedIn={true} /> */}
      <hr />
      {/* Simple props Example*/}
      <Person name={personName} />
      <hr />
      {/* Array Props Example */}
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
