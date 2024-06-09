import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles

const RootContainer = styled(Container)({
  maxWidth: 800,
  margin: 'auto',
  marginTop: 20,
  padding: 20,
  backgroundColor: '#f0f0f0',
  borderRadius: 10,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const TableContainerStyled = styled(TableContainer)({
  marginTop: 20,
  marginBottom: 20,
});

const TableStyled = styled(Table)({
  minWidth: 650,
});

const ButtonGroup = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});

const ButtonStyled = styled(Button)({
  marginLeft: '8px', // Adjusted the margin as per the Material-UI design specifications
});

const StyledTypography = styled(Typography)({
  marginTop: 20,
  marginBottom: 20,
  textAlign: 'center',
});

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const fetchCharacters = async (url) => {
    try {
      const res = await axios.get(url);
      setCharacters(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
    } catch (error) {
      console.error('Error fetching characters:', error.message);
    }
  };

  useEffect(() => {
    fetchCharacters('https://swapi.dev/api/people');
  }, []);

  return (
    <RootContainer maxWidth="md">
      <StyledTypography variant="h4" gutterBottom>
        Star Wars Characters
      </StyledTypography>
      <TableContainerStyled component={Paper}>
        <TableStyled>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Mass</TableCell>
              <TableCell align="right">Birth Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((character) => (
              <TableRow key={character.url}>
                <TableCell component="th" scope="row">
                  {character.name}
                </TableCell>
                <TableCell align="right">{character.height}</TableCell>
                <TableCell align="right">{character.mass}</TableCell>
                <TableCell align="right">{character.birth_year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableStyled>
      </TableContainerStyled>
      <ButtonGroup>
        {previous && (
          <ButtonStyled
            variant="contained"
            color="primary"
            onClick={() => fetchCharacters(previous)}
          >
            Previous
          </ButtonStyled>
        )}
        {next && (
          <ButtonStyled
            variant="contained"
            color="primary"
            onClick={() => fetchCharacters(next)}
          >
            Next
          </ButtonStyled>
        )}
      </ButtonGroup>
    </RootContainer>
  );
};

export default CharacterList;
