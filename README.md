If you like this project please show your support with a GitHub star. Much appreciated!

# ngx-translate-extract
Extract translatable (ngx-translate) strings and save as a JSON or Gettext pot file.
Merges with existing strings if the output file already exists.

## Usage
Install the package in your project:

`npm install @biesbjerg/ngx-translate-extract --save-dev`

Add an `extract` script to your project's `package.json`:
```
"scripts": {
  "extract": "ngx-translate-extract --dir ./src --output ./ --format=json --clean"
}
```
You can now run `npm run extract` to extract strings from your project's `src` dir. The extracted strings are saved in `JSON`-format in your project's root.

Modify the scripts arguments as required.

## Commandline arguments
```
Usage:
  ngx-translate-extract [OPTIONS] [ARGS]

Options:
  -d, --dir [DIR]        Directory path you would like to extract strings from  (Default is current directory)
  -o, --output [DIR]     Directory path you would like to save extracted
                         strings  (Default is current directory/template.json)
  -f, --format [VALUE]   Output format. VALUE must be either
                         [json|namespaced-json|pot]  (Default is json)
  -r, --replace BOOLEAN  Replace the contents of output file if it exists
                         (Merges by default)
  -s, --sort BOOLEAN     Sort translations in the output file in alphabetical
                         order
  -c, --clean BOOLEAN    Remove obsolete strings when merging
  -e, --experimental BOOLEAN Use experimental AST Service Parser
  -h, --help             Display help and usage details
```
