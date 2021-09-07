import { Component } from "react";

class PassengerInput extends Component {
    state = {
        nama : "",
        umur: "",
        editing: true
    }

    onChange = (e) => {
        this.setState({
            nama : e.target.nama,
            umur : e.target.nama
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.nama && this.state.umur;

        if (formIsNotEmpty) {
            const newData = {
                nama : this.state.nama,
                umur : this.state.umur,
            }
            this.props.tambahPengunjung(newData);

            this.setState({
                nama: "",
                umur: "",

            })
        } else {
            alert("Data masih ada yang kosong")
        }

        
    }

    handleBukaInput = () => {
        this.setState({
            editing: false
        })
    }
    handleTutupInput = () => {
        this.setState ({
            editing: true
        })
    }


    render() {
        const viewMode = {};
        const editMode = {};

        if (this.state.editing) {
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }

        return(
            <div>
                <div onSubmit={()=> {}} style={viewMode}>
                    <p>Masukkan Nama Anda</p>
                    <input type="text" placeholder="Nama Anda" value={this.state.nama}  name="nama" onChange={this.onChange} />

                    <p>Masukkan Umur Anda</p>
                    <input type="text" placeholder="Umur Anda" value={this.state.umur}  name="umur" onChange={this.onChange} />


                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleTutupInput}>Selesai</button>
                </div>
                <button onClick={this.handleBukaInput} style={editMode} >Masukkan Nama Penumpang</button>
            </div>
        ) 
    }
}
export default PassengerInput;