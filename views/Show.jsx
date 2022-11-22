const h1 = {
    color: '#ffffff',
    backgroundColor: '#000000',
};


const React = require("react");

class Show extends React.Component {
    render() {
        const { name, img } = this.props.pokemon;    // destructure the pokemon array
        return (
            <div>
                <h1 style={h1}>Gotta Catch 'Em All!</h1>
                <a href="/pokemon">Pokemon Index Page</a>
                <h2>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h2>
                {}
                <a href="/pokemon"><img src={`${img}.jpg`} alt={name}></img></a>
            </div>
        )
    }
}

module.exports = Show;