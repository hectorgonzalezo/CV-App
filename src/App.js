import Header from './components/Header'
import Input from './components/Input';
import Picture from './components/Picture'
import Footer from './components/Footer'
import './styles/appStyle.css'

function App() {
  return (
    <div className="App">
    <Header />
    <div className="cv">
        <Picture />
        <Input />
    </div>
    <Footer projectName='CV-App'/>
    </div>
  );
}

export default App;
