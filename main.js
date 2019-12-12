$('img').each(function () {
    let element = this
    checkImage(element.src, function (valid) {
        if (valid) {
            element.classList.add('open-modal-img')
        }
    })
    
})


function checkImage (url, calback) {
    let types = ['png', 'jpg', 'jpeg', 'gif', 'svg']
    let valid = false
    for (let type of types) {
        if (url.includes('.' + type)) {
            calback(true)
        } else {
            calback(false)
        }
    }
}

$('.open-modal-img').click(function () {
    console.log($(this).attr('src'))
})
