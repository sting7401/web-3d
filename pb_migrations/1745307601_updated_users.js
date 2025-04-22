/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_2451312863",
    "hidden": false,
    "id": "relation1499115060",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "grade",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_2451312863",
    "hidden": false,
    "id": "relation1499115060",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "grade",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
