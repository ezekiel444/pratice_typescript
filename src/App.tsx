import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import InputCom from './components/InputCom';
import StyleCom from './components/StyleCom';
import UserRef from './components/UserRef';
import Timer from './components/Timer';
import Profile from './components/Profile';
import DynamicComponent from './components/DynamicComponent';
import GenericComp from './components/GenericComp';
import PropsRestriction from './components/PropsRestriction';
import ToastExcludeTemplateLiterals from './components/ToastExcludeTemplateLiterals';
import CustomBtn from './components/CustomBtn';
import CustomInput from './components/CustomInput';
import PolyMorpic from './components/PolyMorpic';
import Polymorfix from './components/Polymorfix';


function App() {

 const myfunc =(event:React.MouseEvent<HTMLButtonElement>, myname:string)=>{
   console.log("testing my data ", myname);  
 }

  return (
    <div className="App">
      <SubHeading>
        <Heading>1s</Heading>
      </SubHeading>
      {/* <PolyMorpic size='sm' as='h1' color='secondary'>from class 1</PolyMorpic>
      <PolyMorpic size='md' as='label'  color='primary'>from class 2</PolyMorpic>
      <PolyMorpic as={"div"} size='lg' color='secondary'>from class 3</PolyMorpic> */}

      
        {/* <UserRef /> */}
        {/* <Timer /> */}
        {/* <Profile login={true} component={DynamicComponent} /> */}
  {/* <InputCom inputString='' input={event=>console.log(event) */}

  {/* <StyleCom design={{background:"red"}} /> */}
{/*      
<GenericComp data={["name", "love"]} updateFunc={(info)=>console.log(info)} />
<GenericComp data={[1, 2]} updateFunc={(info)=>console.log(info)} /> */}
{/* <GenericComp data={
  [
    {
      id:2,
      name:"love",
      firname:"joshua"
    }

]} updateFunc={(info)=>console.log(info)} /> */}


     {/* <Person info={personObj} />
     <PersonList names={nameList} />
     <Status status={"data"}/> */}
     {/* <Heading>This is a heading tag</Heading> */}


{/* <PropsRestriction value={2} isNull={false} /> */}
 {/* <ToastExcludeTemplateLiterals position='center' /> */}
 {/* <CustomBtn variant='primary' onClick={()=>console.log("test")}>
   a btn
 </CustomBtn> */}
 {/* <CustomInput variant='secondary' onChange={(event)=>{console.log(event)}} /> */}
 {/* <Polymorfix size='sm' color='primary' lang="en" as="a">first link</Polymorfix>
 <Polymorfix size='md' color='secondary' as='h1'>second h1 </Polymorfix>
 <Polymorfix size='lg' color='primary'  as='label'>third input</Polymorfix> */}
    </div>
  );
}



export default App;
