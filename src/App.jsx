import Navbar from "./component/navbar";
import Intro from "./component/Intro";
import Aboutme from "./component/aboutme"; 
import Service from "./component/services";
import Recentworks from "./component/recentworks";
import Footer from "./component/Footer";
import "../src/App.css"
function App() {

  return (
    <div>
      <Navbar />
      <Intro />
      <Aboutme />
      <Service />
      <Recentworks/>
      <Footer />
      
      
    </div>
  );
}

export default App;