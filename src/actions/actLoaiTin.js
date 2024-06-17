import { ADD_LOAITIN, REMOVE_LOAITIN, EDIT_LOAITIN } from "../const/index";

//action thêm loại tin
export const actAddLoaiTin = (ten) => {
  return { type: ADD_LOAITIN, ten};
};
//action xóa loại tin
export const actRemoveLoaiTin = (id) => {
  return {type: REMOVE_LOAITIN, id,};
};
//action sửa loại tin
export const actEditLoaiTin = (id, ten) => {
  return { type: EDIT_LOAITIN, id, ten,};
};