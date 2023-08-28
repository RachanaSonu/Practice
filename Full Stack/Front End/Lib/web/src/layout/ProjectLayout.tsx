import { Container } from "react-bootstrap"

interface IProjectLayout{
childrens?:React.ReactNode;
}
export const ProjectLayout:React.FC<IProjectLayout>=({childrens})=>{
    return <>
      <Container fluid>
      {childrens}
      </Container>
    
    </>
}