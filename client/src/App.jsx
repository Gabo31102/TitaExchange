import React, { useEffect } from 'react'

import { AddTransactionCard } from "./components/AddTransactionCard";
import { Header } from './components/Header'
import { Content } from "./components/Content";
import { Table } from "./components/Table";


import {
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
  changeWallet
} from './shared/Transaction'
import { useGlobalState } from './store'

export const App = () => {

  const [connectedAccount] = useGlobalState('connectedAccount')
    useEffect(() => {
    isWallectConnected()
    checkIfTransactionExist()
  }, [])


  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Content />
        {!connectedAccount ? (
          <div className="text-center mt-20 mb-10">
            <button
              onClick={connectWallet}
              className="text-white bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring"
            >
              Connecte su billetera
            </button>
          </div>
        ) : (

          
          <>
            <Table />
            <AddTransactionCard />
            <div className="text-center mt-10 mb-10">
            <button
              onClick={changeWallet}
              className="text-white bg-green-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring"
            >
              Cambiar de billetera
            </button>
            </div>
          </>
        )}
      </div>
  )
}


export default App
