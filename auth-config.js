// National Account Property - Auth Config (Cognito Hosted UI + Okta SAML)
//
// After you create the NEW Cognito User Pool + App client + Domain,
// update the values below.

window.NAP_AUTH = {
  region: 'us-east-1',

  // Optional: only needed if you actually use Amplify Auth APIs.
  // Keep placeholders until you create the new pool.
  userPoolId: 'REPLACE_WITH_NEW_USER_POOL_ID',               // e.g. us-east-1_AbCdEf123
  userPoolWebClientId: 'REPLACE_WITH_NEW_APP_CLIENT_ID',     // e.g. 1h2j3k4l5m6n7o8p9q
  domain: 'REPLACE_WITH_NEW_COGNITO_DOMAIN'                  // e.g. national-account-property-auth.auth.us-east-1.amazoncognito.com
};

// If you later decide to use Amplify Auth properly, you can enable this.
// (Your current flow in index.html does redirects manually, which is fine.)
if (typeof Amplify !== 'undefined' && window.NAP_AUTH.userPoolId !== 'REPLACE_WITH_NEW_USER_POOL_ID') {
  Amplify.configure({
    Auth: {
      region: window.NAP_AUTH.region,
      userPoolId: window.NAP_AUTH.userPoolId,
      userPoolWebClientId: window.NAP_AUTH.userPoolWebClientId,
      oauth: {
        domain: window.NAP_AUTH.domain,
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: window.location.origin + '/',
        redirectSignOut: window.location.origin + '/',
        responseType: 'code'
      }
    }
  });
}
