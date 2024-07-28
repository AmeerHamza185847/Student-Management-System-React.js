import { collection, getDocs } from "firebase/firestore";
import { CreateStudent } from "./Components/CreateStudent";
import { StudentList } from "./Components/StudentList";
import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";

function App() {

  const [students, setStudents] = useState([]);

  let readStudent = async () => {
    const studentCollection = collection(db, 'students');
    const studentSnapshot = await getDocs(studentCollection)
    const stdList = studentSnapshot.docs.map((doc) => (
      {
        id: doc.id,
        ...doc.data()
      }
    ))
    // console.log("stdList:", stdList);
    setStudents(stdList);
  }

  useEffect(() => {

    readStudent();

  }, [])


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Student Management System</h1>
      <br />
      <CreateStudent readStudent={readStudent} />
      <StudentList students={students} setStudents={setStudents} />
    </div>
  )
}

export default App;
