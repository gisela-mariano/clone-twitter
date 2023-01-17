import * as yup from 'yup';
import { IReqCreateUser } from '../../interfaces/user.intf';

const createUserSerializer: yup.SchemaOf<IReqCreateUser> = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup.string().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

export default createUserSerializer;
