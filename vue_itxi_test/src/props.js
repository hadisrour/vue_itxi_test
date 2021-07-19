const scopes = [
    'user-read-playback-state',
    'streaming',
    'user-read-email',
    'playlist-read-collaborative',
    'user-modify-playback-state',
    'user-read-private',
    'playlist-modify-public',
    'user-library-modify',
    'user-top-read',
    'user-read-playback-position',
    'user-read-currently-playing',
    'playlist-read-private',
    'user-follow-read',
    'user-read-recently-played',
    'playlist-modify-private',
    'user-follow-modify',
    'user-library-read',
];

export default {
    clientId: '1ef73d35503d4eb78757616670909069',
    clientSecret: '52a8a9a3729b485aaaba032cb2366766',
    redirectURI: 'http://localhost:8080/redirect',
    api: 'https://api.spotify.com/v1',
    scope: scopes.join(' '),
};
