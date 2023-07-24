import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import CommentBox from '../components/screen/CommentBox';
import DetailsBook from '../components/screen/DetailsBook';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store - Details of book</title>
      </Helmet>
      <div>
        <div>
          <DetailsBook bookId={id!} />
          <CommentBox bookId={id!} />
        </div>
      </div>
    </>
  );
};

export default BookDetails;
