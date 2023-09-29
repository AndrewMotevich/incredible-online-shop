import { IPath } from '../interfaces/path.interface';

export const ROOT_PATH: IPath = {
  path: '',
  fullPath: '/',
};
export const GOOD_LIST_PATH: IPath = {
  path: 'list',
  fullPath: '/list',
};
export const GOOD_DETAILS_PATH: IPath = {
  path: 'details/:id',
  fullPath: '/details/:id',
};
export const GOOD_CREATE_PATH: IPath = {
  path: 'create',
  fullPath: '/create',
};
export const GOOD_EDIT_PATH: IPath = {
  path: 'edit/:id',
  fullPath: '/edit/:id',
};

