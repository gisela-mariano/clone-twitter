import * as yup from 'yup';
import { IReqLoginUser } from '../../interfaces/user.intf';

const loginUserSerializer: yup.SchemaOf<IReqLoginUser> = yup.object().shape({
  email: yup.string().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

export default loginUserSerializer;
