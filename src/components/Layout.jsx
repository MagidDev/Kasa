import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer /> {/*Footer ajouté ici*/}
    </div>
  );
}

export default Layout;
