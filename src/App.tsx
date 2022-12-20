import {Routes, Route} from 'react-router-dom';
import { Auth } from './components/auth';
import { Home } from './components/home';

const App = () => {

  return (
    <Routes>
      <Route path="/auth" element={<Auth/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App
