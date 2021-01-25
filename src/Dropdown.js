import React,{useState} from 'react'
import './Dropdown.css'

export default function Dropdown() {
    const [click,setClick] = useState(false)

    const clicked = () =>{
        setClick(!click)
    }
    return (
        <div className='container'>
            <div className='drop-holder'>
                <div className='drop-content-1' onClick={clicked}>
                    <h3>What is Netflix?</h3>
                    <div className='icon'>
                        <i class={click ? "fas fa-caret-up":"fas fa-caret-down"}></i>
                    </div>
                </div>
                <div className='content-2' onClick={clicked}>
                    <div className={click ? 'drop-content-2 active':'drop-content-2'}>
                        <p>
                            Netflix is a platform which provides thousands of award wining<br/>
                            movies, series, anime, TV shows and documenteries in various inter<br/>
                            connected devices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
