import { AiTwotoneStar } from 'react-icons/ai';
interface AverageProps {
    avg: number;
  }
  
  function Average({ avg }: AverageProps): JSX.Element {
    const formattedAvg = avg === undefined ? undefined : avg.toFixed(1);
    return (
        <div className='absolute top-4 right-6'>{avg === undefined ? <div className='hidden'></div> : <div className=' flex items-center bg-stars text-white  rounded-md w-fit px-1.5 py-1.5 '>
        <AiTwotoneStar /> {formattedAvg}
      </div>}
        
      
        </div>
    );
  }
  
  export default Average;