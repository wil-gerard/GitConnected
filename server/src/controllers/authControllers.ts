import { Response, NextFunction } from 'express';
import { ReqAuth } from '../config/interface';

export const logout = (req: ReqAuth, res: Response, next: NextFunction) => {
  try {
    if (req.session.passport) {
      req.logout();
      res.status(205).send({ message: 'Successfully logged out' });
    } else {
      res.redirect('/');
    }
  } catch (err) {
    next(err);
  }
};
