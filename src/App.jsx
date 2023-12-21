import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const images = [
    'https://picsum.photos/1200/800',
    'https://picsum.photos/1200/800',
    'https://picsum.photos/1200/800',
    // Add more image URLs here
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    // Add more products here
    { id: 4, name: 'Product 1', price: 10 },
    { id: 5, name: 'Product 2', price: 20 },
    { id: 9, name: 'Product 2', price: 20 },
    { id: 7, name: 'Product 2', price: 20 },
    { id: 6, name: 'Product 3', price: 30 },
    // Add more products here

  ];

  return (
    <main className=''>
      <header className='bg-slate-300 '>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>

      <div className="slider bg-cover flex" style={{ backgroundImage: `url(${getRandomImage()})` }}>
        <div className='container container-fluid my-28 py-12 flex-row'>
          <div className="left-content basis-full sm:basis-1/2">
            <h1>yazilar</h1>
            <h1>yazilar</h1>
            <h1>yazilar</h1>
            <h1>yazilar</h1>
            <h1>yazilar</h1>
            <h1>yazilar</h1>
            <button>olala</button>
          </div>
          <div className="right-content basis-full sm:basis-1/2">
            <img className='' src="https://picsum.photos/200/505" alt="" />
          </div>
        </div>
      </div>



      <div className="container bg-stone-300 " >
        <h2>Product Listing</h2>
        <div className='container-fluid bg-orange-500 flex-wrap gap-y-7 justify-center md:justify-between'>
          {products.map((product, i) => (
            <div className='max-w-xs md:max-w-60' key={product.id}>
              <img src={`https://picsum.photos/40${i}`} alt="Random Image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <p>Footer</p>
      </footer>
    </main>
  );
}

export default App;
