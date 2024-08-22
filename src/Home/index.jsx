import React, { useState } from 'react';
import Header from './header'; // Certifique-se de que o Header está no caminho correto
import { Carousel } from 'react-responsive-carousel'; // Ajuste o import se estiver usando uma biblioteca diferente
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa o CSS do carousel

export default function Home() {
    const [produtos] = useState([
        {
            title: 'Tênis New Balance 550 Masculino',
            preco: '799,99',
            image: "https://newbrasil.vtexassets.com/arquivos/ids/172369-1200-1200?v=638584583883230000&width=1200&height=1200&aspect=true"
        },
        // Repita os produtos conforme necessário
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
