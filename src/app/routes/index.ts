import express from "express";
import { studentRoute } from "../modules/student/route";
import { userRoute } from "../modules/user/route";
import { academicSemesterRoute } from "../modules/academicSemester/route";
import { academicFacultyRoute } from "../modules/academicFaculty/route";
import { academicDepartmentRoute } from "../modules/academicDepartment/route";
import { FacultyRoutes } from "../modules/faculty/route";
import { AdminRoutes } from "../modules/admin/route";
import { CourseRoutes } from "../modules/course/route";
import { semesterRegistrationRoutes } from "../modules/semesterRegistration/route";
import { offeredCourseRoutes } from "../modules/OfferedCourse/route";
import { authRoutes } from "../modules/auth/route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/students",
    route: studentRoute,
  },
  {
    path: "/faculties",
    route: FacultyRoutes,
  },
  {
    path: "/admins",
    route: AdminRoutes,
  },
  {
    path: "/academic-semesters",
    route: academicSemesterRoute,
  },
  {
    path: "/academic-faculties",
    route: academicFacultyRoute,
  },
  {
    path: "/academic-departments",
    route: academicDepartmentRoute,
  },
  {
    path: "/courses",
    route: CourseRoutes,
  },
  {
    path: "/semester-registrations",
    route: semesterRegistrationRoutes,
  },
  {
    path: "/offered-courses",
    route: offeredCourseRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
