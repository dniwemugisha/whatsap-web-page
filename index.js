const setHeightAbsolute = () => {

    let receivedChats = document.querySelectorAll(".chat.sent-chat");

    let chats = Array.from(receivedChats);

    let i = 0
    let offsetHeight = 0
    let parentElement;

    chats.map(chat => {

        let children = Array.from(chat.children)

        children.map(child => {
            offsetHeight += child.offsetHeight
        })

        parentElement = chat.parentNode
        parentElement.style.height = `${offsetHeight - 12}px`

        offsetHeight = 0;
    })
}


document.addEventListener('DOMContentLoaded', () => {
    setHeightAbsolute()
})

window.addEventListener("resize", function(event) {
    setHeightAbsolute()
})