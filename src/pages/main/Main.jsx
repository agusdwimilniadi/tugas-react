import Header from "./components/Header"
import Button from "./components/Button"
import Container from "./components/Container"

export default function Main({varDataList}) {
    return (
        <div>
            <Header/>
            {varDataList.map((x)=> <Button data={x} />) }
        </div>

    )
}