import {RouteComponentProps, withRouter} from 'react-router-dom';
import * as React from 'react';
import styled from 'styled-components';

class NotFound extends React.PureComponent<RouteComponentProps<any>> {
  public render() {
    return (
      <Span bgColor='#eee'>{`404, Not found this url: ${this.props.location.pathname}`}</Span>
    )
  }
}

interface ISpanProps {
  bgColor: string
}

const Span = styled.span`
  color: red;
  background-color: ${(props: ISpanProps) => props.bgColor}
`

export default withRouter(NotFound)