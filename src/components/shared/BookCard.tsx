import { Link } from 'react-router-dom';
import { SecondaryButton } from '../ui/Button';

interface IBookProps {
  image: string;
  BookTitle: string;
  BookAuthor?: string;
  BookGenre?: string;
  publicationDate?: Date | null;
  titleHref: string;
}

const BookCard = ({
  image,
  BookTitle,
  BookAuthor,
  BookGenre,
  publicationDate,
  titleHref,
}: IBookProps) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg ">
      <div className="">
        <img src={image} alt="" className="w-full h-full object-fill" />
      </div>
      <div className="p-2 sm:p-3 xl:p-3 text-center">
        <div>
          <h3>
            <Link
              to={titleHref ? `book/${titleHref}` : '/'}
              className="font-semibold text-secondary"
            >
              {BookTitle}...
            </Link>
          </h3>
          <p className="text-base leading-relaxed mb-7 text-body-color">
            {BookAuthor}
          </p>
        </div>

        <div className="flex justify-between w-full">
          <p> {BookGenre}</p>
          <p>
            {' '}
            {publicationDate ? new Date(publicationDate).toDateString() : null}
          </p>
        </div>
        <Link to={titleHref ? `book/${titleHref}` : '/'}>
          {' '}
          <SecondaryButton>See Details</SecondaryButton>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
