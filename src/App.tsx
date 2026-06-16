import './App.css'
import {PersonalPage} from "./components/PersonalPage.tsx";
import type {MyProfileType} from "./types/MyProfileType.ts";

function App() {
    const myProfile: MyProfileType = {
        fullName: "Test name",
        phone: "+380888888888",
        email: "@example.com",
        city: "Ukraine, Kiev",
        workExperience: "test work",
        skills: "test skills",
    };
    return (
        <>
            <PersonalPage profile={myProfile}></PersonalPage>
        </>
    )
}
export default App
