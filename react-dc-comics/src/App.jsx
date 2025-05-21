import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import BlueBar from './components/BlueBar';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  return (
      <>
      <Header />
      <Alert 
      message="Attenzione! Qualcosa è andato storto."
      textColor="Yellow"
      bgColor="darkred"
      />

      
      <MainContent />
      <BlueBar />
      <Footer />
      </>
  );
}

export default App;