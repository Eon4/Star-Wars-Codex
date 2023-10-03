import './App.css'
import { Main } from "./Pages/Main";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MainLayout } from './Layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const queryClient = new QueryClient();

  return (
    <>

      <QueryClientProvider client={queryClient}>
        <Main/>
      </QueryClientProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App