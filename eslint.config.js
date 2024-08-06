import { defineConfig } from 'eslint-define-config';

export default defineConfig({
env: {
browser: true,
es2021: true,
'cypress/globals': true
},
extends: [
'eslint:recommended',
'plugin:cypress/recommended'
],
parserOptions: {
ecmaVersion: 12,
sourceType: 'module'
},
plugins: [
'cypress'
],
rules: {

    'no-console': 'warn',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
    
    
}
});
