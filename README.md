# Tamtron Weighing App

## Known issues / TODO

The current back end implementation lacks database, and uses files for persisting data.
In a real application this would obviously not work, but for this demo project it will do.

Front end is not localized. For a real life multi lang app I would use i18next for all displayed texts.

No integration tests, only single front end and back end modules are tested. In a real app, more tests
would be recommended.

No CI/CD. For this app there was no time to setup CI pipelines to run tests automatically, and
obviously as the app has not been deployed anywhere there is no CD either.

For demo purposes the measurement is thought as an asyncronous action, so response from back end
after the measurement is required before front end state is updated. That might make the app look
like it is behaving weirdly, as creating a measurement puts the front end in "loading" state for a
moment.

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
