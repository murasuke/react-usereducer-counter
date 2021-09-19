import { VFC } from 'react';
import { Container, Label, SemanticCOLORS } from 'semantic-ui-react';
import styled from 'styled-components';

const ContainerWithMgn = styled(Container)`
  margin-top: 40px;
`;

const range = (n: number): number[] => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));

const colors: SemanticCOLORS[] = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

const ColorfulBeads: VFC<{ count?: number }> = ({ count = 0 }) => (
  <ContainerWithMgn>
    {range(count).map((n) => (
      <Label key={n} circular color={colors[n % colors.length]} />
    ))}
  </ContainerWithMgn>
);

export default ColorfulBeads;
