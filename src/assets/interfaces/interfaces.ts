export interface IUser {
  id: string;
  name: string;
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
  userId: string;
  permissionId: string;
}

export interface IUserBody {
  name?: string;
  password?: string;
  permissionId?: string
}