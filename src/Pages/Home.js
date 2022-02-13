import {useEffect, useState} from "react";
import userApi from "../Api/User/userApi";
import {Row} from "react-bootstrap";
import CourseCard from "../Components/CustomTag/CourseCard";


function Home() {
    const [courseList, setCourseList] = useState([])

    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                const data = {id: 0};
                const res = await userApi.getCourse(data);
                console.log('Success', res.data);

                setCourseList(res.data.data.courses)
            } catch (error) {
                console.error(error);
            }
        }

        fetchCourseList();
    }, []);

    return (
        <>
            <h1 className="text-center text-danger">Courses List</h1>
            <Row>
                {courseList.map(course => <CourseCard course={course}/>)}
            </Row>
        </>
    );
}

export default Home;