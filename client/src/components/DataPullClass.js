import React from 'react';
import DisplayPlayers from './DisplayPlayers';

class DataPullClass extends React.Component {
    constructor(){
        super();
        this.state = {
            worldCupData: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/players')
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log('succesfull mount: ');
                this.setState({worldCupData: res});
            })
            .catch(err => {
                console.error('Error: ', err);
            });
    }

    render(){
        return(
            <div>
                <DisplayPlayers players={this.state.worldCupData} />
            </div>
        )
    }
}

export default DataPullClass;