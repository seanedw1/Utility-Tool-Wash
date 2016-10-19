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
