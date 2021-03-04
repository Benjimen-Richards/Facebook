import {Component} from 'react'
import axios from 'axios'
const imageUrl ='http://localhost:1111/cloud'
class Rough extends Component
{
    constructor()
    {
        super()
        this.state = {
            selectedFile: null
          }
    }
    submithandler = () => {
        console.log(this.state.selectedFile)




        axios.post(imageUrl, this.state.selectedFile).then(res => { // then print response status
            console.log(res.statusText)
       })
    }
    changehandler=(event)=>
    {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
          })
    }
    render()
    {
        return(
            <div method="POST" encType="multipart/form-data" >
                <input type='file' name='file' onChange={this.changehandler}/>
                <button  onClick={this.submithandler}>Click</button>
            </div>
        )
    }
}
export default Rough