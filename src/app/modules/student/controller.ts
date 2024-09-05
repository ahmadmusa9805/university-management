import { RequestHandler } from "express";
import { studentServices } from "./service";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const data = await studentServices.getAllStudentsDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students is retrieve successfully",
    data: data,
  });
});
const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const data = await studentServices.getSingleStudentDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is retrieve successfully",
    data: data,
  });
});

const updateSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;

  const data = await studentServices.updateSingleStudentDB(studentId, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is updated successfully",
    data: data,
  });
});

const deleteSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const data = await studentServices.deleteStudentDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is  deleted Successfully",
    data: data,
  });
});
export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  updateSingleStudent,
  deleteSingleStudent,
};
