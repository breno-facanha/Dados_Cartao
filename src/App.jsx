import { LuNfc } from "react-icons/lu";
import { FcSimCardChip } from "react-icons/fc";
import { useState } from "react";


function App() {

  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')


  return (
    <div className='w-full h-screen flex flex-row'>
      <div className="w-[50%] h-full relative">
        <div className="w-[60%] h-full bg-purple-800"></div>
        <div className="w-[40%] h-full"></div>
        <div className="w-full h-full absolute top-0 flex flex-col">
          <div className="w-[600px] h-[340px] bg-slate-950 rounded-[10px] mt-[40px] ml-[70px]">
            <div className="flex justify-between pl-5">
              <div className="flex items-center gap-2 mt-3 ml-3">
                <div className="rounded-full w-[70px] h-[70px] bg-white"></div>
                <div className="rounded-full w-[40px] h-[40px] bg-white"></div>
              </div>
              <div className="text-white mr-5 mt-2 text-3xl">Nome do Banco</div>
            </div>
            <div className="flex items-center mt-3 pl-8">
              <FcSimCardChip size={80}/>
              <LuNfc size={40} color="#ffffff"/>
            </div>
            <div className="text-white text-2xl w-full flex justify-left pl-10 pt-6">
              <p className="text-[40px]">{numeroCartao == false ? '0000 0000 0000 0000': numeroCartao}</p>
            </div>
            <div className="text-white pl-10 text-[40px]">
              {nomeCartao == false ? 'Nome no cartão' : nomeCartao}
            </div>
          </div>
          <div className="w-[600px] h-[340px] bg-slate-950 rounded-[10px] mt-[30px] ml-[250px] flex flex-col items-center">
            <div className="mt-12 h-16 bg-slate-700 w-full"></div>
            <div className="w-[80%] h-16 bg-slate-300 mt-12">
              <p className="flex justify-end items-center h-16 pr-10 text-2xl italic ">000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full text-black flex-col justify-center">
        <div className="w-[700px]">
          <h1 className="text-6xl mt-15 ml-10">Preencha seus dados</h1>
        </div>
        <form action="">
          <div className="mt-24 w-[400px] ml-48 flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="" className="mt-2 font-medium">Nome no cartão</label>
              <input
                onChange={ (ele) => setNomeCartao(ele.target.value)} 
                value={nomeCartao}
                type="text" 
                className="bg-slate-200 py-2 px-4 border-none rounded-md"/>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="" className="mt-2 font-medium">Número do cartão</label>
              <input 
                type="text" 
                className="bg-slate-200 py-2 px-4 border-none rounded-md"
                placeholder="1234 4321 5678 8765"
                onChange={ (ele) => setNumeroCartao(ele.target.value)}
                value={numeroCartao}
                />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <label htmlFor="" className="mt-2 font-medium">Data de expiração</label>
                <div className="flex gap-2">
                  <input type="text" className="bg-slate-200 py-2 px-4 border-none rounded-md w-[130px]"placeholder="MM"/>
                  <input type="text" className="bg-slate-200 py-2 px-4 border-none rounded-md w-[130px]"placeholder="AA"/>
                </div>
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="" className="mt-2 font-medium">CVV</label>
                <input type="text" className="bg-slate-200 py-2 px-4 border-none rounded-md w-[130px]"placeholder="000"/>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="" className="mt-2 font-medium">Senha do cartão</label>
              <input type="password" className="bg-slate-200 py-2 px-4 border-none rounded-md"placeholder="*********"/>
            </div>

            <button 
              className="bg-purple-800 px-2 py-4 rounded-md mt-10 text-amber-50 cursor-pointer"
              onClick={()=> alert('VOCÊ FOI CLONADO')}
              >
                Verificar
              </button>
          
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
