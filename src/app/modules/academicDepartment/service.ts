import { TAcademicDepartment } from "./interface";
import { AcademicDepartment } from "./model";

const createAcademicDepartmentDB = async (payload: TAcademicDepartment) => {
  const newAcademicFaculty = await AcademicDepartment.create(payload);

  return newAcademicFaculty;
};

const getAllAcademicDepartmentsDB = async () => {
  const getAllAcademicFaculties =
    await AcademicDepartment.find().populate("academicFaculty");
  return getAllAcademicFaculties;
};

const getSingleAcademicDepartmentDB = async (id: string) => {
  const createStudent =
    await AcademicDepartment.findById(id).populate("academicFaculty");

  return createStudent;
};

const updateAcademicDepartmentDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const createStudent = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );

  return createStudent;
};

export const academicDepartmentServices = {
  createAcademicDepartmentDB,
  getAllAcademicDepartmentsDB,
  getSingleAcademicDepartmentDB,
  updateAcademicDepartmentDB,
};
