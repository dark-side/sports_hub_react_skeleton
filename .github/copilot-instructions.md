## Code Style Typescript
- always use prefix 'at' with kebab-case for component selector (at-user-avatar);

- always use prefix 'at' with camelCase for directive selector (atCharactersSanitizer);

- always use 2 spaces for indentation;

- always use traling comma;

- remove all trailing whitespace;

- always use single qoutes;

- length of line should be shorter than 120 chars;

- always add empty line between methods in class;

- always add empty line after if statement;

- always add empty line before return statement;

- always use curly braces with 'if' statement:
  ```javascript
  // Correct:
  if (condition) {
    // logic here
  }

  // Incorrect:
  if (condition) 
    // logic here
  ```
 
- always define concrete type/interface, avoid using any;

- always specify the access modifier (public, private, protected) for methods;

- always specify the return type for methods;

- always specify which version of package was used;

 
## Unit Tests
 
- use jasmine for unit tests;
 
- use `it` not `test`;

- separate blocks beforeEach/AfterEach/describe/it with empty line;
 
- use separate describe for testing methods (describe('#method, () => {}));

- define common variables in beforeEach block;
 
- use mocks for dependecies.
