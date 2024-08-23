import {useState} from "react";
export default function ListarProdutos({ListarProdutos}){
    return(
        <div>
            {ListarProdutos.map((produto)=>
            <div>
                <p>{produto.title}</p>
                <p>{produto.preco}</p>
                <p>{produto.cor}</p>
                <p>{produto.tamanho}</p>
                <p>{produto.id}</p>
                <p>{produto.image}</p>
            </div>
            
            )}
        </div>
    )
}