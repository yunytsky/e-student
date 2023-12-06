import axios from "axios";
const API_BASE_URL = "http://localhost:7150";

export const signIn = async (data) => {
    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

    const res = await axios.post(
        `${API_BASE_URL}/sign-in`,
        data,
        config
    );

    return res.data;
}

export const signUp = async (data) => {
  const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

  const res = await axios.post(
      `${API_BASE_URL}/sign-up`,
      data,
      config
  );

  return res.data;
}

export const getStudentInfo = async (token) => {
  const res = await axios.get(
      `${API_BASE_URL}/user/student-profile`,
      {headers: {"Authorization": `Bearer ${token}`}}
   );
   
  return res.data;
}

export const getResidentInfo = async (token) => {
  const res = await axios.get(
      `${API_BASE_URL}/user/dorm-profile`,
      {headers: {"Authorization": `Bearer ${token}`}}
   );

  return res.data;
}

export const getResidentSchedule = async (token) => {
  const res = await axios.get(
      `${API_BASE_URL}/user/dorm-inspections-schedule`,
      {headers: {"Authorization": `Bearer ${token}`}}
   );

  return res.data;
}

export const getExamsSchedule = async (token) => {
  const res = await axios.get(
      `${API_BASE_URL}/user/exams-schedule`,
      {headers: {"Authorization": `Bearer ${token}`}}
   );

  return res.data;
}



