<div align="center">
    <br />
    <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1141443355532873879/1173692642551402608/mybanner-o-x_1.png?ex=6564e174&is=65526c74&hm=4939339c5671e01c6cdd068fb581b1fe88bd9b1c8fe56142caa4f51953cc7237&" width="546" alt="dev-database" /></a>
    </p>
    <p>
    <a href="https://discord.gg/Ym5V2DB6sk"><img src="https://img.shields.io/discord/1125840988007579732?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/dev-database"><img src="https://img.shields.io/npm/v/dev-database?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/dev-database"><img src="https://img.shields.io/npm/dt/dev-database?maxAge=3600" alt="NPM downloads" /></a>
    </p>
  <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1148318536062742648/1180978797193990275/Powered_By_AmtiXDev_With_Color.png?ex=657f6336&is=656cee36&hm=0828041d09f451ead489b244b10099ba1bd97fa6becffdca1d8e2315ccb2df35&" alt="AmtiXDev" /></a>
    </p>

</div>

# Dev-Database
A Lightweight JSON File-Based Database for Development
## Overview
'Dev-Database' is a simple npm package that provides a straightforward way to perform database operations using JSON files. It's designed to be lightweight and suitable for small-scale development projects, making it easy to store and retrieve data.
## Installation
To use 'Dev-Database' in your project, install it using npm:
```bash
npm install dev-database
```
# Getting Started
Create an instance of 'DevDatabase' by providing the path to your JSON file. Here's a quick example:
```js
const DevDatabase = require('dev-database');

// Create an instance of DevDatabase with the file path
const db = new DevDatabase('database.json');

// Example usage
db.setData('key1', 'value1');
console.log(db.getData('key1')); // Output: 'value1'
```
## Methods
'setData(key, value)'
Set a key-value pair in the database.
```js
db.setData('key', 'value');
```

'getData(key)'
Retrieve the value associated with a key from the database.
```js
const value = db.getData('key');
```

'deleteData(key)'
Delete a key-value pair from the database.
```js
db.deleteData('key');
```
## Warning!
If the JSON file doesn't exist initially, the package will create an empty database.

### Contact Me/Need Help?
Contact me in my Discord Developers Server https://discord.gg/Ym5V2DB6sk .
