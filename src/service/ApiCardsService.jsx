
// AXIOS Component
import axios from "axios";

// API URL
const apiMagicCardsUrl = "https://api.magicthegathering.io/v1/cards";

// Get API Information
const getAllCards = async () => {
    const response = await axios.get(apiMagicCardsUrl);
    console.log(response.data.cards)
    return response.data.cards;
};

export { getAllCards };