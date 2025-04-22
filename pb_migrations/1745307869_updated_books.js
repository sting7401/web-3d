/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170393721")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool950097511",
    "name": "avable",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170393721")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool950097511",
    "name": "avable",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
