import { LuNfc } from "react-icons/lu";
import { FcSimCardChip } from "react-icons/fc";

export default function CardComponent(){
    return (
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
                      {"0000 0000 0000 0000"}
                    </p>
                  </div>
                  <div className="text-white pl-10 text-[40px]">
                    {/* {nomeCartao == false ? "Nome no cartão" : nomeCartao} */}
                    {"Nome no cartão"}
                  </div>
                </div>
    )
}