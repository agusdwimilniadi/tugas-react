
import ListItem from "./ListItem";
import style from "../components/style.module.css"



const ListTugas = (props) => {
    const{data, hapusList} = props //ambil variabel data dan hapus list dari props

    return (
        <div className={style.container}>
            <input type="text" className={style.inputFill} />
            <button className={style.buttonInput} onClick={()=>{}}>Tambah</button>
            <br /><br />

            <table style={{margin:"auto"}}>
                <thead style={{textAlign:"center", margin:"0px"}}>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"300px"}>Tugas</td>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"100px"}>Status</td>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"100px"}>Aksi</td>

                </thead>
                <tbody>
                    {data.map((tugas) => <ListItem key={tugas.id} item = {tugas} hapusList ={hapusList}/>)}
                </tbody>

            </table>
        </div>
    )
}

export default ListTugas;