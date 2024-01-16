import { styled } from 'styled-components';

const Toggle = styled.button`
  background: transparent ${({ theme }) => `url(${theme.toggleIcon})`};
  height: 26px;
  width: 26px;
  padding: 0;
  border: none;
`;

const ThemeToggle = () => {
  return <Toggle />;
};
export default ThemeToggle;
