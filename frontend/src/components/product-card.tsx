import { colors } from "@/theme/colors";
import styled from "styled-components";
import { spacing } from "@/theme/spacing";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 360px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`;
const ImageContainer = styled.img`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 236px;
background: #F6F7FB;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 124px;
`;

const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.palette.pink};
  padding-top:${spacing.medium}px;
`;

const ProductCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.palette.darkBlue};
  padding-top:${spacing.large}px;
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.palette.darkBlue};
  padding-top:${spacing.small}px;
`;

const ProductCard = () => {
  return (
    <Container>
      <ImageContainer src="images/chair.png" />

      <DescriptionContainer>
        <ProductTitle>
        Cantilever chair
        </ProductTitle>
        <ProductCode>
        Code - Y523201
        </ProductCode>
        <ProductPrice>
        $42.00
        </ProductPrice>
      </DescriptionContainer>
    </Container>
  );
};
export default ProductCard;
