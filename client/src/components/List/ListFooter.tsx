import { styled } from 'styled-components';

import SorterPanel from './SorterPanel';

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.listHorizontalPadding};
  justify-content: space-between;
`;

const LeftItems = styled.p`
  color: ${({ theme }) => theme.footerText};
  font-size: 14px;
`;

const CleaningButton = styled.button`
  color: ${({ theme }) => theme.footerText};
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-family: 'Josefin Sans';
  height: 100%;
`;

const ListFooter = () => {
  return (
    <Wrapper>
      <LeftItems>5 items left</LeftItems>
      <SorterPanel />
      <CleaningButton>Clear Completed</CleaningButton>
    </Wrapper>
  );
};

export default ListFooter;
