# MongoCloudBackup

Backup your databases from cloud.mongodb.com

## Installation

Use the package manager [npm](https://www.npmjs.com/package/mongo-cloud-backup/) to install mongo-cloud-backup.

```bash
npm install mongo-cloud-backup
```

## Usage

```node

const mcb = require("mongo-cloud-backup")

var destination_folder = "/home/my-backups-folder"
var replicaset_name = "Cluster0-shard-0"
var replicaset_members = "cluster0-shard-00-01-tajsk.mongodb.net:27017,cluster0-shard-00-02-tajsk.mongodb.net:27017,cluster0-shard-00-00-tajsk.mongodb.net:27017"
var db_name = "mydbname"
var credentials = {
    username: "my-user-access",
    password: "my-secret-pass"
}

mcb.mongoCloudBackup( replicaset_name, replicaset_members, db_name, credentials, destination_folder)
```


## License
[MIT](https://choosealicense.com/licenses/mit/)