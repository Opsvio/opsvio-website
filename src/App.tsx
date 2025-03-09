import { Header } from './components/Header';
import { Hero } from './components/Hero';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
    </div>
  );
}

export default App;