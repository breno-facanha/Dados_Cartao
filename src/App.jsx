import PagePagemnto from "./pages/pagamento"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/pagamento" element={<PagePagemnto/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
