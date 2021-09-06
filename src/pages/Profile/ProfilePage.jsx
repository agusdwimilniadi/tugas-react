import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"


export default function ProfilePage({users}) {
    return (
        <div>
            <Header text="Profile Page"/>
            {users.map((x)=> <ProfileCard user={x}/>) }
        </div>
        
    )
}