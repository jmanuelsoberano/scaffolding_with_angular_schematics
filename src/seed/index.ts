import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function seed(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name, typegreeting } = _options;
    tree.create('seed.js', `Hello world! ${name} - ${typegreeting}`);
    return tree;
  };
}
