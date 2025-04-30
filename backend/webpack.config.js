module.exports = {
    resolve: {
        fallback: {
            "events": require.resolve("events/"),
            "buffer": require.resolve("buffer/"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "path": require.resolve("path-browserify")
        }
    }
};