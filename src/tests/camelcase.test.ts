import {camelCase} from '../core/camelcase'

describe('camel case', () => {
	it('should return empty string when passing ""', () => {
		expect(camelCase('')).toBe('');
	});
	it('should return capitalised string when passing capitalized word', () => {
		expect(camelCase('Foo')).toBe('Foo');
	});
	it('should return joined words removing spaces', () => {
		expect(camelCase('Foo Bar')).toBe('FooBar');
	});
	it('should return joined words removing dashes and hyphens', () => {
		expect(camelCase('Foo_Bar-Foo')).toBe('FooBarFoo');
	});
});
