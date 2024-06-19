import Header from './comps/header/Header';
import Footer from './comps/footer/Footer';
import Banner from './comps/banner/Banner';
import CardBlock from './comps/card/CardBlock';
import InfoBlock from './comps/info/InfoBlock';
import WriteUsBlock from './comps/writeUs/WriteUsBlock';
import TestingBlock from './comps/testing/TestingBlock';

function App() {
  return (
    <div id='wrapper'>
       <Header />
       <Banner />
       <CardBlock />
       <InfoBlock />
       <WriteUsBlock />
       <TestingBlock />
       <Footer />
    </div>
  );
}

export default App;
