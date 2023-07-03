import { projects as data } from '../data/projects'
import CardContainer from './CardContainer'
import CardProject from './CardProject'
import Container from './Container';

export default function ProjectContainer() {
  return (
    <Container title='Projects' size='5'>
      {data.map((item) =>
        <CardContainer key={item.id}>
          <CardProject item={item}/>
        </CardContainer>)}
    </Container>
  )
}
