import {RouteComponentProps, withRouter} from 'react-router-dom';
import * as React from 'react';

class NotFound extends React.PureComponent<RouteComponentProps<any>> {
    public render() {
      return (
        `404, Not found this url: ${this.props.location.pathname}`
      )
    }
  }

export default withRouter(NotFound)