import { useState } from "react";
import CardProdutos from "../components/CardProdutos";
import Header from "../components/header";

export default function Ofertas() {
    const [lista, setLista] = useState([
        { title: "Tênis New Balance 550 Masculino", preco: "R$ 799,99" }
    ]);

    return (
        <div>
            <Header />
            <h1>Ofertas</h1>
            <CardProdutos listaProdutos={lista} />
        </div>
    );
}
