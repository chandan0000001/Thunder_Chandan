paru -Ss mongodb
paru -S mongodb-bin mongosh-bin
--For create Database directory
sudo mkdir -p /var/lib/mongodb
sudo mkdir -p /var/lib/mongodb

--ownership 
sudo chown -R $USER:USER /var/lib/mongodb

--Create Ownership
sudo nano /etc/mongod.conf

--PASTE BELOW 

storage:
  dbPath: /var/lib/mongodb
systemLog:
 destination: file
 path: /var/log/mongodb/mongod.log
 logAppend: true
net:
 port: 27017
 bindIp: 127.0.0.1
processManagement:
 fork: false


--SAVE IT

--TEMPORARILY START PREFARABLE THIS ONE 
mongod --config /etc/mongod.conf



--ENABLE FROM BOOT
sudo systemctl enable mongod
--STATUS SERVICE 
systemctl status mongod







--OPEN ANOTHER TERMINAL

mongosh
--expected output 
[chandan@arch ~]$ mongosh
Current Mongosh Log ID: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.9.2
Using MongoDB:          8.3.4
Using Mongosh:          2.9.2
For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

--test Database
show dbs
--test> show dbs
--admin    40.00 KiB
--company  40.00 KiB
--config   72.00 KiB


--CFREATE DB
use company
--INSERT


test> show dbs
admin    40.00 KiB
company  40.00 KiB
config   72.00 KiB
local    80.00 KiB
test> use company
switched to db company
company> db.employee.insertOne({
|  name:"Chandan",
|  age:21
| })
{
  acknowledged: true,
  insertedId: ObjectId('6a7323e33ff65a1b5447ffd6')
}
company> db.employee.find()
[
  { _id: ObjectId('6a7276d7317614c6d5cb76c5'), name: 'Chandan', age: 21 },
  { _id: ObjectId('6a7323e33ff65a1b5447ffd6'), name: 'Chandan', age: 21 }
]

