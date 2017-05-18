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
     * Merges @this.variables with the variables passed to this function. 
     * If variable naming is ambiguous and do not reference same value then variable name is prefixed with unique string.
     * 
     * @param {any} childVars 
     * 
     * @memberof Template
     */
    mergeVariables(childVars) {
        throw new Error('Not implemeted.');
    }

     /**
      * Replaces the deployment resource with the resource(s) of the linked template.
      * Adds dependsOn array of parent to all resources of linked template. 
      * 
      * @param {any} parentResourceName 
      * @param {any} linkedTemplate 
      * 
      * @memberof Template
      */
    includeLinkedTemplate(parentResourceName, linkedTemplate) {
        throw new Error('Not implemeted.');
    }

    /**
     * 
     * 
     * @returns 
     * 
     * @memberof Template
     */
    toString() {
        return JSON.stringify(this.template, null, 4);
    }
}

module.exports = Template;