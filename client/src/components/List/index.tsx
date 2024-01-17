import { styled } from 'styled-components';

import { ITaskResponse } from '../../services/tasks/types';

import ListFooter from './ListFooter';
import ListItem from './ListItem';

interface Props {
  data: ITaskResponse[] | undefined;
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgList};
  border-radius: 5px;
`;

export const List = ({ data }: Props) => {
  return (
    <Wrapper>
      {data?.map((task) => {
        return <ListItem label={task.title} isChecked={task.status} />;
      })}
      <ListFooter />
    </Wrapper>
  );
};
