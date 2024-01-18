import { styled } from 'styled-components';

import Checkbox from '../../Checkbox';

interface Props {
  onChange: () => void;
  onDelete: () => void;
  id: string;
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

const RemoveBtn = styled.button`
  background-image: ${({ theme }) => `url(${theme.closeIcon})`};
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
`;

const ListItem = ({ onChange, label, isChecked, onDelete, id }: Props) => {
  return (
    <Wrapper>
      <ListItemContainer>
        <Checkbox
          id={id}
          isChecked={isChecked}
          onChange={onChange}
          label={label}
        />

        <RemoveBtn onClick={onDelete} />
      </ListItemContainer>
    </Wrapper>
  );
};
export default ListItem;
