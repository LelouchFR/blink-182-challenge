import { ReactElement } from "react";
import { imgs } from '../assets/img/shop/shop';

export default function StoreSection(): ReactElement {
    const shopValues = [
        {img: imgs[0], title: "Overboard Beanie - Orange", price: 35},
        {img: imgs[1], title: "The Other Side Mug", price: 23},
        {img: imgs[2], title: "A New Era Beanie - Military Green", price: 35},
        {img: imgs[3], title: "Upside Down Pullover Hoodie - Black", price: 70},
        {img: imgs[4], title: "One More Time Logo T-Shirt - Black", price: 35},
        {img: imgs[5], title: "ONE MORE TIME... Standard Black Vinyl", price: 32},
        {img: imgs[6], title: "Untitled T-shirt - White", price: 25},
        {img: imgs[7], title: "Punky Bunny Keyring", price: 7}
    ];
    
    return (
        <section id='store'>
            <h2>Shop</h2>
            <p>Shop now for the ultimate punk rock exprerience!</p>
            <section className="cards">
                {shopValues.map((item, index) => 
                    <div key={index}>
                        <figure>
                            <img src={item.img} width={200} />
                            <figcaption>{item.title}<br />${item.price}</figcaption>
                        </figure>
                    </div>
                )}
            </section>
        </section>
    )
}