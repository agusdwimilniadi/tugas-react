const ListItem = ({item, hapusPengunjung}) => {
    return (
        <tr>
            <td>{item.namaTugas}</td>
            <td>{item.umur}</td>
            <td>
                <button onClick={()=>{hapusPengunjung(item.id)}}>Hapus</button>
            </td>
        </tr>
    )
}

export default ListItem;