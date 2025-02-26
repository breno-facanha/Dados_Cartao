import { LuNfc } from "react-icons/lu";
import { FcSimCardChip } from "react-icons/fc";
import CardComponent from "../../components/cardComponent";

export default function PageCartoes() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[15%] flex items-center justify-center">
        <h1 className="text-[28px] font-bold">Cartões Cadastrados</h1>
      </div>
      <div className="w-full h-auto grid">
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
