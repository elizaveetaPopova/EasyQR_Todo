import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 24px;
  width: 24px;
  position: relative;
  display: block;
  cursor: pointer;

  &:hover input ~ .checkbox {
    background-image: ${({ theme }) => `url(${theme.activeCheckbox})`};
  }

  & input:checked ~ .checkbox {
    background-image: ${({ theme }) => `url(${theme.checkedCheckbox})`};
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background-image: ${({ theme }) => `url(${theme.checkbox})`};
  background-repeat: no-repeat;
`;

const Checkbox = () => {
  return (
    <Wrapper>
      <CheckboxInput type="checkbox" checked={true} />
      <StyledCheckbox className="checkbox" />
    </Wrapper>
  );
};

export default Checkbox;
