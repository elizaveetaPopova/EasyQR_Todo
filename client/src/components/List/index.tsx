import { styled } from 'styled-components';

import ListFooter from './ListFooter';

interface Props {}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgList};
  border-radius: 5px;
`;

export const List = () => {
  return (
    <Wrapper>
      <ListFooter />
    </Wrapper>
  );
};
