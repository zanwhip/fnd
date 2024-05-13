import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {
  const handlePageClick = (event) => {
    console.log("event lib : ", event);
    getUsers(+event.selected + 1  )
  }

  const [listUser, setlistUser] = useState([]);
  const [totalUser, settotalUser] = useState(0);
  const [totalPages, settotalPages] = useState(0);
    useEffect(() => {
   
      getUsers(2);
      }, [])

  const getUsers = async(page) => {
    let res = await fetchAllUser(page);
    console.log("check new res", res)
    if(res && res.data){
      console.log(res)
      settotalUser(res.total)
      settotalPages(res.total_pages)
      setlistUser(res.data)
    }
  }   
  
  console.log(listUser)
    return (<>  
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          
        </tr>
      </thead>
      <tbody>
        {listUser && listUser.length >0 &&

           listUser.map((item, index) => {
          return (
            <tr key={`users-${index}`}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
          </tr>
          )
        })
        }
       
       
      </tbody>
    </Table>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName= 'page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
      />
    </>)
}

export default TableUsers