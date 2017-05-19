'use strict';

const chai = require('chai'),
    expect = chai.expect,
    Parser = require('./../lib/Parser');


const PREFIX = 'PREFIX',
    scope = {
        linkedTemplateName: `template.json`,
        folder1: `/folder1/`,
        folder2: `/folder2/`,
        nestedValue: {
            value1: `value1`,
            value2: `value2`,
        }
    };

describe('Parser', () => {
    it('should resolve a nested value in a variable expression', () => {
        const resolvedPath = Parser.resolveTemplatePath(`[variables(nestedValue).value1]`, PREFIX, scope);
        expect(resolvedPath).to.equal(`value1`);
    });

    it('should resolve a [concat(variables(<name1>), <name2>)] expression', () => {
        const resolvedPath = Parser.resolveTemplatePath(`[concat(variables(folder1), 'template.json')]`, PREFIX, scope);
        expect(resolvedPath).to.equal(`/folder1/templateName.json`)
    });

    it('should resolve a [concat(PREFIX, variables(<nestedValue>).value1), <name2>] expression', () => {
        const resolvedPath = Parser.resolveTemplatePath(`[concat('PREFIX', variables(folder1), 'template.json')]`, PREFIX, scope);
        expect(resolvedPath).to.equal(`/folder1/template.json`)
    });

    it('should resolve a [concat(<name1>, <name2>)] expression', () => {
        const resolvedPath = Parser.resolveTemplatePath(`[concat('HELLO', ' ', 'WORLD', '!')]`, PREFIX, scope);
        expect(resolvedPath).to.equal(`HELLO WORLD!`);
    });

    it('should fail to resolve an expression with missing initial square bracket', () => {
        expect(Parser.resolveTemplatePath(`concat('PREFIX', variables(folder1), 'template.json')]`, PREFIX, scope)).to.throw(new Error(`Invalid Syntax`));
    });

    it('should fail to resolve an expression with missing ending square bracket', () => {
        expect(Parser.resolveTemplatePath(`[concat('PREFIX', variables(folder1), 'template.json')`, PREFIX, scope)).to.throw(new Error(`Invalid Syntax`));
    });
});