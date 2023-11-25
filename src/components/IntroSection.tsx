import { ReactElement } from "react";
import Logo from '../assets/img/logo.svg';
import VideoClip from '../assets/video/blink_182_edging.mp4';
import blendImg from '../assets/img/LCD_1.png';
import arrowPart1 from '../assets/img/arrow_pt1.svg';
import arrowPart2 from '../assets/img/arrow_pt2.svg';

export default function IntroSection(): ReactElement {
    return (
        <section id='main-page'>
            <div>
                <video autoPlay muted loop>
                    <source src={VideoClip} />
                </video>
                <figure>
                    <img src={blendImg} draggable={false} />
                </figure>
            </div>
            <div>
                <figure>
                    <a href="#music"><img src={Logo} alt="" width={200} draggable={false} /></a>
                    <figcaption>new album's out !</figcaption>
                </figure>
                <figure>
                    <img src={arrowPart1} draggable={false} />
                    <img src={arrowPart2} draggable={false} />
                </figure>
            </div>
        </section>
    )
}