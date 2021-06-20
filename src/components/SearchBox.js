import React from 'react'

const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search user'
        onChange={onSearchChange}
        value={searchField}
      />
    </div>
  )
}

export default SearchBox
