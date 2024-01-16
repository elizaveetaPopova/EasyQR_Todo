import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const SortButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-family: 'Josefin Sans';
  height: 100%;
  font-weight: 600;
  color: ${({ theme }) => theme.footerText};

  &&:focus {
    color: ${({ theme }) => theme.focuseFooterText};
  }
`;

const SorterPanel = () => {
  return (
    <Wrapper>
      <SortButton>All</SortButton>
      <SortButton>Active</SortButton>
      <SortButton>Completed</SortButton>
    </Wrapper>
  );
};

export default SorterPanel;
