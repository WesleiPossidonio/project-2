import { Routes, Route } from 'react-router-dom'
import { HeroBanner, MainSection } from '../Components'


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HeroBanner />} />
      <Route path='/carta-weslei' element={<MainSection />} />
    </Routes>
  )
}