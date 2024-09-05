import { academicSemesterNameCodeMapping } from "./constant";
import { TAcademicSemester } from "./interface";
import { AcademicSemester } from "./model";

const createAcademicSemesterDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapping[payload.name] !== payload.code) {
    throw new Error("academic Semester name & code is not match");
  }
  const newAcademicSemester = await AcademicSemester.create(payload);

  return newAcademicSemester;
};

const getAllAcademicSemestersDB = async () => {
  const getAllAcademicFaculties = await AcademicSemester.find();
  return getAllAcademicFaculties;
};

const getSingleAcademicSemesterDB = async (id: string) => {
  const createStudent = await AcademicSemester.findById(id);

  return createStudent;
};

const updateAcademicSemesterDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  const createStudent = await AcademicSemester.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );

  return createStudent;
};

export const academicSemesterServices = {
  createAcademicSemesterDB,
  getAllAcademicSemestersDB,
  getSingleAcademicSemesterDB,
  updateAcademicSemesterDB,
};
