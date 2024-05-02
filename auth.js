import { google } from 'googleapis';

const scopes = ['https://www.googleapis.com/auth/androidmanagement'];

export const getAuthClient = async () => {
  try {
    const client = new google.auth.JWT({
      email: 'android-mdm@android-mdm-node-422019.iam.gserviceaccount.com',
      keyFile: './credentials.json',
      scopes,
    });

    return client.authorize();
  } catch (e) {
    throw Error(`Auth failed, reason: ${e}`);
  }
};
