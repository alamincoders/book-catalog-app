import React, { useState } from 'react';

export interface IBook {
  _id: string | number;
  title: string;
  genre: string;
  publicationDate: string;
  author: string;
}

const BookForm: React.FC = () => {
  const [book, setBook] = useState<IBook>({
    _id: '',
    title: '',
    genre: '',
    publicationDate: '',
    author: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, such as sending book data to the server
    console.log(book);
  };

  return (
    <div className=" pt-20 pb-10 lg:pb-20 h-full bg-[#F3F4F6]">
      <div className="text-zinc-800 text-sm pb-10 text-center overflow-hidden">
        <h2 className="text-4xl font-semibold mb-3 ">Create Your Book</h2>

        <p className="text-zinc-600 mb-3 lg:mx-96">
          Contrary to popular belief, Lorem Ipsum is not simply random.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-3">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="genre"
            className="block text-gray-700 font-medium mb-2"
          >
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="publicationDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Publication Date
          </label>
          <input
            type="text"
            id="publicationDate"
            name="publicationDate"
            value={book.publicationDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-medium mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-base font-medium text-white rounded-full bg-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
