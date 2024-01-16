import { styled } from 'styled-components';

interface Props {
  onToggleTheme: () => void;
}

const Toggle = styled.button`
  background: transparent ${({ theme }) => `url(${theme.toggleIcon})`};
  height: 26px;
  width: 26px;
  padding: 0;
  border: none;
`;

const ThemeToggle = ({ onToggleTheme }: Props) => {
  return <Toggle onClick={() => onToggleTheme()} />;
};
export default ThemeToggle;
