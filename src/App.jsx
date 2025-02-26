import PagePagamento from "./pages/pagamento"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/pagamento" element={<PagePagamento/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
