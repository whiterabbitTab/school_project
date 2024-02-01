import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Docs } from './components/Docs/Docs';
import { Practice } from './components/Practice/Practice'

import useLocalStorage from 'use-local-storage'



function App() {

  const [result, setResult] = useLocalStorage("result", {})

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Docs/*' element={<Docs></Docs>}></Route>
        <Route path='Practice/*' element={<Practice local_result={[result, setResult]}></Practice>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
