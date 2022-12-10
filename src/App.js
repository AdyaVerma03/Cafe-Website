import React from 'react';
import Download from './Components/Download';
import Navbar from './Components/Navbar';
import Ourstory from './Components/Ourstory';
import Shopnow from './Components/Shopnow';
import Slides from './Components/Slides';
import Socials from './Components/Socials';
import Testimonials from './Components/Testimonials';
function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <Ourstory />
      <Shopnow />
      <Testimonials />
      <Download />
      <Socials />
    </>
  )
}
export default App