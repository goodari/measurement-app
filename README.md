# Tamtron Weighing App

This is an application for making (fake) measurements and saving them. With this app the user can take measurements by clicking "Measure" button in the UI. A new measurement is created and saved in the back end, then the result is displayed in the UI. Also a sum of all measurement is displayed in the UI.

UI also has measurement history view from which the user can browse measurements and sort them by a timestamp or value.

All measurements can be reset with the "Reset" button (deletes measurements from back end as well).

The app consists of React front end and express back end.

Front end utilizes Redux state management
(can be debugged with [Redux dev tools](https://github.com/reduxjs/redux-devtools)).
It is styled with Tailwind CSS framework and routed with react-router. TypeScript is used. Front end
was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Back end does not have a data base but saves data to a file. Back end also has TypeScript. Back end
was bootstrapped with [express-generator-typescript](https://www.npmjs.com/package/express-generator-typescript).

## Known issues / TODO

The current back end implementation lacks database, and uses files for persisting data.
In a real application this would obviously not work, but for this demo project it will do.

There is no auth at all. Obviously this kind of application shouldn't be usable by anyone without any login.
I quess that was something that was left out of scope on purpose.

Front end is not localized. For a real life multi lang app I would use i18next for all displayed texts.

No integration tests, only single front end and back end modules are tested. In a real app, more tests
would be recommended.

No CI/CD. For this app there was no time to setup CI pipelines to run tests automatically, and
obviously as the app has not been deployed anywhere there is no CD either.

For demo purposes the measurement is thought as an asyncronous action, so response from back end
after the measurement is required before front end state is updated. That might make the app look
like it is behaving weirdly, as creating a measurement puts the front end in "loading" state for a
moment.

Dates are handler poorly, they are ISO string timestamps pretty much all the way. This is something I
would definitely change for a real app. The timestamps could be saved in a format that makes sense in
the database and used as Dates in back end. Front end would receive them in a string format (e.g. ISO timestamp) and then convert them into Dates. What has to be taken into account is that unserializable
objects cannot be saved in Redux store, so dates should probably be in string format in state.

Error handling could be implemented better using axios interceptors. Common error (and loading) components (toast, modal) could be added instead of using components in each view separately.

Obviously the app is not production ready from any other aspects either. It was created with little time. Escpecially back end has not much to show as most of it's features come from the bootstrap script.

## Development

### Front end

First, you need to install dependencies. To do this, run `yarn` in `/frontend` directory.

To start front end, run `yarn start` in `/frontend` directory. The app will be running in [http://localhost:3000](http://localhost:3000).

Hot reloading is enabled, so any changes made to the source code will be automatically updated in browser.

More details in `/frontend/README.md`.

### Back end

First, you need to install dependencies. To do this, run `yarn` in `/backend` directory. The back end will start in PORT 3001 by default.

To start back end, run `yarn run start:dev` in `/backend` directory.

More details in `/backend/README.md`.

## Testing

To run tests, use command `yarn test` which works in both `frontend` and `backend` directories.
