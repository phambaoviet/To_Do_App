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
}
