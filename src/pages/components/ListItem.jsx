import style from "../components/style.module.css"
const ListItem = ({item, hapusList}) => {
    return (
        <tr className={style.boxCenter}>
            <td style={item.completed ? {textDecoration:"line-through"} : {}}>{item.title}</td>
            <td>
                <input type="checkbox"  checked={item.completed? (true) : (false)}/>
            </td>
            <td>
                <button className={style.buttonDelete} onClick={()=>{hapusList(item.id)}}>Hapus</button>
            </td>
        </tr>
    )
}

export default ListItem;