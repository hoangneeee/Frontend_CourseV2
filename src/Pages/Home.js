import {useEffect, useState} from "react";
import userApi from "../Api/User/userApi";

function Home() {
    const [courseList, setCourseList] = useState([])

    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                const data = { id: 0 } ;
                const res = await userApi.getCourse(data);
                console.log('Success', res);

                setCourseList(res.data)
            } catch (error) {
                console.log('Fail', error);
            }
        }

        fetchCourseList();
    }, []);

    return (
        <h1>my content</h1>
    )
}

export default Home;