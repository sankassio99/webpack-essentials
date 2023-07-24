class Heading {
    create(text) {
        const heading = document.createElement('h2');

        heading.innerText = text;

        document.querySelector('body').appendChild(heading);
    }
}

export default Heading;