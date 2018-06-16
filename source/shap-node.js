/*
 * Copyright © 2017-2018, Andriy Svyetlichnyy. All rights reserved.
 */
;

const fs = require('fs');
const dom = new (require("jsdom").JSDOM)(fs.readFileSync(0, "utf8"));
shap.processTree(dom.window.document.body);
fs.writeFileSync(1, dom.serialize());
