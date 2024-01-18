import { styled } from 'styled-components';

import Checkbox from '../Checkbox';
import Input from '../Input';

interface Props {
  taskTitle: string;
  name: string;
  handleTaskTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isTaskChecked: boolean;
  handleTaskCheck: () => void;
}

const Wrapper = styled.div`
  padding: 20px 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBg};
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const TaskCreator = ({
  taskTitle,
  handleTaskTitle,
  isTaskChecked,
  handleTaskCheck,
  onKeyDown,
  name,
}: Props) => {
  return (
    <Wrapper>
      <Checkbox
        id={name}
        onChange={handleTaskCheck}
        isChecked={isTaskChecked}
      />
      <Input
        styles={{ marginLeft: '48px' }}
        title={taskTitle}
        onKeyDown={onKeyDown}
        onChange={handleTaskTitle}
      />
    </Wrapper>
  );
};

export default TaskCreator;
