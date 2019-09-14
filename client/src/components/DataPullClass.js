import React from 'react';
import DisplayPlayers from './DisplayPlayers';
import Button from './Button';

class DataPullClass extends React.Component {
    constructor(){
        super();
        this.state = {
            worldCupData: [],
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
                <Button />
                {this.state.worldCupData.map(data => {
                    return <DisplayPlayers players={data} />
                })}
                
            </div>
        )
    }
}

export default DataPullClass;