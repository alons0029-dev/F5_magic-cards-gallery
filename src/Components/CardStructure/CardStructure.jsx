/* eslint-disable react/prop-types */

// STYLE Import
import "./card-structure.css";

/* FUNCTIONALITY */
const CardStructure = ({ cardName, cardType, cardSet, cardArtist, cardText }) => {

    return (
        <>
            <div className="magic-card-container">
                <section className="magic-card-basic-info">
                    <img src="https://picsum.photos/seed/picsum/200/300
" alt="Image Placeholder" className="magic-card-img-placeholder" />
                    <h3 className="magic-card-title">{cardName}</h3>
                </section>
                <section className="magic-card-detailed-info">
                    <section className="magic-card-attribute-container">
                        <h5 className="magic-card-attribute-title">Type</h5>
                        <p className="magic-card-attribute-text">{cardType}</p>
                    </section>
                    <section className="magic-card-attribute-container">
                        <h5 className="magic-card-attribute-title">Edition</h5>
                        <p className="magic-card-attribute-text">{cardSet}</p>
                    </section>
                    <section className="magic-card-attribute-container">
                        <h5 className="magic-card-attribute-title">Artist</h5>
                        <p className="magic-card-attribute-text">{cardArtist}</p>
                    </section>
                    <section className="magic-card-attribute-container">
                        <h5 className="magic-card-attribute-title">Description</h5>
                        <p className="magic-card-attribute-text">{cardText}</p>
                    </section>
                </section>
            </div>
        </>
    )
}

export default CardStructure