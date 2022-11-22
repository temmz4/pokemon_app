const h1 = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

const React = require("react");

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;    // destructure the pokemon array

        return (
            <div>
                <h1 style={h1}>See All The Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Create New Pokemon</a>
                </nav>
                <ul>

                    {

                        pokemon.map((character, i) => {
                            let charName = character.name;

                            return (
                                <li key = {i}>
                                    <a href={`/pokemon/${character._id}`}>
                                    {charName.charAt(0).toUpperCase() + charName.slice(1).toLowerCase()}
                                    </a>
                                </li>
                            )
                        })

                    }


                </ul>
            </div>
        )
    }
}

module.exports = Index