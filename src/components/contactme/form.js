async function sendEmailFormSpree(formData) {
    const apiUrl = 'https://formspree.io/f/moqoopdd';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
}

export default sendEmailFormSpree;