import { a } from "./foo";
import { type Person } from "./foo"; // works only on typescript >4.5 // ImportDeclaration importKind = 'value', ImportSpecifier.importKind = 'type'
// import type { Person } from "./foo" // works from typescript > 3.8 // ImportDeclaration importKind = 'type', ImportSpecifier.importKind = 'value'



const joe: Person = {
    name: "Joe Doe",
    age: 12
}