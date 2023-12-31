import { styled } from 'styled-components';
export const IMG = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
export const CardWrap = styled.div`
  width: 20rem;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;
  display: flex;
  margin: 0.97rem;
  flex-direction: column;

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    margin: 15px;
    width: 100%;
  }
`;
export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0px 0px 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: black;
  }
`;
export const TextContainer = styled.div``;
export const Subinfo = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #979797;
`;
export const Footer = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #f1f3f5;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
  align-items: center;
`;
export const ContentBody = styled.div`
  margin: 0px 0px 1rem;
  word-break: break-word;
  overflow-wrap: break-word;
  height: 100px;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  h1 {
    margin: 0;
    font-size: 12px;
    font-weight: 300;
  }
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
  }
  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 300;
  }
  h4 {
    margin: 0;
    font-size: 12px;
    font-weight: 300;
  }
  h5 {
    margin: 0;
    font-size: 12px;
    font-weight: 300;
  }
  h6 {
    margin: 0;
    font-size: 12px;
    font-weight: 300;
  }
  p {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    color: #495057;
  }
`;
