module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "plugins": [
        "react", "import"
    ]
};