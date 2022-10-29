import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
const api = 'https://course-api.com/react-tours-project';

export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  function removeTour(id) {
    const newTours = tours.filter((item) => item.id !== id);

    setTours(newTours);
  }

  useEffect(() => {
    setLoading(true);

    async function fetchTours() {
      const response = await fetch(api);
      const data = await response.json();

      return data;
    }

    fetchTours().then((data) => {
      setTours(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className='bg-slate-100 min-h-screen flex flex-col items-center p-8'>
      <h1 className='font-extrabold text-4xl text-red-500'>Ours Tours</h1>
      {loading ? (
        <Loading />
      ) : (
        <Tours tours={tours} handleRemoveTour={removeTour} />
      )}
    </div>
  );
}
