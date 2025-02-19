import { LuNfc } from "react-icons/lu";
import { FcSimCardChip } from "react-icons/fc";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')
  const [cvv, setCvv] = useState('')
  const [senha, setSenha] = useState('')

  function handleCardNumber(event){
    let cardNumber = event.target.value
    let formattedCardNumber = cardNumber.replace(/\D/g, '') // remove tudo que não for numero
    formattedCardNumber = formattedCardNumber.substring(0, 16); // Limita o tamanho de numero no cartão
    formattedCardNumber = formattedCardNumber.replace(/(\d{4})/g, '$1 ').trim(); // Adiciona Espaço a cada 4 numeros
    setNumeroCartao(formattedCardNumber) 
  }

  function sendCartao(event){
    event.preventDefault()
    if ( !nomeCartao || !numeroCartao || !mes || !ano || !cvv || !senha){
      toast.error("Preencha todos os campos")
      return
    }
    
    if( mes.length < 2){
      toast.error("Mês deve conter 2 numeros")
      return
    }
    
    if( ano.length < 4){
      toast.error("Ano deve conter 4 numeros")
      return
    }
    
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    console.log(currentYear)
    console.log(currentMonth)

    if(ano < currentYear || (ano == currentYear && mes < currentMonth)){
      toast.error("Cartão expirado")
      return
    }
    
    if(cvv.length < 3){
      toast.error("Cvv deve conter 3 numeros")  
      return
    }
    
    if(senha.length < 4){
      toast.error("Senha deve conter no minimo 4 digitos")  
      return
    }

  }


  return (
    <div className='w-full h-screen flex flex-row'>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        theme="colored"
      />
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
              <p className="flex justify-end items-center h-16 pr-10 text-2xl italic ">
              {Object.keys(cvv).length > 0  && (cvv)}
              </p>
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
                value={numeroCartao}
                className="bg-slate-200 py-2 px-4 border-none rounded-md"
                placeholder="1234 4321 5678 8765"
                onChange={ (ele) => handleCardNumber(ele)}
                />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <label htmlFor="" className="mt-2 font-medium">Data de expiração</label>
                <div className="flex gap-2">
                  <input 
                    value={mes}
                    type="text" 
                    className="bg-slate-200 py-2 px-4 border-none rounded-md w-[130px]"
                    placeholder="MM"
                    onChange={ ele => setMes(ele.target.value.replace(/\D/g, ''))}
                    maxLength={2}/>
                  <input 
                    value={ano}
                    type="text" 
                    className="bg-slate-200 py-2 px-4 border-none rounded-md w-[130px]"
                    placeholder="AAAA"
                    onChange={ ele => setAno(ele.target.value.replace(/\D/g, ''))}
                    maxLength={4}
                    />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="" className="mt-2 font-medium">CVV</label>
                <input 
                  value={cvv}
                  type="text" 
                  className="bg-slate-200 py-2 px-4 border-none rounded-md w-[130px]"
                  placeholder="000"
                  onChange={ele => setCvv(ele.target.value.replace(/\D/g, ''))}
                  maxLength={3}
                  />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="" className="mt-2 font-medium">Senha do cartão</label>
              <input 
                value={senha}
                type="password" 
                className="bg-slate-200 py-2 px-4 border-none rounded-md"
                placeholder="*********"
                onChange={ ele => setSenha(ele.target.value)}/>
            </div>

            <button 
              className="bg-purple-800 px-2 py-4 rounded-md mt-10 text-amber-50 cursor-pointer"
              onClick={sendCartao}
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
