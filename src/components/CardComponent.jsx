import { LuNfc } from "react-icons/lu";
import { FcSimCardChip } from "react-icons/fc";
import { useEffect, useState } from "react";
import ModalCartao from "./ModalCartao";

export default function CardComponent({ cartao }) {
  const [sideCartao, setSideCartao] = useState("front");
  const [modal, setModal] = useState(false)

  function alterCard() {
    if (sideCartao === "front") {
      console.log("frente");
    }

    if (sideCartao === "back") {
      console.log("trás");
    }
  }

  useEffect(() => {
    alterCard();
  }, [sideCartao]);

  return (
    <div
      onMouseOver={() => setSideCartao("back")}
      onMouseOut={() => setSideCartao("front")}
      className="cursor-pointer"
      onClick={() => setModal(true)}
    >
      {sideCartao === "front" ? (
        <div className="w-[600px] h-[340px] bg-slate-950 rounded-[10px] mt-[40px] ml-[70px]">
          <div className="flex justify-between pl-5">
            <div className="flex items-center gap-2 mt-3 ml-3">
              <div className="rounded-full w-[70px] h-[70px] bg-white"></div>
              <div className="rounded-full w-[40px] h-[40px] bg-white"></div>
            </div>
            <div className="text-white mr-5 mt-2 text-3xl">Nome do Banco</div>
          </div>
          <div className="flex items-center mt-3 pl-8">
            <FcSimCardChip size={80} />
            <LuNfc size={40} color="#ffffff" />
          </div>
          <div className="text-white text-2xl w-full flex justify-left pl-10 pt-6">
            <p className="text-[40px]">
              {/* {numeroCartao == false ? "0000 0000 0000 0000" : numeroCartao} */}
              {cartao.number || "0000 0000 0000 0000"}
            </p>
          </div>
          <div className="text-white pl-10 text-[40px]">
            {/* {nomeCartao == false ? "Nome no cartão" : nomeCartao} */}
            {cartao.name || "Nome no cartão"}
          </div>
        </div>
      ) : (
        <div className="w-[600px] h-[340px] bg-black rounded-[10px] mt-[40px] ml-[70px]">
          <div className="w-full h-[30%] flex items-end">
            <div className="w-full h-[75%] bg-neutral-900"></div>
          </div>
          <div className="w-full h-[70%] flex justify-center pt-[30px]">
            <div className="w-[70%] h-[55px] bg-gray-500 flex justify-end items-center pr-[20px]">
              <p className="text-[26px]">{ cartao.cvv || "000"}</p>
            </div>
          </div>
        </div>
      )}

      {
        modal && ( <ModalCartao />)
      }
    </div>
  );
}
