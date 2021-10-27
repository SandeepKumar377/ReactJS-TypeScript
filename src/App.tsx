import './App.css';
import { Text } from './components/polymorphic/Text';
// import { CustomButton } from './components/html/Button';
// import { Toast } from './components/templateLiterals/Toast';
// import { RandomNumber } from './components/restriction/RandomNumber';
// import List from './components/gererics/List';
// import Private from './components/auth/Private';
// import Profile from './components/auth/Profile';
// import Counter from './components/class/Counter';
// import DomRef from './components/ref/DomRef';
// import MutableRef from './components/ref/MutableRef';
// import { User } from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';
// import { Box } from './components/context/Box';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Counter } from './components/state/Counter';
// import { LoggedIn } from './components/state/LoggedIn';
// import { User } from './components/state/User';
// import { Container } from './components/Container';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {
  // Passing simple props
  // const personName = {
  //   fName: "Sandeep",
  //   lName: "Kumar"
  // }
  // Array Props 
  // const nameList = [
  //   {
  //     fName: "Sandy",
  //     lName: "Kumar"
  //   },
  //   {
  //     fName: "Deep",
  //     lName: "Kumar"
  //   },
  //   {
  //     fName: "Ravi",
  //     lName: "Kumar"
  //   }
  // ]
  return (
    <div className="App">

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondry' >Label</Text>
      {/* <CustomButton variant='primary' onClick={()=>console.log('Clicked')} >
        Primary Button
      </CustomButton> */}

      {/* <Toast position='center' /> */}
    {/* <RandomNumber value={10} isPositive /> */}
      {/* <List items={['Superman', 'IronMan', 'Batman']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      
      {/* <Private isLogedIn={true} component={Profile} /> */}

      {/* <Counter message="This is Counter" /> */}
      {/* <DomRef/>
      <MutableRef/> */}

      {/* <UserContextProvider>
      <User/>
    </UserContextProvider> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <Counter/> */}

      {/* <User/>
      <LoggedIn /> */}

      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}

      {/* Style Props */}
      {/* <Container styles={{border:'1px solid red', padding:'1rem'}}/> */}


      {/* Even handle */}
      {/* <Button handleClick={(event, id)=>{
        console.log('Button clicked', event, id)
      }} />
      <Input value='' handleChange={(event)=>console.log(event)} /> */}


      {/* Basic props passing */}
      {/* <Status status='error' /> 
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading> This is Oscar.</Heading>
      </Oscar> */}


      {/* Optional props pass method */}
      {/* <Greet name='Sandeep Kumar' isLoggedIn={true} />
      <Greet name='Sandeep Kumar' msaCount={24} isLoggedIn={true} /> */}
      {/* Simple props Example */}
      {/* <Person name={personName} /> */}
      {/* Array Props Example */}
      {/* <PersonList names={nameList} /> */}
    </div>
  );
}

export default App;
