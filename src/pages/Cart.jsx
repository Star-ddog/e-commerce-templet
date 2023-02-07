import Navbars from '../components/Navbars';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer'
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`

`;
const Wrapper = styled.div`

`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail= styled.div`
flex: 2;
display: flex;

`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
const ProductName = styled.div`

`;
const ProductId = styled.div`

`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:  ${(props) => props.color}
`;
const ProductSize = styled.div`

`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ProductAmount = styled.div`
font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
${mobile({ marginBottom: "10px"})}
`;

const Summary = styled.div`
flex: 1;
padding: 20px;
height: 50vh;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;

`;
const SummaryTitle = styled.div`

`;
const SummaryItemText = styled.div`

`;
const SummaryItemPrice = styled.div`

`;
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin:30px 0;
    font-weight: ${(props) => props.type === "total" && "700"};
    font-size: ${(props) => props.type === "total" && "25px"};
`;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: skyblue;
color: white;
font-weight: 700;


`;


const Cart = () => {
  return (
    <Container>
    
    <Wrapper>
    <Title>YOUR BAG</Title>
    <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(4)</TopText>
            <TopText>Your Wishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
            <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 100</ProductPrice>
              </PriceDetail>
            </Product>

            <Product>
              <ProductDetail>
                <Image src="https://img.lovepik.com/free-png/20220222/lovepik-home-slippers-png-image_402135447_wh860.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 100</ProductPrice>
              </PriceDetail>
            </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
    </Wrapper>

        <Footer />
    </Container>
  )
}

export default Cart