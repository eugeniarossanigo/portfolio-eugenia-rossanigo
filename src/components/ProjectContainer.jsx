import { projects as data } from '../data/projects'
import CardContainer from './Cards/CardContainer'
import CardProject from './Cards/CardProject'
import Container from './Container';

export default function ProjectContainer() {
  return (
    <Container link='projects' title='Projects'>
      {data.map((item, index) =>
        <CardContainer key={index}>
          <CardProject item={item}/>
        </CardContainer>)}
    </Container>
  )
}
