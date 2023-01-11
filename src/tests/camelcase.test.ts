import {camelCase} from '../core/camelcase'

describe('camel case', () => {
	it('should return empty string when passing ""', () => {
		expect(camelCase('')).toBe('');
	});
	it('should return capitalised string when passing capitalized word', () => {
		expect(camelCase('Foo')).toBe('Foo');
	});
});
