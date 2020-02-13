const colorButton = document.querySelector('.color-button')
const colorDiv = document.querySelector('.color')

const randomHexaId = () => {
    let hexaChar= '0123456789abcdef'
    let hexaLen = hexaChar.length
    let hexaId = '#'
    for (let i=0; i<6; i++) {
        
        let hexaIdIndex = Math.floor(Math.random()*hexaLen)
        hexaId = hexaId + hexaChar[hexaIdIndex]

    }
    
    return hexaId
}

colorButton.addEventListener('click',event => {
    colorDiv.style.backgroundColor = randomHexaId()
})