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
        "jsx-a11y/label-has-associated-control":"off",
        "jsx-a11y/label-has-for":"off",
        "class-methods-use-this": "off",
        "no-console": 0,
        "mocha/no-exclusive-tests": "error",
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2,
        "chai-expect/missing-assertion": 2,
        "chai-expect/terminating-properties": 1
    },
    "plugins": [
        "react", "import","react-redux", "mocha", "chai-friendly", "chai-expect"
    ],
    "parser": "babel-eslint",

};
