import { projects as data } from '../data/projects'
import CardContainer from './CardContainer'
import CardProject from './CardProject'
import Container from './Container';

export default function ProjectContainer() {
  return (
    <Container link='projects' title='Proyectos' size='5'>
      {data.map((item, index) =>
        <CardContainer key={index}>
          <CardProject item={item}/>
        </CardContainer>)}
    </Container>
  )
}
