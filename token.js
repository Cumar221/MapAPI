const mbxTokens = require('@mapbox/mapbox-sdk/services/tokens');
const tokensClient = mbxTokens({ accessToken: 'YOUR KEY' });


const create_key = (name, callback) => {
    tokensClient
        .createToken({
            note: name,
            scopes: ['datasets:read', 'styles:read', 'styles:tiles', 'fonts:read']
        })
        .send()
        .then(response => {
            const token = response.body;
            console.log(token);
            callback(token)
        })
        .catch(error => {
            console.log(error.message);
        });
    };

module.exports.create_key = create_key;


