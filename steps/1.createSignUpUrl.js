// https://developers.google.com/android/management/reference/rest/v1/signupUrls/create

import { google } from 'googleapis';
import { getAuthClient } from '../auth.js';
import { config } from '../config.js';

const { access_token } = await getAuthClient();
const androidmanagement = google.androidmanagement({
  version: 'v1',
});

androidmanagement.signupUrls
  .create({
    access_token,
    projectId: config.projectId,
    callbackUrl: config.callbackUrl,
  })
  .then(({ data }) => {
    const { name, url } = data;
    console.log(`Paste 'name' to config.signupUrlName\nName: ${name}\n`);
    console.log(
      `Follow this link to get the enterprise token, and paste it to config.enterpriseToken\nURL: ${url}\n`
    );
  });
