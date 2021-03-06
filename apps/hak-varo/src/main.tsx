import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ReactComment } from '@hak-varo/shared/components';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <ReactComment
      text={`

        66666666           66666666           66666666
       6::::::6           6::::::6           6::::::6
      6::::::6           6::::::6           6::::::6
     6::::::6           6::::::6           6::::::6
    6::::::6           6::::::6           6::::::6
   6::::::6           6::::::6           6::::::6
  6::::::6           6::::::6           6::::::6
 6::::::::66666     6::::::::66666     6::::::::66666
6::::::::::::::66  6::::::::::::::66  6::::::::::::::66
6::::::66666:::::6 6::::::66666:::::6 6::::::66666:::::6
6:::::6     6:::::66:::::6     6:::::66:::::6     6:::::6
6:::::6     6:::::66:::::6     6:::::66:::::6     6:::::6
6::::::66666::::::66::::::66666::::::66::::::66666::::::6
 66:::::::::::::66  66:::::::::::::66  66:::::::::::::66
   66:::::::::66      66:::::::::66      66:::::::::66
     666666666          666666666          666666666

     Made by Behemoth#4026
     https://github.com/b3h3m0th

      `}
    />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
