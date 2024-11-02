import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import Description from './components/description';

function App() {




  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/description/:id' element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
