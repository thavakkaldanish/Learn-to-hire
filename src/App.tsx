
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DatabaseProvider } from '@/contexts/DatabaseContext';
import Routes from './routes';

function App() {
  return (
    <Router>
      <DatabaseProvider>
        <TooltipProvider>
          <Routes />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </DatabaseProvider>
    </Router>
  );
}

export default App;
