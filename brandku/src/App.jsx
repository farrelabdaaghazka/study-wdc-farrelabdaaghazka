import { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import FeatureGrid from "./component/FeatureGrid"; 

function App() {
  const [counter, setCounter] = useState(0);
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);

  const handleStartClick = () => {
    const nextCount = counter + 1;
    setCounter(nextCount);
    
    if (nextCount >= 2) {
      setIsRegistrationClosed(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      
      <main className="mx-auto px-4 py-16 max-w-6xl space-y-20">
        <Hero 
          onStart={handleStartClick} 
          counter={counter} 
          isClosed={isRegistrationClosed} 
        />
        
        <FeatureGrid />
      </main>
      
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-16 border-t border-gray-800">
        <p className="text-sm">&copy; 2026 BrandKu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;