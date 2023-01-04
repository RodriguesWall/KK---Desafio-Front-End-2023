import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
console.log(children)
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
