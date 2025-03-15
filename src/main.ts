import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "eu-west-1_TTHD7HGVQ",
      userPoolClientId: "3377v4kq4do697d0lgbmu1fbsi",
      identityPoolId: "eu-west-1:32114cfd-85be-4030-b710-5eda49f302f2",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

