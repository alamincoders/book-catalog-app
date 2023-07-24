import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { userLoggedOut } from '../../redux/features/auth/authSlice';
import { PrimaryButton, SecondaryButton } from '../ui/Button';
import Container from '../ui/Container';

const Navbar = () => {
  const { email } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <>
      <header>
        <nav className="z-10 w-full absolute border-b border-gray-100/70">
          <Container>
            <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
              />
              {/* ============================= */}
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <Link
                  to="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <img src={logo} alt="logo image" />
                </Link>

                <div className="relative flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative  p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>

              {/* ================================ */}
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
              ></div>
              {/* =================================== */}
              <div
                className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                  <ul className="font-medium lg:text-sm flex-col flex lg:flex-row gap-2">
                    <li>
                      <Link
                        to="/wishlist"
                        className="flex items-center bg-slate-200/60 hover:bg-slate-100 text-black cursor-pointer relative p-3 rounded-md transition duration-200 ease-in-out"
                      >
                        <svg
                          fill=""
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                        </svg>
                        <span className="bg-primary text-white text-xs font-semibold w-6 h-6 rounded-md absolute top-0 right-0 flex items-center justify-center">
                          0
                        </span>
                      </Link>
                    </li>{' '}
                    <Link to="/reading">
                      {' '}
                      <li className="flex items-center bg-slate-200/60 hover:bg-slate-100 text-black cursor-pointer relative p-3 rounded-md transition duration-200 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          />
                        </svg>

                        <span className="bg-primary text-white text-xs font-semibold w-6 h-6 rounded-md absolute top-0 right-0 flex items-center justify-center">
                          0
                        </span>
                      </li>
                    </Link>
                  </ul>
                </div>

                {!email ? (
                  <div className="mt-12 lg:mt-0 flex space-x-4">
                    <Link to="/login">
                      <SecondaryButton>Sign In</SecondaryButton>
                    </Link>{' '}
                    <Link to="/signup">
                      <PrimaryButton>Sign Up</PrimaryButton>
                    </Link>
                  </div>
                ) : (
                  <div className="mt-12 lg:mt-0 flex space-x-4">
                    <button
                      onClick={() => dispatch(userLoggedOut())}
                      className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:border text-black before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                    >
                      <span className="relative text-sm font-semibold">
                        Logout
                      </span>
                    </button>
                    <div>
                      <Link
                        to="/createbook"
                        className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:border text-black before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                      >
                        <span className="relative text-sm font-semibold">
                          Create Book
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/profile"
                        className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:border text-black before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                      >
                        <span className="relative text-sm font-semibold">
                          Profile
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
