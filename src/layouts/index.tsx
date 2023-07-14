import React, { ReactNode } from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
