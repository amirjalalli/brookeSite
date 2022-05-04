
import './App.css';
import Navheader from './component/Navheader/Navheader';
import Header from './component/Header/Header';
import Skill from './component/Skill/Skill';
import MyPicture from "./component/MyPicture/MyPicture"
import Main from './component/Main/Main';
import UnderMain from './component/UnderMain/UnderMain';
import Other from './component/Other/Other';
import Email from './component/Email/Email';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navheader />
      <Header />
      <Skill />
      <MyPicture />
      <Main />
      <UnderMain />
      <Other />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
