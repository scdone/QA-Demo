 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  describe('formatTitle tests', () => {

    test('formatTitle returns a string', () => {
      let formattedTitle = formatTitle(testData.title)
      expect(typeof formattedTitle).toBe('string')
    }),

    test('formatTitle should format the title correctly', () => {
      let formattedTitle = formatTitle(testData.title)
      expect(formattedTitle).toBe('Nulla Ac')
    })

  })

describe('shortenBio tests', () => {

  test('shortenBio returns a shortened version of the speaker bio', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio.length).toBeLessThan(testData.bio.length) 
  }),

  test('shortenBio should add periods to the end of the string', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio).toContain('...')
  })

})

describe('convertLength tests', () => {

  test('convertLength should return an array with two values', () => {
    let convertedLength = convertLength(testData.length)
    expect(convertedLength.length).toBe(2)
  }),

  test('convertLength can handle numbers less than 60', () => {
    let convertedLength = convertLength(30)
    expect(convertedLength[1]).toEqual(30)
  }),

  test('toEqual', () => {
    const myObj = {myNum: 4}
    const myObj2 = {myNum: 4}
    expect(myObj).toEqual(myObj2)
  }),

  test('toBe', () => {
    const myObj = {myNum: 4}
    const myObj2 = {myNum: 4}
    expect(myObj).toBe(myObj2)
  })


})