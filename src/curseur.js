const cursor = document.getElementById('cursor')

document.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', `top:${e.pageY-20}px; left:${e.pageX-20}px;`)
})
document.addEventListener('mousedown', (e) => {
    cursor.classList.add('contract')
    cursor.classList.remove('turn')
})
document.addEventListener('mouseup', (e) => {
    setTimeout(() => {
        cursor.classList.add('turn')
        cursor.classList.remove('contract')
    }, 100)
})

const btn1 = document.getElementById('goContact')
btn1.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btn1.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const btn2 = document.getElementById('goAPropos')
btn2.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btn2.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const btn3 = document.getElementById('submitButton')
btn3.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btn3.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const btnsocialLink1 = document.getElementById('socialLink1')
btnsocialLink1.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btnsocialLink1.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const btnsocialLink2 = document.getElementById('socialLink2')
btnsocialLink2.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btnsocialLink2.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const btnsocialLink3 = document.getElementById('socialLink3')
btnsocialLink3.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btnsocialLink3.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

// const btnsocialLink4 = document.getElementById('socialLink4')
// btnsocialLink4.addEventListener('mouseenter', (e) => {
//     cursor.classList.add('turnover')
//     cursor.classList.remove('turn')
// }, false)
// btnsocialLink4.addEventListener('mouseleave', (e) => {
//     cursor.classList.add('turn')
//     cursor.classList.remove('turnover')
// })

const btnsocialLink5 = document.getElementById('socialLink5')
btnsocialLink5.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btnsocialLink5.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const btnsocialLink6 = document.getElementById('socialLink6')
btnsocialLink6.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btnsocialLink6.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const btnsocialLink7 = document.getElementById('socialLink7')
btnsocialLink7.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
btnsocialLink7.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})

const devlink = document.getElementById('dev')
devlink.addEventListener('mouseenter', (e) => {
    cursor.classList.add('turnover')
    cursor.classList.remove('turn')
}, false)
devlink.addEventListener('mouseleave', (e) => {
    cursor.classList.add('turn')
    cursor.classList.remove('turnover')
})