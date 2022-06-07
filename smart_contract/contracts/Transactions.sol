// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

///---Primer Bloque
// El siguiente código crea un contrato inteligente con el nombre "Transactions"

contract Transactions {
    address private owner;  // Variable que contendra direcciones de billeteras.
    uint256 transactionCounts; // Variable contador de transacciones.
    mapping (address => uint) balanceOf; // Matriz que contiene direcciones de usuarios
                                         // que iteractuan con nuestro contrato inteligente.

//-- Segundo Bloque
// En este bloque, nuestro contrato inteligente usa un evento de transferencia entre dos cuentas. 
// Este evento llevará un registro de la dirección del remitente y del destinatario (sender - receiver)
// el monto enviado (amount)
// un comentario realizado para la transacción (remark)
// y una marca de tiempo que marcará cuándo se realizó la transacción (timestamp)
    event Transfer(address indexed sender, address indexed receiver, uint256 amount, string remark, uint256 timestamp);

// Definición de la estructura, para mantener la data de nuestro contrato uniforme.
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string remark;
        uint256 timestamp;
    }

 // Y, por último, definimos una matriz de transacciones que realizará un seguimiento de todas las 
 // transacciones que se realizan en este contrato inteligente.   
    TransferStruct[] transactions;

//--- Tercer bloque 3
//Este último bloque contiene seis métodos o funciones diferentes que se pueden ejecutar en este contrato inteligente.

// La primera es la función constructora, que es la primera que se ejecuta cada vez que se ejecuta este contrato inteligente.
// Establecerá el propietario como el que envía una transacción y también obtendrá su saldo.

    constructor() {
        owner = msg.sender;
        balanceOf[tx.origin] = msg.sender.balance;
    }

// La función getOwner devuelve la dirección del que realiza transacciones con este contrato inteligente.

    function getOwner() public view returns (address) {
        return owner;
    }

// La función sendMoney transfiere una cierta cantidad de éteres especificados por el remitente al receptor.
// Esta función requiere la dirección del remitente y del destinatario, el monto y el comentario sobre la transacción. 

    function sendMoney(address payable receiver, uint256 amount, string memory remark) public returns(bool success) {
        if (balanceOf[owner] < amount) return false;
        balanceOf[owner] -= amount;
        balanceOf[receiver] += amount;

        transactionCounts += 1;
        transactions.push(
            TransferStruct(
                owner,
                receiver,
                amount,
                remark,
                block.timestamp
            )
        );
        
// Una vez que termine con la lógica como se ve en el bloque de código de la función,
// emitirá un evento de transferencia que se vería en la terminal.
        emit Transfer(msg.sender, receiver, amount, remark, block.timestamp);
        return true;
    }

    function getBalance(address addr) public view returns(uint) {
        return balanceOf[addr];
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionsCount() public view returns(uint256) {
        return transactionCounts;
    }

}