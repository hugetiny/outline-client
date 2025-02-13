/* tslint:disable */
/*
  Copyright 2022 The Outline Authors

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import './index';

import {html} from 'lit';

import {localize} from '../../../.storybook/localize';
import {ServerList} from './index';
import {ServerConnectionState} from '../server_connection_indicator';

export default {
  title: 'Servers View/Server List',
  component: 'server-list',
  args: {
    servers: [
      {
        name: 'My Cool Server 1',
        address: '127.0.0.1',
        connectionState: ServerConnectionState.DISCONNECTED,
        port: 8888,
        password: 'sadasd',
        method: 'aes',
      },
      {
        name: 'My Cool Server 2',
        address: '127.0.0.1',
        connectionState: ServerConnectionState.CONNECTED,
        port: 8888,
        password: 'sadasd',
        method: 'aes',
      },
      {
        name: 'My Cool Server 3',
        address: '127.0.0.1',
        connectionState: ServerConnectionState.DISCONNECTING,
        port: 8888,
        password: 'sadasd',
        method: 'aes',
      },
    ],
  },
  argTypes: {
    servers: {
      control: 'object',
    },
  },
};

export const Example = ({servers}: ServerList) =>
  html`
    <server-list .localize="${localize}" .servers="${servers}"></server-list>
  `;
