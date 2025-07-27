import NavbarComp from '../components/HeaderComp.jsx';
import ViewCarousel from '../components/HomeCarousel.jsx';

function HomePage() {
  return (
    <div className="App">
      <NavbarComp />
      <ViewCarousel />

      <header className="App-header">
        <h1>E-Commerce Store</h1>
        <p>Welcome to our online store!</p>
      </header>
    </div>
  );
}

export default HomePage;
