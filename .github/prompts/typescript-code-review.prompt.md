## TypeScript Code review
conduct code Review based on the rules provided below, when generating code add to code comments starts with `Explenation: ` with the explenations:

Embrace Const Assertions: Use as const for type safety and immutability.​

Strive for Data Immutability: Utilize Readonly and ReadonlyArray to maintain immutable data structures.​

Prefer Required Object Properties: Make most object properties required; use optional properties sparingly.​

Embrace Discriminated Unions: Leverage discriminated unions for modeling complex data structures and enhancing type safety.​

Avoid Type Assertions: Favor proper type definitions over type assertions to ensure type safety.​

Design Pure, Stateless Functions: Ensure functions have a single responsibility, are stateless, and produce no side effects.​

Maintain Consistent Naming Conventions: Use clear and consistent naming conventions throughout the codebase.​

Use Named Exports: Prefer named exports to maintain uniform import patterns and enhance code clarity.​

Organize Code by Feature: Group related code by feature and collocate it as closely as possible to promote modularity.​

Explicitly Declare Narrow Types: Define types explicitly when it helps to narrow them, improving type safety and code clarity.​

Use Single Object Arguments: Pass a single object as a function argument to enhance readability and extensibility.​

Prefer Literal Types Over Enums: Use literal types or const assertions instead of enums to reduce complexity and potential issues.​

Avoid Boolean Flags: Use type unions instead of multiple boolean flags to represent mutually exclusive states clearly.​

Use Null and Undefined Appropriately: Use null to explicitly state no value and undefined when a value doesn't exist.​

Avoid Type and Non-nullability Assertions: Refrain from using type assertions and non-nullability assertions as they can mask errors.​

Separate Type Imports and Exports: Use the type keyword for type-only imports and exports to improve code clarity and tree shaking.​

Avoid Default Exports: Use named exports to ensure consistent import patterns and avoid confusion.​

Use Template Literal Types: Leverage template literal types for precise and type-safe string constructs.​

Avoid the any Type: Use the unknown type instead of any to maintain type safety.​

Explicit Function Return Types: Define return types explicitly to improve readability and catch potential errors early.​

Consistent Array Types: Define array types using generic syntax for consistency.​

Generate Types from Contracts: Generate types from external service contracts to ensure synchronization and accuracy.​

Use TSDoc Comments: Employ TSDoc comments to enhance code maintainability and provide structured documentation.​

Isolate Tests: Write tests that are independent and do not rely on the order of execution to ensure reliability.​

Avoid Snapshot Tests: Refrain from using snapshot tests to prevent fragility and maintain test reliability.