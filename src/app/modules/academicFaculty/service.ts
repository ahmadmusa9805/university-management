import { TAcademicFaculty } from "./interface";
import { AcademicFaculty } from "./model";

const createAcademicFacultyDB = async (payload: TAcademicFaculty) => {
  const newAcademicFaculty = await AcademicFaculty.create(payload);

  return newAcademicFaculty;
};

const getAllAcademicFacultiesDB = async () => {
  const getAllAcademicFaculties = await AcademicFaculty.find();
  return getAllAcademicFaculties;
};

const getSingleAcademicFacultyDB = async (id: string) => {
  const createStudent = await AcademicFaculty.findById(id);

  return createStudent;
};

const updateAcademicFacultyDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const createStudent = await AcademicFaculty.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );

  return createStudent;
};
// const deleteAcademicFacultyDB = (payload: string) => {
//   const createStudent = AcademicFaculty.findOneAndUpdate(
//     { id: payload },
//     { isDeleted: true },
//     { new: true },
//   );
//   return createStudent;
// };

export const academicFacultyServices = {
  createAcademicFacultyDB,
  getAllAcademicFacultiesDB,
  getSingleAcademicFacultyDB,
  updateAcademicFacultyDB,
  // deleteAcademicFacultyDB,
};
