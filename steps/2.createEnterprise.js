// https://developers.google.com/android/management/reference/rest/v1/enterprises/create

import { google } from 'googleapis';
import { getAuthClient } from '../auth.js';
import { config } from '../config.js';

const { access_token } = await getAuthClient();
const androidmanagement = google.androidmanagement({
  version: 'v1',
});

androidmanagement.enterprises
  .create({
    projectId: config.projectId,
    access_token,
    enterpriseToken: config.enterpriseToken,
    signupUrlName: config.signupUrlName,
  })
  .then(({ data }) => {
    const { name } = data;
    console.log(`Paste 'name' to config.enterpriseId\nName: ${name}\n`);
  });
