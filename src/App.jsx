import './App.css'
import './Comp-css/Header.css'
import './Comp-css/Heor_section.css'
import './Comp-css/spaciality.css'
import './Comp-css/Aboutme.css'
import './Comp-css/Myskill.css'

import Header from './Components/Header/Header'
import Hero_section from './Components/Hero_section'
import Spacilaty from './Components/Spacilaty'
import Aboutme from './Components/Aboutme'
import Myskill from './Components/Header/Myskill'

function App() {

  return (
    <>
      <Header></Header>
      <Hero_section></Hero_section>
      <Spacilaty></Spacilaty>
      <Aboutme></Aboutme>
      <Myskill></Myskill>
    </>
  )
}

export default App
