import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Start } from './components/Start'

import {Sectiondepilacion} from './pages/sections/sectiondepilacion'
import {Sectionfacial} from './pages/sections/sectionfacial'
import {Sectionspa} from './pages/sections/sectionspa'
import { Sectionmasaje } from './pages/sections/sectionmasaje';

import { Cartmarket } from './components/Cartmarket';

import { GeneralProvider } from './context/GeneralContext';



function App() {
  
  return (
    
    <GeneralProvider>  {/*Context added from GeneralContext, called GeneralProvider */}
    <section className="App">
      <Routes> {/*Routes stablished in the app */}
        <Route path='/' element = {<Start/>}/>

        <Route path='/micarrito' element = {<Cartmarket/>}/>
        <Route path='/productos' element = {<Sectionmasaje/>}/>
        <Route path='/productos/masajes' element = {<Sectionmasaje/>}/>
        <Route path='/productos/facial' element = {<Sectionfacial/>}/>
        <Route path='/productos/depilacion' element = {<Sectiondepilacion/>}/>
        <Route path='/productos/spa' element = {<Sectionspa/>}/>
      </Routes>
    </section>
    </GeneralProvider>
  );
}

export default App;