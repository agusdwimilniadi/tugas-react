import Header from "./components/Header"
import Button from "./components/Button"

export default function Main(varDataList) {
    return (
        <>
            <Header/>
            {varDataList.map((id)=> <Button data={id}/>) }
        </>

    )
}