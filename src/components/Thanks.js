import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Thanks = () => {
    const history = useHistory();
    const { name } = useParams();
    console.log(history);
    return (
        <React.Fragment>
            <div className="thanks">
                <p>Thanks <strong>{name}!!</strong></p>
                <p>You joined <strong>{history.location.state}</strong></p>
                <hr/>
                <p><strong>Disclaimer : </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores, deleniti, commodi illum deserunt ea expedita sint excepturi soluta exercitationem aliquid ut pariatur voluptate id. Ab perspiciatis corrupti at velit ea, quisquam quas id nam possimus impedit maxime voluptatem fugiat, labore illo recusandae explicabo harum nihil. Soluta alias quod expedita.</p>
            </div>
        </React.Fragment>
    )
}

export default Thanks;