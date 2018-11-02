import {validate} from "./form-validation";

describe('when validating input', () => {

    describe('when specifying no rules', () => {
        it('should always return true', () => {
            expect(validate(null)).toBe(true);
        });
    });

    describe('when using required rule', () => {

        it('should return true for truthy values', () => {
            expect(validate('smh', { required: true })).toBe(true);
        });

        it('should return false for falsy values', () => {
            expect(validate(null, { required: true })).toBe(false);
        });
    });

    describe('when using minLength rule', () => {

        it('should return true for strings that are long enough', () => {
            expect(validate('12345', { minLength: 5 })).toBe(true);
        });

        it('should return false for strings that are too short', () => {
            expect(validate('123', { minLength: 5 })).toBe(false);
        });
    });

    describe('when using maxLength rule', () => {

        it('should return true for strings that are short enough', () => {
            expect(validate('12345', { maxLength: 5 })).toBe(true);
        });

        it('should return false for strings that are too long', () => {
            expect(validate('123456', { maxLength: 5 })).toBe(false);
        });
    });

    describe('when using email rule', () => {
        const rules = { email: true };

        it('should return true for valid emails', () => {
            expect(validate('abc@test.com', rules)).toBe(true);
        });

        it('should return false for simple strings', () => {
            expect(validate('random', rules)).toBe(false);
        });

        it('should return false for strings without @', () => {
            expect(validate('randomATsmh.org', rules)).toBe(false);
        });

        it('should return false for strings without a domain', () => {
            expect(validate('random@smhorg', rules)).toBe(false);
        });
    });

    describe('when using the pattern rule', () => {
        const rules = { pattern: /^\$\w{3,}\d+$/ };

        it('should accept strings adhering to the pattern', () => {
            expect(validate('$abc123', rules)).toBe(true);
        });

        it('should reject incorrect strings', () => {
            expect(validate('abc', rules)).toBe(false);
        });
    });
});