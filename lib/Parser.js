class Parser {
    constructor() {
    }

    /**
     * Returns the full local path to a linked template. 
     * Example1: [concat(variables('commonSettings').repositoryUrl, 'vnet.json')]
     * Example2: [variables('linkedTemplates').vnetTemplateName)]
     * Example3: [concat(parameters('repository'), variables('vnetFolder'), 'vnet1.json')]
     * Example4: https://github.com/arafato/myARMTemplate/foo/bar/vnet.json 
     * 
     * @param {any} uri the "raw" uri parameter 
     * @param {any} prefix indicates which part of the URI (in addition to any parameters part) should be ignored for resolving the local path
     * @param {any} scope the variables as JSON object
     * 
     * @memberof Parser
     */
    resolveTemplatePath(uri, prefix, scope) {
        throw new Error('Not implemeted.');
    }
}

module.exports = new Parser;