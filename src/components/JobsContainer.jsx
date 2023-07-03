import { jobs as data } from '../data/jobs'
import CardContainer from './CardContainer'
import CardJob from './CardJob'
import Container from './Container';

export default function JobsContainer() {
  return (
    <Container title='Experience' size='5'> 
      {data.map((item) =>
        <CardContainer key={item.id}>
          <CardJob item={item}/>
        </CardContainer>
      )}
    </Container> 
  )
}
