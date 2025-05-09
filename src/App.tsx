
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import LoanApplication from "./pages/LoanApplication";
import CreditReport from "./pages/CreditReport";
import FinancialLiteracyPayingOnTime from "./pages/FinancialLiteracyPayingOnTime";
import FinancialLiteracyBorrowWisely from "./pages/FinancialLiteracyBorrowWisely";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/loan-application" element={<LoanApplication />} />
          <Route path="/credit-report" element={<CreditReport />} />
          <Route path="/financial-literacy/paying-on-time" element={<FinancialLiteracyPayingOnTime />} />
          <Route path="/financial-literacy/borrow-wisely" element={<FinancialLiteracyBorrowWisely />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
