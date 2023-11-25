import { ReactElement, useState } from "react";
import AlbumCover from '../assets/img/album.png';
import AlbumCoverBack from '../assets/img/album_back.png';
import Vinyl from '../assets/img/vinyl.png';

export default function MusicSection(): ReactElement {
    const [show, setShow] = useState(false);

    const album = ["Anthem part 3", "Dance with me", "Fell in love", "Terrified", "One more time", "More than you know", "Turn this off!", "When we were young", "Edging", "You don't know what you've got", "Blink wave", "Bad news", "Hurt (interlude)", "Turpentine", "F*ck face", "Other side", "Childhood"];
    
    return (
        <section id='music'>
            <figure>
                <img className='vinyl' src={Vinyl} width={'35%'} />
                {show ?
                <div>
                    <img src={AlbumCoverBack} width={'39%'} onClick={() => setShow(false)} />
                    <ol>
                        {album.map((music, index) =>
                            <li key={index}>{music}</li>
                        )}
                    </ol>
                    <div>
                        <button>LISTEN NOW</button>
                        <button>BUY EXCLUSIVE VINYL</button>
                    </div>
                </div>
                :
                    <img className='album' src={AlbumCover} width={'50%'} onClick={() => setShow(true)}/>
                }
            </figure>
        </section>
    )
}