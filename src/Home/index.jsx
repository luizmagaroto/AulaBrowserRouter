import Header from "../components/header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
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
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdescontostop.com.br%2Floja%2Fcupom-desconto-new-balance%2F&psig=AOvVaw2N1k74g9UOvVm3dcntBbuF&ust=1724299325402000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJD18teZhYgDFQAAAAAdAAAAABAR" alt="Rebel V2" />
                </div>
                <div>
                    <img src="https://newbrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/9abe3509-b6d6-4a8e-af69-2acbd84d7b97___bb4e068dfa1153ca70c6b211771740f5.jpg" alt="New Balance X São Paulo" />
                </div>
            </Carousel>
        </>
    );
}
