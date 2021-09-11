const DetailPage = (props) => {
    console.log(props)

    return (
    <>
        <div className="container my-2">
            <h1 className="text-center">Detail Tugas</h1>
            <br />

            <h5>Detail tugas : {props.location.state.data.title}</h5>

        </div>
    </>
    )

}
export default DetailPage;