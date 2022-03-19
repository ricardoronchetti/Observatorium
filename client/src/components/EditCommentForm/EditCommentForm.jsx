import { useContext, useEffect, useState } from "react"
import ratingService from "../../services/rating.service"
import { Form, Button } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"

function EditCommentForm({ closeModal, comment, commentId, getComments }) {

    const [editCommentData, setEditCommentData] = useState({
        comment: ""
    })

    useEffect(() => {
        setEditCommentData({ comment })
    }, [])

    const { user } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target

        setEditCommentData({
            ...editCommentData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        ratingService
            .editComment(commentId, { ...editCommentData })
            .then(({ data }) => {
                getComments()
                closeModal()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control className="formControl" type="text" value={editCommentData.comment} onChange={handleInputChange} name="comment" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button className="formButton" variant="dark" type="submit" >Edit Comment</Button>
                </div>
            </Form >
        </>
    )
}

export default EditCommentForm