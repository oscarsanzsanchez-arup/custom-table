module.exports = {
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
		jest: {
			version: "latest",
		},
	},
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:jest/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	ignorePatterns: ["graphql.tsx", ".eslintrc.js"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				printWidth: 120,
				endOfLine: "lf",
			},
		],
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
		"react/jsx-props-no-spreading": "off",
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": [0],
		"react/react-in-jsx-scope": "off",
		"max-len": [1, { code: 120 }],
		"@typescript-eslint/explicit-module-boundary-types": "off",
	},
};
