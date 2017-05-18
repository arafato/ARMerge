class Template {
    /**
     * Initializes a new object with a JSON based representation of the root ARM-Template.
     */
    constructor(template) {
        this.template = template;
        this.parameters = this.template.parameters;
        this.variables = this.template.variables;
        this.resources = this.template.resources;
        this.outputs = this.template.outputs;
    }

    /**
     * Returns the full local path to a linked template. 
     * Assumption: The @prefix, i.e. the first part of a URI is the base URL. Every subsequent
     * string is part of the local path.
     * Example1: [concat(variables('commonSettings').repositoryUrl, 'vnet.json')]
     * Example2: [variables('linkedTemplates').vnetTemplateName)]
     * Example3: [concat(parameters('repository'), variables('vnetFolder'), 'vnet1.json')]
     * Example4: https://github.com/arafato/myARMTemplate/foo/bar/vnet.json 
     */
    resolveTemplatePath(uri, prefix) {

        throw new Error('Not implemeted.');
    }

    /**
     * Merges @this.variables with the variables passed to this function. 
     * If variable naming is ambiguous and do not reference same value then variable name is prefixed with unique string.
     * 
     * Returns a mapping of renamed objects and variables respectively. 
     */
    mergeVariables(childVars) {
        throw new Error('Not implemeted.');

    }

    /**
     * Replaces the deployment resource with the resource(s) of the linked template.
     * Adds dependsOn array of parent to all resources of linked template.
     */
    includeLinkedTemplate(parentResourceName, linkedTemplate) {
        throw new Error('Not implemeted.');
    }

    toString() {
        return JSON.stringify(this.template, null, 4);
    }
}