import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/Home'
import Tuner from './routes/tuner/Tuner'
import Recordings from './routes/recordings/Recordings'
import Charities from './routes/charities/Charities'

export default function Main() {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tuner' element={<Tuner />}></Route>
        <Route path='/recordings' element={<Recordings />}></Route>
        <Route path='/charities' element={<Charities />}></Route>
      </Routes>
    </div>
  )
}