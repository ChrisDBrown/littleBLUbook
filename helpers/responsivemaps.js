// @TODO: Move this whole process to webpack rather than doing this
const fs = require('fs')
const sharp = require('sharp')
const sizes = require('../src/assets/sizes.json')

const inputFolder = 'helpers/maps/'
const outputFolder = 'public/maps/'

fs.readdirSync(inputFolder).forEach(file => {
  sizes.forEach(size => {
    sharp(inputFolder + file)
      .resize(size.generatedWidth)
      .toFile(outputFolder + file.split('.').slice(0, -1).join('.') + `-${size.generatedWidth}w.jpg`)
  })
})
