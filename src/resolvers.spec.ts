import resolvers from './resolvers';

describe('resolver queries', () => {
    describe('hello', () => {
        it('returns the expected string', () => {
            const hello = resolvers.Query.hello

            const message = hello(null, { subject: 'jest'})
            expect(message).toBe(`Hello, jest! from Server`)
        })
    })
})