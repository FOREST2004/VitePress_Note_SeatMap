# 1. Vấn đề các hàng bị so le, hàng chẵn và hàng lẻ bị so le, cần chỉnh căn đều về 1 phía

## Mô tả vấn đề

::: warning VẤN ĐỀ
Hàng 2 và 4 đang bị lệch về phía trái, cần chỉnh sửa về phía phải giống với hàng 1,3,5.
:::

**Image problem example:**

![alt text](/image_guides/image.png)

---

## Solution

![alt text](/image_guides/image-1.png)

- Chẳng hạn ta muốn chỉnh hàng màu xanh lá thứ 2 căn đều về phía phải giống với hàng màu xanh lá 1 và 3.

::: tip LỜI KHUYÊN
Đầu tiên lời khuyên là bạn hãy chọn tất cả các hàng trong phần vòng cần chỉnh sửa đó ra 1 khoảng trắng khác để chỉnh sửa, sau đó khi chỉnh sửa xong, ta sẽ gán lại vào vị trí cũ sau, để đảm bảo được trong quá trình chỉnh sửa lỡ có sai sót, lỗi, hoặc lỡ chỉnh sửa những thứ không cần chỉnh sửa... thì lại không tốt.

Nên hãy copy ra vùng trắng khác để chỉnh sửa, cách chọn nhiều hàng là: chọn 1 hàng rồi nhấn giữ `Shift` để chọn được các hàng khác. Chọn các hàng trong vùng đó rồi copy ra vùng trắng khác.
:::

![alt text](/image_guides/image-7.png)

---

## Cách chỉnh sửa vấn đề so le

### Bước 1: Chọn điểm tọa độ

::: details Chi tiết
Tính tọa độ trung điểm của 2 hàng 1 và 3 (tọa độ x và y).

**Lưu ý:** Khi nhấn chọn 1 hàng để lấy tọa độ, ở phần bên trái của tọa độ có 1 hình lập phương 3x3 để chọn được điểm tọa độ trong scale mình muốn lấy tọa độ. Thì đối với trường hợp này là hàng đang nghiêng từ trái sang phải, nên ta phải chọn điểm tọa độ ở phía dưới bên phải của hàng.

![alt text](/image_guides/Screenshot%202025-12-19%20163029.jpg)
:::

### Bước 2: Tính toán tọa độ trung điểm

::: details Chi tiết
Vì đang các hàng đang là hàng nghiêng từ trái sang phải, nên tất cả quá trình chỉnh sửa hãy luôn để ý chỗ lập phương 3x3 đó luôn đảm bảo chọn được điểm tọa độ ở phía dưới bên phải của hàng.

Tính tọa độ trung điểm của 2 hàng 1 và 3.

**Công thức tính:**

```
A(x1, y1), B(x2, y2)
⇒ Tọa độ trung điểm:
  x3 = (x1 + x2) / 2
  y3 = (y1 + y2) / 2
```
:::

### Bước 3: Áp dụng tọa độ

::: details Chi tiết
Sau khi tính xong, chọn hàng 2 và gán tọa độ `(x3, y3)` đó vào hàng 2.

**Nhớ:** Mỗi khi chọn hàng, hãy luôn đảm bảo hình lập phương 3x3 ở phía dưới bên phải của hàng.

Lặp lại tương tự với những hàng khác cần chỉnh sửa.
:::

---

::: warning LƯU Ý QUAN TRỌNG
Tuy bạn nhìn thấy hàng màu vàng và xanh lá cùng thẳng hàng, nhưng khi bạn nhấn chọn hàng xanh lá hoặc hàng xanh, thì bạn sẽ thấy nó là các element hàng riêng, vàng và xanh không đồng hàng. Nên khi chỉnh xong các hàng màu xanh lá, các hàng màu vàng vẫn giữ nguyên vị trí. Vì lúc này bạn phải chỉnh tương tự các bước trên với các hàng màu vàng.
:::

![alt text](/image_guides/image-3.png)

Khi thực hiện với hàng màu vàng thứ 2, thì bạn sẽ lấy hàng màu vàng 1 và 3 để tính tọa độ trung điểm chứ không phải hàng màu xanh lá 1 và 3.

![alt text](/image_guides/image-4.png)

### Kết quả cuối cùng

![alt text](/image_guides/image-5.png)

---

## Cách gán về vị trí cũ

Như đã nói ở phần đầu, ta copy ra vùng trắng rỗng rãi khác để chỉnh sửa sau đó gán lại vào vị trí cũ sau.

### Bước 1: Xác định vùng cần thay thế

::: details Chi tiết
Vùng sơ đồ ghế ở vị trí cũ (chưa chỉnh sửa):

![alt text](/image_guides/image-8.png)

Vùng khoanh đỏ là vùng mình cần thay thế kết quả chỉnh sửa mới vô, vì chỗ lập phương 3x3 đang là vị trí dưới bên phải, nên ta chỉ cần chọn hàng màu xanh lá 1 và 5 rồi copy tọa độ x và y ra note. Sau đó bạn xóa các ghế ở vùng đỏ đó đi.
:::

### Bước 2: Gán kết quả mới vào

::: details Chi tiết
Tiếp theo bạn tô tất cả ghế ở đã chỉnh sửa và cập nhật phần lập phương và tọa độ x, y theo như trong note là được.

![alt text](/image_guides/Screenshot%202025-12-19%20171017.jpg)
:::

::: danger LƯU Ý
Hãy xóa cái cũ trước khi gán cái mới đã chỉnh sửa nhé, vì nếu không xóa thì nó có thể bị đè/trùng, dẫn đến kết quả bị sai.
:::

---

## Xuất file SVG

Cuối cùng là xuất file SVG:

```
File → Export → Export as...
```

::: tip
Nếu có hiện option gì thì không cần điều chỉnh gì cả, cứ để default, nhấn OK OK OK
:::

![alt text](/image_guides/image-9.png)
