/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2451312863")

  // update collection data
  unmarshal({
    "name": "level"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1499115060",
    "max": 0,
    "min": 0,
    "name": "grade",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2451312863")

  // update collection data
  unmarshal({
    "name": "grade"
  }, collection)

  // remove field
  collection.fields.removeById("text1499115060")

  return app.save(collection)
})
