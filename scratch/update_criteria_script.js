const fs = require('fs');
let s = fs.readFileSync('scratch/generate_hugo_content.js', 'utf8');

const updatedCriteria = `const official8Criteria = [
  {
    id: 1,
    title_vi: "Kiến thức chuyên môn",
    title_en: "Professional Knowledge",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Nắm vững các dịch vụ AWS cốt lõi đã học (IAM, EC2, VPC, S3, Lambda, Cloud9, RDS, DynamoDB), chủ động tìm hiểu kiến trúc triển khai ứng dụng thực tế.",
    remarks_en: "Solid understanding of core AWS services studied (IAM, EC2, VPC, S3, Lambda, Cloud9, RDS, DynamoDB), actively researching practical deployment architectures."
  },
  {
    id: 2,
    title_vi: "Khả năng tự học và nghiên cứu",
    title_en: "Self-learning and Research",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Chủ động nghiên cứu tài liệu kỹ thuật AWS Documentation, AWS Blogs và các buổi hội thảo công nghệ, tự giải quyết các lỗi cấu hình trong quá trình thực hành.",
    remarks_en: "Proactively researched official AWS Documentation, AWS Blogs, and technical seminars, independently troubleshooting configuration issues during hands-on labs."
  },
  {
    id: 3,
    title_vi: "Tính chủ động trong công việc",
    title_en: "Proactiveness",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Chủ động nhận nhiệm vụ, hoàn thành đúng tiến độ học tập hàng tuần, tích cực đề xuất giải pháp tối ưu hóa lưu trữ và phương án tổ chức tài liệu kỹ thuật.",
    remarks_en: "Consistently took initiative on weekly study milestones, actively proposed storage optimization approaches, and organized technical documentation effectively."
  },
  {
    id: 4,
    title_vi: "Kỷ luật và tuân thủ quy định",
    title_en: "Discipline and Compliance",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Tuân thủ nghiêm túc thời gian biểu, bảo mật tài khoản Sandbox và khóa truy cập IAM, ghi chép nhật ký công việc (Worklog) đầy đủ và đúng hạn.",
    remarks_en: "Strictly observed project schedules, practiced least-privilege security for Sandbox accounts and IAM access, maintaining prompt and detailed Worklog entries."
  },
  {
    id: 5,
    title_vi: "Kỹ năng giao tiếp",
    title_en: "Communication Skills",
    score_vi: "Khá",
    score_en: "Fair",
    remarks_vi: "Trình bày nội dung báo cáo rõ ràng, chủ động trao đổi tiến độ với Mentor và các thành viên; tiếp tục rèn luyện kỹ năng thuyết trình kỹ thuật bằng tiếng Anh.",
    remarks_en: "Communicated status clearly, actively discussed progress with Mentor and team members; continuing to develop technical presentation fluency in English."
  },
  {
    id: 6,
    title_vi: "Làm việc nhóm",
    title_en: "Teamwork",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Hợp tác tích cực với các thành viên trong nhóm dự án Nutrition E-Commerce, chia sẻ tài liệu học tập và phối hợp nhịp nhàng trong các buổi thảo luận.",
    remarks_en: "Collaborated well with peers on the Nutrition E-Commerce project, sharing learning resources and participating actively in team discussions."
  },
  {
    id: 7,
    title_vi: "Năng lực giải quyết vấn đề",
    title_en: "Problem-solving Ability",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Phân tích nguyên nhân sự cố mạng VPC, phân quyền IAM và cấu hình cơ sở dữ liệu dựa trên tài liệu AWS chính thức, đề xuất giải pháp khả thi và an toàn.",
    remarks_en: "Analyzed root causes of VPC networking, IAM permissions, and database connectivity issues using official AWS docs, proposing secure and viable solutions."
  },
  {
    id: 8,
    title_vi: "Đóng góp cho Workshop",
    title_en: "Workshop Contribution",
    score_vi: "Tốt",
    score_en: "Good",
    remarks_vi: "Hỗ trợ biên soạn và kiểm thử tài liệu hướng dẫn thực hành Workshop 7 bước, chuẩn hóa quy trình triển khai hạ tầng và dọn dẹp tài nguyên sau bài lab.",
    remarks_en: "Assisted in compiling and validating 7-step hands-on Workshop documentation, standardizing infrastructure deployment instructions and cleanup steps."
  }
];`;

const startIdx = s.indexOf('const official8Criteria = [');
const endIdx = s.indexOf('const criteriaTableVi = official8Criteria.map(');
if (startIdx !== -1 && endIdx !== -1) {
  s = s.slice(0, startIdx) + updatedCriteria + '\n\n' + s.slice(endIdx);
  fs.writeFileSync('scratch/generate_hugo_content.js', s, 'utf8');
  console.log('Successfully updated official8Criteria in generate_hugo_content.js!');
} else {
  console.error('Could not locate official8Criteria indices');
}
