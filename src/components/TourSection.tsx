import { ReactElement } from "react";

export default function TourSection(): ReactElement {
    const tour = [
        {time: "1 Feb, 2023", place: "Toledo", location: "Accord Hotel Arena", soldOut: false},
        {time: "8 Sep, 2023", place: "Pembroke Pines", location: "Accord Hotel Arena", soldOut: false},
        {time: "21 Sep, 2023", place: "Fairfield", location: "Accord Hotel Arena", soldOut: false},
        {time: "17 Oct, 2023", place: "Orange", location: "Accord Hotel Arena", soldOut: false},
        {time: "22 Oct, 2023", place: "Paris", location: "Accord Hotel Arena", soldOut: true},
        {time: "24 May, 2023", place: "Austin", location: "Accord Hotel Arena", soldOut: false},
        {time: "22 Oct, 2023", place: "Pembroke Pines", location: "Accord Hotel Arena", soldOut: false},
        {time: "8 Sep, 2023", place: "Naperville", location: "Accord Hotel Arena", soldOut: false}
    ];
    
    return (
        <section id='tour'>
            <h2>Tour</h2>
            <p>Do you want to fall in love with this girl at the blink-182 rock show?</p>
            <section>
                <ul>
                    {Object.values(tour).map((value, index) =>
                        <li key={index} className={value?.soldOut ? "sold_out" : ""}><span>{value?.time}</span><span><strong>{value?.place}</strong></span><span>{value?.location}</span>{!value?.soldOut ? <button><strong>Buy Tickets</strong></button> : <span>Sold out</span>}</li>
                    )}
                </ul>
            </section>
        </section>
    )
}