import {camelCase} from '../core/camelcase'

describe('camel case', () => {
	it('should return empty string when passing ""', () => {
		expect(camelCase('')).toBe('');
	});
});
