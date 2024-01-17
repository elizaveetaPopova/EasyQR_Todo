import { ReactNode } from 'react';
import { styled } from 'styled-components';

type Props = {
  children: ReactNode;
};

const Wrapper = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
`;

export const Box = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
