import { NextFunction, Request, Response } from 'express';
import { AnyObjectSchema, ValidationError } from 'yup';

const verifySchemaMiddleware =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = validatedBody;

      return next();
    } catch (err) {
      if (err instanceof ValidationError)
        return res.status(400).json({ message: err.errors.join('; ') });
    }
  };

export default verifySchemaMiddleware;
