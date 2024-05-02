// https://developers.google.com/android/management/reference/rest/v1/enterprises.policies/patch

import { google } from 'googleapis';
import { getAuthClient } from '../auth.js';
import { config } from '../config.js';

const { access_token } = await getAuthClient();
const androidmanagement = google.androidmanagement({
  version: 'v1',
});

androidmanagement.enterprises.policies
  .patch({
    name: `${config.enterpriseId}/policies/${config.policyId}`,
    access_token,
    requestBody: {
      applications: [
        {
          packageName: 'com.pettersonapps.wl',
          installType: 'FORCE_INSTALLED',
        },
      ],
      advancedSecurityOverrides: {
        developerSettings: 'DEVELOPER_SETTINGS_ALLOWED',
      },
    },
  })
  .then((data) => console.log(data.data));
