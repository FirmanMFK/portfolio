import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyTelkomselDetail from "./pages/MyTelkomselDetail";
import DigitalAlumniDetail from "./pages/DigitalAlumniDetail";
import BukkuEcommerceDetail from "./pages/BukkuEcommerceDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/mytelkomsel" element={<MyTelkomselDetail />} />
          <Route path="/projects/digital-alumni-book" element={<DigitalAlumniDetail />} />
          <Route path="/projects/bukku-e-commerce" element={<BukkuEcommerceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
