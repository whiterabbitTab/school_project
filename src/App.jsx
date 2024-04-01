import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

import { Home } from './components/Home/Home.jsx';
import { Header } from './components/Header/Header.jsx';
import { Docs } from './components/Docs/Docs.jsx';
import { Practice } from './components/Practice/Practice.jsx'

import useLocalStorage from 'use-local-storage'

export default function App() {

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

