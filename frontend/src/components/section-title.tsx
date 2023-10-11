import { colors } from "@/theme/colors";
import styled from "styled-components";

const Title = styled.h3`
  color: ${colors.palette.darkBlue};
`;


const SectionTitle = () => {
    return(
    <Title>
        Featured Products
    </Title>
    )
    
    };
    export default SectionTitle
    