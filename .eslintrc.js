module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "import/no-unresolved": "off",
        "react/prop-types":"off",
    },
    "plugins": [
        "react", "import"
    ],
    "parser": "babel-eslint"
};
