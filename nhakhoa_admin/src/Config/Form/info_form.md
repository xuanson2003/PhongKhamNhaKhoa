# Thuộc tính cấu hình Ant Design

## 1. Form
- **layout**: 
  - `horizontal`
  - `vertical`
  - `inline`

## 2. Input
- **type**:
  - `text`
  - `password`
  - `email`
  - `url`
  - `number`
  - `search`
  - `tel`
  - `hidden`

- **size**:
  - `large`
  - `middle`
  - `small`

- **disabled**: 
  - `true`
  - `false`

- **placeholder**: (dạng chuỗi)

## 3. Button
- **type**:
  - `primary`
  - `default`
  - `dashed`
  - `link`
  - `text`
  - `danger`

- **size**:
  - `large`
  - `middle`
  - `small`

- **ghost**: 
  - `true`
  - `false`

- **loading**: 
  - `true`
  - `false`

- **shape**: 
  - `default`
  - `circle`
  - `round`

## 4. Select
- **mode**:
  - `multiple`
  - `tags`
  - `combobox`

- **size**:
  - `large`
  - `middle`
  - `small`

- **disabled**:
  - `true`
  - `false`

- **allowClear**: 
  - `true`
  - `false`

- **placeholder**: (dạng chuỗi)

## 5. Checkbox
- **checked**: 
  - `true`
  - `false`

- **disabled**: 
  - `true`
  - `false`

## 6. Radio
- **value**: (dạng chuỗi hoặc số)

- **disabled**: 
  - `true`
  - `false`

## 7. Switch
- **checked**: 
  - `true`
  - `false`

- **disabled**: 
  - `true`
  - `false`

## 8. DatePicker
- **format**: (dạng chuỗi, ví dụ: `'YYYY-MM-DD'`, `'MM-DD-YYYY'`,...)

- **disabledDate**: (hàm để xác định ngày nào bị vô hiệu hóa)

## 9. Cascader
- **options**: (danh sách các lựa chọn dạng mảng)

- **loadData**: (hàm để tải dữ liệu)

## 10. Table
- **pagination**: (đối tượng cấu hình phân trang)

- **rowSelection**: (đối tượng cấu hình chọn hàng)

## 11. Modal
- **visible**: 
  - `true`
  - `false`

- **confirmLoading**: 
  - `true`
  - `false`

- **onOk**: (hàm xử lý khi nhấn nút OK)

## 12. Tooltip
- **title**: (dạng chuỗi hoặc JSX)

- **placement**: 
  - `top`
  - `left`
  - `right`
  - `bottom`

## 13. Drawer
- **title**: (dạng chuỗi hoặc JSX)

- **placement**: 
  - `left`
  - `right`
  - `top`
  - `bottom`

## Ghi chú
- Tất cả các giá trị trên có thể có thêm các thuộc tính tùy chỉnh khác như `style`, `className`, và một số giá trị khác tùy thuộc vào yêu cầu cụ thể của từng thành phần.

- Đối với các thành phần cụ thể hơn, hãy tham khảo tài liệu chính thức của Ant Design để tìm hiểu sâu hơn về các thuộc tính và cách sử dụng: [Ant Design Documentation](https://ant.design/docs/react/introduce).
