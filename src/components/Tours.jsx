import Tour from './Tour';
export default function Tours({ tours, handleRemoveTour }) {
  return (
    <ul className='flex flex-col gap-10 items-center py-10'>
      {tours.map((tour) => {
        return (
          <Tour key={tour.id} data={tour} handleRemoveTour={handleRemoveTour} />
        );
      })}
    </ul>
  );
}
