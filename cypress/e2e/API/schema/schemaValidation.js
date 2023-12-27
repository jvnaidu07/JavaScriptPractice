module.exports.validateSchema =

{
    "type": "object",
    "properties": {
        "mainText": {
            "type": "string"
        },
        "moreText": {
            "type": "string"
        },
        "moreUrl": {
            "type": "string"
        },
        "consentText": {
            "type": "string"
        }
    },
    "required": [
        "mainText",
        "moreText",
        "moreUrl",
        "consentText"
    ]
}
