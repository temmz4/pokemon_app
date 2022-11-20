const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

    class MyFirstComponent extends React.Component() {
    render () {
        
        return (
            <div style={myStyle}>My First React Component!
                <h1>See All Pokemon</h1>
                <ul>

                </ul>
            </div>
        )
    };
};

module.exports = Index