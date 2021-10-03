//카테고리 클릭 시 비워졌다가 로딩되는데
//이것을 막기 위해 loader을 빌드한다.
import React from "react";
import styled from "styled-components";


const Container = styled.div`
    height : 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-top: 20px;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default () => 
    <Container>
        <span role="img" aria-label="Loading">
            ⏰
        </span>
    </Container>