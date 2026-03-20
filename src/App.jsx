import './App.css'
import './Comp-css/Header.css'
import './Comp-css/Heor_section.css'
import './Comp-css/spaciality.css'
import './Comp-css/Aboutme.css'
import './Comp-css/Myskill.css'
import './Comp-css/MyCompliteProject.css'
import './Comp-css/Revew.css'
import './Comp-css/Idya.css'
import './Comp-css/Footer.css'
import './Comp-css/Responsive_976px.css'
import './Comp-css/Responsive_576px.css'

import Header from './Components/Header/Header'
import Hero_section from './Components/Hero_section'
import Spacilaty from './Components/Spacilaty'
import Aboutme from './Components/Aboutme'
import Myskill from './Components/Header/Myskill'
import MyCompliteProject from './Components/Header/MyCompliteProject'
import Revew from './Components/Revew'
import Ideato from './Components/Ideato'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <Header></Header>
      <Hero_section></Hero_section>
      <Spacilaty></Spacilaty>
      <Aboutme></Aboutme>
      <Myskill></Myskill>
      <MyCompliteProject></MyCompliteProject>
      <Revew></Revew>
      <Ideato></Ideato>
      <Footer></Footer>
    </>
  )
}

export default App
