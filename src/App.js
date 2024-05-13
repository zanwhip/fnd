
import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';

function App() {
  const [isShowModalAddNew, setisShowModalAddNew] = useState(false);
  const handleClose =() => {
   setisShowModalAddNew(false)
} 
  return (
    <div className='app-container'>

      <Header/>
      <Container>
        <div style={{display : 'flex',  marginTop : 10, marginBottom : 10, justifyContent :'space-between'  }}>
         <span> 
          <b>List Users</b>
         </span>
          <button 
          className='btn btn-success'
          onClick={() => setisShowModalAddNew(true)}
          >Add new user</button>
        </div>
       
      <TableUsers/>
      </Container>
   
      <ModalAddNew 
      show = {isShowModalAddNew}
      handleClose= {handleClose}
      />
    </div>
  );
}

export default App;
