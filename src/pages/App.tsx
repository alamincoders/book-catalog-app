import { useGetAllBooksQuery } from '../redux/features/books/bookApi';

function App() {
  const { data, isLoading } = useGetAllBooksQuery([]);
  return (
    <>
      {isLoading ? (
        <h1 className="text-3xl font-bold underline">Loading...</h1>
      ) : (
        <div>
          {data.map((user: any) => (
            <li key={user.id}> {user.name}</li>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
