const button = document.querySelector('.main__forms-button');
const nameChat = document.querySelector('.main__chat-name');
const commentChat = document.querySelector('.main__chat-text');


const newName = () => {
    const nameId = document.querySelector('.name').value;
    const nameId1 = nameId.replace(/\s/g, "");
    const nameId2 = nameId1.toLowerCase();
    const newName = nameId2[0].toUpperCase() + nameId2.slice(1);
    nameChat.innerHTML = newName;
}

const newImage = () => {
    const avatarLink = document.querySelector('.link').value;
    const imagePlace = document.querySelector('.main__chat-comments');
    const image = document.createElement('img');
    image.src = avatarLink;
    imagePlace.append(image);
}

const checkSpam = () => {
    const comment = document.querySelector('.area').value;
    commentChat.innerHTML = comment.replace(/viagra|xxx/gi, "***");
}

const someFunction = () => {
    newName();
    newImage();
    checkSpam();
}

button.addEventListener('click', someFunction);

