import { Component } from "react"
import {v4 as uuidv4} from 'uuid'
import Header from "./Header"
import ListTugas from "./ListTugas"


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [ 
 
                {
                  "id": uuidv4(),
              
                  "title": "Membuat Komponen",
              
                  "completed": true,
              
                },
              
                {
              
                  "id": uuidv4(),
              
                  "title": "Unit Testing",
              
                  "completed": false,
              
                },
              
                {
              
                  "id": uuidv4(),
              
                  "title": "Setup Development Environment",
              
                  "completed": true,
              
                },
              
                {
              
                  "id": uuidv4(),
              
                  "title": "Deploy ke server",
              
                  "completed": false,
              
                },  
            ]
        }
    }
    hapusList = (id) => {
      const newListTugas = this.state.data.filter((item)=> item.id !== id) //id nya bukan itu
      this.setState({data: newListTugas}) //RETURN
    }
    render() {
        return (
            <> 
                <Header/>
                <ListTugas data={this.state.data} hapusList ={this.hapusList}/>
            </>
        )
    }
}

export default Home