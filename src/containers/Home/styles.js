import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a10;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  margin-bottom: 25px;
`;
export const Input = styled.input`
  outline: none;
  font-weight: 300;
  font-size: 18px;
  color: #ffffff;

  background: rgba(255, 255, 255, 0.25);
  border: none;
  border-radius: 14px;

  width: 342px;
  height: 58px;
  margin-bottom: 40px;
  padding-left: 20px;  
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;
