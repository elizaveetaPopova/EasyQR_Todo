import { styled } from 'styled-components';

interface Props {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  styles: React.CSSProperties;
}

const StyledInput = styled.input`
  margin-left: 24px;
  width: 100%;
  border: none;
  font-family: 'Josefin Sans';
  color: ${({ theme }) => theme.inputText};
  font-size: ${({ theme }) => theme.primaryFS};
  background-color: ${({ theme }) => theme.inputBg};

  outline: none;
`;

const Input = ({ title, onChange, onKeyDown, styles }: Props) => {
  return (
    <StyledInput
      style={styles}
      type="text"
      value={title}
      onChange={onChange}
      placeholder="Create a new todo…"
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
