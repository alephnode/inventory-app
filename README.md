# Inventory API

An API for tracking item location during moves.

### Prerequisites

In order to run the project, you'll need <a target="_blank" href="https://docs.mongodb.com/manual/installation/">MongoDB</a> installed.

### Getting Started

Before you can run the project, you'll first need to create the database. The easiest way to do this is to import the mock data provided. Feel free to extend the JSON and update the model/schemas appropriately.

From the project root:

`mongoimport --db inventory --collection boxes --jsonArray mock/inventory.json`

Next, build the project:

`yarn build`

This will run the TypeScript compiler and generate the _dist/_ directory. Edit the _tsconfig.json_ file to change the output directory and other settings.

Finally, start the API server by running:

`yarn start`
