export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  permissionId: string;
}

export interface ILog {
  id: string;
  userId: string;
  permissionId: string;
  createdAt: string;
}

export interface IPermission {
  id: string;
  role: string;
  actions: Array<string>;
}

export interface ILogBody {
  email: string;
  password: string;
}

export interface IUserBody {
  name?: string;
  email?: string;
  password?: string;
  permissionId?: string
}