import './App.css';
import Header from './Header';
import QueueInfo from './QueueInfo';
import QueueList from './QueueList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <Header />
            <QueueList />
          </div>
        }>
        </Route>
        <Route path='/queue/:id' element={
        <div className='App'>
          <Header />
          <QueueInfo />
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
