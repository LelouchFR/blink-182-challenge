import { ReactElement } from "react";
import { band } from '../assets/img/band/band';

export default function BandSection(): ReactElement {
    const bandElements = [
        {img: band[0], name: "Mark Hoppus", type: "Bassist and Vocalist"},
        {img: band[1], name: "Tom DeLong", type: "Guitarist and Vocalist"},
        {img: band[2], name: "Travis Barker", type: "Bassist and Vocalist"}
    ];

    return (
        <section id='band'>
            <h2>The Band</h2>
            <p>Get to know the punk-rock legends behind the iconic band, Blink-182.</p>
            <section>
                {bandElements.map((musician, index) =>
                    <div key={index}>
                        <div>
                            <img src={musician.img} width={200} />
                        </div>
                        <p>{musician.name}<br /><strong><small>{musician.type}</small></strong></p>
                    </div>
                )}
            </section>
        </section>
    )
}