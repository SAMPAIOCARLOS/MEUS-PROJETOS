function sendEmail(authorEmail, subject, body) {
    const toWhenEmail = 'fabiocaldas266@gmail.com'
    const sendEmailUrl = `mailto:${toWhenEmail}?cc=${authorEmail}&&subject=${encodeURIComponent(subject)}&&body=${encodeURIComponent(body)}`

    window.open(sendEmailUrl)
}