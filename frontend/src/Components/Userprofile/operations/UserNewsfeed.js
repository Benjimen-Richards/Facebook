import './Css/UserNewsfeed.css'
const { Component } = require("react");
class UserNewsfeed extends Component
{
    render()
    {
        return(
            <div className='newsFeed_container'>
    <div className='intro_div'>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum diam a nulla fringilla viverra. In ut tellus consequat, dapibus justo non, accumsan lorem. Nullam at ipsum vel metus suscipit auctor. Etiam at dignissim quam, eu euismod odio. Phasellus aliquam, dolor quis ultrices posuere, nisl enim maximus dui, in suscipit elit magna sed tellus. Aliquam nec odio rutrum, facilisis velit ut, viverra metus. Maecenas odio elit, egestas vel felis eget, ultrices rhoncus mi. Aliquam nec eleifend diam. Sed vitae nisl in dolor ultrices dapibus eu ac nulla. Quisque porttitor, nunc pellentesque sodales aliquet, risus dolor iaculis est, in volutpat sapien mauris eu nibh. Pellentesque vestibulum eget neque id ullamcorper. Ut vitae molestie urna. Donec quis interdum dui.</h3>
    </div>
    <div className='posts'>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum diam a nulla fringilla viverra. In ut tellus consequat, dapibus justo non, accumsan lorem. Nullam at ipsum vel metus suscipit auctor. Etiam at dignissim quam, eu euismod odio. Phasellus aliquam, dolor quis ultrices posuere, nisl enim maximus dui, in suscipit elit magna sed tellus. Aliquam nec odio rutrum, facilisis velit ut, viverra metus. Maecenas odio elit, egestas vel felis eget, ultrices rhoncus mi. Aliquam nec eleifend diam. Sed vitae nisl in dolor ultrices dapibus eu ac nulla. Quisque porttitor, nunc pellentesque sodales aliquet, risus dolor iaculis est, in volutpat sapien mauris eu nibh. Pellentesque vestibulum eget neque id ullamcorper. Ut vitae molestie urna. Donec quis interdum dui.</h3>
    </div>
            </div>
        )
    }
}
export default UserNewsfeed