// https://developers.google.com/android/management/reference/rest/v1/enterprises.devices/list

import { google } from 'googleapis';
import { getAuthClient } from '../auth.js';
import { config } from '../config.js';

const { access_token } = await getAuthClient();
const androidmanagement = google.androidmanagement({
  version: 'v1',
});

androidmanagement.enterprises.devices
  .list({ parent: config.enterpriseId, access_token })
  .then(({ data }) => console.log(data.devices));
