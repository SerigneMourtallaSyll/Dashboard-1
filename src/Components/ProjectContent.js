import React from 'react';
import { Container, Row } from 'react-bootstrap';
import card from './Utils';
import { card2 } from './Utils';
import CardProject from './CardProject';
import CardPoject2 from './CardPoject2';
import { Card } from 'react-bootstrap';

function ProjectContent() {
  return (
    <Container fluid className='bg-light py-3' id='projects'>
      <Container>
        <Row>
          <div className="col d-flex justify-content-between py-3">
            <div>
              <h3>Projects</h3>
            </div>
            <div className='icon-header'>
              <i class="bi bi-view-stacked fs-3 mx-2"></i>
              <i className="bi bi-grid fs-2 text-info mx-1"></i>
            </div>
          </div>
          <div>
            <p>Current projects</p>
            <div className='d-flex justify-content-between flex-wrap pb-5 w-100'>
              {card.map((elem, index) => (
                <CardProject key={index} icon={elem.icon} id={elem.id} title={elem.title} description={elem.description} castingNum={elem.castingNum} date={elem.date} />
              ))}
              <Card className=' last-carte rounded-0 mb-3'>
                <i className="bi bi-plus-lg fs-1" role='button'></i>
                <p>New project</p>
              </Card>
            </div>
          </div>

          <div className='completedProject'>
            <p>Completed projects</p> 
            <div className='carteContent'>
              {card2.map((elem, index) => (
                <CardPoject2 key={index} icon={elem.icon} id={elem.id} title={elem.title} description={elem.description} castingNum={elem.castingNum} date={elem.date} />
              ))}
            </div>
          </div>

        </Row>
      </Container>
    </Container>
  )
}

export default ProjectContent