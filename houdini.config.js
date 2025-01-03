/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "https://nb.coloradocolo.net/graphql/",
        headers: {
            "Authorization": "Token***REMOVED***"
        }
    },
    "plugins": {
        "houdini-svelte": {}
    }
}

export default config
