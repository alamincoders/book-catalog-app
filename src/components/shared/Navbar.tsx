import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IListItemProps {
  children: string;
  navItemStyles: string;
  NavLink: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex items-center w-full bg-white`}>
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg"
                alt="logo"
                className="w-full"
              />
            </a>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-violet-600 focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && 'hidden'
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/home"
                  >
                    Home
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/payment"
                  >
                    Payment
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/about"
                  >
                    About
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/blog"
                  >
                    Blog
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
              <Link
                to="/login"
                className="py-3 text-base font-medium px-7 text-dark hover:text-violet-600"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className="py-3 text-base font-medium text-white rounded-lg bg-violet-600 px-7 hover:bg-opacity-90"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }: IListItemProps) => {
  return (
    <>
      <li>
        <Link
          to={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </Link>
      </li>
    </>
  );
};
