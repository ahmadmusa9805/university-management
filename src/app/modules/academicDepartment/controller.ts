import { RequestHandler } from "express";
import { academicDepartmentServices } from "./service";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const data = await academicDepartmentServices.createAcademicDepartmentDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Department Created Successfully",
      data: data,
    });
  },
);

const getAllAcademicDepartments: RequestHandler = catchAsync(
  async (req, res) => {
    const data = await academicDepartmentServices.getAllAcademicDepartmentsDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Departments retrieve Successfully",
      data: data,
    });
  },
);
const getSingleAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;

    const data =
      await academicDepartmentServices.getSingleAcademicDepartmentDB(facultyId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Department retrieve Successfully",
      data: data,
    });
  },
);

const updateSingleAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;

    const data = await academicDepartmentServices.updateAcademicDepartmentDB(
      facultyId,
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update Academic Department Successfully",
      data: data,
    });
  },
);

export const academicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateSingleAcademicDepartment,
};
