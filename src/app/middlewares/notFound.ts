import { Response, Request } from "express";
import httpStatus from "http-status";

const notFound = (req: Request, res: Response) => {
  const message = "Api Not Found";

  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message,
    error: "",
  });
};

export default notFound;
