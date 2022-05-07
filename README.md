# eslint-config-dixidan

[![npm](https://img.shields.io/npm/v/eslint-config-dixidan)](https://npmjs.com/package/eslint-config-dixidan)

## Usage

### JavaScript

#### Install

```bash
npm i -D eslint eslint-config-dixidan eslint-config-standard eslint-plugin-n eslint-plugin-promise eslint-plugin-import
```

#### Config `.eslintrc`

js
```json
{
  "extends": "dixidan"
}
```

### TypeScript

#### Install

```bash
npm i -D eslint eslint-config-dixidan eslint-config-standard eslint-plugin-n eslint-plugin-promise eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

#### Config `.eslintrc`

js
```json
{
  "extends": "dixidan/typescript"
}
```

### Vue 3

#### Install

```bash
npm i -D eslint eslint-config-dixidan eslint-config-standard eslint-plugin-n eslint-plugin-promise eslint-plugin-import eslint-plugin-vue
```

#### Config `.eslintrc`

js
```json
{
  "extends": "dixidan/vue"
}
```

### TypeScript + Vue 3

#### Install

```bash
npm i -D eslint eslint-config-dixidan eslint-config-standard eslint-plugin-n eslint-plugin-promise eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-vue
```

#### Config `.eslintrc`

js
```json
{
  "extends": "dixidan/typescript/vue"
}
```