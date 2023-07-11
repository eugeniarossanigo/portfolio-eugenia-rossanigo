import { jobs as data } from '../data/jobs'
import CardContainer from './CardContainer'
import CardJob from './CardJob'
import Container from './Container';

export default function JobsContainer() {
  return (
    <Container link='experience' title='Experiencia'> 
      {data.map((item, index) =>
        <CardContainer key={index}>
          <CardJob item={item}/>
        </CardContainer>
      )}
    </Container> 
  )
}
