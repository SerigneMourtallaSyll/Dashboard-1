import React from 'react';
import { Card } from 'react-bootstrap';

function CardProject({icon, title, description, castingNum, date , id}) {
  return (
    <Card className='border-0 carte col-md-3 rounded-0 mb-3'>
        <div className='d-flex px-1 pt-3 '>
            <Card.Img variant="top" src={icon} className='rounded mx-3'  id={id}/>
            <Card.Title className='title'>{title}</Card.Title>
        </div>
        <Card.Body>
            <Card.Text className='desc pb-3'>
            {description}
            </Card.Text>
            <div className='d-flex justify-content-between footer'>
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

export default CardProject