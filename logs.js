module.exports = {
    start: () => _(`>> Starting process at [${(new Date()).toISOString()}]`),
    end: () => _(`>> Ending process at [${(new Date()).toISOString()}]`),
    output: (data) => _(`>> Output: ${data}`),
    error: (err) => _(`>> ERROR: ${err}`)
}

const _ = (msg) => console.log(msg)