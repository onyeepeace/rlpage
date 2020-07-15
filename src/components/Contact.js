import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
    const history = useHistory();
    const goBack = () => {
        history.push();
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [COntactEmail, setContactEmail] = useState("");

    return (
        <React.Fragment>
            <button className="back" onClick={goBack}>&larr; Go Back</button>
        </React.Fragment>
    )
}

export default Contact;