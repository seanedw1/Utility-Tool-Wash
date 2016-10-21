# utilitytoolwash

 [ ![Codeship Status for URL Shortener](https://codeship.com/projects/59b912f0-76d2-0134-9160-32ede8a13401/status?branch=master)](https://codeship.com/projects/179701)

## Getting started

### Install
In terminal for your application.
```
npm i -s utilitytoolwash
```
### Usage

Require package into file

```
const utw = require('utilitytoolwash');
```

Debug excepts three params one for the title,one for the object, and one for the status. status should be set to warn, error, log or undefined.

```
utw.debug('title goes here', obj, status);
```

To start your server with debug turned on

```
DEBUG=true node src/server
```
### Version Bumper

package version bumper feature used to bump the current package.json version file or inputed version.

### Including in file
```
const bump = require('utilitytoolwash').bump;
```
### Usage

For the bumper you have 2 params a version, and a . updateType. updateType should be set to major, minor, or patch depending on the type of version bump you are making.

```
// major example
bump('1.2.3', 'major');
// minor example
bump('1.2.3', 'minor');
// patch example
Bump('1.2.3', 'patch');
```
