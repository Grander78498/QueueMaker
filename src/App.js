import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import QueueInfo from './QueueInfo';
import QueueList from './QueueList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QueueAdder from './QueueAdder';

function App() {
  const [showQueueAdder, setShow] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <Header showQueueAdder={showQueueAdder} setShow={setShow}/>
            {(showQueueAdder == 1) && <QueueAdder closeClick={setShow}/>}
            <QueueList showQueueAdder={showQueueAdder}/>
          </div>
        } />
        <Route path='/queue/:id' element={
          <div className='App'>
            <Header showQueueAdder={showQueueAdder} setShow={setShow}/>
            <QueueInfo />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
