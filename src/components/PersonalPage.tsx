import React from "react";
import type { MyProfileType } from "../types/MyProfileType";

type PersonalPageProps = {
    profile: MyProfileType;
};

class PersonalPage extends React.Component<PersonalPageProps> {
    render() {
        const { fullName, phone, email, city, workExperience, skills } = this.props.profile;

        return (
            <div>
                <h2>Personal Page</h2>

                <p><b>Full Name:</b> {fullName}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>City:</b> {city}</p>
                <p><b>Work Experience:</b> {workExperience}</p>
                <p><b>Skills:</b> {skills}</p>
            </div>
        );
    }
}

export { PersonalPage };
