const { exec } = require('child_process')
const logs = require("./logs")

exports.mongoCloudBackup = ( name, members, dbname, credentials, dest = "." ) => {
    logs.start()
    const command = `mongodump --ssl --host="${name}/${members}"  --authenticationDatabase admin -u "${credentials.username}" -p "${credentials.password}" -d "${dbname}" --forceTableScan --out="${dest}"`
    exec(command, responseCall)
}

const responseCall = (err, stdout, stderr) => {
    if (err) {
        logs.error(err)
    } else {
        logs.output(stderr)
        logs.end()
    }
}