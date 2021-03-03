import { Component } from "react";
import './css/Coverdiv.css'
import {AiFillCamera} from 'react-icons/ai'
class Coverdiv extends Component
{
    render()
    {
        return(
            <div className='Cover_container'>
                <div className='Cover_img'>
                    <img src='https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/68243270_1565531443584054_813503210005200896_o.jpg?_nc_cat=107&ccb=3&_nc_sid=e3f864&_nc_ohc=CpMs18eqBqQAX_IFlIv&_nc_ht=scontent.fhyd5-1.fna&oh=9cd700a48b56457064726c5519ba969f&oe=6060F6C6' alt='coverPic'/>
                </div>
                <div className='User_name'>
                    <span>Benjimen Richards(Ricky)</span>
                    <p>Add bio</p>
                </div>
                <div className='profile_image'>
                    <img src='https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/107369407_1902618169875378_7413824742455095126_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=fR6gZyIIQMUAX-oTfHg&_nc_ht=scontent.fhyd5-1.fna&oh=378b5552531c9ec70bf1f35b30a533ec&oe=6062682B' alt='/'/>
                    <div className='profile_icon'>
                    <AiFillCamera className='image_icon'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Coverdiv