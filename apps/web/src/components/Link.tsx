import * as React from 'react';
import MuiLink from '@mui/material/Link';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

interface State {
  data?: Record<string, any>
}

export type LinkProps = GatsbyLinkProps<State>

const Link = React.forwardRef(function Link(props: LinkProps, ref: any) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
