module.exports = {
  env : {
    'browser' : false,
    'es6' : true,
  },
  'extends' : 'eslint:recommended',
  globals : {
    Atomics : 'readonly',
    SharedArrayBuffer : 'readonly',
  },
  parserOptions : {
    ecmaVersion : 2018,
  },

  rules : {
    'brace-style' : 'error',
    'comma-spacing' : ['error',{ 'before' : false,'after' : false }],
    'computed-property-spacing' : [ 'error','never'],
    'indent' : ['error',2],
    'key-spacing' : ['error',{'beforeColon' : true}],
    'keyword-spacing' : 'error',
    'linebreak-style' : ['error','unix'],
    'no-extra-parens' : 'error',
    'no-multi-spaces' : 'error',
    'no-multiple-empty-lines' : ['error',{ 'max' : 1,'maxEOF' : 1,'maxBOF' : 0 }],
    'no-trailing-spaces' : 'error',
    'no-undef' : 'off', // only for a chrome exension. With the chrome object everywhere
    'no-use-before-define' : ['error',{ 'functions' : false,'variables' : false }],
    'quotes' : ['error','single',{ 'avoidEscape' : true }],
    'semi' : 'error',
    'semi-spacing' : ['error',{'before' : false,'after' : false}],
    'space-before-blocks' : 'error',
    'space-before-function-paren' : 'error',
    'space-in-parens' : ['error','never'],
    'space-infix-ops' : 'error',
    'spaced-comment' : ['error','always'],
  }
};