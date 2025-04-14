import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';
import MyDemo from './MyDemo.jsx';
import Clock from './Clock.jsx';

function App(){

  return(
    <>
      <Header></Header>
      <Clock></Clock>
      <MyDemo></MyDemo>
      <Stuff name="Bob Smith" title="CEO"></Stuff>
      <Stuff name="Sue Jones" title="CFO"></Stuff>
      <Stuff></Stuff>
      <Footer></Footer>
      </>
  );
}
export default App