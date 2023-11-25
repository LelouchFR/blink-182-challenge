import { ReactElement } from 'react';
import Smiley from '../assets/img/smiley.svg';
import './header.sass';

export default function Header(): ReactElement {
    return (
        <header>
            <figure>
                <a href="#"><img src={Smiley} width={50} height={50} draggable={false} /></a>
            </figure>
            <ul>
                <li><a href="#music">Music</a></li>
                <li><a href="#tour">Tour</a></li>
                <li><a href="#store">Store</a></li>
                <li><a href="#band">The band</a></li>
            </ul>
        </header>
    )
}