import { styled } from 'styled-components';

import { ITaskResponse } from '../../services/tasks/types';
import { useToggleTaskMutation } from '../../services/tasks';

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
  const [toggleTask] = useToggleTaskMutation();

  const handleOnCheck = async (task: ITaskResponse) => {
    await toggleTask({ id: task._id, status: !task.status });
  };

  return (
    <Wrapper>
      {data?.map((task, index) => {
        return (
          <ListItem
            key={index}
            onChange={() => handleOnCheck(task)}
            label={task.title}
            isChecked={task.status}
          />
        );
      })}
      <ListFooter />
    </Wrapper>
  );
};
