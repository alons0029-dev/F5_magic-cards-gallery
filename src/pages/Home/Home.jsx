
// REACT Components
import { useState } from "react";
import { useEffect } from "react";

// SERVICE Component
import { getAllCards } from "../../service/ApiCardsService.jsx";

// Components
import Header from "../../Components/Header/Header.jsx";
import CardStructure from "../../Components/CardStructure/CardStructure.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

/* FUNCTIONALITY */
const Home = () => {

    const [cards, setCards] = useState([]);

    const getAllCardsFromService = async () => {
        const response = await getAllCards();
        console.log(response);
        setCards(response);
    };

    useEffect(() => {
        getAllCardsFromService();
    }, []);
   
  return (
    <>
        <Header />
        <div className="home-cards-container">
            {
                cards.map((card) => (
                    <div key={card.id}>
                        <CardStructure 
                            cardName={card.name}
                            cardType={card.type}
                            cardSet={card.setName}
                            cardArtist={card.artist}
                            cardText={card.text}
                        />
                    </div>
                ))
            }
        </div>
        <Footer />
    </>
  )
}

export default Home