import '../Assets/Css/product.css';
import { Link } from "react-router-dom";
import Header from './LS/header';
// import SidePanel from './LS/sidepanel';
export default function Product() {
  
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: '₹19.99',
      reviews: 4,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2499',
      reviews: 5,
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41gr3r3FSWL.jpg',
    },
    
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹299',
      reviews: 5,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/sophie-kinsella-the-undomestic-goddess-book-cover-example.jpeg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2999',
      reviews: 5,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/novel-book-cover-template-visme-963x1536.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2099',
      reviews: 5,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/bedtime-story-book-cover-template-visme.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2499',
      reviews: 5,
      image: 'https://marketplace.canva.com/EAFfV74NxCg/1/0/1003w/canva-colorful-blue-illustration-beach-children%27s-book-cover-eTSt5e-cETQ.jpg',
    },
  ];
  
  return (
    <div>
      <Header />
      
      {/* <SidePanel/> */}
      <div className='head'>
        <p>BOOKS</p>
      </div>
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-item">
              <Link to={`/book/${book.id}`}>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>By {book.author}</p>
                <p>Price: {book.price}</p>
                <div className="reviews">
                  Reviews:
                  {Array.from({ length: book.reviews }, (_, index) => (
                    <span key={index} role="img" aria-label="star">
                      ⭐
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
                  }
  
