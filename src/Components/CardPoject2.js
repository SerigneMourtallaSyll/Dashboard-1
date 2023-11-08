import React from 'react';
import { Card } from 'react-bootstrap';


function CardPoject2({ icon, title, description, castingNum, date, id }) {
    return (
        <Card className='border-0 col-md-6 carte rounded-0 mb-3 mx-1'>
            <div className='d-flex px-1 pt-3'>
                <Card.Img variant="top" src={icon} className='rounded mx-3' id={id} />
                <Card.Title className='title'>{title}</Card.Title>
                <div className="mx-4 form-check">
                    <input className="form-check-input text-success bg-success border-0 rounded-circle" type="checkbox" value="" id="flexCheckChecked" checked/>
                </div>
            </div>
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h6>{castingNum}</h6>
                        <p>Castings</p>
                    </div>
                    <div>
                        <h6>{date}</h6>
                        <p>Due date</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardPoject2