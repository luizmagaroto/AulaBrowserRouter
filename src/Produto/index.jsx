import { useState } from "react";
import Header from ".../components/Header";
import Footer from "../components/Footeer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ListarProdutos from "../components/ListarProdutos";

import '../globals.css'

export default function Home() {
    const [produtos] = useState([
        {
            title: 'Tênis New Balance 550 Masculino',
            preco: 'R$ 799,99',
            cor: 'vermelho',
            tamanho: '40',
            id: '1',
            image: "https://newbrasil.vtexassets.com/arquivos/ids/172369-1200-1200?v=638584583883230000&width=1200&height=1200&aspect=true"
        },
        {
            title: 'Tênis New Balance Fuelcell Supercomp Elite V4 Masculino',
            preco: 'R$ 1.999,99',
            cor: 'Verde água',
            tamanho: '39',
            id: '2',
            image: "https://newbrasil.vtexassets.com/arquivos/ids/172581-1200-1200?v=638587340707830000&width=1200&height=1200&aspect=true"
        },
        {
            title: 'Tênis New Balance 480 Low Unissex',
            preco: 'R$ 549,99',
            cor: 'Graphite',
            tamanho: '41',
            id: '3',
            image: "https://newbrasil.vtexassets.com/arquivos/ids/166270-1200-1200?v=638429100224570000&width=1200&height=1200&aspect=true"
        },
        {
            title: 'Tênis New Balance 530 Unisex',
            preco: '699,99',
            cor: 'White/Quarry Blue',
            tamanho: '40',
            id: '4',
            image: "https://newbrasil.vtexassets.com/arquivos/ids/167521-1200-1200?v=638469804019600000&width=1200&height=1200&aspect=true"
        },
        {
            title: 'Tênis New Balance 9060 Unisex',
            preco: '1.199,99',
            cor: 'Sea Salt/Olivine',
            tamanho: '38',
            id: '5',
            image: "https://newbrasil.vtexassets.com/arquivos/ids/169751-1200-1200?v=638497373631830000&width=1200&height=1200&aspect=true"
        },
       
    ]);

    return (
        <>
            <Header />
            <h1>NEW BALANCE</h1>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
            >
                <div>
                    <img src="https://newbrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/0d017274-dddc-4105-8980-f9ce629832ee___61d91ca79674364e0bde7c3aadf7663e.jpg" alt="Rebel V2" />
                </div>
                <div>
                    <img src="https://newbrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/0d017274-dddc-4105-8980-f9ce629832ee___61d91ca79674364e0bde7c3aadf7663e.jpg" alt="New Balance X São Paulo" />
                </div>
            </Carousel>
        </>
    );
}
