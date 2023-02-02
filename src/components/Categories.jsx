import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategpriesItems from "./CategpriesItems"


const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({flexDirection:"column" })}
`

const Categories = () => {

  return (

    <Container>
        {categories.map((item) =>(
            <CategpriesItems item={item} key={item.id}/>
        ))}
    </Container>

  )
}

export default Categories