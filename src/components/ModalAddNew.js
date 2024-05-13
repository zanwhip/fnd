import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalAddNew = (props) => {
    const {handleClose, show} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("")
const handleAddUser = () => {
    console.log("Check state add user , name =" , name , "job = ", job)
}

    return (
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='add-new-user'> 
        <div className="mb-3">
    <label class="form-label">Name</label>
    <input 
    type="text" 
    class="form-control" 
    value={name} 
    onChange={(event) => setName(event.target.value)} 
    />
  </div>
  <div class="mb-3">
    <label className="form-label">Job</label>
    <input 
    type="text" 
    class="form-control" 
    value={job} 
    onChange={(event) => setJob(event.target.value)}/>
  </div>
 
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalAddNew