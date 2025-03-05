import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import { Box } from '@mui/material'

const Search = () => {
  return (
    <Box>
    <SearchBar/>
    <SearchResults/>
    </Box>
  )
}

export default Search