// Lấy elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

let tasks = []; // Array lưu objects {text, completed}

// Hàm loadTasks: Load từ LocalStorage và tái tạo DOM
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks'); // Lấy tasks từ localStorage
  if (storedTasks) {
    tasks = JSON.parse(storedTasks); // Chuyển đổi từ JSON string về array
    tasks.forEach(function (taskObj) {
      createTaskElement(taskObj); // Tạo các task từ dữ liệu đã lưu
    });
  }
}

// Hàm createTaskElement: Tạo li từ taskObj (dùng cho load và add)
function createTaskElement(taskObj) {
  const li = document.createElement('li'); // Tạo phần tử li mới

  const checkbox = document.createElement('input'); // Tạo input checkbox
  checkbox.type = 'checkbox'; // Đặt type là checkbox
  checkbox.checked = taskObj.completed; // Đặt trạng thái checked từ taskObj
  if (taskObj.completed) {
    li.classList.add('completed'); // Thêm class completed nếu task đã hoàn thành
  }
  checkbox.addEventListener('change', function () {
    taskObj.completed = this.checked; // Cập nhật trạng thái completed trong object
    if (this.checked) {
      li.classList.add('completed'); // Thêm class completed nếu checkbox được chọn
    } else {
      li.classList.remove('completed'); // Loại bỏ class completed nếu checkbox không được chọn
    }
    saveTasks(); // Lưu lại trạng thái sau khi thay đổi
  });

  const span = document.createElement('span'); // Tạo phần tử span mới
  span.textContent = taskObj.text; // Đặt nội dung của span là text của task

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function () {
    const index = tasks.indexOf(taskObj); // Tìm object trong array
    if (index > -1) {
      tasks.splice(index, 1); // Xóa khỏi array
    }
    taskList.removeChild(li);
    saveTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

// Hàm saveTasks: Lưu array vào LocalStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Lưu mảng tasks vào localStorage
}

// Hàm addTask
function addTask() {
  const taskText = taskInput.value.trim(); // Lấy giá trị từ input và loại bỏ khoảng trắng đầu cuối
  if (taskText === '') {
    alert('Please enter a task.'); // Hiển thị thông báo nếu input rỗng
    return;
  }
  const newTaskObj = { text: taskText, completed: false }; // Tạo object mới
  tasks.push(newTaskObj);
  createTaskElement(newTaskObj);
  saveTasks();
  taskInput.value = '';
  taskInput.focus();
}

// Thêm sự kiện
addButton.addEventListener('click', addTask); // Khi nút được nhấn
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    // Nếu phím Enter được nhấn
    addTask(); // Gọi hàm addTask
  }
});

// Gọi loadTasks khi trang được tải
loadTasks();
