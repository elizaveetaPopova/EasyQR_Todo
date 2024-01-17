import { styled } from 'styled-components';

import Checkbox from '../../Checkbox';

interface Props {
  onChange: () => void;
  label: string;
  isChecked: boolean;
}

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const ListItemContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.listItemPadding};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label<{ checked?: boolean }>`
  display: flex;
  flex-direction: row;
  color: ${({ checked, theme }) =>
    checked ? theme.strikethrough : theme.text};
  height: 24px;
  span {
    margin-left: 24px;
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
    text-decoration-color: ${({ theme }) => theme.strikethrough};
  }
`;

const RemoveBtn = styled.button`
  background-image: ${({ theme }) => `url(${theme.closeIcon})`};
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
`;

const ListItem = ({ onChange, label, isChecked }: Props) => {
  return (
    <Wrapper>
      <ListItemContainer>
        <Label checked={isChecked}>
          <Checkbox isChecked={isChecked} onChange={onChange} />
          <span>{label}</span>
        </Label>
        <RemoveBtn />
      </ListItemContainer>
    </Wrapper>
  );
};
export default ListItem;
