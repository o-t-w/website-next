---
title: Server
---

## Factory
<a id="factory"></a>

The Fastify module exports a factory function that is used to create new [`Fastify server`](./Server.md) instances. This factory function accepts an options object which is used to
customize the resulting instance. This document describes the properties
available in that options object.

### `http2`
<a id="factory-http2"></a>

If `true` Node.js core's [HTTP/2](https://nodejs.org/dist/latest-v8.x/docs/api/http2.html) module is used for binding the socket.

+ Default: `false`

### `https`
<a id="factory-https"></a>

An object used to configure the server's listening socket for TLS. The options
are the same as the Node.js core
[`createServer` method](https://nodejs.org/dist/latest-v8.x/docs/api/https.html#https_https_createserver_options_requestlistener).
When this property is `null`, the socket will not be configured for TLS.

This option also applies when the [`http2`](./Server.md#factory-http2) option is set.

+ Default: `null`

### `ignoreTrailingSlash`
<a id="factory-ignore-slash"></a>

Fastify uses [find-my-way](https://github.com/delvedor/find-my-way) to handle
routing. This option may be set to `true` to ignore trailing slashes in routes.
This option applies to *all* route registrations for the resulting server
instance.

+ Default: `false`

```js
const fastify = require('fastify')({
  ignoreTrailingSlash: true
})

// registers both "/foo" and "/foo/"
fastify.get('/foo/', function (req, reply) {
  reply.send('foo')
})

// registers both "/bar" and "/bar/"
fastify.get('/bar', function (req, reply) {
  reply.send('bar')
})
```

### `maxParamLength`
<a id="factory-max-param-length"></a>

You can set a custom length for parameters in parametric (standard, regex and multi) routes by using `maxParamLength` option, the default value is 100 characters.

This can be useful especially if you have some regex based route, protecting you against [DoS attacks](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS).

*If the maximum length limit is reached, the not found route will be invoked.*

### `bodyLimit`
<a id="factory-body-limit"></a>

Defines the maximum payload, in bytes, the server is allowed to accept.

+ Default: `1048576` (1MiB)

### `onProtoPoisoning`
<a id="factory-on-proto-poisoning"></a>

Defines what action the framework must take when parsing a JSON object
with `__proto__`. This functionality is provided by
[secure-json-parse](https://github.com/fastify/secure-json-parse).
See https://hueniverse.com/a-tale-of-prototype-poisoning-2610fa170061
for more details about prototype poisoning attacks.

Possible values are `'error'`, `'remove'` and `'ignore'`.

+ Default: `'error'`

### `onConstructorPoisoning`
<a id="factory-on-constructor-poisoning"></a>

Defines what action the framework must take when parsing a JSON object
with `constructor`. This functionality is provided by
[secure-json-parse](https://github.com/fastify/secure-json-parse).
See https://hueniverse.com/a-tale-of-prototype-poisoning-2610fa170061
for more details about prototype poisoning attacks.

Possible values are `'error'`, `'remove'` and `'ignore'`.

+ Default: `'ignore'`

### `logger`
<a id="factory-logger"></a>

Fastify includes built-in logging via the [Pino](https://getpino.io/) logger.
This property is used to configure the internal logger instance.

The possible values this property may have are:

+ Default: `false`. The logger is disabled. All logging methods will point to a
null logger [abstract-logging](https://npm.im/abstract-logging) instance.

+ `pinoInstance`: a previously instantiated instance of Pino. The internal
logger will point to this instance.

+ `object`: a standard Pino [options object](https://github.com/pinojs/pino/blob/c77d8ec5ce/docs/API.md#constructor).
This will be passed directly to the Pino constructor. If the following properties
are not present on the object, they will be added accordingly:
    * `genReqId`: a synchronous function that will be used to generate identifiers
    for incoming requests. The default function generates sequential identifiers.
    * `level`: the minimum logging level. If not set, it will be set to `'info'`.
    * `serializers`: a hash of serialization functions. By default, serializers
      are added for `req` (incoming request objects), `res` (outgoing response
      objets), and `err` (standard `Error` objects). When a log method receives
      an object with any of these properties then the respective serializer will
      be used for that property. For example:
        ```js
        fastify.get('/foo', function (req, res) {
          req.log.info({req}) // log the serialized request object
          res.send('foo')
        })
        ```
      Any user supplied serializer will override the default serializer of the
      corresponding property.
+ `loggerInstance`: a custom logger instance. The logger must conform to the Pino
interface by having the following methods: `info`, `error`, `debug`, `fatal`, `warn`, `trace`, `child`. For example:
  ```js
  const pino = require('pino')();

  const customLogger = {
    info: function (o, ...n) {},
    warn: function (o, ...n) {},
    error: function (o, ...n) {},
    fatal: function (o, ...n) {},
    trace: function (o, ...n) {},
    debug: function (o, ...n) {},
    child: function() {
      const child = Object.create(this);
      child.pino = pino.child(...arguments);
      return child;
    },
  };

  const fastify = require('fastify')({logger: customLogger});
  ```

### `disableRequestLogging`
<a id="factory-disable-request-logging"></a>

By default, when logging is enabled, Fastify will issue an `info` level log
message when a request is received and when the response for that request has
been sent. By setting this option to `true`, these log messages will be disabled.
This allows for more flexible request start and end logging by attaching
custom `onRequest` and `onResponse` hooks.

+ Default: `false`

```js
// Examples of hooks to replicate the disabled functionality.
fastify.addHook('onRequest', (req, reply, done) => {
  req.log.info({ url: req.req.url, id: req.id }, 'received request')
  done()
})

fastify.addHook('onResponse', (req, reply, done) => {
  req.log.info({ url: req.req.originalUrl, statusCode: reply.res.statusCode }, 'request completed')
  done()
})
```

### `serverFactory`
<a id="custom-http-server"></a>

You can pass a custom http server to Fastify by using the `serverFactory` option.

`serverFactory` is a function that takes an `handler` parameter, which takes the `request` and `response` objects as parameters, and an options object, which is the same you have passed to Fastify.

```js
const serverFactory = (handler, opts) => {
  const server = http.createServer((req, res) => {
    handler(req, res)
  })

  return server
}

const fastify = Fastify({ serverFactory, modifyCoreObjects: false })

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000)
```

Internally Fastify uses the API of Node core http server, so if you are using a custom server you must be sure to have the same API exposed. If not, you can enhance the server instance inside the `serverFactory` function before the `return` statement.

*Note that we have also added `modifyCoreObjects: false` because in some serverless environments such as Google Cloud Functions, some Node.js core properties are not writable.*

### `caseSensitive`
<a id="factory-case-sensitive"></a>

By default, value equal to `true`, routes are registered as case sensitive. That is, `/foo` is not equivalent to `/Foo`. When set to `false`, routes are registered in a fashion such that `/foo` is equivalent to `/Foo` which is equivalent to `/FOO`.

By setting `caseSensitive` to `false`, all paths will be matched as lowercase, but the route parameters or wildcards will maintain their original letter casing.

```js
fastify.get('/user/:username', (request, reply) => {
  // Given the URL: /USER/NodeJS
  console.log(request.params.username) // -> 'NodeJS'
})
```

Please note this setting this option to `false` goes against
[RFC3986](https://tools.ietf.org/html/rfc3986#section-6.2.2.1).

### `requestIdHeader`
<a id="factory-request-id-header"></a>

The header name used to know the request id. See [the request id](./Logging.md#logging-request-id) section.

+ Default: `'request-id'`

### `requestIdLogLabel`
<a id="factory-request-id-log-label"></a>

Defines the label used for the request identifier when logging the request.

+ Default: `'reqId'`

### `genReqId`
<a id="factory-gen-request-id"></a>

Function for generating the request id. It will receive the incoming request as a parameter.

+ Default: `value of 'request-id' header if provided or monotonically increasing integers`

Especially in distributed systems, you may want to override the default id generation behaviour as shown below. For generating `UUID`s you may want to checkout [hyperid](https://github.com/mcollina/hyperid)

```js
let i = 0
const fastify = require('fastify')({
  genReqId: function (req) { return i++ }
})
```

**Note: genReqId will _not_ be called if the header set in <code>[requestIdHeader](#requestidheader)</code> is available (defaults to 'request-id').**

### `trustProxy`
<a id="factory-trust-proxy"></a>

By enabling the `trustProxy` option, Fastify will have knowledge that it's sitting behind a proxy and that the `X-Forwarded-*` header fields may be trusted, which otherwise may be easily spoofed.

```js
const fastify = Fastify({ trustProxy: true })
```

+ Default: `false`
+ `true/false`: Trust all proxies (`true`) or do not trust any proxies (`false`).
+ `string`: Trust only given IP/CIDR (e.g. `'127.0.0.1'`). May be a list of comma separated values (e.g. `'127.0.0.1,192.168.1.1/24'`).
+ `Array<string>`: Trust only given IP/CIDR list (e.g. `['127.0.0.1']`).
+ `number`: Trust the nth hop from the front-facing proxy server as the client.
+ `Function`: Custom trust function that takes `address` as first arg
    ```js
    function myTrustFn(address, hop) {
      return address === '1.2.3.4' || hop === 1
    }
    ```

For more examples refer to [proxy-addr](https://www.npmjs.com/package/proxy-addr) package.

You may access the `ip`, `ips`, and `hostname` values on the [`request`](./Request.md) object.

```js
fastify.get('/', (request, reply) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.hostname)
})
```

### `pluginTimeout`
<a id="plugin-timeout"></a>

The maximum amount of time in *milliseconds* in which a plugin can load.
If not, [`ready`](./Server.md#ready)
will complete with an `Error` with code `'ERR_AVVIO_PLUGIN_TIMEOUT'`.

+ Default: `10000`

### `querystringParser`
<a id="factory-querystring-parser"></a>

The default query string parser that Fastify uses is the Node.js's core `querystring` module.

You can change this default setting by passing the option `querystringParser` and use a custom one, such as [`qs`](https://www.npmjs.com/package/qs).

```js
const qs = require('qs')
const fastify = require('fastify')({
  querystringParser: str => qs.parse(str)
})
```

### `versioning`
<a id="versioning"></a>

By default you can version your routes with [semver versioning](./Routes.md#version), which is provided by `find-my-way`. There is still an option to provide custom versioning strategy. You can find more information in the [find-my-way](https://github.com/delvedor/find-my-way#versioned-routes) documentation.

```js
const versioning = {
  storage: function () {
    let versions = {}
    return {
      get: (version) => { return versions[version] || null },
      set: (version, store) => { versions[version] = store },
      del: (version) => { delete versions[version] },
      empty: () => { versions = {} }
    }
  },
  deriveVersion: (req, ctx) => {
    return req.headers['accept']
  }
}

const fastify = require('fastify')({
  versioning
})
```

### `modifyCoreObjects`
<a id="factory-modify-core-objects"></a>

+ Default: `true`

By default, Fastify will add the `ip`, `ips`, `hostname`, and `log` properties to Node's raw request object (see [`Request`](./Request.md)) and the `log` property to Node's raw response object. Set to `false` to prevent these properties from being added to the Node core objects.

```js
const fastify = Fastify({ modifyCoreObjects: true }) // the default

fastify.get('/', (request, reply) => {
  console.log(request.raw.ip)
  console.log(request.raw.ips)
  console.log(request.raw.hostname)
  request.raw.log('Hello')
  reply.res.log('World')
})
```

Disable this option could help in serverless environments such as Google Cloud Functions, where `ip` and `ips` are not writable properties.

**Note that these properties are deprecated and will be removed in the next major version of Fastify along with this option.** It is recommended to use the same properties on Fastify's [`Request`](./Request.md) and [`Reply`](./Reply.md) objects instead.

```js
const fastify = Fastify({ modifyCoreObjects: false })

fastify.get('/', (request, reply) => {
  console.log(request.ip)
  console.log(request.ips)
  console.log(request.hostname)
  request.log('Hello')
  reply.log('World')
})
```

### `return503OnClosing`
<a id="factory-return-503-on-closing"></a>

Returns 503 after calling `close` server method.
If `false`, the server routes the incoming request as usual.

+ Default: `true`

### `ajv`
<a id="factory-ajv"></a>

Configure the ajv instance used by Fastify without providing a custom one.

+ Default:

```js
{
  customOptions: {
    removeAdditional: true,
    useDefaults: true,
    coerceTypes: true,
    allErrors: true,
    nullable: true
  },
  plugins: []
}
```

```js
const fastify = require('fastify')({
  ajv: {
    customOptions: {
      nullable: false // Refer to [ajv options](https://ajv.js.org/#options)
    },
    plugins: [
      require('ajv-merge-patch')
      [require('ajv-keywords'), 'instanceof'];
      // Usage: [plugin, pluginOptions] - Plugin with options
      // Usage: plugin - Plugin without options
    ]
  }
})
```

### `http2SessionTimeout`
<a id="http2-session-timeout"></a>

Set a default
[timeout](https://nodejs.org/api/http2.html#http2_http2session_settimeout_msecs_callback) to every incoming http2 session. The session will be closed on the timeout. Default: `5000` ms.

Note that this is needed to offer the graceful "close" experience when
using http2. Node core defaults this to `0`.

### `frameworkErrors`
<a id="framework-errors"></a>

+ Default: `null`

Fastify provides default error handlers for the most common use cases.
Using this option it is possible to override one or more of those handlers with custom code.

*Note: Only `FST_ERR_BAD_URL` is implemented at the moment.*

```js
const fastify = require('fastify')({
  frameworkErrors: function (error, req, res) {
    if (error instanceof FST_ERR_BAD_URL) {
      res.code(400)
      return res.send("Provided url is not valid")
    } else {
      res.send(err)
    }
  }
})
```


## Instance

### Server Methods

#### server
<a id="server"></a>

`fastify.server`: The Node core [server](https://nodejs.org/api/http.html#http_class_http_server) object as returned by the [**`Fastify factory function`**](./Server.md).

#### after
<a id="after"></a>

Invoked when the current plugin and all the plugins
that have been registered within it have finished loading.
It is always executed before the method `fastify.ready`.

```js
fastify
  .register((instance, opts, done) => {
    console.log('Current plugin')
    done()
  })
  .after(err => {
    console.log('After current plugin')
  })
  .register((instance, opts, done) => {
    console.log('Next plugin')
    done()
  })
  .ready(err => {
    console.log('Everything has been loaded')
  })
```

#### ready
<a id="ready"></a>

Function called when all the plugins have been loaded.
It takes an error parameter if something went wrong.
```js
fastify.ready(err => {
  if (err) throw err
})
```
If it is called without any arguments, it will return a `Promise`:

```js
fastify.ready().then(() => {
  console.log('successfully booted!')
}, (err) => {
  console.log('an error happened', err)
})
```

#### listen
<a id="listen"></a>

Starts the server on the given port after all the plugins are loaded, internally waits for the `.ready()` event. The callback is the same as the Node core. By default, the server will listen on the address resolved by `localhost` when no specific address is provided (`127.0.0.1` or `::1` depending on the operating system). If listening on any available interface is desired, then specifying `0.0.0.0` for the address will listen on all IPv4 address. Using `::` for the address will listen on all IPv6 addresses, and, depending on OS, may also listen on all IPv4 addresses. Be careful when deciding to listen on all interfaces; it comes with inherent [security risks](https://web.archive.org/web/20170831174611/https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

```js
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying an address is also supported:

```js
fastify.listen(3000, '127.0.0.1', (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying a backlog queue size is also supported:

```js
fastify.listen(3000, '127.0.0.1', 511, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

Specifying options is also supported, the object is same as [options](https://nodejs.org/api/net.html#net_server_listen_options_callback) in the Node.js server listen:

```js
fastify.listen({ port: 3000, host: '127.0.0.1', backlog: 511 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If no callback is provided a Promise is returned:

```js
fastify.listen(3000)
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

Specifying an address without a callback is also supported:

```js
fastify.listen(3000, '127.0.0.1')
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

Specifying options without a callback is also supported:

```js
fastify.listen({ port: 3000, host: '127.0.0.1', backlog: 511 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
```

When deploying to a Docker, and potentially other, containers, it is advisable to listen on `0.0.0.0` because they do not default to exposing mapped ports to `localhost`:

```js
fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```

If the `port` is omitted (or is set to zero), a random available port is automatically chosen (later available via `fastify.server.address().port`).

The default options of listen are:

```js
fastify.listen({
  port: 0,
  host: 'localhost',
  exclusive: false,
  readableAll: false,
  writableAll: false,
  ipv6Only: false
}, (err) => {})
```

#### route
<a id="route"></a>

Method to add routes to the server, it also has shorthand functions, check [here](./Routes.md).

#### close
<a id="close"></a>

`fastify.close(callback)`: call this function to close the server instance and run the [`'onClose'`](./Hooks.md#on-close) hook.

Calling `close` will also cause the server to respond to every new incoming request with a `503` error and destroy that request.
See [`return503OnClosing` flags](./Server.md#factory-return-503-on-closing) for changing this behaviour.

If it is called without any arguments, it will return a Promise:

```js
fastify.close().then(() => {
  console.log('successfully closed!')
}, (err) => {
  console.log('an error happened', err)
})
```

#### decorate
<a id="decorate"></a>

Function useful if you need to decorate the fastify instance, Reply or Request, check [here](./Decorators.md).

#### register
<a id="register"></a>

Fastify allows the user to extend its functionality with plugins.
A plugin can be a set of routes, a server decorator or whatever, check [here](./Plugins.md).

#### use
<a id="use"></a>

Function to add middlewares to Fastify, check [here](./Middleware.md).

#### addHook
<a id="addHook"></a>

Function to add a specific hook in the lifecycle of Fastify, check [here](./Hooks.md).

#### prefix
<a id="prefix"></a>

The full path that will be prefixed to a route.

Example:

```js
fastify.register(function (instance, opts, done) {
  instance.get('/foo', function (request, reply) {
    // Will log "prefix: /v1"
    request.log.info('prefix: %s', instance.prefix)
    reply.send({ prefix: instance.prefix })
  })

  instance.register(function (instance, opts, done) {
    instance.get('/bar', function (request, reply) {
      // Will log "prefix: /v1/v2"
      request.log.info('prefix: %s', instance.prefix)
      reply.send({ prefix: instance.prefix })
    })

    done()
  }, { prefix: '/v2' })

  done()
}, { prefix: '/v1' })
```

#### pluginName
<a id="pluginName"></a>

Name of the current plugin. There are three ways to define a name (in order).

1. If you use [fastify-plugin](https://github.com/fastify/fastify-plugin) the metadata `name` is used.
2. If you `module.exports` a plugin the filename is used.
3. If you use a regular [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions) the function name is used.

*Fallback*: The first two lines of your plugin will represent the plugin name. Newlines are replaced by ` -- `. This will help to indentify the root cause when you deal with many plugins.

Important: If you have to deal with nested plugins the name differs with the usage of the [fastify-plugin](https://github.com/fastify/fastify-plugin) because no new scope is created and therefore we have no place to attach contextual data. In that case the plugin name will represent the boot order of all involved plugins in the format of `plugin-A -> plugin-B`.

#### log
<a id="log"></a>

The logger instance, check [here](./Logging.md).

#### inject
<a id="inject"></a>

Fake http injection (for testing purposes) [here](./Testing.md#inject).

#### addSchema
<a id="add-schema"></a>

`fastify.addSchema(schemaObj)`, adds a shared schema to the Fastify instance. This allows you to reuse it everywhere in your application just by writing the schema id that you need.

To learn more, see [shared schema example](./Validation-and-Serialization.md#shared-schema) in the [Validation and Serialization](./Validation-and-Serialization.md) documentation.

#### setReplySerializer
<a id="set-reply-serializer"></a>

Set the reply serializer for all the routes. This will used as default if a [Reply.serializer(func)](./Reply.md#serializerfunc) has not been set. The handler is fully encapsulated, so different plugins can set different error handlers.
Note: the function parameter is called only for status `2xx`. Checkout the [`setErrorHandler`](./Server.md#seterrorhandler) for errors.

```js
fastify.setReplySerializer(function (payload, statusCode){
  // serialize the payload with a sync function
  return `my serialized ${statusCode} content: ${payload}`
})
```

#### setSchemaCompiler
<a id="set-schema-compiler"></a>

Set the schema compiler for all routes [here](./Validation-and-Serialization.md#schema-compiler).

#### setSchemaResolver
<a id="set-schema-resolver"></a>

Set the schema `$ref` resolver for all routes [here](./Validation-and-Serialization.md#schema-resolver).


#### schemaCompiler
<a id="schema-compiler"></a>

This property can be used to set the schema compiler, it is a shortcut for the `setSchemaCompiler` method, and get the schema compiler back for all routes.

#### setNotFoundHandler
<a id="set-not-found-handler"></a>

`fastify.setNotFoundHandler(handler(request, reply))`: set the 404 handler. This call is encapsulated by prefix, so different plugins can set different not found handlers if a different [`prefix` option](./Plugins.md#route-prefixing-option) is passed to `fastify.register()`. The handler is treated like a regular route handler so requests will go through the full [Fastify lifecycle](./Lifecycle.md#lifecycle).

You can also register a [`preValidation`](https://www.fastify.io/docs/latest/Hooks/#route-hooks) and [preHandler](https://www.fastify.io/docs/latest/Hooks/#route-hooks) hook for the 404 handler.

_Note: The `preValidation` hook registered using this method will run for a route that Fastify does not recognize and **not** when a route handler manually calls [`reply.callNotFound`](./Reply.md#call-not-found)_. In which case only preHandler will be run.

```js
fastify.setNotFoundHandler({
  preValidation: (req, reply, done) => {
    // your code
    done()
  },
  preHandler: (req, reply, done) => {
    // your code
    done()
  }
}, function (request, reply) {
    // Default not found handler with preValidation and preHandler hooks
})

fastify.register(function (instance, options, done) {
  instance.setNotFoundHandler(function (request, reply) {
    // Handle not found request without preValidation and preHandler hooks
    // to URLs that begin with '/v1'
  })
  done()
}, { prefix: '/v1' })
```

#### setErrorHandler
<a id="set-error-handler"></a>

`fastify.setErrorHandler(handler(error, request, reply))`: Set a function that will be called whenever an error happens. The handler is bound to the Fastify instance, and is fully encapsulated, so different plugins can set different error handlers. *async-await* is supported as well.

*Note: If the error `statusCode` is less than 400, Fastify will automatically set it at 500 before calling the error handler.*

```js
fastify.setErrorHandler(function (error, request, reply) {
  // Log error
  this.log.error(error)
  // Send error response
  reply.status(409).send({ ok: false })
})
```

Fastify is provided with a default function that is called if no error handler is set and that logs the error with respect to its `statusCode`:

```js
var statusCode = error.statusCode
if (statusCode >= 500) {
  log.error(error)
} else if (statusCode >= 400) {
  log.info(error)
} else {
  log.error(error)
}
```

#### printRoutes
<a id="print-routes"></a>

`fastify.printRoutes()`: Prints the representation of the internal radix tree used by the router, useful for debugging.

*Remember to call it inside or after a `ready` call.*

```js
fastify.get('/test', () => {})
fastify.get('/test/hello', () => {})
fastify.get('/hello/world', () => {})

fastify.ready(() => {
  console.log(fastify.printRoutes())
  // └── /
  //   ├── test (GET)
  //   │   └── /hello (GET)
  //   └── hello/world (GET)
})
```

#### initialConfig
<a id="initial-config"></a>

`fastify.initialConfig`: Exposes a frozen read-only object registering the initial
options passed down by the user to the fastify instance.

Currently the properties that can be exposed are:
- bodyLimit
- caseSensitive
- http2
- https (it will return `false`/`true` or `{ allowHTTP1: true/false }` if explicitly passed)
- ignoreTrailingSlash
- maxParamLength
- onProtoPoisoning
- pluginTimeout
- requestIdHeader

```js
const { readFileSync } = require('fs')
const Fastify = require('fastify')

const fastify = Fastify({
  https: {
    allowHTTP1: true,
    key: readFileSync('./fastify.key'),
    cert: readFileSync('./fastify.cert')
  },
  logger: { level: 'trace'},
  ignoreTrailingSlash: true,
  maxParamLength: 200,
  caseSensitive: true,
  trustProxy: '127.0.0.1,192.168.1.1/24',
})

console.log(fastify.initialConfig)
/*
will log :
{
  caseSensitive: true,
  https: { allowHTTP1: true },
  ignoreTrailingSlash: true,
  maxParamLength: 200
}
*/

fastify.register(async (instance, opts) => {
  instance.get('/', async (request, reply) => {
    return instance.initialConfig
    /*
    will return :
    {
      caseSensitive: true,
      https: { allowHTTP1: true },
      ignoreTrailingSlash: true,
      maxParamLength: 200
    }
    */
  })

  instance.get('/error', async (request, reply) => {
    // will throw an error because initialConfig is read-only
    // and can not be modified
    instance.initialConfig.https.allowHTTP1 = false

    return instance.initialConfig
  })
})

// Start listening.
fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
```
