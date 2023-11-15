/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5lk5xuxl40oig3a",
    "created": "2023-11-15 13:26:01.348Z",
    "updated": "2023-11-15 13:26:01.348Z",
    "name": "Student",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x5xqvyru",
        "name": "Student_Number",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rpq4diy0",
        "name": "Faculty",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "q98gofix",
        "name": "Student_Email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5lk5xuxl40oig3a");

  return dao.deleteCollection(collection);
})
