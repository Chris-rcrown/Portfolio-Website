import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';

import CinematicBackground from './components/CinematicBackground';

function App() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <CinematicBackground />
      <div className="relative z-10">
        <Home/>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
}

export default App;