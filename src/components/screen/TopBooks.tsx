import book from '../../assets/books/book.png';
import { IBook } from '../../redux/features/api/type';
import { useGetAllBooksQuery } from '../../redux/features/books/bookApi';

import BookCard from '../shared/BookCard';
import Container from '../ui/Container';

const TopBooks = () => {
  const { data: books, isLoading } = useGetAllBooksQuery({});
  return (
    <div className="mt-16">
      <section className="pt-20 pb-10 lg:pb-20 h-full bg-[#F3F4F6]">
        <div className="text-zinc-800 text-sm pb-10 text-center overflow-hidden">
          <h2 className="text-4xl font-semibold mb-3 text-secondary">
            Top 10 Books on Sale
          </h2>

          <p className="text-zinc-600 mb-3 lg:mx-96">
            Contrary to popular belief, Lorem Ipsum is not simply random.
          </p>
        </div>
        <Container>
          {isLoading ? (
            'Loading'
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6 lg:mt-12">
              {books?.data.length ? (
                <>
                  {books.data.map(({ _id, title }: IBook) => (
                    <BookCard
                      key={_id}
                      image={book}
                      BookTitle={title.slice(0, 20)}
                      titleHref={_id!}
                    />
                  ))}
                </>
              ) : (
                <p>No data is present.</p>
              )}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default TopBooks;
