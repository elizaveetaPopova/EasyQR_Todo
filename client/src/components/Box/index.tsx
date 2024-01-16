import { styled } from 'styled-components';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.horizontalPadding};
  width: 100%;
  display: flex;
`;

export const Box = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
