import {useEffect, useState} from "react";
import {Row, Spinner} from "react-bootstrap";
import userApi from "../Api/User/userApi";
import {useParams} from "react-router-dom";
import LessonCard from "../Components/CustomTag/LessonCard";


function Lesson() {
    const [lessons, setLessons] = useState([])
    const {courseId} = useParams()

    useEffect(() => {
        const fetchCourseId = async () => {
            try {
                const data = {id: courseId};
                const res = await userApi.getCourse(data);
                console.log('Success', res.data);

                setLessons(res.data.data.courses.lesson)
            } catch (error) {
                console.error(error);
            }
        }

        fetchCourseId();
    }, [courseId]);

    if (lessons === null) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <h1 className="text-center text-danger">Lesson List</h1>
            <Row>
                {lessons.map(lesson => <LessonCard lesson={lesson}/>)}
            </Row>
        </>
    )
}


export default Lesson;