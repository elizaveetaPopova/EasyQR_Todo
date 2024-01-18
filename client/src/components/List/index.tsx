import { styled } from 'styled-components';

import { ITaskResponse } from '../../services/tasks/types';
import {
  useDeleteTaskMutation,
  useToggleTaskMutation,
} from '../../services/tasks';

import ListFooter from './ListFooter';
import ListItem from './ListItem';

interface Props {
  data: ITaskResponse[] | undefined;
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgList};
  border-radius: 5px;
  margin-top: ${({ theme }) => theme.defaultIndentation};
`;

export const List = ({ data }: Props) => {
  const [toggleTask] = useToggleTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleOnCheck = async (task: ITaskResponse) => {
    await toggleTask({ id: task._id, status: !task.status });
  };

  const removeTask = async (taskId: string) => {
    await deleteTask({ id: taskId });
  };

  return (
    <Wrapper>
      {data?.map((task, index) => {
        return (
          <ListItem
            id={task._id}
            key={index}
            onChange={() => handleOnCheck(task)}
            label={task.title}
            isChecked={task.status}
            onDelete={() => removeTask(task._id)}
          />
        );
      })}
      <ListFooter />
    </Wrapper>
  );
};
