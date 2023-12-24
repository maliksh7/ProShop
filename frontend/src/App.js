import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <>
      {/* .....................<Header goes here/>..................... */}
      <Header />
      <main className='py-3'>

        <Container>

          {/* .....................<Outlet goes here/>..................... */}
          <Outlet />

        </Container>

      </main>

      <Container>
    
      {/* .....................<Content goes here/>..................... */}
      {/* <Content /> */}
      
      </Container>
    
    
      {/* .....................<Footer goes here/>..................... */}
      <Footer />
      
    </>
  )
}

export default App
