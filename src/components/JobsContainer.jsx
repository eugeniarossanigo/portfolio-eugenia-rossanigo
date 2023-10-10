import { jobs as data } from '../data/jobs'
import CardContainer from './Cards/CardContainer'
import CardJob from './Cards/CardJob'
import Container from './Container';

export default function JobsContainer() {
  return (
    <Container link='experience' title='Experience'> 
      {data.map((item, index) =>
        <CardContainer key={index}>
          <CardJob item={item}/>
        </CardContainer>
      )}
    </Container> 
  )
}
