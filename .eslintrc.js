module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "jest": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "import/no-unresolved": "off",
        "react/prop-types": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/label-has-for": "off",
        "class-methods-use-this": "off",
        "no-console": 0,
        "linebreak-style": 0
    },
    "plugins": [
        "react", "import"
    ],
    "parser": "babel-eslint",

};
