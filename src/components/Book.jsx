import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './LS/header';
import '../Assets/Css/book.css'
import SidePanel from './LS/sidepanel';

function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const sampleBooks = [
      { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1' },
      { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2' },
    ];
    setBooks(sampleBooks);
  }, []);

  const deleteBook = (id) => {
    console.log(`Delete book with ID: ${id}`);
  };

  return (
    <div>
      <Header />
      <div className="book-container">
        <SidePanel />
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Genre</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <th scope="row">{book.id}</th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>
                    <Link to={`/editbook/${book.id}`} className="btn btn-outline-primary mx-2">
                      Edit
                    </Link>
                    <button onClick={() => deleteBook(book.id)} className="btn btn-danger mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Book;
