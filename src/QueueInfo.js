import { useNavigate, useParams } from "react-router"

export default function QueueInfo() {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <p>Очередь под номером: {id}</p>
            <button onClick={() => navigate(-1)}>Перейти назад</button>
        </div>
    )
}