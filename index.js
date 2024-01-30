const fs = require('fs');

class DevDatabase {
  constructor(filePath) {
    this.filePath = filePath;
    this.data = this.loadData();
  }

  loadData() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return {};
    }
  }

  saveData() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf8');
  }

  getData(key) {
    return this.data[key];
  }

  setData(key, value) {
    this.data[key] = value;
    this.saveData();
  }

  deleteData(key) {
    delete this.data[key];
    this.saveData();
  }
}

module.exports = DevDatabase;
