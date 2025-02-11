export interface BaseResponse<T> {
  meta: MetaResponse
  data: T
}

export interface MetaResponse {
  message: string;
  status: string;
  code: string;
}

export interface BaseResponsePaging<T> extends BaseResponse<T> {
  page: number;
  size: number;
}

export interface MultiLang {
  name: string
  value: string
}
