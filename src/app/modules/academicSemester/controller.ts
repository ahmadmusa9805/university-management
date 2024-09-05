import httpStatus from "http-status";
import { academicSemesterServices } from "./service";
import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const data = await academicSemesterServices.createAcademicSemesterDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester Created Successfully",
    data: data,
  });
});

const getAllAcademicSemesters: RequestHandler = catchAsync(async (req, res) => {
  const data = await academicSemesterServices.getAllAcademicSemestersDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semesters retrieve Successfully",
    data: data,
  });
});
const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;

    const data =
      await academicSemesterServices.getSingleAcademicSemesterDB(facultyId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Semester retrieve Successfully",
      data: data,
    });
  },
);

const updateSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;

    const data = await academicSemesterServices.updateAcademicSemesterDB(
      facultyId,
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update Academic Semester Successfully",
      data: data,
    });
  },
);

export const academicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
