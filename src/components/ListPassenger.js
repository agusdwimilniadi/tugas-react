import ListItem from "./ListItem";


const ListPassenger = (props) => {

    const{data} = props

    return (
        <div>
            <table>
                <thead>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                </thead>
                <tbody>
                    {data.map((passenger) => (

                        
                        // <tr>
                        //     <td>{passenger.nama}</td>
                        //     <td>{passenger.umur}</td>
                        //     <td>{passenger.jenisKelamin}</td>
                        // </tr>
                        <ListItem item = {passenger} hapusPengunjung ={hapusPengunjung}/>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ListPassenger;