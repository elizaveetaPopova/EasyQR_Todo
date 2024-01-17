import { ThemeProvider, styled } from 'styled-components';
import { useState } from 'react';
import { CircleLoader } from 'react-spinners';

import { useGetTasksQuery } from '../../services/tasks';
import { lightTheme, darkTheme } from '../../styles/theme';
import ThemeToggle from '../../components/ThemeToggle';
import { Box } from '../../components/Box';
import { List } from '../../components/List';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.background}
    ${({ theme }) => `url(${theme.backroundImage})`} top no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 70px;
`;

const Logo = styled.p`
  color: ${({ theme }) => theme.logo};
  font-family: 'Josefin Sans';
  font-weight: 700;
  font-size: 40px;
  letter-spacing: 15px;
`;

const TodoApp = () => {
  const [theme, setTheme] = useState('light');
  const { data, error, isLoading } = useGetTasksQuery();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <Box>
          <Header>
            <Logo>TODO</Logo>
            <ThemeToggle
              onToggleTheme={() =>
                setTheme(theme === 'light' ? 'dark' : 'light')
              }
            />
          </Header>
          {isLoading && <CircleLoader color="#3710BD" />}
          {data && <List data={data} />}
          {error && <h1>Error receiving data</h1>}
        </Box>
      </Wrapper>
    </ThemeProvider>
  );
};

export default TodoApp;
