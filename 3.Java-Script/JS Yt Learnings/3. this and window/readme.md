- Global Context

  - In browsers, window is the global object
  - this in global scope refers to window
  - globalThis provides a standard way to access the global object across environments

- this Behavior

  - Changes depending on how a function is called
  - In non-strict mode, defaults to global object
  - In strict mode, becomes undefined
