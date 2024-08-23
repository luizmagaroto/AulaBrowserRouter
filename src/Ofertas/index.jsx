import {useState} from "react";
import ListarProdutos from "../components/ListarProdutos";
export default function oferta(){
    const [produtos, setProdutos] = useState([

        {
            title: 'Tênis New Balance 550 Masculino',
            preco: 'R$ 799,99',
            cor: 'vermelho',
            tamanho: '40',
            id: '1',
            image: "https://newbrasil.vtexassets.com/arquivos/ids/172369-1200-1200?v=638584583883230000&width=1200&height=1200&aspect=true"
        },

    ])

return(
    <div>
        <ListarProdutos listaProdutos={produtos}/>
    </div>,

    <div className="image">

    {produtos.map((produtos, index) => (
    <img
    key={index}
    src={produtos.imagem}
    alt={produtos.nome}
    />
)
)}

    </div>
)
}
