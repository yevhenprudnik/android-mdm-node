// https://developers.google.com/android/management/reference/rest/v1/enterprises.enrollmentTokens/create

import { google } from 'googleapis';
import { getAuthClient } from '../auth.js';
import { config } from '../config.js';

const { access_token } = await getAuthClient();
const androidmanagement = google.androidmanagement({
  version: 'v1',
});

androidmanagement.enterprises.enrollmentTokens
  .create({
    parent: config.enterpriseId,
    access_token,
    requestBody: {
      policyName: `${config.enterpriseId}/policies/${config.policyId}`,
    },
  })
  .then(({ data }) => {
    const { value } = data;
    console.log(
      `Follow this link on desired device: https://enterprise.google.com/android/enroll?et=${value}`
    );
  });
