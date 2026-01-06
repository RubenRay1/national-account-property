// AWS Amplify Configuration for BMS Customer Lookup - OKTA SAML Only
const awsConfig = {
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_o3Ew0wumi',
        userPoolWebClientId: '7apeuo3q6hulod0d3i002vc0b',
        oauth: {
            domain: 'national-account-property.auth.us-east-1.amazoncognito.com',
            scope: ['email', 'openid', 'profile'],
            redirectSignIn: window.location.origin + '/',
            redirectSignOut: window.location.origin + '/',
            responseType: 'code',
            // Force OKTA SAML login only
            identityProviders: ['SAML']
        }
    }
};

// Configure Amplify
if (typeof Amplify !== 'undefined') {
    Amplify.configure(awsConfig);
}
