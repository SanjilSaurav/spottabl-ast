import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../data/users.json'
import UserMatch from './UserMatch';
import {AiOutlineClose} from 'react-icons/ai'

function SearchBar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const addSelectedUser = (user)=>{
    setSelectedUsers([...selectedUsers, user]);
  }

  const removeSelectedUser = (user)=>{
    setSelectedUsers(selectedUsers.filter((y)=>{
      return y !== user;
    }))
  }

  const clearSelection = ()=>{
    setSelectedUsers([]);
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.email.includes(searchWord));
    });

    if (searchWord === ""){
      setFilteredData([]);
    } else{
      setFilteredData(newFilter);
    }
  };

  const clearSearch = ()=>{
    setWordEntered("");
    setFilteredData([]);
  }

  return (
    <>
    <SearchField>
      {selectedUsers.map((user, key)=>{
        const z = user.name.split(" ");
        return <Selected>
          <p>{z[0]}</p>
          <CloseIcon >
            <AiOutlineClose onClick={()=>removeSelectedUser(user)}/>
          </CloseIcon>
        </Selected>
        })
      }
      
      <input 
        type="search"
        placeholder='Add by name or email'
        value={wordEntered}
        onChange={handleFilter} />

      <AddButton onClick={()=>{
        props.addCsm(selectedUsers);
        clearSearch();
        clearSelection();
      }}>
        Add CSM
      </AddButton>
    </SearchField>
    {filteredData.length !== 0 && (
      <DataResult>
        {filteredData.slice(0,15).map((value) => {
          return (
            <UserMatch user={value} key={value.id} clearSearch={clearSearch} addSelectedUser={addSelectedUser}/>
          )
        })}
      </DataResult>
    )}
    </>
  )
}

export default SearchBar

const SearchField = styled.div`
display: flex;
height: 40px;
//background: green;
text-align: start;
width: 98%;
padding-left: 15px;
padding-right: 15px;
input {
  width: 90%;
  float: left;
  height: 40px;
  padding-left: 15px;
  font-size: 20px;
  outline: none;
}
`

const AddButton = styled.div`
  height: 40px;
  width: 10%;
  background: #0044a2;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`

const DataResult = styled.div`
`
const Selected = styled.div`
  display: flex;
  align-items: center;
  background: #E6E6FA;
  margin-right: 1px;
  height: 40px;
  //line-height: 10px;
  p {
    margin-right: 5px;
    margin-left: 5px;
  }
`
const CloseIcon = styled.div`
  padding-top: 5px;
`