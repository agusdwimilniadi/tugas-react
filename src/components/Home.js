import { Component } from "react";
import { isUuid } from 'uuidv4'
import ListPassenger from "./ListPassenger";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id : isUuid(),
                    nama : 'Agus',
                    umur : 21,
                    jenisKelamin : 'Pria'
                },
                {
                    id : isUuid(),
                    nama : 'Dwi',
                    umur : 22,
                    jenisKelamin : 'Pria'
                },
                {
                    id : isUuid(),
                    nama : 'Milniadi',
                    umur : 13,
                    jenisKelamin : 'Wanita'
                },
                {
                    id : isUuid(),
                    nama : 'Jaka',
                    umur : 90,
                    jenisKelamin : 'Wanita'
                },
            ]
        }
        
    };

    hapusPengunjung = (id) => {
        const newListPengunjung = this.state.data.filter((item) => item.id !== id )

        this.setState({data : newListPengunjung})
    }

    tambahPengunjung = (newUser) => {
        const newPengunjung ={ id:isUuid(), ...newUser  }

        this.state({data: [...this.state.data, newPengunjung]})
    }

    render() {
        return (
            <div>
                <ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung}/>
            </div>
        )
    }
}

export default Home;