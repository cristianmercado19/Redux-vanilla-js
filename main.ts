import { getPlural } from "task-app-pkg/dist";

///<reference path="node_modules/task-app-pkg/dist/index.d.ts" />


// import { getPlural } from 'task-app-pkg';
// import getPlural = require('task-app-pkg');
// const demo = require('task-app-pkg');


export class Main {
    run() {

        const elementById = document.getElementById('content');

        if (elementById){


            elementById.innerHTML = getPlural("boy");
        }

        console.log('content', elementById);
    }
}

