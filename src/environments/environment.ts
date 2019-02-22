// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCxquV-PVzLT6SUWvse6H3Oc6DlY6nceiM",
    authDomain: "limbo-chat.firebaseapp.com",
    databaseURL: "https://limbo-chat.firebaseio.com",
    projectId: "limbo-chat",
    storageBucket: "limbo-chat.appspot.com",
    messagingSenderId: "248819449197"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
