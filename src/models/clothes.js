'use strict';

const uuid = require('uuid').v4;

class ClothesData {
  constructor() {
    this.dbData = [];
  }

  read(id) {
    if(id) {
      return this.dbData.find((record) => record.id === id);
    } else {
      return this.dbData;
    }
  }

  /*
    obj = {
      clothesType: string,
      clothesBrand: string,
      clothesPrice: string,
    }
  */

  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };

    this.dbData.push(record);
    return record;
  }

  update(id, obj) {
    for(let i = 0; i < this.dbData.length; i++) {
      if(this.dbData[i].id === id) {
        this.dbData[i].data = obj;
        return this.dbData[i];
      }
    }
  }

  delete(id) {
    this.dbData = this.dbData.filter((record) => record.id !== id);
  }

}

module.exports = ClothesData;
