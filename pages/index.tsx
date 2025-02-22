import type { NextPage } from 'next';
import DrawingCanvas from '../components/canvas/DrawingCanvas';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Doodle Duel</h1>
      <div className="flex justify-center">
        <DrawingCanvas />
      </div>
    </div>
  );
};

export default Home; 