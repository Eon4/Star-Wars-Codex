import './App.css'
import { Main } from "./Pages/Main";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MainLayout } from './Layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetails } from "./Pages/CharacterDetails";
import { Characters } from "./Pages/Characters";



function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
                <Main/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}/>
          <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetails />} />       
             </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;


