import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap';

import Auth from '../utils/auth';
import { fetchCharityButton } from '../controllers/charityRoutes';
import { ADD_CHARITY, addCharityIds, getSavedCharityIds } from '../utils/mutations';
import { useMutation, gql } from '@apollo/client';
//import { ADD_Charity } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const CharitySearch = () => {
  // create state for holding returned google api data
  const [searchedCharities, setAddCharities] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [addedCharityIds, setAddedCharityIds] = useState(getSavedCharityIds());


  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    addedCharityIds(setAddedCharityIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetchCharityButton(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const charityData = items.map((organization) => ({
        charityId: organization.id,
        CharityName: organization.name || ['No City Available'],
        mission: organization.mission,
        city: organization.city,
        state: organization.state,
        logo: organization.logoUrl || ['No Logo is Available'],
        ein: organization.ein,
      }));

      setAddCharities(charityData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const [addCharity] = useMutation(ADD_CHARITY);

  // create function to handle saving a book to our database
  const handleAddCharity = async (charityId) => {
    // find the book in `searchedBooks` state by the matching id
    const charityToAdd = setAddCharities.find((organization) => organization.id === charityId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

console.log("Charity TO SAVE:", charityToAdd);
console.log("SAVED Charity:", addCharityIds);

    try {

      await addCharity({
        variables: { charity: charityToAdd },
        update: (cache, { data: { addCharity } }) => {
          try {
            cache.writeQuery({
              query: GET_ME,
              data: { me: addCharity }
            });
          } catch (err) {
            console.error(err);
          }
        }
      });
      setaddCharityIds([...addCharityIds, charityToAdd.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a City'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedCharities.length
            ? `Viewing ${searchedCharities.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <Row>
          {searchedCharities.map((book) => {
            return (
              <Col md="4" key={book.bookId} >
                <Card border='dark'>
                  {book.image ? (
                    <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button className="btn-block btn-info" href={`https://books.google.com/books?id=${book.bookId}`} target="_blank" rel="noopener noreferrer">
                      View on Google Books
                    </Button><br /><br />
                    {Auth.loggedIn() && (
                      <Button
                        disabled={addCharityIds?.some((addCharityIds) => addCharityIds === organization.id)}
                        className='btn-block btn-info'
                        onClick={() => handleAddCharity(organization.id)}>
                        {addedCharityIds?.some((addedCharityId) => addedCharityId === organization.id)
                          ? 'This book has already been saved!'
                          : 'Save this Book!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CharitySearch;