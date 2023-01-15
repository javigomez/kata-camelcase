import {camelCase,capitaliseFirstLetter} from '../core/camelcase'

describe('capitaliseFirstLetter', () => {
	it('should return "Foo" when "fOO" is given', () => {
			expect(capitaliseFirstLetter('fOO')).toBe('Foo');
	})
})
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
	it('should capitalise first letter', () => {
		expect(camelCase('foo')).toBe('Foo');
	});
	it('should capitalise first letter of each word', () => {
		expect(camelCase('foo_bar foo-bar')).toBe('FooBarFooBar');
	});
});
