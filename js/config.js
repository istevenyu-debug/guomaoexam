// ======== Firebase 設定 ========
export const firebaseConfig = {
  apiKey: "AIzaSyALOpwHOnrMAylxC5FX4X7EKXgBl9UJpWk",
  authDomain: "guomaoexam.firebaseapp.com",
  projectId: "guomaoexam",
  storageBucket: "guomaoexam.firebasestorage.app",
  messagingSenderId: "1036838528874",
  appId: "1:1036838528874:web:2141386ccad8576bc86713"
};

// ======== 老師 Email 白名單 ========
export const TEACHER_EMAIL = "istevenyu@gmail.com";

// ======== 班級設定 ========
export const CLASSES = ["201", "202", "203"];

// ======== 身份設定 ========
export const ROLES = {
  teacher: "老師",
  student: "學生",
  public: "社會人士"
};

// ======== 職業選項（社會人士）========
export const OCCUPATIONS = [
  "上班族", "待業中", "自營業者", "學生（非在校）", "其他"
];

// ======== 報考目的 ========
export const PURPOSES = [
  "應試準備（丙級檢定）", "自我進修", "工作需要", "其他"
];
