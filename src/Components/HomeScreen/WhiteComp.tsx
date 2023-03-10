import React from 'react'
import styled from 'styled-components';

const WhiteComp = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h2>MERCY AND FAVOUR REAL ESTATE</h2>
                <p>Offering you best deals in real estate</p>
            </Wrapper>
        </Container>
    </div>
  )
}

export default WhiteComp;

const Container = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #005555;;
`;
const Wrapper = styled.div`
    display: flex;
    width: 90%;
    text-align: center;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    p{
        font-weight: bold;
    }
`;