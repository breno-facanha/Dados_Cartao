import PageCartoes from "./pages/cartoes"
import PagePagamento from "./pages/pagamento"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<p>Login</p>}/>
        <Route path="/pagamento" element={<PagePagamento />}/>
        <Route path="/cartoes" element={<PageCartoes />}/>        
      </Routes>
    </BrowserRouter>
  )
}
export default App
