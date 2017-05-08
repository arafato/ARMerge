const fs = require('fs'),
Template = require('./Template.js');

class ARMerge {
    constructor() {
    }

    init(argv) {
        const template = new Template(require(argv.input));

        this.traverseTemplate(template);

        fs.writeFileSync(argv.output, template);
    }

    traverseTemplate(root) {
        //  1) Replace deployment with deployment array of linked template
        // 	2) Add/append dependsOn list to every resource element
        //  3) Merge child variables with root variables  (may imply renaming of variables
        const deployments = root.resources.filter((resource) => {
            return resource.type === 'Microsoft.Resources/deployments';
        });

        // for (let deployment of deployments) {
        //     const path = this.resolveTemplatePath(deployment.properties.templateLink.uri);
        //     const linkedTemplate = require(path);
        //     this.unifyVariableSections(this.template.variables, linkedTemplate.variables);
        //     root.resources[1] = linkedTemplate.resources; // How to get the correct index of root?
        //     this.traverseTemplates(linkedTemplate);
        // }
    }
}

module.exports = ARMerge;