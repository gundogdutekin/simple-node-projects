import { copyFile } from 'node:fs'

copyFile('./delete.txt', './files/delete.txt', (err) => {
    if (err) throw console.log('HATA ! Dosya kopyalanamadÄ±.')
    console.log('Dosya kopyalandÄ±')
})