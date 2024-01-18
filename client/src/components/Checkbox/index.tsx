import { styled } from 'styled-components';

interface Props {
  onChange: () => void;
  isChecked: boolean;
  label?: string;
  id?: string;
}

const Label = styled.label<{ checked?: boolean }>`
  height: 24px;
  position: relative;
  display: block;
  cursor: pointer;
  span {
    margin-left: 48px;
    color: ${({ checked, theme }) =>
      checked ? theme.strikethrough : theme.text};
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
    text-decoration-color: ${({ theme }) => theme.strikethrough};
  }
`;

const CheckboxInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background-image: ${({ theme }) => `url(${theme.checkbox})`};
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Label}:hover & {
    background-image: ${({ theme }) => `url(${theme.activeCheckbox})`};
  }

  ${CheckboxInput}:checked + &::after {
    display: block;
    width: 24px;
    height: 24px;
    background-image: ${({ theme }) => `url(${theme.checkedCheckbox})`};
  }
`;

const Checkbox = ({ onChange, isChecked, label, id }: Props) => {
  return (
    <Label htmlFor={id} checked={isChecked}>
      <CheckboxInput
        onChange={onChange}
        type="checkbox"
        checked={isChecked}
        id={id ? id : 'checkbox'}
      />
      <StyledCheckbox id="checkbox" checked={isChecked} />
      {label && <span>{label}</span>}
    </Label>
  );
};

export default Checkbox;
