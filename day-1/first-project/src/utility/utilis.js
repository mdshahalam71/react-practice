export function getImageUrl(person,size='s'){
    return(
        'https://i.imgur.com/1bX5QH6.jpg' +
        person.imageId +
        size +
        '.jpg'
    )
}