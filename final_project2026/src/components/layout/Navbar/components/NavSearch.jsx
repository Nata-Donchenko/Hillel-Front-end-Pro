import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {Box, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import {SEARCH_PLACEHOLDER} from "@constants/placeholders.js";

const NavSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    if(query.trim()) {
      navigate(`/category/all?search=${query.trim()}`)
    }
  }
  
  return (
    <Box
      component='form'
      onSubmit={handleSearch}
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#F0F0F0',
        borderRadius: 20,
        px: 2,
        py: 0.5,
        flex: 1,
        mx: 2,
       
      }}
    >
      <SearchIcon sx={{
        color: 'grey.500',
        mr: 1
      }}/>
      <InputBase
        placeholder={SEARCH_PLACEHOLDER}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ flex: 1, fontSize: 16}}
      />
    </Box>
  );
};

export default NavSearch;