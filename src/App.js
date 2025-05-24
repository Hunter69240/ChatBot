import './App.css';
import img1 from './Images/bg-wine.png';

function App() {
  return (
    <>
      <img src={img1} alt='bg' className='image' />
      <div className='container'>
        <h1 className='quote'>Uncork Wisdom: Your Guide to Fine Wines</h1>
        <h2 className='para'>Tap the chatbot to uncork a world of wine wisdom.</h2>
      </div>
    </>
  );
}

export default App;
