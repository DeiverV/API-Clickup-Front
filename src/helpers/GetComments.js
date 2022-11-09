export const getComments = async() => {

    const resp = await fetch(`https://api-clickup.herokuapp.com/api/comments/a`);
    const { data } = await resp.json();

    const comments = data.comments.map( comment => {
        return {
            message: comment.comment_text,
            author: comment.user.username,
            authorInitials: comment.user.initials,
            id: comment.id
        }
    })

    return comments
}