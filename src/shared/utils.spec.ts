import {normalize, removeProperty} from "./utils";

describe('when mapping an array with normalize', () => {
    let coll;

    beforeEach(() => {
        coll = [
            { id: 'asd1', content: 'smh1' },
            { id: 'asd2', content: 'smh2' },
            { id: 'asd3', content: 'smh3' }
        ];
    });

    describe('when passing no extra params', () => {
        it('should use the id as key and the whole objects as values', () => {
            expect(normalize(coll)).toEqual({
                'asd1': coll[0],
                'asd2': coll[1],
                'asd3': coll[2]
            });
        });
    });

    describe('when passing a custom key', () => {
        it('should use the corresponding field as key in the resulting object', () => {
            expect(normalize(coll, 'content')).toEqual({
                'smh1': coll[0],
                'smh2': coll[1],
                'smh3': coll[2]
            })
        });
    });

    describe('when a transform function is given', () => {
        it('should map the resulting values accordingly', () => {
            expect(normalize(coll, 'id', originalObject => ({
                content: originalObject.content,
                newField: true
            }))).toEqual({
                'asd1': { content: 'smh1', newField: true },
                'asd2': { content: 'smh2', newField: true },
                'asd3': { content: 'smh3', newField: true }
            })
        });
    });

    describe('when modifying the original object in the collection', () => {

        it('should not modify the normalized object fields', () => {
            const normalizedObject = normalize(coll);
            coll[1].content = 'changed this';
            expect(normalizedObject['asd2'].content).toBe('smh2');
        });
    });
});

describe('when using removeProperty', () => {
    const oldObject = {
        id: 'smh01',
        content: 'blah blah',
        date: 12345,
        thisNotNeeded: true
    };

    it('should remove the selected properties', () => {
        expect(removeProperty(oldObject, 'thisNotNeeded')).toEqual({
            id: 'smh01',
            content: 'blah blah',
            date: 12345
        })
    });
});