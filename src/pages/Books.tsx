import { Helmet } from 'react-helmet';
import FilterBooks from '../components/screen/FilterBooks';

const Books = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store - All books</title>
      </Helmet>

      <div>
        <div>
          <FilterBooks />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Books;
