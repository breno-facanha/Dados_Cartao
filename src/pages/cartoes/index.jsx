import { LuNfc } from "react-icons/lu";
import { FcSimCardChip } from "react-icons/fc";
import CardComponent from "../../components/cardComponent";
import { useEffect, useState } from "react";
import instance from "../../api/instance";

export default function PageCartoes() {
  const [cartoes, setCartoes] = useState([])

  async function getCartoes() {
    const response = await instance.get("/creditcards")
    setCartoes(response.data)
  }

  useEffect( () => {
    getCartoes()
  },[])


  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[15%] flex items-center justify-center">
        <h1 className="text-[28px] font-bold">Cartões Cadastrados</h1>
      </div>
      <div className="w-full h-auto grid">
        {cartoes.map( (event) => {
          return <CardComponent key={event._id} nome={event.name} numero={event.number} />
        } )}
      
      </div>
    </div>
  );
}
