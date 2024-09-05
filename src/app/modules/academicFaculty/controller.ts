import { RequestHandler } from "express";
import { academicFacultyServices } from "./service";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const data = await academicFacultyServices.createAcademicFacultyDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty Created Successfully",
    data: data,
  });
});

const getAllAcademicFaculties: RequestHandler = catchAsync(async (req, res) => {
  const data = await academicFacultyServices.getAllAcademicFacultiesDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculties retrieve Successfully",
    data: data,
  });
});
const getSingleAcademicFaculty: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;

    const data =
      await academicFacultyServices.getSingleAcademicFacultyDB(facultyId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Faculty retrieve Successfully",
      data: data,
    });
  },
);

const updateSingleAcademicFaculty: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;

    const data = await academicFacultyServices.updateAcademicFacultyDB(
      facultyId,
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update Academic Faculty Successfully",
      data: data,
    });
  },
);

// const deleteAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
//   const { facultyId } = req.params;
//   const data = await academicFacultyServices.deleteAcademicFacultyDB(facultyId);

//   res.status(httpStatus.OK).json({
//     success: true,
//     message: "AcademicFaculty deleted Successfully",
//     data: data,
//   });
// });
export const academicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
  //   deleteAcademicFaculty,
};
