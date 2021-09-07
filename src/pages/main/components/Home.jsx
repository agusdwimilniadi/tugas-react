import { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id : uuidv4(),
                    namaTugas : 'Agus',
                },
                {
                    id : uuidv4(),
                    namaTugas : 'Dwi',
                },
                {
                    id : uuidv4(),
                    namaTugas : 'Milniadi',
                },
                {
                    id : uuidv4(),
                    namaTugas : 'Jaka',
                },
            ]
        }
        
    };

    hapusPengunjung = (id) => {
        const newListPengunjung = this.state.data.filter((item) => item.id !== id )

        this.setState({data : newListPengunjung})
    }

    tambahPengunjung = (newUser) => {
        const newPengunjung ={ id:uuidv4(), ...newUser  }

        this.setState({data: [...this.state.data, newPengunjung]})
    }

    render() {
        return (
            <div>
                <ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung} tambahPengunjung={this.tambahPengunjung}/>
                <PassengerInput/>
            </div>
        )
    }
}

export default Home;