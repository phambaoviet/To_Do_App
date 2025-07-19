// Lấy elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

let tasks = []; // Array lưu objects {text, completed}

// Thêm hàm addTask
function addTask() {
  const taskText = taskInput.value.trim(); // Lấy giá trị từ input và loại bỏ khoảng trắng đầu cuối
  if (taskText === '') {
    alert('Please enter a task.'); // Hiển thị thông báo nếu input rỗng
    return;
  }
  // Tạo elenment <li> mới cho mỗi task
  const li = document.createElement('li'); // Tạo phần tử li mới

  // Tạo checkbox
  const checkbox = document.createElement('input'); // Tạo input checkbox
  checkbox.type = 'checkbox'; // Đặt type là checkbox
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      li.classList.add('completed'); // Thêm class completed nếu checkbox được chọn
    } else {
      li.classList.remove('completed'); // Loại bỏ class completed nếu checkbox không được chọn
    }
  });

  // Tạo span chứa text
  const span = document.createElement('span'); // Tạo phần tử span mới
  span.textContent = taskText; // Đặt nội dung của span là text của task

  // Tạo nút delete
  const deleteButton = document.createElement('button'); // Tạo nút button mới
  deleteButton.textContent = 'Delete'; // Đặt nội dung của nút là 'Delete'
  deleteButton.classList = 'delete-button'; // Thêm class để có thể style
  deleteButton.addEventListener('click', function () {
    taskList.removeChild(li); // Xóa phần tử li khỏi danh sách khi nút delete được nhấn
  });

  // Ghép các phần tử lại với nhau
  li.appendChild(checkbox); // Thêm checkbox vào li
  li.appendChild(span); // Thêm span vào li
  li.appendChild(deleteButton); // Thêm nút delete vào li

  // Thêm li vào danh sách
  taskList.appendChild(li); // Thêm phần tử li vào taskList

  // Xoá nội dung input sau khi thêm task
  taskInput.value = ''; // Đặt giá trị của input về rỗng
  taskInput.focus(); // Đặt focus lại vào input để người dùng có thể nhập task mới
}
