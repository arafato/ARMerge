const fs = require('fs'),
    path = require('path'),
    Parser = require('./Parser.js'),
    Template = require('./Template.js');

class ARMerge {
    constructor() {
    }

    init(argv) {
        const template = new Template(require(`${process.cwd()}/${argv.input}`));

        // this.traverseTemplate(template);

        fs.writeFileSync(argv.output, template);
    }

    traverseTemplate(rootTemplate) {
        //  1) Replace deployment with deployment array of linked template
        // 	2) Add/append dependsOn list to every resource element
        //  3) Merge child variables with root variables  (may imply renaming of variables
        const deployments = rootTemplate.resources.filter((resource) => {
            return resource.type === 'Microsoft.Resources/deployments';
        });

        for (let deployment of deployments) {
            const path = Parser.resolveTemplatePath(deployment.properties.templateLink.uri, rootTemplate.variables);
            //     const linkedTemplate = require(path);
            //     this.unifyVariableSections(this.template.variables, linkedTemplate.variables);
            //     root.resources[1] = linkedTemplate.resources; // How to get the correct index of root?
            //     this.traverseTemplates(linkedTemplate);
        }
    }
}

module.exports = ARMerge;