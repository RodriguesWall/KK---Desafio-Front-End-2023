import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  
  return (
    <>
      <Navbar />
        <div style={{paddingTop: 90}}>
        {children}
        </div>
      <Footer />
    </>
  );
};

export default Layout;
