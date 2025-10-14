import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyTelkomselDetail from "./pages/MyTelkomselDetail";
import DigitalAlumniDetail from "./pages/DigitalAlumniDetail";
import BukkuEcommerceDetail from "./pages/BukkuEcommerceDetail";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/mytelkomsel" element={<MyTelkomselDetail />} />
        <Route path="/projects/digital-alumni-book" element={<DigitalAlumniDetail />} />
        <Route path="/projects/bukku-e-commerce" element={<BukkuEcommerceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
