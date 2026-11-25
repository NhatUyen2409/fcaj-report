/**
 * AWS FIRST CLOUD AI JOURNEY (FCAJ) - INTERNSHIP REPORT SCRIPT
 * Comprehensive Bilingual System (Vietnamese / English)
 * Pure language switching with zero mixed bilingual text
 * Student: Phan Nhat Uyen
 */

// ==========================================
// 1. I18N DICTIONARY (VIETNAMESE & ENGLISH)
// ==========================================
const I18N_DICTIONARY = {
  vi: {
    brandName: "Báo cáo thực tập",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Tìm kiếm nội dung báo cáo...",
    reportContentTitle: "NỘI DUNG BÁO CÁO",
    externalLinksTitle: "LIÊN KẾT NGOÀI",
    
    // Nav items
    navStudentInfo: "Thông tin sinh viên",
    navWorklog: "Nhật ký công việc",
    navProposal: "Đề xuất đồ án",
    navBlogs: "Bài viết Blog",
    navEvents: "Sự kiện tham gia",
    navWorkshop: "Bài thực hành Workshop",
    navSelfAssessment: "Tự đánh giá",
    navFeedback: "Chia sẻ & Góp ý",
    navSettings: "Xuất & In báo cáo",
    
    // Sidebar profile
    sidebarCompany: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
    sidebarViewProfile: "Xem thông tin chi tiết",
    
    // Header
    btnPrintPdf: "In / Xuất PDF",
    btnAddWorklog: "+ Thêm Worklog",
    greeting: "Xin chào",
    greetingMorning: "Chào buổi sáng",
    greetingAfternoon: "Chào buổi chiều",
    greetingEvening: "Chào buổi tối",
    modalDayPlaceholder: "VD: Thứ Hai hoặc Thứ 2 - Thứ 4",
    modalDescPlaceholder: "Mô tả công việc hoặc đầu mục chi tiết...",
    modalRefPlaceholder: "https://docs.aws.amazon.com/...",
    
    // Page titles (Header)
    title_thong_tin: "Thông tin sinh viên & Báo cáo",
    title_worklog: "1. Nhật ký công việc (12 Tuần)",
    title_proposal: "2. Đề xuất đồ án thực tập",
    title_blogs_posted: "3. Bài viết kỹ thuật đã đăng",
    title_blogs_s3_express_one_zone: "3. Bài viết kỹ thuật – Amazon S3 Express One Zone",
    title_blogs_aws_event_driven_architecture: "3. Bài viết kỹ thuật – AWS Event-Driven Architecture",
    title_blogs_aws_ec2_identity_containment: "3. Bài viết kỹ thuật – EC2 Identity Containment",
    title_events: "4. Sự kiện đã tham gia",
    title_workshop: "5. Bài thực hành kỹ thuật",
    title_self_evaluation: "6. Tự đánh giá kết quả thực tập",
    title_feedback: "7. Chia sẻ & Đóng góp ý kiến",
    title_cai_dat: "Cài đặt & Quản lý dữ liệu",
    
    // Student info section
    infoNotice: "Ghi chú quan trọng: Báo cáo thực tập tốt nghiệp này được xây dựng chuẩn theo khung cấu trúc yêu cầu của chương trình First Cloud AI Journey (FCAJ) thuộc Amazon Web Services (AWS) Việt Nam. Toàn bộ nội dung bên dưới có thể tự do chỉnh sửa và lưu trữ trực tiếp.",
    infoCardTitle: "Thông tin sinh viên thực tập",
    infoCardSubtitle: "Hồ sơ thực tập chính thức tại AWS Vietnam - First Cloud AI Journey",
    officialBadge: "Chính thức • AWS FCAJ",
    photoBoxTitle: "Ảnh thẻ / Cá nhân",
    photoBoxHint: "Bấm để tải ảnh",
    photoChangeText: "Thay đổi ảnh",
    photoFitCover: "Cắt vừa",
    photoFitFull: "Nguyên ảnh",
    photoViewHd: "Xem HD",
    hdModalTitle: "Ảnh cá nhân (Độ nét cao)",
    hdModalDesc: "Ảnh được giữ nguyên độ phân giải gốc cao nhất, không bị mờ nhòe hay vỡ hạt.",
    btnModalClose: "Đóng",
    btnUploadPhoto: "Tải ảnh lên",
    btnRemovePhoto: "Gỡ ảnh",
    photoFormatNote: "PNG, JPG, WEBP (Ảnh nét < 10MB)",
    toastPhotoUpdated: "Đã cập nhật ảnh cá nhân với độ nét tối ưu!",
    toastPhotoRemoved: "Đã gỡ ảnh cá nhân!",
    toastPhotoError: "Không thể xử lý ảnh, vui lòng thử lại tệp ảnh khác!",
    toastPhotoSizeLimit: "Dung lượng ảnh tối đa 10MB!",
    toastPhotoInvalidType: "Vui lòng chọn tệp hình ảnh hợp lệ!",
    toastFitCover: "Đã chuyển sang chế độ Cắt vừa khung (Cover)!",
    toastFitContain: "Đã chuyển sang chế độ Hiển thị nguyên ảnh (không bị cắt/vỡ nét)!",
    labelFullName: "Họ và tên",
    labelStudentId: "Mã số sinh viên",
    labelPhone: "Số điện thoại",
    labelEmail: "Email",
    labelUniversity: "Trường Đại học",
    labelMajor: "Chuyên ngành",
    labelClass: "Lớp / Khóa",
    labelCompany: "Đơn vị thực tập",
    labelPosition: "Chương trình thực tập",
    labelDuration: "Thời gian thực tập",
    btnSaveInfo: "Lưu cập nhật thông tin",
    
    // TOC
    tocTitle: "Cấu trúc các mục báo cáo",
    tocSubtitle: "Nhấp vào từng mục để xem báo cáo chi tiết:",
    toc1Title: "1. Nhật ký công việc",
    toc1Desc: "Nhật ký chi tiết 12 tuần thực tập (Mục tiêu, Bảng phân công công việc, Kết quả đạt được).",
    toc2Title: "2. Đề xuất đồ án",
    toc2Desc: "Đề xuất đồ án: IoT Weather Platform - Giải pháp AWS Serverless Real-Time Monitoring.",
    toc3Title: "3. Bài viết kỹ thuật",
    toc3Desc: "Các bài viết kỹ thuật đã đăng tải trên AWS Study Group (S3 Express One Zone, Event-Driven Architecture, EC2 Identity Containment).",
    zoomDiagramTooltip: "Nhấp để xem ảnh kiến trúc độ nét cao (HD)",
    btnExpandSnippet: "Đọc tiếp nội dung đầy đủ ▼",
    btnCollapseSnippet: "Thu gọn bài viết ▲",
    diagModalTitle: "Sơ đồ kiến trúc (Độ nét cao)",
    diagModalDesc: "Sơ đồ so sánh kiến trúc giữa Amazon S3 Standard và Amazon S3 Express One Zone trong luồng xử lý AI/ML.",
    btnOpenTab: "Mở ảnh trong tab mới ↗",
    toc4Title: "4. Sự kiện tham gia",
    toc4Desc: "Báo cáo tham dự các sự kiện công nghệ AWS thực tế: Modernization Workshop tại Bitexco, Voice AI Meetup và Enterprise AI trên AWS Cloud.",
    toc5Title: "5. Bài thực hành Workshop",
    toc5Desc: "Bài thực hành chuyên sâu: Truy cập Amazon S3 an toàn từ môi trường hybrid qua Gateway & Interface VPC Endpoints.",
    toc6Title: "6. Tự đánh giá",
    toc6Desc: "Bảng 12 tiêu chí tự đánh giá năng lực cá nhân và các điểm cần tiếp tục hoàn thiện.",
    toc7Title: "7. Chia sẻ & Góp ý",
    toc7Desc: "Đánh giá 6 khía cạnh môi trường làm việc, sự hỗ trợ từ Mentor, cơ hội phát triển tại FCAJ.",
    
    // 1. Worklog
    worklogSectionTitle: "1. Nhật ký 12 tuần thực tập",
    worklogSectionSubtitle: "Ghi lại mục tiêu, nhiệm vụ từng ngày và kết quả đạt được qua từng tuần",
    btnAddTaskThisWeek: "+ Thêm công việc vào tuần này",
    weekPrefix: "Tuần",
    weekHeadingPrefix: "Nhật ký Tuần",
    bootcampSubtitle: "Chương trình đào tạo First Cloud AI Journey",
    btnEditWeekMeta: "Sửa mục tiêu & thành tích",
    metaObjectivesTitle: "Mục tiêu tuần",
    metaAchievementsTitle: "Thành tích đạt được",
    tasksTableTitle: "Nội dung công việc thực hiện trong tuần",
    thDay: "Thứ",
    thTaskDesc: "Nội dung công việc",
    thStartDate: "Ngày bắt đầu",
    thEndDate: "Ngày hoàn thành",
    thRef: "Tài liệu tham khảo",
    thActions: "Thao tác",
    viewRefLink: "Xem tài liệu ↗",
    btnDelete: "Xóa",
    btnEdit: "Sửa",
    btnClearWeek: "Đặt lại tuần này",
    worklogToolsLabel: "Thao tác nhanh:",
    btnExportWorklog: "Xuất JSON",
    btnImportWorklog: "Nhập JSON",
    modalMetaTitle: "Chỉnh sửa Mục tiêu & Thành tích",
    modalMetaObjectivesLabel: "Mục tiêu trọng tâm tuần",
    modalMetaObjectivesPlaceholder: "Nhập mục tiêu trọng tâm trong tuần...",
    modalMetaAchievementsLabel: "Thành tích đạt được (mỗi ý một dòng, gạch đầu dòng -)",
    modalMetaAchievementsPlaceholder: "- Hoàn thành nhiệm vụ...\n- Nắm vững kiến thức...",
    btnModalSaveMeta: "Lưu mục tiêu & thành tích",
    modalEditTaskTitle: "Chỉnh sửa công việc",
    btnUpdateTask: "Cập nhật công việc",
    toastUpdateTaskSuccess: "✓ Đã cập nhật công việc thành công!",
    toastSaveMetaSuccess: "✓ Đã lưu mục tiêu & thành tích tuần thành công!",
    toastResetWeekSuccess: "✓ Đã đặt lại nội dung tuần này thành trang trắng!",
    confirmResetWeek: "Bạn có chắc chắn muốn xóa toàn bộ công việc và mục tiêu của tuần này để tự viết lại từ đầu?",
    toastExportSuccess: "✓ Đã tải xuống file sao lưu Worklog JSON thành công!",
    toastImportSuccess: "✓ Đã nhập dữ liệu Worklog thành công!",
    emptyObjectivesMsg: "Chưa có mục tiêu tuần. Bấm \"Sửa mục tiêu & thành tích\" để thêm.",
    emptyAchievementsMsg: "Chưa có thành tích đạt được. Bấm \"Sửa mục tiêu & thành tích\" để thêm.",
    emptyTasksMsg: "Chưa có đầu việc nào được ghi cho tuần này. Bấm nút \"+ Thêm công việc vào tuần này\" để thêm!",
    
    // 2. Proposal
    proposalSectionTitle: "2. Đề xuất đồ án thực tập",
    proposalSectionSubtitle: "Giải pháp AWS Serverless toàn diện cho giám sát thời tiết thời gian thực",
    btnSaveProposal: "Lưu đề xuất đồ án",
    proposalNotice: "Đề tài nghiên cứu: Nền tảng quan trắc thời tiết IoT cho phòng thí nghiệm - Giải pháp AWS Serverless Real-Time Monitoring sử dụng AWS IoT Core, Lambda, S3 Data Lake, AWS Glue và Amplify Next.js.",
    prop1Heading: "1. Tóm tắt điều hành",
    prop2Heading: "2. Đặt vấn đề & Giải pháp",
    propProblemLabel: "Thách thức hiện tại",
    propSolutionLabel: "Giải pháp & Lợi ích mang lại",
    prop3Heading: "3. Kiến trúc giải pháp & Dịch vụ AWS sử dụng",
    prop4Heading: "4. Dự toán chi phí hạ tầng AWS hàng tháng",
    
    // 3. Blogs
    blogsSectionTitle: "3. Các bài viết kỹ thuật đã đăng",
    blogsSectionSubtitle: "Chia sẻ kiến thức chuyên sâu trên cộng đồng AWS Study Group",
    btnAddBlog: "+ Viết bài blog mới",
    readArticleLink: "Xem bài viết ↗",
    publishedDateLabel: "Ngày đăng:",
    
    // 4. Events
    eventsSectionTitle: "4. Sự kiện thực tế đã tham gia",
    eventsSectionSubtitle: "Tham gia các buổi hội thảo công nghệ AWS chuyên sâu",
    btnAddEvent: "+ Thêm sự kiện mới",
    eventBadge: "Hội thảo công nghệ",
    eventRoleLabel: "Vai trò:",
    eventSpeakersLabel: "Diễn giả:",
    eventHighlightsLabel: "Nội dung trọng tâm & Bài học rút ra:",
    btnDeleteEvent: "Xóa sự kiện",
    btnViewFullReport: "Xem báo cáo chi tiết →",
    btnBackToEvents: "← Quay lại danh sách sự kiện",
    eventsBreadcrumb: "4. Sự kiện thực tế đã tham gia",
    eventReportBadge: "Báo cáo thu hoạch sự kiện",
    eventReportSessionTag: "Session 1 • Voice AI & Contact Center",
    toastEventReportLoaded: "Đã tải báo cáo Session 1 Voice AI",
    
    // 5. Workshop
    workshopSectionTitle: "5. Bài thực hành: Truy cập S3 an toàn qua VPC Endpoints",
    workshopSectionSubtitle: "Bài thực hành chuyên sâu về AWS PrivateLink, Gateway & Interface Endpoints",
    btnPrintWorkshop: "In nội dung Workshop",
    wsTabOverview: "5.1 Tổng quan",
    wsTabPrereq: "5.2 Điều kiện tiên quyết",
    wsTabVpc: "5.3 Truy cập S3 từ VPC",
    wsTabOnPrem: "5.4 Truy cập từ On-Premises",
    wsTabPolicy: "5.5 Chính sách Endpoint",
    wsTabCleanup: "5.6 Dọn dẹp tài nguyên",
    
    wsOverviewTitle: "5.1 Tổng quan & Kiến trúc bài thực hành",
    wsOverviewDesc: "AWS PrivateLink cung cấp kết nối riêng tư an toàn tới các dịch vụ AWS từ VPC và mạng On-premises nội bộ mà không cần đưa lưu lượng truy cập qua Internet công cộng.",
    wsGatewayCardTitle: "Gateway VPC Endpoint",
    wsGatewayCardDesc: "Sử dụng cho tài nguyên bên trong VPC truy cập vào Amazon S3 và Amazon DynamoDB. Định tuyến lưu lượng thông qua Route Table mà không phát sinh thêm chi phí theo giờ.",
    wsInterfaceCardTitle: "Interface VPC Endpoint",
    wsInterfaceCardDesc: "Được cấp phát Elastic Network Interface (ENI) với địa chỉ IP riêng trong Subnet của bạn. Hỗ trợ truy cập cả từ VPC lẫn mạng On-premises thông qua AWS Site-to-Site VPN hoặc Direct Connect.",
    
    wsPrereqTitle: "5.2 Điều kiện tiên quyết & Chính sách IAM",
    wsPrereqDesc: "Chính sách IAM quyền tối thiểu để khởi tạo tài nguyên CloudFormation và Transit Gateway:",
    
    wsVpcTitle: "5.3 Truy cập S3 từ VPC (Gateway Endpoint)",
    wsVpcDesc: "Các bước thực hiện tạo Gateway Endpoint và kiểm thử kết nối riêng tư:",
    wsVpcStep1: "Vào VPC Console > Endpoints > Chọn Create Endpoint.",
    wsVpcStep2: "Chọn Service: com.amazonaws.us-east-1.s3 dạng Gateway.",
    wsVpcStep3: "Gắn Route Table của VPC Cloud để tự động cập nhật route prefix S3.",
    wsVpcStep4: "Kiểm tra lệnh từ EC2 instance:",
    
    wsOnpremTitle: "5.4 Truy cập S3 từ On-Premises (Interface Endpoint)",
    wsOnpremDesc: "Mô phỏng môi trường On-Premises kết nối qua strongSwan VPN và cấu hình Route 53 Resolver Rule:",
    
    wsPolicyTitle: "5.5 Chính sách VPC Endpoint (Kiểm soát quyền truy cập)",
    wsPolicyDesc: "Chính sách giới hạn chỉ cho phép truy cập vào duy nhất bucket yourbucketname-2:",
    
    wsCleanupTitle: "5.6 Dọn dẹp tài nguyên (Tối ưu chi phí)",
    wsCleanupStep1: "Xóa Route 53 Hosted Zone s3.us-east-1.amazonaws.com.",
    wsCleanupStep2: "Hủy liên kết Route 53 Resolver Rule myS3Rule khỏi VPC On-prem.",
    wsCleanupStep3: "Xóa 2 CloudFormation Stacks: PLOnpremSetup và PLCloudSetup.",
    wsCleanupStep4: "Empty và Delete các S3 buckets đã tạo trong bài lab.",
    
    // 6. Self-assessment
    selfSectionTitle: "6. Tự đánh giá kết quả thực tập",
    selfSectionSubtitle: "Bảng 12 tiêu chí đánh giá năng lực của sinh viên Phan Nhật Uyên",
    btnSaveAssessment: "Lưu tự đánh giá",
    assessNarrativeLabel: "Tóm tắt quá trình rèn luyện & công tác",
    criteriaTableTitle: "Bảng đánh giá theo 12 tiêu chí chuẩn của AWS FCAJ",
    thCriteriaNo: "STT",
    thCriteriaName: "Tiêu chí đánh giá",
    thCriteriaDesc: "Mô tả chi tiết",
    thGood: "Tốt",
    thFair: "Khá",
    thAvg: "Trung bình",
    needsImprovementLabel: "Các điểm cần tiếp tục hoàn thiện",
    
    // 7. Feedback
    feedbackSectionTitle: "7. Chia sẻ & Đóng góp ý kiến",
    feedbackSectionSubtitle: "Đóng góp ý kiến cải tiến cho chương trình First Cloud AI Journey",
    btnSaveFeedback: "Lưu ý kiến đóng góp",
    fb1Label: "1. Môi trường làm việc",
    fb2Label: "2. Sự hỗ trợ từ Mentor & Ban tổ chức",
    fb3Label: "3. Mức độ phù hợp với ngành học",
    fb4Label: "4. Cơ hội học tập & Phát triển kỹ năng",
    fb5Label: "5. Văn hóa công ty & Tinh thần đồng đội",
    fb6Label: "6. Chính sách & Chế độ đãi ngộ",
    fbSuggestionsLabel: "Đề xuất & Kỳ vọng phát triển tương lai",
    
    // Settings
    settingsSectionTitle: "Xuất dữ liệu & In báo cáo",
    settingsSectionSubtitle: "Xuất toàn bộ báo cáo thực tập thành file JSON hoặc in sang định dạng PDF",
    settingsCardTitle: "Xuất dữ liệu & In báo cáo",
    settingsCardDesc: "Toàn bộ dữ liệu báo cáo thực tập (12 tuần worklog, proposal, bài viết kỹ thuật, sự kiện, workshop, đánh giá) đã được hoàn thiện. Bạn có thể tải file dữ liệu JSON hoặc in báo cáo:",
    btnExportJson: "Tải file sao lưu (worklog-fcaj-backup.json)",
    btnPrintReport: "In báo cáo (Print / PDF)",
    btnImportJson: "Khôi phục từ file JSON",
    btnResetData: "Đặt lại mẫu báo cáo chuẩn FCAJ",
    
    // Modal
    modalTitle: "+ Thêm nhiệm vụ vào Worklog",
    modalWeekSelectLabel: "Chọn tuần áp dụng",
    modalDayLabel: "Thứ trong tuần",
    modalTaskDescLabel: "Nội dung nhiệm vụ",
    modalStartLabel: "Ngày bắt đầu",
    modalEndLabel: "Ngày hoàn thành",
    modalRefLabel: "Tài liệu tham khảo (URL hoặc ghi chú)",
    btnModalCancel: "Hủy bỏ",
    btnModalSave: "Lưu công việc",
    
    // Alerts and prompts
    toastSaveInfo: "Đã lưu thông tin sinh viên thành công!",
    toastSaveProposal: "Đã lưu nội dung Proposal thành công!",
    toastAddBlog: "Đã thêm bài blog mới!",
    toastDeleteBlog: "Đã xóa bài blog.",
    toastAddEvent: "Đã thêm sự kiện mới!",
    toastDeleteEvent: "Đã xóa sự kiện.",
    toastSaveAssessment: "Đã lưu kết quả tự đánh giá 12 tiêu chí!",
    toastSaveFeedback: "Đã lưu ý kiến đóng góp cho chương trình FCAJ!",
    toastExportJson: "Đã xuất file sao lưu dữ liệu JSON thành công!",
    toastImportSuccess: "Khôi phục dữ liệu thành công!",
    toastImportError: "Lỗi đọc file JSON!",
    toastResetSuccess: "Đã khôi phục dữ liệu chuẩn FCAJ!",
    toastAddTaskSuccess: "Đã thêm công việc vào tuần",
    toastDeleteTask: "Đã xóa công việc.",
    toastLangSwitch: "Đã chuyển sang Tiếng Việt",
    confirmReset: "CẢNH BÁO: Đặt lại toàn bộ dữ liệu mẫu ban đầu theo chuẩn AWS FCAJ?",
    confirmDeleteTask: "Bạn có chắc muốn xóa công việc này?",
    confirmDeleteBlog: "Xóa bài blog này khỏi danh sách?",
    confirmDeleteEvent: "Xóa sự kiện này khỏi báo cáo?",
    pageTitleDoc: "Báo cáo thực tập :: Phan Nhật Uyên - AWS First Cloud AI Journey",

    // Static tooltips, image alt text & modals
    photoFrameTooltip: "Bấm để xem ảnh phóng to độ nét cao",
    photoFitTooltip: "Đổi chế độ: Cắt vừa (Cover) / Hiển thị toàn ảnh không bị vỡ (Contain)",
    photoViewHdTooltip: "Xem ảnh kích thước lớn độ nét cao",
    photoAlt: "Ảnh thẻ sinh viên Phan Nhật Uyên",
    photoHdAlt: "Ảnh cá nhân HD",
    diagModalAlt: "Sơ đồ kiến trúc HD",
    exportModalTitle: "Dữ liệu sao lưu Worklog (JSON)",
    exportModalDesc: "Dưới đây là toàn bộ nội dung 12 tuần bạn đã viết trên trình duyệt. Bạn có thể sao chép đoạn mã này để lưu trữ hoặc gửi vào chat để được cập nhật vĩnh viễn vào mã nguồn GitHub:",
    btnCopyClipboard: "Sao chép vào bộ nhớ tạm",
    toastCopyJsonFull: "✓ Đã sao chép toàn bộ mã JSON vào bộ nhớ tạm!",
    toastCopyJsonShort: "✓ Đã sao chép!",
    reportUnavailable: "Báo cáo chưa khả dụng",
    btnBackToEventsShort: "Quay lại sự kiện",
    wsOnpremCmt1: "# Kiểm tra phân giải DNS nội bộ từ On-Premises",
    wsOnpremCmt2: "# Tải file qua Interface Endpoint riêng tư",
    minutesUnit: "phút",
    viewPostOnCommunity: "Xem bài viết trên cộng đồng AWS Study Group VN"
  },
  
  en: {
    brandName: "Internship Report",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Search report content...",
    reportContentTitle: "REPORT CONTENT",
    externalLinksTitle: "EXTERNAL LINKS",
    
    // Nav items
    navStudentInfo: "Student Information",
    navWorklog: "Worklog",
    navProposal: "Proposal",
    navBlogs: "Blogs Posted",
    navEvents: "Events Participated",
    navWorkshop: "Workshop",
    navSelfAssessment: "Self-Assessment",
    navFeedback: "Sharing and Feedback",
    navSettings: "Export & Print",
    
    // Sidebar profile
    sidebarCompany: "Amazon Web Services (AWS) Vietnam Company Limited",
    sidebarViewProfile: "View detailed profile",
    
    // Header
    btnPrintPdf: "Print / Export PDF",
    btnAddWorklog: "+ Add Worklog",
    greeting: "Hello",
    greetingMorning: "Good morning",
    greetingAfternoon: "Good afternoon",
    greetingEvening: "Good evening",
    modalDayPlaceholder: "e.g. Monday or Mon - Wed",
    modalDescPlaceholder: "Detailed task description or deliverable...",
    modalRefPlaceholder: "https://docs.aws.amazon.com/...",
    
    // Page titles (Header)
    title_thong_tin: "Student Information & Report",
    title_worklog: "1. Worklog (12 Weeks)",
    title_proposal: "2. Internship Proposal",
    title_blogs_posted: "3. Blogs Posted",
    title_blogs_s3_express_one_zone: "3. Technical Blog – Amazon S3 Express One Zone",
    title_blogs_aws_event_driven_architecture: "3. Technical Blog – AWS Event-Driven Architecture",
    title_blogs_aws_ec2_identity_containment: "3. Technical Blog – EC2 Identity Containment",
    title_events: "4. Events Participated",
    title_workshop: "5. Technical Workshop",
    title_self_evaluation: "6. Internship Self-Assessment",
    title_feedback: "7. Sharing and Feedback",
    title_cai_dat: "Settings & Data Management",
    
    // Student info section
    infoNotice: "Important Note: This internship report is structured in accordance with the official First Cloud AI Journey (FCAJ) requirements by Amazon Web Services (AWS) Vietnam. All information below can be freely customized and saved directly.",
    infoCardTitle: "Student Information",
    infoCardSubtitle: "Official internship profile at AWS Vietnam - First Cloud AI Journey",
    officialBadge: "Official • AWS FCAJ",
    photoBoxTitle: "Portrait / Profile Photo",
    photoBoxHint: "Click to upload photo",
    photoChangeText: "Change Photo",
    photoFitCover: "Cover",
    photoFitFull: "Contain",
    photoViewHd: "View HD",
    hdModalTitle: "Personal Photo (High Definition)",
    hdModalDesc: "Photo displayed in full original resolution without blur or pixelation.",
    btnModalClose: "Close",
    btnUploadPhoto: "Upload Photo",
    btnRemovePhoto: "Remove Photo",
    photoFormatNote: "PNG, JPG, WEBP (HD < 10MB)",
    toastPhotoUpdated: "Personal photo updated in high resolution!",
    toastPhotoRemoved: "Personal photo removed!",
    toastPhotoError: "Could not process photo, please try another image file!",
    toastPhotoSizeLimit: "Photo file size must be under 10MB!",
    toastPhotoInvalidType: "Please select a valid image file!",
    toastFitCover: "Switched to Fill/Cover mode!",
    toastFitContain: "Switched to Full/Contain mode (crisp, uncropped)!",
    labelFullName: "Full Name",
    labelStudentId: "Student ID",
    labelPhone: "Phone Number",
    labelEmail: "Email",
    labelUniversity: "University",
    labelMajor: "Major",
    labelClass: "Class",
    labelCompany: "Internship Company",
    labelPosition: "Internship Program",
    labelDuration: "Internship Duration",
    btnSaveInfo: "Save Information Updates",
    
    // TOC
    tocTitle: "Report Content Structure",
    tocSubtitle: "Click each section below to view detailed report:",
    toc1Title: "1. Worklog",
    toc1Desc: "Detailed 12-week worklog (Objectives, Task assignments table, Achievements).",
    toc2Title: "2. Proposal",
    toc2Desc: "Project Proposal: IoT Weather Platform - Real-Time AWS Serverless Monitoring Solution.",
    toc3Title: "3. Blogs Posted",
    toc3Desc: "Technical blog articles published on AWS Study Group (S3 Express One Zone, Event-Driven Architecture, EC2 Identity Containment).",
    zoomDiagramTooltip: "Click to view the architecture diagram in high resolution (HD)",
    btnExpandSnippet: "Read full content ▼",
    btnCollapseSnippet: "Collapse article ▲",
    diagModalTitle: "Architecture Diagram (High Resolution)",
    diagModalDesc: "Architecture comparison between Amazon S3 Standard and Amazon S3 Express One Zone in an AI/ML processing pipeline.",
    btnOpenTab: "Open image in new tab ↗",
    toc4Title: "4. Events Participated",
    toc4Desc: "Technical reports on AWS events attended: Modernization Workshop at Bitexco, Voice AI Meetup, and Enterprise AI on AWS Cloud.",
    toc5Title: "5. Workshop",
    toc5Desc: "Hands-on technical lab: Secure Hybrid Access to S3 using Gateway & Interface VPC Endpoints.",
    toc6Title: "6. Self-Assessment",
    toc6Desc: "12-criteria self-evaluation matrix and identified areas for continuous improvement.",
    toc7Title: "7. Sharing and Feedback",
    toc7Desc: "Evaluation across 6 dimensions: work environment, mentor support, and career growth at FCAJ.",
    
    // 1. Worklog
    worklogSectionTitle: "1. 12-Week Worklog",
    worklogSectionSubtitle: "Record weekly objectives, daily tasks, and accomplishments throughout the internship",
    btnAddTaskThisWeek: "+ Add Task to This Week",
    weekPrefix: "Week",
    weekHeadingPrefix: "Week",
    bootcampSubtitle: "First Cloud AI Journey Bootcamp",
    btnEditWeekMeta: "Edit Objectives & Achievements",
    metaObjectivesTitle: "Week Objectives",
    metaAchievementsTitle: "Week Achievements",
    tasksTableTitle: "Tasks to be carried out this week",
    thDay: "Day",
    thTaskDesc: "Task Description",
    thStartDate: "Start Date",
    thEndDate: "Completion Date",
    thRef: "Reference Material",
    thActions: "Actions",
    viewRefLink: "View Document ↗",
    btnDelete: "Delete",
    btnEdit: "Edit",
    btnClearWeek: "Reset Week",
    worklogToolsLabel: "Quick Tools:",
    btnExportWorklog: "Export JSON",
    btnImportWorklog: "Import JSON",
    modalMetaTitle: "Edit Objectives & Achievements",
    modalMetaObjectivesLabel: "Core Week Objectives",
    modalMetaObjectivesPlaceholder: "Enter core technical/research objectives for this week...",
    modalMetaAchievementsLabel: "Week Achievements (one per line, starting with -)",
    modalMetaAchievementsPlaceholder: "- Mastered concepts...\n- Completed lab exercises...",
    btnModalSaveMeta: "Save Objectives & Achievements",
    modalEditTaskTitle: "Edit Task",
    btnUpdateTask: "Update Task",
    toastUpdateTaskSuccess: "✓ Task updated successfully!",
    toastSaveMetaSuccess: "✓ Objectives & achievements saved successfully!",
    toastResetWeekSuccess: "✓ Week content reset to blank successfully!",
    confirmResetWeek: "Are you sure you want to clear all tasks and objectives for this week to write from scratch?",
    toastExportSuccess: "✓ Worklog JSON backup downloaded successfully!",
    toastImportSuccess: "✓ Worklog data imported successfully!",
    emptyObjectivesMsg: "No objectives set yet. Click \"Edit Objectives & Achievements\" to add.",
    emptyAchievementsMsg: "No achievements recorded yet. Click \"Edit Objectives & Achievements\" to add.",
    emptyTasksMsg: "No tasks recorded for this week. Click \"+ Add Task to This Week\" to add tasks!",
    
    // 2. Proposal
    proposalSectionTitle: "2. Internship Proposal",
    proposalSectionSubtitle: "A Unified AWS Serverless Solution for Real-Time Weather Monitoring",
    btnSaveProposal: "Save Proposal",
    proposalNotice: "Research Topic: IoT Weather Platform for Lab Research - A Unified AWS Serverless Real-Time Monitoring Solution utilizing AWS IoT Core, Lambda, S3 Data Lake, AWS Glue, and Amplify Next.js.",
    prop1Heading: "1. Executive Summary",
    prop2Heading: "2. Problem Statement & Solution",
    propProblemLabel: "What’s the Problem?",
    propSolutionLabel: "The Solution & Benefits",
    prop3Heading: "3. Solution Architecture & AWS Services Used",
    prop4Heading: "4. Monthly Infrastructure Budget Estimation",
    
    // 3. Blogs
    blogsSectionTitle: "3. Blogs Posted",
    blogsSectionSubtitle: "Technical articles shared with the AWS Study Group community",
    btnAddBlog: "+ Write New Blog",
    readArticleLink: "Read Article ↗",
    publishedDateLabel: "Published:",
    
    // 4. Events
    eventsSectionTitle: "4. Events Participated",
    eventsSectionSubtitle: "Attendance at in-depth AWS technology conferences and workshops",
    btnAddEvent: "+ Add New Event",
    eventBadge: "Tech Conference",
    eventRoleLabel: "Role:",
    eventSpeakersLabel: "Speakers:",
    eventHighlightsLabel: "Key Highlights & Takeaways:",
    btnDeleteEvent: "Delete Event",
    btnViewFullReport: "View Full Report →",
    btnBackToEvents: "← Back to Events",
    eventsBreadcrumb: "4. Events Participated",
    eventReportBadge: "Event Harvest Report",
    eventReportSessionTag: "Session 1 • Voice AI & Contact Center",
    toastEventReportLoaded: "Loaded Session 1 Voice AI Report",
    
    // 5. Workshop
    workshopSectionTitle: "5. Workshop: Secure Hybrid Access to S3 using VPC Endpoints",
    workshopSectionSubtitle: "Hands-on technical lab covering AWS PrivateLink, Gateway & Interface Endpoints",
    btnPrintWorkshop: "Print Workshop Content",
    wsTabOverview: "5.1 Overview",
    wsTabPrereq: "5.2 Prerequisites",
    wsTabVpc: "5.3 Access S3 from VPC",
    wsTabOnPrem: "5.4 Access from On-Premises",
    wsTabPolicy: "5.5 Endpoint Policies",
    wsTabCleanup: "5.6 Clean Up",
    
    wsOverviewTitle: "5.1 Workshop Overview & Architecture",
    wsOverviewDesc: "AWS PrivateLink provides private connectivity to AWS services from VPCs and on-premises networks without exposing your traffic to the public internet.",
    wsGatewayCardTitle: "Gateway VPC Endpoint",
    wsGatewayCardDesc: "Used for resources inside your VPC to reach Amazon S3 and Amazon DynamoDB. Routes traffic using Route Tables without hourly charges.",
    wsInterfaceCardTitle: "Interface VPC Endpoint",
    wsInterfaceCardDesc: "Allocates an Elastic Network Interface (ENI) with private IP addresses in your subnet. Supports access from both VPC and On-premises networks via AWS Site-to-Site VPN or Direct Connect.",
    
    wsPrereqTitle: "5.2 Prerequisites & IAM Permissions",
    wsPrereqDesc: "Minimum IAM permission policy required to deploy CloudFormation and Transit Gateway resources:",
    
    wsVpcTitle: "5.3 Access S3 from VPC (Gateway Endpoint)",
    wsVpcDesc: "Procedure to create a Gateway Endpoint and test private connectivity:",
    wsVpcStep1: "Navigate to VPC Console > Endpoints > Click Create Endpoint.",
    wsVpcStep2: "Select Service: com.amazonaws.us-east-1.s3 with Gateway type.",
    wsVpcStep3: "Associate the Cloud VPC Route Table to automatically inject S3 prefix routes.",
    wsVpcStep4: "Verify connectivity from your EC2 instance:",
    
    wsOnpremTitle: "5.4 Access S3 from On-Premises (Interface Endpoint)",
    wsOnpremDesc: "Simulate On-Premises connectivity via strongSwan VPN and configure Route 53 Resolver Rules:",
    
    wsPolicyTitle: "5.5 VPC Endpoint Policies (Access Control)",
    wsPolicyDesc: "Endpoint policy restricting access exclusively to yourbucketname-2:",
    
    wsCleanupTitle: "5.6 Clean Up (Resource Decommissioning)",
    wsCleanupStep1: "Delete Route 53 Hosted Zone s3.us-east-1.amazonaws.com.",
    wsCleanupStep2: "Disassociate Route 53 Resolver Rule myS3Rule from On-prem VPC.",
    wsCleanupStep3: "Delete the 2 CloudFormation Stacks: PLOnpremSetup and PLCloudSetup.",
    wsCleanupStep4: "Empty and Delete all S3 buckets provisioned in this lab.",
    
    // 6. Self-assessment
    selfSectionTitle: "6. Internship Self-Assessment",
    selfSectionSubtitle: "12-criteria competence evaluation of student Phan Nhat Uyen",
    btnSaveAssessment: "Save Assessment",
    assessNarrativeLabel: "Summary of Internship Practice and Conduct",
    criteriaTableTitle: "AWS FCAJ Standard 12-Criteria Evaluation Matrix",
    thCriteriaNo: "No.",
    thCriteriaName: "Evaluation Criteria",
    thCriteriaDesc: "Detailed Description",
    thGood: "Good",
    thFair: "Fair",
    thAvg: "Average",
    needsImprovementLabel: "Needs Improvement",
    
    // 7. Feedback
    feedbackSectionTitle: "7. Sharing and Feedback",
    feedbackSectionSubtitle: "Constructive suggestions for the First Cloud AI Journey program",
    btnSaveFeedback: "Save Feedback",
    fb1Label: "1. Working Environment",
    fb2Label: "2. Support from Mentor / Team Admin",
    fb3Label: "3. Relevance to Academic Major",
    fb4Label: "4. Learning & Skill Opportunities",
    fb5Label: "5. Company Culture & Team Spirit",
    fb6Label: "6. Policies / Benefits",
    fbSuggestionsLabel: "Suggestions & Future Expectations",
    
    // Settings
    settingsSectionTitle: "Export Data & Print Report",
    settingsSectionSubtitle: "Export entire internship report to JSON file or print to PDF",
    settingsCardTitle: "Export Data & Print Report",
    settingsCardDesc: "All internship report records (12 weeks worklog, proposal, technical blogs, events, workshop, evaluations) are finalized. You can download the JSON backup or print the report:",
    btnExportJson: "Download Backup File (worklog-fcaj-backup.json)",
    btnPrintReport: "Print Report (PDF)",
    btnImportJson: "Restore from JSON File",
    btnResetData: "Reset to Standard FCAJ Report",
    
    // Modal
    modalTitle: "+ Add Task to Worklog",
    modalWeekSelectLabel: "Select Week",
    modalDayLabel: "Day of Week",
    modalTaskDescLabel: "Task Description",
    modalStartLabel: "Start Date",
    modalEndLabel: "Completion Date",
    modalRefLabel: "Reference Material (URL or note)",
    btnModalCancel: "Cancel",
    btnModalSave: "Save Task",
    
    // Alerts and prompts
    toastSaveInfo: "Student information saved successfully!",
    toastSaveProposal: "Proposal saved successfully!",
    toastAddBlog: "New blog post added!",
    toastDeleteBlog: "Blog post deleted.",
    toastAddEvent: "New event added!",
    toastDeleteEvent: "Event deleted.",
    toastSaveAssessment: "12-criteria self-assessment saved!",
    toastSaveFeedback: "Feedback saved for FCAJ program!",
    toastExportJson: "JSON backup file exported successfully!",
    toastImportSuccess: "Data restored successfully!",
    toastImportError: "Error reading JSON file!",
    toastResetSuccess: "Standard FCAJ report data restored!",
    toastAddTaskSuccess: "Task added to week",
    toastDeleteTask: "Task deleted.",
    toastLangSwitch: "Switched to English",
    confirmReset: "WARNING: Reset all data to standard AWS FCAJ template?",
    confirmDeleteTask: "Are you sure you want to delete this task?",
    confirmDeleteBlog: "Delete this blog from the list?",
    confirmDeleteEvent: "Delete this event from the report?",
    pageTitleDoc: "Internship Report :: Phan Nhat Uyen - AWS First Cloud AI Journey",

    // Static tooltips, image alt text & modals
    photoFrameTooltip: "Click to view the photo in high resolution",
    photoFitTooltip: "Switch mode: Fill (Cover) / Show the whole photo without cropping (Contain)",
    photoViewHdTooltip: "View the photo in full size, high resolution",
    photoAlt: "Student ID photo of Phan Nhat Uyen",
    photoHdAlt: "Personal photo in HD",
    diagModalAlt: "Architecture diagram in HD",
    exportModalTitle: "Worklog Backup Data (JSON)",
    exportModalDesc: "Below is the full 12-week content you wrote in the browser. You can copy this code to keep a backup or send it in chat to have it permanently updated in the GitHub source code:",
    btnCopyClipboard: "Copy to clipboard",
    toastCopyJsonFull: "✓ Copied the full JSON code to the clipboard!",
    toastCopyJsonShort: "✓ Copied!",
    reportUnavailable: "Report not available",
    btnBackToEventsShort: "Back to events",
    wsOnpremCmt1: "# Check internal DNS resolution from On-Premises",
    wsOnpremCmt2: "# Upload a file through the private Interface Endpoint",
    minutesUnit: "minutes",
    viewPostOnCommunity: "View post on AWS Study Group VN community"
  }
};

// ==========================================
// 2. DEFAULT BILINGUAL REPORT DATA
// (CHỈNH SỬA THÔNG TIN SINH VIÊN TRỰC TIẾP TẠI ĐÂY TỪ CODE)
// ==========================================
const DEFAULT_BILINGUAL_DATA = {
  studentInfo: {
    fullName: "Phan Nhật Uyên",
    studentId: "SE196682",
    avatar: "assets/images/profile.jpg",
    phone: "0394728982",
    email: "nhatuien218@gmail.com",
    vi: {
      university: "Trường Đại học FPT",
      major: "An toàn thông tin",
      company: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "Từ 14/09/2026 đến 14/12/2026"
    },
    en: {
      university: "FPT University",
      major: "Information Assurance",
      company: "Amazon Web Services (AWS) Vietnam Company Limited",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "From 14/09/2026 to 14/12/2026"
    }
  },
  currentWeek: 5,
  worklogs: Array.from({ length: 12 }, (_, i) => {
    const weekNum = i + 1;
    if (weekNum === 1) {
      return {
        weekNum: 1,
        vi: {
          topic: "AWS Fundamentals & IAM (15/09/2026 – 20/09/2026)",
          objectives: "Làm quen với AWS và tìm hiểu dịch vụ quản lý quyền truy cập IAM.",
          achievements: "- Hiểu tổng quan về AWS và hạ tầng AWS.\n- Biết cách quản lý người dùng và quyền truy cập bằng IAM.\n- Hiểu IAM Roles, Policies và Least Privilege.",
          tasks: [
            {
              day: "Thứ Ba",
              desc: "Main Task: AWS Fundamentals.\nDetailed Activities: Tìm hiểu tổng quan AWS, AWS Console, Regions và Availability Zones.",
              start: "2026-09-15", end: "2026-09-15",
              ref: "[Tổng quan hạ tầng AWS](https://aws.amazon.com/about-aws/global-infrastructure/)"
            },
            {
              day: "Thứ Năm",
              desc: "Main Task: IAM Users & Groups.\nDetailed Activities: Tìm hiểu IAM User, User Groups và cách quản lý quyền truy cập.",
              start: "2026-09-17", end: "2026-09-17",
              ref: "[Quản lý IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)"
            },
            {
              day: "Chủ Nhật",
              desc: "Main Task: IAM Roles & Policies.\nDetailed Activities: Tìm hiểu IAM Roles, Policies và nguyên tắc Least Privilege.",
              start: "2026-09-20", end: "2026-09-20",
              ref: "[IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)"
            }
          ]
        },
        en: {
          topic: "AWS Fundamentals & IAM (15/09/2026 – 20/09/2026)",
          objectives: "Get familiar with AWS and learn about the IAM access management service.",
          achievements: "- Understood the overview of AWS and AWS infrastructure.\n- Learned how to manage users and access permissions using IAM.\n- Understood IAM Roles, Policies and Least Privilege.",
          tasks: [
            {
              day: "Tuesday",
              desc: "Main Task: AWS Fundamentals.\nDetailed Activities: Learn about AWS overview, AWS Console, Regions and Availability Zones.",
              start: "2026-09-15", end: "2026-09-15",
              ref: "[AWS Global Infrastructure Overview](https://aws.amazon.com/about-aws/global-infrastructure/)"
            },
            {
              day: "Thursday",
              desc: "Main Task: IAM Users & Groups.\nDetailed Activities: Learn about IAM Users, User Groups and access management.",
              start: "2026-09-17", end: "2026-09-17",
              ref: "[Managing IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)"
            },
            {
              day: "Sunday",
              desc: "Main Task: IAM Roles & Policies.\nDetailed Activities: Learn about IAM Roles, Policies and the Least Privilege principle.",
              start: "2026-09-20", end: "2026-09-20",
              ref: "[IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)"
            }
          ]
        }
      };
    } else if (weekNum === 2) {
      return {
        weekNum: 2,
        vi: {
          topic: "Amazon EC2 (21/09/2026 – 25/09/2026)",
          objectives: "Tìm hiểu dịch vụ máy chủ ảo Amazon EC2 và cách quản lý Instance.",
          achievements: "- Hiểu cách hoạt động của Amazon EC2.\n- Biết cách khởi tạo và cấu hình EC2 Instance.\n- Hiểu vai trò của Key Pair và Security Group.",
          tasks: [
            {
              day: "Thứ Hai",
              desc: "Main Task: EC2 Fundamentals.\nDetailed Activities: Tìm hiểu Amazon EC2, các loại Instance và cách khởi tạo máy chủ ảo.",
              start: "2026-09-21", end: "2026-09-21",
              ref: "[Bắt đầu với EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)"
            },
            {
              day: "Thứ Ba",
              desc: "Main Task: EC2 Configuration.\nDetailed Activities: Tìm hiểu cách cấu hình EC2, Key Pair và Security Group.",
              start: "2026-09-22", end: "2026-09-22",
              ref: "[EC2 Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)"
            },
            {
              day: "Thứ Sáu",
              desc: "Main Task: EC2 Instance Management.\nDetailed Activities: Tìm hiểu cách kết nối, khởi động, dừng và quản lý EC2 Instance.",
              start: "2026-09-25", end: "2026-09-25",
              ref: "[EC2 Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)"
            }
          ]
        },
        en: {
          topic: "Amazon EC2 (21/09/2026 – 25/09/2026)",
          objectives: "Learn about the Amazon EC2 virtual server service and Instance management.",
          achievements: "- Understood how Amazon EC2 works.\n- Learned how to launch and configure EC2 Instances.\n- Understood the role of Key Pairs and Security Groups.",
          tasks: [
            {
              day: "Monday",
              desc: "Main Task: EC2 Fundamentals.\nDetailed Activities: Learn about Amazon EC2, Instance types and how to launch virtual servers.",
              start: "2026-09-21", end: "2026-09-21",
              ref: "[Getting Started with EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)"
            },
            {
              day: "Tuesday",
              desc: "Main Task: EC2 Configuration.\nDetailed Activities: Learn how to configure EC2, Key Pairs and Security Groups.",
              start: "2026-09-22", end: "2026-09-22",
              ref: "[EC2 Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)"
            },
            {
              day: "Friday",
              desc: "Main Task: EC2 Instance Management.\nDetailed Activities: Learn how to connect, start, stop and manage EC2 Instances.",
              start: "2026-09-25", end: "2026-09-25",
              ref: "[EC2 Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html)"
            }
          ]
        }
      };
    } else if (weekNum === 3) {
      return {
        weekNum: 3,
        vi: {
          topic: "Amazon VPC (28/09/2026 – 01/10/2026)",
          objectives: "Tìm hiểu cách xây dựng và quản lý mạng riêng trên AWS.",
          achievements: "- Hiểu cấu trúc và chức năng của VPC.\n- Phân biệt Public Subnet và Private Subnet.\n- Hiểu vai trò của Route Table, Internet Gateway và Security Group.",
          tasks: [
            {
              day: "Thứ Hai",
              desc: "Main Task: VPC Fundamentals.\nDetailed Activities: Tìm hiểu VPC, CIDR và cách xây dựng mạng riêng trên AWS.",
              start: "2026-09-28", end: "2026-09-28",
              ref: "[Tổng quan Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)"
            },
            {
              day: "Thứ Ba",
              desc: "Main Task: Subnets & Route Tables.\nDetailed Activities: Tìm hiểu Public Subnet, Private Subnet và cách định tuyến bằng Route Table.",
              start: "2026-09-29", end: "2026-09-29",
              ref: "[Cấu hình Subnet](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)"
            },
            {
              day: "Thứ Năm",
              desc: "Main Task: VPC Connectivity & Security.\nDetailed Activities: Tìm hiểu Internet Gateway và Security Group để kết nối, kiểm soát lưu lượng mạng.",
              start: "2026-10-01", end: "2026-10-01",
              ref: "[Internet Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)"
            }
          ]
        },
        en: {
          topic: "Amazon VPC (28/09/2026 – 01/10/2026)",
          objectives: "Learn how to build and manage a private network on AWS.",
          achievements: "- Understood the structure and functionality of VPC.\n- Distinguished between Public Subnet and Private Subnet.\n- Understood the role of Route Tables, Internet Gateway and Security Groups.",
          tasks: [
            {
              day: "Monday",
              desc: "Main Task: VPC Fundamentals.\nDetailed Activities: Learn about VPC, CIDR and how to build a private network on AWS.",
              start: "2026-09-28", end: "2026-09-28",
              ref: "[Amazon VPC Overview](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)"
            },
            {
              day: "Tuesday",
              desc: "Main Task: Subnets & Route Tables.\nDetailed Activities: Learn about Public Subnet, Private Subnet and routing with Route Tables.",
              start: "2026-09-29", end: "2026-09-29",
              ref: "[Subnet Configuration](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)"
            },
            {
              day: "Thursday",
              desc: "Main Task: VPC Connectivity & Security.\nDetailed Activities: Learn about Internet Gateway and Security Groups for connectivity and traffic control.",
              start: "2026-10-01", end: "2026-10-01",
              ref: "[Internet Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)"
            }
          ]
        }
      };
    } else if (weekNum === 4) {
      return {
        weekNum: 4,
        vi: {
          topic: "AWS Lambda, S3, Cloud9, RDS & DynamoDB (06/10/2026 – 09/10/2026)",
          objectives: "Tìm hiểu các dịch vụ AWS phục vụ xử lý dữ liệu, lưu trữ và quản lý cơ sở dữ liệu.",
          achievements: "- Hiểu cơ bản về AWS Lambda và mô hình Serverless.\n- Biết cách lưu trữ dữ liệu trên Amazon S3.\n- Làm quen với môi trường AWS Cloud9.\n- Phân biệt cơ sở dữ liệu quan hệ RDS và NoSQL DynamoDB.",
          tasks: [
            {
              day: "Thứ Ba",
              desc: "Main Task: AWS Lambda.\nDetailed Activities: Tìm hiểu Lambda Function và cách thực thi mã nguồn theo mô hình Serverless.",
              start: "2026-10-06", end: "2026-10-06",
              ref: "[Bắt đầu với AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)"
            },
            {
              day: "Thứ Năm",
              desc: "Main Task: Amazon S3 & Cloud9.\nDetailed Activities: Tìm hiểu Bucket, Object trong S3 và môi trường phát triển AWS Cloud9.",
              start: "2026-10-08", end: "2026-10-08",
              ref: "[Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) / [AWS Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/welcome.html)"
            },
            {
              day: "Thứ Sáu",
              desc: "Main Task: Amazon RDS & DynamoDB.\nDetailed Activities: Tìm hiểu cơ sở dữ liệu quan hệ RDS và cơ sở dữ liệu NoSQL DynamoDB.",
              start: "2026-10-09", end: "2026-10-09",
              ref: "[Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html) / [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)"
            }
          ]
        },
        en: {
          topic: "AWS Lambda, S3, Cloud9, RDS & DynamoDB (06/10/2026 – 09/10/2026)",
          objectives: "Learn about AWS services for data processing, storage and database management.",
          achievements: "- Understood the basics of AWS Lambda and the Serverless model.\n- Learned how to store data on Amazon S3.\n- Got familiar with the AWS Cloud9 development environment.\n- Distinguished between relational database RDS and NoSQL DynamoDB.",
          tasks: [
            {
              day: "Tuesday",
              desc: "Main Task: AWS Lambda.\nDetailed Activities: Learn about Lambda Functions and how to execute code using the Serverless model.",
              start: "2026-10-06", end: "2026-10-06",
              ref: "[Getting Started with AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)"
            },
            {
              day: "Thursday",
              desc: "Main Task: Amazon S3 & Cloud9.\nDetailed Activities: Learn about Buckets, Objects in S3 and the AWS Cloud9 development environment.",
              start: "2026-10-08", end: "2026-10-08",
              ref: "[Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) / [AWS Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/welcome.html)"
            },
            {
              day: "Friday",
              desc: "Main Task: Amazon RDS & DynamoDB.\nDetailed Activities: Learn about relational database RDS and NoSQL database DynamoDB.",
              start: "2026-10-09", end: "2026-10-09",
              ref: "[Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html) / [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)"
            }
          ]
        }
      };
    } else if (weekNum === 5) {
      return {
        weekNum: 5,
        vi: {
          topic: "Week 5 – Project Ideation & Preparation",
          objectives: "Thảo luận, lựa chọn chủ đề và xây dựng ý tưởng ban đầu cho dự án Nutrition E-Commerce.",
          achievements: "- Thống nhất lựa chọn chủ đề Nutrition E-Commerce.\n- Xác định mục tiêu và các chức năng dự kiến của dự án.\n- Tìm hiểu các website bán thực phẩm Eat Clean và nguồn dữ liệu dinh dưỡng bên thứ ba.",
          tasks: [
            {
              day: "Thứ Ba",
              desc: "Main Task: Project Topic Discussion\nDetailed Activities: Thảo luận nhóm, tìm kiếm và đề xuất ý tưởng dự án. Tìm hiểu mô hình kinh doanh thực phẩm Eat Clean, các sản phẩm và cách tổ chức danh mục trên website thương mại điện tử.",
              start: "2026-10-13",
              end: "2026-10-13",
              ref: "[HelloFresh](https://www.hellofresh.com/)\n[Go Fit Mart](https://gofitmart.vn/)"
            },
            {
              day: "Thứ Tư",
              desc: "Main Task: Project Ideation & Preparation\nDetailed Activities: Thống nhất chủ đề Nutrition E-Commerce, xác định mục tiêu và các chức năng dự kiến. Tìm hiểu nguồn dữ liệu bên thứ ba để tra cứu thông tin dinh dưỡng như calo, protein, carbohydrate và chất béo.",
              start: "2026-10-14",
              end: "2026-10-14",
              ref: "[FoodData Central](https://fdc.nal.usda.gov/)\n[Open Food Facts](https://world.openfoodfacts.org/)\n[MyFitnessPal](https://www.myfitnesspal.com/)"
            }
          ]
        },
        en: {
          topic: "Week 5 – Project Ideation & Preparation",
          objectives: "Discuss, select the project topic, and build the initial ideation for the Nutrition E-Commerce project.",
          achievements: "- Agreed on the Nutrition E-Commerce project topic.\n- Defined project goals and expected features of the project.\n- Researched Eat Clean food e-commerce websites and third-party nutritional data sources.",
          tasks: [
            {
              day: "Tuesday",
              desc: "Main Task: Project Topic Discussion\nDetailed Activities: Group discussion, searching and proposing project ideas. Research Eat Clean food business models, products, and catalog organization on e-commerce websites.",
              start: "2026-10-13",
              end: "2026-10-13",
              ref: "[HelloFresh](https://www.hellofresh.com/)\n[Go Fit Mart](https://gofitmart.vn/)"
            },
            {
              day: "Wednesday",
              desc: "Main Task: Project Ideation & Preparation\nDetailed Activities: Finalize the Nutrition E-Commerce topic, define project objectives and planned features. Research third-party nutritional data sources to look up calories, protein, carbohydrates, and fat.",
              start: "2026-10-14",
              end: "2026-10-14",
              ref: "[FoodData Central](https://fdc.nal.usda.gov/)\n[Open Food Facts](https://world.openfoodfacts.org/)\n[MyFitnessPal](https://www.myfitnesspal.com/)"
            }
          ]
        }
      };
    } else if (weekNum === 6) {
      return {
        weekNum: 6,
        vi: {
          topic: "AWS Lambda & Điện toán Serverless (19/10/2026 – 23/10/2026)",
          objectives: "- Hiểu Điện toán Serverless và AWS Lambda.\n- Tìm hiểu Lambda Function, Trigger, Event và Execution Role.\n- Thực hành tạo và triển khai Lambda Function.\n- Tìm hiểu cách tích hợp Lambda với Amazon S3.\n- Tìm hiểu cách giám sát cơ bản bằng CloudWatch.",
          achievements: "- Nắm được kiến thức nền tảng về Điện toán Serverless.\n- Tìm hiểu Lambda Function, Runtime, Handler và Trigger.\n- Thực hành tạo và kiểm thử Lambda Function bằng Python.\n- Tìm hiểu S3 event notification và việc tích hợp với Lambda.\n- Biết cách giám sát quá trình thực thi function bằng CloudWatch Logs.\n- Hiểu các luồng xử lý cơ bản của một ứng dụng serverless.",
          tasks: [
            {
              day: "Thứ 2",
              desc: "- Học kiến thức nền tảng về Điện toán Serverless.\n- Tìm hiểu AWS Lambda và kiến trúc của nó.\n- Tìm hiểu Function, Runtime và Handler.",
              start: "2026-10-19",
              end: "2026-10-19",
              ref: "[AWS Lambda – Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)"
            },
            {
              day: "Thứ 3",
              desc: "- Tạo và cấu hình Lambda Function.\n- Viết code Python cơ bản.\n- Kiểm thử function bằng các sample event.",
              start: "2026-10-20",
              end: "2026-10-20",
              ref: "[AWS Lambda – Getting Started](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)"
            },
            {
              day: "Thứ 4",
              desc: "- Tìm hiểu Lambda Trigger và Event Source.\n- Tích hợp Lambda với Amazon S3.\n- Thực hành xử lý các file được upload.",
              start: "2026-10-21",
              end: "2026-10-21",
              ref: "[AWS Lambda – Services & Triggers](https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html)"
            },
            {
              day: "Thứ 5",
              desc: "- Giám sát Lambda bằng CloudWatch.\n- Xem log và metric của quá trình thực thi.\n- Thực hành xử lý các lỗi cơ bản.",
              start: "2026-10-22",
              end: "2026-10-22",
              ref: "[AWS Lambda – Monitoring & CloudWatch](https://docs.aws.amazon.com/lambda/latest/dg/lambda-monitoring.html)"
            },
            {
              day: "Thứ 6",
              desc: "- Kiểm thử luồng xử lý serverless.\n- Rà soát quyền và cấu hình.\n- Ghi lại tài liệu kết quả thực hành.",
              start: "2026-10-23",
              end: "2026-10-23",
              ref: "[AWS Lambda – Execution Roles & IAM](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html)"
            }
          ]
        },
        en: {
          topic: "AWS Lambda & Serverless Computing (19/10/2026 – 23/10/2026)",
          objectives: "- Understand Serverless Computing and AWS Lambda.\n- Learn Lambda Functions, Triggers, Events, and Execution Roles.\n- Practice creating and deploying Lambda Functions.\n- Explore integration between Lambda and Amazon S3.\n- Learn basic monitoring using CloudWatch.",
          achievements: "- Understood the fundamentals of Serverless Computing.\n- Learned Lambda Functions, Runtimes, Handlers, and Triggers.\n- Practiced creating and testing Lambda Functions using Python.\n- Explored S3 event notifications and Lambda integration.\n- Learned to monitor function execution using CloudWatch Logs.\n- Understood basic serverless application workflows.",
          tasks: [
            {
              day: "Monday",
              desc: "- Learn Serverless Computing fundamentals.\n- Explore AWS Lambda and its architecture.\n- Understand Functions, Runtimes, and Handlers.",
              start: "2026-10-19",
              end: "2026-10-19",
              ref: "[AWS Lambda – Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)"
            },
            {
              day: "Tuesday",
              desc: "- Create and configure Lambda Functions.\n- Write basic Python code.\n- Test functions using sample events.",
              start: "2026-10-20",
              end: "2026-10-20",
              ref: "[AWS Lambda – Getting Started](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html)"
            },
            {
              day: "Wednesday",
              desc: "- Learn Lambda Triggers and Event Sources.\n- Integrate Lambda with Amazon S3.\n- Practice processing uploaded files.",
              start: "2026-10-21",
              end: "2026-10-21",
              ref: "[AWS Lambda – Services & Triggers](https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html)"
            },
            {
              day: "Thursday",
              desc: "- Monitor Lambda using CloudWatch.\n- Review execution logs and metrics.\n- Practice troubleshooting basic errors.",
              start: "2026-10-22",
              end: "2026-10-22",
              ref: "[AWS Lambda – Monitoring & CloudWatch](https://docs.aws.amazon.com/lambda/latest/dg/lambda-monitoring.html)"
            },
            {
              day: "Friday",
              desc: "- Test the serverless workflow.\n- Review permissions and configurations.\n- Document the practical results.",
              start: "2026-10-23",
              end: "2026-10-23",
              ref: "[AWS Lambda – Execution Roles & IAM](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html)"
            }
          ]
        }
      };
    } else if (weekNum === 7) {
      return {
        weekNum: 7,
        vi: {
          topic: "AWS CloudFormation & Infrastructure as Code (26/10/2026 – 30/10/2026)",
          objectives: "- Hiểu Infrastructure as Code (IaC).\n- Tìm hiểu CloudFormation Template và Stack.\n- Thực hành viết template YAML và JSON.\n- Triển khai và quản lý tài nguyên AWS bằng CloudFormation.\n- Tìm hiểu AWS Systems Manager.",
          achievements: "- Nắm được kiến thức nền tảng về Infrastructure as Code.\n- Tìm hiểu CloudFormation Template, Stack và Resource.\n- Thực hành viết các template YAML cơ bản.\n- Triển khai tài nguyên AWS bằng CloudFormation.\n- Biết cách cập nhật và xóa CloudFormation Stack.\n- Tìm hiểu AWS Systems Manager và Session Manager.",
          tasks: [
            {
              day: "Thứ 2",
              desc: "- Tìm hiểu các khái niệm Infrastructure as Code.\n- Khám phá AWS CloudFormation.\n- Tìm hiểu Template và Stack.",
              start: "2026-10-26",
              end: "2026-10-26",
              ref: "[AWS DevOps – Infrastructure as Code](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html)"
            },
            {
              day: "Thứ 3",
              desc: "- Tìm hiểu cấu trúc template YAML và JSON.\n- Tìm hiểu Parameters, Resources và Outputs.\n- Xem các template mẫu.",
              start: "2026-10-27",
              end: "2026-10-27",
              ref: "[AWS CloudFormation – Template Formats](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-formats.html)"
            },
            {
              day: "Thứ 4",
              desc: "- Tạo một CloudFormation Template cơ bản.\n- Khai báo tài nguyên EC2 và Security Group.\n- Triển khai và kiểm tra một Stack.",
              start: "2026-10-28",
              end: "2026-10-28",
              ref: "[AWS CloudFormation – EC2 Resource Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-ec2-instance.html)"
            },
            {
              day: "Thứ 5",
              desc: "- Thực hành cập nhật CloudFormation Stack.\n- Tìm hiểu rollback và xử lý lỗi.\n- Quản lý và xóa các tài nguyên đã triển khai.",
              start: "2026-10-29",
              end: "2026-10-29",
              ref: "[AWS CloudFormation – Updating Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-direct.html)"
            },
            {
              day: "Thứ 6",
              desc: "- Khám phá AWS Systems Manager.\n- Tìm hiểu Parameter Store và Session Manager.\n- Rà soát các quy trình quản lý hạ tầng.",
              start: "2026-10-30",
              end: "2026-10-30",
              ref: "[AWS Systems Manager – Overview](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html)"
            }
          ]
        },
        en: {
          topic: "AWS CloudFormation & Infrastructure as Code (26/10/2026 – 30/10/2026)",
          objectives: "- Understand Infrastructure as Code (IaC).\n- Learn AWS CloudFormation Templates and Stacks.\n- Practice writing YAML and JSON templates.\n- Deploy and manage AWS resources using CloudFormation.\n- Explore AWS Systems Manager.",
          achievements: "- Understood the fundamentals of Infrastructure as Code.\n- Learned CloudFormation Templates, Stacks, and Resources.\n- Practiced writing basic YAML templates.\n- Deployed AWS resources using CloudFormation.\n- Learned to update and delete CloudFormation Stacks.\n- Explored AWS Systems Manager and Session Manager.",
          tasks: [
            {
              day: "Monday",
              desc: "- Learn Infrastructure as Code concepts.\n- Explore AWS CloudFormation.\n- Understand Templates and Stacks.",
              start: "2026-10-26",
              end: "2026-10-26",
              ref: "[AWS DevOps – Infrastructure as Code](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html)"
            },
            {
              day: "Tuesday",
              desc: "- Learn YAML and JSON template structures.\n- Understand Parameters, Resources, and Outputs.\n- Review sample templates.",
              start: "2026-10-27",
              end: "2026-10-27",
              ref: "[AWS CloudFormation – Template Formats](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-formats.html)"
            },
            {
              day: "Wednesday",
              desc: "- Create a basic CloudFormation Template.\n- Define EC2 and Security Group resources.\n- Deploy and verify a Stack.",
              start: "2026-10-28",
              end: "2026-10-28",
              ref: "[AWS CloudFormation – EC2 Resource Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-ec2-instance.html)"
            },
            {
              day: "Thursday",
              desc: "- Practice updating CloudFormation Stacks.\n- Learn rollback and error handling.\n- Manage and delete deployed resources.",
              start: "2026-10-29",
              end: "2026-10-29",
              ref: "[AWS CloudFormation – Updating Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-direct.html)"
            },
            {
              day: "Friday",
              desc: "- Explore AWS Systems Manager.\n- Learn Parameter Store and Session Manager.\n- Review infrastructure management workflows.",
              start: "2026-10-30",
              end: "2026-10-30",
              ref: "[AWS Systems Manager – Overview](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html)"
            }
          ]
        }
      };
    } else if (weekNum === 8) {
      return {
        weekNum: 8,
        vi: {
          topic: "Các dịch vụ Migration của AWS (02/11/2026 – 06/11/2026)",
          objectives: "- Hiểu các khái niệm và chiến lược chuyển đổi lên cloud (migration).\n- Tìm hiểu AWS VM Import/Export.\n- Tìm hiểu AWS Database Migration Service (DMS).\n- Hiểu việc chuyển đổi schema cơ sở dữ liệu.\n- Tìm hiểu AWS Elastic Disaster Recovery.",
          achievements: "- Nắm được các chiến lược migration lên cloud cơ bản.\n- Tìm hiểu quy trình VM Import/Export.\n- Tìm hiểu DMS Replication Instance, Endpoint và Task.\n- Hiểu full load và ongoing data replication.\n- Hiểu mục đích của AWS Schema Conversion Tool.\n- Hiểu các khái niệm cơ bản về disaster recovery, RPO và RTO.",
          tasks: [
            {
              day: "Thứ 2",
              desc: "- Học kiến thức nền tảng về migration lên cloud.\n- Tìm hiểu các chiến lược migration.\n- Tìm hiểu các dịch vụ migration của AWS.",
              start: "2026-11-02",
              end: "2026-11-02",
              ref: "[AWS Migration – 7Rs Migration Strategies](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html)"
            },
            {
              day: "Thứ 3",
              desc: "- Khám phá AWS VM Import/Export.\n- Tìm hiểu cách migrate image máy ảo.\n- Rà soát các yêu cầu khi migration.",
              start: "2026-11-03",
              end: "2026-11-03",
              ref: "[AWS VM Import/Export – User Guide](https://docs.aws.amazon.com/vm-import/latest/userguide/what-is-vmimport.html)"
            },
            {
              day: "Thứ 4",
              desc: "- Tìm hiểu AWS Database Migration Service.\n- Tìm hiểu Source Endpoint và Target Endpoint.\n- Tìm hiểu Replication Task.",
              start: "2026-11-04",
              end: "2026-11-04",
              ref: "[AWS Database Migration Service (DMS)](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)"
            },
            {
              day: "Thứ 5",
              desc: "- Khám phá AWS Schema Conversion Tool.\n- Tìm hiểu việc chuyển đổi schema cơ sở dữ liệu.\n- Rà soát khả năng tương thích khi migrate cơ sở dữ liệu.",
              start: "2026-11-05",
              end: "2026-11-05",
              ref: "[AWS Schema Conversion Tool (SCT)](https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html)"
            },
            {
              day: "Thứ 6",
              desc: "- Tìm hiểu AWS Elastic Disaster Recovery.\n- Tìm hiểu RPO và RTO.\n- Rà soát các chiến lược backup và recovery.",
              start: "2026-11-06",
              end: "2026-11-06",
              ref: "[AWS Elastic Disaster Recovery (DRS)](https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html)"
            }
          ]
        },
        en: {
          topic: "AWS Migration Services (02/11/2026 – 06/11/2026)",
          objectives: "- Understand cloud migration concepts and strategies.\n- Explore AWS VM Import/Export.\n- Learn AWS Database Migration Service (DMS).\n- Understand database schema conversion.\n- Explore AWS Elastic Disaster Recovery.",
          achievements: "- Understood basic cloud migration strategies.\n- Learned the VM Import/Export process.\n- Explored DMS Replication Instances, Endpoints, and Tasks.\n- Understood full load and ongoing data replication.\n- Learned the purpose of AWS Schema Conversion Tool.\n- Understood basic disaster recovery concepts, RPO, and RTO.",
          tasks: [
            {
              day: "Monday",
              desc: "- Learn cloud migration fundamentals.\n- Explore migration strategies.\n- Review AWS migration services.",
              start: "2026-11-02",
              end: "2026-11-02",
              ref: "[AWS Migration – 7Rs Migration Strategies](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html)"
            },
            {
              day: "Tuesday",
              desc: "- Explore AWS VM Import/Export.\n- Learn virtual machine image migration.\n- Review migration requirements.",
              start: "2026-11-03",
              end: "2026-11-03",
              ref: "[AWS VM Import/Export – User Guide](https://docs.aws.amazon.com/vm-import/latest/userguide/what-is-vmimport.html)"
            },
            {
              day: "Wednesday",
              desc: "- Learn AWS Database Migration Service.\n- Explore Source and Target Endpoints.\n- Understand Replication Tasks.",
              start: "2026-11-04",
              end: "2026-11-04",
              ref: "[AWS Database Migration Service (DMS)](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)"
            },
            {
              day: "Thursday",
              desc: "- Explore AWS Schema Conversion Tool.\n- Learn database schema conversion.\n- Review database migration compatibility.",
              start: "2026-11-05",
              end: "2026-11-05",
              ref: "[AWS Schema Conversion Tool (SCT)](https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html)"
            },
            {
              day: "Friday",
              desc: "- Learn AWS Elastic Disaster Recovery.\n- Understand RPO and RTO.\n- Review backup and recovery strategies.",
              start: "2026-11-06",
              end: "2026-11-06",
              ref: "[AWS Elastic Disaster Recovery (DRS)](https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html)"
            }
          ]
        }
      };
    } else if (weekNum === 9) {
      return {
        weekNum: 9,
        vi: {
          topic: "Docker & Container hóa (09/11/2026 – 13/11/2026)",
          objectives: "- Hiểu container hóa và kiến trúc Docker.\n- Tìm hiểu Docker Image, Container và Dockerfile.\n- Thực hành build và chạy Docker Container.\n- Tìm hiểu mạng container và lưu trữ dữ liệu bền vững.\n- Tìm hiểu cách chạy ứng dụng Docker trên AWS.",
          achievements: "- Phân biệt được máy ảo (Virtual Machine) và Container.\n- Tìm hiểu Docker Engine, Image, Container và Dockerfile.\n- Thực hành cài đặt và cấu hình Docker.\n- Nắm được các lệnh Docker CLI cơ bản.\n- Thực hành build và chạy container tùy chỉnh.\n- Hiểu Docker Volume và Network.\n- Tìm hiểu việc triển khai container bằng Amazon ECS.",
          tasks: [
            {
              day: "Thứ 2",
              desc: "- Học kiến thức nền tảng về container hóa.\n- Tìm hiểu kiến trúc Docker.\n- So sánh Container và máy ảo.",
              start: "2026-11-09",
              end: "2026-11-09",
              ref: "[Docker – What is a Container?](https://docs.docker.com/learn/content/what-is-a-container/)"
            },
            {
              day: "Thứ 3",
              desc: "- Cài đặt và cấu hình Docker.\n- Thực hành các lệnh Docker CLI cơ bản.\n- Tải và chạy Docker Image.",
              start: "2026-11-10",
              end: "2026-11-10",
              ref: "[Docker – Engine Installation Guide](https://docs.docker.com/engine/install/)"
            },
            {
              day: "Thứ 4",
              desc: "- Tìm hiểu các chỉ thị trong Dockerfile.\n- Build Docker Image tùy chỉnh.\n- Triển khai một ứng dụng cơ bản trong container.",
              start: "2026-11-11",
              end: "2026-11-11",
              ref: "[Docker – Dockerfile Reference](https://docs.docker.com/reference/dockerfile/)"
            },
            {
              day: "Thứ 5",
              desc: "- Tìm hiểu Docker Volume và Network.\n- Quản lý vòng đời container.\n- Xem log và cấu hình của container.",
              start: "2026-11-12",
              end: "2026-11-12",
              ref: "[Docker – Manage Data in Volumes](https://docs.docker.com/engine/storage/volumes/)"
            },
            {
              day: "Thứ 6",
              desc: "- Kiểm thử một ứng dụng đã container hóa.\n- Xử lý các lỗi cơ bản.\n- Tìm hiểu việc tích hợp Docker với Amazon ECS.",
              start: "2026-11-13",
              end: "2026-11-13",
              ref: "[Amazon ECR – Pushing Docker Images](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)"
            }
          ]
        },
        en: {
          topic: "Docker & Containerization (09/11/2026 – 13/11/2026)",
          objectives: "- Understand containerization and Docker architecture.\n- Learn Docker Images, Containers, and Dockerfiles.\n- Practice building and running Docker Containers.\n- Learn container networking and persistent storage.\n- Explore Docker applications on AWS.",
          achievements: "- Understood the differences between Virtual Machines and Containers.\n- Learned Docker Engine, Images, Containers, and Dockerfiles.\n- Practiced installing and configuring Docker.\n- Learned basic Docker CLI commands.\n- Practiced building and running custom containers.\n- Understood Docker Volumes and Networks.\n- Explored container deployment using Amazon ECS.",
          tasks: [
            {
              day: "Monday",
              desc: "- Learn containerization fundamentals.\n- Explore Docker architecture.\n- Compare Containers and Virtual Machines.",
              start: "2026-11-09",
              end: "2026-11-09",
              ref: "[Docker – What is a Container?](https://docs.docker.com/learn/content/what-is-a-container/)"
            },
            {
              day: "Tuesday",
              desc: "- Install and configure Docker.\n- Practice basic Docker CLI commands.\n- Download and run Docker Images.",
              start: "2026-11-10",
              end: "2026-11-10",
              ref: "[Docker – Engine Installation Guide](https://docs.docker.com/engine/install/)"
            },
            {
              day: "Wednesday",
              desc: "- Learn Dockerfile instructions.\n- Build custom Docker Images.\n- Deploy a basic application in a container.",
              start: "2026-11-11",
              end: "2026-11-11",
              ref: "[Docker – Dockerfile Reference](https://docs.docker.com/reference/dockerfile/)"
            },
            {
              day: "Thursday",
              desc: "- Learn Docker Volumes and Networks.\n- Manage container lifecycle.\n- Review container logs and configurations.",
              start: "2026-11-12",
              end: "2026-11-12",
              ref: "[Docker – Manage Data in Volumes](https://docs.docker.com/engine/storage/volumes/)"
            },
            {
              day: "Friday",
              desc: "- Test a containerized application.\n- Troubleshoot basic errors.\n- Explore Docker integration with Amazon ECS.",
              start: "2026-11-13",
              end: "2026-11-13",
              ref: "[Amazon ECR – Pushing Docker Images](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)"
            }
          ]
        }
      };
    } else if (weekNum === 10) {
      return {
        weekNum: 10,
        vi: {
          topic: "Amazon ECS, Fargate & CI/CD (16/11/2026 – 20/11/2026)",
          objectives: "- Hiểu việc điều phối container với Amazon ECS.\n- Tìm hiểu ECS Cluster, Task, Service và Task Definition.\n- Tìm hiểu AWS Fargate.\n- Thực hành triển khai ứng dụng đã container hóa.\n- Hiểu CI/CD và AWS CodePipeline.",
          achievements: "[Kế hoạch học tập]\n- Hiểu kiến trúc của Amazon ECS.\n- Tìm hiểu ECS Cluster, Service và Task Definition.\n- Phân biệt ECS chạy trên EC2 và Fargate.\n- Thực hành triển khai container bằng ECS.\n- Nắm được các khái niệm CI/CD pipeline cơ bản.\n- Tìm hiểu AWS CodePipeline và các luồng triển khai tự động.",
          tasks: [
            {
              day: "Thứ 2",
              desc: "- Học kiến thức nền tảng về Amazon ECS.\n- Tìm hiểu Cluster, Task và Service.\n- Tìm hiểu Task Definition.",
              start: "2026-11-16",
              end: "2026-11-16",
              ref: "[Amazon ECS – Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)"
            },
            {
              day: "Thứ 3",
              desc: "- Tìm hiểu AWS Fargate.\n- So sánh launch type EC2 và Fargate.\n- Tìm hiểu các cấu hình container.",
              start: "2026-11-17",
              end: "2026-11-17",
              ref: "[Amazon ECS – AWS Fargate Serverless](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)"
            },
            {
              day: "Thứ 4",
              desc: "- Tạo một ECS Cluster.\n- Cấu hình Task Definition.\n- Triển khai một container bằng Fargate.",
              start: "2026-11-18",
              end: "2026-11-18",
              ref: "[Amazon ECS – Getting Started with Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html)"
            },
            {
              day: "Thứ 5",
              desc: "- Học kiến thức nền tảng về CI/CD.\n- Tìm hiểu AWS CodePipeline.\n- Tìm hiểu các stage Source, Build và Deploy.",
              start: "2026-11-19",
              end: "2026-11-19",
              ref: "[AWS DevOps – Continuous Integration](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/continuous-integration.html)"
            },
            {
              day: "Thứ 6",
              desc: "- Rà soát luồng triển khai container.\n- Kiểm thử việc triển khai ứng dụng.\n- Viết tài liệu cho quy trình CI/CD.",
              start: "2026-11-20",
              end: "2026-11-20",
              ref: "[AWS CodePipeline – ECS Continuous Delivery](https://docs.aws.amazon.com/codepipeline/latest/userguide/ecs-cd-pipeline.html)"
            }
          ]
        },
        en: {
          topic: "Amazon ECS, Fargate & CI/CD (16/11/2026 – 20/11/2026)",
          objectives: "- Understand container orchestration with Amazon ECS.\n- Learn ECS Clusters, Tasks, Services, and Task Definitions.\n- Explore AWS Fargate.\n- Practice deploying containerized applications.\n- Understand CI/CD and AWS CodePipeline.",
          achievements: "[Planned Learning Outcomes]\n- Understood the architecture of Amazon ECS.\n- Learned ECS Clusters, Services, and Task Definitions.\n- Understood the differences between ECS EC2 and Fargate.\n- Practiced deploying containers using ECS.\n- Learned basic CI/CD pipeline concepts.\n- Explored AWS CodePipeline and automated deployment workflows.",
          tasks: [
            {
              day: "Monday",
              desc: "- Learn Amazon ECS fundamentals.\n- Explore Clusters, Tasks, and Services.\n- Understand Task Definitions.",
              start: "2026-11-16",
              end: "2026-11-16",
              ref: "[Amazon ECS – Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)"
            },
            {
              day: "Tuesday",
              desc: "- Learn AWS Fargate.\n- Compare EC2 and Fargate launch types.\n- Explore container configurations.",
              start: "2026-11-17",
              end: "2026-11-17",
              ref: "[Amazon ECS – AWS Fargate Serverless](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)"
            },
            {
              day: "Wednesday",
              desc: "- Create an ECS Cluster.\n- Configure Task Definitions.\n- Deploy a container using Fargate.",
              start: "2026-11-18",
              end: "2026-11-18",
              ref: "[Amazon ECS – Getting Started with Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html)"
            },
            {
              day: "Thursday",
              desc: "- Learn CI/CD fundamentals.\n- Explore AWS CodePipeline.\n- Understand Source, Build, and Deploy stages.",
              start: "2026-11-19",
              end: "2026-11-19",
              ref: "[AWS DevOps – Continuous Integration](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/continuous-integration.html)"
            },
            {
              day: "Friday",
              desc: "- Review the container deployment workflow.\n- Test application deployment.\n- Document the CI/CD process.",
              start: "2026-11-20",
              end: "2026-11-20",
              ref: "[AWS CodePipeline – ECS Continuous Delivery](https://docs.aws.amazon.com/codepipeline/latest/userguide/ecs-cd-pipeline.html)"
            }
          ]
        }
      };
    } else if (weekNum === 11) {
      return {
        weekNum: 11,
        vi: {
          topic: "Phân tích dữ liệu & Business Intelligence trên AWS (23/11/2026 – 27/11/2026)",
          objectives: "- Hiểu các khái niệm Data Analytics và Data Lake.\n- Tìm hiểu các dịch vụ lưu trữ và xử lý dữ liệu của AWS.\n- Tìm hiểu Amazon Athena và truy vấn SQL.\n- Hiểu Amazon QuickSight và Business Intelligence.\n- Thực hành tạo các biểu đồ trực quan hóa dữ liệu cơ bản.",
          achievements: "[Kế hoạch học tập]\n- Hiểu kiến trúc Data Lake và các khái niệm lưu trữ dữ liệu.\n- Tìm hiểu dữ liệu có cấu trúc, bán cấu trúc và phi cấu trúc.\n- Tìm hiểu AWS Glue và các luồng xử lý dữ liệu.\n- Thực hành truy vấn dữ liệu bằng Amazon Athena.\n- Nắm được các thao tác SQL cơ bản để phân tích dữ liệu.\n- Tìm hiểu dashboard và biểu đồ trực quan trên Amazon QuickSight.\n- Thực hành tạo các biểu đồ và báo cáo cơ bản.",
          tasks: [
            {
              day: "Thứ 2",
              desc: "- Học kiến thức nền tảng về Data Analytics.\n- Tìm hiểu Data Lake và Data Warehouse.\n- Tìm hiểu cách dùng Amazon S3 để lưu trữ dữ liệu.",
              start: "2026-11-23",
              end: "2026-11-23",
              ref: "[AWS Cloud – What is a Data Lake?](https://aws.amazon.com/what-is/data-lake/)"
            },
            {
              day: "Thứ 3",
              desc: "- Khám phá các dịch vụ phân tích dữ liệu của AWS.\n- Tìm hiểu AWS Glue.\n- Tìm hiểu các luồng xử lý dữ liệu cơ bản.",
              start: "2026-11-24",
              end: "2026-11-24",
              ref: "[AWS Analytics – Overview & Architecture](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/analytics.html)"
            },
            {
              day: "Thứ 4",
              desc: "- Tìm hiểu Amazon Athena.\n- Thực hành các câu truy vấn SQL cơ bản.\n- Phân tích các tập dữ liệu lưu trên Amazon S3.",
              start: "2026-11-25",
              end: "2026-11-25",
              ref: "[Amazon Athena – Interactive SQL Query](https://docs.aws.amazon.com/athena/latest/ug/what-is.html)"
            },
            {
              day: "Thứ 5",
              desc: "- Học kiến thức nền tảng về Business Intelligence.\n- Tìm hiểu Amazon QuickSight.\n- Tìm hiểu Dataset và Dashboard.",
              start: "2026-11-26",
              end: "2026-11-26",
              ref: "[AWS Cloud – What is Business Intelligence?](https://aws.amazon.com/what-is/business-intelligence/)"
            },
            {
              day: "Thứ 6",
              desc: "- Tạo các biểu đồ trực quan hóa dữ liệu cơ bản.\n- Xây dựng một dashboard mẫu.\n- Rà soát luồng phân tích dữ liệu trên AWS.",
              start: "2026-11-27",
              end: "2026-11-27",
              ref: "[Amazon QuickSight – Creating Visuals](https://docs.aws.amazon.com/quick/latest/userguide/creating-a-visual.html)"
            }
          ]
        },
        en: {
          topic: "AWS Data Analytics & Business Intelligence (23/11/2026 – 27/11/2026)",
          objectives: "- Understand Data Analytics and Data Lake concepts.\n- Explore AWS data storage and processing services.\n- Learn Amazon Athena and SQL queries.\n- Understand Amazon QuickSight and Business Intelligence.\n- Practice creating basic data visualizations.",
          achievements: "[Planned Learning Outcomes]\n- Understood Data Lake architecture and data storage concepts.\n- Learned structured, semi-structured, and unstructured data.\n- Explored AWS Glue and data processing workflows.\n- Practiced querying data using Amazon Athena.\n- Learned basic SQL operations for data analysis.\n- Explored Amazon QuickSight dashboards and visualizations.\n- Practiced creating basic charts and reports.",
          tasks: [
            {
              day: "Monday",
              desc: "- Learn Data Analytics fundamentals.\n- Understand Data Lakes and Data Warehouses.\n- Explore Amazon S3 for data storage.",
              start: "2026-11-23",
              end: "2026-11-23",
              ref: "[AWS Cloud – What is a Data Lake?](https://aws.amazon.com/what-is/data-lake/)"
            },
            {
              day: "Tuesday",
              desc: "- Explore AWS data analytics services.\n- Learn about AWS Glue.\n- Understand basic data processing workflows.",
              start: "2026-11-24",
              end: "2026-11-24",
              ref: "[AWS Analytics – Overview & Architecture](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/analytics.html)"
            },
            {
              day: "Wednesday",
              desc: "- Learn Amazon Athena.\n- Practice basic SQL queries.\n- Analyze datasets stored in Amazon S3.",
              start: "2026-11-25",
              end: "2026-11-25",
              ref: "[Amazon Athena – Interactive SQL Query](https://docs.aws.amazon.com/athena/latest/ug/what-is.html)"
            },
            {
              day: "Thursday",
              desc: "- Learn Business Intelligence fundamentals.\n- Explore Amazon QuickSight.\n- Understand Datasets and Dashboards.",
              start: "2026-11-26",
              end: "2026-11-26",
              ref: "[AWS Cloud – What is Business Intelligence?](https://aws.amazon.com/what-is/business-intelligence/)"
            },
            {
              day: "Friday",
              desc: "- Create basic data visualizations.\n- Build a sample dashboard.\n- Review the AWS analytics workflow.",
              start: "2026-11-27",
              end: "2026-11-27",
              ref: "[Amazon QuickSight – Creating Visuals](https://docs.aws.amazon.com/quick/latest/userguide/creating-a-visual.html)"
            }
          ]
        }
      };
    } else if (weekNum === 12) {
      return {
        weekNum: 12,
        vi: {
          topic: "Machine Learning với Amazon SageMaker (30/11/2026 – 04/12/2026)",
          objectives: "- Hiểu kiến thức nền tảng về AI, Machine Learning và Deep Learning.\n- Tìm hiểu Amazon SageMaker và các tính năng chính.\n- Tìm hiểu cách chuẩn bị dữ liệu và huấn luyện mô hình cơ bản.\n- Hiểu cách đánh giá và triển khai mô hình.\n- Tổng kết và đúc kết chương trình First Cloud AI Journey.",
          achievements: "[Kế hoạch học tập]\n- Phân biệt AI, ML và Deep Learning.\n- Tìm hiểu các khái niệm supervised learning và unsupervised learning.\n- Tìm hiểu Amazon SageMaker và môi trường phát triển.\n- Hiểu cách chuẩn bị tập dữ liệu cơ bản.\n- Tìm hiểu quy trình huấn luyện mô hình machine learning.\n- Tìm hiểu các khái niệm đánh giá mô hình và inference.\n- Ôn lại các dịch vụ AWS và củng cố kiến thức thực tập.\n- Chuẩn bị tài liệu kỹ thuật và bản tổng kết học tập cuối kỳ.",
          tasks: [
            {
              day: "Thứ 2",
              desc: "- Học kiến thức nền tảng về AI và Machine Learning.\n- Tìm hiểu supervised learning và unsupervised learning.\n- Tìm hiểu vòng đời ML (ML lifecycle).",
              start: "2026-11-30",
              end: "2026-11-30",
              ref: "[AWS Cloud – Machine Learning on AWS](https://aws.amazon.com/what-is/machine-learning/)"
            },
            {
              day: "Thứ 3",
              desc: "- Khám phá Amazon SageMaker.\n- Tìm hiểu môi trường phát triển và notebook.\n- Ôn lại cách chuẩn bị tập dữ liệu.",
              start: "2026-12-01",
              end: "2026-12-01",
              ref: "[Amazon SageMaker – Developer Guide](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)"
            },
            {
              day: "Thứ 4",
              desc: "- Tìm hiểu cách huấn luyện mô hình machine learning.\n- Tìm hiểu tập dữ liệu huấn luyện và các cấu hình.\n- Tìm hiểu cách đánh giá mô hình.",
              start: "2026-12-02",
              end: "2026-12-02",
              ref: "[Amazon SageMaker – Model Training](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-training.html)"
            },
            {
              day: "Thứ 5",
              desc: "- Tìm hiểu việc triển khai mô hình và inference.\n- Tìm hiểu SageMaker Endpoint.\n- Ôn lại các khái niệm giám sát mô hình.",
              start: "2026-12-03",
              end: "2026-12-03",
              ref: "[Amazon SageMaker – Model Deployment](https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html)"
            },
            {
              day: "Thứ 6",
              desc: "- Ôn lại các dịch vụ AWS chính đã học.\n- Tổng kết kết quả các bài lab thực hành.\n- Chuẩn bị tài liệu thực tập cuối kỳ.",
              start: "2026-12-04",
              end: "2026-12-04",
              ref: "[AWS Overview – Introduction to Cloud Services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html)"
            }
          ]
        },
        en: {
          topic: "Machine Learning with Amazon SageMaker (30/11/2026 – 04/12/2026)",
          objectives: "- Understand AI, Machine Learning, and Deep Learning fundamentals.\n- Explore Amazon SageMaker and its main features.\n- Learn basic data preparation and model training.\n- Understand model evaluation and deployment.\n- Review and summarize the First Cloud AI Journey program.",
          achievements: "[Planned Learning Outcomes]\n- Understood the differences between AI, ML, and Deep Learning.\n- Learned supervised and unsupervised learning concepts.\n- Explored Amazon SageMaker and its development environment.\n- Understood basic dataset preparation.\n- Learned the machine learning model training workflow.\n- Explored model evaluation and inference concepts.\n- Reviewed AWS services and consolidated internship knowledge.\n- Prepared technical documentation and a final learning summary.",
          tasks: [
            {
              day: "Monday",
              desc: "- Learn AI and Machine Learning fundamentals.\n- Understand supervised and unsupervised learning.\n- Explore the ML lifecycle.",
              start: "2026-11-30",
              end: "2026-11-30",
              ref: "[AWS Cloud – Machine Learning on AWS](https://aws.amazon.com/what-is/machine-learning/)"
            },
            {
              day: "Tuesday",
              desc: "- Explore Amazon SageMaker.\n- Learn about development environments and notebooks.\n- Review dataset preparation.",
              start: "2026-12-01",
              end: "2026-12-01",
              ref: "[Amazon SageMaker – Developer Guide](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)"
            },
            {
              day: "Wednesday",
              desc: "- Learn machine learning model training.\n- Explore training datasets and configurations.\n- Understand model evaluation.",
              start: "2026-12-02",
              end: "2026-12-02",
              ref: "[Amazon SageMaker – Model Training](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-training.html)"
            },
            {
              day: "Thursday",
              desc: "- Learn model deployment and inference.\n- Explore SageMaker Endpoints.\n- Review model monitoring concepts.",
              start: "2026-12-03",
              end: "2026-12-03",
              ref: "[Amazon SageMaker – Model Deployment](https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html)"
            },
            {
              day: "Friday",
              desc: "- Review major AWS services studied.\n- Summarize hands-on lab results.\n- Prepare final internship documentation.",
              start: "2026-12-04",
              end: "2026-12-04",
              ref: "[AWS Overview – Introduction to Cloud Services](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html)"
            }
          ]
        }
      };
    } else {
      return {
        weekNum: weekNum,
        vi: { objectives: '', achievements: '', tasks: [] },
        en: { objectives: '', achievements: '', tasks: [] }
      };
    }
  }),
  proposal: {
    vi: {
      summary: "Hệ thống IoT Weather Platform được thiết kế nhằm nâng cao năng lực thu thập và phân tích dữ liệu thời tiết cho phòng thí nghiệm tại TP.HCM. Giải pháp hỗ trợ kết nối từ 5 đến 15 trạm quan trắc sử dụng vi điều khiển ESP32 và Raspberry Pi truyền tin qua giao thức MQTT. Nền tảng tận dụng tối đa các dịch vụ AWS Serverless giúp giám sát thời gian thực, dự báo xu hướng với chi phí vận hành tối ưu, phân quyền truy cập an toàn qua Amazon Cognito.",
      problem: "Các trạm khí tượng hiện tại yêu cầu thu thập số liệu thủ công, dễ thất thoát và khó quản lý khi số lượng trạm tăng lên. Chưa có hệ thống tập trung cung cấp dữ liệu tức thời và các giải pháp thương mại bên ngoài quá đắt đỏ, phức tạp đối với nhu cầu nghiên cứu học thuật.",
      solution: "Nền tảng sử dụng AWS IoT Core tiếp nhận dữ liệu MQTT, AWS Lambda và API Gateway xử lý logic, Amazon S3 lưu trữ dữ liệu dạng Data Lake, kết hợp AWS Glue Crawlers và ETL jobs trích xuất dữ liệu phục vụ phân tích. Giao diện trực quan được xây dựng trên AWS Amplify với Next.js.\nLợi ích: Giảm thiểu thao tác báo cáo thủ công, cung cấp kho dữ liệu chuẩn hóa cho các nhà nghiên cứu AI huấn luyện mô hình dự báo thời tiết, và giữ chi phí đám mây ở mức dưới 10 USD/tháng.",
      arch: "Cảm biến ESP32 -> Giao thức MQTT bảo mật TLS -> AWS IoT Core Rule Engine -> AWS Lambda (Kiểm tra & Chuẩn hóa) -> Amazon S3 Raw Bucket -> AWS Glue ETL -> Amazon S3 Processed Lake -> Amazon Athena / QuickSight / Dashboard Next.js qua API Gateway.",
      budget: "- AWS IoT Core (500.000 bản tin/tháng): $0.50\n- AWS Lambda (1 triệu lượt gọi, 128MB): $0.20 (Thuộc gói miễn phí)\n- Amazon S3 lưu trữ và truy xuất: $1.20\n- AWS Glue ETL Jobs (Chạy theo lịch): $3.50\n- Amazon Cognito User Pool: $0.00 (Miễn phí)\n-> Tổng chi phí ước tính: ~$5.40 USD/tháng."
    },
    en: {
      summary: "The IoT Weather Platform is designed for the ITea Lab team in Ho Chi Minh City to enhance weather data collection and analysis. It supports up to 5 weather stations, with potential scalability to 10-15, utilizing Raspberry Pi edge devices with ESP32 sensors to transmit data via MQTT. The platform leverages AWS Serverless services to deliver real-time monitoring, predictive analytics, and cost efficiency, with access restricted to lab members via Amazon Cognito.",
      problem: "Current weather stations require manual data collection, becoming unmanageable with multiple units. There is no centralized system for real-time data or analytics, and third-party commercial platforms are costly and overly complex for academic research.",
      solution: "The platform uses AWS IoT Core to ingest MQTT data, AWS Lambda and API Gateway for processing, Amazon S3 for storage (including a data lake), and AWS Glue Crawlers/ETL jobs to extract, transform, and load data for analysis. AWS Amplify with Next.js provides the web dashboard.\nBenefits: Reduces manual reporting, provides centralized live data, enables AI researchers to train climate models, and optimizes operational cloud costs to under $10/month.",
      arch: "ESP32 Sensors -> MQTT over TLS -> AWS IoT Core Rule Engine -> AWS Lambda (Validation & Formatting) -> Amazon S3 Raw Bucket -> AWS Glue ETL -> Amazon S3 Processed Lake -> Amazon Athena / QuickSight / Next.js Dashboard via API Gateway.",
      budget: "- AWS IoT Core (500k messages/month): $0.50\n- AWS Lambda (1M executions, 128MB): $0.20 (Covered by Free Tier)\n- Amazon S3 Storage & API Calls: $1.20\n- AWS Glue ETL Jobs (On-demand): $3.50\n- Amazon Cognito User Pool: $0.00 (Free)\n-> Estimated total cost: ~$5.40 USD/month."
    }
  },
  blogs: {
    vi: [
      {
        id: "blog-1",
        slug: "s3-express-one-zone",
        category: "AWS / Storage / Performance",
        title: "AMAZON S3 EXPRESS ONE ZONE – NHANH HƠN TỚI 10 LẦN, NHƯNG HỆ THỐNG CÓ THỰC SỰ HIỆU QUẢ HƠN?",
        url: "#/blogs/s3-express-one-zone",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        date: "18/10/2026",
        image: "assets/images/s3-express-one-zone-architecture.png",
        snippet: "Trong các hệ thống AI/ML, việc xử lý hàng triệu hình ảnh hoặc tệp dữ liệu đòi hỏi ứng dụng liên tục truy xuất dữ liệu từ Amazon S3. Khi tốc độ đọc không theo kịp CPU/GPU, hệ thống gặp I/O Bottleneck làm lãng phí compute. Amazon S3 Express One Zone cung cấp độ trễ sub-10ms với Directory Bucket trong cùng 1 AZ. Tuy nhiên, theo định luật Amdahl, tối ưu 10x I/O chỉ giúp tổng thời gian hoàn thành tác vụ giảm 18% nếu tác vụ bị nghẽn ở compute."
      },
      {
        id: "blog-2",
        slug: "aws-event-driven-architecture",
        category: "AWS Cloud / Distributed Systems / Architecture",
        title: "AWS EVENT-DRIVEN ARCHITECTURE – KHI MỌI DỊCH VỤ ĐỀU HOẠT ĐỘNG ĐÚNG, TẠI SAO DỮ LIỆU VẪN CÓ THỂ SAI?",
        url: "#/blogs/aws-event-driven-architecture",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        date: "04/11/2026",
        image: "assets/images/aws-event-driven-architecture.png",
        snippet: "Trong quá trình nghiên cứu kiến trúc Event-Driven trên AWS kết hợp Amazon S3, EventBridge, SQS, Lambda và DynamoDB: Một hệ thống có thể xử lý tất cả sự kiện thành công 100% nhưng vẫn tạo ra kết quả sai do Race Condition. Phân tích nguyên nhân tại sao Idempotency và SQS FIFO chưa đủ, và đề xuất mô hình giải pháp kết hợp S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Write và Reconciliation worker."
      },
      {
        id: "blog-3",
        slug: "aws-ec2-identity-containment",
        category: "AWS Study Group",
        title: "CÔ LẬP EC2 KHÔNG CÓ NGHĨA LÀ ĐÃ CÔ LẬP KẺ TẤN CÔNG",
        subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
        url: "#/blogs/aws-ec2-identity-containment",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        date: "15/11/2026",
        image: "assets/images/aws-ec2-identity-containment-architecture.png",
        snippet: "Điều gì sẽ xảy ra nếu một EC2 instance đã bị cô lập khỏi hệ thống mạng, nhưng kẻ tấn công vẫn có thể truy cập các tài nguyên AWS? Phân tích sự khác biệt cốt lõi giữa Network Containment và Identity Containment: Security Group không thu hồi IAM Session, IMDSv2 không bảo vệ credentials khi máy chủ bị thực thi mã từ xa. Đề xuất quy trình Automated Incident Response kết hợp GuardDuty, EventBridge, Lambda runbook và điều kiện aws:EC2InstanceSourceVPC."
      }
    ],
    en: [
      {
        id: "blog-1",
        slug: "s3-express-one-zone",
        category: "AWS / Storage / Performance",
        title: "AMAZON S3 EXPRESS ONE ZONE – UP TO 10X FASTER, BUT IS THE SYSTEM TRULY MORE EFFICIENT?",
        url: "#/blogs/s3-express-one-zone",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
        date: "18/10/2026",
        image: "assets/images/s3-express-one-zone-architecture.png",
        snippet: "In modern AI/ML systems, continuously fetching millions of images from S3 often creates I/O bottlenecks where compute sits idle. Amazon S3 Express One Zone delivers single-digit millisecond latency with Directory Buckets in a single AZ. However, according to Amdahl's Law, a 10x I/O speedup only reduces total execution time by 18% if the workload is compute-heavy."
      },
      {
        id: "blog-2",
        slug: "aws-event-driven-architecture",
        category: "AWS Cloud / Distributed Systems / Architecture",
        title: "AWS EVENT-DRIVEN ARCHITECTURE – WHEN ALL SERVICES SUCCEED, WHY CAN DATA STILL BE WRONG?",
        url: "#/blogs/aws-event-driven-architecture",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
        date: "04/11/2026",
        image: "assets/images/aws-event-driven-architecture.png",
        snippet: "In AWS Event-Driven Architectures combining Amazon S3, EventBridge, SQS, Lambda, and DynamoDB: a system can process all events with 100% success yet produce incorrect business state due to Race Conditions. An investigation into why Idempotency and SQS FIFO are not enough, proposing S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Writes, and Reconciliation."
      },
      {
        id: "blog-3",
        slug: "aws-ec2-identity-containment",
        category: "AWS Study Group",
        title: "EC2 ISOLATION DOES NOT MEAN THE ATTACKER IS ISOLATED",
        subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
        url: "#/blogs/aws-ec2-identity-containment",
        facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        postUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
        date: "15/11/2026",
        image: "assets/images/aws-ec2-identity-containment-architecture.png",
        snippet: "What happens if an EC2 instance is completely isolated from the network, yet an attacker can still access your AWS resources? An in-depth analysis of Network Containment vs Identity Containment: why Security Groups do not terminate active IAM sessions, and how IMDSv2 falls short after remote code execution. Architecting automated incident response combining GuardDuty, EventBridge, Lambda runbooks, and aws:EC2InstanceSourceVPC condition keys."
      }
    ]
  },
  events: {
    vi: [
      {
        id: "event-1",
        slug: "aws-cloud-ai-day-hanoi-2026",
        name: "Sự kiện 1 - AWS Cloud and AI Day Hanoi 2026 (29/09/2026)",
        dateTime: "07:30 – 17:00, 29/09/2026",
        location: "Theo dõi trực tiếp tại điểm cầu FCAJ HCMC Watch Party, TP. Hồ Chí Minh (Sự kiện chính tại JW Marriott Hotel Hanoi)",
        role: "Người tham dự Watch Party (Watch Party Attendee)",
        speakers: "Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner",
        topic: "Điện toán Đám mây, Agentic AI và Hiện đại hóa Hạ tầng Doanh nghiệp",
        category: "Cloud Computing & Agentic AI",
        shortDesc: "Tham dự theo dõi trực tiếp hội nghị thường niên AWS Cloud and AI Day Hanoi 2026 tại điểm cầu FCAJ HCMC Watch Party: chiến lược AI quốc gia, Agentic AI, Amazon Bedrock và hiện đại hóa hạ tầng doanh nghiệp.",
        highlights: "• Theo dõi trực tiếp từ Hà Nội tại điểm cầu FCAJ HCMC Watch Party, TP. Hồ Chí Minh.\n• Bài phát biểu của Dr. Werner Vogels (CTO Amazon.com) về tư duy xây dựng hệ thống phân tán tin cậy và vai trò của AI.\n• Chuyên đề Agentic AI, Amazon Bedrock, hiện đại hóa cơ sở dữ liệu và bảo mật đám mây quy mô doanh nghiệp.",
        hasFullReport: true
      },
      {
        id: "event-2",
        slug: "fireside-chat-dr-werner-vogels",
        name: "Sự kiện 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud & AI in Vietnam (02/10/2026)",
        dateTime: "08:30 – 12:00, 02/10/2026",
        location: "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam",
        role: "Người tham dự (Attendee)",
        speakers: "Dr. Werner Vogels (Phó Chủ tịch kiêm CTO, Amazon.com)",
        topic: "Kỹ thuật xây dựng hệ thống quy mô lớn, Renaissance Developer và tương lai của trí tuệ nhân tạo",
        category: "Cloud Computing & Artificial Intelligence",
        shortDesc: "Buổi trò chuyện trực tiếp cùng Dr. Werner Vogels (VP & CTO Amazon.com) về tương lai Cloud & AI tại Việt Nam, nguyên lý thiết kế hệ thống quy mô lớn và hình mẫu Renaissance Developer trong kỷ nguyên AI.",
        highlights: "• Định hướng tương lai Cloud & AI tại Việt Nam và vai trò của kỹ sư phần mềm trong kỷ nguyên AI.\n• Hình mẫu Renaissance Developer: kết hợp chiều sâu kỹ thuật, tư duy hệ thống và hiểu biết nghiệp vụ.\n• Nguyên lý vận hành hệ thống tin cậy ở quy mô lớn (Design for Failure, Observability, Cost-aware Architecture).",
        hasFullReport: true
      },
      {
        id: "event-3",
        slug: "first-cloud-ai-journey-24-10-2026",
        name: "Sự kiện 3 - First Cloud AI Journey Meetup: Khám phá AWS Cloud, Cloud Security & AI Agents (24/10/2026)",
        dateTime: "08:00 – 12:00, 24/10/2026",
        location: "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam",
        role: "Người tham dự (Attendee)",
        speakers: "Kiệt Trần (Revve AI), Long Huỳnh & Thịnh Nguyễn (Styl Solution), Xuân An (HCMUTE), Khoa Kiều (ACB), Nghi Danh (AWS Community Builder)",
        topic: "Khám phá AWS Cloud, Cloud Security và Tương lai của AI Agents",
        category: "Cloud Computing, Cloud Security & AI Agents",
        shortDesc: "Khám phá 5 phiên kỹ thuật chuyên sâu: Voice AI Contact Center độ trễ thấp, chia sẻ tài nguyên AWS RAM, kiểm thử bảo mật Shift-Left DevSecOps, Amazon Bedrock AgentCore và tự động hóa phát triển phần mềm với Kiro Crew.",
        highlights: "• Voice AI Contact Center: Đàm thoại tiếng Việt thời gian thực, tối ưu độ trễ ~1.8s và phỏng vấn sơ loại tự động.\n• AWS RAM: Chia sẻ tài nguyên an toàn đa tài khoản, kết hợp AWS Organizations, IAM và SCPs.\n• AWS Pentest & DevSecOps: Kiểm thử bảo mật Shift-Left trên mã nguồn Terraform, PR GitHub/GitLab và Security Agent.\n• Amazon Bedrock AgentCore: Môi trường thực thi AgentCore Runtime độc lập và quản lý bộ nhớ AgentCore Memory (Short-term & Long-term).\n• Kiro Crew: Tự động hóa phát triển phần mềm, Artifact Generation, quản trị Context Window (Auto Compact, Context Breakdown) và Security Guardrails.",
        hasFullReport: true
      },
      {
        id: "event-4",
        slug: "enterprise-ai-on-aws-cloud",
        name: "Sự kiện 4 - Enterprise AI on AWS Cloud: Từ Prototype đến Production (14/11/2026)",
        dateTime: "09:00 – 12:00, 14/11/2026",
        location: "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam",
        role: "Người tham dự (Attendee)",
        speakers: "Khang Duong, Phuong Huyen, Bao Nguyen, Khuong Huynh",
        topic: "From AI Prototype to Production: Deploying and Operating Enterprise AI on AWS Cloud",
        category: "Artificial Intelligence & Cloud Computing",
        shortDesc: "Thách thức chuyển đổi AI từ thử nghiệm sang môi trường doanh nghiệp: 4 trụ cột vận hành (Security, Reliability, Scalability, Cost), co giãn linh hoạt trên AWS và 4 mô hình Multi-Agent.",
        highlights: "• Khác biệt cốt lõi giữa Academic AI (Độ chính xác) và Enterprise AI (Giá trị kinh doanh & Vận hành liên tục).\n• 4 thành phần nền tảng của hệ thống AI: Data → Model → Feature → User.\n• Phân định Training (học từ dữ liệu) và Inference (suy luận lặp lại), tác động của LLM Tokens đến chi phí và độ trễ.\n• 4 trụ cột vận hành Production AI: Security, Reliability, Scalability, Cost Optimization.\n• Co giãn linh hoạt với AWS Lambda, Auto Scaling và Elastic Load Balancer.\n• 4 mô hình Multi-Agent phổ biến: Routing/Supervisor, Sequential, Parallel, Evaluator-Optimizer.",
        hasFullReport: true
      }
    ],
    en: [
      {
        id: "event-1",
        slug: "aws-cloud-ai-day-hanoi-2026",
        name: "Event 1 - AWS Cloud and AI Day Hanoi 2026 (September 29, 2026)",
        dateTime: "07:30 AM – 05:00 PM, September 29, 2026",
        location: "Watched live at FCAJ HCMC Watch Party, Ho Chi Minh City (Main venue: JW Marriott Hotel Hanoi)",
        role: "Watch Party Attendee",
        speakers: "Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner",
        topic: "Cloud Computing, Agentic AI, and Enterprise Infrastructure Modernization",
        category: "Cloud Computing & Agentic AI",
        shortDesc: "Attended the live broadcast of AWS Cloud and AI Day Hanoi 2026 at the FCAJ HCMC Watch Party: national cloud & AI strategy, Agentic AI, Amazon Bedrock, and enterprise infrastructure modernization.",
        highlights: "• Watched the live stream from Hanoi at the FCAJ HCMC Watch Party in Ho Chi Minh City.\n• Keynote by Dr. Werner Vogels (CTO, Amazon.com) on building reliable distributed systems and the evolving role of AI.\n• Technical tracks on Agentic AI, Amazon Bedrock, database modernization, and enterprise cloud security.",
        hasFullReport: true
      },
      {
        id: "event-2",
        slug: "fireside-chat-dr-werner-vogels",
        name: "Event 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud & AI in Vietnam (October 2, 2026)",
        dateTime: "08:30 AM – 12:00 PM, October 2, 2026",
        location: "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
        role: "Attendee",
        speakers: "Dr. Werner Vogels (Vice President & CTO, Amazon.com)",
        topic: "Engineering at Scale, the Renaissance Developer, and the Future of Artificial Intelligence",
        category: "Cloud Computing & Artificial Intelligence",
        shortDesc: "Fireside Chat with Dr. Werner Vogels (VP & CTO, Amazon.com) on the future of Cloud & AI in Vietnam, engineering principles for reliable large-scale systems, and the Renaissance Developer mindset.",
        highlights: "• Exploring the future of AWS Cloud and AI adoption in Vietnam.\n• The Renaissance Developer model combining deep technical mastery, systems thinking, and domain understanding.\n• Principles for building reliable systems at scale (Design for Failure, Observability, Cost-aware Architecture).",
        hasFullReport: true
      },
      {
        id: "event-3",
        slug: "first-cloud-ai-journey-24-10-2026",
        name: "Event 3 - First Cloud AI Journey Meetup: AWS Cloud, Cloud Security & AI Agents (October 24, 2026)",
        dateTime: "08:00 AM – 12:00 PM, October 24, 2026",
        location: "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
        role: "Attendee",
        speakers: "Kiệt Trần (Revve AI), Long Huỳnh & Thịnh Nguyễn (Styl Solution), Xuân An (HCMUTE), Khoa Kiều (ACB), Nghi Danh (AWS Community Builder)",
        topic: "Exploring AWS Cloud, Cloud Security, and the Future of AI Agents",
        category: "Cloud Computing, Cloud Security & AI Agents",
        shortDesc: "Five technical sessions: Voice AI Contact Center, cross-account resource sharing with AWS RAM, Shift-Left automated pentesting, Amazon Bedrock AgentCore, and AI-powered software automation with Kiro Crew.",
        highlights: "• Voice AI Contact Center: Real-time Vietnamese voice processing, ~1.8s latency optimization, and automated preliminary screening.\n• AWS RAM: Secure cross-account resource sharing combined with AWS Organizations, IAM, and SCPs.\n• Cloud Security & DevSecOps: Shift-Left security validation on Terraform code, GitHub/GitLab PRs, and AI Security Agents.\n• Amazon Bedrock AgentCore: Production AgentCore Runtime isolation and dual-tier AgentCore Memory (Short-term & Long-term).\n• Kiro Crew: AI-assisted development, Artifact Generation, Context Window Management (Auto Compact, Context Breakdown), and Security Guardrails.",
        hasFullReport: true
      },
      {
        id: "event-4",
        slug: "enterprise-ai-on-aws-cloud",
        name: "Event 4 - Enterprise AI on AWS Cloud: From Prototype to Production (November 14, 2026)",
        dateTime: "09:00 AM – 12:00 PM, November 14, 2026",
        location: "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
        role: "Attendee",
        speakers: "Khang Duong, Phuong Huyen, Bao Nguyen, Khuong Huynh",
        topic: "From AI Prototype to Production: Deploying and Operating Enterprise AI on AWS Cloud",
        category: "Artificial Intelligence & Cloud Computing",
        shortDesc: "Challenges of transitioning AI from prototype to enterprise production: 4 operational pillars (Security, Reliability, Scalability, Cost), elastic AWS scaling, and 4 common Multi-Agent architectures.",
        highlights: "• Fundamental differences between Academic AI (Model Accuracy) and Enterprise AI (Business Value & Continuous Operations).\n• 4 Core Components of Enterprise AI Systems: Data → Model → Feature → User.\n• Distinguishing Training vs. Inference, token economics, and operational latency impacts.\n• 4 Pillars of Production AI: Security, Reliability, Scalability, and Cost Optimization.\n• Elastic Scalability using AWS Lambda, Auto Scaling, and Elastic Load Balancing.\n• 4 Common Multi-Agent Architecture Patterns: Routing/Supervisor, Sequential, Parallel, and Evaluator-Optimizer.",
        hasFullReport: true
      }
    ]
  },
  criteria: [
    { id: 1, title_vi: "Kiến thức & Kỹ năng chuyên môn", desc_vi: "Hiểu biết ngành, ứng dụng kiến thức vào thực tế, thành thạo công cụ, chất lượng công việc", title_en: "Professional knowledge & skills", desc_en: "Understanding of the field, applying knowledge in practice, proficiency with tools, work quality", rating: "good" },
    { id: 2, title_vi: "Khả năng học hỏi", desc_vi: "Khả năng tiếp thu kiến thức mới và học nhanh", title_en: "Ability to learn", desc_en: "Ability to absorb new knowledge and learn quickly", rating: "fair" },
    { id: 3, title_vi: "Tính chủ động", desc_vi: "Chủ động tìm kiếm công việc, không chờ đợi nhắc nhở", title_en: "Proactiveness", desc_en: "Taking initiative, seeking out tasks without waiting for instructions", rating: "good" },
    { id: 4, title_vi: "Tinh thần trách nhiệm", desc_vi: "Hoàn thành công việc đúng hạn và đảm bảo chất lượng", title_en: "Sense of responsibility", desc_en: "Completing tasks on time and ensuring quality", rating: "good" },
    { id: 5, title_vi: "Tính kỷ luật", desc_vi: "Tuân thủ lịch trình, nội quy và quy trình làm việc", title_en: "Discipline", desc_en: "Adhering to schedules, rules, and work processes", rating: "good" },
    { id: 6, title_vi: "Tinh thần cầu tiến", desc_vi: "Sẵn sàng tiếp thu phản hồi và hoàn thiện bản thân", title_en: "Progressive mindset", desc_en: "Willingness to receive feedback and improve oneself", rating: "fair" },
    { id: 7, title_vi: "Kỹ năng giao tiếp", desc_vi: "Trình bày ý tưởng và báo cáo công việc rõ ràng, mạch lạc", title_en: "Communication", desc_en: "Presenting ideas and reporting work clearly", rating: "fair" },
    { id: 8, title_vi: "Làm việc nhóm", desc_vi: "Phối hợp hiệu quả với đồng nghiệp và tham gia hoạt động nhóm", title_en: "Teamwork", desc_en: "Working effectively with colleagues and participating in teams", rating: "good" },
    { id: 9, title_vi: "Tác phong chuyên nghiệp", desc_vi: "Tôn trọng đồng nghiệp, đối tác và môi trường làm việc", title_en: "Professional conduct", desc_en: "Respecting colleagues, partners, and the work environment", rating: "good" },
    { id: 10, title_vi: "Kỹ năng giải quyết vấn đề", desc_vi: "Phát hiện vấn đề, đề xuất giải pháp và thể hiện tư duy sáng tạo", title_en: "Problem-solving skills", desc_en: "Identifying problems, proposing solutions, and showing creativity", rating: "fair" },
    { id: 11, title_vi: "Đóng góp cho dự án / đội ngũ", desc_vi: "Hiệu quả công việc, ý tưởng cải tiến, được đội ngũ ghi nhận", title_en: "Contribution to project/team", desc_en: "Work effectiveness, innovative ideas, recognition from the team", rating: "good" },
    { id: 12, title_vi: "Đánh giá tổng thể", desc_vi: "Đánh giá chung cho toàn bộ thời gian thực tập", title_en: "Overall evaluation", desc_en: "General evaluation of the entire internship period", rating: "good" }
  ],
  selfNarrative: {
    vi: "Trong suốt kỳ thực tập tại Amazon Web Services Việt Nam từ 10/08/2026 đến 10/11/2026, em đã có cơ hội quý báu để học hỏi, thực hành và vận dụng kiến thức chuyên ngành vào các dự án Cloud quy mô thực tế. Em luôn chủ động hoàn thành các bài tập lab, tham gia đầy đủ các sự kiện kỹ thuật và tích cực thảo luận cùng Mentor Trần Anh Dũng.",
    en: "During my internship at Amazon Web Services Vietnam from 10/08/2026 to 10/11/2026, I had valuable opportunities to learn, practice, and apply academic knowledge to real-world cloud architectures. I consistently took the initiative to complete hands-on labs, attended technical events, and actively collaborated with Mentor Tran Anh Dung."
  },
  needsImprovement: {
    vi: "1. Tiếp tục rèn luyện tính kỷ luật, quản lý thời gian hiệu quả hơn khi xử lý nhiều đầu việc song song.\n2. Nâng cao tư duy phân tích và xử lý sự cố kỹ thuật khi đối mặt với các kiến trúc phân tán phức tạp.\n3. Tự tin hơn khi thuyết trình và báo cáo tiến độ kỹ thuật bằng tiếng Anh trong các cuộc họp quốc tế.",
    en: "1. Continue strengthening personal discipline and time management when balancing multiple deliverables.\n2. Further enhance troubleshooting acumen when diagnosing complex distributed cloud environments.\n3. Increase confidence when presenting technical milestones in English during cross-border meetings."
  },
  feedback: {
    vi: {
      env: "Môi trường làm việc tại AWS vô cùng thân thiện, cởi mở và chuyên nghiệp. Mọi thành viên luôn sẵn sàng giải đáp và hỗ trợ bất kể khi nào gặp vướng mắc kỹ thuật. Không gian làm việc hiện đại, tạo cảm hứng sáng tạo rất cao.",
      mentor: "Mentor hướng dẫn rất tận tâm, định hướng tư duy giải quyết vấn đề thay vì đưa sẵn đáp án. Đội ngũ admin hỗ trợ tài liệu, tài khoản Sandbox và thủ tục hành chính rất nhanh chóng và chu đáo.",
      relevance: "Nội dung thực tập bám sát và phát triển sâu hơn các môn học Mạng máy tính, Hệ điều hành và Cơ sở dữ liệu tại trường Đại học Sư phạm Kỹ thuật TP.HCM.",
      learning: "Được thực chiến với các dịch vụ Cloud hàng đầu thế giới (EKS, PrivateLink, Serverless, AI Q Developer), nâng cao tác phong làm việc chuẩn doanh nghiệp toàn cầu.",
      culture: "Văn hóa Customer Obsession và Ownership thể hiện rất rõ nét. Tinh thần hỗ trợ lẫn nhau không phân biệt cấp bậc giúp thực tập sinh nhanh chóng hòa nhập.",
      policies: "Chính sách hỗ trợ chi phí thực tập rõ ràng, thời gian làm việc linh hoạt, được cấp đầy đủ tài nguyên thực hành cloud miễn phí trong suốt khóa học.",
      suggestions: "Kỳ vọng chương trình FCAJ sẽ tổ chức thêm nhiều buổi Offline Hackathon và kết nối giao lưu với các cựu học viên đang làm việc tại các đối tác AWS lớn."
    },
    en: {
      env: "The working environment at AWS is exceptionally welcoming, open, and professional. Team members are always willing to assist whenever technical difficulties arise. The workplace is modern and fosters deep focus and creativity.",
      mentor: "The mentor provides thorough, problem-solving guidance rather than simply handing out answers. The admin team provides timely support for Sandbox cloud accounts and operational procedures.",
      relevance: "Assigned tasks align closely with the curriculum at Ho Chi Minh City University of Technology and Education, while broadening exposure to enterprise-grade technologies.",
      learning: "Gained hands-on experience with cutting-edge cloud technologies (EKS, PrivateLink, Serverless, Amazon Q Developer) and cultivated professional international corporate discipline.",
      culture: "Amazon's leadership principles such as Customer Obsession and Ownership are vividly demonstrated across teams. The collaborative culture made me feel like an integral team member.",
      policies: "Internship policies and allowances are transparent, with flexible scheduling and generous free cloud practice resources provided throughout the bootcamp.",
      suggestions: "I hope future FCAJ cohorts can include more in-person hackathons and networking alumni roundtables with cloud engineers working at major AWS partners."
    }
  }
};

// ==========================================
// 3. PERSISTENCE & STATE MANAGEMENT
// ==========================================
const STORAGE_KEY = 'fcaj_report_bilingual_v23';
const LANG_KEY = 'fcaj_report_lang';

class AppLanguageManager {
  constructor() {
    this.cleanupLegacyStorage();
    this.currentLang = localStorage.getItem(LANG_KEY) || 'vi';
    this.data = this.loadData();
  }

  cleanupLegacyStorage() {
    const legacyKeys = [
      'fcaj_report_bilingual_v22',
      'fcaj_report_bilingual_v21',
      'fcaj_report_bilingual_v20',
      'fcaj_report_bilingual_v19',
      'fcaj_report_bilingual_v18',
      'fcaj_report_bilingual_v17',
      'fcaj_report_bilingual_v16',
      'fcaj_report_bilingual_v15',
      'fcaj_report_bilingual_v14',
      'fcaj_report_bilingual_v13',
      'fcaj_report_bilingual_v12',
      'fcaj_report_bilingual_v11',
      'fcaj_report_bilingual_v10',
      'fcaj_report_bilingual_v9',
      'fcaj_report_bilingual_v8',
      'fcaj_report_bilingual_v7',
      'fcaj_report_bilingual_v6',
      'fcaj_report_bilingual_v5',
      'fcaj_report_bilingual_v4',
      'fcaj_report_bilingual_v3',
      'fcaj_report_bilingual_v2',
      'fcaj_report_bilingual_v1',
      'fcaj_internship_report_v2',
      'fcaj_internship_report_v1'
    ];
    legacyKeys.forEach(k => {
      try { localStorage.removeItem(k); } catch (e) {}
    });
  }

  loadData() {
    // Single Source of Truth in Read-Only Mode: always load pure DEFAULT_BILINGUAL_DATA from source code
    return JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
  }

  saveData() {
    // Read-only mode: no-op to prevent UI modification
  }

  saveCurrentInputs() {
    // Read-only mode: no-op
  }

  setLang(newLang) {
    if (newLang !== 'vi' && newLang !== 'en') return;
    this.currentLang = newLang;
    try {
      localStorage.setItem(LANG_KEY, newLang);
    } catch (e) {}
    this.applyLanguage();
  }

  applyLanguage() {
    const lang = this.currentLang;
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.vi;

    // Set HTML lang attribute
    document.documentElement.lang = lang;

    // Update active class on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update Document Title
    document.title = dict.pageTitleDoc;

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update all titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.title = dict[key];
      }
    });

    // Update all image alt texts
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key]) {
        el.alt = dict[key];
      }
    });

    // Update dynamic header title according to current active view
    updateHeaderPageTitle();

    // Update current date in header
    updateHeaderDate();

    // Update greeting
    updateHeaderGreeting();

    // Re-render views with language specific data
    renderStudentInfoInputs();
    renderWeekTabs();
    renderWorklogView();
    renderProposalInputs();
    renderWorkshopView();
    renderBlogsList();
    renderEventsList();
    const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
    if (currentHash.startsWith('events/')) {
      const slug = currentHash.replace('events/', '');
      renderEventDetail(slug);
    } else {
      renderEventDetail('aws-cloud-ai-day-hanoi-2026');
      renderEventDetail('fireside-chat-dr-werner-vogels');
      renderEventDetail('first-cloud-ai-journey-24-10-2026');
      renderEventDetail('enterprise-ai-on-aws-cloud');
    }
    if (currentHash.startsWith('blogs/')) {
      const slug = currentHash.replace('blogs/', '');
      renderBlogDetail(slug);
    } else {
      renderBlogDetail('s3-express-one-zone');
    }
    renderCriteriaTable();
    renderSelfAssessmentInputs();
    renderFeedbackInputs();
  }
}

const app = new AppLanguageManager();

// ==========================================
// 4. UI HELPERS & NOTIFICATIONS
// ==========================================
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✓' : '⚠️'}</span><span>${escapeHtml(msg)}</span>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'all 0.3s';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function t(key) {
  const dict = I18N_DICTIONARY[app.currentLang] || I18N_DICTIONARY.vi;
  return dict[key] || key;
}

// ==========================================
// 5. NAVIGATION & ROUTING
// ==========================================
function updateHeaderPageTitle() {
  const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  const titleEl = document.getElementById('page-title');
  if (!titleEl) return;

  if (currentHash.startsWith('events/')) {
    titleEl.textContent = app.currentLang === 'vi'
      ? '4. Sự kiện thực tế đã tham gia — Báo cáo thu hoạch'
      : '4. Events Participated — Harvest Report';
    return;
  }
  if (currentHash.startsWith('blogs/')) {
    const slug = currentHash.replace('blogs/', '');
    if (slug === 'aws-ec2-identity-containment') {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Bài viết kỹ thuật — EC2 Identity Containment'
        : '3. Technical Blog — EC2 Identity Containment';
    } else if (slug === 'aws-event-driven-architecture') {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Bài viết kỹ thuật — AWS Event-Driven Architecture'
        : '3. Technical Blog — AWS Event-Driven Architecture';
    } else if (slug === 's3-express-one-zone') {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Bài viết kỹ thuật — Amazon S3 Express One Zone'
        : '3. Technical Blog — Amazon S3 Express One Zone';
    } else {
      titleEl.textContent = app.currentLang === 'vi'
        ? '3. Các bài viết kỹ thuật đã đăng'
        : '3. Published Technical Blogs';
    }
    return;
  }

  const key = `title_${currentHash.replace(/-/g, '_')}`;
  titleEl.textContent = t(key);
}

function updateHeaderDate() {
  const dateEl = document.getElementById('current-date');
  if (!dateEl) return;
  const now = new Date();
  
  if (app.currentLang === 'vi') {
    const daysVi = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    dateEl.textContent = `${daysVi[now.getDay()]}, ${dd}/${mm}/${now.getFullYear()}`;
  } else {
    const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    dateEl.textContent = `${daysEn[now.getDay()]}, ${mm}/${dd}/${now.getFullYear()}`;
  }
}

function updateHeaderGreeting() {
  const greetingEl = document.getElementById('greeting-display');
  if (!greetingEl) return;
  const firstName = (app.data.studentInfo.fullName || 'Phan Nhật Uyên').split(' ').pop();
  const hour = new Date().getHours();
  let greetKey = 'greetingMorning';
  if (hour >= 12 && hour < 18) {
    greetKey = 'greetingAfternoon';
  } else if (hour >= 18 || hour < 5) {
    greetKey = 'greetingEvening';
  }
  greetingEl.textContent = `${t(greetKey)}, ${firstName}`;
}

function navigateTo(pageId) {
  const cleanId = (pageId || '').replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';

  // Highlight active nav link in sidebar
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('data-page');
    const isMatching = linkPage === cleanId || 
      (cleanId.startsWith('events') && linkPage === 'events') ||
      (cleanId.startsWith('blogs') && linkPage === 'blogs-posted');
    link.classList.toggle('active', isMatching);
  });

  // Deactivate all page views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  // Determine target element
  let viewId = `view-${cleanId.replace(/\//g, '-')}`;
  let target = document.getElementById(viewId);
  if (!target && cleanId.startsWith('events/')) {
    target = document.getElementById('view-events-enterprise-ai-on-aws-cloud') ||
             document.getElementById('view-events-aws-cloud-ai-day-hanoi-2026') ||
             document.getElementById('view-events-fireside-chat-dr-werner-vogels') ||
             document.getElementById('view-events-first-cloud-ai-journey-24-10-2026');
  }
  if (!target && cleanId.startsWith('blogs/')) {
    target = document.getElementById('view-blogs-s3-express-one-zone');
  }

  if (target) {
    target.classList.add('active');
  }

  // Update URL hash if needed
  if (window.location.hash !== `#/${cleanId}`) {
    window.location.hash = `#/${cleanId}`;
  }

  // If navigating to event report or blog detail, render the detailed view
  if (cleanId.startsWith('events/')) {
    const slug = cleanId.replace('events/', '') || 'first-cloud-ai-journey-24-10-2026';
    renderEventDetail(slug);
  } else if (cleanId === 'events') {
    renderEventsList();
  } else if (cleanId.startsWith('blogs/')) {
    const slug = cleanId.replace('blogs/', '') || 's3-express-one-zone';
    renderBlogDetail(slug);
  } else if (cleanId === 'blogs-posted') {
    renderBlogsList();
  } else if (cleanId === 'proposal') {
    renderProposalView();
  } else if (cleanId === 'workshop') {
    renderWorkshopView();
  }

  updateHeaderPageTitle();
  document.getElementById('sidebar')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const rawHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  navigateTo(rawHash);
}

// ==========================================
// 6. STUDENT INFO (READ-ONLY)
// ==========================================
const AVATAR_FIT_KEY = 'fcaj_student_avatar_fit';

function getAvatarFitMode() {
  // The fit toggle button was removed: always use the default "cover" mode
  return 'cover';
}

function setAvatarFitMode(mode) {
  try { localStorage.setItem(AVATAR_FIT_KEY, mode); } catch (e) {}
  applyAvatarFitMode();
}

function applyAvatarFitMode() {
  const mode = getAvatarFitMode();
  const imgEl = document.getElementById('student-photo-img');
  const fitBtn = document.getElementById('btn-toggle-fit');
  const fitLabel = document.getElementById('fit-label');

  if (imgEl) {
    if (mode === 'contain') {
      imgEl.classList.add('fit-contain');
    } else {
      imgEl.classList.remove('fit-contain');
    }
  }

  if (fitBtn && fitLabel) {
    if (mode === 'contain') {
      fitLabel.textContent = t('photoFitFull') || 'Nguyên ảnh';
      fitBtn.classList.add('active');
    } else {
      fitLabel.textContent = t('photoFitCover') || 'Cắt vừa';
      fitBtn.classList.remove('active');
    }
  }
}

function updateStudentAvatarDisplay() {
  const info = app.data.studentInfo || {};
  const avatar = info.avatar || 'assets/images/profile.jpg';

  const imgEl = document.getElementById('student-photo-img');
  const placeholderEl = document.getElementById('student-photo-placeholder');
  const toolbarEl = document.getElementById('photo-action-toolbar');

  const sidebarAvatar = document.getElementById('sidebar-avatar');
  const headerAvatar = document.querySelector('.user-greeting-pill .avatar-sm');
  const parts = (info.fullName || 'Phan Nhật Uyên').trim().split(' ');
  const initial = (parts[parts.length - 1] || 'U')[0].toUpperCase();

  if (avatar) {
    if (imgEl) {
      imgEl.onerror = () => {
        imgEl.style.display = 'none';
        if (placeholderEl) placeholderEl.style.display = 'flex';
        if (toolbarEl) toolbarEl.style.display = 'none';
        if (sidebarAvatar) {
          sidebarAvatar.innerHTML = '';
          sidebarAvatar.textContent = initial;
        }
        if (headerAvatar) {
          headerAvatar.innerHTML = '';
          headerAvatar.textContent = initial;
        }
      };
      imgEl.onload = () => {
        imgEl.style.display = 'block';
        if (placeholderEl) placeholderEl.style.display = 'none';
        if (toolbarEl) toolbarEl.style.display = 'flex';
      };
      imgEl.src = avatar;
      imgEl.style.display = 'block';
    }
    if (placeholderEl) placeholderEl.style.display = 'none';
    if (toolbarEl) toolbarEl.style.display = 'flex';
    applyAvatarFitMode();

    if (sidebarAvatar) sidebarAvatar.innerHTML = `<img src="${avatar}" alt="Avatar">`;
    if (headerAvatar) headerAvatar.innerHTML = `<img src="${avatar}" alt="Avatar">`;
  } else {
    if (imgEl) {
      imgEl.src = '';
      imgEl.style.display = 'none';
    }
    if (placeholderEl) placeholderEl.style.display = 'flex';
    if (toolbarEl) toolbarEl.style.display = 'none';

    if (sidebarAvatar) {
      sidebarAvatar.innerHTML = '';
      sidebarAvatar.textContent = initial;
    }
    if (headerAvatar) {
      headerAvatar.innerHTML = '';
      headerAvatar.textContent = initial;
    }
  }
}

function renderStudentInfoInputs() {
  const info = app.data.studentInfo;
  const lang = app.currentLang;
  const loc = info[lang] || info.vi;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('info-fullname', info.fullName);
  setVal('info-student-id', info.studentId);
  setVal('info-phone', info.phone);
  setVal('info-email', info.email);
  setVal('info-university', loc.university);
  setVal('info-major', loc.major);
  setVal('info-company', loc.company);
  setVal('info-position', loc.position);
  setVal('info-duration', loc.duration);

  // Update sidebar company label and name
  const sidebarCompany = document.getElementById('sidebar-company');
  if (sidebarCompany) sidebarCompany.textContent = loc.company;
  const sidebarUser = document.getElementById('sidebar-username');
  if (sidebarUser && info.fullName) sidebarUser.textContent = info.fullName;

  // Update student avatar
  updateStudentAvatarDisplay();
  updateHeaderGreeting();
}

function setupStudentInfo() {
  const form = document.getElementById('student-info-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  const photoFrame = document.getElementById('student-photo-frame');
  const hdModal = document.getElementById('photo-hd-modal');
  const hdPreview = document.getElementById('photo-hd-preview');
  const btnCloseHd = document.getElementById('btn-close-hd-modal');
  const btnCloseHdBtn = document.getElementById('btn-close-hd-btn');

  // Click the photo to open it enlarged (HD modal)
  const openHdModal = (e) => {
    if (e) e.stopPropagation();
    const info = app.data.studentInfo || {};
    const avatarSrc = info.avatar || 'assets/images/profile.jpg';
    if (avatarSrc && hdModal && hdPreview) {
      hdPreview.onload = () => {
        const resBadge = document.getElementById('hd-modal-resolution');
        if (resBadge && hdPreview.naturalWidth && hdPreview.naturalHeight) {
          resBadge.textContent = `${hdPreview.naturalWidth} × ${hdPreview.naturalHeight} px`;
          resBadge.style.display = 'inline-block';
        }
      };
      hdPreview.src = avatarSrc;
      hdModal.classList.add('active');
    }
  };

  if (photoFrame) {
    photoFrame.addEventListener('click', openHdModal);
  }

  const closeHdModal = () => {
    if (hdModal) hdModal.classList.remove('active');
  };
  if (btnCloseHd) btnCloseHd.addEventListener('click', closeHdModal);
  if (btnCloseHdBtn) btnCloseHdBtn.addEventListener('click', closeHdModal);
  if (hdModal) {
    hdModal.addEventListener('click', (e) => {
      if (e.target === hdModal) closeHdModal();
    });
  }
}

// ==========================================
// 7. 1. WORKLOG (12 WEEKS)
// ==========================================
function getCurrentWeekWorklog() {
  const weekNum = app.data.currentWeek || 1;
  let week = app.data.worklogs.find(w => w.weekNum === weekNum);
  if (!week) {
    week = {
      weekNum: weekNum,
      vi: { objectives: '', achievements: '', tasks: [] },
      en: { objectives: '', achievements: '', tasks: [] }
    };
    app.data.worklogs.push(week);
  }
  if (!week.vi) week.vi = { objectives: '', achievements: '', tasks: [] };
  if (!week.en) week.en = { objectives: '', achievements: '', tasks: [] };
  if (!Array.isArray(week.vi.tasks)) week.vi.tasks = [];
  if (!Array.isArray(week.en.tasks)) week.en.tasks = [];
  return week;
}

function renderWeekTabs() {
  const container = document.getElementById('week-tabs-bar');
  if (!container) return;

  const prefix = t('weekPrefix');
  container.innerHTML = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const isActive = num === (app.data.currentWeek || 1);
    return `
      <button type="button" class="week-tab-btn ${isActive ? 'active' : ''}" onclick="selectWeek(${num})">
        ${prefix} ${num}
      </button>
    `;
  }).join('');
}

function selectWeek(num) {
  app.data.currentWeek = num;
  app.saveData();
  renderWeekTabs();
  renderWorklogView();
}

function renderRefLinks(refStr) {
  if (!refStr || !refStr.trim()) return '-';
  // Normalize markdown links or slash separated links into individual lines
  let normalized = refStr.replace(/\s*\/\s*(?=\[|https?:\/\/)/g, '\n');
  const lines = normalized.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.map(line => {
    // Check for markdown link [Title](https://...)
    const mdMatch = line.match(/^\[(.*?)\]\((https?:\/\/[^\s\)]+)\)$/);
    if (mdMatch) {
      const title = mdMatch[1];
      const url = mdMatch[2];
      return `<div style="margin-bottom: 6px; font-size: 13.5px; line-height: 1.5;">
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary); font-weight:600; text-decoration:underline; display:inline-flex; align-items:center; gap:4px;">
          <span>${escapeHtml(title)}</span>
          <span style="font-size:11px; text-decoration:none;">↗</span>
        </a>
      </div>`;
    }
    const match = line.match(/(https?:\/\/[^\s]+)/);
    if (match) {
      let url = match[1];
      url = url.replace(/\)+$/, '');
      let prefix = line.replace(match[1], '').replace(/[\[\]\(\)]/g, '').trim();
      const label = prefix || url;
      return `<div style="margin-bottom: 6px; font-size: 13.5px; line-height: 1.5;">
        <a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary); font-weight:600; text-decoration:underline; display:inline-flex; align-items:center; gap:4px;">
          <span>${escapeHtml(label)}</span>
          <span style="font-size:11px; text-decoration:none;">↗</span>
        </a>
      </div>`;
    }
    return `<div style="margin-bottom: 5px; font-size: 13px; color:var(--text-subtle);">${escapeHtml(line)}</div>`;
  }).join('');
}

function formatWorklogDate(dateStr) {
  if (!dateStr) return '-';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
  }
  return dateStr;
}

function renderWorklogView() {
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  const content = week[lang] || week.vi;

  const heading = document.getElementById('current-week-heading');
  const objText = document.getElementById('week-objectives-text');
  const achText = document.getElementById('week-achievements-text');
  const tbody = document.getElementById('week-tasks-tbody');

  if (heading) heading.textContent = `${t('weekHeadingPrefix')} ${week.weekNum}`;
  const subtitle = document.getElementById('current-week-subtitle');
  if (subtitle) {
    if (content.topic) {
      subtitle.textContent = content.topic;
    } else {
      subtitle.textContent = t('bootcampSubtitle');
    }
  }
  
  if (objText) {
    if (content.objectives && content.objectives.trim()) {
      objText.innerHTML = escapeHtml(content.objectives).replace(/\n/g, '<br>');
      objText.style.color = '';
      objText.style.fontStyle = '';
      objText.style.lineHeight = '1.6';
      objText.style.whiteSpace = 'pre-wrap';
    } else {
      objText.textContent = t('emptyObjectivesMsg');
      objText.style.color = '#94A3B8';
      objText.style.fontStyle = 'italic';
    }
  }

  if (achText) {
    if (content.achievements && content.achievements.trim()) {
      achText.innerHTML = escapeHtml(content.achievements).replace(/\n/g, '<br>');
      achText.style.color = '';
      achText.style.fontStyle = '';
      achText.style.lineHeight = '1.65';
      achText.style.whiteSpace = 'pre-wrap';
    } else {
      achText.textContent = t('emptyAchievementsMsg');
      achText.style.color = '#94A3B8';
      achText.style.fontStyle = 'italic';
    }
  }

  if (tbody) {
    if (!content.tasks || content.tasks.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding: 32px 16px; color: #64748B;">
            <div style="font-size: 14px;">${t('emptyTasksMsg')}</div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = content.tasks.map((task) => `
      <tr>
        <td style="font-weight:700; text-align:center; vertical-align:top; font-size:14px; padding-top:14px;">${escapeHtml(task.day)}</td>
        <td style="white-space:pre-wrap; line-height: 1.6; font-size:13.5px; vertical-align:top; padding-top:14px;">${escapeHtml(task.desc)}</td>
        <td style="white-space:nowrap; font-size:13px; color:var(--text-subtle); vertical-align:top; padding-top:14px;">${escapeHtml(formatWorklogDate(task.start))}</td>
        <td style="white-space:nowrap; font-size:13px; color:var(--text-subtle); vertical-align:top; padding-top:14px;">${escapeHtml(formatWorklogDate(task.end))}</td>
        <td style="vertical-align:top; padding-top:14px;">
          ${renderRefLinks(task.ref)}
        </td>
      </tr>
    `).join('');
  }
}

function exportWorklogJson() {
  const exportData = {
    appName: "AWS FCAJ Internship Report",
    exportedAt: new Date().toISOString(),
    currentWeek: app.data.currentWeek || 1,
    worklogs: app.data.worklogs
  };
  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `worklog-fcaj-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t('toastExportSuccess'));
}

function showExportCodeModal() {
  const modal = document.getElementById('worklog-export-modal');
  const textarea = document.getElementById('export-worklog-textarea');
  if (!modal || !textarea) return;

  const exportData = {
    exportedAt: new Date().toISOString(),
    worklogs: app.data.worklogs
  };
  textarea.value = JSON.stringify(exportData, null, 2);
  modal.classList.add('show');
}

function closeExportCodeModal() {
  const modal = document.getElementById('worklog-export-modal');
  modal?.classList.remove('show');
}

function setupWorklog() {
  // Export / Code modal listeners
  document.getElementById('btn-export-worklog-json')?.addEventListener('click', exportWorklogJson);
  document.getElementById('btn-view-worklog-code')?.addEventListener('click', showExportCodeModal);
  document.getElementById('btn-close-export-modal')?.addEventListener('click', closeExportCodeModal);
  document.getElementById('btn-close-export-btn')?.addEventListener('click', closeExportCodeModal);
  document.getElementById('btn-copy-export-json')?.addEventListener('click', () => {
    const textarea = document.getElementById('export-worklog-textarea');
    if (textarea) {
      navigator.clipboard.writeText(textarea.value).then(() => {
        showToast(t('toastCopyJsonFull'));
      }).catch(() => {
        textarea.select();
        document.execCommand('copy');
        showToast(t('toastCopyJsonShort'));
      });
    }
  });
}

// ==========================================
// 8. 2. PROPOSAL MODULE (READ-ONLY)
// ==========================================
function setContent(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  if ('value' in el && el.tagName !== 'DIV') {
    el.value = val || '';
  } else {
    el.textContent = val || '';
  }
}


// ==========================================
// 8. 2. PROJECT PROPOSAL (NUTRITION E-COMMERCE - MINIMAL REPORT)
// ==========================================

function getProposalViHtml() {
  const archImg = 'assets/images/workshop/5.1-overview/aws-architecture.png';

  return `
<div class="tech-report">
  <header>
    <div class="report-eyebrow">Đề xuất dự án</div>
    <p class="report-intro">Thiết kế kiến trúc, phạm vi, vấn đề giải quyết, kế hoạch và ước tính chi phí cho dự án workshop.</p>
    <h1 class="report-title">Nền tảng Thương mại Điện tử Dinh dưỡng Cá nhân hóa trên AWS</h1>
    <p class="report-subtitle">Tra cứu dinh dưỡng có nguồn và mua sắm trên hạ tầng AWS</p>
  </header>

  <!-- 1. 1. TÓM TẮT ĐỀ XUẤT -->
  <section class="report-section">
    <h2 class="report-h2">1. Tóm tắt đề xuất</h2>
    <p class="report-p">Nền tảng thương mại điện tử dinh dưỡng cá nhân hóa trên AWS hỗ trợ tra cứu thực phẩm, mua hàng và gợi ý bữa ăn từ dữ liệu có nguồn. React gọi Spring Boot qua CloudFront và ALB; PostgreSQL lưu dữ liệu, Bedrock chỉ diễn giải yêu cầu. Sản phẩm thiếu dữ liệu bị loại khi lọc dinh dưỡng hoặc allergen. Số liệu trả lời do code lấy từ DB, kết hợp vận hành theo buổi demo để kiểm soát chi phí.</p>
  </section>

  <!-- 2. 2. VẤN ĐỀ CẦN GIẢI QUYẾT -->
  <section class="report-section">
    <h2 class="report-h2">2. Vấn đề cần giải quyết</h2>
    <h3 class="report-h3">Vấn đề là gì?</h3>
    <p class="report-p">Người mua khó so sánh thực phẩm khi dữ liệu dinh dưỡng và allergen thiếu nhất quán. Câu trả lời AI có thể chứa con số thiếu căn cứ nếu model tự sinh nội dung.</p>
    <h3 class="report-h3">Giải pháp</h3>
    <p class="report-p">Người mua khó đối chiếu dữ liệu dinh dưỡng và allergen giữa các sản phẩm. Chatbot sinh văn bản có thể đưa ra con số không có căn cứ. MVP gồm catalog 152 sản phẩm USDA, tài khoản, bộ lọc theo dinh dưỡng, 9 allergen và 6 nhãn chế độ ăn; phân tích bữa ăn; AI tra cứu chỉ đọc; giỏ hàng, đặt hàng, quản lý sản phẩm, ảnh, đơn, thống kê và nhật ký thanh toán. COD và VNPAY sandbox nằm trong phạm vi.</p>
    <p class="report-p">D32 bổ sung hồ sơ và gợi ý một bữa gồm món protein, rau/trái cây và tinh bột. Mục tiêu tính bằng Mifflin-St Jeor × mức vận động. Chỉ áp dụng cho tuổi 18–65, BMI 17–35, loại trừ mang thai, cho con bú và bệnh cần giám sát. Không có thanh toán thật, hoàn tiền tự động hoặc tư vấn y tế. Danh tính lấy từ JWT; trừ kho bằng UPDATE có điều kiện trong transaction.</p>
    <h3 class="report-h3">Lợi ích và hiệu quả đầu tư</h3>
    <p class="report-p">Người mua tra cứu thông tin từ DB, lọc theo nhu cầu và xem giới hạn dữ liệu. Cửa hàng quản lý catalog, ảnh, đơn và nhật ký thanh toán trong cùng ứng dụng. Cost Explorer ghi 6,44 USD cho 01–21/11/2026, toàn bộ được credit bù. Chưa có số liệu doanh thu hay tiết kiệm lao động để tính ROI tài chính.</p>
  </section>

  <!-- 3. 3. KIẾN TRÚC GIẢI PHÁP -->
  <section class="report-section">
    <h2 class="report-h2">3. Kiến trúc giải pháp</h2>
    <h3 class="report-h3">AWS architecture reference</h3>
    <p class="report-p">Nhấp vào hình để phóng to / tương tác thu phóng</p>
    <div class="report-figure">
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('${archImg}', 'Sơ đồ kiến trúc hạ tầng AWS')" title="Nhấp để phóng to">
        <img src="${archImg}" alt="Sơ đồ kiến trúc hạ tầng AWS" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption">Sơ đồ kiến trúc AWS vẽ trên draw.io bằng bộ AWS Architecture Icons, cập nhật Multi-AZ và AWS STS ngày 25/11/2026</div>
    </div>
    <p class="report-p">Từ 22/11/2026 (D33), môi trường dev chạy 2 task ECS, mỗi Availability Zone một task, và RDS ở chế độ Multi-AZ với bản dự phòng (Standby) ở AZ thứ hai. Diễn tập Reboot with failover ngày 22/11 chuyển AZ chính từ ap-southeast-1a sang ap-southeast-1b trong khoảng 20–45 giây; API gián đoạn khoảng nửa phút rồi tự phục hồi, không mất dữ liệu.</p>
    <h3 class="report-h3">Các dịch vụ AWS sử dụng</h3>
    <p class="report-p">CloudFront + S3 — React SPA và ảnh qua OAC; Function viết lại đường dẫn; hai bucket riêng tư.</p>
    <p class="report-p">ALB + ECS Fargate + ECR — ALB nhận CloudFront + header bí mật; Spring Boot 4 / Java 21, ARM64, 0,5 vCPU / 1 GB, 2 task ở 2 AZ.</p>
    <p class="report-p">RDS PostgreSQL + Secrets Manager — db.t4g.micro, 20 GB gp3, Multi-AZ (standby ở AZ thứ hai), private subnet, mã hóa; Flyway V1–V11.</p>
    <p class="report-p">Cognito — JWT sub và cognito:groups; USER / ADMIN.</p>
    <p class="report-p">Bedrock + Guardrails — Nova 2 Lite ở Tokyo; tool chỉ đọc, số liệu do code lấy từ DB.</p>
    <p class="report-p">CloudWatch + SNS + Budgets — Log 14 ngày, 7 alarm, cảnh báo thư điện tử; ngân sách 100 USD.</p>
    <p class="report-p">CloudTrail + S3 audit + WAF — Audit và ALB logs lưu 30 ngày; WAF chỉ bật khi demo; KMS do AWS quản lý.</p>
    <p class="report-p">Terraform + IAM + STS + GitHub Actions — State S3 use_lockfile; SSO, boundary; CI/CD qua OIDC, AWS STS cấp quyền tạm thời (AssumeRoleWithWebIdentity), không lưu access key.</p>
    <p class="report-p">Ứng dụng ở ap-southeast-1, tiền tố nutrition-dev, chỉ một môi trường dev. D15 đặt ECS ở public subnet với IP công khai để tránh chi phí NAT, còn RDS giữ private. D17 chọn một môi trường để phù hợp đồ án. D18 chuyển lời gọi Bedrock và Guardrail sang ap-northeast-1 vì quota Singapore của tài khoản bằng 0; profile jp.amazon.nova-2-lite-v1:0. D24/D31 giới hạn model vào searchProducts với intent search, facts, compare, plan; số liệu do backend ghép. CloudFront → ALB hiện dùng HTTP vì chưa có domain riêng.</p>
    <h3 class="report-h3">Thiết kế thành phần</h3>
    <p class="report-p">Frontend React + TypeScript hiển thị catalog, giỏ hàng, hồ sơ, gợi ý và trang quản trị.</p>
    <p class="report-p">Backend Spring Boot 4 / Java 21: catalog quản lý tra cứu; commerce xử lý giỏ/đơn; payments xác minh IPN; ai trích ý định; admin cung cấp API quản trị; profile tính mục tiêu và gợi ý.</p>
    <p class="report-p">Database PostgreSQL dùng SQL tham số hóa và Flyway V1–V11.</p>
    <p class="report-p">AI dùng Nova 2 Lite với Guardrails; code kiểm bộ lọc và ghép số liệu từ DB.</p>
    <p class="report-p">CI/CD GitHub Actions kiểm thử, build ARM64, lấy quyền tạm thời từ AWS STS qua OIDC, đẩy ECR và deploy.</p>
  </section>

  <!-- 4. 4. TRIỂN KHAI KỸ THUẬT -->
  <section class="report-section">
    <h2 class="report-h2">4. Triển khai kỹ thuật</h2>
    <p class="report-p">Terraform dựng hạ tầng; Maven wrapper và Flyway quản lý backend/schema; React + TypeScript tạo frontend. Pipeline OIDC build, kiểm thử và triển khai theo nhánh master. Các pha được nhóm theo mốc đã ghi trong repo.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 15%;">Pha</th>
            <th style="width: 25%;">Thời gian 2026</th>
            <th style="width: 60%;">Nội dung thực tế</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>29/10–01/11</td>
            <td>Repo, khung frontend, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>2</td>
            <td>03–10/11</td>
            <td>Thiết kế giao diện, dữ liệu USDA</td>
          </tr>
          <tr>
            <td>3</td>
            <td>11–12/11</td>
            <td>Terraform mạng/RDS/ECR/Cognito/ALB/ECS/CloudFront; OIDC; chạy AWS lần đầu</td>
          </tr>
          <tr>
            <td>4</td>
            <td>13–18/11</td>
            <td>AI, Guardrails, alarm; tìm kiếm, giới hạn tốc độ, phân tích bữa ăn, VNPAY sandbox, giao diện</td>
          </tr>
          <tr>
            <td>5</td>
            <td>20–22/11</td>
            <td>Tokyo, E2E, audit/WAF tùy chọn; AI đủ intent, D32, apply audit và đo chi phí</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 5. 5. KẾ HOẠCH VÀ MỐC TRIỂN KHAI -->
  <section class="report-section">
    <h2 class="report-h2">5. Kế hoạch và mốc triển khai</h2>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Ngày</th>
            <th style="width: 70%;">Mốc thực tế</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>29/10/2026</td>
            <td>Khởi tạo repo</td>
          </tr>
          <tr>
            <td>01/11/2026</td>
            <td>Khung frontend, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>03–06/11/2026</td>
            <td>Thiết kế lại giao diện</td>
          </tr>
          <tr>
            <td>10/11/2026</td>
            <td>Dữ liệu USDA</td>
          </tr>
          <tr>
            <td>11/11/2026</td>
            <td>Terraform mạng, RDS, ECR, Cognito, ALB, ECS và CloudFront</td>
          </tr>
          <tr>
            <td>12/11/2026</td>
            <td>OIDC, ảnh sản phẩm và lần chạy AWS đầu tiên</td>
          </tr>
          <tr>
            <td>13/11/2026</td>
            <td>AI, Guardrails, đánh giá và alarm</td>
          </tr>
          <tr>
            <td>14–15/11/2026</td>
            <td>Tìm kiếm, quên mật khẩu, thống kê, giới hạn tốc độ, Spring Boot 4</td>
          </tr>
          <tr>
            <td>16/11/2026</td>
            <td>Mở rộng catalog, nhãn chế độ ăn, phân tích bữa, VNPAY sandbox</td>
          </tr>
          <tr>
            <td>17–18/11/2026</td>
            <td>Hoàn thiện giao diện</td>
          </tr>
          <tr>
            <td>20/11/2026</td>
            <td>Tokyo, E2E, audit, WAF tùy chọn, nhật ký thanh toán</td>
          </tr>
          <tr>
            <td>21/11/2026</td>
            <td>AI đủ intent, hồ sơ và gợi ý D32</td>
          </tr>
          <tr>
            <td>22/11/2026</td>
            <td>Apply audit và đo chi phí</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 6. 6. ƯỚC TÍNH NGÂN SÁCH -->
  <section class="report-section">
    <h2 class="report-h2">6. Ước tính ngân sách</h2>
    <h3 class="report-h3">Chi phí hạ tầng</h3>
    <p class="report-p">Ước tính USD/tháng, đối chiếu AWS Pricing Calculator ngày 25/11/2026 cho cấu hình Multi-AZ và 2 task (D33), chưa thuế, sai lệch có thể ±10%. Production là phương án tương lai chưa triển khai. Bedrock thực tế gọi tại Tokyo.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 40%;">Dịch vụ / Cấu hình</th>
            <th class="text-right" style="width: 20%;">Demo (~4h/ngày)</th>
            <th class="text-right" style="width: 20%;">24/7 (Pricing Calculator)</th>
            <th class="text-right" style="width: 20%;">Production đề xuất</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td>
            <td class="text-right">~11,6</td>
            <td class="text-right">42,75</td>
            <td class="text-right">~70 (Multi-AZ, db.t4g.small)</td>
          </tr>
          <tr>
            <td>ECS Fargate ARM64, 0,5 vCPU / 1 GB, 2 task</td>
            <td class="text-right">~5,9</td>
            <td class="text-right">35,98</td>
            <td class="text-right">~36–72 (2–4 task, auto scaling)</td>
          </tr>
          <tr>
            <td>Application Load Balancer</td>
            <td class="text-right">~3,1</td>
            <td class="text-right">18,63</td>
            <td class="text-right">~22</td>
          </tr>
          <tr>
            <td>Public IPv4, 4 địa chỉ</td>
            <td class="text-right">~2,4</td>
            <td class="text-right">14,60</td>
            <td class="text-right">~15</td>
          </tr>
          <tr>
            <td>Secrets Manager, 2 secret</td>
            <td class="text-right">0,85</td>
            <td class="text-right">0,85</td>
            <td class="text-right">0,85</td>
          </tr>
          <tr>
            <td>Bedrock (Nova Lite làm giá tham chiếu, Tokyo)</td>
            <td class="text-right">&lt;0,7</td>
            <td class="text-right">0,70</td>
            <td class="text-right">Theo lượng dùng</td>
          </tr>
          <tr>
            <td>CloudFront 1,02 · CloudWatch 1,70 · ECR 0,10 · S3 0,07 · Cognito 0 · CloudTrail 0</td>
            <td class="text-right">~2,9</td>
            <td class="text-right">2,89</td>
            <td class="text-right">~5</td>
          </tr>
          <tr class="total-row">
            <td>Tổng (không WAF)</td>
            <td class="text-right">~27</td>
            <td class="text-right">116,40</td>
            <td class="text-right">~150–190</td>
          </tr>
          <tr>
            <td>WAF (tùy chọn, nhóm Optional)</td>
            <td class="text-right">0</td>
            <td class="text-right">9,60</td>
            <td class="text-right">~10</td>
          </tr>
          <tr class="total-row">
            <td>Tổng có WAF</td>
            <td class="text-right">—</td>
            <td class="text-right">126,00</td>
            <td class="text-right">~160–200</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Cost Explorer ghi nhận 6,44 USD cho 01–21/11/2026, được credit bù toàn bộ. RDS 2,77; ALB 1,29; ECS 1,21; IPv4 0,74; Bedrock 0,21; Secrets Manager 0,20 USD. Các khoản liệt kê là những khoản lớn, không phải phép cộng chi tiết toàn bộ hóa đơn. App chỉ bật khi demo nên không dùng số thực tế này để suy ra mức chạy 24/7. Số thực tế này ghi nhận trước khi bật Multi-AZ.</p>
    <p class="report-p">Bảng giá AWS Pricing Calculator: estimate ngày 25/11/2026. Cột 24/7 lấy đúng số của Calculator (Singapore, riêng Bedrock ở Tokyo). Cột Demo quy đổi từ đó cho khoảng 120 giờ chạy mỗi tháng: các khoản tính theo giờ (RDS instance, Fargate, ALB, IPv4) nhân 120/730, còn ổ đĩa RDS (5,52 USD) và các khoản theo lượng dùng giữ nguyên. Giả định tải: 50 người dùng/tháng, 5 GB CloudFront, khoảng 3.600 câu hỏi AI/tháng (1 câu/phút trong 2 giờ/ngày, 1.500 token vào, 300 token ra). Calculator chưa có Amazon Nova 2 Lite nên dùng Amazon Nova Lite làm giá tham chiếu. Estimate không tính RDS Proxy và Database Insights Advanced vì dự án không dùng.</p>
  </section>

  <!-- 7. 7. ĐÁNH GIÁ RỦI RO -->
  <section class="report-section">
    <h2 class="report-h2">7. Đánh giá rủi ro</h2>
    <h3 class="report-h3">Ma trận rủi ro</h3>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Rủi ro</th>
            <th style="width: 20%;">Ảnh hưởng</th>
            <th style="width: 25%;">Khả năng</th>
            <th style="width: 25%;">Mức độ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chi phí ngoài dự kiến</td>
            <td>Trung bình</td>
            <td>Trung bình</td>
            <td>Trung bình</td>
          </tr>
          <tr>
            <td>Lộ dữ liệu cá nhân</td>
            <td>Cao</td>
            <td>Thấp</td>
            <td>Trung bình</td>
          </tr>
          <tr>
            <td>AI trả lời sai/y tế</td>
            <td>Cao</td>
            <td>Trung bình</td>
            <td>Cao</td>
          </tr>
          <tr>
            <td>Quota Bedrock</td>
            <td>Trung bình</td>
            <td>Cao (đã xảy ra ở Singapore)</td>
            <td>Trung bình</td>
          </tr>
          <tr>
            <td>HTTP từ CloudFront tới ALB</td>
            <td>Trung bình</td>
            <td>Thấp</td>
            <td>Thấp</td>
          </tr>
          <tr>
            <td>Sự cố một Availability Zone</td>
            <td>Cao</td>
            <td>Thấp</td>
            <td>Trung bình (đã giảm nhờ Multi-AZ)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Cách chấm: Ảnh hưởng và Khả năng theo ba mức Thấp / Trung bình / Cao; Mức độ là kết hợp của hai yếu tố, sau khi tính các biện pháp giảm thiểu bên dưới. Rủi ro AI được xếp Cao vì sai số liệu dinh dưỡng hoặc lời khuyên y tế có thể ảnh hưởng tới sức khỏe người dùng, nên được ưu tiên kiểm soát nhiều lớp.</p>
    <h3 class="report-h3">Biện pháp giảm thiểu</h3>
    <p class="report-p">Chi phí: Budgets 100 USD, alarm và up/down. RDS có thể tự bật sau 7 ngày dừng.</p>
    <p class="report-p">Dữ liệu cá nhân: JWT và phân quyền; tránh log PII, dữ liệu cơ thể không gửi model; người dùng tự xóa hồ sơ.</p>
    <p class="report-p">AI: Guardrails, tool chỉ đọc, số liệu từ DB; đánh giá 45 câu ngày 21/11/2026 đạt an toàn 17/17, tra cứu 27/28, ngưỡng 85%. Câu L01 còn dao động.</p>
    <p class="report-p">Quota: Tokyo thay cho Singapore theo D18; theo dõi quyền ApplyGuardrail.</p>
    <p class="report-p">Origin: prefix list CloudFront và header bí mật giảm truy cập trực tiếp; HTTP tới ALB vẫn là hạn chế. HTTPS origin cần domain và chứng chỉ trong tương lai.</p>
    <h3 class="report-h3">Phương án dự phòng</h3>
    <p class="report-p">Khi Bedrock không gọi được, duy trì catalog và luồng mua hàng, trả lỗi AI có kiểm soát. Nếu chi phí tăng, dùng down theo runbook. Khi cần khôi phục DB, làm theo quy trình snapshot trong docs/runbook.md; biên bản diễn tập vẫn chờ chủ repo thực hiện.</p>
  </section>

  <!-- 8. 8. KẾT QUẢ KỲ VỌNG -->
  <section class="report-section">
    <h2 class="report-h2">8. Kết quả kỳ vọng</h2>
    <h3 class="report-h3">Cải thiện kỹ thuật:</h3>
    <p class="report-p">Web React và API trên CloudFront.</p>
    <p class="report-p">Mã nguồn, kiểm thử và workflow OIDC trên GitHub.</p>
    <p class="report-p">Terraform và hướng dẫn vận hành theo buổi demo.</p>
    <p class="report-p">Bộ workshop 7 mục lớn cùng các bước con và báo cáo song ngữ.</p>
    <h3 class="report-h3">Nguồn đối chiếu:</h3>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/architecture.md" target="_blank" rel="noopener noreferrer">docs/architecture.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/decisions.md" target="_blank" rel="noopener noreferrer">docs/decisions.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/api-contract.md" target="_blank" rel="noopener noreferrer">docs/api-contract.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/db-schema.md" target="_blank" rel="noopener noreferrer">docs/db-schema.md</a></p>
    <h3 class="report-h3">Giá trị dài hạn</h3>
    <p class="report-p">Lộ trình production chưa triển khai gồm RDS Multi-AZ, hai task, domain riêng với HTTPS tới ALB và WAF thường trực. Mỗi thay đổi cần plan, đánh giá khả năng chịu lỗi và cập nhật ước tính chi phí.</p>
  </section>
</div>
  `;
}

function getProposalEnHtml() {
  const archImg = 'assets/images/workshop/5.1-overview/aws-architecture.png';

  return `
<div class="tech-report">
  <header>
    <div class="report-eyebrow">Project Proposal</div>
    <p class="report-intro">Architecture design, scope, problem statement, timeline, and cost estimate for the workshop project.</p>
    <h1 class="report-title">Personalized Nutrition E-Commerce Platform on AWS</h1>
    <p class="report-subtitle">Sourced nutrition lookup and shopping on AWS infrastructure</p>
  </header>

  <!-- 1. 1. PROPOSAL SUMMARY -->
  <section class="report-section">
    <h2 class="report-h2">1. Proposal Summary</h2>
    <p class="report-p">The personalized nutrition e-commerce platform on AWS supports food lookup, purchasing, and meal recommendations from sourced data. React invokes Spring Boot via CloudFront and ALB; PostgreSQL stores data, while Bedrock only interprets requests. Products with missing data are excluded during nutrition or allergen filtering. Response metrics are retrieved by code directly from the DB, combined with demo-session-based operation to control costs.</p>
  </section>

  <!-- 2. 2. PROBLEM STATEMENT -->
  <section class="report-section">
    <h2 class="report-h2">2. Problem Statement</h2>
    <h3 class="report-h3">What is the problem?</h3>
    <p class="report-p">Buyers struggle to compare food products when nutrition and allergen data are inconsistent. AI responses may contain unfounded figures if the model generates content autonomously.</p>
    <h3 class="report-h3">Solution</h3>
    <p class="report-p">Buyers struggle to cross-reference nutrition and allergen data across products. Text-generating chatbots can produce unfounded figures. The MVP includes a catalog of 152 USDA products, accounts, filtering by nutrition, 9 allergens, and 6 diet labels; meal analysis; read-only AI lookup; shopping cart, ordering, product management, images, orders, analytics, and payment logs. COD and VNPAY sandbox are within scope.</p>
    <p class="report-p">D32 adds profiles and single-meal recommendations consisting of a protein dish, vegetables/fruit, and carbohydrates. Targets are calculated using Mifflin-St Jeor × activity level. Applicable only for ages 18–65, BMI 17–35, excluding pregnancy, lactation, and conditions requiring medical supervision. There are no real payments, automated refunds, or medical advice. Identity is extracted from JWT; inventory deduction uses conditional UPDATE within transactions.</p>
    <h3 class="report-h3">Benefits and Return on Investment</h3>
    <p class="report-p">Buyers look up information from the DB, filter according to needs, and view data limitations. Store owners manage catalog, images, orders, and payment logs within the same application. Cost Explorer recorded 6.44 USD for Nov 01–21, 2026, fully covered by credits. There are no revenue or labor-saving figures yet to calculate financial ROI.</p>
  </section>

  <!-- 3. 3. SOLUTION ARCHITECTURE -->
  <section class="report-section">
    <h2 class="report-h2">3. Solution Architecture</h2>
    <h3 class="report-h3">AWS architecture reference</h3>
    <p class="report-p">Click on the image to expand / interactive zoom</p>
    <div class="report-figure">
      <div class="report-figure-img-wrap" onclick="openBlogImageModal('${archImg}', 'AWS Architecture Diagram')" title="Click to zoom">
        <img src="${archImg}" alt="AWS Architecture Diagram" class="report-figure-img" loading="lazy" />
      </div>
      <div class="report-figure-caption">AWS architecture diagram drawn on draw.io using AWS Architecture Icons, updated with Multi-AZ and AWS STS on Nov 25, 2026</div>
    </div>
    <p class="report-p">From Nov 22, 2026 (D33), the dev environment runs 2 ECS tasks, one task per Availability Zone, and RDS in Multi-AZ mode with a standby replica in the second AZ. Reboot with failover drill on Nov 22 switched the primary AZ from ap-southeast-1a to ap-southeast-1b in about 20–45 seconds; API experienced roughly half a minute of disruption then automatically recovered, with zero data loss.</p>
    <h3 class="report-h3">AWS services used</h3>
    <p class="report-p">CloudFront + S3 — React SPA and images via OAC; Function for path rewrites; two private buckets.</p>
    <p class="report-p">ALB + ECS Fargate + ECR — ALB accepts CloudFront + secret header; Spring Boot 4 / Java 21, ARM64, 0.5 vCPU / 1 GB, 2 tasks across 2 AZs.</p>
    <p class="report-p">RDS PostgreSQL + Secrets Manager — db.t4g.micro, 20 GB gp3, Multi-AZ (standby in the second AZ), private subnet, encrypted; Flyway V1–V11.</p>
    <p class="report-p">Cognito — JWT sub and cognito:groups; USER / ADMIN.</p>
    <p class="report-p">Bedrock + Guardrails — Nova 2 Lite in Tokyo; read-only tools, metrics retrieved by code from the DB.</p>
    <p class="report-p">CloudWatch + SNS + Budgets — 14-day logs, 7 alarms, email alerts; 100 USD budget.</p>
    <p class="report-p">CloudTrail + S3 audit + WAF — Audit and ALB logs retained for 30 days; WAF only enabled during demo; AWS-managed KMS.</p>
    <p class="report-p">Terraform + IAM + STS + GitHub Actions — S3 state use_lockfile; SSO, boundary; CI/CD via OIDC, AWS STS grants temporary credentials (AssumeRoleWithWebIdentity), no static access keys stored.</p>
    <p class="report-p">Application deployed in ap-southeast-1, prefix nutrition-dev, single dev environment. D15 places ECS in public subnets with public IP to avoid NAT costs, while RDS remains private. D17 chooses a single environment to fit the capstone project. D18 shifts Bedrock and Guardrail invocations to ap-northeast-1 because Singapore quota for the account is 0; profile jp.amazon.nova-2-lite-v1:0. D24/D31 restricts model to searchProducts with search, facts, compare, plan intents; metrics are assembled by the backend. CloudFront → ALB currently uses HTTP due to lack of a custom domain.</p>
    <h3 class="report-h3">Component design</h3>
    <p class="report-p">Frontend React + TypeScript displays catalog, shopping cart, profiles, recommendations, and admin dashboard.</p>
    <p class="report-p">Backend Spring Boot 4 / Java 21: catalog manages lookups; commerce handles cart/orders; payments verifies IPN; ai extracts intent; admin provides management APIs; profile calculates targets and recommendations.</p>
    <p class="report-p">Database PostgreSQL uses parameterized SQL and Flyway V1–V11.</p>
    <p class="report-p">AI uses Nova 2 Lite with Guardrails; code validates filters and aggregates metrics from DB.</p>
    <p class="report-p">CI/CD GitHub Actions runs tests, builds ARM64, obtains temporary credentials from AWS STS via OIDC, pushes to ECR, and deploys.</p>
  </section>

  <!-- 4. 4. TECHNICAL IMPLEMENTATION -->
  <section class="report-section">
    <h2 class="report-h2">4. Technical Implementation</h2>
    <p class="report-p">Terraform provisions infrastructure; Maven wrapper and Flyway manage backend/schema; React + TypeScript builds frontend. OIDC pipeline builds, tests, and deploys along the master branch. Phases are grouped according to milestones recorded in the repository.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 15%;">Phase</th>
            <th style="width: 25%;">2026 Timeline</th>
            <th style="width: 60%;">Actual Scope</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Oct 29–Nov 01</td>
            <td>Repository, frontend skeleton, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nov 03–10</td>
            <td>UI design, USDA data</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nov 11–12</td>
            <td>Terraform network/RDS/ECR/Cognito/ALB/ECS/CloudFront; OIDC; first AWS run</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nov 13–18</td>
            <td>AI, Guardrails, alarms; search, rate limiting, meal analysis, VNPAY sandbox, UI</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nov 20–22</td>
            <td>Tokyo, E2E, audit/optional WAF; AI full intent, D32, audit apply and cost measurement</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 5. 5. IMPLEMENTATION PLAN AND MILESTONES -->
  <section class="report-section">
    <h2 class="report-h2">5. Implementation Plan and Milestones</h2>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Date</th>
            <th style="width: 70%;">Actual Milestone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>29/10/2026</td>
            <td>Repository initialization</td>
          </tr>
          <tr>
            <td>01/11/2026</td>
            <td>Frontend skeleton, catalog backend, Cognito</td>
          </tr>
          <tr>
            <td>03–06/11/2026</td>
            <td>UI redesign</td>
          </tr>
          <tr>
            <td>10/11/2026</td>
            <td>USDA data</td>
          </tr>
          <tr>
            <td>11/11/2026</td>
            <td>Terraform networking, RDS, ECR, Cognito, ALB, ECS, and CloudFront</td>
          </tr>
          <tr>
            <td>12/11/2026</td>
            <td>OIDC, product images, and first AWS run</td>
          </tr>
          <tr>
            <td>13/11/2026</td>
            <td>AI, Guardrails, evaluation, and alarms</td>
          </tr>
          <tr>
            <td>14–15/11/2026</td>
            <td>Search, password reset, statistics, rate limiting, Spring Boot 4</td>
          </tr>
          <tr>
            <td>16/11/2026</td>
            <td>Catalog expansion, diet labels, meal analysis, VNPAY sandbox</td>
          </tr>
          <tr>
            <td>17–18/11/2026</td>
            <td>UI finalization</td>
          </tr>
          <tr>
            <td>20/11/2026</td>
            <td>Tokyo, E2E, audit, optional WAF, payment logs</td>
          </tr>
          <tr>
            <td>21/11/2026</td>
            <td>AI full intent, profiles, and D32 recommendations</td>
          </tr>
          <tr>
            <td>22/11/2026</td>
            <td>Audit apply and cost measurement</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 6. 6. BUDGET ESTIMATE -->
  <section class="report-section">
    <h2 class="report-h2">6. Budget Estimate</h2>
    <h3 class="report-h3">Infrastructure cost</h3>
    <p class="report-p">Estimated USD/month, cross-referenced with AWS Pricing Calculator on Nov 25, 2026 for Multi-AZ configuration and 2 tasks (D33), exclusive of tax, variance may be ±10%. Production is a future proposal not yet deployed. Bedrock actually invoked in Tokyo.</p>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 40%;">Service / Configuration</th>
            <th class="text-right" style="width: 20%;">Demo (~4h/day)</th>
            <th class="text-right" style="width: 20%;">24/7 (Pricing Calculator)</th>
            <th class="text-right" style="width: 20%;">Proposed Production</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RDS PostgreSQL db.t4g.micro, Multi-AZ, 20 GB gp3</td>
            <td class="text-right">~11.6</td>
            <td class="text-right">42.75</td>
            <td class="text-right">~70 (Multi-AZ, db.t4g.small)</td>
          </tr>
          <tr>
            <td>ECS Fargate ARM64, 0.5 vCPU / 1 GB, 2 tasks</td>
            <td class="text-right">~5.9</td>
            <td class="text-right">35.98</td>
            <td class="text-right">~36–72 (2–4 tasks, auto scaling)</td>
          </tr>
          <tr>
            <td>Application Load Balancer</td>
            <td class="text-right">~3.1</td>
            <td class="text-right">18.63</td>
            <td class="text-right">~22</td>
          </tr>
          <tr>
            <td>Public IPv4, 4 addresses</td>
            <td class="text-right">~2.4</td>
            <td class="text-right">14.60</td>
            <td class="text-right">~15</td>
          </tr>
          <tr>
            <td>Secrets Manager, 2 secrets</td>
            <td class="text-right">0.85</td>
            <td class="text-right">0.85</td>
            <td class="text-right">0.85</td>
          </tr>
          <tr>
            <td>Bedrock (Nova Lite as pricing reference, Tokyo)</td>
            <td class="text-right">&lt;0.7</td>
            <td class="text-right">0.70</td>
            <td class="text-right">Based on usage</td>
          </tr>
          <tr>
            <td>CloudFront 1.02 · CloudWatch 1.70 · ECR 0.10 · S3 0.07 · Cognito 0 · CloudTrail 0</td>
            <td class="text-right">~2.9</td>
            <td class="text-right">2.89</td>
            <td class="text-right">~5</td>
          </tr>
          <tr class="total-row">
            <td>Total (without WAF)</td>
            <td class="text-right">~27</td>
            <td class="text-right">116.40</td>
            <td class="text-right">~150–190</td>
          </tr>
          <tr>
            <td>WAF (optional, Optional group)</td>
            <td class="text-right">0</td>
            <td class="text-right">9.60</td>
            <td class="text-right">~10</td>
          </tr>
          <tr class="total-row">
            <td>Total with WAF</td>
            <td class="text-right">—</td>
            <td class="text-right">126.00</td>
            <td class="text-right">~160–200</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Cost Explorer recorded 6.44 USD for Nov 01–21, 2026, fully covered by credits. RDS 2.77; ALB 1.29; ECS 1.21; IPv4 0.74; Bedrock 0.21; Secrets Manager 0.20 USD. The listed items represent the major charges, not an itemized sum of the entire invoice. Since the app is only turned on during demo sessions, these actual numbers must not be used to extrapolate 24/7 operation. These actual figures were recorded before enabling Multi-AZ.</p>
    <p class="report-p">AWS Pricing Calculator estimate dated Nov 25, 2026. The 24/7 column uses the exact figures from Calculator (Singapore, except Bedrock in Tokyo). The Demo column converts from that for approximately 120 operating hours per month: hourly charges (RDS instance, Fargate, ALB, IPv4) multiplied by 120/730, while RDS storage (5.52 USD) and usage-based items remain unchanged. Load assumptions: 50 users/month, 5 GB CloudFront, approximately 3,600 AI queries/month (1 query/minute for 2 hours/day, 1,500 input tokens, 300 output tokens). Since the Calculator did not yet list Amazon Nova 2 Lite, Amazon Nova Lite was used as the pricing reference. The estimate excludes RDS Proxy and Database Insights Advanced as they are not used by the project.</p>
  </section>

  <!-- 7. 7. RISK ASSESSMENT -->
  <section class="report-section">
    <h2 class="report-h2">7. Risk Assessment</h2>
    <h3 class="report-h3">Risk matrix</h3>
    <div class="report-table-wrapper">
      <table class="report-table">
        <thead>
          <tr>
            <th style="width: 30%;">Risk</th>
            <th style="width: 20%;">Impact</th>
            <th style="width: 25%;">Probability</th>
            <th style="width: 25%;">Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unexpected cost</td>
            <td>Medium</td>
            <td>Medium</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Personal data exposure</td>
            <td>High</td>
            <td>Low</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>AI incorrect/medical response</td>
            <td>High</td>
            <td>Medium</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Bedrock quota</td>
            <td>Medium</td>
            <td>High (already occurred in Singapore)</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>HTTP from CloudFront to ALB</td>
            <td>Medium</td>
            <td>Low</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Single Availability Zone failure</td>
            <td>High</td>
            <td>Low</td>
            <td>Medium (reduced via Multi-AZ)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="report-p">Scoring methodology: Impact and Probability are evaluated across three levels: Low / Medium / High; Level is a combination of the two factors, after factoring in mitigation measures below. AI risk is classified as High because incorrect nutrition figures or medical advice can affect user health, thus prioritized for multi-layered controls.</p>
    <h3 class="report-h3">Mitigation measures</h3>
    <p class="report-p">Cost: 100 USD Budgets, alarms, and up/down scripts. RDS may automatically turn back on after 7 days stopped.</p>
    <p class="report-p">Personal data: JWT and authorization; avoid logging PII, physical biometric data is not sent to the model; users can delete their own profiles.</p>
    <p class="report-p">AI: Guardrails, read-only tools, metrics from DB; evaluation of 45 queries on Nov 21, 2026 achieved 17/17 safety, 27/28 lookup, 85% threshold. Query L01 still fluctuates.</p>
    <p class="report-p">Quota: Tokyo replaces Singapore per D18; monitor ApplyGuardrail permissions.</p>
    <p class="report-p">Origin: CloudFront prefix list and secret header reduce direct access; HTTP to ALB remains a constraint. HTTPS origin will require a custom domain and certificate in the future.</p>
    <h3 class="report-h3">Contingency plan</h3>
    <p class="report-p">When Bedrock is unreachable, maintain catalog and shopping flows, returning controlled AI errors. If costs rise, scale down following the runbook. When DB restoration is needed, follow the snapshot procedure in docs/runbook.md; drill record still awaits repository owner execution.</p>
  </section>

  <!-- 8. 8. EXPECTED OUTCOMES -->
  <section class="report-section">
    <h2 class="report-h2">8. Expected Outcomes</h2>
    <h3 class="report-h3">Technical improvements:</h3>
    <p class="report-p">React Web and API on CloudFront.</p>
    <p class="report-p">Source code, tests, and OIDC workflow on GitHub.</p>
    <p class="report-p">Terraform and demo-session operational guidelines.</p>
    <p class="report-p">Workshop package with 7 major sections, sub-steps, and bilingual report.</p>
    <h3 class="report-h3">Reference sources:</h3>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/architecture.md" target="_blank" rel="noopener noreferrer">docs/architecture.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/decisions.md" target="_blank" rel="noopener noreferrer">docs/decisions.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/api-contract.md" target="_blank" rel="noopener noreferrer">docs/api-contract.md</a></p>
    <p class="report-p"><a href="https://github.com/trungnguyen-VNTN/nutrition-ecommerce/blob/master/docs/db-schema.md" target="_blank" rel="noopener noreferrer">docs/db-schema.md</a></p>
    <h3 class="report-h3">Long-term value</h3>
    <p class="report-p">The yet-to-be-deployed production roadmap includes RDS Multi-AZ, two tasks, a custom domain with HTTPS to ALB, and persistent WAF. Every change requires planning, fault-tolerance assessment, and updated cost estimates.</p>
  </section>
</div>
  `;
}

function renderProposalView() {
  const container = document.getElementById('proposal-content-container');
  if (!container) return;

  const lang = (window.app && window.app.currentLang) || 'vi';
  container.innerHTML = lang === 'en' ? getProposalEnHtml() : getProposalViHtml();
}

function renderProposalInputs() {
  renderProposalView();
}

function setupProposal() {
  renderProposalView();
}

// ==========================================
// 9. 3. BLOGS POSTED MODULE
// ==========================================
function renderBlogsList() {
  const container = document.getElementById('blogs-list-container');
  if (!container) return;

  const lang = app.currentLang;
  const blogs = app.data.blogs[lang] || app.data.blogs.vi;

  container.innerHTML = blogs.map(b => {
    const isS3Express = b.id === 'blog-1' || b.id === 'blog-4' || b.slug === 's3-express-one-zone';

    if (isS3Express) {
      const fbUrl = b.facebookUrl || b.postUrl || b.link || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/';
      const excerpt = lang === 'vi'
        ? "Trong các hệ thống AI/ML, việc xử lý hàng triệu hình ảnh hoặc tệp dữ liệu từ Amazon S3 thường gặp I/O Bottleneck khiến CPU/GPU phải nhàn rỗi chờ dữ liệu. Amazon S3 Express One Zone mang lại độ trễ sub-10ms với Directory Bucket trong cùng 1 AZ. Tuy nhiên, theo định luật Amdahl, tối ưu 10x I/O chỉ giúp tổng thời gian hoàn thành tác vụ giảm 18% nếu hệ thống bị nghẽn ở compute."
        : "In modern AI/ML systems, continuously fetching millions of images from S3 often creates I/O bottlenecks where expensive compute sits idle. Amazon S3 Express One Zone delivers single-digit millisecond latency with Directory Buckets in a single AZ. However, according to Amdahl's Law, a 10x I/O speedup only reduces total execution time by 18% if the workload is compute-heavy.";

      return `
        <div class="blog-card-featured" id="${escapeHtml(b.id)}">
          <div class="blog-card-featured-meta">
            <span>AWS / Cloud Computing</span>
            <span>•</span>
            <span>${escapeHtml(b.date || '18/10/2026')}</span>
          </div>

          <h3 class="blog-featured-title" onclick="navigateTo('blogs/s3-express-one-zone')">
            ${escapeHtml(b.title)}
          </h3>

          <div style="margin: 0 0 14px 0;">
            <a href="${escapeHtml(fbUrl)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="minimal-ref-link"
               style="font-size:13.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
              <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="blog-featured-grid-preview">
            <div class="blog-featured-img-preview" onclick="openBlogImageModal('${escapeHtml(b.image || 'assets/images/s3-express-one-zone-architecture.png')}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
              <img src="${escapeHtml(b.image || 'assets/images/s3-express-one-zone-architecture.png')}" alt="${escapeHtml(b.title)}" loading="lazy">
            </div>

            <div>
              <p class="blog-featured-excerpt">${escapeHtml(excerpt)}</p>
              <ul class="blog-featured-bullets">
                <li>${lang === 'vi' ? '<strong>Hiệu năng Sub-10ms:</strong> Directory Bucket trong cùng 1 AZ với máy chủ EC2/GPU.' : '<strong>Sub-10ms Latency:</strong> Single-AZ Directory Bucket co-located with compute.'}</li>
                <li>${lang === 'vi' ? '<strong>Phân tích Định luật Amdahl:</strong> Tối ưu 10x I/O chỉ rút ngắn 18% tổng thời gian nếu compute chiếm 80%.' : '<strong>Amdahl\'s Law Analysis:</strong> 10x storage speedup yields only 18% total system gain.'}</li>
                <li>${lang === 'vi' ? '<strong>Kiến trúc lưu trữ hai lớp:</strong> Kết hợp S3 Standard (Data Lake) và S3 Express One Zone (Active Working Set).' : '<strong>Two-Tier Architecture:</strong> Blending S3 Standard (Data Lake) with S3 Express (Active Working Set).'}</li>
              </ul>
            </div>
          </div>

          <div class="blog-featured-actions">
            <button type="button" class="btn-minimal-read" onclick="navigateTo('blogs/s3-express-one-zone')">
              <span>${lang === 'vi' ? 'Đọc bài viết →' : 'Read Article →'}</span>
            </button>
            <a href="${escapeHtml(fbUrl)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-minimal-outline" 
               style="text-decoration:none;">
              <span>${lang === 'vi' ? 'Xem bài viết trên AWS Study Group VN' : 'View post on AWS Study Group VN'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    const isEventDriven = b.id === 'blog-2' || b.id === 'blog-5' || b.slug === 'aws-event-driven-architecture';

    if (isEventDriven) {
      const fbUrl = b.facebookUrl || b.postUrl || b.link || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/';
      const excerpt = lang === 'vi'
        ? "Trong quá trình nghiên cứu kiến trúc Event-Driven trên AWS kết hợp Amazon S3, EventBridge, SQS, Lambda và DynamoDB: Một hệ thống có thể xử lý tất cả sự kiện thành công 100% nhưng vẫn tạo ra kết quả sai do Race Condition. Phân tích nguyên nhân tại sao Idempotency và SQS FIFO chưa đủ, và đề xuất mô hình giải pháp kết hợp S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Write và Reconciliation worker."
        : "In AWS Event-Driven Architectures combining Amazon S3, EventBridge, SQS, Lambda, and DynamoDB: a system can process all events with 100% success yet produce incorrect business state due to Race Conditions. An investigation into why Idempotency and SQS FIFO are not enough, proposing S3 Versioning, S3 Sequencer, Immutable Output, DynamoDB Conditional Writes, and Reconciliation.";

      return `
        <div class="blog-card-featured" id="${escapeHtml(b.id)}">
          <div class="blog-card-featured-meta">
            <span>AWS / Distributed Systems / Architecture</span>
            <span>•</span>
            <span>${escapeHtml(b.date || '04/11/2026')}</span>
          </div>

          <h3 class="blog-featured-title" onclick="navigateTo('blogs/aws-event-driven-architecture')">
            ${escapeHtml(b.title)}
          </h3>

          <div style="margin: 0 0 14px 0;">
            <a href="${escapeHtml(fbUrl)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="minimal-ref-link"
               style="font-size:13.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
              <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="blog-featured-grid-preview">
            <div class="blog-featured-img-preview" onclick="openBlogImageModal('${escapeHtml(b.image || 'assets/images/aws-event-driven-architecture.png')}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
              <img src="${escapeHtml(b.image || 'assets/images/aws-event-driven-architecture.png')}" alt="${escapeHtml(b.title)}" loading="lazy">
            </div>

            <div>
              <p class="blog-featured-excerpt">${escapeHtml(excerpt)}</p>
              <ul class="blog-featured-bullets">
                <li>${lang === 'vi' ? '<strong>Race Condition trong At-Least-Once:</strong> Thời gian thực thi Lambda không đồng đều khiến sự kiện cũ ghi đè dữ liệu mới.' : '<strong>Race Condition in At-Least-Once:</strong> Varying Lambda runtimes cause stale events to overwrite newer data.'}</li>
                <li>${lang === 'vi' ? '<strong>Hạn chế của Idempotency & SQS:</strong> Không thể đảo ngược thứ tự nếu sự kiện đã bị đảo lộn trước khi vào hàng đợi (vấn đề TOCTOU).' : '<strong>Limits of Idempotency & SQS:</strong> Cannot restore ordering once events arrive out-of-sequence (TOCTOU hazard).'}</li>
                <li>${lang === 'vi' ? '<strong>Kiến trúc bảo toàn tính đúng đắn:</strong> Kết hợp S3 Versioning, S3 Sequencer, Immutable Output và DynamoDB Conditional Write.' : '<strong>Correctness-First Architecture:</strong> S3 Versioning, S3 Sequencer, Immutable Output, and DynamoDB Conditional Writes.'}</li>
              </ul>
            </div>
          </div>

          <div class="blog-featured-actions">
            <button type="button" class="btn-minimal-read" onclick="navigateTo('blogs/aws-event-driven-architecture')">
              <span>${lang === 'vi' ? 'Đọc bài viết →' : 'Read Article →'}</span>
            </button>
            <a href="${escapeHtml(fbUrl)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-minimal-outline" 
               style="text-decoration:none;">
              <span>${lang === 'vi' ? 'Xem bài viết trên AWS Study Group VN' : 'View post on AWS Study Group VN'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    const isIdentityContainment = b.id === 'blog-3' || b.slug === 'aws-ec2-identity-containment' || (b.title && b.title.includes('CÔ LẬP EC2')) || (b.title && b.title.includes('EC2 ISOLATION'));

    if (isIdentityContainment) {
      const fbUrl = b.facebookUrl || b.postUrl || b.link || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/';
      const excerpt = lang === 'vi'
        ? "Điều gì sẽ xảy ra nếu một EC2 instance đã bị cô lập khỏi hệ thống mạng, nhưng kẻ tấn công vẫn có thể truy cập các tài nguyên AWS? Phân tích sự khác biệt cốt lõi giữa Network Containment và Identity Containment: Security Group không thu hồi IAM Session, IMDSv2 không bảo vệ credentials khi máy chủ bị thực thi mã từ xa. Đề xuất quy trình Automated Incident Response kết hợp GuardDuty, EventBridge, Lambda runbook và điều kiện aws:EC2InstanceSourceVPC."
        : "What happens if an EC2 instance is completely isolated from the network, yet an attacker can still access your AWS resources? An in-depth analysis of Network Containment vs Identity Containment: why Security Groups do not terminate active IAM sessions, and how IMDSv2 falls short after remote code execution. Architecting automated incident response combining GuardDuty, EventBridge, Lambda runbooks, and aws:EC2InstanceSourceVPC condition keys.";

      return `
        <div class="blog-card-featured" id="${escapeHtml(b.id)}">
          <div class="blog-card-featured-meta">
            <span>AWS Study Group</span>
            <span>•</span>
            <span>${escapeHtml(b.date || '15/11/2026')}</span>
          </div>

          <h3 class="blog-featured-title" onclick="navigateTo('blogs/aws-ec2-identity-containment')">
            ${escapeHtml(b.title)}
          </h3>

          <div style="font-size:14px; font-weight:600; color:#555555; margin:-4px 0 8px 0; font-style:italic;">
            ${escapeHtml(b.subtitle || 'Beyond Network Isolation: Rethinking Identity Containment on AWS')}
          </div>

          <div style="margin: 0 0 14px 0;">
            <a href="${escapeHtml(fbUrl)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="minimal-ref-link"
               style="font-size:13.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
              <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="blog-featured-grid-preview">
            <div class="blog-featured-img-preview" onclick="openBlogImageModal('${escapeHtml(b.image || 'assets/images/aws-ec2-identity-containment-architecture.png')}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
              <img src="${escapeHtml(b.image || 'assets/images/aws-ec2-identity-containment-architecture.png')}" alt="${escapeHtml(b.title)}" loading="lazy">
            </div>

            <div>
              <p class="blog-featured-excerpt">${escapeHtml(excerpt)}</p>
              <ul class="blog-featured-bullets">
                <li>${lang === 'vi' ? '<strong>Network Containment ≠ Identity Containment:</strong> Cô lập mạng qua Security Group không thu hồi session IAM đang hoạt động.' : '<strong>Network Containment ≠ Identity Containment:</strong> Network isolation via Security Groups does not revoke active IAM sessions.'}</li>
                <li>${lang === 'vi' ? '<strong>Ràng buộc ngữ cảnh Credentials:</strong> Sử dụng VPC Condition Keys (aws:EC2InstanceSourceVPC) để vô hiệu hóa credentials bị lộ ngoài VPC.' : '<strong>Credential Context Enforcement:</strong> Restricting access with VPC Condition Keys (aws:EC2InstanceSourceVPC) renders stolen tokens useless out-of-context.'}</li>
                <li>${lang === 'vi' ? '<strong>Quy trình phản ứng 3 lớp:</strong> Tự động hóa kết hợp Quarantine Security Group, thay thế Instance Profile và thu hồi Active IAM Sessions.' : '<strong>Three-Tier Containment Workflow:</strong> Automating Network Quarantine, Instance Profile swap, and IAM Session Revocation.'}</li>
              </ul>
            </div>
          </div>

          <div class="blog-featured-actions">
            <button type="button" class="btn-minimal-read" onclick="navigateTo('blogs/aws-ec2-identity-containment')">
              <span>${lang === 'vi' ? 'Đọc bài viết →' : 'Read Article →'}</span>
            </button>
            <a href="${escapeHtml(fbUrl)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-minimal-outline" 
               style="text-decoration:none;">
              <span>${lang === 'vi' ? 'Xem bài viết trên AWS Study Group VN' : 'View post on AWS Study Group VN'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
    }

    const isLongSnippet = (b.snippet || '').length > 360;
    const imgHtml = b.image ? `
      <div class="blog-img-box" onclick="openBlogImageModal('${escapeHtml(b.image)}', '${escapeHtml(b.title)}')" title="${t('zoomDiagramTooltip')}">
        <img src="${escapeHtml(b.image)}" alt="${escapeHtml(b.title)}" loading="lazy">
        <div class="blog-img-overlay">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          <span>${t('zoomDiagramTooltip')}</span>
        </div>
      </div>
    ` : '';

    return `
      <div class="blog-card" id="${escapeHtml(b.id)}">
        <div class="blog-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="badge badge-purple">AWS Study Group</span>
            <span style="font-size:12px; color:var(--text-subtle);">${t('publishedDateLabel')} ${escapeHtml(b.date || '-')}</span>
          </div>
          <h3>${escapeHtml(b.title)}</h3>
        </div>
        ${imgHtml}
        <div class="blog-snippet-wrap">
          <div id="wrap-${escapeHtml(b.id)}" class="${isLongSnippet ? 'blog-snippet-collapsed' : ''}">
            <p class="blog-snippet" id="snippet-${escapeHtml(b.id)}">${escapeHtml(b.snippet)}</p>
          </div>
          ${isLongSnippet ? `
            <button type="button" class="blog-toggle-snippet-btn" id="btn-toggle-${escapeHtml(b.id)}" onclick="toggleBlogSnippet('${escapeHtml(b.id)}')">
              <span>${t('btnExpandSnippet')}</span>
            </button>
          ` : ''}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #F1F5F9; padding-top:12px; margin-top:auto;">
          <a href="${escapeHtml(b.url)}" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:12px; padding:6px 14px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${t('readArticleLink')}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function toggleBlogSnippet(id) {
  const wrap = document.getElementById('wrap-' + id);
  const btn = document.getElementById('btn-toggle-' + id);
  if (!wrap || !btn) return;
  const isCollapsed = wrap.classList.contains('blog-snippet-collapsed');
  if (isCollapsed) {
    wrap.classList.remove('blog-snippet-collapsed');
    btn.innerHTML = `<span>${t('btnCollapseSnippet')}</span>`;
  } else {
    wrap.classList.add('blog-snippet-collapsed');
    btn.innerHTML = `<span>${t('btnExpandSnippet')}</span>`;
  }
}

function openBlogImageModal(src, title) {
  const modal = document.getElementById('blog-image-modal');
  const preview = document.getElementById('blog-image-modal-preview');
  const titleEl = document.getElementById('blog-image-modal-title');
  const descEl = document.getElementById('blog-image-modal-desc');
  const openTab = document.getElementById('btn-blog-img-open-tab');
  if (!modal || !preview) return;

  preview.src = src;
  if (titleEl) titleEl.textContent = title || t('diagModalTitle');
  if (descEl) descEl.textContent = t('diagModalDesc');
  if (openTab) {
    openTab.href = src;
    openTab.textContent = t('btnOpenTab');
  }
  modal.classList.add('active');
}

function closeBlogImageModal() {
  const modal = document.getElementById('blog-image-modal');
  if (modal) modal.classList.remove('active');
}

function setupBlogs() {
  // Blog image modal event listeners
  const btnCloseModal = document.getElementById('btn-close-blog-img-modal');
  const btnCloseBtn = document.getElementById('btn-close-blog-img-btn');
  const modal = document.getElementById('blog-image-modal');

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeBlogImageModal);
  if (btnCloseBtn) btnCloseBtn.addEventListener('click', closeBlogImageModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBlogImageModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeBlogImageModal();
    }
  });
}

// ==========================================
// 9.1 DEDICATED TECHNICAL BLOG ARTICLES
// ==========================================
const BLOG_ARTICLES = {
  's3-express-one-zone': {
    vi: {
      category: "AWS / Cloud Computing",
      date: "18/10/2026",
      title: "AMAZON S3 EXPRESS ONE ZONE – NHANH HƠN TỚI 10 LẦN, NHƯNG HỆ THỐNG CÓ THỰC SỰ HIỆU QUẢ HƠN?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
      leadSummary: "Trong các hệ thống AI/ML và Data Analytics hiện đại, việc xử lý hàng triệu hình ảnh hoặc tệp dữ liệu đòi hỏi ứng dụng liên tục truy xuất dữ liệu từ Amazon S3. Tuy nhiên, khi tốc độ đọc dữ liệu không theo kịp khả năng xử lý của CPU/GPU, hệ thống dễ rơi vào tình trạng I/O Bottleneck – tài nguyên tính toán đắt đỏ phải nhàn rỗi chờ dữ liệu, kéo dài thời gian thực thi và làm tăng chi phí hạ tầng. Để giải quyết bài toán này, AWS cung cấp Amazon S3 Express One Zone – một storage class được tối ưu hóa chuyên biệt cho các ứng dụng đòi hỏi độ trễ truy cập cực thấp.",
      coverImage: "assets/images/s3-express-one-zone-architecture.png",
      coverCaption: "Hình 1: Mô hình kiến trúc Amazon S3 Express One Zone với Directory Bucket đặt cùng Availability Zone với cụm máy chủ EC2 / GPU.",
      sections: [
        {
          id: "section-1",
          num: "1",
          title: "1. Amazon S3 Express One Zone là gì?",
          paragraphs: [
            "Amazon S3 Express One Zone là storage class hiệu năng cao nhất của dịch vụ lưu trữ đối tượng Amazon S3, được thiết kế chuyên biệt để phục vụ các ứng dụng phân tích dữ liệu chuyên sâu và huấn luyện mô hình học máy (Machine Learning). Thay vì sử dụng General Purpose Bucket như thông thường, S3 Express One Zone hoạt động dựa trên cấu trúc Directory Bucket hoàn toàn mới.",
            "Điểm khác biệt cốt lõi nằm ở vị trí địa lý của dữ liệu: Thay vì phân tán và nhân bản dữ liệu qua tối thiểu 3 Availability Zones (AZ) như S3 Standard, S3 Express One Zone lưu trữ dữ liệu tập trung trong một Availability Zone (Single-AZ) duy nhất do người dùng chỉ định. Điều này cho phép bạn đặt tài nguyên tính toán (chẳng hạn như Amazon EC2, Amazon EKS, hay AWS SageMaker GPU instances) trong cùng AZ với dữ liệu lưu trữ, loại bỏ hoàn toàn độ trễ truyền tải qua mạng liên vùng và phí inter-AZ data transfer.",
            "Theo công bố chính thức từ AWS, S3 Express One Zone có khả năng cung cấp độ trễ truy xuất dữ liệu ở mức một chữ số mili-giây (single-digit millisecond latency – thông thường dao động từ 1ms đến 3ms) và tốc độ truy cập nhanh hơn tới 10 lần so với S3 Standard trong điều kiện tải cao và tần suất I/O liên tục."
          ],
          callout: {
            title: "Khái niệm kỹ thuật trọng tâm:",
            items: [
              "<strong>Directory Bucket:</strong> Kiến trúc bucket mới tối ưu cho tổ chức dạng cây phân cấp, tăng tốc độ tra cứu metadata gấp nhiều lần so với bucket truyền thống.",
              "<strong>Single Availability Zone (Single-AZ):</strong> Giới hạn dữ liệu trong 1 AZ để đạt độ trễ tiệm cận phần cứng mạng nội bộ của trung tâm dữ liệu.",
              "<strong>Fast Session-Based Authentication:</strong> Cơ chế xác thực thông qua phiên ngắn hạn giúp giảm thiểu độ trễ handshake của từng lệnh đọc/ghi đối tượng."
            ]
          }
        },
        {
          id: "section-2",
          num: "2",
          title: "2. Ưu điểm và hạn chế",
          introText: "Bất kỳ quyết định kiến trúc nào trên nền tảng đám mây cũng là sự đánh đổi (Trade-off). Để ứng dụng hiệu quả S3 Express One Zone, kiến trúc sư giải pháp cần nhìn nhận đa chiều giữa lợi thế hiệu năng và những ranh giới kỹ thuật:",
          advantages: [
            "<strong>Giảm độ trễ truy cập dữ liệu cực thấp (Sub-10ms Latency):</strong> Cung cấp tốc độ đọc/ghi dữ liệu liên tục ở mức một chữ số mili-giây, giải phóng băng thông cho các workload có tần suất I/O dày đặc.",
            "<strong>Tối đa hóa hiệu năng CPU/GPU (Triệt tiêu I/O Bottleneck):</strong> Giảm thiểu tối đa thời gian vi xử lý và card đồ họa GPU đắt tiền phải nhàn rỗi chờ đợi nạp dữ liệu (I/O Wait), nâng cao hiệu suất tính toán thực tế.",
            "<strong>Tiềm năng tiết kiệm chi phí Compute:</strong> Bằng cách rút ngắn thời gian xử lý các tác vụ batch hoặc huấn luyện mô hình, doanh nghiệp có thể tắt sớm các máy ảo EC2/GPU đắt đỏ, từ đó giảm chi phí tổng thể.",
            "<strong>Tương thích liền mạch với AWS Ecosystem:</strong> Hỗ trợ đầy đủ Amazon S3 API tiêu chuẩn, dễ dàng tích hợp với Apache Spark, PyTorch, TensorFlow và AWS SDK mà không cần viết lại mã nguồn ứng dụng."
          ],
          limitations: [
            "<strong>Lưu trữ đơn vùng (Single-AZ Durability):</strong> Dữ liệu chỉ nằm trong một Availability Zone duy nhất. Khi xảy ra sự cố cấp trung tâm dữ liệu hoặc mất điện diện rộng tại AZ đó, dữ liệu có thể tạm thời không khả dụng hoặc bị ảnh hưởng, không có tính năng tự động chuyển vùng như S3 Standard.",
            "<strong>Chi phí lưu trữ và request đặc thù:</strong> Chi phí lưu trữ mỗi GB/tháng và chi phí yêu cầu (PUT/GET requests) cao hơn so với S3 Standard. Nếu workload không tận dụng hết tốc độ I/O, chi phí hóa đơn AWS sẽ tăng lên đáng kể.",
            "<strong>Chưa hỗ trợ một số tính năng mở rộng của S3:</strong> Không hỗ trợ S3 Versioning (quản lý phiên bản đối tượng), S3 Replication (sao chép liên vùng CRR/SRR), và các quy tắc S3 Lifecycle chuyển tầng tự động.",
            "<strong>Định luật Amdahl – Giới hạn tăng tốc toàn trình:</strong> Tốc độ truy xuất dữ liệu tăng 10 lần hoàn toàn không đồng nghĩa với việc toàn bộ pipeline hệ thống của bạn sẽ chạy nhanh gấp 10 lần."
          ]
        },
        {
          id: "section-3",
          num: "3",
          title: "3. Phân tích hiệu năng qua ví dụ (Định luật Amdahl)",
          introText: "Để làm rõ câu hỏi 'Hệ thống có thực sự hiệu quả hơn?', hãy cùng phân tích định lượng một bài toán huấn luyện AI xử lý dữ liệu hình ảnh thực tế dựa trên Định luật Amdahl (Amdahl's Law):",
          baselineDesc: "Giả sử một pipeline AI hoàn tất việc xử lý một đợt hình ảnh trong tổng thời gian <strong>100 phút</strong> với tỷ trọng các giai đoạn như sau:",
          baselineIo: "Đọc nạp dữ liệu từ S3: 20 phút (chiếm 20% tổng thời gian)",
          baselineCompute: "Tiền xử lý, trích xuất đặc trưng & tính toán CPU/GPU: 80 phút (chiếm 80% tổng thời gian)",
          expressDesc: "Khi chuyển đổi tầng lưu trữ sang <strong>Amazon S3 Express One Zone</strong> (tốc độ đọc dữ liệu được tăng tốc <strong>10 lần</strong> trong điều kiện tối ưu):",
          expressIo: "20 phút ÷ 10 = 2 phút",
          expressCompute: "80 phút (không đổi vì năng lực tính toán CPU/GPU giữ nguyên)",
          expressTotal: "2 phút + 80 phút = 82 phút",
          speedupSummary: "Mặc dù thời gian đọc I/O đã được rút ngắn tới 10 lần (giảm từ 20 phút xuống chỉ còn 2 phút), tổng thời gian hoàn thành toàn bộ tác vụ chỉ giảm từ 100 phút xuống 82 phút – tức là toàn hệ thống chỉ nhanh hơn 18%!",
          amdahlQuote: "Định luật Amdahl (Amdahl's Law) khẳng định: Tốc độ tăng tốc tối đa của toàn bộ hệ thống bị giới hạn bởi tỷ lệ thời gian của thành phần được cải thiện. Do đó, trước khi đầu tư nâng cấp lên storage class đắt tiền, kỹ sư Cloud bắt buộc phải tiến hành profiling để xác định chính xác nút thắt cổ chai (bottleneck) của hệ thống đang nằm ở I/O hay ở Compute/GPU."
        },
        {
          id: "section-4",
          num: "4",
          title: "4. Góc nhìn và đề xuất ứng dụng (Kiến trúc lưu trữ 2 lớp)",
          introText: "Từ thực tế phân tích trên, thay vì di chuyển toàn bộ Data Lake hoặc cơ sở dữ liệu sang S3 Express One Zone (gây lãng phí ngân sách và mất đi khả năng bảo vệ Multi-AZ), kiến trúc tối ưu nhất chính là áp dụng <strong>Kiến trúc lưu trữ hai lớp (Two-Tier Storage Architecture)</strong>:",
          tiers: [
            {
              title: "Lớp 1: Amazon S3 Standard",
              sub: "Data Lake & Master Storage",
              desc: "Lưu trữ toàn bộ tập dữ liệu gốc (Golden Dataset) với độ bền 99.999999999% (11 số 9) trên nhiều Availability Zones. Đảm bảo an toàn dữ liệu tuyệt đối trước mọi sự cố thiên tai với chi phí lưu trữ theo GB rẻ nhất."
            },
            {
              title: "Lớp 2: S3 Express One Zone",
              sub: "Hot Working Set / Cache",
              desc: "Chỉ lưu trữ tạm thời tập dữ liệu đang trực tiếp tham gia tính toán (Active Batch). Được đặt trong Directory Bucket cùng AZ với máy chủ EC2/GPU để cung cấp độ trễ dưới 10ms."
            },
            {
              title: "Tầng Điện toán: EC2 / GPU",
              sub: "Co-located Compute Nodes",
              desc: "Cụm máy tính huấn luyện mô hình được khởi chạy trong cùng Availability Zone với S3 Express One Zone, xóa bỏ chi phí truyền tải liên vùng và khai thác tối đa băng thông mạng nội bộ."
            }
          ],
          caseStudy: "<strong>Ví dụ bài toán thực tế:</strong> Một hệ thống AI quản lý một kho dữ liệu gồm 1.000.000 hình ảnh, nhưng mỗi ngày chu trình phân tích chỉ cần xử lý một tập dữ liệu làm việc (Active Working Set) gồm 100.000 hình ảnh. Thay vì chuyển đổi toàn bộ 1 triệu ảnh, hệ thống chỉ sao chép 100.000 ảnh cần xử lý sang Directory Bucket của S3 Express One Zone trước khi bắt đầu job tính toán, và dọn dẹp sau khi hoàn thành.",
          roiQuestion: "Điều kiện kinh tế (ROI Break-even):",
          roiMath: "Chi phí Copy dữ liệu + Thời gian Transfer < Lợi ích tiết kiệm chi phí thuê Compute (GPU/EC2)",
          roiExplanation: "Nếu chi phí sao chép dữ liệu và thời gian chờ chuyển tập tin lớn hơn số tiền tiết kiệm được từ việc xử lý nhanh hơn trên máy chủ GPU, việc giữ nguyên dữ liệu tại S3 Standard kết hợp kỹ thuật multi-part read hoặc bộ đệm RAM cục bộ vẫn sẽ là phương án kinh tế và hiệu quả hơn nhiều."
        },
        {
          id: "section-5",
          num: "5",
          title: "5. Kết luận & Đúc kết kiến trúc",
          paragraphs: [
            "Amazon S3 Express One Zone thực sự là một vũ khí công nghệ mạnh mẽ dành cho các ứng dụng trí tuệ nhân tạo (AI/ML), phân tích dữ liệu lớn (Big Data) và các hệ thống tài chính yêu cầu tần suất đọc/ghi cao cùng độ trễ cực thấp.",
            "Tuy nhiên, giá trị của một công nghệ không thể chỉ được đo bằng những con số marketing ấn tượng như 'nhanh gấp 10 lần'. Một kiến trúc sư điện toán đám mây chuyên nghiệp cần xác định rõ ràng: tập dữ liệu nào thực sự cần tăng tốc, mức độ cải thiện thời gian toàn trình của hệ thống sau khi áp dụng định luật Amdahl, và điểm hòa vốn kinh tế giữa chi phí lưu trữ với chi phí điện toán."
          ],
          goldenQuote: "Hiệu quả của kiến trúc Cloud không nằm ở việc sử dụng dịch vụ nhanh nhất, mà ở việc lựa chọn đúng giải pháp cho từng phần của workload.",
          checklistTitle: "Checklist 4 bước trước khi triển khai S3 Express One Zone:",
          checklistItems: [
            "1. <strong>System Profiling:</strong> Đo đạc thời gian I/O Wait so với Compute Time. Chỉ triển khai khi I/O thực sự là điểm nghẽn chính.",
            "2. <strong>Isolate Working Set:</strong> Chỉ chuyển tập dữ liệu nóng (Hot working data) vào S3 Express One Zone, giữ nguyên Master Data trên S3 Standard.",
            "3. <strong>AZ Co-location:</strong> Đảm bảo toàn bộ máy tính ảo EC2 / EKS Pods / GPU đặt trong cùng Availability Zone với Directory Bucket.",
            "4. <strong>Financial ROI Check:</strong> Đảm bảo chi phí lưu trữ và request phát sinh thấp hơn ngân sách GPU/Compute tiết kiệm được."
          ]
        }
      ],
      referencesTitle: "Tài liệu tham khảo chính thức từ AWS",
      references: [
        {
          title: "AWS Documentation – S3 Express One Zone Performance",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-performance.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Storage Classes",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html"
        },
        {
          title: "AWS Documentation – S3 Express One Zone Best Practices",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-optimizing-performance-design-patterns.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Pricing & Cost Calculator",
          url: "https://aws.amazon.com/s3/pricing/"
        },
        {
          title: "Xem bài viết trên cộng đồng AWS Study Group VN",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
          linkText: "Xem bài viết trên cộng đồng AWS Study Group VN"
        }
      ],
      btnBackToBlogs: "← Quay lại danh sách bài viết",
      btnScrollTop: "Lên đầu trang ↑"
    },
    en: {
      category: "AWS / Cloud Computing",
      date: "18/10/2026",
      title: "AMAZON S3 EXPRESS ONE ZONE – UP TO 10X FASTER, BUT IS THE SYSTEM TRULY MORE EFFICIENT?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
      leadSummary: "In modern AI/ML and Data Analytics architectures, ingesting and processing millions of images or unstructured files requires continuous high-frequency access to Amazon S3. When data read speeds cannot keep pace with CPU/GPU processing capabilities, the system encounters an I/O Bottleneck — expensive compute clusters sit idle waiting for bytes, inflating execution time and infrastructure costs. To eliminate this friction, AWS introduced Amazon S3 Express One Zone, a specialized high-performance storage class engineered for ultra-low latency workloads.",
      coverImage: "assets/images/s3-express-one-zone-architecture.png",
      coverCaption: "Figure 1: Architectural model of Amazon S3 Express One Zone utilizing Directory Buckets co-located within the identical Availability Zone as EC2 / GPU compute clusters.",
      sections: [
        {
          id: "section-1",
          num: "1",
          title: "1. What is Amazon S3 Express One Zone?",
          paragraphs: [
            "Amazon S3 Express One Zone is the highest-performing storage class within Amazon S3, purpose-built to accelerate data-intensive analytics and machine learning model training workloads. Instead of standard general-purpose buckets, S3 Express One Zone operates on a newly re-architected Directory Bucket model.",
            "The pivotal architectural distinction lies in data locality: Rather than replicating and dispersing objects across a minimum of three Availability Zones (Multi-AZ) like S3 Standard, S3 Express One Zone co-locates data within a single, dedicated Availability Zone (Single-AZ) of your choice. This enables architects to place high-throughput compute instances (such as Amazon EC2, Amazon EKS, or SageMaker GPU workers) inside the identical AZ as your storage, completely eliminating cross-AZ network transit latency and inter-AZ data transfer fees.",
            "According to official AWS benchmarks, S3 Express One Zone consistently achieves single-digit millisecond access latencies (typically ranging between 1ms and 3ms) and throughput up to 10x faster than S3 Standard under sustained, concurrent request workloads."
          ],
          callout: {
            title: "Core Technical Concepts:",
            items: [
              "<strong>Directory Bucket:</strong> A re-engineered hierarchical bucket architecture designed for ultra-low latency metadata lookups and high request rates.",
              "<strong>Single Availability Zone (Single-AZ):</strong> Localized storage placement delivering sub-10ms latency comparable to high-performance local network storage.",
              "<strong>Fast Session-Based Authentication:</strong> Lightweight, session-based security credentials that remove signature verification overhead on high-frequency API calls."
            ]
          }
        },
        {
          id: "section-2",
          num: "2",
          title: "2. Advantages & Limitations",
          introText: "Every cloud architectural decision represents a deliberate trade-off. To effectively leverage S3 Express One Zone, engineers must evaluate both its raw performance gains and its operational boundaries:",
          advantages: [
            "<strong>Sub-10ms Access Latency:</strong> Delivers single-digit millisecond read/write latencies, dramatically reducing turnaround time for high-frequency I/O workloads.",
            "<strong>Eliminates I/O Wait on Expensive Compute:</strong> Drastically reduces CPU/GPU idle wait cycles, ensuring costly machine learning accelerators operate at maximum utilization.",
            "<strong>Potential to Lower Compute Bills:</strong> Accelerating batch processing times allows organizations to shut down pricey EC2/GPU compute clusters earlier, generating net cost savings.",
            "<strong>Seamless AWS API Compatibility:</strong> Retains standard S3 API compatibility, enabling frictionless integration with PyTorch, TensorFlow, Apache Spark, and AWS SDKs without code refactoring."
          ],
          limitations: [
            "<strong>Single-AZ Durability Model:</strong> Data is restricted to a single Availability Zone. In the rare event of a datacenter-level outage within that specific AZ, data is not redundantly available elsewhere like S3 Standard.",
            "<strong>Higher Unit Cost Structure:</strong> Storage capacity fees per GB/month and API request charges (PUT/GET) are significantly higher than S3 Standard. Viability hinges on workload access density.",
            "<strong>Lack of Certain S3 Enterprise Features:</strong> Does not currently support S3 Versioning, S3 Cross-Region Replication (CRR/SRR), or automated S3 Lifecycle tiering.",
            "<strong>Amdahl's Law Reality:</strong> A 10x acceleration in storage I/O does not equate to a 10x acceleration of the end-to-end processing pipeline."
          ]
        },
        {
          id: "section-3",
          num: "3",
          title: "3. Performance Analysis via Example (Amdahl's Law)",
          introText: "To definitively answer whether the system is truly more efficient, let us examine a quantitative scenario modeling an AI image processing pipeline based on Amdahl's Law:",
          baselineDesc: "Suppose an end-to-end AI batch processing task currently takes <strong>100 minutes</strong> to complete, broken down as follows:",
          baselineIo: "Fetching raw images from S3: 20 minutes (20% of total runtime)",
          baselineCompute: "Preprocessing, feature extraction, GPU inference: 80 minutes (80% of total runtime)",
          expressDesc: "When migrating the storage layer to <strong>Amazon S3 Express One Zone</strong> (assuming a <strong>10x speedup</strong> in data read time under optimal conditions):",
          expressIo: "20 minutes ÷ 10 = 2 minutes",
          expressCompute: "80 minutes (remains unchanged as CPU/GPU processing capability is unchanged)",
          expressTotal: "2 minutes + 80 minutes = 82 minutes",
          speedupSummary: "Even though storage I/O was accelerated by a massive 10x (shrinking from 20 minutes down to 2 minutes), the total end-to-end runtime only dropped from 100 minutes to 82 minutes — representing an overall system gain of just 18%!",
          amdahlQuote: "Amdahl's Law states: The overall performance speedup of a system is strictly bounded by the proportion of time spent in the component being improved. Cloud architects must perform rigorous profiling before committing to premium storage tiers to determine whether the bottleneck is genuinely I/O-bound or compute-bound."
        },
        {
          id: "section-4",
          num: "4",
          title: "4. Architectural Perspectives & Recommendations (Two-Tier Storage)",
          introText: "Based on these empirical insights, rather than prematurely migrating an entire Data Lake to S3 Express One Zone (incurring unnecessary storage expenses and losing Multi-AZ disaster durability), the recommended pattern is a <strong>Two-Tier Storage Architecture</strong>:",
          tiers: [
            {
              title: "Layer 1: Amazon S3 Standard",
              sub: "Master Data Lake",
              desc: "Houses the persistent, authoritative master dataset with 99.999999999% (11 9s) durability across multiple Availability Zones. Provides disaster resilience and lowest cost per GB."
            },
            {
              title: "Layer 2: S3 Express One Zone",
              sub: "Active Working Set / Scratchpad",
              desc: "Temporarily stages only the active working set needed for the current batch training epoch. Co-located in the same AZ Directory Bucket for sub-10ms access speeds."
            },
            {
              title: "Compute Layer: EC2 / GPU Nodes",
              sub: "Co-located Compute Clusters",
              desc: "Training workers are spun up inside the identical AZ as the S3 Express One Zone Directory Bucket, achieving maximum network throughput and zero cross-AZ data fees."
            }
          ],
          caseStudy: "<strong>Real-world Case Study:</strong> An AI vision pipeline maintains 1,000,000 reference images, but daily training iterations only require an active working set of 100,000 images. Instead of migrating all 1 million files, the orchestration layer syncs only the 100,000 active images to S3 Express One Zone before the run, wiping the scratchpad after completion.",
          roiQuestion: "Investment Break-Even Formula (ROI Equation):",
          roiMath: "Data Staging Cost + Transfer Overhead < Compute (GPU/EC2) Cost Savings",
          roiExplanation: "If data staging costs and time overhead exceed the financial savings gained from reduced GPU instance hours, keeping the files in S3 Standard with tuned multi-part reads or local RAM caching may remain the superior, cost-effective architecture."
        },
        {
          id: "section-5",
          num: "5",
          title: "5. Conclusion & Architectural Principles",
          paragraphs: [
            "Amazon S3 Express One Zone represents a transformative leap for machine learning, real-time analytics, and latency-critical cloud workflows requiring sustained, high-frequency object access.",
            "However, true architectural excellence is never defined by headline speeds like '10x faster'. Seasoned cloud architects must isolate which working set genuinely requires acceleration, project end-to-end system speedup through Amdahl's Law, and calculate the cost break-even threshold between storage and compute."
          ],
          goldenQuote: "Cloud architectural excellence does not lie in adopting the fastest individual service, but in selecting the right tool for each distinct phase of the workload.",
          checklistTitle: "4-Step Pre-Flight Migration Checklist:",
          checklistItems: [
            "1. <strong>System Profiling:</strong> Profile I/O Wait vs. Compute time. Migrate only when I/O represents the primary execution bottleneck.",
            "2. <strong>Isolate Working Set:</strong> Stage hot working data into S3 Express One Zone while maintaining master datasets on S3 Standard.",
            "3. <strong>AZ Co-location:</strong> Ensure compute instances (EC2 / EKS / SageMaker) reside in the exact same AZ as the Directory Bucket.",
            "4. <strong>Financial ROI Check:</strong> Verify that incremental storage and API costs remain strictly lower than the compute savings achieved."
          ]
        }
      ],
      referencesTitle: "Official AWS Documentation & Resources",
      references: [
        {
          title: "AWS Documentation – S3 Express One Zone Performance",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-performance.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Storage Classes",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html"
        },
        {
          title: "AWS Documentation – S3 Express One Zone Best Practices",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-optimizing-performance-design-patterns.html"
        },
        {
          title: "AWS Documentation – Amazon S3 Pricing & Cost Calculator",
          url: "https://aws.amazon.com/s3/pricing/"
        },
        {
          title: "View post on AWS Study Group VN community",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/",
          linkText: "View post on AWS Study Group VN community"
        }
      ],
      btnBackToBlogs: "← Back to Articles",
      btnScrollTop: "Scroll to Top ↑"
    }
  },
  'aws-event-driven-architecture': {
    vi: {
      category: "AWS / Distributed Systems / Architecture",
      date: "04/11/2026",
      title: "AWS EVENT-DRIVEN ARCHITECTURE – KHI MỌI DỊCH VỤ ĐỀU HOẠT ĐỘNG ĐÚNG, TẠI SAO DỮ LIỆU VẪN CÓ THỂ SAI?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
      leadSummary: "Trong quá trình nghiên cứu kiến trúc Event-Driven trên AWS, mình nhận thấy một vấn đề: Một hệ thống có thể xử lý tất cả sự kiện thành công nhưng vẫn tạo ra kết quả sai do Race Condition. Điều này xuất phát từ đặc điểm xử lý bất đồng bộ, đặc biệt khi kết hợp Amazon S3, EventBridge, SQS, Lambda và DynamoDB.",
      coverImage: "assets/images/aws-event-driven-architecture.png",
      coverCaption: "Kiến trúc Event-Driven trên AWS – Xử lý sự kiện, kiểm soát thứ tự và công bố kết quả nguyên tử",
      sections: [
        {
          id: "eda-sec-1",
          num: "1",
          title: "1. VẤN ĐỀ Ở ĐÂY LÀ GÌ?",
          paragraphs: [
            "Amazon S3 Event Notifications sử dụng cơ chế At-Least-Once Delivery, không bảo đảm sự kiện được gửi duy nhất một lần hoặc theo đúng thứ tự.",
            "Giả sử một hệ thống AI xử lý tài liệu được cập nhật từ phiên bản A sang B:",
            "Cả hai Lambda đều thực thi thành công (HTTP 200), nhưng kết quả cuối cùng lại sai."
          ],
          scenarioItems: [
            "<strong>Lambda A:</strong> Xử lý phiên bản gốc A trong 15 giây.",
            "<strong>Lambda B:</strong> Xử lý phiên bản cập nhật B chỉ trong 4 giây.",
            "<strong>Hậu quả:</strong> B hoàn thành trước, nhưng A hoàn thành sau và ghi đè kết quả cũ lên kết quả mới."
          ],
          table: {
            headers: ["Luồng xử lý", "Phiên bản tài liệu", "Thời điểm bắt đầu", "Thời gian xử lý", "Thời điểm ghi kết quả", "Hậu quả thực tế"],
            rows: [
              ["<strong>Worker A</strong>", "Phiên bản A (v1)", "T0", "15 giây", "T0 + 15s", "<strong>Ghi đè sai kết quả của B</strong>"],
              ["<strong>Worker B</strong>", "Phiên bản B (v2 - Mới nhất)", "T0 + 2s", "4 giây", "T0 + 6s", "Bị kết quả cũ của A ghi đè mất"]
            ]
          },
          keyInsight: "Mấu chốt vấn đề: Không có bất kỳ lỗi ứng dụng nào xảy ra và 100% lời gọi hàm Lambda đều thành công, nhưng kết quả nghiệp vụ cuối cùng vẫn bị sai lệch do sự chênh lệch thời gian xử lý trong môi trường bất đồng bộ."
        },
        {
          id: "eda-sec-2",
          num: "2",
          title: "2. VẬY TẠI SAO IDEMPOTENCY VÀ SQS CHƯA ĐỦ?",
          paragraphs: [
            "Nhiều kỹ sư thường mặc định rằng việc áp dụng Idempotency và Message Queuing sẽ giải quyết được bài toán Race Condition. Tuy nhiên trên thực tế, các cơ chế này có những giới hạn cốt lõi:"
          ],
          points: [
            "<strong>Idempotency:</strong> Giúp ngăn tác động xử lý trùng lặp của cùng một sự kiện, nhưng không tự động ngăn sự kiện cũ ghi đè kết quả mới.",
            "<strong>Amazon SQS FIFO:</strong> Duy trì thứ tự theo Message Group, nhưng không thể khôi phục thứ tự gốc nếu các sự kiện đã đến sai trước khi vào hàng đợi.",
            "<strong>Vấn đề TOCTOU (Time-of-Check to Time-of-Use):</strong> Ngay cả khi Lambda kiểm tra phiên bản trước khi xử lý, dữ liệu vẫn có thể thay đổi trong lúc thực thi."
          ]
        },
        {
          id: "eda-sec-3",
          num: "3",
          title: "3. ĐỀ XUẤT",
          introText: "Thay vì để Lambda ghi đè trực tiếp kết quả vào vị trí lưu trữ dùng chung, mình đề xuất mô hình kiến trúc kết hợp 5 cơ chế cốt lõi:",
          solutions: [
            "<strong>S3 Versioning:</strong> Truy xuất đúng phiên bản dữ liệu đầu vào. Đảm bảo worker đọc đúng phiên bản tương ứng với sự kiện, tránh đọc nhầm dữ liệu đang bị thay đổi.",
            "<strong>S3 Sequencer:</strong> Xác định thứ tự các thao tác được hỗ trợ trên cùng object key. Chuỗi ký tự thập lục phân trong payload sự kiện cung cấp thứ tự vật lý tin cậy tuyệt đối.",
            "<strong>Immutable Output:</strong> Mỗi Lambda ghi kết quả vào đường dẫn riêng (ví dụ: output/{key}/{version_id}/result.json), tuyệt đối không ghi đè trực tiếp.",
            "<strong>DynamoDB Conditional Write:</strong> Kiểm soát việc công bố kết quả bằng điều kiện cập nhật nguyên tử. Chỉ cho phép cập nhật con trỏ trạng thái nếu sequencer mới hơn.",
            "<strong>Reconciliation:</strong> Phục hồi tác vụ bị gián đoạn và đối chiếu trạng thái khi cần."
          ],
          table: {
            headers: ["Thành phần", "Vai trò trong giải pháp", "Cơ chế bảo đảm tính đúng đắn"],
            rows: [
              ["<strong>Amazon S3 Versioning</strong>", "Bảo toàn dữ liệu nguồn đầu vào", "Version ID bất biến cho từng lần tải lên đối tượng"],
              ["<strong>S3 Object Sequencer</strong>", "Xác định thứ tự nghiệp vụ gốc", "So sánh chuỗi thập lục phân biểu diễn timestamp vật lý từ S3"],
              ["<strong>Immutable Output</strong>", "Lưu trữ trung gian độc lập", "Mỗi worker ghi vào prefix riêng, triệt tiêu xung đột ghi đè"],
              ["<strong>DynamoDB Conditional Write</strong>", "Công bố kết quả nguyên tử", "Compare-and-Swap: chỉ cập nhật nếu s3_sequencer mới hơn"],
              ["<strong>Reconciliation Worker</strong>", "Xử lý lỗi cục bộ (Partial Failure)", "Đối chiếu trạng thái giữa S3 và con trỏ DynamoDB"]
            ]
          },
          conditionTitle: "Cơ chế cập nhật nguyên tử DynamoDB Conditional Write (Compare-and-Swap):",
          conditionCode: `UpdateItem(
  Key = { "object_key": "document-123.pdf" },
  UpdateExpression = "SET latest_version = :v, result_uri = :uri, s3_sequencer = :seq, updated_at = :ts",
  ConditionExpression = "attribute_not_exists(object_key) OR s3_sequencer < :seq",
  ExpressionAttributeValues = {
    ":seq": event.s3.object.sequencer,
    ":v": event.s3.object.versionId,
    ":uri": "s3://bucket/output/doc-123/v2/result.json",
    ":ts": "2026-11-04T10:30:00Z"
  }
)`,
          postText: "Với kiến trúc này, Lambda A có thể hoàn thành sau B nhưng không được ghi đè kết quả B đã công bố.",
          partialFailureNote: "Tuy nhiên, S3 và DynamoDB không hỗ trợ một transaction nguyên tử chung. Vì vậy, hệ thống vẫn cần cơ chế Retry và Recovery để xử lý Partial Failure khi ghi S3 thành công nhưng cập nhật DynamoDB bị gián đoạn."
        },
        {
          id: "eda-sec-4",
          num: "4",
          title: "4. KẾT LUẬN",
          paragraphs: [
            "Theo mình, một vấn đề đáng quan tâm trong Cloud Architecture là: 100% Lambda Invocations thành công không đồng nghĩa với 100% kết quả nghiệp vụ chính xác.",
            "Thay vì cố gắng buộc mọi sự kiện xử lý đúng thứ tự, kiến trúc nên kiểm soát phiên bản nào được phép thay đổi kết quả chính thức."
          ],
          goldenQuote: "100% Lambda Invocations thành công không đồng nghĩa với 100% kết quả nghiệp vụ chính xác.",
          checklistTitle: "Đúc kết nguyên tắc thiết kế phân tán:",
          checklistItems: [
            "1. <strong>Tách biệt tính toán và công bố:</strong> Sử dụng Immutable Output cho lưu trữ trung gian và DynamoDB làm con trỏ công bố trạng thái chính thức.",
            "2. <strong>Kiểm soát thứ tự tại đích:</strong> Sử dụng S3 Sequencer và DynamoDB ConditionExpression thay vì dựa vào thứ tự đến của hàng đợi.",
            "3. <strong>Thiết kế sẵn sàng cho Partial Failure:</strong> Luôn xây dựng Reconciliation Worker để tự động đối chiếu và khôi phục trạng thái nhất quán."
          ]
        }
      ],
      tags: ["#AWS", "#EventDrivenArchitecture", "#AWSLambda", "#DynamoDB", "#DistributedSystems", "#CloudArchitecture"],
      referencesTitle: "Tài liệu tham khảo chính thức từ AWS",
      references: [
        {
          title: "AWS Documentation – Amazon S3 Event Notifications & Object Sequencer",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-content-structure.html"
        },
        {
          title: "AWS Documentation – Working with Queries and Conditional Writes in DynamoDB",
          url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate"
        },
        {
          title: "AWS Architecture Center – Event-Driven Architecture Patterns and Best Practices",
          url: "https://aws.amazon.com/event-driven-architecture/"
        },
        {
title: "Xem bài viết trên cộng đồng AWS Study Group VN",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
          linkText: "Xem bài viết trên cộng đồng AWS Study Group VN"
        }
      ],
      btnBackToBlogs: "← Quay lại danh sách bài viết",
      btnScrollTop: "Lên đầu trang ↑"
    },
    en: {
      category: "AWS / Distributed Systems / Architecture",
      date: "04/11/2026",
      title: "AWS EVENT-DRIVEN ARCHITECTURE – WHEN ALL SERVICES SUCCEED, WHY CAN DATA STILL BE WRONG?",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
      leadSummary: "While researching Event-Driven Architecture on AWS, I identified a critical paradox: A system can process all events with 100% success yet still generate incorrect business data due to Race Conditions. This stems directly from the asynchronous nature of decoupled services, particularly when orchestrating Amazon S3, EventBridge, SQS, AWS Lambda, and DynamoDB.",
      coverImage: "assets/images/aws-event-driven-architecture.png",
      coverCaption: "AWS Event-Driven Architecture – Event Processing, Ordering and Atomic Publishing",
      sections: [
        {
          id: "eda-sec-1",
          num: "1",
          title: "1. WHAT IS THE PROBLEM HERE?",
          paragraphs: [
            "Amazon S3 Event Notifications operate on an At-Least-Once Delivery model, providing no inherent guarantee that events arrive exactly once or in chronological order.",
            "Suppose an AI document processing pipeline updates a file from Version A to Version B:",
            "Both Lambda invocations succeed with HTTP 200, yet the final persisted business outcome is completely corrupted."
          ],
          scenarioItems: [
            "<strong>Lambda A:</strong> Processes baseline Version A in 15 seconds.",
            "<strong>Lambda B:</strong> Processes updated Version B in only 4 seconds.",
            "<strong>Outcome:</strong> B completes first, but Lambda A finishes later and overwrites the newer result with stale data."
          ],
          table: {
            headers: ["Worker / Invocation", "Document Version", "Start Time", "Duration", "Write Time", "Actual Outcome"],
            rows: [
              ["<strong>Worker A</strong>", "Version A (v1)", "T0", "15 seconds", "T0 + 15s", "<strong>Overwrites newer result of B</strong>"],
              ["<strong>Worker B</strong>", "Version B (v2 - Latest)", "T0 + 2s", "4 seconds", "T0 + 6s", "Overwritten by stale output from A"]
            ]
          },
          keyInsight: "Core reality: Every individual AWS service worked as designed, yet the business result became corrupted due to uneven invocation latency across distributed workers."
        },
        {
          id: "eda-sec-2",
          num: "2",
          title: "2. WHY ARE IDEMPOTENCY AND SQS NOT ENOUGH?",
          paragraphs: [
            "Engineers commonly assume that applying Idempotency and SQS FIFO queues will eliminate race conditions in event-driven systems. In practice, both exhibit fundamental boundaries:"
          ],
          points: [
            "<strong>Idempotency:</strong> Prevents duplicate side-effects from identical event retries, but cannot prevent an older stale event from overwriting a newer result.",
            "<strong>Amazon SQS FIFO:</strong> Enforces strict ordering within Message Groups, but cannot restore chronological order if events were already delivered out-of-order prior to entering the queue.",
            "<strong>TOCTOU (Time-of-Check to Time-of-Use):</strong> Even when a Lambda inspects object versions before processing, underlying data can change during execution."
          ]
        },
        {
          id: "eda-sec-3",
          num: "3",
          title: "3. PROPOSED ARCHITECTURAL SOLUTION",
          introText: "Rather than allowing Lambda functions to directly overwrite shared storage, the recommended pattern blends five core mechanisms:",
          solutions: [
            "<strong>S3 Versioning:</strong> Retrieve the exact input data version. Guarantees workers read the specific object version tied to the event.",
            "<strong>S3 Sequencer:</strong> Determine event sequence order on the same object key using the physical hexadecimal timestamp in S3 event payloads.",
            "<strong>Immutable Output:</strong> Each Lambda writes results to a dedicated immutable path (e.g., output/{key}/{version_id}/result.json), preventing direct overwrite conflicts.",
            "<strong>DynamoDB Conditional Write:</strong> Control result publishing using atomic Compare-and-Swap conditional updates. Only updates state if the sequencer is newer.",
            "<strong>Reconciliation:</strong> Recover interrupted tasks and reconcile state inconsistencies when partial failures occur."
          ],
          table: {
            headers: ["Component", "Role in Architecture", "Correctness Guarantee Mechanism"],
            rows: [
              ["<strong>Amazon S3 Versioning</strong>", "Input source data preservation", "Immutable Version ID per PutObject invocation"],
              ["<strong>S3 Object Sequencer</strong>", "Original event ordering authority", "Hexadecimal string reflecting physical S3 commit order"],
              ["<strong>Immutable Output</strong>", "Isolated intermediate storage", "Dedicated prefix per worker, zero direct overwrite"],
              ["<strong>DynamoDB Conditional Write</strong>", "Atomic result pointer publishing", "Compare-and-Swap: updates state only if s3_sequencer is newer"],
              ["<strong>Reconciliation Worker</strong>", "Partial failure recovery", "Audits state discrepancies between S3 and DynamoDB pointer"]
            ]
          },
          conditionTitle: "DynamoDB Atomic Conditional Update Pattern (Compare-and-Swap):",
          conditionCode: `UpdateItem(
  Key = { "object_key": "document-123.pdf" },
  UpdateExpression = "SET latest_version = :v, result_uri = :uri, s3_sequencer = :seq, updated_at = :ts",
  ConditionExpression = "attribute_not_exists(object_key) OR s3_sequencer < :seq",
  ExpressionAttributeValues = {
    ":seq": event.s3.object.sequencer,
    ":v": event.s3.object.versionId,
    ":uri": "s3://bucket/output/doc-123/v2/result.json",
    ":ts": "2026-11-04T10:30:00Z"
  }
)`,
          postText: "Under this architecture, Lambda A can finish after B without ever overwriting B's published result.",
          partialFailureNote: "However, Amazon S3 and DynamoDB do not share an atomic two-phase commit transaction. Systems must incorporate Retry and Recovery mechanisms to handle partial failures when S3 writes succeed but DynamoDB updates are interrupted."
        },
        {
          id: "eda-sec-4",
          num: "4",
          title: "4. CONCLUSION & PRINCIPLES",
          paragraphs: [
            "In cloud architecture: 100% successful Lambda invocations do not equate to 100% correct business state.",
            "Instead of attempting to force every distributed event to process in strict serial order, architectures should control which version is permitted to publish the authoritative result."
          ],
          goldenQuote: "100% Lambda Invocations successful does not equal 100% business correctness.",
          checklistTitle: "Core Distributed Design Principles:",
          checklistItems: [
            "1. <strong>Decouple Processing from Publishing:</strong> Leverage Immutable Output for processing and atomic pointers for publishing.",
            "2. <strong>Enforce Ordering at the Destination:</strong> Use S3 Sequencers and DynamoDB ConditionExpression instead of fragile queue arrival order.",
            "3. <strong>Design for Partial Failure:</strong> Build Reconciliation Workers to automatically heal cross-service inconsistencies."
          ]
        }
      ],
      tags: ["#AWS", "#EventDrivenArchitecture", "#AWSLambda", "#DynamoDB", "#DistributedSystems", "#CloudArchitecture"],
      referencesTitle: "Official AWS Documentation & Resources",
      references: [
        {
          title: "AWS Documentation – Amazon S3 Event Notifications & Object Sequencer",
          url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-content-structure.html"
        },
        {
          title: "AWS Documentation – Working with Queries and Conditional Writes in DynamoDB",
          url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate"
        },
        {
          title: "AWS Architecture Center – Event-Driven Architecture Patterns and Best Practices",
          url: "https://aws.amazon.com/event-driven-architecture/"
        },
        {
title: "View post on AWS Study Group VN community",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/",
          linkText: "View post on AWS Study Group VN community"
        }
      ],
      btnBackToBlogs: "← Back to Articles",
      btnScrollTop: "Scroll to Top ↑"
    }
  },
  'aws-ec2-identity-containment': {
    vi: {
      category: "AWS STUDY GROUP / CLOUD SECURITY",
      date: "15/11/2026",
      title: "CÔ LẬP EC2 KHÔNG CÓ NGHĨA LÀ ĐÃ CÔ LẬP KẺ TẤN CÔNG",
      subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
      leadSummary: "Điều gì sẽ xảy ra nếu một EC2 instance đã bị cô lập khỏi hệ thống mạng, nhưng kẻ tấn công vẫn có thể truy cập các tài nguyên AWS? Phân tích chuyên sâu về sự khác biệt giữa Network Containment và Identity Containment: Vì sao Security Group không thể thu hồi IAM Sessions, giới hạn của IMDSv2 trước Remote Code Execution, và mô hình phản ứng sự cố tự động (Automated Incident Response) kết hợp GuardDuty, EventBridge, Lambda runbook và điều kiện aws:EC2InstanceSourceVPC.",
      coverImage: "assets/images/aws-ec2-identity-containment-architecture.png",
      coverCaption: "Hình 1: Mô hình Automated Incident Response trên AWS – Kết hợp Network Containment, Credential Issuance Containment và Identity Containment.",
      sections: [
        {
          id: "sec-1",
          num: "1",
          title: "1. Khi thứ bị đánh cắp không chỉ là dữ liệu, mà còn là danh tính",
          paragraphs: [
            "Giả sử một doanh nghiệp triển khai backend trên Amazon EC2, sử dụng Amazon S3 để lưu trữ dữ liệu và Amazon DynamoDB để quản lý thông tin giao dịch.",
            "Thay vì lưu Access Key trực tiếp trong mã nguồn, EC2 được gắn IAM Role thông qua Instance Profile và sử dụng Temporary Security Credentials được cung cấp bởi Instance Metadata Service (IMDS).",
            "Đây là một phương pháp bảo mật được AWS khuyến nghị. Tuy nhiên, hãy xét một kịch bản giả định:"
          ],
          timeline: [
            { time: "09:00", event: "EC2 bị xâm nhập", desc: "Kẻ tấn công khai thác lỗ hổng ứng dụng để thực thi mã từ xa (RCE) trên instance." },
            { time: "09:05", event: "Temporary Credentials bị đánh cắp", desc: "Kẻ tấn công trích xuất token xác thực tạm thời từ Instance Metadata Service (IMDS)." },
            { time: "09:10", event: "Đội ngũ Security phát hiện sự cố", desc: "Hệ thống giám sát ghi nhận hoạt động bất thường và phát tín hiệu cảnh báo." },
            { time: "09:15", event: "Quarantine Security Group được áp dụng để cô lập EC2", desc: "Cô lập EC2 ở tầng mạng bằng cách gỡ bỏ toàn bộ inbound/outbound rules thông thường." },
            { time: "09:20", event: "Kẻ tấn công vẫn có thể gửi yêu cầu truy cập Amazon S3 từ một môi trường khác", desc: "Từ một máy chủ ngoài Internet, kẻ tấn công dùng credentials vừa lấy cắp để gửi request trực tiếp đến S3 API." }
          ],
          whyTitle: "Tại sao điều này lại xảy ra?",
          whyParagraph: "Bởi vì Temporary Credentials không mặc định bị ràng buộc với môi trường mạng của EC2 đã nhận chúng. Nếu credentials chưa hết hạn và quyền truy cập chưa bị từ chối bởi các chính sách bảo mật, kẻ tấn công vẫn có thể lợi dụng danh tính của workload để tương tác với AWS API mà không cần kết nối lại với EC2 ban đầu."
        },
        {
          id: "sec-2",
          num: "2",
          title: "2. Network Containment ≠ Identity Containment",
          paragraphs: [
            "Một trong những vấn đề khi xử lý sự cố trên Cloud là sự khác biệt giữa hai lớp kiểm soát: Network Containment (Cô lập tài nguyên ở cấp độ mạng) và Identity Containment (Kiểm soát và vô hiệu hóa quyền truy cập của danh tính đã bị xâm phạm).",
            "Security Group kiểm soát lưu lượng mạng nhưng không có chức năng thu hồi IAM Sessions. Hơn nữa, việc thay đổi Security Group không nhất thiết chấm dứt ngay những kết nối đang được theo dõi trước đó (stateful connection tracking).",
            "Private Subnet hạn chế khả năng truy cập trực tiếp từ Internet, nhưng không đảm bảo rằng danh tính của workload không thể bị lợi dụng từ bên ngoài.",
            "Ngay cả IMDSv2, mặc dù giúp giảm thiểu một số hình thức khai thác SSRF, cũng không bảo vệ tuyệt đối credentials khi kẻ tấn công đã có khả năng thực thi mã trên instance.",
            "Mỗi cơ chế bảo mật giải quyết một vấn đề khác nhau. Vì vậy, việc triển khai nhiều công cụ bảo mật chưa chắc đã tạo ra một kiến trúc an toàn nếu chúng ta không hiểu rõ giới hạn của từng công cụ."
          ],
          comparison: [
            { layer: "Network Containment", scope: "Tầng mạng (Network Layer)", mechanism: "Quarantine Security Group, NACL, Private Subnet", capability: "Chặn ingress/egress lưu lượng mạng vào/ra EC2", limitation: "Không vô hiệu hóa IAM token; không cắt đứt kết nối stateful đang theo dõi." },
            { layer: "Identity Containment", scope: "Tầng định danh (Identity Layer)", mechanism: "Revoke Active Sessions, Policy Deny, Gỡ Instance Profile", capability: "Hủy bỏ hiệu lực của token bảo mật tạm thời (STS temporary credentials)", limitation: "Nếu không gỡ Instance Profile, instance vẫn có thể xin token mới từ IMDS." }
          ]
        },
        {
          id: "sec-3",
          num: "3",
          title: "3. Nếu credentials bị đánh cắp, liệu có thể khiến chúng trở nên vô dụng khi được sử dụng sai ngữ cảnh?",
          paragraphs: [
            "AWS cung cấp các Global Condition Keys cho phép kiểm soát ngữ cảnh sử dụng credentials:",
            "Trong kiến trúc minh họa, EC2 nằm trong Private Subnet và truy cập Amazon S3, DynamoDB thông qua hai Gateway Endpoint tương ứng.",
            "Bằng cách xây dựng IAM Policy đối chiếu ngữ cảnh cấp credentials với ngữ cảnh thực tế của request, chúng ta có thể từ chối những yêu cầu xuất phát từ môi trường không được phép, ngay cả khi thông tin xác thực vẫn còn hiệu lực."
          ],
          conditionKeys: [
            { key: "aws:EC2InstanceSourceVPC", desc: "Ràng buộc yêu cầu phải xuất phát từ đúng VPC nơi EC2 instance được cấp credentials." },
            { key: "aws:EC2InstanceSourcePrivateIPv4", desc: "Ràng buộc yêu cầu phải xuất phát từ đúng địa chỉ IP riêng của instance trong VPC." },
            { key: "aws:SourceVpc", desc: "Kiểm tra request có đi qua VPC Endpoint cụ thể hay không khi truy cập tài nguyên AWS." },
            { key: "aws:VpcSourceIp", desc: "Xác thực địa chỉ IP nguồn bên trong không gian mạng VPC nội bộ." }
          ],
          policySnippet: `{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "EnforceVpcSourceContext",\n      "Effect": "Deny",\n      "Action": ["s3:*", "dynamodb:*"],\n      "Resource": "*",\n      "Condition": {\n        "StringNotEquals": {\n          "aws:EC2InstanceSourceVPC": "vpc-0123456789abcdef0"\n        }\n      }\n    }\n  ]\n}`,
          warningParagraphs: [
            "Tuy nhiên, cần lưu ý rằng không phải mọi AWS API đều sử dụng VPC Endpoint. Chính sách quá nghiêm ngặt có thể ảnh hưởng đến workload hợp lệ.",
            "Phương pháp này cũng không ngăn được mọi hành vi độc hại diễn ra ngay trên EC2 đã bị xâm nhập.",
            "Đó là lý do cần kết hợp nhiều lớp phòng thủ — Defense in Depth."
          ]
        },
        {
          id: "sec-4",
          num: "4",
          title: "4. Khi giải pháp bảo mật có thể trở thành nguyên nhân gây gián đoạn hệ thống",
          paragraphs: [
            "AWS IAM cung cấp cơ chế Revoke Active Sessions, sử dụng chính sách AWSRevokeOlderSessions và điều kiện aws:TokenIssueTime để từ chối quyền của các phiên xác thực được cấp trước một thời điểm xác định.",
            "Nhưng hãy tưởng tượng có 10 EC2 instance cùng sử dụng một IAM Role, trong đó chỉ một instance bị xâm nhập.",
            "Việc thu hồi toàn bộ session cũ của IAM Role có thể ảnh hưởng đến cả những instance đang hoạt động bình thường, gây gián đoạn dịch vụ diện rộng.",
            "Bên cạnh đó, Revoke Active Sessions không tự động ngăn EC2 nhận credentials mới. Vì vậy, cần kết hợp việc gỡ hoặc thay thế Instance Profile bằng một cấu hình hạn chế quyền phù hợp.",
            "Lúc này, chúng ta phải đối mặt với sự đánh đổi giữa Security và Availability.",
            "Điều đó cho thấy thiết kế IAM không chỉ là câu chuyện cấp quyền tối thiểu (Least Privilege), mà còn là bài toán giới hạn phạm vi ảnh hưởng (Blast Radius) khi sự cố xảy ra."
          ]
        },
        {
          id: "sec-5",
          num: "5",
          title: "5. Hướng tiếp cận kiến trúc trên AWS",
          introText: "Dựa trên sơ đồ Architecture đính kèm, chúng ta có thể xây dựng một quy trình Automated Incident Response như sau:",
          components: [
            { name: "AWS CloudTrail", role: "Hỗ trợ ghi nhận và điều tra các hoạt động AWS API. Đối với những thao tác ở cấp dữ liệu trên S3 và DynamoDB, cần cấu hình Data Events phù hợp." },
            { name: "Amazon GuardDuty", role: "Phân tích các nguồn dữ liệu bảo mật để phát hiện dấu hiệu sử dụng credentials bất thường (ví dụ: finding InstanceCredentialExfiltration.OutsideAWS)." },
            { name: "Amazon EventBridge", role: "Tiếp nhận GuardDuty Findings theo mẫu sự kiện bảo mật và kích hoạt AWS Lambda." },
            { name: "AWS Lambda", role: "Khởi chạy runbook được cấu hình trong AWS Systems Manager Automation để thực thi các bước cô lập." }
          ],
          actionsIntro: "Quy trình ứng phó thực hiện ba nhóm hành động chính:",
          actions: [
            { title: "Network Containment", desc: "Áp dụng Quarantine Security Group và kiểm tra các kết nối mạng hiện có." },
            { title: "Credential Issuance Containment", desc: "Gỡ hoặc thay thế Instance Profile để hạn chế việc tiếp tục nhận credentials có quyền truy cập." },
            { title: "Identity Containment", desc: "Thu hồi quyền của các IAM Role Sessions đã được cấp và kiểm tra hiệu quả sau khi chính sách có hiệu lực." }
          ],
          conclusionText: "Đối với môi trường production, những hành động có khả năng gây gián đoạn hệ thống nên được kiểm soát bằng cơ chế phê duyệt phù hợp. Mục tiêu không phải là triển khai càng nhiều dịch vụ càng tốt, mà là đảm bảo mỗi lớp bảo mật có thể giới hạn thiệt hại khi một lớp khác thất bại."
        }
      ],
      keyTakeaway: {
        title: "Đúc kết chính",
        p1: "Một quy trình Incident Response trên AWS cần kiểm soát đồng thời cả Network Containment và Identity Containment. Việc cô lập EC2 chỉ giải quyết một phần sự cố nếu quyền truy cập của danh tính đã bị xâm phạm vẫn chưa được vô hiệu hóa.",
        p2: "Bởi trong môi trường Cloud, một cuộc tấn công có thể bắt đầu từ máy chủ nhưng tiếp tục dưới hình thức lạm dụng danh tính."
      },
      hashtags: "#AWS #AWSStudyGroup #CloudSecurity #CyberSecurity #IAM #AmazonEC2 #GuardDuty #IncidentResponse #DefenseInDepth #CloudArchitecture",
      referencesTitle: "Tài liệu tham khảo",
      references: [
        {
          title: "AWS Security Incident Response Guide – Containment and Remediation Strategies",
          url: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html"
        },
        {
          title: "AWS IAM Documentation – Revoking IAM Role Temporary Security Credentials",
          url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html"
        },
        {
          title: "Amazon GuardDuty Finding Types – InstanceCredentialExfiltration.OutsideAWS",
          url: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-ec2.html"
        },
        {
title: "Xem bài viết trên cộng đồng AWS Study Group VN",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
          linkText: "Xem bài viết trên cộng đồng AWS Study Group VN"
        }
      ],
      btnBackToBlogs: "← Quay lại danh sách bài viết",
      btnScrollTop: "Về đầu trang ↑"
    },
    en: {
      category: "AWS STUDY GROUP / CLOUD SECURITY",
      date: "15/11/2026",
      title: "EC2 ISOLATION DOES NOT MEAN THE ATTACKER IS ISOLATED",
      subtitle: "Beyond Network Isolation: Rethinking Identity Containment on AWS",
      facebookUrl: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
      leadSummary: "What happens if an EC2 instance is completely isolated from the network, yet an attacker can still access your AWS resources? An in-depth architectural analysis of Network Containment versus Identity Containment: why Security Groups cannot terminate active IAM sessions, the limitations of IMDSv2 against remote code execution, and designing an automated incident response workflow combining GuardDuty, EventBridge, Lambda runbooks, and aws:EC2InstanceSourceVPC condition keys.",
      coverImage: "assets/images/aws-ec2-identity-containment-architecture.png",
      coverCaption: "Figure 1: Automated Incident Response architecture on AWS – Combining Network Containment, Credential Issuance Containment, and Identity Containment.",
      sections: [
        {
          id: "sec-1",
          num: "1",
          title: "1. When What Is Stolen Is Not Just Data, But Identity",
          paragraphs: [
            "Consider an enterprise deploying its backend workload on Amazon EC2, using Amazon S3 for durable object storage and Amazon DynamoDB for transactional state.",
            "Rather than embedding long-lived Access Keys into source code, EC2 is attached to an IAM Role via an Instance Profile, consuming Temporary Security Credentials issued dynamically by the Instance Metadata Service (IMDS).",
            "While this aligns with AWS security best practices, examine this realistic incident timeline:"
          ],
          timeline: [
            { time: "09:00", event: "EC2 Host Compromise", desc: "Attacker exploits an application vulnerability to achieve arbitrary remote code execution (RCE) on the host." },
            { time: "09:05", event: "Credentials Exfiltration", desc: "Attacker queries IMDS and extracts temporary security tokens (AccessKey, SecretKey, SessionToken)." },
            { time: "09:10", event: "Security Team Detects Anomaly", desc: "Security operations center (SOC) detects suspicious host behavior or unexpected API calls." },
            { time: "09:15", event: "Quarantine Security Group Applied", desc: "EC2 is isolated at the network layer by stripping standard inbound and outbound traffic rules." },
            { time: "09:20", event: "Attacker Accesses S3 from Outside", desc: "From an external Internet environment, the attacker successfully dispatches requests to Amazon S3 using the stolen credentials." }
          ],
          whyTitle: "Why does this happen?",
          whyParagraph: "Because Temporary Credentials are not inherently bound to the network origin of the EC2 instance that received them. As long as the credentials have not expired and access has not been denied by security policies, an attacker can exploit the workload identity directly against AWS APIs without needing any ongoing network connection to the original EC2 instance."
        },
        {
          id: "sec-2",
          num: "2",
          title: "2. Network Containment ≠ Identity Containment",
          paragraphs: [
            "A critical pitfall in cloud incident response is failing to distinguish between two distinct control planes: Network Containment (isolating resources at the network perimeter) and Identity Containment (governing and revoking the operational permissions of compromised identities).",
            "Security Groups filter network ingress and egress traffic, but possess zero awareness or authority over IAM sessions. Furthermore, modifying a Security Group does not automatically terminate existing tracked stateful TCP connections.",
            "Private Subnets prevent direct inbound connections from the public Internet, but do not protect against an attacker utilizing exfiltrated credentials from an external machine.",
            "Even IMDSv2, while highly effective against Server-Side Request Forgery (SSRF) exploits, offers no protection once an attacker has established arbitrary code execution on the instance.",
            "Each security mechanism addresses a different failure domain. Stacking security tools without understanding their architectural boundaries does not produce a secure architecture."
          ],
          comparison: [
            { layer: "Network Containment", scope: "Network Layer", mechanism: "Quarantine Security Group, NACLs, Private Subnets", capability: "Blocks network ingress/egress to and from the EC2 instance", limitation: "Cannot invalidate active IAM credentials; does not drop tracked stateful connections immediately." },
            { layer: "Identity Containment", scope: "Identity Layer (IAM)", mechanism: "Revoke Active Sessions, Policy Denials, Detach Instance Profile", capability: "Revokes operational validity of temporary STS credentials", limitation: "Without detaching the Instance Profile, the instance can immediately request new credentials from IMDS." }
          ]
        },
        {
          id: "sec-3",
          num: "3",
          title: "3. If Credentials Are Stolen, Can We Render Them Useless Out of Context?",
          paragraphs: [
            "AWS provides Global Condition Keys that enable organizations to restrict credential usage based on operational context, verifying that request attributes match the issuance environment:",
            "In the illustrated architecture, EC2 resides within a Private Subnet and connects to Amazon S3 and DynamoDB via dedicated Gateway Endpoints.",
            "By authoring IAM Policies that compare credential issuance context with runtime request context, we can deny unauthorized requests originating outside the legitimate network boundary, even when the security token is valid."
          ],
          conditionKeys: [
            { key: "aws:EC2InstanceSourceVPC", desc: "Enforces that requests must originate from the exact VPC where the EC2 instance was granted credentials." },
            { key: "aws:EC2InstanceSourcePrivateIPv4", desc: "Verifies the private IPv4 address assigned to the instance when the credentials were issued." },
            { key: "aws:SourceVpc", desc: "Checks whether the request passed through a specific VPC Endpoint when accessing AWS service APIs." },
            { key: "aws:VpcSourceIp", desc: "Validates the source IP address within the private VPC network space." }
          ],
          policySnippet: `{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "EnforceVpcSourceContext",\n      "Effect": "Deny",\n      "Action": ["s3:*", "dynamodb:*"],\n      "Resource": "*",\n      "Condition": {\n        "StringNotEquals": {\n          "aws:EC2InstanceSourceVPC": "vpc-0123456789abcdef0"\n        }\n      }\n    }\n  ]\n}`,
          warningParagraphs: [
            "However, architects must keep in mind that not all AWS APIs utilize VPC Endpoints. Overly restrictive policies can break legitimate operational workloads.",
            "This mechanism also does not prevent malicious actions carried out directly on the compromised EC2 instance itself.",
            "This is why a robust cloud security strategy demands layered Defense in Depth."
          ]
        },
        {
          id: "sec-4",
          num: "4",
          title: "4. When Security Remediation Causes Operational Outages",
          paragraphs: [
            "AWS IAM provides an Active Session Revocation mechanism using the managed AWSRevokeOlderSessions policy and the aws:TokenIssueTime condition to deny requests from credentials issued prior to a specific cutoff timestamp.",
            "However, imagine a production fleet where 10 EC2 instances share a single IAM Role, but only one instance has been compromised.",
            "Executing a blanket session revocation on that IAM Role immediately disrupts all 9 healthy instances, inducing a widespread cascading outage.",
            "Furthermore, Revoke Active Sessions does not stop the compromised EC2 from immediately querying IMDS for fresh credentials. Therefore, security teams must detach or swap the Instance Profile with a restricted quarantine profile.",
            "At this point, engineering teams confront the delicate trade-off between Security and Availability.",
            "This demonstrates that IAM architecture is not just about granting Least Privilege, but equally about strictly limiting the Blast Radius when an incident occurs."
          ]
        },
        {
          id: "sec-5",
          num: "5",
          title: "5. Architectural Approach on AWS",
          introText: "Synthesizing the architecture diagram, we can construct an Automated Incident Response workflow as follows:",
          components: [
            { name: "AWS CloudTrail", role: "Captures and records AWS API activity. Data Events must be enabled on S3 and DynamoDB for granular data-tier visibility." },
            { name: "Amazon GuardDuty", role: "Continuously monitors security data sources to detect anomalous credential usage (e.g. InstanceCredentialExfiltration.OutsideAWS finding)." },
            { name: "Amazon EventBridge", role: "Matches GuardDuty finding event patterns and triggers automated incident response handlers." },
            { name: "AWS Lambda", role: "Executes an AWS Systems Manager Automation runbook to carry out multi-tiered containment actions." }
          ],
          actionsIntro: "The containment workflow executes across three synchronized action tiers:",
          actions: [
            { title: "Network Containment", desc: "Attaches a Quarantine Security Group and inspects existing stateful connections." },
            { title: "Credential Issuance Containment", desc: "Detaches or swaps the Instance Profile to prevent the instance from receiving fresh privileged credentials." },
            { title: "Identity Containment", desc: "Revokes active IAM Role sessions and verifies policy propagation across AWS endpoints." }
          ],
          conclusionText: "In production environments, actions that carry high operational disruption risks should be governed by appropriate approval workflows. The ultimate goal is not simply deploying more tools, but ensuring that each defensive layer successfully contains damage when another layer fails."
        }
      ],
      keyTakeaway: {
        title: "Key Takeaway",
        p1: "An AWS Incident Response workflow must govern both Network Containment and Identity Containment simultaneously. Isolating EC2 only solves part of the problem if the operational permissions of the compromised identity have not been revoked.",
        p2: "Because in cloud environments, an attack may begin on a host but propagates through identity abuse."
      },
      hashtags: "#AWS #AWSStudyGroup #CloudSecurity #CyberSecurity #IAM #AmazonEC2 #GuardDuty #IncidentResponse #DefenseInDepth #CloudArchitecture",
      referencesTitle: "Official Documentation & References",
      references: [
        {
          title: "AWS Security Incident Response Guide – Containment and Remediation Strategies",
          url: "https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/containment.html"
        },
        {
          title: "AWS IAM Documentation – Revoking IAM Role Temporary Security Credentials",
          url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html"
        },
        {
          title: "Amazon GuardDuty Finding Types – InstanceCredentialExfiltration.OutsideAWS",
          url: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-ec2.html"
        },
        {
title: "View post on AWS Study Group VN community",
          url: "https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/",
          linkText: "View post on AWS Study Group VN community"
        }
      ],
      btnBackToBlogs: "← Back to Articles",
      btnScrollTop: "Scroll to Top ↑"
    }
  }
};

function renderBlogDetail(slug = 's3-express-one-zone') {
  const container = document.getElementById('blog-detail-s3-express-container');
  if (!container) return;

  const lang = app.currentLang || 'vi';
  const targetSlug = slug || 's3-express-one-zone';
  const article = (BLOG_ARTICLES[targetSlug] && BLOG_ARTICLES[targetSlug][lang]) 
    ? BLOG_ARTICLES[targetSlug][lang] 
    : (BLOG_ARTICLES['s3-express-one-zone'] ? BLOG_ARTICLES['s3-express-one-zone'].vi : null);

  if (!article) {
    container.innerHTML = `
      <article class="minimal-article-container" style="text-align:center; padding:60px 20px;">
        <h3 style="font-size:20px; font-weight:700; color:#171717; margin-bottom:16px;">
          ${lang === 'vi' ? 'Bài viết chưa khả dụng' : 'Article Not Found'}
        </h3>
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          ${lang === 'vi' ? '← Quay lại danh sách bài viết' : '← Back to Articles'}
        </button>
      </article>
    `;
    return;
  }

  if (targetSlug === 'aws-event-driven-architecture') {
    renderEventDrivenBlogDetail(container, article, lang);
    return;
  }

  if (targetSlug === 'aws-ec2-identity-containment') {
    renderIdentityContainmentBlogDetail(container, article, lang);
    return;
  }

  const a = article;

  container.innerHTML = `
    <article class="minimal-article-container">
      <!-- Top Back Navigation -->
      <nav class="minimal-article-nav">
        <a href="#/blogs-posted" onclick="event.preventDefault(); navigateTo('blogs-posted');" class="minimal-back-link">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </a>
      </nav>

      <!-- Minimalist Article Header -->
      <header class="minimal-article-header">
        <div class="minimal-category-tag">${escapeHtml(a.category)}</div>
        <h1 class="minimal-article-title">${escapeHtml(a.title)}</h1>

        <!-- Community Post Link under Title -->
        <div style="margin: 4px 0 16px 0;">
          <a href="${escapeHtml(a.facebookUrl || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2309097553188537/')}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="minimal-ref-link"
             style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div class="minimal-article-date">${escapeHtml(a.date)}</div>

        <!-- Architecture Cover Image -->
        <div class="minimal-cover-box">
          <img src="${escapeHtml(a.coverImage)}" alt="${escapeHtml(a.title)}" 
               onclick="openBlogImageModal('${escapeHtml(a.coverImage)}', '${escapeHtml(a.title)}')" 
               title="${lang === 'vi' ? 'Nhấn để xem sơ đồ phóng to' : 'Click to enlarge diagram'}" loading="lazy">
          <div class="minimal-cover-caption">
            ${escapeHtml(a.coverCaption)}
          </div>
        </div>

        <!-- Introductory Summary Lead -->
        <p class="minimal-article-lead">${escapeHtml(a.leadSummary)}</p>
      </header>

      <hr class="minimal-divider">

      <!-- Section 1: Amazon S3 Express One Zone là gì? -->
      <section class="minimal-section" id="s3-sec-1">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[0].title)}</h2>
        ${a.sections[0].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}
        
        <div class="minimal-callout">
          <div style="font-weight:700; color:#171717; margin-bottom:8px;">${escapeHtml(a.sections[0].callout.title)}</div>
          <ul class="minimal-list" style="margin:0; padding-left:18px;">
            ${a.sections[0].callout.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 2: Ưu điểm và hạn chế -->
      <section class="minimal-section" id="s3-sec-2">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[1].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[1].introText)}</p>

        <!-- Comparison Table: S3 Standard vs S3 Express One Zone -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:26%;">${lang === 'vi' ? 'Tiêu chí kỹ thuật' : 'Architectural Criteria'}</th>
                <th style="width:37%;">Amazon S3 Standard</th>
                <th style="width:37%;">Amazon S3 Express One Zone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>${lang === 'vi' ? 'Vị trí lưu trữ dữ liệu' : 'Data Locality'}</strong></td>
                <td>${lang === 'vi' ? 'Tối thiểu 3 Availability Zones (Multi-AZ)' : 'Multi-AZ (Minimum 3 AZs across region)'}</td>
                <td>${lang === 'vi' ? '1 Availability Zone duy nhất (Single-AZ)' : 'Single-AZ (Co-located with compute)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Độ trễ truy xuất' : 'Access Latency'}</strong></td>
                <td>${lang === 'vi' ? 'Hàng chục mili-giây (Tens of ms)' : 'Tens of milliseconds'}</td>
                <td>${lang === 'vi' ? 'Một chữ số mili-giây (1ms – 3ms)' : 'Single-digit milliseconds (1ms – 3ms)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Tốc độ truy xuất tương đối' : 'Relative Throughput'}</strong></td>
                <td>${lang === 'vi' ? 'Chuẩn cơ sở (Baseline 1x)' : 'Baseline reference (1x)'}</td>
                <td>${lang === 'vi' ? 'Nhanh hơn tới 10 lần (Up to 10x)' : 'Up to 10x faster'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Kiến trúc Bucket' : 'Bucket Model'}</strong></td>
                <td>General Purpose Bucket</td>
                <td>Directory Bucket</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Cơ chế xác thực' : 'Authentication Model'}</strong></td>
                <td>${lang === 'vi' ? 'Ký từng request (IAM / Signature V4)' : 'Per-request signature (IAM / SigV4)'}</td>
                <td>Fast Session-Based Authentication</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Chi phí lưu trữ & API' : 'Pricing Structure'}</strong></td>
                <td>${lang === 'vi' ? 'Thấp hơn trên mỗi GB/tháng' : 'Lower baseline capacity cost per GB/mo'}</td>
                <td>${lang === 'vi' ? 'Cao hơn cho dung lượng và thao tác API' : 'Higher GB/mo and API request fees'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Tính năng nâng cao' : 'Advanced Feature Support'}</strong></td>
                <td>${lang === 'vi' ? 'Hỗ trợ đầy đủ: Versioning, CRR, Lifecycle' : 'Full support: Versioning, CRR, Lifecycle'}</td>
                <td>${lang === 'vi' ? 'Chưa hỗ trợ Versioning, CRR, Lifecycle' : 'Versioning, CRR, Lifecycle not supported'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 10px 0;">
            ${lang === 'vi' ? 'Ưu điểm' : 'Core Advantages'}
          </h3>
          <ul class="minimal-list">
            ${a.sections[1].advantages.map(adv => `<li>${adv}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 10px 0;">
            ${lang === 'vi' ? 'Hạn chế & Ranh giới kỹ thuật' : 'Limitations & Caveats'}
          </h3>
          <ul class="minimal-list">
            ${a.sections[1].limitations.map(lim => `<li>${lim}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 3: Phân tích hiệu năng qua ví dụ (Định luật Amdahl) -->
      <section class="minimal-section" id="s3-sec-3">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[2].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[2].introText)}</p>

        <!-- Benchmark Calculation Breakdown -->
        <div style="background:#FAFAFA; border:1px solid #E5E5E5; border-radius:4px; padding:18px 20px; margin:20px 0;">
          <div style="font-size:15px; font-weight:700; color:#171717; margin-bottom:8px;">
            ${lang === 'vi' ? '1. Hệ thống cơ sở (Sử dụng Amazon S3 Standard):' : '1. Baseline System (Using Amazon S3 Standard):'}
          </div>
          <ul class="minimal-list" style="margin:0 0 14px 0; padding-left:20px;">
            <li>${a.sections[2].baselineIo}</li>
            <li>${a.sections[2].baselineCompute}</li>
            <li><strong>${lang === 'vi' ? 'Tổng thời gian' : 'Total Baseline Time'}: 20 + 80 = 100 ${t('minutesUnit')}</strong></li>
          </ul>

          <div style="font-size:15px; font-weight:700; color:#171717; margin-bottom:8px;">
            ${lang === 'vi' ? '2. Nâng cấp sang Amazon S3 Express One Zone (I/O nhanh gấp 10 lần):' : '2. Upgraded to Amazon S3 Express One Zone (10x Faster I/O):'}
          </div>
          <ul class="minimal-list" style="margin:0; padding-left:20px;">
            <li>${lang === 'vi' ? 'Thời gian đọc dữ liệu mới' : 'New Storage Read Time'}: <span class="calc-text">${escapeHtml(a.sections[2].expressIo)}</span></li>
            <li>${lang === 'vi' ? 'Thời gian tính toán CPU/GPU' : 'Compute Processing Time'}: <span class="calc-text">${escapeHtml(a.sections[2].expressCompute)}</span></li>
            <li><strong>${lang === 'vi' ? 'Tổng thời gian mới' : 'New Total Runtime'}: <span class="calc-text">${escapeHtml(a.sections[2].expressTotal)}</span></strong></li>
          </ul>
        </div>

        <!-- Performance Summary Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:28%;">${lang === 'vi' ? 'Giai đoạn thực thi' : 'Execution Stage'}</th>
                <th style="width:24%;">S3 Standard (Baseline)</th>
                <th style="width:24%;">S3 Express One Zone</th>
                <th style="width:24%;">${lang === 'vi' ? 'Mức cải thiện' : 'Improvement'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>${lang === 'vi' ? 'Đọc nạp dữ liệu (I/O Read)' : 'Data Read Time (I/O)'}</strong></td>
                <td>20 ${t('minutesUnit')} (20%)</td>
                <td>2 ${t('minutesUnit')} (2.4%)</td>
                <td>${lang === 'vi' ? 'Nhanh hơn 10 lần (-90%)' : '10x Faster (-90%)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Xử lý tính toán (Compute / GPU)' : 'Compute & Processing'}</strong></td>
                <td>80 ${t('minutesUnit')} (80%)</td>
                <td>80 ${t('minutesUnit')} (97.6%)</td>
                <td>${lang === 'vi' ? '0% (Không đổi)' : '0% (Unchanged)'}</td>
              </tr>
              <tr>
                <td><strong>${lang === 'vi' ? 'Tổng thời gian hoàn thành' : 'Total End-to-End Time'}</strong></td>
                <td><strong>100 ${t('minutesUnit')}</strong></td>
                <td><strong>82 ${t('minutesUnit')}</strong></td>
                <td><strong>${lang === 'vi' ? 'Rút ngắn 18% (Speedup 1.22x)' : '18% faster (Speedup 1.22x)'}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="minimal-p">${escapeHtml(a.sections[2].speedupSummary)}</p>

        <!-- Amdahl's Law Formula Block -->
        <div class="minimal-formula-box">
          <strong>${lang === 'vi' ? 'Công thức Định luật Amdahl (Amdahl\'s Law Speedup Formula):' : 'Amdahl\'s Law Speedup Formula:'}</strong><br><br>
          Speedup(overall) = 1 / [ (1 - Fraction_enhanced) + (Fraction_enhanced / Speedup_component) ]<br>
          Speedup = 1 / [ (1 - 0.20) + (0.20 / 10) ]<br>
          Speedup = 1 / [ 0.80 + 0.02 ]<br>
          Speedup = 1 / 0.82 ≈ <strong>1.22x (${lang === 'vi' ? 'Tương đương rút ngắn ~18% tổng thời gian toàn hệ thống' : 'Equivalent to ~18% end-to-end runtime reduction'})</strong>
        </div>

        <div class="minimal-callout">
          <strong>${lang === 'vi' ? 'Đúc kết kỹ thuật quan trọng:' : 'Crucial Technical Insight:'}</strong>
          <p style="margin:6px 0 0 0;">${escapeHtml(a.sections[2].amdahlQuote)}</p>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 4: Góc nhìn và Đề xuất ứng dụng (Kiến trúc lưu trữ 2 lớp) -->
      <section class="minimal-section" id="s3-sec-4">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[3].title)}</h2>
        <p class="minimal-p">${a.sections[3].introText}</p>

        <!-- Two-Tier Storage Architecture Diagram -->
        <div class="minimal-tier-diagram">
          <div class="minimal-tier-node">
            <div class="minimal-tier-node-title">${escapeHtml(a.sections[3].tiers[0].title)}</div>
            <div style="font-size:12px; color:#555555; margin-bottom:6px; font-weight:600;">${escapeHtml(a.sections[3].tiers[0].sub)}</div>
            <div class="minimal-tier-node-desc">${escapeHtml(a.sections[3].tiers[0].desc)}</div>
          </div>
          <div class="minimal-tier-arrow">→</div>
          <div class="minimal-tier-node">
            <div class="minimal-tier-node-title">${escapeHtml(a.sections[3].tiers[1].title)}</div>
            <div style="font-size:12px; color:#555555; margin-bottom:6px; font-weight:600;">${escapeHtml(a.sections[3].tiers[1].sub)}</div>
            <div class="minimal-tier-node-desc">${escapeHtml(a.sections[3].tiers[1].desc)}</div>
          </div>
          <div class="minimal-tier-arrow">↔</div>
          <div class="minimal-tier-node">
            <div class="minimal-tier-node-title">${escapeHtml(a.sections[3].tiers[2].title)}</div>
            <div style="font-size:12px; color:#555555; margin-bottom:6px; font-weight:600;">${escapeHtml(a.sections[3].tiers[2].sub)}</div>
            <div class="minimal-tier-node-desc">${escapeHtml(a.sections[3].tiers[2].desc)}</div>
          </div>
        </div>

        <p class="minimal-p">${a.sections[3].caseStudy}</p>

        <!-- ROI Formula Box -->
        <div class="minimal-formula-box">
          <strong>${escapeHtml(a.sections[3].roiQuestion)}</strong><br><br>
          <code>${escapeHtml(a.sections[3].roiMath)}</code>
        </div>
        <p class="minimal-p">${escapeHtml(a.sections[3].roiExplanation)}</p>
      </section>

      <hr class="minimal-divider">

      <!-- Section 5: Kết luận & Đúc kết kiến trúc -->
      <section class="minimal-section" id="s3-sec-5">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[4].title)}</h2>
        ${a.sections[4].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}

        <div class="minimal-callout">
          “${escapeHtml(a.sections[4].goldenQuote)}”
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 12px 0;">
            ${escapeHtml(a.sections[4].checklistTitle)}
          </h3>
          <ul class="minimal-list">
            ${a.sections[4].checklistItems.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Official AWS References -->
      <section class="minimal-section">
        <h2 class="minimal-section-title">${escapeHtml(a.referencesTitle)}</h2>
        <ol class="minimal-ref-list">
          ${a.references.map(ref => `
            <li>
              <a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener" class="minimal-ref-link">
                ${escapeHtml(ref.title)}
              </a>
            </li>
          `).join('')}
        </ol>
      </section>

      <!-- Bottom Navigation Footer -->
      <footer class="minimal-footer-nav">
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </button>
        <button type="button" class="btn-minimal-outline" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>${escapeHtml(a.btnScrollTop)}</span>
        </button>
      </footer>
    </article>
  `;
}

function renderEventDrivenBlogDetail(container, a, lang) {
  container.innerHTML = `
    <article class="minimal-article-container">
      <!-- Top Back Navigation -->
      <nav class="minimal-article-nav">
        <a href="#/blogs-posted" onclick="event.preventDefault(); navigateTo('blogs-posted');" class="minimal-back-link">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </a>
      </nav>

      <!-- Minimalist Article Header -->
      <header class="minimal-article-header">
        <div class="minimal-category-tag">${escapeHtml(a.category)}</div>
        <h1 class="minimal-article-title">${escapeHtml(a.title)}</h1>

        <!-- Community Post Link under Title -->
        <div style="margin: 4px 0 16px 0;">
          <a href="${escapeHtml(a.facebookUrl || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2326019258163033/')}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="minimal-ref-link"
             style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div class="minimal-article-date">${escapeHtml(a.date)}</div>

        <!-- Architecture Cover Image -->
        <div class="minimal-cover-box">
          <img src="${escapeHtml(a.coverImage)}" alt="${escapeHtml(a.title)}" 
               onclick="openBlogImageModal('${escapeHtml(a.coverImage)}', '${escapeHtml(a.title)}')" 
               title="${lang === 'vi' ? 'Nhấn để xem sơ đồ phóng to' : 'Click to enlarge diagram'}" loading="lazy">
          <div class="minimal-cover-caption">
            ${escapeHtml(a.coverCaption)}
          </div>
        </div>

        <!-- Introductory Summary Lead -->
        <p class="minimal-article-lead">${escapeHtml(a.leadSummary)}</p>
      </header>

      <hr class="minimal-divider">

      <!-- Section 1: VẤN ĐỀ Ở ĐÂY LÀ GÌ? -->
      <section class="minimal-section" id="eda-sec-1">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[0].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[0].paragraphs[0])}</p>
        <p class="minimal-p">${escapeHtml(a.sections[0].paragraphs[1])}</p>

        <ul class="minimal-list">
          ${a.sections[0].scenarioItems.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <p class="minimal-p">${escapeHtml(a.sections[0].paragraphs[2])}</p>

        <!-- Race Condition Timeline Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                ${a.sections[0].table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${a.sections[0].table.rows.map(r => `
                <tr>
                  ${r.map(cell => `<td>${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="minimal-callout">
          ${escapeHtml(a.sections[0].keyInsight)}
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 2: VẬY TẠI SAO IDEMPOTENCY VÀ SQS CHƯA ĐỦ? -->
      <section class="minimal-section" id="eda-sec-2">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[1].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[1].paragraphs[0])}</p>

        <ul class="minimal-list">
          ${a.sections[1].points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </section>

      <hr class="minimal-divider">

      <!-- Section 3: ĐỀ XUẤT -->
      <section class="minimal-section" id="eda-sec-3">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[2].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[2].introText)}</p>

        <ul class="minimal-list">
          ${a.sections[2].solutions.map(sol => `<li>${sol}</li>`).join('')}
        </ul>

        <!-- Solution Component Role Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                ${a.sections[2].table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${a.sections[2].table.rows.map(r => `
                <tr>
                  ${r.map(cell => `<td>${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- DynamoDB Conditional Write Code Box -->
        <div class="minimal-formula-box">
          <strong>${escapeHtml(a.sections[2].conditionTitle)}</strong><br><br>
          <pre style="margin:0; font-family:inherit; font-size:inherit; white-space:pre-wrap;">${escapeHtml(a.sections[2].conditionCode)}</pre>
        </div>

        <p class="minimal-p">${escapeHtml(a.sections[2].postText)}</p>

        <div class="minimal-callout">
          ${escapeHtml(a.sections[2].partialFailureNote)}
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 4: KẾT LUẬN -->
      <section class="minimal-section" id="eda-sec-4">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[3].title)}</h2>
        ${a.sections[3].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}

        <div class="minimal-callout">
          “${escapeHtml(a.sections[3].goldenQuote)}”
        </div>

        <div style="margin-top:24px;">
          <h3 style="font-size:16.5px; font-weight:700; color:#171717; margin:0 0 12px 0;">
            ${escapeHtml(a.sections[3].checklistTitle)}
          </h3>
          <ul class="minimal-list">
            ${a.sections[3].checklistItems.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Official AWS References -->
      <section class="minimal-section">
        <h2 class="minimal-section-title">${escapeHtml(a.referencesTitle)}</h2>
        <ol class="minimal-ref-list">
          ${a.references.map(ref => `
            <li>
              <a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener" class="minimal-ref-link">
                ${escapeHtml(ref.title)}
              </a>
            </li>
          `).join('')}
        </ol>
      </section>

      <!-- Bottom Navigation Footer -->
      <footer class="minimal-footer-nav">
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </button>
        <button type="button" class="btn-minimal-outline" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>${escapeHtml(a.btnScrollTop)}</span>
        </button>
      </footer>
    </article>
  `;
}

function renderIdentityContainmentBlogDetail(container, a, lang) {
  container.innerHTML = `
    <article class="minimal-article-container">
      <!-- Top Back Navigation -->
      <nav class="minimal-article-nav">
        <a href="#/blogs-posted" onclick="event.preventDefault(); navigateTo('blogs-posted');" class="minimal-back-link">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </a>
      </nav>

      <!-- Minimalist Article Header -->
      <header class="minimal-article-header">
        <div class="minimal-category-tag">${escapeHtml(a.category)}</div>
        <h1 class="minimal-article-title">${escapeHtml(a.title)}</h1>
        <div style="font-size:16px; font-weight:600; color:#555555; margin:-4px 0 10px 0; font-style:italic;">
          ${escapeHtml(a.subtitle)}
        </div>

        <!-- Community Post Link under Title & Subtitle -->
        <div style="margin: 4px 0 16px 0;">
          <a href="${escapeHtml(a.facebookUrl || 'https://www.facebook.com/groups/awsstudygroupfcj/posts/2338656276899331/')}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="minimal-ref-link"
             style="font-size:14.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
            <span>${lang === 'vi' ? 'Xem bài viết trên cộng đồng AWS Study Group VN' : 'View post on AWS Study Group VN community'}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <div class="minimal-article-date">${escapeHtml(a.date)}</div>

        <!-- Architecture Cover Image -->
        <div class="minimal-cover-box">
          <img src="${escapeHtml(a.coverImage)}" alt="${escapeHtml(a.title)}" 
               onclick="openBlogImageModal('${escapeHtml(a.coverImage)}', '${escapeHtml(a.title)}')" 
               title="${lang === 'vi' ? 'Nhấn để xem sơ đồ phóng to' : 'Click to enlarge diagram'}" loading="lazy">
          <div class="minimal-cover-caption">
            ${escapeHtml(a.coverCaption)}
          </div>
        </div>

        <!-- Introductory Summary Lead -->
        <p class="minimal-article-lead">${escapeHtml(a.leadSummary)}</p>
      </header>

      <hr class="minimal-divider">

      <!-- Section 1 -->
      <section class="minimal-section" id="ic-sec-1">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[0].title)}</h2>
        ${a.sections[0].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}

        <!-- Incident Timeline Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:16%;">${lang === 'vi' ? 'Thời điểm' : 'Time'}</th>
                <th style="width:32%;">${lang === 'vi' ? 'Sự kiện / Hành động' : 'Event / Action'}</th>
                <th style="width:52%;">${lang === 'vi' ? 'Ý nghĩa kỹ thuật & Trạng thái' : 'Technical Implication & State'}</th>
              </tr>
            </thead>
            <tbody>
              ${a.sections[0].timeline.map(row => `
                <tr>
                  <td><strong>${escapeHtml(row.time)}</strong></td>
                  <td>${escapeHtml(row.event)}</td>
                  <td>${escapeHtml(row.desc)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="minimal-callout">
          <div style="font-weight:700; color:#171717; margin-bottom:6px;">
            ${escapeHtml(a.sections[0].whyTitle)}
          </div>
          <p style="margin:0; font-size:15px; line-height:1.7;">
            ${escapeHtml(a.sections[0].whyParagraph)}
          </p>
        </div>
      </section>

      <hr class="minimal-divider">

      <!-- Section 2 -->
      <section class="minimal-section" id="ic-sec-2">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[1].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[1].paragraphs[0])}</p>

        <!-- Comparison Table: Network vs Identity Containment -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:24%;">${lang === 'vi' ? 'Lớp kiểm soát' : 'Control Layer'}</th>
                <th style="width:22%;">${lang === 'vi' ? 'Cơ chế triển khai' : 'Mechanism'}</th>
                <th style="width:27%;">${lang === 'vi' ? 'Khả năng bảo vệ' : 'Capability'}</th>
                <th style="width:27%;">${lang === 'vi' ? 'Giới hạn cốt lõi' : 'Core Limitation'}</th>
              </tr>
            </thead>
            <tbody>
              ${a.sections[1].comparison.map(c => `
                <tr>
                  <td><strong>${escapeHtml(c.layer)}</strong><br><small style="color:#666;">${escapeHtml(c.scope)}</small></td>
                  <td>${escapeHtml(c.mechanism)}</td>
                  <td>${escapeHtml(c.capability)}</td>
                  <td>${escapeHtml(c.limitation)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        ${a.sections[1].paragraphs.slice(1).map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}
      </section>

      <hr class="minimal-divider">

      <!-- Section 3 -->
      <section class="minimal-section" id="ic-sec-3">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[2].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[2].paragraphs[0])}</p>

        <ul class="minimal-list">
          ${a.sections[2].conditionKeys.map(k => `
            <li><code>${escapeHtml(k.key)}</code>: ${escapeHtml(k.desc)}</li>
          `).join('')}
        </ul>

        <p class="minimal-p">${escapeHtml(a.sections[2].paragraphs[1])}</p>
        <p class="minimal-p">${escapeHtml(a.sections[2].paragraphs[2])}</p>

        <!-- Monospace IAM Condition Code Block -->
        <div class="minimal-formula-box">
          <div style="font-size:12px; color:#666; margin-bottom:8px; font-family:sans-serif; font-weight:600;">
            ${lang === 'vi' ? 'Ví dụ: IAM Policy Deny truy cập ngoài VPC nguồn (Context-Aware Enforcement)' : 'Example: IAM Policy Deny access outside source VPC (Context-Aware Enforcement)'}
          </div>
          <pre style="margin:0; font-family:inherit; white-space:pre-wrap;">${escapeHtml(a.sections[2].policySnippet)}</pre>
        </div>

        ${a.sections[2].warningParagraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}
      </section>

      <hr class="minimal-divider">

      <!-- Section 4 -->
      <section class="minimal-section" id="ic-sec-4">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[3].title)}</h2>
        ${a.sections[3].paragraphs.map(p => `<p class="minimal-p">${escapeHtml(p)}</p>`).join('')}
      </section>

      <hr class="minimal-divider">

      <!-- Section 5 -->
      <section class="minimal-section" id="ic-sec-5">
        <h2 class="minimal-section-title">${escapeHtml(a.sections[4].title)}</h2>
        <p class="minimal-p">${escapeHtml(a.sections[4].introText)}</p>

        <!-- Components Breakdown Table -->
        <div class="minimal-table-wrap">
          <table class="minimal-table">
            <thead>
              <tr>
                <th style="width:28%;">${lang === 'vi' ? 'Dịch vụ AWS' : 'AWS Service'}</th>
                <th style="width:72%;">${lang === 'vi' ? 'Vai trò trong quy trình Incident Response' : 'Role in Incident Response'}</th>
              </tr>
            </thead>
            <tbody>
              ${a.sections[4].components.map(comp => `
                <tr>
                  <td><strong>${escapeHtml(comp.name)}</strong></td>
                  <td>${escapeHtml(comp.role)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <p class="minimal-p"><strong>${escapeHtml(a.sections[4].actionsIntro)}</strong></p>

        <div class="minimal-callout">
          <ul class="minimal-list" style="margin:0; padding-left:18px;">
            ${a.sections[4].actions.map(act => `
              <li><strong>${escapeHtml(act.title)}:</strong> ${escapeHtml(act.desc)}</li>
            `).join('')}
          </ul>
        </div>

        <p class="minimal-p">${escapeHtml(a.sections[4].conclusionText)}</p>
      </section>

      <!-- Key Takeaway Callout -->
      <div class="minimal-callout" style="border-left: 3px solid #171717; background:#F8FAFC; margin:32px 0;">
        <div style="font-size:16px; font-weight:700; color:#171717; margin-bottom:8px;">
          ${escapeHtml(a.keyTakeaway.title)}
        </div>
        <p style="margin:0 0 10px 0; font-size:15px; line-height:1.7;">
          ${escapeHtml(a.keyTakeaway.p1)}
        </p>
        <p style="margin:0; font-size:15.5px; font-weight:700; color:#171717; line-height:1.7;">
          ${escapeHtml(a.keyTakeaway.p2)}
        </p>
      </div>

      <!-- Hashtags -->
      <div style="margin:24px 0; font-size:13.5px; color:#555555; line-height:1.8; word-spacing:4px;">
        ${escapeHtml(a.hashtags)}
      </div>

      <hr class="minimal-divider">

      <!-- References Section -->
      <section class="minimal-section" id="ic-sec-refs">
        <h2 class="minimal-section-title" style="font-size:18px;">
          ${a.referencesTitle || (lang === 'vi' ? 'Tài liệu tham khảo' : 'Official Documentation & References')}
        </h2>
        <ul class="minimal-ref-list">
          ${a.references.map(ref => `
            <li>
              ${ref.title && ref.title !== ref.linkText ? `<span>${escapeHtml(ref.title)}:</span> ` : ''}
              <a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer" class="minimal-ref-link">
                ${escapeHtml(ref.linkText || ref.url)}
              </a>
            </li>
          `).join('')}
        </ul>
      </section>

      <!-- Minimal Footer Navigation -->
      <footer class="minimal-footer-nav">
        <button type="button" class="btn-minimal-outline" onclick="navigateTo('blogs-posted')">
          <span>${escapeHtml(a.btnBackToBlogs)}</span>
        </button>
        <button type="button" class="btn-minimal-outline" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>${escapeHtml(a.btnScrollTop)}</span>
        </button>
      </footer>
    </article>
  `;
}

// ==========================================
// 10. 4. EVENTS PARTICIPATED MODULE
// ==========================================
const EVENT_REPORTS = {
  'first-cloud-ai-journey-24-10-2026': {
    vi: {
      breadcrumb: "First Cloud AI Journey: Weekly Meet Up 24/10",
      badgeText: "BÁO CÁO THU HOẠCH SỰ KIỆN",
      sessionTag: "Session 1 • Voice AI & Contact Center trên AWS",
      title: "BÁO CÁO THU HOẠCH – SESSION 1: VOICE AI & CONTACT CENTER",
      subtitle: "First Cloud AI Journey: Weekly Meet Up 24/10",
      metaHeader: "Thông tin sự kiện chính thức",
      lblEventName: "Tên sự kiện",
      eventName: "First Cloud AI Journey: Weekly Meet Up 24/10",
      lblDateTime: "Ngày & Giờ tham gia",
      dateTime: "08:30 – 12:00, 24/10/2026",
      lblLocation: "Địa điểm",
      location: "Chưa xác nhận",
      lblRole: "Vai trò tham gia",
      role: "Người tham dự (Attendee)",
      lblSpeaker: "Diễn giả Session 1",
      speaker: "Kiệt Trần – AI Engineer tại Re AI (AWS Partner)",
      lblTopic: "Chủ đề Session 1",
      topic: "Tích hợp Voice AI vào Contact Center doanh nghiệp trên nền tảng AWS",
      metaNotice: "* Lưu ý: Thời gian 08:30 – 12:00 là khung giờ tham dự sự kiện tổng thể, không phản ánh riêng thời lượng Session 1. Địa điểm ghi nhận chính thức theo ban tổ chức (không suy đoán địa chỉ).",
      complianceTitle: "Khung 7 Tiêu chí Báo cáo Sự kiện của Doanh nghiệp",
      crit1: "Tên sự kiện: First Cloud AI Journey 24/10",
      crit2: "Thời gian: 08:30 – 12:00, 24/10/2026",
      crit3: "Địa điểm: Chưa xác nhận",
      crit4: "Vai trò: Người tham dự (Attendee)",
      crit5: "Nội dung tiếp thu: Session 1 Voice AI",
      crit6: "Hình ảnh check-in rõ mặt (Đang chờ cập nhật)",
      crit7: "Bài học rút ra & Đóng góp cá nhân",
      
      sec1Num: "01",
      sec1Title: "Tổng quan phiên chia sẻ",
      sec1Problem: "Session 1 tập trung giải quyết bài toán cốt lõi:",
      sec1Quote: "“Làm thế nào để tích hợp Voice AI vào hệ thống Contact Center doanh nghiệp, đảm bảo khả năng đàm thoại hai chiều với độ trễ thấp, chi phí vận hành hợp lý và trải nghiệm tự nhiên?”",
      sec1P1: "Theo nội dung diễn giả chia sẻ, con người có thể phản xạ tự nhiên trong khoảng <strong>200ms</strong> ở một số tình huống giao tiếp đời thực. Khi hệ thống Voice AI phản hồi chậm từ <strong>3–5 giây</strong>, trải nghiệm hội thoại có thể bị ảnh hưởng đáng kể: tạo ra những khoảng lặng ngắt quãng, làm gián đoạn nhịp đàm thoại (turn-taking) và gây cảm giác khó chịu cho khách hàng.",
      sec1P2: "Do đó, việc giảm độ trễ phản hồi toàn trình (End-to-End Latency) xuống ngưỡng tự nhiên (< 2 giây) là một trong những mục tiêu kỹ thuật quan trọng hàng đầu khi thiết kế hệ thống Contact Center doanh nghiệp.",

      sec2Num: "02",
      sec2Title: "Kiến trúc Voice AI (Mô hình Cascade)",
      sec2Desc: "Phiên chia sẻ trình bày kiến trúc xử lý tuần tự (Cascade Architecture) bao gồm các thành phần:",
      sec2Pipeline: "Speech Input → STT → LLM → Guardrails → TTS → Voice Output",
      sec2STT: "<strong>STT (Speech-to-Text):</strong> Chuyển đổi dòng âm thanh đầu vào của người dùng thành văn bản theo thời gian thực.",
      sec2LLM: "<strong>LLM (Large Language Model):</strong> Đóng vai trò bộ não suy luận, hiểu ngữ cảnh hội thoại và sinh nội dung phản hồi logic.",
      sec2Guardrails: "<strong>Guardrails:</strong> Lớp kiểm tra, kiểm soát nội dung phản hồi, rà soát ảo giác (hallucination), lọc bỏ thông tin định danh nhạy cảm (PII) và bảo đảm tuân thủ chính sách doanh nghiệp.",
      sec2TTS: "<strong>TTS (Text-to-Speech):</strong> Chuyển văn bản phản hồi đã kiểm duyệt thành giọng nói tự nhiên trước khi phát lại cho người nghe.",
      sec2Advantage: "<strong>Ưu điểm nổi bật:</strong> Trong bài toán được chia sẻ, ưu điểm then chốt của kiến trúc này là khả năng kiểm soát nội dung chặt chẽ qua lớp Guardrails trước khi phát âm, đảm bảo tính an toàn thương hiệu và tuân thủ các quy định bảo mật nghiệp vụ.",
      sec2Nuance: "<strong>Đánh giá kiến trúc:</strong> Cần lưu ý rằng Cascade không phải là kiến trúc tối ưu tuyệt đối cho mọi bài toán do sự tích lũy độ trễ qua từng bước nối tiếp (STT + LLM + Guardrails + TTS). Mặc dù các mô hình Speech-to-Speech trực tiếp (End-to-End S2S) có thể giảm độ trễ, Cascade vẫn là lựa chọn thực tiễn hàng đầu trong môi trường doanh nghiệp nhờ tính mô-đun hóa cao, dễ dàng kiểm toán từng khâu và cho phép linh hoạt nâng cấp độc lập từng thành phần.",
      diagramCaption: "Sơ đồ luồng xử lý Voice AI Cascade tích hợp lớp bảo vệ Guardrails trên hạ tầng AWS",

      sec3Num: "03",
      sec3Title: "Hạ tầng AWS & Kỹ thuật Mạng đám mây",
      sec3Desc: "Các công nghệ hạ tầng cốt lõi được đề cập và phân tích trong session:",
      sec3WebRTC: "<strong>WebRTC / UDP:</strong> Hỗ trợ truyền âm thanh thời gian thực hai chiều với độ trễ thấp. Giao thức UDP loại bỏ độ trễ do cơ chế retransmission và head-of-line blocking của TCP, duy trì luồng audio ổn định ngay cả trong điều kiện mạng biến động.",
      sec3EC2: "<strong>Amazon EC2 GPU:</strong> Cung cấp hạ tầng tính toán tăng tốc phần cứng (GPU instances) để tối ưu hóa thời gian suy luận (inference latency) của các mô hình STT và TTS cục bộ.",
      sec3PrivateLink: "<strong>AWS PrivateLink:</strong> Hỗ trợ kết nối riêng tư, an toàn giữa VPC và các dịch vụ tương thích trong AWS mà không cần định tuyến qua Internet công cộng, giúp giảm số lượng network hops và bảo vệ dữ liệu hội thoại nhạy cảm.",
      sec3Networking: "<strong>Cloud Networking:</strong> Thiết kế VPC, Subnet, Route Table và vị trí Availability Zone ảnh hưởng trực tiếp đến độ trễ truyền gói tin (RTT), tính ổn định và khả năng vận hành liên tục của hệ thống.",
      sec3Insight: "<strong>Nhận định kỹ thuật quan trọng:</strong> <em>Hiệu năng của mô hình LLM đơn thuần không thể quyết định toàn bộ hiệu năng của hệ thống Voice AI.</em> Độ trễ người dùng cảm nhận là tổng hòa của cả chuỗi truyền dẫn: từ việc stream gói tin qua UDP, xử lý Voice Activity Detection (VAD), thời gian nhận dạng STT, độ trễ sinh token đầu tiên của LLM (TTFT), quá trình duyệt qua Guardrails, cho đến việc tổng hợp TTS thành từng audio chunk để phát lại. Tối ưu hạ tầng mạng và pipeline streaming quan trọng không kém việc lựa chọn mô hình LLM.",

      sec4Num: "04",
      sec4Title: "Tối ưu hóa Hiệu năng & Chi phí vận hành",
      sec4P1: "Theo số liệu trình bày từ diễn giả trong phiên chia sẻ, các chỉ số đo lường hiệu năng và chi phí được cân đối cụ thể:",
      sec4Metric1Val: "~200ms",
      sec4Metric1Lbl: "Mốc phản xạ tự nhiên",
      sec4Metric1Sub: "Được đề cập làm chuẩn tham chiếu",
      sec4Metric2Val: "< 2 giây",
      sec4Metric2Lbl: "Độ trễ toàn trình",
      sec4Metric2Sub: "Mục tiêu phản hồi của hệ thống",
      sec4Metric3Val: "~3.000 VNĐ",
      sec4Metric3Lbl: "Chi phí / cuộc gọi",
      sec4Metric3Sub: "Mức chi phí bình quân chia sẻ",
      sec4Attribution: "* Các chỉ số trên được trích dẫn trực tiếp từ bài thuyết trình của diễn giả tại phiên chia sẻ.",
      sec4LessonQuote: "“Một giải pháp AI triển khai thực tế không chỉ cần khả năng phản hồi thông minh, mà còn phải tối ưu độ trễ, chi phí và độ ổn định.”",

      sec5Num: "05",
      sec5Title: "Nghiên cứu điển hình tại VPBank (VPBank Case Study)",
      sec5Desc: "Theo số liệu diễn giả chia sẻ trong bài trình bày, dự án triển khai Voice AI thực tế tại VPBank đạt được các kết quả ban đầu:",
      sec5Metric1Val: "282",
      sec5Metric1Lbl: "Ứng viên",
      sec5Metric1Sub: "Được phỏng vấn tự động hoàn toàn",
      sec5Metric2Val: "90%",
      sec5Metric2Lbl: "Độ chính xác",
      sec5Metric2Sub: "Nhận diện ý định được báo cáo",
      sec5Metric3Val: "62%",
      sec5Metric3Lbl: "Tỷ lệ nộp đơn",
      sec5Metric3Sub: "Tỷ lệ ứng viên hoàn thành hồ sơ",
      sec5Disclaimer: "* Lưu ý: Các chỉ số trên do diễn giả chia sẻ trong phiên trình bày nhằm minh họa cho bài toán thực tế, chưa qua kiểm chứng độc lập.",

      sec6Num: "06",
      sec6Title: "Trực quan Live Demo tại Hội trường",
      sec6Desc: "Hệ thống Voice AI được demo trực tiếp thông qua cuộc gọi điện thoại phỏng vấn ứng viên tuyển dụng vị trí Cloud Architect:",
      sec6Item1: "<strong>Kiến trúc VPC ba tầng:</strong> Voice AI đặt câu hỏi kiểm tra kiến thức thiết kế 3-tier VPC (Public Subnet cho ALB, Private Subnet cho App/EKS, Isolated Subnet cho Database).",
      sec6Item2: "<strong>Đánh giá năng lực Cloud Architecture:</strong> Thẩm định tư duy phân tầng bảo mật, Route Table, NAT Gateway và tính sẵn sàng cao (High Availability).",
      sec6Item3: "<strong>Thương lượng kỳ vọng thu nhập:</strong> Trao đổi linh hoạt về mức lương mong muốn khoảng 20 triệu đồng và ghi nhận phản hồi một cách tự nhiên.",
      sec6Item4: "<strong>Cuộc gọi ngẫu hứng:</strong> Diễn giả thực hiện gọi trực tiếp với một người tham dự tại khán phòng để chứng minh khả năng phản hồi linh hoạt với các biến số âm thanh bất ngờ.",
      sec6Summary: "Buổi demo cho thấy rõ khả năng ứng dụng thực tế của Voice AI trong việc tự động hóa sàng lọc sơ bộ nhân sự, giảm tải cho bộ phận tuyển dụng và chuẩn hóa chất lượng đánh giá ứng viên trong quy trình doanh nghiệp.",

      sec7Num: "07",
      sec7Title: "Những bài học thu hoạch chuyên sâu",
      takeaway1Num: "01",
      takeaway1Title: "Engineering Meets Business",
      takeaway1Body: "Một giải pháp AI thành công cần cân bằng hiệu quả kỹ thuật và hiệu quả kinh tế. Không phải mô hình có số lượng tham số lớn nhất luôn là phương án phù hợp nhất; mô hình có kích thước vừa phải, tối ưu hóa theo domain cụ thể sẽ mang lại chi phí vận hành và độ trễ vượt trội.",
      takeaway2Num: "02",
      takeaway2Title: "Cloud & Networking Matter",
      takeaway2Body: "LLM chỉ là một mắt xích trong toàn bộ hệ thống. Kiến thức nền tảng về WebRTC, giao thức UDP, năng lực tính toán GPU và hạ tầng Cloud Networking đóng vai trò sống còn đối với hiệu suất xử lý đàm thoại thời gian thực.",
      takeaway3Num: "03",
      takeaway3Title: "Vietnamese Speech Processing",
      takeaway3Body: "Quá trình xử lý tiếng Việt thực tế đối mặt với nhiều bài toán kỹ thuật đặc thù: chuẩn hóa từ viết tắt và định dạng tiền tệ (ví dụ: '500k' trong ngữ cảnh số tiền cần được chuẩn hóa thành 'năm trăm nghìn đồng' trước khi chuyển sang TTS), tinh chỉnh độ nhạy Voice Activity Detection (VAD), xử lý tiếng ồn môi trường và kiểm soát ngắt lời (turn-taking) để tránh cướp lời khi người dùng chỉ đang tạm ngắt câu.",
      takeaway4Num: "04",
      takeaway4Title: "AI Safety & Auditing",
      takeaway4Body: "Lớp Guardrails giữ vai trò quyết định trong việc kiểm soát nội dung phản hồi an toàn. Bên cạnh đó, việc lưu trữ call recordings và transcripts hỗ trợ kiểm toán, phân tích lỗi và cải tiến hệ thống, đồng thời bắt buộc phải đáp ứng các tiêu chuẩn bảo mật dữ liệu và quyền riêng tư cá nhân.",

      sec8Num: "08",
      sec8Title: "Bài học rút ra và Đóng góp cá nhân",
      lessonHeading: "Bài học rút ra:",
      lessonQuote: "“Session 1 giúp làm rõ cách một giải pháp AI được triển khai thành hệ thống thực tế phục vụ doanh nghiệp.\n\nViệc xây dựng Voice AI không chỉ phụ thuộc vào LLM mà cần sự kết hợp giữa Cloud Infrastructure, Networking, Real-time Processing, AI Safety và Cost Optimization.\n\nNhững kiến thức này là nền tảng hữu ích cho quá trình học tập, nghiên cứu và thực hành AWS Cloud Engineering.”",
      contribHeading: "Đóng góp cá nhân:",
      contribQuote: "“Tổng hợp và hệ thống hóa nội dung của Session 1, phân tích các thành phần của kiến trúc Voice AI và ghi nhận những kinh nghiệm có thể áp dụng vào quá trình học tập và thực hành.”",

      sec9Num: "09",
      sec9Title: "Hình ảnh Check-in & Hoạt động sự kiện",
      photoPendingBadge: "⏳ Đang chờ cập nhật ảnh chính thức",
      photoPendingTitle: "Hình ảnh Check-in tham gia sự kiện",
      photoPendingDesc: "Theo tiêu chí báo cáo số 6 của công ty (Hình ảnh check-in rõ mặt), khu vực này sẽ hiển thị ảnh check-in thực tế của sinh viên tại sự kiện sau khi có ảnh chính thức. Hệ thống tuân thủ nguyên tắc không sử dụng ảnh giả lập hoặc ảnh không chính chủ nhằm bảo đảm tính minh bạch và trung thực.",
      photoPendingNote: "Khu vực hiển thị ảnh đã sẵn sàng hỗ trợ định dạng độ phân giải cao và tính năng phóng to (lightbox) ngay khi ảnh thực tế được tải lên."
    },
    en: {
      breadcrumb: "First Cloud AI Journey: Weekly Meet Up 24/10",
      badgeText: "EVENT HARVEST REPORT",
      sessionTag: "Session 1 • Voice AI & Contact Center on AWS",
      title: "HARVEST REPORT – SESSION 1: VOICE AI & CONTACT CENTER",
      subtitle: "First Cloud AI Journey: Weekly Meet Up 24/10",
      metaHeader: "Official Event Record",
      lblEventName: "Event Name",
      eventName: "First Cloud AI Journey: Weekly Meet Up 24/10",
      lblDateTime: "Date & Time",
      dateTime: "08:30 – 12:00, 24/10/2026",
      lblLocation: "Location",
      location: "Unconfirmed",
      lblRole: "Participation Role",
      role: "Attendee",
      lblSpeaker: "Session 1 Speaker",
      speaker: "Kiệt Trần – AI Engineer at Re AI (AWS Partner)",
      lblTopic: "Session 1 Topic",
      topic: "Integrating Voice AI into Enterprise Contact Centers on AWS",
      metaNotice: "* Note: 08:30 – 12:00 is the overall event attendance window and does not solely reflect Session 1 duration. Location is recorded per official organizer details (no address invented).",
      complianceTitle: "Company 7 Reporting Criteria Verification Framework",
      crit1: "Event Name: First Cloud AI Journey 24/10",
      crit2: "Time: 08:30 – 12:00, 24/10/2026",
      crit3: "Location: Unconfirmed",
      crit4: "Role: Attendee",
      crit5: "Key Content: Session 1 Voice AI",
      crit6: "Clear Check-in Photo (Pending Upload)",
      crit7: "Lessons Learned & Personal Contribution",
      
      sec1Num: "01",
      sec1Title: "Session Overview",
      sec1Problem: "Session 1 focused on solving a core enterprise engineering challenge:",
      sec1Quote: "“How can enterprises integrate Voice AI into contact center systems, ensuring low-latency two-way voice conversations, reasonable operational costs, and natural user experience?”",
      sec1P1: "According to the speaker, humans exhibit a natural conversational reflex latency of around <strong>200ms</strong> in certain real-life conversational contexts. When a Voice AI system responds with a <strong>3–5 second</strong> delay, the conversational experience deteriorates substantially: awkward pauses appear, conversational turn-taking breaks down, and caller frustration rises quickly.",
      sec1P2: "Consequently, driving down end-to-end response latency to a natural conversational threshold (< 2 seconds) is one of the highest priority technical objectives when architecting modern enterprise contact centers.",

      sec2Num: "02",
      sec2Title: "Voice AI Architecture (Cascade Model)",
      sec2Desc: "The session presented a sequential processing pipeline known as the Cascade Architecture:",
      sec2Pipeline: "Speech Input → STT → LLM → Guardrails → TTS → Voice Output",
      sec2STT: "<strong>STT (Speech-to-Text):</strong> Converts the incoming real-time audio stream from the user into text transcripts.",
      sec2LLM: "<strong>LLM (Large Language Model):</strong> Serves as the cognitive reasoning engine, understanding context, retrieving business knowledge, and synthesizing logical responses.",
      sec2Guardrails: "<strong>Guardrails:</strong> A safety and policy enforcement layer that verifies responses, catches hallucinations, redacts PII, and enforces corporate compliance.",
      sec2TTS: "<strong>TTS (Text-to-Speech):</strong> Synthesizes verified text responses back into natural-sounding speech audio before streaming to the listener.",
      sec2Advantage: "<strong>Key Advantage:</strong> In this enterprise problem setting, the paramount strength of Cascade is the capability to strictly inspect and govern responses via Guardrails prior to vocalization, ensuring brand safety and regulatory compliance.",
      sec2Nuance: "<strong>Architectural Assessment:</strong> Cascade should not be viewed as universally superior for every scenario due to cumulative latency across sequential hops (STT + LLM + Guardrails + TTS). While direct Speech-to-Speech (End-to-End S2S) models reduce latency, Cascade remains the pragmatic enterprise choice thanks to modularity, auditability, and the ability to independently upgrade each pipeline stage.",
      diagramCaption: "Voice AI Cascade pipeline flow with pre-vocalization Guardrails on AWS Cloud Infrastructure",

      sec3Num: "03",
      sec3Title: "AWS Infrastructure & Cloud Networking",
      sec3Desc: "Core infrastructure technologies highlighted and analyzed during the session:",
      sec3WebRTC: "<strong>WebRTC / UDP:</strong> Powers low-latency bidirectional real-time audio streaming. UDP avoids TCP retransmission and head-of-line blocking delays, keeping the audio stream smooth and continuous.",
      sec3EC2: "<strong>Amazon EC2 GPU:</strong> Delivers hardware-accelerated computing (GPU instances) to minimize inference latency for locally hosted STT and TTS models.",
      sec3PrivateLink: "<strong>AWS PrivateLink:</strong> Establishes private, secure connectivity between VPCs and AWS managed services without routing traffic over the public internet, eliminating unnecessary hops and protecting sensitive voice data.",
      sec3Networking: "<strong>Cloud Networking:</strong> VPC subnet architecture, routing tables, and Availability Zone placement directly determine round-trip time (RTT), jitter, and enterprise system SLA.",
      sec3Insight: "<strong>Critical Engineering Insight:</strong> <em>LLM inference performance alone does not determine the overall performance of a Voice AI system.</em> End-to-end user perceived latency is governed by the entire chain: UDP audio packet streaming, jitter buffering, VAD processing, STT transcription, LLM Time-to-First-Token (TTFT), Guardrails inspection, TTS audio chunk generation, and playback. Network and streaming optimization is just as decisive as model selection.",

      sec4Num: "04",
      sec4Title: "Performance & Cost Optimization",
      sec4P1: "According to figures presented by the speaker during the session, performance and cost parameters were balanced as follows:",
      sec4Metric1Val: "~200ms",
      sec4Metric1Lbl: "Natural Reflex Benchmark",
      sec4Metric1Sub: "Human reflex reference cited",
      sec4Metric2Val: "< 2 seconds",
      sec4Metric2Lbl: "End-to-End Latency",
      sec4Metric2Sub: "Target system response time",
      sec4Metric3Val: "~3,000 VND",
      sec4Metric3Lbl: "Cost per Call",
      sec4Metric3Sub: "Average operational cost shared",
      sec4Attribution: "* All numbers above are attributed directly to the speaker's presentation during the session.",
      sec4LessonQuote: "“A real-world production AI solution requires not just intelligent responses, but relentless optimization of latency, operating cost, and systemic stability.”",

      sec5Num: "05",
      sec5Title: "VPBank Case Study",
      sec5Desc: "According to metrics shared by the speaker during the presentation, an initial enterprise Voice AI deployment at VPBank yielded:",
      sec5Metric1Val: "282",
      sec5Metric1Lbl: "Candidates",
      sec5Metric1Sub: "Automatically interviewed end-to-end",
      sec5Metric2Val: "90%",
      sec5Metric2Lbl: "Intent Accuracy",
      sec5Metric2Sub: "Reported intent recognition rate",
      sec5Metric3Val: "62%",
      sec5Metric3Lbl: "Submission Rate",
      sec5Metric3Sub: "Reported application completion rate",
      sec5Disclaimer: "* Note: Metrics were reported by the speaker during the session as an illustrative case study and are not independently verified.",

      sec6Num: "06",
      sec6Title: "Live Demonstration Walkthrough",
      sec6Desc: "The Voice AI system was demonstrated live through an automated screening interview call for a Cloud Architect position:",
      sec6Item1: "<strong>3-Tier VPC Architecture:</strong> Voice AI probed candidate knowledge on multi-tier network isolation (Public Subnets for ALB, Private Subnets for App/EKS, Isolated Subnets for Database).",
      sec6Item2: "<strong>Cloud Architecture Depth:</strong> Evaluated understanding of high availability, Route Tables, NAT Gateways, and security boundaries.",
      sec6Item3: "<strong>Salary Expectation Negotiation:</strong> Seamlessly discussed salary expectations around 20 million VND, recording candidate responses naturally.",
      sec6Item4: "<strong>Spontaneous Test Call:</strong> The speaker placed a live, unscripted call directly to an audience member to test real-time handling of unexpected acoustics and responses.",
      sec6Summary: "The live demonstration vividly highlighted Voice AI's value in automating repetitive preliminary talent screening, easing HR workloads, and standardizing assessment consistency in enterprise hiring workflows.",

      sec7Num: "07",
      sec7Title: "Key Technical Takeaways",
      takeaway1Num: "01",
      takeaway1Title: "Engineering Meets Business",
      takeaway1Body: "A successful AI solution must strike a balance between technical sophistication and economic viability. The largest parameter model is rarely the most suitable; right-sized models tuned for specific domains deliver vastly superior latency and operational costs.",
      takeaway2Num: "02",
      takeaway2Title: "Cloud & Networking Matter",
      takeaway2Body: "The LLM is only one cog in the machine. Solid foundations in WebRTC, UDP protocols, GPU hardware computing, and Cloud Infrastructure are decisive for real-time conversational responsiveness.",
      takeaway3Num: "03",
      takeaway3Title: "Vietnamese Speech Processing",
      takeaway3Body: "Production Vietnamese speech processing involves crucial technical nuances: normalizing abbreviations and currency figures (e.g. '500k' in a financial context must normalize to 'năm trăm nghìn đồng' before TTS), tuning Voice Activity Detection (VAD) thresholds, ambient noise suppression, and managing turn-taking to avoid interrupting speakers during natural pauses.",
      takeaway4Num: "04",
      takeaway4Title: "AI Safety & Auditing",
      takeaway4Body: "Guardrails play an indispensable role in governing safe and compliant responses. Furthermore, call recordings and transcripts support auditing, error analysis, and continuous model improvement while strictly complying with enterprise security and privacy regulations.",

      sec8Num: "08",
      sec8Title: "Lessons Learned & Personal Contribution",
      lessonHeading: "Lessons Learned:",
      lessonQuote: "“Session 1 helped clarify how an AI solution is deployed into a real-world enterprise system.\n\nBuilding Voice AI relies not solely on LLMs, but requires the synthesis of Cloud Infrastructure, Networking, Real-time Processing, AI Safety, and Cost Optimization.\n\nThis knowledge forms a valuable foundation for my ongoing study, research, and hands-on practice in AWS Cloud Engineering.”",
      contribHeading: "Personal Contribution:",
      contribQuote: "“Synthesized and structured the key technical takeaways of Session 1, analyzed the components of the Voice AI architecture, and documented engineering practices applicable to my AWS Cloud learning and hands-on projects.”",

      sec9Num: "09",
      sec9Title: "Event Check-in Photos & Activity",
      photoPendingBadge: "⏳ Pending Authentic Upload",
      photoPendingTitle: "Event Participant Check-in Photo",
      photoPendingDesc: "In accordance with Company Reporting Criterion 6 (Clear participant check-in photo), this section is reserved for the authentic check-in photo of the student attending the event. In adherence to transparency and integrity standards, no artificial or unverified images are used.",
      photoPendingNote: "The display container is configured to support high-fidelity aspect ratio rendering and click-to-enlarge lightbox zoom as soon as the authentic photograph is supplied."
    }
  },
  'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai': {
    vi: {
      breadcrumb: "Sự kiện 1 - Hội thảo Hiện đại hóa Ứng dụng & CSDL với GenAI",
      badgeText: "BÁO CÁO THU HOẠCH SỰ KIỆN",
      sessionTag: "GenAI & Microservices Modernization",
      title: "BÁO CÁO THU HOẠCH – HIỆN ĐẠI HÓA ỨNG DỤNG & CSDL VỚI GENAI",
      subtitle: "Hội thảo chuyên sâu AWS tại Bitexco Financial Tower, TP.HCM",
      metaHeader: "Thông tin sự kiện chính thức",
      lblEventName: "Tên sự kiện",
      eventName: "Sự kiện 1 - Hội thảo Hiện đại hóa Ứng dụng & CSDL với GenAI",
      lblDateTime: "Ngày & Giờ tham gia",
      dateTime: "09:00, 12/08/2026",
      lblLocation: "Địa điểm",
      location: "Tầng 26, Bitexco Financial Tower, Số 02 Hải Triều, Q.1, TP.HCM",
      lblRole: "Vai trò tham gia",
      role: "Khách mời tham dự (Attendee)",
      lblSpeaker: "Diễn giả sự kiện",
      speaker: "Jignesh Shah (Giám đốc CSDL Mã nguồn mở), Erica Liu (Chuyên gia AppMod), Fabrianne Effendi (Kiến trúc sư giải pháp Serverless)",
      lblTopic: "Chủ đề hội thảo",
      topic: "Hiện đại hóa ứng dụng nguyên khối sang Microservices & Tự động hóa nâng cấp mã nguồn với GenAI",
      metaNotice: "* Báo cáo thu hoạch kỹ thuật ghi nhận tại buổi hội thảo công nghệ AWS chuyên sâu.",
      complianceTitle: "Khung 7 Tiêu chí Báo cáo Sự kiện của Doanh nghiệp",
      crit1: "Tên sự kiện: Hội thảo Hiện đại hóa Ứng dụng & CSDL",
      crit2: "Thời gian: 09:00, 12/08/2026",
      crit3: "Địa điểm: Bitexco Tower, Q.1, TP.HCM",
      crit4: "Vai trò: Khách mời tham dự",
      crit5: "Nội dung tiếp thu: Monolith to Microservices, DDD, Amazon Q",
      crit6: "Hình ảnh check-in rõ mặt (Đang chờ cập nhật)",
      crit7: "Bài học rút ra & Đóng góp cá nhân",

      sec1Num: "01",
      sec1Title: "Hạn chế của Kiến trúc Nguyên khối truyền thống",
      sec1Problem: "Thực trạng kiến trúc Monolith trong doanh nghiệp hiện nay:",
      sec1Quote: "“Các hệ thống nguyên khối truyền thống đối mặt với chu kỳ phát hành kéo dài, chi phí vận hành tăng vọt và rủi ro gián đoạn toàn bộ khi chỉ một module gặp lỗi.”",
      sec1P1: "Trong buổi chia sẻ, các chuyên gia AWS đã chỉ ra những nút thắt cố hữu của Monolith: mã nguồn phức tạp (tight coupling), khó mở rộng theo chiều ngang (horizontal scaling), và rủi ro triển khai cao khiến việc phát hành tính năng mới mất nhiều tháng thay vì vài ngày.",
      sec1P2: "Doanh nghiệp cần một lộ trình chuyển đổi kiến trúc có phương pháp, chuyển dịch dần dần sang Microservices mà không làm gián đoạn các luồng kinh doanh đang hoạt động.",

      sec2Num: "02",
      sec2Title: "3 Trụ cột Chuyển đổi Microservices Hiện đại",
      sec2Desc: "Để giải quyết bài toán phân tách hệ thống, chuyên gia AWS đã trình bày 3 trụ cột kỹ thuật trọng tâm:",
      sec2Pipeline: "Queue Management → Caching Strategies → Flexible Message Handling",
      sec2STT: "<strong>1. Quản lý hàng đợi (Queue Management):</strong> Sử dụng Amazon SQS để đệm và tách rời các tiến trình xử lý, đảm bảo khả năng chịu tải và không làm mất thông điệp khi lưu lượng tăng đột biến.",
      sec2LLM: "<strong>2. Chiến lược bộ nhớ đệm (Caching Strategies):</strong> Tận dụng Amazon ElastiCache (Redis/Memcached) để giảm áp lực đọc trực tiếp lên cơ sở dữ liệu quan hệ, đưa độ trễ phản hồi xuống mức dưới một mili-giây.",
      sec2Guardrails: "<strong>3. Xử lý thông điệp linh hoạt (Flexible Messaging):</strong> Áp dụng Amazon SNS và Amazon EventBridge để định tuyến sự kiện và phân tán dữ liệu không đồng bộ giữa các dịch vụ độc lập.",
      sec2Advantage: "<strong>Lợi ích then chốt:</strong> Hệ thống đạt được tính sẵn sàng cao (High Availability), khả năng co giãn độc lập từng dịch vụ và cô lập lỗi hoàn toàn giữa các thành phần.",
      sec2Nuance: "<strong>Lưu ý kiến trúc:</strong> Việc phân rã sang Microservices đòi hỏi quản lý tính nhất quán dữ liệu (eventual consistency) và cơ chế distributed tracing (AWS X-Ray) để giám sát các luồng gọi xuyên suốt.",
      diagramCaption: "Kiến trúc Microservices hiện đại dựa trên Queue, Caching và Event-Driven trên AWS",

      sec3Num: "03",
      sec3Title: "Phương pháp Thiết kế Hướng tên miền (Domain-Driven Design)",
      sec3Desc: "Quy trình thiết kế DDD gồm 4 bước có cấu trúc để phân định ranh giới nghiệp vụ chuẩn xác:",
      sec3WebRTC: "<strong>Bước 1 - Xác định sự kiện nghiệp vụ (Identify Domain Events):</strong> Liệt kê tất cả các sự kiện cốt lõi diễn ra trong quy trình nghiệp vụ của doanh nghiệp (ví dụ: Đơn hàng đã tạo, Thanh toán hoàn tất, Giao hàng bắt đầu).",
      sec3EC2: "<strong>Bước 2 - Sắp xếp dòng thời gian (Arrange Timeline):</strong> Phác thảo chuỗi sự kiện theo trục thời gian tuyến tính để làm rõ luồng phụ thuộc và nguyên nhân - kết quả.",
      sec3PrivateLink: "<strong>Bước 3 - Xác định các tác nhân (Identify Actors):</strong> Xác định các bên kích hoạt hoặc tiếp nhận sự kiện (người dùng, hệ thống bên ngoài, tiến trình chạy ngầm).",
      sec3Networking: "<strong>Bước 4 - Xác định ngữ cảnh bị giới hạn (Define Bounded Contexts):</strong> Gom nhóm các sự kiện và mô hình dữ liệu có tính gắn kết cao vào từng Bounded Context riêng biệt, tạo tiền đề để ánh xạ trực tiếp thành các Microservices độc lập.",
      sec3Insight: "<strong>Nhận định phương pháp luận:</strong> <em>Thiết kế đúng ranh giới Bounded Context ngay từ đầu giúp tránh tình trạng tạo ra 'Distributed Monolith' (nguyên khối phân tán) – một trong những lỗi phổ biến nhất khi chuyển dịch Cloud.</em>",

      sec4Num: "04",
      sec4Title: "Kiến trúc Hướng sự kiện (Event-Driven Architecture)",
      sec4P1: "Hội thảo phân tích sâu 3 mô hình luồng thông điệp chính trong kiến trúc hiện đại:",
      sec4Metric1Val: "Pub/Sub",
      sec4Metric1Lbl: "Mô hình Phát tán",
      sec4Metric1Sub: "Amazon SNS & EventBridge",
      sec4Metric2Val: "P2P",
      sec4Metric2Lbl: "Point-to-Point Queue",
      sec4Metric2Sub: "Amazon SQS Buffer",
      sec4Metric3Val: "Streaming",
      sec4Metric3Lbl: "Luồng Dữ liệu",
      sec4Metric3Sub: "Amazon Kinesis Data Streams",
      sec4Attribution: "* Phân loại dựa trên tài liệu kiến trúc chính thức từ AWS Application Modernization Workshop.",
      sec4LessonQuote: "“Kiến trúc Event-Driven giúp các microservices giao tiếp hoàn toàn phi tập trung, dễ mở rộng và phản ứng linh hoạt với các thay đổi nghiệp vụ theo thời gian thực.”",

      sec5Num: "05",
      sec5Title: "Ứng dụng Trợ lý AI Amazon Q Developer",
      sec5Desc: "Trợ lý AI chuyên biệt của AWS giúp tự động hóa và tăng tốc chu trình hiện đại hóa mã nguồn:",
      sec5Metric1Val: "AppMod",
      sec5Metric1Lbl: "Tự động hóa di chuyển",
      sec5Metric1Sub: "Chuyển đổi Java/Legacy lên Cloud",
      sec5Metric2Val: "Database",
      sec5Metric2Lbl: "Chuyển dịch CSDL",
      sec5Metric2Sub: "Tự động hóa Schema & Code Migration",
      sec5Metric3Val: "Review",
      sec5Metric3Lbl: "Đánh giá An ninh mã nguồn",
      sec5Metric3Sub: "Tích hợp trực tiếp trong IDE",
      sec5Disclaimer: "* Trải nghiệm demo thực tế trong phần chia sẻ của chuyên gia Erica Liu và Fabrianne Effendi.",

      sec6Num: "06",
      sec6Title: "Trực quan Hướng dẫn Demo & Thực hành",
      sec6Desc: "Các nội dung minh họa kỹ thuật nổi bật được diễn giả trình diễn tại Bitexco Financial Tower:",
      sec6Item1: "<strong>Tự động phân tích mã nguồn:</strong> Amazon Q Developer quét kho mã nguồn ứng dụng Java cũ, phát hiện các thư viện lỗi thời và đề xuất phương án refactor lên Java 17/21.",
      sec6Item2: "<strong>Chuyển đổi CSDL thương mại sang mã nguồn mở:</strong> Mô phỏng quy trình dịch chuyển từ Microsoft SQL Server / Oracle sang Amazon Aurora PostgreSQL.",
      sec6Item3: "<strong>Thiết lập hàng đợi bất đồng bộ:</strong> Demo kết nối SQS với Lambda Function và cấu hình Dead-Letter Queue (DLQ) để xử lý thông điệp lỗi.",
      sec6Item4: "<strong>Q&A Chuyên gia:</strong> Phiên giải đáp kỹ thuật chuyên sâu cùng Giám đốc CSDL Mã nguồn mở Jignesh Shah.",
      sec6Summary: "Buổi hội thảo cung cấp bức tranh toàn cảnh và các công cụ thực tế giúp doanh nghiệp và kỹ sư rút ngắn thời gian hiện đại hóa hệ thống từ nhiều năm xuống chỉ còn vài tháng.",

      sec7Num: "07",
      sec7Title: "Những bài học thu hoạch chuyên sâu",
      takeaway1Num: "01",
      takeaway1Title: "Modernization Requires Strategy",
      takeaway1Body: "Hiện đại hóa không chỉ là việc chuyển mã nguồn lên đám mây (Lift and Shift), mà cần tái cấu trúc kiến trúc theo hướng phi tập trung, áp dụng triệt để Domain-Driven Design để chia nhỏ bài toán phức tạp.",
      takeaway2Num: "02",
      takeaway2Title: "Asynchronous Decoupling",
      takeaway2Body: "Sử dụng hàng đợi (SQS) và cơ chế Publish/Subscribe (SNS/EventBridge) là chìa khóa để bảo vệ hệ thống trước sự cố lan chuyền (cascading failures) và hấp thụ lưu lượng tải đột biến.",
      takeaway3Num: "03",
      takeaway3Title: "Database Freedom",
      takeaway3Body: "Chuyển dịch từ các cơ sở dữ liệu thương mại độc quyền sang cơ sở dữ liệu mã nguồn mở tương thích (như PostgreSQL trên Aurora) giúp tối ưu hóa chi phí bản quyền khổng lồ mà vẫn đảm bảo hiệu năng và độ ổn định cấp doanh nghiệp.",
      takeaway4Num: "04",
      takeaway4Title: "AI-Assisted Engineering",
      takeaway4Body: "Trợ lý AI như Amazon Q Developer đang định hình lại phương thức phát triển phần mềm: từ nâng cấp runtime, viết test cases, đến tối ưu hóa truy vấn CSDL, giúp kỹ sư tập trung vào tư duy kiến trúc và logic nghiệp vụ cốt lõi.",

      sec8Num: "08",
      sec8Title: "Bài học rút ra và Đóng góp cá nhân",
      lessonHeading: "Bài học rút ra:",
      lessonQuote: "“Hội thảo giúp em nắm vững tư duy chuyển đổi kiến trúc hệ thống quy mô lớn, từ việc phân tích nghiệp vụ với DDD đến triển khai hạ tầng Serverless và Event-Driven.\n\nĐây là kiến thức nền tảng vô cùng giá trị để em ứng dụng vào quá trình xây dựng đồ án thực tập và định hướng nghề nghiệp Cloud Solutions Architect.”",
      contribHeading: "Đóng góp cá nhân:",
      contribQuote: "“Tham dự đầy đủ buổi hội thảo, ghi chép và hệ thống hóa 4 bước thiết kế DDD, phân tích các trụ cột Microservices và chia sẻ các đúc kết này trong báo cáo thực tập tại AWS.”",

      sec9Num: "09",
      sec9Title: "Hình ảnh tham dự & Hoạt động sự kiện",
      photoPendingBadge: "⏳ Đang chờ cập nhật ảnh chính thức",
      photoPendingTitle: "Hình ảnh tham dự tại Bitexco Financial Tower",
      photoPendingDesc: "Khu vực hiển thị ảnh lưu niệm và check-in tham gia sự kiện của người tham dự. Hệ thống tuân thủ tiêu chuẩn minh bạch và không sử dụng ảnh giả lập.",
      photoPendingNote: "Hỗ trợ tải lên hình ảnh thực tế với chất lượng cao và tính năng phóng to (lightbox) trực tiếp."
    },
    en: {
      breadcrumb: "Event 1 - GenAI App & DB Modernization Workshop",
      badgeText: "EVENT HARVEST REPORT",
      sessionTag: "GenAI & Microservices Modernization",
      title: "HARVEST REPORT – APP & DATABASE MODERNIZATION WITH GENAI",
      subtitle: "In-depth AWS Workshop at Bitexco Financial Tower, HCMC",
      metaHeader: "Official Event Record",
      lblEventName: "Event Name",
      eventName: "Event 1 - GenAI-powered App-DB Modernization Workshop",
      lblDateTime: "Date & Time",
      dateTime: "09:00, August 12, 2026",
      lblLocation: "Location",
      location: "26th Floor, Bitexco Tower, 02 Hai Trieu Street, District 1, Ho Chi Minh City",
      lblRole: "Role",
      role: "Attendee",
      lblSpeaker: "Speakers",
      speaker: "Jignesh Shah (Director, Open Source DBs), Erica Liu (Sr. GTM Specialist), Fabrianne Effendi (Assc. Specialist SA)",
      lblTopic: "Topic",
      topic: "Monolith to Microservices Transformation & AI-Automated Code Migration",
      metaNotice: "* Technical harvest report recorded from the deep-dive AWS architecture workshop.",
      complianceTitle: "Company 7 Reporting Criteria Verification Framework",
      crit1: "Event Name: App & DB Modernization Workshop",
      crit2: "Time: 09:00, August 12, 2026",
      crit3: "Location: Bitexco Tower, District 1, HCMC",
      crit4: "Role: Attendee",
      crit5: "Key Takeaways: Microservices, DDD & Amazon Q Developer",
      crit6: "Check-in Photo (Pending Official Upload)",
      crit7: "Lessons Learned & Personal Contribution",

      sec1Num: "01",
      sec1Title: "Limitations of Legacy Monolithic Architectures",
      sec1Problem: "The challenges of legacy monoliths in modern enterprise environments:",
      sec1Quote: "“Legacy monolithic architectures suffer from protracted release cycles, mounting infrastructure expenses, and high risk of widespread outages caused by a single failing component.”",
      sec1P1: "AWS experts outlined the core bottlenecks of monoliths: tight coupling, inability to scale targeted sub-components horizontally, and high deployment risk leading to feature rollouts taking months instead of days.",
      sec1P2: "Enterprises require a disciplined, phased migration strategy to decouple systems into independent microservices without interrupting ongoing business operations.",

      sec2Num: "02",
      sec2Title: "3 Pillars of Modern Microservices Transition",
      sec2Desc: "To decouple monolithic dependencies, AWS specialists presented three technical pillars:",
      sec2Pipeline: "Queue Management → Caching Strategies → Flexible Message Handling",
      sec2STT: "<strong>1. Queue Management:</strong> Utilizing Amazon SQS to buffer and decouple processes, ensuring resilience and zero message loss during peak traffic bursts.",
      sec2LLM: "<strong>2. Caching Strategies:</strong> Leveraging Amazon ElastiCache (Redis/Memcached) to alleviate database read pressure, delivering sub-millisecond response latencies.",
      sec2Guardrails: "<strong>3. Flexible Message Handling:</strong> Adopting Amazon SNS and EventBridge for asynchronous event routing and publish/subscribe fan-out across independent services.",
      sec2Advantage: "<strong>Core Benefits:</strong> High availability, independent autoscaling per service domain, and complete fault isolation.",
      sec2Nuance: "<strong>Architectural Caution:</strong> Microservices introduce eventual consistency and require distributed tracing (AWS X-Ray) to monitor cross-service request flows.",
      diagramCaption: "Modern Microservices architecture based on Queues, Caching, and Event-Driven workflows on AWS",

      sec3Num: "03",
      sec3Title: "Domain-Driven Design (DDD) 4-Step Methodology",
      sec3Desc: "A structured 4-step framework for establishing clean bounded contexts:",
      sec3WebRTC: "<strong>Step 1 - Identify Domain Events:</strong> Inventory all core events that occur within the business lifecycle (e.g. Order Placed, Payment Authorized, Shipment Dispatched).",
      sec3EC2: "<strong>Step 2 - Arrange Timeline:</strong> Map events chronologically to clarify dependencies, triggers, and cause-and-effect relationships.",
      sec3PrivateLink: "<strong>Step 3 - Identify Actors:</strong> Determine the initiators and recipients of each event (end users, external systems, automated workers).",
      sec3Networking: "<strong>Step 4 - Define Bounded Contexts:</strong> Cluster related events and data models into discrete Bounded Contexts, mapping directly to microservice boundaries.",
      sec3Insight: "<strong>Methodological Insight:</strong> <em>Defining accurate Bounded Contexts prevents creating a 'Distributed Monolith' — the most frequent pitfall in cloud migration.</em>",

      sec4Num: "04",
      sec4Title: "Event-Driven Architecture Patterns",
      sec4P1: "The workshop examined three core asynchronous messaging patterns:",
      sec4Metric1Val: "Pub/Sub",
      sec4Metric1Lbl: "Publish / Subscribe",
      sec4Metric1Sub: "Amazon SNS & EventBridge",
      sec4Metric2Val: "P2P",
      sec4Metric2Lbl: "Point-to-Point Queue",
      sec4Metric2Sub: "Amazon SQS Buffer",
      sec4Metric3Val: "Streaming",
      sec4Metric3Lbl: "High-Throughput Streams",
      sec4Metric3Sub: "Amazon Kinesis Streams",
      sec4Attribution: "* Categorized from AWS Application Modernization technical blueprints.",
      sec4LessonQuote: "“Event-Driven Architecture empowers microservices to communicate asynchronously, achieving elastic scalability and real-time agility.”",

      sec5Num: "05",
      sec5Title: "Amazon Q Developer AI Acceleration",
      sec5Desc: "Specialized generative AI assistant accelerating cloud transformation:",
      sec5Metric1Val: "AppMod",
      sec5Metric1Lbl: "Automated Migration",
      sec5Metric1Sub: "Legacy Java Runtime Upgrades",
      sec5Metric2Val: "Database",
      sec5Metric2Lbl: "DB Transformation",
      sec5Metric2Sub: "Automated Schema & Query Translation",
      sec5Metric3Val: "Review",
      sec5Metric3Lbl: "Code Security Scanning",
      sec5Metric3Sub: "Integrated within IDE",
      sec5Disclaimer: "* Live demonstration conducted by Erica Liu and Fabrianne Effendi.",

      sec6Num: "06",
      sec6Title: "Live Demonstrations & Highlights",
      sec6Desc: "Key architectural demonstrations conducted at Bitexco Financial Tower:",
      sec6Item1: "<strong>Automated Code Transformation:</strong> Amazon Q Developer scanned legacy Java repositories, identified deprecated dependencies, and generated refactored Java 17/21 code.",
      sec6Item2: "<strong>Commercial to Open-Source DB Migration:</strong> Simulated schema conversion from Microsoft SQL Server/Oracle to Amazon Aurora PostgreSQL.",
      sec6Item3: "<strong>Asynchronous Queue Decoupling:</strong> Configured SQS integrations with Lambda and set up Dead-Letter Queues (DLQ) for error handling.",
      sec6Item4: "<strong>Expert Roundtable:</strong> Deep technical Q&A session with Jignesh Shah, Director of Open Source Databases.",
      sec6Summary: "The workshop provided actionable architectural blueprints and cutting-edge GenAI tooling to accelerate enterprise modernization roadmaps.",

      sec7Num: "07",
      sec7Title: "Key Technical Takeaways",
      takeaway1Num: "01",
      takeaway1Title: "Modernization Requires Strategy",
      takeaway1Body: "Cloud modernization goes far beyond lift-and-shift migration; it requires structural architectural refactoring and rigorous Domain-Driven Design.",
      takeaway2Num: "02",
      takeaway2Title: "Asynchronous Decoupling",
      takeaway2Body: "Decoupling workloads via queues (SQS) and event routers (EventBridge/SNS) prevents cascading failures and absorbs sudden traffic spikes.",
      takeaway3Num: "03",
      takeaway3Title: "Database Freedom",
      takeaway3Body: "Migrating from proprietary engines to cloud-native open-source databases (Amazon Aurora) yields massive licensing savings alongside enterprise-grade scalability.",
      takeaway4Num: "04",
      takeaway4Title: "AI-Assisted Engineering",
      takeaway4Body: "Generative AI tools such as Amazon Q Developer streamline tedious refactoring and testing, allowing cloud engineers to focus on architectural problem solving.",

      sec8Num: "08",
      sec8Title: "Lessons Learned & Personal Contribution",
      lessonHeading: "Lessons Learned:",
      lessonQuote: "“The workshop provided valuable insights into enterprise-scale modernization, from DDD domain modeling to resilient serverless event-driven design.\n\nThese principles directly enrich my AWS internship project and career roadmap as a Cloud Solutions Architect.”",
      contribHeading: "Personal Contribution:",
      contribQuote: "“Attended the full workshop, synthesized the 4-step DDD methodology, evaluated microservices queuing patterns, and documented key findings in my AWS internship report.”",

      sec9Num: "09",
      sec9Title: "Event Check-in Photos & Activity",
      photoPendingBadge: "⏳ Pending Authentic Upload",
      photoPendingTitle: "Event Attendance Photo at Bitexco Tower",
      photoPendingDesc: "Reserved for the authentic check-in photo of the student at the Bitexco Financial Tower event. In accordance with transparency standards, no unverified images are used.",
      photoPendingNote: "Supports high-resolution preview and click-to-enlarge lightbox view as soon as authentic evidence is uploaded."
    }
  }
};

function renderEventsList() {
  const container = document.getElementById('events-report-container');
  if (!container) return;

  const lang = app.currentLang;
  const events = app.data.events[lang] || app.data.events.vi;

  container.innerHTML = events.map(ev => {
    let detailRoute = null;
    if (ev.slug) {
      detailRoute = `events/${ev.slug}`;
    } else if (ev.id === 'event-2') {
      detailRoute = 'events/first-cloud-ai-journey-24-10-2026';
    } else if (ev.id === 'event-1') {
      detailRoute = 'events/hoi-thao-hien-dai-hoa-ung-dung-csdl-genai';
    } else if (ev.hasFullReport) {
      detailRoute = 'events/first-cloud-ai-journey-24-10-2026';
    }

    const isVoiceAI = ev.slug === 'first-cloud-ai-journey-24-10-2026' || ev.id === 'event-2';
    const descText = ev.shortDesc || (ev.highlights ? ev.highlights.split('\n')[0].replace(/^•\s*/, '') : '');
    
    // Check if authentic check-in photo exists for thumbnail
    const targetSlug = ev.slug || (ev.id === 'event-2' ? 'first-cloud-ai-journey-24-10-2026' : (ev.id === 'event-1' ? 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai' : ev.id));
    const savedPhoto = localStorage.getItem('fcaj_event_checkin_photo_' + targetSlug);

    // Extract clean date badge from dateTime string (e.g. "24/10/2026" or "12/08/2026")
    let dateBadge = '';
    if (ev.dateTime) {
      const parts = ev.dateTime.split(',');
      if (parts.length > 1) {
        if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(parts[0])) {
          dateBadge = parts[0].trim();
        } else if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(parts[1])) {
          dateBadge = parts[1].trim();
        } else {
          dateBadge = parts[1].trim();
        }
      } else {
        dateBadge = ev.dateTime.trim();
      }
    }

    let badgeText = '';
    let badgeClass = 'badge-blue';
    if (ev.id === 'event-1' || ev.slug === 'aws-cloud-ai-day-hanoi-2026') {
      badgeText = lang === 'vi' ? 'Sự kiện 1 • 29/09/2026' : 'Event 1 • 29/09/2026';
      badgeClass = 'badge-blue';
    } else if (ev.id === 'event-2' || ev.slug === 'fireside-chat-dr-werner-vogels') {
      badgeText = lang === 'vi' ? 'Sự kiện 2 • 02/10/2026' : 'Event 2 • 02/10/2026';
      badgeClass = 'badge-purple';
    } else if (ev.id === 'event-3' || ev.slug === 'first-cloud-ai-journey-24-10-2026') {
      badgeText = lang === 'vi' ? 'Sự kiện 3 • 24/10/2026' : 'Event 3 • 24/10/2026';
      badgeClass = 'badge-purple';
    } else if (ev.id === 'event-4' || ev.slug === 'enterprise-ai-on-aws-cloud') {
      badgeText = lang === 'vi' ? 'Sự kiện 4 • 14/11/2026' : 'Event 4 • 14/11/2026';
      badgeClass = 'badge-blue';
    } else {
      badgeText = ev.hasFullReport ? (lang === 'vi' ? 'Báo cáo chuyên sâu' : 'Full Report Available') : t('eventBadge');
      badgeClass = 'badge-gray';
    }

    return `
      <div class="event-card ${isVoiceAI ? 'event-card-featured' : ''}" 
           ${detailRoute ? `onclick="navigateTo('${detailRoute}')" style="cursor:pointer;"` : ''}>
        <div class="event-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; gap:8px;">
            <span class="badge ${badgeClass}">${badgeText}</span>
            <span style="font-size:12px; font-weight:600; color:var(--text-subtle);">${escapeHtml(dateBadge)}</span>
          </div>
          <h3 class="event-title">${escapeHtml(ev.name)}</h3>
          <div class="event-meta-compact">
            <div class="event-meta-row">
              <span class="meta-label">📅 ${lang === 'vi' ? 'Thời gian:' : 'Date & Time:'}</span>
              <span class="meta-value">${escapeHtml(ev.dateTime)}</span>
            </div>
            <div class="event-meta-row">
              <span class="meta-label">📍 ${lang === 'vi' ? 'Địa điểm:' : 'Location:'}</span>
              <span class="meta-value">${escapeHtml(ev.location)}</span>
            </div>
            <div class="event-meta-row">
              <span class="meta-label">👤 ${t('eventRoleLabel')}</span>
              <span class="meta-value"><strong>${escapeHtml(ev.role)}</strong></span>
            </div>
            ${ev.speakers ? `
              <div class="event-meta-row">
                <span class="meta-label">🎙️ ${t('eventSpeakersLabel')}</span>
                <span class="meta-value">${escapeHtml(ev.speakers)}</span>
              </div>
            ` : ''}
          </div>
        </div>

        <div style="margin: 10px 0; border-radius: var(--radius-sm); overflow: hidden; max-height: 160px; border: 1px solid var(--border-card); background: #FAFAFA; text-align: center;">
          <img src="assets/images/events/${ev.id}.jpg" alt="${escapeHtml(ev.name)}" style="width: 100%; height: 160px; object-fit: cover; object-position: center top;" onerror="this.parentElement.style.display='none';" />
        </div>

        <div class="event-short-desc">
          <p>${escapeHtml(descText)}</p>
        </div>

        <div class="event-card-footer">
          ${detailRoute ? `
            <button type="button" class="btn btn-primary btn-sm event-view-report-btn" onclick="event.stopPropagation(); navigateTo('${detailRoute}')">
              <span>${lang === 'vi' ? 'Xem báo cáo chi tiết →' : 'View Full Report →'}</span>
            </button>
          ` : `
            <div></div>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function renderEventDetail(slug = 'first-cloud-ai-journey-24-10-2026') {
  const containerId = slug === 'aws-cloud-ai-day-hanoi-2026'
    ? 'event-detail-cloud-ai-day-container'
    : (slug === 'fireside-chat-dr-werner-vogels'
      ? 'event-detail-fireside-chat-container'
      : (slug === 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai'
        ? 'event-detail-modernization-container'
        : (slug === 'enterprise-ai-on-aws-cloud'
          ? 'event-detail-enterprise-ai-container'
          : 'event-detail-content-container')));
  const container = document.getElementById(containerId);
  if (!container) return;

  const lang = app.currentLang || 'vi';
  const targetSlug = slug || 'first-cloud-ai-journey-24-10-2026';

  if (targetSlug === 'aws-cloud-ai-day-hanoi-2026') {
    renderCloudAIDayEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'fireside-chat-dr-werner-vogels') {
    renderFiresideChatEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'enterprise-ai-on-aws-cloud') {
    renderEnterpriseAIEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'first-cloud-ai-journey-24-10-2026') {
    renderMeetupEventDetail(container, lang);
    return;
  }
  if (targetSlug === 'hoi-thao-hien-dai-hoa-ung-dung-csdl-genai') {
    renderModernizationEventDetail(container, lang);
    return;
  }
  const reportData = (EVENT_REPORTS[targetSlug] && EVENT_REPORTS[targetSlug][lang]) 
    ? EVENT_REPORTS[targetSlug][lang] 
    : (EVENT_REPORTS['first-cloud-ai-journey-24-10-2026'] ? EVENT_REPORTS['first-cloud-ai-journey-24-10-2026'].vi : null);

  if (!reportData) {
    container.innerHTML = `<div class="card" style="padding:40px; text-align:center;"><h3>${t('reportUnavailable')}</h3><button class="btn btn-outline" onclick="navigateTo('events')">${t('btnBackToEventsShort')}</button></div>`;
    return;
  }

  const r = reportData;
  const isVoiceAI = targetSlug === 'first-cloud-ai-journey-24-10-2026';
  const savedPhoto = localStorage.getItem('fcaj_event_checkin_photo_' + targetSlug);
  const hasAuthenticPhoto = Boolean(savedPhoto);

  // Responsive SVG Architecture Diagram
  let svgDiagram = '';
  if (isVoiceAI) {
    svgDiagram = `
      <div class="arch-diagram-wrapper">
        <svg class="arch-svg-container" viewBox="0 0 940 260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
            </filter>
            <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0F172A"/>
              <stop offset="100%" stop-color="#1E293B"/>
            </linearGradient>
            <linearGradient id="guardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E3A8A"/>
              <stop offset="100%" stop-color="#2563EB"/>
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B"/>
            </marker>
          </defs>

          <!-- AWS Cloud Boundary Box -->
          <rect x="180" y="20" width="580" height="215" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-dasharray="4 4" stroke-width="1.5" />
          <text x="200" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#475569" letter-spacing="0.5">AWS CLOUD INFRASTRUCTURE &amp; SECURE VPC</text>
          <text x="610" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#2563EB">WebRTC / UDP • AWS PrivateLink</text>

          <!-- Node 1: User Audio In -->
          <g transform="translate(15, 80)" filter="url(#cardShadow)">
            <rect width="135" height="95" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
            <circle cx="67" cy="30" r="14" fill="#F1F5F9"/>
            <path d="M67 22 v10 M62 27 a5 5 0 0 0 10 0" stroke="#0F172A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <text x="67" y="56" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#0F172A">Speech Input</text>
            <text x="67" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#64748B">User Voice (SIP/Mic)</text>
            <text x="67" y="83" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#2563EB">WebRTC / UDP</text>
          </g>

          <!-- Connector 1 -> 2 -->
          <line x1="150" y1="127" x2="195" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>

          <!-- Node 2: STT (EC2 GPU) -->
          <g transform="translate(200, 75)" filter="url(#cardShadow)">
            <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
            <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">STT Engine</text>
            <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Speech-to-Text</text>
            <rect x="15" y="60" width="95" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">Amazon EC2 GPU</text>
            <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#16A34A">⚡ Low Latency</text>
          </g>

          <!-- Connector 2 -> 3 -->
          <line x1="325" y1="127" x2="355" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="340" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Text</text>

          <!-- Node 3: LLM Reasoning -->
          <g transform="translate(360, 75)" filter="url(#cardShadow)">
            <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
            <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">LLM Core</text>
            <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Context &amp; Logic</text>
            <rect x="12" y="60" width="101" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">AWS PrivateLink</text>
            <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#2563EB">Stream Tokens</text>
          </g>

          <!-- Connector 3 -> 4 -->
          <line x1="485" y1="127" x2="515" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="500" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Draft</text>

          <!-- Node 4: Guardrails (Highlighted) -->
          <g transform="translate(520, 68)" filter="url(#cardShadow)">
            <rect width="130" height="118" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
            <rect x="0" y="0" width="130" height="6" rx="3" fill="#2563EB"/>
            <text x="65" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#1E40AF">🛡️ Guardrails</text>
            <text x="65" y="44" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Safety &amp; Compliance</text>
            <text x="65" y="62" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#334155">• Anti-Hallucination</text>
            <text x="65" y="76" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#334155">• PII &amp; Policy Shield</text>
            <rect x="15" y="86" width="100" height="20" rx="4" fill="#DBEAFE"/>
            <text x="65" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#1E40AF">Pre-Speech Check</text>
          </g>

          <!-- Connector 4 -> 5 -->
          <line x1="650" y1="127" x2="675" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="662" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#16A34A">Safe</text>

          <!-- Node 5: TTS (EC2 GPU) -->
          <g transform="translate(680, 75)" filter="url(#cardShadow)">
            <rect width="125" height="105" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="125" height="6" rx="3" fill="#0F172A"/>
            <text x="62" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#0F172A">TTS Engine</text>
            <text x="62" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" fill="#475569">Text-to-Speech</text>
            <rect x="15" y="60" width="95" height="20" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="62" y="74" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="600" fill="#0F172A">Amazon EC2 GPU</text>
            <text x="62" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#16A34A">Natural Voice</text>
          </g>

          <!-- Connector 5 -> 6 -->
          <line x1="805" y1="127" x2="840" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>

          <!-- Node 6: Voice Output -->
          <g transform="translate(845, 80)" filter="url(#cardShadow)">
            <rect width="80" height="95" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
            <circle cx="40" cy="30" r="14" fill="#F1F5F9"/>
            <path d="M35 30 l5 -4 v8 z M43 27 a4 4 0 0 1 0 6" stroke="#0F172A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <text x="40" y="56" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#0F172A">Voice Out</text>
            <text x="40" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#64748B">WebRTC</text>
            <text x="40" y="83" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#16A34A">&lt;2s Total</text>
          </g>
        </svg>
        <div class="arch-caption">${escapeHtml(r.diagramCaption || '')}</div>
      </div>
    `;
  } else {
    // Microservices Modernization Diagram for Event 1
    svgDiagram = `
      <div class="arch-diagram-wrapper">
        <svg class="arch-svg-container" viewBox="0 0 940 260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="cardShadow1" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
            </filter>
            <marker id="arrow1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B"/>
            </marker>
          </defs>

          <!-- AWS Cloud Boundary Box -->
          <rect x="230" y="20" width="690" height="215" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-dasharray="4 4" stroke-width="1.5" />
          <text x="250" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" fill="#475569" letter-spacing="0.5">AWS EVENT-DRIVEN MICROSERVICES INFRASTRUCTURE</text>
          <text x="730" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#2563EB">Amazon Q Developer AppMod</text>

          <!-- Node 1: Legacy Monolith -->
          <g transform="translate(15, 65)" filter="url(#cardShadow1)">
            <rect width="180" height="125" rx="10" fill="#FEF2F2" stroke="#F87171" stroke-width="1.5"/>
            <rect x="0" y="0" width="180" height="6" rx="3" fill="#DC2626"/>
            <text x="90" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#991B1B">Legacy Monolith</text>
            <text x="90" y="45" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#7F1D1D">Tightly Coupled Code</text>
            <rect x="15" y="55" width="150" height="22" rx="4" fill="#FFFFFF" stroke="#FECACA"/>
            <text x="90" y="70" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#DC2626">Single SQL DB Bottleneck</text>
            <text x="90" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#B91C1C">⚠️ Long Release Cycles</text>
            <text x="90" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#B91C1C">⚠️ Cascading Failures</text>
          </g>

          <!-- Connector 1 -> 2 -->
          <line x1="195" y1="127" x2="245" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow1)"/>
          <text x="220" y="118" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#2563EB">DDD</text>

          <!-- Node 2: Domain-Driven Bounded Contexts -->
          <g transform="translate(250, 65)" filter="url(#cardShadow1)">
            <rect width="180" height="125" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <rect x="0" y="0" width="180" height="6" rx="3" fill="#0F172A"/>
            <text x="90" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#0F172A">Bounded Contexts</text>
            <text x="90" y="45" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#475569">Domain-Driven Design</text>
            <rect x="15" y="55" width="150" height="22" rx="4" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="90" y="70" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#0F172A">4-Step Domain Modeling</text>
            <text x="90" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#16A34A">✓ High Cohesion</text>
            <text x="90" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#16A34A">✓ Loose Coupling</text>
          </g>

          <!-- Connector 2 -> 3 -->
          <line x1="430" y1="127" x2="475" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow1)"/>
          <text x="452" y="118" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700" fill="#64748B">Events</text>

          <!-- Node 3: Asynchronous Queues & Messaging -->
          <g transform="translate(480, 60)" filter="url(#cardShadow1)">
            <rect width="195" height="135" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
            <rect x="0" y="0" width="195" height="6" rx="3" fill="#2563EB"/>
            <text x="97" y="26" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12.5" font-weight="800" fill="#1E40AF">Asynchronous Layer</text>
            <text x="97" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1D4ED8">Queue • Cache • Messaging</text>
            <rect x="12" y="52" width="171" height="20" rx="4" fill="#DBEAFE"/>
            <text x="97" y="66" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#1E40AF">Amazon SQS + SNS + EventBridge</text>
            <text x="97" y="88" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#334155">• Elastic Spike Buffering</text>
            <text x="97" y="102" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#334155">• ElastiCache Redis Fast Read</text>
            <text x="97" y="118" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="600" fill="#16A34A">Fault-Tolerant DLQ</text>
          </g>

          <!-- Connector 3 -> 4 -->
          <line x1="675" y1="127" x2="715" y2="127" stroke="#64748B" stroke-width="2" marker-end="url(#arrow1)"/>

          <!-- Node 4: Cloud-Native Microservices & Modern DB -->
          <g transform="translate(720, 65)" filter="url(#cardShadow1)">
            <rect width="185" height="125" rx="10" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
            <rect x="0" y="0" width="185" height="6" rx="3" fill="#16A34A"/>
            <text x="92" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#15803D">Modern Services &amp; DB</text>
            <text x="92" y="45" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#166534">Serverless &amp; Cloud-Native</text>
            <rect x="12" y="55" width="161" height="22" rx="4" fill="#FFFFFF" stroke="#BBF7D0"/>
            <text x="92" y="70" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="600" fill="#15803D">Amazon Aurora &amp; DynamoDB</text>
            <text x="92" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#166534">⚡ Sub-second Scalability</text>
            <text x="92" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#166534">⚡ Zero Licensing Overhead</text>
          </g>
        </svg>
        <div class="arch-caption">${escapeHtml(r.diagramCaption || '')}</div>
      </div>
    `;
  }

  const photoSectionHtml = hasAuthenticPhoto ? `
    <div class="event-uploaded-photo-box">
      <div class="event-uploaded-img-wrap" onclick="window.open('${savedPhoto}', '_blank')">
        <img src="${savedPhoto}" alt="${escapeHtml(r.title)}" class="event-uploaded-img" />
      </div>
    </div>
  ` : `
    <div class="photo-pending-box">
      <div class="photo-pending-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      </div>
      <span class="photo-pending-badge">${escapeHtml(r.photoPendingBadge)}</span>
      <h3 class="photo-pending-title" style="margin-top:12px;">${escapeHtml(r.photoPendingTitle)}</h3>
      <p class="photo-pending-desc">${escapeHtml(r.photoPendingDesc)}</p>
      <p style="font-size:12px; color:#92400E; margin:0; font-style:italic;">${escapeHtml(r.photoPendingNote)}</p>
    </div>
  `;

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${t('eventsBreadcrumb')}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(r.breadcrumb)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${t('btnBackToEvents')}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(r.badgeText)}</span>
          <span class="badge badge-blue">${escapeHtml(r.sessionTag)}</span>
          <span class="badge badge-gray">📅 ${escapeHtml(r.dateTime.split(',')[0])}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(r.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(r.subtitle)}</p>
      </header>

      <!-- Official Event Metadata Box -->
      <section class="report-meta-box">
        <div class="report-meta-box-header">
          <h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            ${escapeHtml(r.metaHeader)}
          </h4>
          <span class="badge badge-blue">Official FCAJ Record</span>
        </div>
        <div class="report-meta-grid">
          <div class="report-meta-item"><strong>${escapeHtml(r.lblEventName)}:</strong> ${escapeHtml(r.eventName)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblDateTime)}:</strong> ${escapeHtml(r.dateTime)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblLocation)}:</strong> ${escapeHtml(r.location)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblRole)}:</strong> ${escapeHtml(r.role)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblSpeaker)}:</strong> ${escapeHtml(r.speaker)}</div>
          <div class="report-meta-item"><strong>${escapeHtml(r.lblTopic)}:</strong> ${escapeHtml(r.topic)}</div>
        </div>
        <div class="report-meta-notice">${escapeHtml(r.metaNotice)}</div>
      </section>

      <!-- Company 7 Reporting Criteria Verification Framework -->
      <section class="report-compliance-card">
        <div class="report-compliance-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>${escapeHtml(r.complianceTitle)}</span>
        </div>
        <div class="compliance-pills">
          <span class="compliance-pill pill-pass">✓ 1. ${escapeHtml(r.crit1)}</span>
          <span class="compliance-pill pill-pass">✓ 2. ${escapeHtml(r.crit2)}</span>
          <span class="compliance-pill pill-pass">✓ 3. ${escapeHtml(r.crit3)}</span>
          <span class="compliance-pill pill-pass">✓ 4. ${escapeHtml(r.crit4)}</span>
          <span class="compliance-pill pill-pass">✓ 5. ${escapeHtml(r.crit5)}</span>
          <span class="compliance-pill ${hasAuthenticPhoto ? 'pill-pass' : 'pill-pending'}">${hasAuthenticPhoto ? '✓' : '⏳'} 6. ${escapeHtml(r.crit6)}</span>
          <span class="compliance-pill pill-pass">✓ 7. ${escapeHtml(r.crit7)}</span>
        </div>
      </section>

      <!-- SECTION 1 – TỔNG QUAN PHIÊN CHIA SẺ -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec1Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec1Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec1Problem)}</p>
          <div class="report-quote-box">${escapeHtml(r.sec1Quote)}</div>
          <p>${r.sec1P1}</p>
          <p>${r.sec1P2}</p>
        </div>
      </section>

      <!-- SECTION 2 – KIẾN TRÚC -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec2Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec2Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec2Desc)}</p>
          <div style="background:#F1F5F9; padding:10px 16px; border-radius:8px; font-family:var(--font-mono); font-size:13px; font-weight:700; color:#0F172A; margin-bottom:16px;">
            ${escapeHtml(r.sec2Pipeline)}
          </div>
          <ul>
            <li>${r.sec2STT}</li>
            <li>${r.sec2LLM}</li>
            <li>${r.sec2Guardrails}</li>
            <li>${r.sec2TTS}</li>
          </ul>
          <p>${r.sec2Advantage}</p>
          ${svgDiagram}
          <p>${r.sec2Nuance}</p>
        </div>
      </section>

      <!-- SECTION 3 – AWS INFRASTRUCTURE & NETWORKING -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec3Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec3Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec3Desc)}</p>
          <ul>
            <li>${r.sec3WebRTC}</li>
            <li>${r.sec3EC2}</li>
            <li>${r.sec3PrivateLink}</li>
            <li>${r.sec3Networking}</li>
          </ul>
          <div class="report-quote-box" style="border-left-color:#2563EB; font-style:normal;">
            ${r.sec3Insight}
          </div>
        </div>
      </section>

      <!-- SECTION 4 – PERFORMANCE & COST OPTIMIZATION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec4Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec4Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec4P1)}</p>
          <div class="metric-cards-grid">
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#0F172A;">${escapeHtml(r.sec4Metric1Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric1Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric1Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#2563EB;">${escapeHtml(r.sec4Metric2Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric2Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric2Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#16A34A;">${escapeHtml(r.sec4Metric3Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec4Metric3Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec4Metric3Sub)}</div>
            </div>
          </div>
          <div class="metric-disclaimer">${escapeHtml(r.sec4Attribution)}</div>
          <div class="report-quote-box" style="margin-top:20px;">
            ${escapeHtml(r.sec4LessonQuote)}
          </div>
        </div>
      </section>

      <!-- SECTION 5 – CASE STUDY / BENCHMARK -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec5Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec5Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec5Desc)}</p>
          <div class="metric-cards-grid">
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#0F172A;">${escapeHtml(r.sec5Metric1Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric1Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric1Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#2563EB;">${escapeHtml(r.sec5Metric2Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric2Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric2Sub)}</div>
            </div>
            <div class="metric-stat-card">
              <div class="metric-val" style="color:#16A34A;">${escapeHtml(r.sec5Metric3Val)}</div>
              <div class="metric-lbl">${escapeHtml(r.sec5Metric3Lbl)}</div>
              <div class="metric-sub">${escapeHtml(r.sec5Metric3Sub)}</div>
            </div>
          </div>
          <div class="metric-disclaimer">${escapeHtml(r.sec5Disclaimer)}</div>
        </div>
      </section>

      <!-- SECTION 6 – LIVE DEMO -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec6Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec6Title)}</h2>
        </div>
        <div class="report-prose">
          <p>${escapeHtml(r.sec6Desc)}</p>
          <ul>
            <li>${r.sec6Item1}</li>
            <li>${r.sec6Item2}</li>
            <li>${r.sec6Item3}</li>
            <li>${r.sec6Item4}</li>
          </ul>
          <p>${escapeHtml(r.sec6Summary)}</p>
        </div>
      </section>

      <!-- SECTION 7 – NHỮNG BÀI HỌC THU HOẠCH -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec7Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec7Title)}</h2>
        </div>
        <div class="takeaways-grid">
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway1Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway1Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway1Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway2Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway2Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway2Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway3Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway3Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway3Body)}</div>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-card-num">${escapeHtml(r.takeaway4Num)}</div>
            <div class="takeaway-card-title">${escapeHtml(r.takeaway4Title)}</div>
            <div class="takeaway-card-body">${escapeHtml(r.takeaway4Body)}</div>
          </div>
        </div>
      </section>

      <!-- SECTION 8 – BÀI HỌC RÚT RA VÀ ĐÓNG GÓP CÁ NHÂN -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec8Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec8Title)}</h2>
        </div>
        <div class="report-prose">
          <h4 style="font-size:15px; font-weight:700; color:#0F172A; margin:14px 0 8px 0;">${escapeHtml(r.lessonHeading)}</h4>
          <div class="report-quote-box" style="white-space:pre-line; font-style:normal; margin-bottom:20px;">
            ${escapeHtml(r.lessonQuote)}
          </div>

          <h4 style="font-size:15px; font-weight:700; color:#0F172A; margin:20px 0 8px 0;">${escapeHtml(r.contribHeading)}</h4>
          <div class="report-quote-box" style="font-style:normal; border-left-color:#2563EB;">
            ${escapeHtml(r.contribQuote)}
          </div>
        </div>
      </section>

      <!-- SECTION 9 – EVENT CHECK-IN & PHOTOS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">${escapeHtml(r.sec9Num)}</span>
          <h2 class="report-section-title">${escapeHtml(r.sec9Title)}</h2>
        </div>
        ${photoSectionHtml}
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${t('btnBackToEvents')}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${lang === 'vi' ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}


function renderModernizationEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';

  const t = {
    breadcrumbEvents: isVi ? "Sự kiện tham gia" : "Events Participated",
    breadcrumbCurrent: isVi ? "Sự kiện 1 - First Cloud AI Journey (29/09/2026)" : "Event 1 - First Cloud AI Journey (29/09/2026)",
    btnBack: isVi ? "← Quay lại sự kiện" : "← Back to Events",
    badgeReport: isVi ? "BÁO CÁO THU HOẠCH SỰ KIỆN" : "EVENT HARVEST REPORT",
    badgeCategory: "Application & Database Modernization",
    badgeOfficial: isVi ? "Chính thức • AWS FCAJ" : "Official • AWS FCAJ",
    title: "FIRST CLOUD AI JOURNEY – 29/09/2026",
    subtitle: isVi 
      ? "Hội thảo chuyên sâu về Hiện đại hóa Ứng dụng, Cơ sở dữ liệu và Tự động hóa mã nguồn với GenAI trên AWS"
      : "In-depth Workshop on Application & Database Modernization and GenAI-powered Code Transformation on AWS",
    eventName: "First Cloud AI Journey – 29/09/2026",
    dateTime: isVi ? "08:00 – 17:00, 29/09/2026" : "08:00 AM – 05:00 PM, September 29, 2026",
    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    speakers: isVi ? "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh" : "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",
  };

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${escapeHtml(t.breadcrumbEvents)}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(t.breadcrumbCurrent)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(t.badgeReport)}</span>
          <span class="badge badge-blue">${escapeHtml(t.badgeCategory)}</span>
          <span class="badge badge-gray">${escapeHtml(t.badgeOfficial)}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(t.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(t.subtitle)}</p>

        <!-- Standardized Compact Event Metadata Strip -->
        <div class="report-meta-compact-strip">
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Tên sự kiện:' : 'Event Name:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.eventName)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Thời gian:' : 'Date & Time:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.dateTime)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Diễn giả:' : 'Speakers:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.speakers)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.role)}</strong></span>
          </div>
        </div>
      </header>

      <!-- Event 1 Check-in Photo -->
      <div id="event-1-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0;">
        <div class="event-uploaded-img-wrap" onclick="openBlogImageModal('assets/images/events/event-1.jpg', '${escapeHtml(t.eventName)}')" title="${isVi ? 'Nhấp để xem ảnh độ nét cao (HD)' : 'Click to view high-definition image'}">
          <img id="event-1-cover-img"
               src="assets/images/events/event-1.jpg"
               alt="${escapeHtml(t.eventName)}"
               class="event-uploaded-img"
               onload="const w = document.getElementById('event-1-cover-wrap'); if (w) w.style.display='block';"
               onerror="const w = document.getElementById('event-1-cover-wrap'); if (w) w.style.display='none';"
               loading="eager" />
        </div>
        <div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
          ${isVi ? 'Ảnh check-in thực tế của sinh viên tại sự kiện First Cloud AI Journey (29/09/2026) – Tầng 26, Bitexco Financial Tower' : 'Authentic attendee check-in photograph at First Cloud AI Journey (September 29, 2026) – 26th Floor, Bitexco Financial Tower'}
        </div>
      </div>

      <!-- SECTION I – EVENT OVERVIEW -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">01</span>
          <h2 class="report-section-title">${isVi ? 'I. Tổng quan sự kiện (Event Overview)' : 'I. Event Overview'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo <strong>First Cloud AI Journey</strong> tập trung vào chiến lược hiện đại hóa ứng dụng và cơ sở dữ liệu doanh nghiệp trên nền tảng AWS Cloud, chuyển dịch từ kiến trúc nguyên khối (Monolith) sang kiến trúc dịch vụ vi mô (Microservices) và ứng dụng Trí tuệ nhân tạo tạo sinh (GenAI) để tự động hóa nâng cấp mã nguồn.'
            : 'The <strong>First Cloud AI Journey</strong> workshop focused on enterprise application and database modernization strategies on AWS Cloud, transitioning from monolithic architectures to cloud-native microservices, and leveraging Generative AI (GenAI) for automated code transformation.'}</p>
          
          <div class="report-quote-box" style="border-left-color: #171717;">
            ${isVi
              ? '“Nội dung hội thảo bao gồm các bài thuyết trình chuyên sâu về nút thắt của kiến trúc nguyên khối, phương pháp luận Domain-Driven Design (DDD), các mẫu giao tiếp hướng sự kiện (Event-Driven Architecture) và giải pháp tự động hóa mã nguồn với Amazon Q Developer.”'
              : '“The workshop featured deep technical sessions covering monolithic architecture bottlenecks, Domain-Driven Design (DDD) methodologies, Event-Driven Architecture (EDA) patterns, and automated code migration with Amazon Q Developer.”'}
          </div>

          <p>${isVi
            ? 'Chương trình được dẫn dắt bởi các chuyên gia kỹ thuật từ AWS: <strong>Jignesh Shah</strong> (Giám đốc CSDL Mã nguồn mở), <strong>Erica Liu</strong> (Chuyên gia Cao cấp Hiện đại hóa Ứng dụng - AppMod), và <strong>Fabrianne Effendi</strong> (Kiến trúc sư giải pháp Serverless), mang đến các kiến thức chuyên môn, kịch bản thực hành và thảo luận mở về chuyển dịch hạ tầng đám mây.'
            : 'The program was delivered by senior technical leaders from AWS: <strong>Jignesh Shah</strong> (Director, Open Source Databases), <strong>Erica Liu</strong> (Senior GTM Specialist, AppMod), and <strong>Fabrianne Effendi</strong> (Associate Specialist Solutions Architect), providing comprehensive architectural insights and technical demonstrations.'}</p>
        </div>
      </section>

      <!-- SECTION II – EVENT OBJECTIVES -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">02</span>
          <h2 class="report-section-title">${isVi ? 'II. Mục tiêu sự kiện (Event Objectives)' : 'II. Event Objectives'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Các mục tiêu kỹ thuật và nội dung kiến trúc trọng tâm được trình bày tại hội thảo bao gồm:'
            : 'Core technical and architectural objectives established during the workshop:'}</p>
          <ul>
            <li>${isVi ? '<strong>Phân tích hạn chế của kiến trúc nguyên khối:</strong> Nhận diện các điểm nghẽn về khớp nối mã nguồn (tight coupling), chu kỳ phát hành kéo dài và rủi ro gián đoạn dịch vụ diện rộng.' : '<strong>Analyze monolithic bottlenecks:</strong> Identify challenges related to tight coupling, protracted release cycles, and excessive failure blast radius in legacy systems.'}</li>
            <li>${isVi ? '<strong>3 trụ cột chuyển đổi Microservices hiện đại:</strong> Tiếp cận nguyên lý phân tách hệ thống dựa trên Quản lý hàng đợi (Queue Management), Chiến lược bộ nhớ đệm (Caching Strategies) và Xử lý thông điệp linh hoạt (Flexible Messaging).' : '<strong>3 pillars of modern Microservices decoupling:</strong> Introduce foundational decoupling mechanisms using Queue Management, Caching Strategies, and Flexible Messaging.'}</li>
            <li>${isVi ? '<strong>Phương pháp thiết kế hướng tên miền (DDD):</strong> Trình bày quy trình 4 bước phân định ranh giới ngữ cảnh (Bounded Contexts) để phân chia microservices chuẩn xác.' : '<strong>Domain-Driven Design (DDD) framework:</strong> Apply the 4-step domain modeling framework to establish precise Bounded Contexts.'}</li>
            <li>${isVi ? '<strong>Kiến trúc hướng sự kiện (EDA):</strong> Khảo sát các mẫu giao tiếp bất đồng bộ Pub/Sub, Point-to-Point Queue và Data Streaming nhằm phi tập trung hóa các dịch vụ.' : '<strong>Event-Driven Architecture (EDA):</strong> Explore asynchronous Pub/Sub, Point-to-Point Queue, and Data Streaming patterns for decentralized communication.'}</li>
            <li>${isVi ? '<strong>Ứng dụng GenAI trong hiện đại hóa phần mềm:</strong> Giới thiệu năng lực của Amazon Q Developer trong tự động quét mã nguồn Java cũ, refactor cú pháp và chuyển đổi cơ sở dữ liệu thương mại sang Aurora PostgreSQL.' : '<strong>GenAI for automated modernization:</strong> Demonstrate Amazon Q Developer capabilities in legacy Java upgrades, automated refactoring, and commercial database conversions.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION III – KEY TOPICS AND KNOWLEDGE ACQUIRED -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">03</span>
          <h2 class="report-section-title">${isVi ? 'III. Nội dung trọng tâm tại sự kiện (Key Topics & Technical Content)' : 'III. Key Topics & Technical Content'}</h2>
        </div>
        <div class="report-prose">

          <!-- 1. Limitations of Legacy Monoliths -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '1. Hạn chế của Kiến trúc Nguyên khối truyền thống (Limitations of Legacy Monolithic Architectures)' : '1. Limitations of Legacy Monolithic Architectures'}</h3>
          <p>${isVi
            ? 'Phần đầu hội thảo phân tích chi tiết các nguyên nhân khiến kiến trúc Monolith gặp khó khăn trong môi trường doanh nghiệp hiện đại. Việc toàn bộ các module nghiệp vụ được đóng gói chung trong một khối mã nguồn duy nhất tạo ra các điểm nghẽn cố hữu:'
            : 'The opening session examined the fundamental challenges of legacy monolithic systems in modern enterprise environments. Bundling all business domains into a single monolithic codebase creates critical bottlenecks:'}</p>
          <ul>
            <li>${isVi ? '<strong>Chu kỳ phát hành kéo dài:</strong> Triển khai một thay đổi nhỏ đòi hỏi kiểm thử và phát hành lại toàn bộ ứng dụng, kéo dài thời gian release từ nhiều tuần đến nhiều tháng.' : '<strong>Protracted release cycles:</strong> Deploying minor updates requires rebuilding and releasing the entire application, slowing deployment cadences.'}</li>
            <li>${isVi ? '<strong>Khó khăn khi mở rộng theo chiều ngang:</strong> Hệ thống buộc phải nhân bản toàn bộ ứng dụng khi chỉ một module cục bộ cần thêm tài nguyên, gây lãng phí hạ tầng nghiêm trọng.' : '<strong>Horizontal scalability bottlenecks:</strong> The entire application must be cloned when only a specific sub-component experiences high load.'}</li>
            <li>${isVi ? '<strong>Phạm vi ảnh hưởng sự cố lớn (Blast Radius):</strong> Lỗi phát sinh trong một module đơn lẻ có thể làm tê liệt toàn bộ ứng dụng đang phục vụ người dùng.' : '<strong>Excessive blast radius:</strong> Failures or resource leaks in a single module can compromise the availability of the entire platform.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 2. 3 Pillars of Modern Microservices Transition -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '2. Ba trụ cột chuyển đổi Microservices hiện đại (3 Pillars of Modern Microservices Transition)' : '2. 3 Pillars of Modern Microservices Transition'}</h3>
          <p>${isVi
            ? 'Để phân rã kiến trúc Monolith sang Microservices mà không làm gián đoạn luồng vận hành kinh doanh, chuyên gia AWS đã trình bày 3 trụ cột kỹ thuật trọng tâm:'
            : 'To decouple monolithic dependencies without disrupting continuous operations, AWS specialists presented three technical pillars:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 25%;">${isVi ? 'Trụ cột kỹ thuật' : 'Technical Pillar'}</th>
                  <th style="width: 25%;">${isVi ? 'Dịch vụ AWS tương ứng' : 'AWS Service'}</th>
                  <th style="width: 50%;">${isVi ? 'Vai trò &amp; Chức năng kiến trúc' : 'Architectural Role &amp; Function'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>${isVi ? 'Quản lý hàng đợi (Queue Management)' : 'Queue Management'}</strong></td>
                  <td>Amazon SQS (Simple Queue Service)</td>
                  <td>${isVi ? 'Đệm dữ liệu và tách rời các tiến trình xử lý, đảm bảo khả năng chịu lỗi và không làm mất thông điệp khi lưu lượng truy cập tăng vọt.' : 'Buffers requests and decouples processing stages, ensuring resilience and zero message loss during peak traffic bursts.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Chiến lược bộ nhớ đệm (Caching Strategies)' : 'Caching Strategies'}</strong></td>
                  <td>Amazon ElastiCache (Redis/Memcached)</td>
                  <td>${isVi ? 'Lưu trữ tạm thời dữ liệu thường xuyên truy cập vào bộ nhớ RAM, giảm áp lực đọc trực tiếp lên CSDL quan hệ và đưa độ trễ phản hồi xuống dưới một mili-giây.' : 'Caches frequent queries in in-memory storage, drastically relieving database load and achieving sub-millisecond latencies.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Xử lý thông điệp linh hoạt (Flexible Messaging)' : 'Flexible Messaging'}</strong></td>
                  <td>Amazon SNS &amp; Amazon EventBridge</td>
                  <td>${isVi ? 'Định tuyến sự kiện và phân tán dữ liệu không đồng bộ (Publish/Subscribe) giữa các microservices độc lập, đảm bảo khả năng mở rộng phi tập trung.' : 'Routes events asynchronously via pub/sub fanout across independent microservices, facilitating loosely coupled integrations.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 3. Domain-Driven Design (DDD) 4-Step Methodology -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '3. Phương pháp Thiết kế Hướng tên miền (Domain-Driven Design 4-Step Methodology)' : '3. Domain-Driven Design 4-Step Methodology'}</h3>
          <p>${isVi
            ? 'Quy trình phân chia microservices được tiếp cận từ góc độ mô hình hóa nghiệp vụ thông qua phương pháp luận Domain-Driven Design (DDD) gồm 4 bước có cấu trúc:'
            : 'Decomposing microservices was structured around domain-driven modeling principles via a 4-step framework:'}</p>

          <ul>
            <li>${isVi ? '<strong>Bước 1 - Xác định sự kiện nghiệp vụ (Identify Domain Events):</strong> Liệt kê tất cả các sự kiện cốt lõi diễn ra trong quy trình kinh doanh (ví dụ: Đơn hàng đã tạo, Thanh toán hoàn tất, Hàng đã xuất kho).' : '<strong>Step 1 - Identify Domain Events:</strong> Inventory all core events that occur within the business lifecycle (e.g. Order Placed, Payment Authorized, Shipment Dispatched).'}</li>
            <li>${isVi ? '<strong>Bước 2 - Sắp xếp dòng thời gian (Arrange Timeline):</strong> Phác thảo chuỗi sự kiện theo trục thời gian tuyến tính để nhận diện rõ các quan hệ phụ thuộc và nguyên nhân - kết quả.' : '<strong>Step 2 - Arrange Timeline:</strong> Map events sequentially on a chronological timeline to clarify triggers, dependencies, and cause-and-effect flows.'}</li>
            <li>${isVi ? '<strong>Bước 3 - Xác định các tác nhân (Identify Actors):</strong> Xác định các đối tượng kích hoạt hoặc tiếp nhận kết quả của sự kiện (người dùng, hệ thống tích hợp, tiến trình tự động).' : '<strong>Step 3 - Identify Actors:</strong> Determine the initiators and consumers of each event (end users, external systems, automated background jobs).'}</li>
            <li>${isVi ? '<strong>Bước 4 - Xác định ngữ cảnh bị giới hạn (Define Bounded Contexts):</strong> Gom nhóm các sự kiện và mô hình dữ liệu có tính gắn kết cao vào từng Bounded Context riêng biệt, tạo tiền đề để ánh xạ trực tiếp thành các Microservices độc lập.' : '<strong>Step 4 - Define Bounded Contexts:</strong> Cluster related domain events and data models into discrete Bounded Contexts, mapping directly to microservice boundaries.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 4. Event-Driven Architecture Patterns -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '4. Các mẫu Kiến trúc Hướng sự kiện (Event-Driven Architecture Patterns)' : '4. Event-Driven Architecture Patterns'}</h3>
          <p>${isVi
            ? 'Hội thảo đi sâu phân tích 3 mô hình giao tiếp bất đồng bộ chính giúp các dịch vụ trao đổi thông điệp phi tập trung:'
            : 'The workshop examined three asynchronous messaging patterns that enable decoupled service communications:'}</p>

          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi 
              ? 'Publish/Subscribe (Amazon SNS & EventBridge) | Point-to-Point Queue (Amazon SQS) | High-Throughput Streaming (Amazon Kinesis)'
              : 'Publish/Subscribe (Amazon SNS & EventBridge) | Point-to-Point Queue (Amazon SQS) | High-Throughput Streaming (Amazon Kinesis)'}
          </div>

          <ul>
            <li>${isVi ? '<strong>Publish/Subscribe:</strong> Cho phép một producer phát tán thông điệp đồng thời tới nhiều consumers độc lập thông qua Amazon SNS và EventBridge.' : '<strong>Publish/Subscribe:</strong> Enables an event producer to broadcast messages simultaneously to multiple decoupled consumers via SNS and EventBridge.'}</li>
            <li>${isVi ? '<strong>Point-to-Point Queue:</strong> Đảm bảo mỗi thông điệp được tiêu thụ bởi duy nhất một consumer tại một thời điểm qua Amazon SQS, hỗ trợ cơ chế Dead-Letter Queue (DLQ) để cô lập thông điệp lỗi.' : '<strong>Point-to-Point Queue:</strong> Ensures single-worker message processing backed by Dead-Letter Queues (DLQ) for error containment.'}</li>
            <li>${isVi ? '<strong>Data Streaming:</strong> Thu nhận và xử lý hàng triệu bản ghi mỗi giây theo thứ tự thời gian thực phục vụ phân tích dữ liệu lớn với Amazon Kinesis Data Streams.' : '<strong>Data Streaming:</strong> Ingests and processes millions of ordered records per second in real time for live analytics using Amazon Kinesis.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 5. Amazon Q Developer -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '5. Ứng dụng Trợ lý AI Amazon Q Developer trong Hiện đại hóa phần mềm (AI-Assisted Modernization with Amazon Q Developer)' : '5. AI-Assisted Modernization with Amazon Q Developer'}</h3>
          <p>${isVi
            ? 'Phiên chia sẻ của chuyên gia Erica Liu và Fabrianne Effendi giới thiệu giải pháp ứng dụng Trí tuệ nhân tạo tạo sinh (GenAI) nhằm tự động hóa các tác vụ chuyển đổi mã nguồn:'
            : 'Presentations by specialists Erica Liu and Fabrianne Effendi demonstrated how Generative AI tools accelerate labor-intensive modernization stages:'}</p>

          <ul>
            <li>${isVi ? '<strong>Tự động hóa nâng cấp runtime ứng dụng (AppMod):</strong> Amazon Q Developer tự động phân tích toàn bộ repository mã nguồn Java cũ (Java 8/11), phát hiện các thư viện lỗi thời, tự động refactor mã nguồn và nâng cấp lên Java 17/21.' : '<strong>Application transformation (AppMod):</strong> Amazon Q Developer analyzes legacy Java repositories, identifies outdated dependencies, refactors deprecated syntax, and automates upgrades to Java 17/21.'}</li>
            <li>${isVi ? '<strong>Chuyển đổi cơ sở dữ liệu:</strong> Hỗ trợ dịch chuyển schema và mã nguồn stored procedures từ các cơ sở dữ liệu thương mại độc quyền (Oracle, Microsoft SQL Server) sang các hệ quản trị CSDL mã nguồn mở trên AWS (Amazon Aurora PostgreSQL/MySQL).' : '<strong>Database conversion:</strong> Assists in converting schemas and stored procedures from commercial proprietary engines (Oracle, MS SQL) to open-source Amazon Aurora PostgreSQL/MySQL.'}</li>
            <li>${isVi ? '<strong>Rà soát an ninh mã nguồn tự động:</strong> Tích hợp trực tiếp trong IDE (VS Code, IntelliJ) để phát hiện tức thì các lỗ hổng OWASP, hardcoded secrets và đề xuất giải pháp vá lỗi.' : '<strong>Security code review:</strong> Operates directly inside developer IDEs to pinpoint OWASP vulnerabilities and hardcoded credentials, generating remediation diffs.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 6. Technical Demos & Q&A -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '6. Trực quan Hướng dẫn Demo &amp; Phiên giải đáp Chuyên gia (Technical Demonstrations &amp; Expert Q&amp;A)' : '6. Technical Demonstrations &amp; Expert Q&amp;A'}</h3>
          <p>${isVi
            ? 'Chương trình bao gồm các phần trình diễn kỹ thuật trực tiếp trên hệ thống AWS:'
            : 'The workshop included live technical demonstrations executed directly on AWS environments:'}</p>
          <ul>
            <li>${isVi ? '<strong>Demo quét mã nguồn tự động:</strong> Minh họa quá trình Amazon Q Developer quét một dự án Java nguyên khối, tự động sinh test cases và hoàn tất nâng cấp framework.' : '<strong>Automated code scanning demo:</strong> Demonstrated Amazon Q Developer scanning a monolithic Java project, generating test suites, and completing framework upgrades.'}</li>
            <li>${isVi ? '<strong>Demo chuyển đổi CSDL:</strong> Trực quan hóa quy trình chuyển đổi cơ sở dữ liệu sử dụng AWS Schema Conversion Tool (SCT) và AWS Database Migration Service (DMS) sang Amazon Aurora.' : '<strong>Database migration demo:</strong> Visualized database schema conversions using AWS SCT and AWS DMS targeting Amazon Aurora.'}</li>
            <li>${isVi ? '<strong>Demo cô lập lỗi với SQS và DLQ:</strong> Mô phỏng sự cố microservice thanh toán gặp lỗi và cách hàng đợi SQS bảo toàn dữ liệu giao dịch không bị thất thoát.' : '<strong>Resilience demo with SQS and DLQ:</strong> Simulated a downstream payment service outage, verifying how SQS preserved incoming customer transactions without data loss.'}</li>
            <li>${isVi ? '<strong>Phiên Q&amp;A chuyên sâu:</strong> Thảo luận cùng Giám đốc CSDL Jignesh Shah về tính nhất quán dữ liệu (eventual consistency) và chiến lược tối ưu hóa chi phí khi dịch chuyển CSDL doanh nghiệp.' : '<strong>Expert Q&amp;A with Director Jignesh Shah:</strong> Technical discussion on eventual consistency across distributed domains and cost governance strategies for cloud database migrations.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION IV – KEY TAKEAWAYS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">04</span>
          <h2 class="report-section-title">${isVi ? 'IV. Bài học cốt lõi (Key Takeaways)' : 'IV. Key Takeaways'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Nội dung hội thảo đúc kết các bài học kiến trúc trọng tâm trong việc xây dựng hệ thống phân tán:'
            : 'The workshop synthesized foundational architectural lessons in distributed software engineering:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Lĩnh vực kỹ thuật (Technical Area)' : 'Technical Area'}</th>
                  <th style="width: 70%;">${isVi ? 'Kiến thức cốt lõi (Key Architectural Concepts)' : 'Key Architectural Concepts'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monolith Limitations</strong></td>
                  <td>${isVi ? 'Nhận diện các điểm nghẽn về khớp nối chặt (tight coupling), chu kỳ phát hành và rủi ro gián đoạn toàn bộ hệ thống.' : 'Understanding tight coupling bottlenecks, protracted release cycles, and excessive failure blast radius.'}</td>
                </tr>
                <tr>
                  <td><strong>Queue Management</strong></td>
                  <td>${isVi ? 'Sử dụng Amazon SQS để đệm dữ liệu, phân tách tiến trình xử lý và hấp thụ lưu lượng tải đột biến.' : 'Leveraging Amazon SQS to buffer requests, decouple processing stages, and absorb traffic spikes.'}</td>
                </tr>
                <tr>
                  <td><strong>Caching Strategy</strong></td>
                  <td>${isVi ? 'Tận dụng Amazon ElastiCache để lưu trữ tạm thời trong RAM, giảm tải CSDL và đạt độ trễ phản hồi dưới 1 mili-giây.' : 'Utilizing Amazon ElastiCache to alleviate database read pressure and achieve sub-millisecond latencies.'}</td>
                </tr>
                <tr>
                  <td><strong>Event-Driven Messaging</strong></td>
                  <td>${isVi ? 'Áp dụng các mẫu Pub/Sub và Streaming với Amazon SNS, EventBridge, Kinesis để phi tập trung hóa giao tiếp.' : 'Applying Pub/Sub and Streaming patterns with Amazon SNS, EventBridge, and Kinesis for loose coupling.'}</td>
                </tr>
                <tr>
                  <td><strong>Domain-Driven Design</strong></td>
                  <td>${isVi ? 'Làm chủ quy trình 4 bước DDD để phân định Bounded Contexts chuẩn xác, tránh tạo ra Distributed Monolith.' : 'Mastering the 4-step DDD methodology to delineate clean bounded contexts and avoid distributed monoliths.'}</td>
                </tr>
                <tr>
                  <td><strong>Database Modernization</strong></td>
                  <td>${isVi ? 'Chuyển dịch cơ sở dữ liệu thương mại sang Amazon Aurora PostgreSQL để giải phóng chi phí bản quyền và tăng khả năng co giãn.' : 'Migrating commercial proprietary databases to Amazon Aurora PostgreSQL for cost freedom and high scalability.'}</td>
                </tr>
                <tr>
                  <td><strong>AI-Assisted Modernization</strong></td>
                  <td>${isVi ? 'Ứng dụng Amazon Q Developer để tự động hóa quét mã nguồn, refactor runtime cũ và kiểm toán an ninh trong IDE.' : 'Employing Amazon Q Developer to automate repository analysis, legacy runtime refactoring, and code reviews.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="font-weight:700; color:#171717; margin-top:20px;">
            ${isVi ? 'Các nguyên tắc kiến trúc cốt lõi:' : 'Core architectural principles established:'}
          </p>
          <ul>
            <li>${isVi ? 'Hiện đại hóa là một hành trình tái cấu trúc có phương pháp (Architecture-led), không đơn thuần là di chuyển mã nguồn nguyên trạng lên đám mây (Lift and Shift).' : 'Modernization is an architecture-driven evolution, not a mere lift-and-shift code relocation.'}</li>
            <li>${isVi ? 'Phân tách bất đồng bộ (Asynchronous Decoupling) là chìa khóa bảo vệ hệ thống trước sự cố lan chuyền và giúp từng thành phần co giãn độc lập.' : 'Asynchronous decoupling is essential to preventing cascading failures and ensuring independent scalability.'}</li>
            <li>${isVi ? 'Thiết kế ranh giới nghiệp vụ chuẩn xác theo Domain-Driven Design là điều kiện tiên quyết để xây dựng Microservices bền vững.' : 'Accurate domain boundaries defined through DDD are the foundation of successful, sustainable microservices.'}</li>
            <li>${isVi ? 'Cơ sở dữ liệu đám mây mã nguồn mở mang lại sự tự do công nghệ và tối ưu hóa chi phí vượt bậc so với các giải pháp độc quyền.' : 'Cloud-native open-source databases deliver technological independence and substantial cost savings over proprietary engines.'}</li>
            <li>${isVi ? 'Trợ lý AI đang định hình lại phương thức kỹ thuật phần mềm, tự động hóa các tác vụ lặp lại để kỹ sư tập trung vào tư duy kiến trúc.' : 'AI assistants are redefining software engineering, empowering engineers to focus on high-value architectural reasoning.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION V – LESSONS LEARNED & PERSONAL CONTRIBUTIONS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">05</span>
          <h2 class="report-section-title">${isVi ? 'V. Bài học rút ra & Đóng góp cá nhân (Lessons Learned & Personal Contributions)' : 'V. Lessons Learned & Personal Contributions'}</h2>
        </div>
        <div class="report-prose">
          
          <!-- 1. Lessons Learned -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:16px 0 8px 0;">
            ${isVi ? '1. Bài học rút ra (Lessons Learned)' : '1. Lessons Learned'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Tư duy chuyển đổi hệ thống lớn:</strong> Thấu hiểu rằng hiện đại hóa ứng dụng là một lộ trình tái cấu trúc có phương pháp (Architecture-led), phân rã nghiệp vụ theo miền thay vì chỉ di chuyển hạ tầng nguyên trạng (Lift-and-Shift).' : '<strong>Enterprise modernization mindset:</strong> Understood that application modernization is an architecture-driven evolution requiring domain-based decoupling rather than a simple infrastructure lift-and-shift.'}</li>
            <li>${isVi ? '<strong>Vai trò của phân tách bất đồng bộ:</strong> Nhận thức rõ ràng cách thức hàng đợi (Amazon SQS) và cơ chế Pub/Sub (Amazon SNS, EventBridge) giúp loại bỏ điểm lỗi đơn lẻ (SPOF) và bảo vệ hệ thống trước sự cố lan chuyền.' : '<strong>Role of asynchronous decoupling:</strong> Recognized how message buffering with Amazon SQS and event routing via SNS/EventBridge eliminate single points of failure and prevent cascading outages.'}</li>
            <li>${isVi ? '<strong>Phân định ranh giới nghiệp vụ chuẩn xác:</strong> Nắm vững quy trình 4 bước của Domain-Driven Design (DDD) để xác định các Bounded Contexts, phòng ngừa rủi ro tạo ra kiến trúc "Distributed Monolith".' : '<strong>Domain boundary precision:</strong> Mastered the 4-step Domain-Driven Design (DDD) methodology to establish clean bounded contexts and avoid distributed monolith antipatterns.'}</li>
            <li>${isVi ? '<strong>Tối ưu hóa cơ sở dữ liệu trên đám mây:</strong> Nhận thức lợi ích kinh tế và tính linh hoạt khi dịch chuyển từ CSDL thương mại độc quyền sang Amazon Aurora PostgreSQL.' : '<strong>Cloud database optimization:</strong> Acknowledged the strategic economic and operational advantages of migrating proprietary commercial databases to Amazon Aurora PostgreSQL.'}</li>
            <li>${isVi ? '<strong>Đòn bẩy tự động hóa từ GenAI:</strong> Nhận thấy tiềm năng của các trợ lý AI như Amazon Q Developer trong việc tự động hóa nâng cấp runtime, refactor mã nguồn cũ và rà soát an ninh.' : '<strong>GenAI automation leverage:</strong> Realized the transformative capability of GenAI engineering assistants like Amazon Q Developer to automate routine migration and refactoring tasks.'}</li>
          </ul>

          <!-- 2. Practical Applications -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '2. Khả năng vận dụng (Practical Applications)' : '2. Practical Applications'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Áp dụng Domain-Driven Design vào đồ án:</strong> Vận dụng phương pháp phân tích 4 bước DDD để phân rã các miền nghiệp vụ và thiết kế kiến trúc vi dịch vụ cho đồ án tốt nghiệp và các dự án phần mềm cá nhân.' : '<strong>Apply Domain-Driven Design to coursework:</strong> Leverage the 4-step DDD methodology to analyze business requirements and define modular service boundaries in academic capstone projects.'}</li>
            <li>${isVi ? '<strong>Thiết kế luồng bất đồng bộ trên AWS:</strong> Sử dụng Amazon SQS và EventBridge để xây dựng các kênh giao tiếp hướng sự kiện có khả năng chịu lỗi và hấp thụ lưu lượng tải đột biến trong các bài thực hành đám mây.' : '<strong>Design asynchronous AWS workflows:</strong> Implement Amazon SQS and EventBridge to build fault-tolerant, event-driven architectures capable of handling bursty workloads in cloud labs.'}</li>
            <li>${isVi ? '<strong>Nghiên cứu quy trình chuyển dịch CSDL:</strong> Thử nghiệm quy trình chuyển dịch schema và dữ liệu sang Amazon Aurora PostgreSQL nhằm rèn luyện kỹ năng quản trị và tối ưu hóa chi phí CSDL.' : '<strong>Explore database migration workflows:</strong> Experiment with schema conversion and data migration workflows targeting Amazon Aurora PostgreSQL for cost governance and query optimization.'}</li>
            <li>${isVi ? '<strong>Tích hợp trợ lý AI vào IDE cá nhân:</strong> Sử dụng Amazon Q Developer trong môi trường phát triển (VS Code/IntelliJ) phục vụ việc rà soát an ninh mã nguồn và chuẩn hóa chất lượng phần mềm theo chuẩn AWS Well-Architected.' : '<strong>Integrate AI assistants into IDE:</strong> Utilize Amazon Q Developer in daily developer environments to audit security vulnerabilities and standardize code quality against AWS Well-Architected practices.'}</li>
          </ul>

          <!-- 3. Personal Contributions -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '3. Đóng góp cá nhân (Personal Contributions)' : '3. Personal Contributions'}
          </h3>
          <ul>
            <li>${isVi ? 'Tham gia đầy đủ chương trình hội thảo với vai trò người tham dự (Attendee) từ 08:00 đến 17:00 ngày 29/09/2026 tại tầng 26, Bitexco Financial Tower.' : 'Participated fully in the workshop as an Attendee from 08:00 AM to 05:00 PM on September 29, 2026, on the 26th Floor of Bitexco Financial Tower.'}</li>
            <li>${isVi ? 'Tiếp thu, ghi chép và tổng hợp các kiến thức chuyên môn về Microservices, DDD, Event-Driven Architecture và Amazon Q Developer từ các chuyên gia AWS.' : 'Listened attentively, took detailed technical notes, and consolidated domain knowledge on Microservices, DDD, Event-Driven Architecture, and Amazon Q Developer from AWS specialists.'}</li>
            <li>${isVi ? 'Hệ thống hóa các nội dung kỹ thuật, xây dựng bảng so sánh và sơ đồ quy trình để phục vụ việc lưu trữ tri thức bài bản.' : 'Systematized technical concepts, comparison matrices, and workflow blueprints for structured knowledge retention.'}</li>
            <li>${isVi ? 'Xây dựng bài báo cáo sự kiện chi tiết trên website cá nhân (Personal Worklog) trong khuôn khổ chương trình First Cloud AI Journey.' : 'Authored and published a detailed technical event report on the Personal Worklog website within the First Cloud AI Journey program.'}</li>
            <li>${isVi ? 'Lưu trữ, duy trì và chia sẻ các tài liệu kỹ thuật thu hoạch được thông qua mã nguồn mở trên GitHub Pages.' : 'Maintained and published the acquired technical documentation openly via GitHub Pages.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION VI – CONCLUSION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">06</span>
          <h2 class="report-section-title">${isVi ? 'VI. Kết luận (Conclusion)' : 'VI. Conclusion'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo First Cloud AI Journey ngày 29/09/2026 mang lại giá trị kiến thức thực tiễn to lớn về lộ trình hiện đại hóa phần mềm cấp doanh nghiệp.'
            : 'The First Cloud AI Journey workshop on September 29, 2026, delivered substantial practical value regarding enterprise cloud software modernization.'}</p>

          <p>${isVi
            ? 'Qua sự kiện, tư duy kỹ thuật của bản thân đã có bước chuyển biến rõ nét: từ cách nhìn nhận việc phát triển ứng dụng đơn lẻ sang tư duy kiến trúc phân tán toàn diện, nơi tính module hóa, khả năng chịu lỗi và tính độc lập của từng miền nghiệp vụ đóng vai trò quyết định. Đồng thời, nhận thức về vai trò hỗ trợ của GenAI trong kỹ thuật phần mềm cũng được định hình cụ thể — AI đóng vai trò đòn bẩy tự động hóa mạnh mẽ giúp kỹ sư tập trung vào tư duy kiến trúc cốt lõi.'
            : 'The event fostered significant growth in my technical mindset: transitioning from isolated application development to holistic distributed system architecture, where modularity, fault tolerance, and domain independence are essential. It also provided a grounded perspective on GenAI in software engineering — AI serves as an automated accelerator empowering engineers to focus on core architectural reasoning.'}</p>

          <p>${isVi
            ? 'Đây là nền tảng tri thức quan trọng định hình quá trình học tập chuyên sâu về Cloud Solutions Architecture và hướng đi nghề nghiệp lâu dài trên nền tảng AWS.'
            : 'These insights establish a strong foundational knowledge base guiding my deep-dive studies in Cloud Solutions Architecture and long-term career growth on AWS.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717; font-weight:700; color:#171717; font-size:15px; margin:22px 0;">
            ${isVi
              ? '“Hiện đại hóa không chỉ là việc chuyển mã nguồn lên đám mây, mà là cuộc cách mạng về tư duy kiến trúc — nơi tính module hóa, kiến trúc hướng sự kiện và tự động hóa AI hội tụ để kiến tạo các hệ thống bền vững.”'
              : '“Modernization is not merely lifting code to the cloud, but an architectural paradigm shift — where modularity, event-driven decoupling, and AI automation converge to build resilient enterprise systems.”'}
          </div>

          <!-- Tags -->
          <div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
            #AWS #FirstCloudAIJourney #AppMod #Microservices #DDD #EventDriven #AmazonQ #DatabaseModernization #Serverless
          </div>
        </div>
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${isVi ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}



function renderCloudAIDayEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';
  container.innerHTML = isVi
    ? `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Sự kiện tham gia</span>
</a>
<span class="sep">/</span>
<span class="current">Sự kiện 1 - AWS Cloud and AI Day Hanoi 2026 (29/09/2026)</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Quay lại sự kiện</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">BÁO CÁO THU HOẠCH SỰ KIỆN</span>
<span class="badge badge-blue">Cloud Computing &amp; Agentic AI</span>
<span class="badge badge-gray">Chính thức • AWS FCAJ</span>
</div>
<h1 class="report-main-title">AWS CLOUD AND AI DAY HANOI 2026</h1>
<p class="report-main-subtitle">Hội nghị toàn thể về Điện toán Đám mây, Trí tuệ nhân tạo Agentic AI và Hiện đại hóa Hạ tầng Doanh nghiệp</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Tên sự kiện:</span>
<span class="meta-strip-val"><strong>AWS Cloud and AI Day Hanoi 2026</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Thời gian:</span>
<span class="meta-strip-val">07:30 – 17:00, Thứ Ba, 29/09/2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Địa điểm chính:</span>
<span class="meta-strip-val">JW Marriott Hotel Hanoi, Hà Nội, Việt Nam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Hình thức tham dự:</span>
<span class="meta-strip-val">Theo dõi trực tiếp từ Hà Nội tại điểm cầu FCAJ HCMC Watch Party, TP. Hồ Chí Minh</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Vai trò:</span>
<span class="meta-strip-val"><strong>Người tham dự Watch Party (Watch Party Attendee)</strong></span>
</div>
</div>
</header>

<!-- Event 1 Check-in Photo -->
<div id="event-1-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Nhấp để xem ảnh độ nét cao (HD)">
<img id="event-1-cover-img" src="assets/images/events/event-1.jpg"  alt="AWS Cloud and AI Day Hanoi 2026 – FCAJ HCMC Watch Party" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Ảnh minh chứng sinh viên tham dự theo dõi trực tiếp sự kiện AWS Cloud and AI Day Hanoi 2026 tại điểm cầu FCAJ HCMC Watch Party (29/09/2026)
</div>
</div>

<!-- SECTION 1 – EVENT INFORMATION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Thông tin sự kiện (Event Information)</h2>
</div>
<div class="report-prose">
<p><strong>AWS Cloud and AI Day Hanoi 2026</strong> là hội nghị thường niên quy mô lớn do Amazon Web Services (AWS) tổ chức, quy tụ các kỹ sư giải pháp, kiến trúc sư trưởng, lãnh đạo công nghệ cùng đại diện các cơ quan ban ngành và doanh nghiệp đối tác hàng đầu tại Việt Nam.</p>
<ul>
<li><strong>Tên chính thức:</strong> AWS Cloud and AI Day Hanoi 2026</li>
<li><strong>Ngày diễn ra:</strong> Thứ Ba, ngày 29 tháng 09 năm 2026</li>
<li><strong>Địa điểm chính:</strong> Khách sạn JW Marriott Hotel Hanoi, Hà Nội, Việt Nam</li>
<li><strong>Hình thức tham dự thực tế:</strong> Tham dự điểm cầu trực tiếp <em>FCAJ HCMC Watch Party</em> tại TP. Hồ Chí Minh, theo dõi tiếp sóng trực tuyến toàn bộ chương trình và các bài thuyết trình kỹ thuật từ Hà Nội.</li>
<li><strong>Vai trò:</strong> Người tham dự Watch Party (Watch Party Attendee).</li>
</ul>
</div>
</section>

<!-- SECTION 2 – KEYNOTE SPEAKERS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Diễn giả chính (Keynote Speakers)</h2>
</div>
<div class="report-prose">
<p>Hội nghị quy tụ các diễn giả và nhà lãnh đạo công nghệ cấp cao trình bày tại phiên khai mạc toàn thể (Keynote):</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 35%;">Diễn giả (Speaker)</th>
<th style="width: 65%;">Chức vụ &amp; Đơn vị công tác (Role &amp; Organization)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Hoang Minh</strong></td>
<td>Thứ trưởng Bộ Khoa học và Công nghệ (Deputy Minister of Science and Technology)</td>
</tr>
<tr>
<td><strong>Jennifer Wicks</strong></td>
<td>Đại sứ Hợp chủng quốc Hoa Kỳ tại Việt Nam (U.S. Ambassador to Vietnam)</td>
</tr>
<tr>
<td><strong>Dr. Werner Vogels</strong></td>
<td>Giám đốc Công nghệ (Chief Technology Officer), Amazon.com</td>
</tr>
<tr>
<td><strong>Eric Yeo</strong></td>
<td>Tổng Giám đốc AWS khu vực Malaysia, Việt Nam và Đông Dương (AWS Country General Manager for Malaysia, Vietnam, and Indochina)</td>
</tr>
<tr>
<td><strong>Mai Le</strong></td>
<td>Giám đốc Quản lý Sản phẩm (Director of Product Management), Katalon</td>
</tr>
<tr>
<td><strong>Dr. Jens Lottner</strong></td>
<td>Tổng Giám đốc (Chief Executive Officer), Techcombank</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 6px; padding: 12px 16px; margin: 16px 0;">
<p style="margin: 0; font-size: 13.5px; color: #1e293b;">
<strong>Danh sách 6 diễn giả chính thức:</strong> <strong>Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner</strong>.
</p>
</div>
</div>
</section>

<!-- SECTION 3 – EVENT OVERVIEW -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Tổng quan sự kiện (Event Overview)</h2>
</div>
<div class="report-prose">
<p>Hội nghị tập trung vào các trụ cột công nghệ trọng tâm: Điện toán đám mây hiện đại, dữ liệu nền tảng cho AI (AI-ready Data), ứng dụng các tác tử thông minh (Agentic AI) trong phát triển phần mềm, quy trình di chuyển hạ tầng và tối ưu hóa vận hành đám mây.</p>

<h4 style="font-size: 14.5px; font-weight: 700; color: #171717; margin: 16px 0 8px 0;">Lịch trình hoạt động tổng thể (Official Schedule)</h4>
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Thời gian (UTC+7)</th>
<th style="width: 75%;">Hoạt động chính (Activity)</th>
</tr>
</thead>
<tbody>
<tr>
<td>07:30</td>
<td>Đón khách, check-in và mở cửa khu vực triển lãm công nghệ (Expo)</td>
</tr>
<tr>
<td>09:00</td>
<td>Phiên khai mạc chính thức (Keynote KEY001) tại Grand Ballroom Hà Nội</td>
</tr>
<tr>
<td>10:15</td>
<td>Giải lao kết nối mạng lưới (Networking break) và tham quan triển lãm Expo</td>
</tr>
<tr>
<td>11:00</td>
<td>Chuỗi các phiên thuyết trình kỹ thuật buổi sáng (Morning Technical Sessions)</td>
</tr>
<tr>
<td>12:05</td>
<td>Nghỉ trưa, networking và trải nghiệm giải pháp tại khu triển lãm</td>
</tr>
<tr>
<td>13:10</td>
<td>Chuỗi các phiên kỹ thuật chuyên sâu đầu giờ chiều (Early Afternoon Sessions)</td>
</tr>
<tr>
<td>14:50</td>
<td>Nghỉ giải lao kỹ thuật và trao đổi với các chuyên gia AWS</td>
</tr>
<tr>
<td>15:20</td>
<td>Chuỗi các phiên kỹ thuật cuối buổi chiều (Late Afternoon Sessions)</td>
</tr>
<tr>
<td>17:00</td>
<td>Bế mạc hội nghị (Event Close)</td>
</tr>
</tbody>
</table>
</div>

<p>Tại điểm cầu <em>FCAJ HCMC Watch Party</em>, sinh viên và cộng đồng kỹ sư tại TP. Hồ Chí Minh đã theo dõi trực tiếp bài Keynote KEY001 từ 09:00 và tham gia thảo luận song song phiên kỹ thuật <strong>DVT205 (HCMC Watch Party)</strong> kết nối đồng bộ với phiên <strong>DVT203 (Building software like never before with agentic AI)</strong> tại Grand Ballroom 3 Hà Nội.</p>
</div>
</section>

<!-- SECTION 4 – MAIN TOPICS AND ACTIVITIES -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Nội dung chính và hoạt động kỹ thuật (Main Topics & Activities)</h2>
</div>
<div class="report-prose">

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:20px 0 10px 0;">4.1. Keynote và Agentic AI trong phát triển phần mềm</h3>
<ul>
<li><strong>Phiên Keynote KEY001:</strong> Đặt ra bài toán giải quyết các thách thức công nghệ phức tạp bằng các công cụ đám mây thế hệ mới, định hình ba xu hướng chủ đạo: áp dụng AI Agent trong vòng đời phần mềm, hiện đại hóa tải công việc và bảo vệ an ninh hệ thống ngay từ khâu thiết kế.</li>
<li><strong>Phiên DVT205 / DVT203 (Building software like never before with agentic AI):</strong> Phân tích cách thức các tác tử AI tham gia trực tiếp vào quy trình kỹ thuật phần mềm, tự động hóa phân tích mã nguồn, sinh kiểm thử và hỗ trợ lập trình viên cộng tác.</li>
<li><strong>Chuyển đổi từ thử nghiệm sang vận hành thực tế:</strong> Các phiên AIM201 (From Demo to Deployment) và AIM301 (Scaling Multi-Agent Architectures) giải quyết rào cản đưa tác tử AI vào dây chuyền sản xuất; kết hợp cùng phiên PRT301-S và PRT201-S nhấn mạnh yếu tố tin cậy, an toàn và duy trì quyền kiểm soát con người trong luồng nghiệp vụ.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.2. Phân tích dữ liệu và Hạ tầng sẵn sàng cho AI (Data Analytics & AI-Ready Infrastructure)</h3>
<ul>
<li><strong>Nền tảng dữ liệu cho AI:</strong> Các phiên ANT202 và ANT211 làm rõ tầm quan trọng của việc chuẩn hóa chất lượng dữ liệu (Data Quality) và cấu trúc dữ liệu AI-ready trước khi áp dụng các mô hình học máy và tác tử thông minh.</li>
<li><strong>Ứng dụng trong khối tài chính ngân hàng:</strong> Phiên ANT201 hướng dẫn xây dựng các Agent dựa trên dữ liệu cho ngành FSI, kết hợp cùng phiên ANT214 chia sẻ hành trình VPBank quy mô hóa nền tảng dữ liệu với Amazon Redshift.</li>
<li><strong>Xóa bỏ ốc đảo dữ liệu:</strong> Phiên ANT205 trình bày phương thức liên kết các nguồn dữ liệu rời rạc thông qua Amazon Quick Suite, hỗ trợ trích xuất thông tin chi tiết phục vụ kinh doanh.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.3. Hiện đại hóa ứng dụng và An ninh đám mây (Application Modernization & Cloud Security)</h3>
<ul>
<li><strong>Platform Engineering trên EKS:</strong> Phiên DEV205 phân tích mô hình nền tảng lập trình viên nội bộ trên nền tảng Amazon EKS quy mô lớn; phiên DEV208 chia sẻ bài học di chuyển ứng dụng NestJS từ EC2/PM2 sang EKS áp dụng GitOps tự động hóa.</li>
<li><strong>Phân rã nguyên khối sang Microservices:</strong> Phiên MAM203 chia sẻ phương pháp chia nhỏ hệ thống Monolith lên EKS, cùng phiên AIM303 ứng dụng AWS Transform AI Agent để hiện đại hóa đồng bộ các ứng dụng .NET và CSDL SQL Server.</li>
<li><strong>Bảo mật danh tính và ứng dụng:</strong> Phiên DEV401 hướng dẫn kỹ thuật quản trị danh tính khối lượng công việc (Workload Identity); phiên DVT305 giới thiệu AWS Security Agent bảo vệ an ninh ứng dụng chủ động từ thiết kế đến triển khai; phiên AIM203 xây dựng cơ chế phòng thủ chiều sâu (Defense in Depth) cho tải công việc AI.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.4. Vận hành đám mây và Tối ưu hóa chi phí (Cloud Operations & Cost Optimization)</h3>
<ul>
<li><strong>Tối ưu hóa chi phí lưu trữ:</strong> Phiên DEV204 do cộng đồng FCAJ đóng góp hướng dẫn làm chủ các hạng lưu trữ Amazon S3 (S3 Storage Classes), giảm lãng phí tài nguyên lưu trữ dữ liệu tĩnh.</li>
<li><strong>Tự động xử lý lệch hạ tầng:</strong> Phiên DEV206 ứng dụng hệ thống Multi-Agent tự động phát hiện và khắc phục độ lệch hạ tầng (Infrastructure Drift Remediation) trong mã hạ tầng IaC.</li>
<li><strong>Kiểm soát chi phí AI quy mô lớn:</strong> Phiên DEV210 chia sẻ giải pháp thực thi giới hạn ngân sách và giám sát chi tiêu Amazon Bedrock theo thời gian thực tại Vietnam International Bank.</li>
<li><strong>Giám sát toàn diện:</strong> Phiên PRT203-S (Datadog) giới thiệu phương pháp giám sát các chỉ số vận hành vượt ra ngoài Golden Signals truyền thống trong kỷ nguyên GenAI.</li>
</ul>
</div>
</section>

<!-- SECTION 5 – KNOWLEDGE AND LESSONS LEARNED -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Kiến thức và bài học tiếp thu (Knowledge & Lessons Learned)</h2>
</div>
<div class="report-prose">
<p>Thông qua chuỗi bài thuyết trình và thảo luận chuyên sâu tại sự kiện, các bài học kỹ thuật cốt lõi được đúc kết bao gồm:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Trụ cột kiến thức</th>
<th style="width: 75%;">Nội dung đúc kết &amp; Ứng dụng thực tế</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. AI Reliability &amp; Security</strong></td>
<td>Xác định rõ phạm vi quyền hạn và cơ chế xác thực kết quả của tác tử AI trước khi tích hợp vào hệ thống. Cần thiết lập kiểm soát tính chính xác, tỷ lệ lỗi và luôn có cơ chế người duyệt (Human-in-the-loop) đối với các hành động quan trọng.</td>
</tr>
<tr>
<td><strong>2. Data Quality</strong></td>
<td>Dữ liệu là nền móng của hệ thống AI. Cần xác định rõ nguồn dữ liệu có thẩm quyền (authoritative source), thiết lập kiểm soát phân quyền truy cập chặt chẽ và cơ chế đồng bộ làm mới dữ liệu liên tục.</td>
</tr>
<tr>
<td><strong>3. Cloud Architecture</strong></td>
<td>Lựa chọn giải pháp hiện đại hóa ứng dụng phù hợp với hiện trạng hệ thống: chuyển đổi sang container trên Amazon ECS hoặc EKS, kết hợp triển khai tự động qua GitOps để rút ngắn chu kỳ release và giảm thiểu sự cố thủ công.</td>
</tr>
<tr>
<td><strong>4. Monitoring &amp; Cost</strong></td>
<td>Tính toán chi phí và vận hành ngay từ giai đoạn thiết kế kiến trúc. Áp dụng chính sách vòng đời S3 Lifecycle theo tần suất truy cập; đồng thời giám sát lưu lượng token, độ trễ và tỷ lệ lỗi để tối ưu ngân sách Amazon Bedrock.</td>
</tr>
</tbody>
</table>
</div>

<h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 10px 0;">Ứng dụng thực tiễn vào Dự án nhóm (Nutrition E-Commerce)</h4>
<p>Các kiến thức thu hoạch từ sự kiện được đối chiếu và áp dụng trực tiếp vào kiến trúc của dự án nhóm <strong>Nutrition E-Commerce</strong>:</p>
<ul>
<li><strong>Tích hợp Amazon Bedrock cho dữ liệu dinh dưỡng:</strong> Áp dụng Amazon Bedrock để trích xuất tự động thành phần dinh dưỡng từ bảng nhãn thực phẩm và hồ sơ sản phẩm, đồng thời xây dựng giao diện cho phép người dùng xem xét, hiệu chỉnh trước khi lưu vào cơ sở dữ liệu.</li>
<li><strong>Tối ưu hóa chi phí lưu trữ ảnh với Amazon S3:</strong> Phân loại các nhóm dữ liệu hình ảnh sản phẩm và tài liệu kiểm định dinh dưỡng; áp dụng chính sách vòng đời lưu trữ tự động chuyển từ S3 Standard sang S3 Standard-IA sau 30 ngày và S3 Glacier Flexible Retrieval sau 90 ngày cho dữ liệu lịch sử.</li>
<li><strong>Hiện đại hóa nền tảng triển khai với Amazon ECS Fargate:</strong> Đóng gói các dịch vụ API dinh dưỡng vào container và triển khai trên hạ tầng không máy chủ AWS Fargate, kết hợp cấu hình kiểm tra sức khỏe tác vụ (health checks) và Application Load Balancer để đảm bảo độ tin cậy vận hành.</li>
<li><strong>Bảo mật danh tính và quản trị chi phí:</strong> Thiết lập IAM least privilege và Workload Identity cho các microservices, mã hóa dữ liệu với AWS KMS, và giám sát chi tiêu API Amazon Bedrock qua CloudWatch Metrics.</li>
</ul>
</div>
</section>

<!-- SECTION 6 – PERSONAL REFLECTION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Cảm nhận cá nhân (Personal Reflection)</h2>
</div>
<div class="report-prose">
<p>Việc tham gia theo dõi sự kiện <strong>AWS Cloud and AI Day Hanoi 2026</strong> tại điểm cầu <em>FCAJ HCMC Watch Party</em> là một trải nghiệm học tập công nghệ giá trị trong quá trình thực tập. Dù tham dự từ xa qua tiếp sóng trực tiếp, không khí trao đổi kỹ thuật sôi nổi cùng các đồng nghiệp và cố vấn tại TP. Hồ Chí Minh đã giúp tôi tiếp thu kiến thức một cách chủ động và sâu sắc.</p>
<p>Các bài chia sẻ thực tế từ các diễn giả đầu ngành (Techcombank, VPBank, Katalon, AWS) đã mở rộng tầm nhìn của tôi về bức tranh chuyển đổi số: việc áp dụng Trí tuệ nhân tạo không dừng lại ở mức mô hình trình diễn (demo) mà đòi hỏi nền tảng dữ liệu sạch, kiến trúc đám mây vững chắc, khả năng kiểm soát ngân sách vận hành và an ninh đa tầng. Đây là những nguyên lý chỉ đạo trực tiếp giúp tôi hoàn thiện hệ thống báo cáo thực tập và đóng góp hiệu quả vào dự án công nghệ của nhóm.</p>
</div>
</section>

</article>`
    : `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Events Participated</span>
</a>
<span class="sep">/</span>
<span class="current">Event 1 - AWS Cloud and AI Day Hanoi 2026 (September 29, 2026)</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Back to Events</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">EVENT HARVEST REPORT</span>
<span class="badge badge-blue">Cloud Computing &amp; Agentic AI</span>
<span class="badge badge-gray">Official • AWS FCAJ</span>
</div>
<h1 class="report-main-title">AWS CLOUD AND AI DAY HANOI 2026</h1>
<p class="report-main-subtitle">Flagship Conference on Cloud Computing, Agentic AI, and Enterprise Infrastructure Modernization</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Event Name:</span>
<span class="meta-strip-val"><strong>AWS Cloud and AI Day Hanoi 2026</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Date &amp; Time:</span>
<span class="meta-strip-val">07:30 AM – 05:00 PM, Tuesday, September 29, 2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Main Venue:</span>
<span class="meta-strip-val">JW Marriott Hotel Hanoi, Hanoi, Vietnam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Actual Participation:</span>
<span class="meta-strip-val">Watched the live stream from Hanoi at the FCAJ HCMC Watch Party in Ho Chi Minh City</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Role:</span>
<span class="meta-strip-val"><strong>Watch Party Attendee</strong></span>
</div>
</div>
</header>

<!-- Event 1 Check-in Photo -->
<div id="event-1-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Click to view high-definition image">
<img id="event-1-cover-img" src="assets/images/events/event-1.jpg"  alt="AWS Cloud and AI Day Hanoi 2026 – FCAJ HCMC Watch Party" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Authentic student check-in evidence attending the live broadcast of AWS Cloud and AI Day Hanoi 2026 at the FCAJ HCMC Watch Party (September 29, 2026)
</div>
</div>

<!-- SECTION 1 – EVENT INFORMATION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Event Information</h2>
</div>
<div class="report-prose">
<p><strong>AWS Cloud and AI Day Hanoi 2026</strong> was a major one-day flagship conference organized by Amazon Web Services (AWS), bringing together solutions architects, lead engineers, enterprise technology executives, and government representatives in Vietnam.</p>
<ul>
<li><strong>Official Event Name:</strong> AWS Cloud and AI Day Hanoi 2026</li>
<li><strong>Date:</strong> Tuesday, September 29, 2026</li>
<li><strong>Main Venue:</strong> JW Marriott Hotel Hanoi, Hanoi, Vietnam</li>
<li><strong>Actual Participation:</strong> Watched the live stream from Hanoi at the <em>FCAJ HCMC Watch Party</em> in Ho Chi Minh City, actively participating in technical discussions with peers and mentors.</li>
<li><strong>Role:</strong> Watch Party Attendee.</li>
</ul>
</div>
</section>

<!-- SECTION 2 – KEYNOTE SPEAKERS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Keynote Speakers</h2>
</div>
<div class="report-prose">
<p>The conference featured distinguished keynote speakers and senior executives at the plenary opening session:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 35%;">Speaker</th>
<th style="width: 65%;">Role &amp; Organization</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Hoang Minh</strong></td>
<td>Deputy Minister of Science and Technology</td>
</tr>
<tr>
<td><strong>Jennifer Wicks</strong></td>
<td>U.S. Ambassador to Vietnam</td>
</tr>
<tr>
<td><strong>Dr. Werner Vogels</strong></td>
<td>Chief Technology Officer, Amazon.com</td>
</tr>
<tr>
<td><strong>Eric Yeo</strong></td>
<td>AWS Country General Manager for Malaysia, Vietnam, and Indochina</td>
</tr>
<tr>
<td><strong>Mai Le</strong></td>
<td>Director of Product Management, Katalon</td>
</tr>
<tr>
<td><strong>Dr. Jens Lottner</strong></td>
<td>Chief Executive Officer, Techcombank</td>
</tr>
</tbody>
</table>
</div>

<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 6px; padding: 12px 16px; margin: 16px 0;">
<p style="margin: 0; font-size: 13.5px; color: #1e293b;">
<strong>Official Keynote Speakers:</strong> <strong>Hoang Minh, Jennifer Wicks, Dr. Werner Vogels, Eric Yeo, Mai Le, Dr. Jens Lottner</strong>.
</p>
</div>
</div>
</section>

<!-- SECTION 3 – EVENT OVERVIEW -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Event Overview</h2>
</div>
<div class="report-prose">
<p>The program comprehensively explored foundational pillars of enterprise technology: modern cloud computing, AI-ready data infrastructure, agentic AI in software engineering, workload migration, and cloud operational excellence.</p>

<h4 style="font-size: 14.5px; font-weight: 700; color: #171717; margin: 16px 0 8px 0;">Main Event Schedule (UTC+7)</h4>
<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Time</th>
<th style="width: 75%;">Activity</th>
</tr>
</thead>
<tbody>
<tr>
<td>07:30</td>
<td>Check-in, badge collection, and Expo opening</td>
</tr>
<tr>
<td>09:00</td>
<td>Opening Keynote (KEY001) at Grand Ballroom, JW Marriott Hanoi</td>
</tr>
<tr>
<td>10:15</td>
<td>Networking break and technology exhibition exploration</td>
</tr>
<tr>
<td>11:00</td>
<td>Morning technical breakout sessions</td>
</tr>
<tr>
<td>12:05</td>
<td>Networking lunch and partner showcase</td>
</tr>
<tr>
<td>13:10</td>
<td>Early afternoon specialized technical tracks</td>
</tr>
<tr>
<td>14:50</td>
<td>Technical break and consultations with AWS specialists</td>
</tr>
<tr>
<td>15:20</td>
<td>Late afternoon deep-dive sessions</td>
</tr>
<tr>
<td>17:00</td>
<td>Event close</td>
</tr>
</tbody>
</table>
</div>

<p>At the <em>FCAJ HCMC Watch Party</em>, attendees joined the live stream of the KEY001 keynote at 09:00 and engaged directly with the <strong>DVT205 (HCMC Watch Party)</strong> session, which matched the topic of <strong>DVT203 (Building software like never before with agentic AI)</strong> held in Grand Ballroom 3 in Hanoi.</p>
</div>
</section>

<!-- SECTION 4 – MAIN TOPICS AND ACTIVITIES -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Main Topics &amp; Technical Activities</h2>
</div>
<div class="report-prose">

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:20px 0 10px 0;">4.1. Keynote and Agentic AI in Software Development</h3>
<ul>
<li><strong>Keynote KEY001:</strong> Framed around solving ambitious technological challenges with cloud and AI primitives, highlighting three core directions: embedding AI agents in software pipelines, workload modernization, and defense-in-depth system security.</li>
<li><strong>DVT205 / DVT203 (Building software like never before with agentic AI):</strong> Detailed how autonomous AI agents actively assist developers throughout the software lifecycle, from requirements analysis and code generation to automated testing and code review.</li>
<li><strong>Transitioning from Demo to Production:</strong> Sessions AIM201 (From Demo to Deployment) and AIM301 (Scaling Multi-Agent Architectures) addressed practical hurdles in operationalizing AI agents; PRT301-S and PRT201-S emphasized human governance, reliability, and security guardrails.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.2. Data Analytics and AI-Ready Infrastructure</h3>
<ul>
<li><strong>Building AI-Ready Data Foundations:</strong> Sessions ANT202 and ANT211 established the critical necessity of authoritative data quality, cataloging, and low-latency access before deploying generative AI models.</li>
<li><strong>Financial Services Industry Applications:</strong> ANT201 provided builder guidance on data-driven agents for FSI, complemented by ANT214 highlighting VPBank's experience scaling enterprise data on Amazon Redshift.</li>
<li><strong>Unifying Siloed Data:</strong> ANT205 demonstrated cross-silo analytics using Amazon Quick Suite to derive complete business insights.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.3. Application Modernization and Cloud Security</h3>
<ul>
<li><strong>Internal Developer Platforms on EKS:</strong> DEV205 illustrated platform engineering at scale on Amazon EKS; DEV208 shared lessons from migrating NestJS workloads from EC2/PM2 to EKS powered by GitOps.</li>
<li><strong>Monolith to Microservices:</strong> MAM203 outlined structured patterns for decomposing monolithic services onto EKS; AIM303 introduced AWS Transform AI Agent to automate the modernization of .NET and SQL Server workloads.</li>
<li><strong>Workload Identity &amp; AppSec:</strong> DEV401 explored advanced workload identity engineering; DVT305 showcased AWS Security Agent for proactive security from code to production; AIM203 addressed multi-tier defense in depth for agentic systems.</li>
</ul>

<h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4.4. Cloud Operations and Cost Optimization</h3>
<ul>
<li><strong>Storage Cost Optimization:</strong> DEV204, contributed by FCAJ, provided practical strategies for mastering Amazon S3 Storage Classes to eliminate unnecessary cloud expenditure.</li>
<li><strong>Infrastructure Drift Remediation:</strong> DEV206 detailed multi-agent workflows for automated drift detection and correction in Terraform / IaC repositories.</li>
<li><strong>Amazon Bedrock Spend Governance:</strong> DEV210 analyzed real-time cost control mechanisms and spend enforcement for enterprise Amazon Bedrock deployments at scale.</li>
<li><strong>Observability in the GenAI Era:</strong> PRT203-S (Datadog) detailed monitoring strategies beyond traditional golden signals for non-deterministic AI workloads.</li>
</ul>
</div>
</section>

<!-- SECTION 5 – KNOWLEDGE AND LESSONS LEARNED -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Knowledge &amp; Lessons Learned</h2>
</div>
<div class="report-prose">
<p>Key takeaways and technical insights acquired from the conference tracks:</p>

<div class="minimal-table-wrap">
<table class="minimal-table">
<thead>
<tr>
<th style="width: 25%;">Core Domain</th>
<th style="width: 75%;">Key Insights &amp; Engineering Principles</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. AI Reliability &amp; Security</strong></td>
<td>Define explicit boundaries, evaluation metrics, and verification mechanisms before deploying autonomous agents. Ensure strict guardrails against hallucinations, measure error rates, and mandate human-in-the-loop sign-off for state-modifying actions.</td>
</tr>
<tr>
<td><strong>2. Data Quality</strong></td>
<td>Authoritative, well-governed, and continuously refreshed data is the non-negotiable foundation for intelligent agents and analytics workloads.</td>
</tr>
<tr>
<td><strong>3. Cloud Architecture</strong></td>
<td>Align application modernization with concrete operational bottlenecks: leverage containerization (Amazon ECS/EKS) and declarative GitOps delivery to shorten release cycles and minimize deployment blast radius.</td>
</tr>
<tr>
<td><strong>4. Monitoring &amp; Cost</strong></td>
<td>Integrate operational observability and cost tracking into system architecture from day one. Apply lifecycle tiering to Amazon S3 data and continuously track token spend and inference latency on Amazon Bedrock.</td>
</tr>
</tbody>
</table>
</div>

<h4 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 10px 0;">Application to Nutrition E-Commerce Project</h4>
<p>The architectural concepts gained from the conference directly inform our group capstone project, <strong>Nutrition E-Commerce</strong>:</p>
<ul>
<li><strong>Amazon Bedrock for Nutrition Extraction:</strong> Deploying foundation models on Amazon Bedrock to extract nutritional profiles and allergen data from food label uploads, accompanied by a verification UI where users confirm extracted information before database persistence.</li>
<li><strong>S3 Storage Lifecycle Optimization:</strong> Applying automated S3 Lifecycle policies to product imagery and inspection documents, transitioning files from S3 Standard to S3 Standard-IA after 30 days and archiving historical compliance logs to S3 Glacier Flexible Retrieval after 90 days.</li>
<li><strong>Microservices on Amazon ECS Fargate:</strong> Containerizing the core product catalog and nutritional recommendation APIs onto serverless AWS Fargate, paired with automated Application Load Balancer health checks for high service availability.</li>
<li><strong>Identity &amp; Cost Control:</strong> Enforcing least-privilege IAM roles and Workload Identity for containerized services, encrypting sensitive personal dietary records with AWS KMS, and implementing CloudWatch budget alerts on Amazon Bedrock invocation costs.</li>
</ul>
</div>
</section>

<!-- SECTION 6 – PERSONAL REFLECTION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Personal Reflection</h2>
</div>
<div class="report-prose">
<p>Attending the live broadcast of <strong>AWS Cloud and AI Day Hanoi 2026</strong> from the <em>FCAJ HCMC Watch Party</em> in Ho Chi Minh City provided immense technical value and inspiration. Participating in discussions alongside fellow student builders and experienced AWS community mentors helped bridge theoretical cloud concepts with enterprise realities.</p>
<p>Presentations from enterprise leaders (Techcombank, VPBank, Katalon, and AWS) reinforced that sustainable AI adoption requires more than proof-of-concept demos—it demands dependable data engineering, robust container platforms, strict governance, and real-time operational discipline. These takeaways directly guided my contributions to our team project and elevated the technical rigor of this internship report.</p>
</div>
</section>

</article>`;
}

function renderFiresideChatEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';
  container.innerHTML = isVi
    ? `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Sự kiện tham gia</span>
</a>
<span class="sep">/</span>
<span class="current">Sự kiện 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Quay lại sự kiện</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">BÁO CÁO THU HOẠCH SỰ KIỆN</span>
<span class="badge badge-blue">Điện toán Đám mây &amp; Trí tuệ Nhân tạo</span>
<span class="badge badge-gray">Chính thức • AWS Community</span>
</div>
<h1 class="report-main-title">FIRESIDE CHAT WITH DR. WERNER VOGELS</h1>
<p class="report-main-subtitle">Kỹ thuật xây dựng hệ thống quy mô lớn, Renaissance Developer và tương lai của trí tuệ nhân tạo</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Tên sự kiện:</span>
<span class="meta-strip-val"><strong>Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Ngày tổ chức:</span>
<span class="meta-strip-val">Thứ Sáu, ngày 02/10/2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Thời gian:</span>
<span class="meta-strip-val">08:30 – 12:00 (giờ Việt Nam)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Địa điểm / Hình thức:</span>
<span class="meta-strip-val">Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Diễn giả:</span>
<span class="meta-strip-val"><strong>Dr. Werner Vogels</strong> (Phó Chủ tịch kiêm CTO, Amazon.com)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Vai trò:</span>
<span class="meta-strip-val"><strong>Người tham dự (Attendee)</strong></span>
</div>
</div>
</header>

<!-- Event 2 Cover Photo -->
<div id="event-2-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Nhấp để xem ảnh độ nét cao (HD)">
<img id="event-2-cover-img" src="assets/images/events/event-2.jpg"  alt="Fireside Chat with Dr. Werner Vogels – Cloud &amp; AI in Vietnam" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Ảnh 1: Hình ảnh tập thể tại sự kiện Fireside Chat với Dr. Werner Vogels – Navigating the Future of Cloud & AI in Vietnam, ngày 02/10/2026.
</div>
</div>

<!-- PHẦN 1 – THÔNG TIN SỰ KIỆN -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Thông tin sự kiện</h2>
</div>
<div class="report-prose">
<ul>
<li><strong>Tên sự kiện:</strong> Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</li>
<li><strong>Ngày tổ chức:</strong> Thứ Sáu, ngày 02/10/2026</li>
<li><strong>Thời gian:</strong> 08:30 – 12:00 (giờ Việt Nam)</li>
<li><strong>Diễn giả:</strong> Dr. Werner Vogels</li>
<li><strong>Chức danh:</strong> Phó Chủ tịch kiêm Giám đốc Công nghệ (CTO), Amazon.com</li>
<li><strong>Vai trò:</strong> Người tham dự</li>
<li><strong>Địa điểm / Hình thức tham gia:</strong> Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam</li>
<li><strong>Video sự kiện:</strong> <a href="https://www.youtube.com/watch?v=jWjOIfMA9qc&t=1s" target="_blank" rel="noopener noreferrer">Xem trên YouTube</a></li>
</ul>
</div>
</section>

<!-- PHẦN 2 – MỤC TIÊU SỰ KIỆN -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Mục tiêu sự kiện</h2>
</div>
<div class="report-prose">
<p>Buổi Fireside Chat mang đến những góc nhìn về tương lai của điện toán đám mây và trí tuệ nhân tạo tại Việt Nam.</p>
<p>Các mục tiêu chính gồm:</p>
<ul>
<li>Tìm hiểu xu hướng phát triển AWS Cloud và AI tại Việt Nam.</li>
<li>Tiếp cận tư duy thiết kế, xây dựng và vận hành hệ thống quy mô lớn.</li>
<li>Khám phá sự thay đổi của quy trình phát triển ứng dụng khi AI ngày càng phổ biến.</li>
<li>Hiểu rõ vai trò và trách nhiệm của lập trình viên trong kỷ nguyên AI.</li>
<li>Học hỏi tư duy kỹ thuật từ lãnh đạo công nghệ của Amazon.</li>
</ul>
</div>
</section>

<!-- PHẦN 3 – DIỄN GIẢ -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Diễn giả</h2>
</div>
<div class="report-prose">
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 16px; margin: 16px 0;">
<h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Dr. Werner Vogels</h3>
<p style="margin: 0; font-size: 14px; color: #475569; font-weight: 600;">Phó Chủ tịch kiêm Giám đốc Công nghệ (CTO), Amazon.com</p>
</div>
<p>Dr. Werner Vogels là nhà lãnh đạo công nghệ có nhiều kinh nghiệm trong lĩnh vực điện toán đám mây, hệ thống phân tán và kiến trúc phần mềm quy mô lớn.</p>
<p>Trong buổi trao đổi, ông chia sẻ những góc nhìn về sự hình thành và phát triển của AWS, tư duy xây dựng hệ thống lớn và tương lai của ngành phát triển phần mềm dưới tác động của AI.</p>
<p>Những nội dung này nhấn mạnh vai trò lâu dài của kiến thức nền tảng, khả năng đưa ra quyết định kỹ thuật và tinh thần học tập liên tục.</p>
</div>
</section>

<!-- PHẦN 4 – NỘI DUNG NỔI BẬT -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Nội dung nổi bật</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">4.1. Sự hình thành và phát triển của AWS</h3>
<p>Buổi trao đổi đề cập đến quá trình hình thành Amazon Web Services và sự phát triển của nền tảng điện toán đám mây.</p>
<p>Các nội dung chính gồm:</p>
<ul>
<li>Tư duy ban đầu trong việc xây dựng hạ tầng đám mây.</li>
<li>Phát triển dịch vụ phù hợp với nhiều nhóm khách hàng.</li>
<li>Thiết kế hệ thống có thể mở rộng từ ứng dụng nhỏ đến quy mô toàn cầu.</li>
<li>Lấy nhu cầu thực tế của khách hàng làm cơ sở cho các quyết định công nghệ.</li>
</ul>
<p>Chủ đề này cho thấy điện toán đám mây giúp tổ chức tiếp cận hạ tầng linh hoạt mà không cần tự xây dựng toàn bộ hệ thống.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.2. Tư duy kỹ thuật khi xây dựng hệ thống quy mô lớn</h3>
<p>Một chủ đề quan trọng khác là những thách thức trong thiết kế và vận hành hệ thống phục vụ lượng lớn người dùng.</p>
<p>Các yếu tố được nhấn mạnh gồm:</p>
<ul>
<li>Khả năng mở rộng hệ thống (Scalability).</li>
<li>Độ tin cậy và tính sẵn sàng (Reliability &amp; Availability).</li>
<li>Tự động hóa quy trình vận hành (Operational Automation).</li>
<li>Khả năng phục hồi khi xảy ra sự cố (Resilience).</li>
<li>Giám sát và bảo trì hệ thống lâu dài (Observability &amp; Maintainability).</li>
</ul>
<p>Qua đó, tôi hiểu rằng phát triển phần mềm không chỉ là xây dựng chức năng mà còn phải đảm bảo hệ thống có khả năng vận hành ổn định trong dài hạn.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.3. Khái niệm Renaissance Developer</h3>
<p>Dr. Werner Vogels giới thiệu khái niệm <em>Renaissance Developer</em>, thể hiện sự thay đổi trong vai trò của lập trình viên khi các công cụ AI ngày càng phát triển.</p>
<p>Lập trình viên hiện đại không chỉ cần biết viết mã nguồn mà còn cần hiểu kiến trúc hệ thống, có khả năng giải quyết vấn đề, giao tiếp hiệu quả và đánh giá các quyết định kỹ thuật.</p>
<p>Các công cụ AI có thể hỗ trợ công việc phát triển phần mềm, nhưng kiến thức và trách nhiệm của con người vẫn giữ vai trò quan trọng.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.4. AI, phát triển nguyên mẫu và trách nhiệm kỹ thuật</h3>
<p>Trí tuệ nhân tạo giúp rút ngắn thời gian chuyển ý tưởng thành sản phẩm nguyên mẫu.</p>
<p>AI có thể hỗ trợ sinh mã, gợi ý giải pháp và tự động hóa các công việc lặp lại.</p>
<p>Tuy nhiên, tốc độ phát triển nhanh hơn không đồng nghĩa với chất lượng phần mềm tốt hơn.</p>
<p>Lập trình viên vẫn cần:</p>
<ul>
<li>Kiểm tra mã nguồn do AI tạo ra.</li>
<li>Xác minh hoạt động của ứng dụng.</li>
<li>Kiểm thử các chức năng quan trọng.</li>
<li>Xác định những rủi ro bảo mật và độ tin cậy.</li>
<li>Đưa ra quyết định thiết kế kiến trúc phù hợp.</li>
</ul>
<p>Điều này cho thấy AI là công cụ hỗ trợ năng lực kỹ thuật, không thay thế trách nhiệm của người phát triển.</p>
</div>
</section>

<!-- PHẦN 5 – KIẾN THỨC VÀ BÀI HỌC TIẾP THU -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Kiến thức và bài học tiếp thu</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">5.1. Tư duy kỹ thuật và kiến trúc hệ thống</h3>
<ul>
<li><strong>Tư duy khả năng mở rộng:</strong> Khi thiết kế ứng dụng, cần cân nhắc khả năng mở rộng trong tương lai nhưng vẫn phải lựa chọn kiến trúc phù hợp với yêu cầu thực tế.</li>
<li><strong>Tư duy xây dựng nguyên mẫu:</strong> AI có thể giúp thử nghiệm ý tưởng nhanh hơn. Tuy nhiên, trước khi triển khai thực tế, nguyên mẫu vẫn cần được kiểm thử và đánh giá.</li>
<li><strong>Kiến thức nền tảng:</strong> Kiến thức về lập trình, kiến trúc hệ thống, hệ thống phân tán và kỹ năng giải quyết vấn đề vẫn cần thiết ngay cả khi công cụ AI ngày càng hiện đại.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.2. Sự thay đổi của ngành phát triển phần mềm</h3>
<p>Buổi trao đổi giúp tôi hiểu rõ hơn sự thay đổi trong vai trò của kỹ sư phần mềm.</p>
<p>Lập trình viên cần kết hợp kỹ năng lập trình với tư duy kiến trúc, khả năng phân tích và kỹ năng sử dụng AI một cách hiệu quả.</p>
<p>AI có thể giảm bớt những công việc lặp lại để lập trình viên dành nhiều thời gian hơn cho các vấn đề kỹ thuật phức tạp và chất lượng sản phẩm.</p>
<p>Việc liên tục học hỏi và cập nhật công nghệ là yếu tố quan trọng đối với định hướng nghề nghiệp.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.3. Ứng dụng thực tế</h3>
<ul>
<li><strong>Tích hợp AI vào quy trình phát triển:</strong> Có thể sử dụng các công cụ AI để hỗ trợ lập trình, viết tài liệu, chuẩn bị kiểm thử và xây dựng nguyên mẫu. Tuy nhiên, kết quả do AI tạo ra vẫn cần được kiểm tra.</li>
<li><strong>Cải thiện thiết kế hệ thống:</strong> Tư duy xây dựng hệ thống quy mô lớn có thể được vận dụng trong thiết kế kiến trúc, triển khai, giám sát và đảm bảo độ tin cậy cho các dự án cá nhân hoặc dự án nhóm.</li>
<li><strong>Nâng cao khả năng tự học:</strong> Sự kiện khuyến khích tinh thần chủ động tìm hiểu AWS Cloud, AI và các công nghệ mới thông qua tài liệu chính thức, dự án thực tế và chương trình First Cloud AI Journey.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.4. Liên hệ với dự án Nutrition E-Commerce</h3>
<p>Những kiến thức từ buổi Fireside Chat có thể liên hệ với dự án nhóm Nutrition E-Commerce:</p>
<ul>
<li><strong>Kiến trúc đám mây:</strong> Tìm hiểu vai trò của Amazon ECS Fargate, Application Load Balancer, Amazon RDS và Amazon CloudFront trong thiết kế tổng thể.</li>
<li><strong>Tích hợp AI:</strong> Xem xét cách Amazon Bedrock hỗ trợ các chức năng ứng dụng và tầm quan trọng của việc đánh giá kết quả AI.</li>
<li><strong>Độ tin cậy phần mềm:</strong> Hiểu rõ vai trò của kiểm thử, xác minh triển khai và giám sát hệ thống trước khi đưa ứng dụng vào sử dụng.</li>
<li><strong>Năng suất phát triển:</strong> Tìm hiểu cách AI hỗ trợ xây dựng nguyên mẫu và tài liệu kỹ thuật nhưng không thay thế việc đánh giá của lập trình viên.</li>
</ul>
<p><em>Đây là những nội dung liên hệ kiến thức với dự án, không phải khẳng định tôi đã trực tiếp triển khai tất cả dịch vụ trong buổi sự kiện.</em></p>
</div>
</section>

<!-- PHẦN 6 – TRẢI NGHIỆM VÀ CẢM NHẬN CÁ NHÂN -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Trải nghiệm và cảm nhận cá nhân</h2>
</div>
<div class="report-prose">
<p>Tham gia buổi Fireside Chat với Dr. Werner Vogels là cơ hội hữu ích để tìm hiểu tương lai của điện toán đám mây và trí tuệ nhân tạo dưới góc nhìn của một nhà lãnh đạo công nghệ giàu kinh nghiệm.</p>
<p>Có hai nội dung khiến tôi đặc biệt quan tâm:</p>
<ul>
<li><strong>Học hỏi từ chuyên gia công nghệ:</strong> Buổi trao đổi giúp tôi có góc nhìn rộng hơn về những nguyên tắc xây dựng nền tảng đám mây và các thách thức khi phát triển hệ thống có quy mô lớn.</li>
<li><strong>Nhận thức về Renaissance Developer:</strong> Tôi hiểu rõ hơn rằng lập trình viên hiện đại không chỉ cần kiến thức lập trình mà còn phải có tư duy hệ thống, kỹ năng giao tiếp, khả năng đánh giá kỹ thuật và tinh thần học hỏi liên tục.</li>
</ul>
<div class="report-quote-box" style="border-left-color: #171717; font-weight: 700; color: #171717; font-size: 15px; margin: 22px 0;">
“AI có thể giúp tăng tốc quá trình phát triển phần mềm, nhưng con người vẫn phải chịu trách nhiệm về chất lượng, bảo mật và độ tin cậy của sản phẩm.”
</div>
<p>Trải nghiệm này giúp tôi có thêm động lực tiếp tục học tập AWS Cloud, kiến trúc ứng dụng và các công nghệ AI trong chương trình First Cloud AI Journey.</p>

<!-- Tags -->
<div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
#AWS #WernerVogels #FiresideChat #CloudAI #RenaissanceDeveloper #EngineeringAtScale #FirstCloudAIJourney
</div>
</div>
</section>

<!-- Bottom Navigation Actions -->
<div class="report-bottom-actions">
<button type="button" class="btn btn-outline" onclick="navigateTo('events'); return false;">
<span>← Quay lại sự kiện</span>
</button>
<button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<span>↑ Lên đầu trang</span>
</button>
</div>
</article>`
    : `<article class="event-report-article">
<!-- Breadcrumb & Back Navigation Bar -->
<nav class="report-nav-bar" aria-label="Breadcrumb">
<div class="report-breadcrumbs">
<a href="#/events" onclick="navigateTo('events'); return false;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
<span>Events Participated</span>
</a>
<span class="sep">/</span>
<span class="current">Event 2 - Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</span>
</div>
<button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events'); return false;">
<span>← Back to Events</span>
</button>
</nav>

<!-- Hero Header -->
<header class="report-hero">
<div class="report-hero-badge-row">
<span class="badge badge-purple">EVENT HARVEST REPORT</span>
<span class="badge badge-blue">Cloud Computing &amp; Artificial Intelligence</span>
<span class="badge badge-gray">Official • AWS Community</span>
</div>
<h1 class="report-main-title">FIRESIDE CHAT WITH DR. WERNER VOGELS</h1>
<p class="report-main-subtitle">Engineering at Scale, the Renaissance Developer, and the Future of Artificial Intelligence</p>

<!-- Standardized Compact Event Metadata Strip -->
<div class="report-meta-compact-strip">
<div class="meta-strip-item">
<span class="meta-strip-label">Event Name:</span>
<span class="meta-strip-val"><strong>Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</strong></span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Event Date:</span>
<span class="meta-strip-val">Friday, October 2, 2026</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Date &amp; Time:</span>
<span class="meta-strip-val">08:30 AM – 12:00 PM, October 2, 2026 (UTC+7)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Location / Format:</span>
<span class="meta-strip-val">26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Speaker:</span>
<span class="meta-strip-val"><strong>Dr. Werner Vogels</strong> (Vice President &amp; CTO, Amazon.com)</span>
</div>
<div class="meta-strip-item">
<span class="meta-strip-label">Role:</span>
<span class="meta-strip-val"><strong>Attendee</strong></span>
</div>
</div>
</header>

<!-- Event 2 Cover Photo -->
<div id="event-2-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0; display: block; text-align: center;">
<div class="event-uploaded-img-wrap" title="Click to view high-definition image">
<img id="event-2-cover-img" src="assets/images/events/event-2.jpg"  alt="Fireside Chat with Dr. Werner Vogels – Cloud &amp; AI in Vietnam" class="event-uploaded-img" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 6px;" loading="eager" />
</div>
<div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
Photo 1: Group photo from the Fireside Chat with Dr. Werner Vogels – Navigating the Future of Cloud & AI in Vietnam, October 2, 2026.
</div>
</div>

<!-- SECTION 1 – EVENT INFORMATION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">01</span>
<h2 class="report-section-title">1. Event Information</h2>
</div>
<div class="report-prose">
<ul>
<li><strong>Event Name:</strong> Fireside Chat with Dr. Werner: Navigating the Future of Cloud &amp; AI in Vietnam</li>
<li><strong>Event Date:</strong> Friday, October 2, 2026</li>
<li><strong>Date &amp; Time:</strong> 08:30 AM – 12:00 PM, October 2, 2026 (UTC+7)</li>
<li><strong>Speaker:</strong> Dr. Werner Vogels</li>
<li><strong>Speaker Position:</strong> Vice President and Chief Technology Officer (CTO), Amazon.com</li>
<li><strong>Participation Role:</strong> Attendee</li>
<li><strong>Event Location / Participation Format:</strong> 26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam</li>
<li><strong>Event Video:</strong> <a href="https://www.youtube.com/watch?v=jWjOIfMA9qc&t=1s" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></li>
</ul>
</div>
</section>

<!-- SECTION 2 – EVENT OBJECTIVES -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">02</span>
<h2 class="report-section-title">2. Event Objectives</h2>
</div>
<div class="report-prose">
<p>The Fireside Chat aimed to provide insights into the future of cloud computing and artificial intelligence in Vietnam.</p>
<p>The main objectives included:</p>
<ul>
<li>Exploring the future of AWS Cloud and AI adoption in Vietnam.</li>
<li>Understanding engineering principles for building reliable systems at scale.</li>
<li>Discovering how AI is transforming application development and software engineering.</li>
<li>Learning about the evolving responsibilities of developers in the AI era.</li>
<li>Developing a broader engineering mindset through the experiences of AWS technology leadership.</li>
</ul>
</div>
</section>

<!-- SECTION 3 – SPEAKER -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">03</span>
<h2 class="report-section-title">3. Speaker</h2>
</div>
<div class="report-prose">
<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 16px; margin: 16px 0;">
<h3 style="margin: 0 0 6px 0; font-size: 16px; color: #0f172a;">Dr. Werner Vogels</h3>
<p style="margin: 0; font-size: 14px; color: #475569; font-weight: 600;">Vice President and Chief Technology Officer (CTO), Amazon.com</p>
</div>
<p>Dr. Werner Vogels is a technology leader known for his experience in cloud computing, distributed systems, and large-scale software architectures.</p>
<p>During the discussion, he shared perspectives on the development of AWS, engineering at scale, and the future of software development in an AI-driven world.</p>
<p>His insights emphasized the continuing importance of engineering fundamentals, technical judgment, and lifelong learning.</p>
</div>
</section>

<!-- SECTION 4 – KEY HIGHLIGHTS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">04</span>
<h2 class="report-section-title">4. Key Highlights</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">4.1. The Origins and Evolution of AWS</h3>
<p>The discussion explored the origins of Amazon Web Services and its evolution into a major cloud computing platform.</p>
<p>Key points included:</p>
<ul>
<li>The early thinking behind developing cloud infrastructure.</li>
<li>Building cloud services that support different customer needs.</li>
<li>Designing systems that can grow from small applications to global-scale workloads.</li>
<li>Using customer requirements to guide technology decisions.</li>
</ul>
<p>This topic highlighted how cloud computing enables organizations to access scalable infrastructure without building every component themselves.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.2. Engineering at Scale</h3>
<p>Another major theme was the challenge of designing and operating systems serving large numbers of users.</p>
<p>Important engineering considerations included:</p>
<ul>
<li>Scalability and workload growth.</li>
<li>Reliability and service availability.</li>
<li>Automation and operational efficiency.</li>
<li>Resilient system design.</li>
<li>Monitoring and long-term maintainability.</li>
</ul>
<p>The discussion emphasized that successful software engineering involves more than building features. Systems must also remain dependable as their complexity and usage increase.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.3. The Renaissance Developer</h3>
<p>Dr. Werner Vogels introduced the concept of the <em>Renaissance Developer</em>, describing how software engineers must adapt as AI tools become more capable.</p>
<p>Modern developers need to develop skills beyond writing source code.</p>
<p>They should also understand system architecture, solve complex problems, communicate effectively, and evaluate technical decisions.</p>
<p>AI assistants can support everyday development activities, but human knowledge and responsibility remain essential.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">4.4. AI, Prototyping, and Engineering Responsibility</h3>
<p>Artificial intelligence can significantly accelerate the process of turning ideas into working prototypes.</p>
<p>AI tools may help developers generate initial code, explore solutions, and automate repetitive tasks.</p>
<p>However, faster development does not automatically guarantee software quality.</p>
<p>Developers must still:</p>
<ul>
<li>Review AI-generated code.</li>
<li>Validate application behavior.</li>
<li>Test important functionalities.</li>
<li>Identify security and reliability risks.</li>
<li>Make informed architectural decisions.</li>
</ul>
<p>The discussion reinforced the idea that AI should support engineering expertise rather than replace it.</p>
</div>
</section>

<!-- SECTION 5 – KEY LEARNINGS -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">05</span>
<h2 class="report-section-title">5. Key Learnings</h2>
</div>
<div class="report-prose">

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 16px 0 8px 0;">5.1. Engineering Mindset and Architecture</h3>
<ul>
<li><strong>Scalability-first thinking:</strong> Developers should consider how their systems might evolve as application requirements and workloads change. Scalability is important, but the chosen architecture should remain appropriate to actual project needs.</li>
<li><strong>Prototyping mindset:</strong> AI tools can help teams evaluate ideas quickly and experiment with different approaches. Before deployment, prototypes still require testing, refinement, and technical validation.</li>
<li><strong>Engineering fundamentals:</strong> Core knowledge of programming, system architecture, distributed systems, and problem-solving remains valuable even as development tools evolve.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.2. The Evolution of Software Development</h3>
<p>The discussion helped me better understand the changing role of software engineers.</p>
<p>Developers are increasingly expected to combine coding skills with architecture, analytical thinking, and the ability to work effectively with AI assistants.</p>
<p>AI can reduce repetitive work, allowing developers to devote more attention to technical challenges and software quality.</p>
<p>Continuous learning is essential to staying current with cloud computing and AI technologies.</p>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.3. Practical Applications</h3>
<ul>
<li><strong>Integrating AI into development workflows:</strong> AI assistants can support coding, documentation, code review, testing preparation, and rapid prototyping. Their results still require human validation.</li>
<li><strong>Improving system design:</strong> Engineering-at-scale principles can guide decisions about reliability, deployment, monitoring, and scalability in individual or group projects.</li>
<li><strong>Strengthening self-learning:</strong> The session encouraged proactive learning through AWS documentation, practical projects, and programs such as First Cloud AI Journey.</li>
</ul>

<h3 style="font-size: 15px; font-weight: 700; color: #0F172A; margin: 24px 0 8px 0;">5.4. Application to Nutrition E-Commerce</h3>
<p>The ideas discussed in the Fireside Chat are relevant to the Nutrition E-Commerce group project:</p>
<ul>
<li><strong>Cloud architecture:</strong> Reviewing the roles of Amazon ECS Fargate, Application Load Balancer, Amazon RDS, and Amazon CloudFront in the overall system design.</li>
<li><strong>AI integration:</strong> Considering how Amazon Bedrock can support application features while maintaining appropriate validation and security controls.</li>
<li><strong>Software reliability:</strong> Understanding the importance of testing, deployment verification, and monitoring before considering an application ready for users.</li>
<li><strong>Development productivity:</strong> Exploring how AI-assisted development can help with prototyping and documentation without replacing human technical judgment.</li>
</ul>
<p><em>These points describe how the session's concepts relate to the project. They do not imply that every technology was personally implemented during the event.</em></p>
</div>
</section>

<!-- SECTION 6 – EVENT EXPERIENCE AND PERSONAL REFLECTION -->
<section class="report-section-block">
<div class="report-section-header">
<span class="report-section-num">06</span>
<h2 class="report-section-title">6. Event Experience and Personal Reflection</h2>
</div>
<div class="report-prose">
<p>Attending the Fireside Chat with Dr. Werner Vogels was a valuable opportunity to explore the future of cloud computing and artificial intelligence from the perspective of an experienced technology leader.</p>
<p>Two ideas stood out to me:</p>
<ul>
<li><strong>Learning from technology leadership:</strong> The discussion provided a broader perspective on the principles behind cloud platforms and the challenges of building reliable systems at scale.</li>
<li><strong>Understanding the Renaissance Developer:</strong> I gained a clearer understanding that modern developers need more than programming knowledge. They must develop systems thinking, communication skills, technical judgment, and the ability to learn continuously.</li>
</ul>
<div class="report-quote-box" style="border-left-color: #171717; font-weight: 700; color: #171717; font-size: 15px; margin: 22px 0;">
“AI can make software development faster, but developers remain responsible for the quality, security, and reliability of their solutions.”
</div>
<p>This experience strengthened my motivation to continue learning AWS Cloud, application architecture, and AI technologies throughout my First Cloud AI Journey.</p>

<!-- Tags -->
<div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
#AWS #WernerVogels #FiresideChat #CloudAI #RenaissanceDeveloper #EngineeringAtScale #FirstCloudAIJourney
</div>
</div>
</section>

<!-- Bottom Navigation Actions -->
<div class="report-bottom-actions">
<button type="button" class="btn btn-outline" onclick="navigateTo('events'); return false;">
<span>← Back to Events</span>
</button>
<button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<span>↑ Back to top</span>
</button>
</div>
</article>`;
}

function renderMeetupEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';

  const t = {
    breadcrumbEvents: isVi ? "Sự kiện tham gia" : "Events Participated",
    breadcrumbCurrent: isVi ? "Sự kiện 3 - First Cloud AI Journey Meetup (24/10/2026)" : "Event 3 - First Cloud AI Journey Meetup (October 24, 2026)",
    btnBack: isVi ? "← Quay lại sự kiện" : "← Back to Events",
    badgeReport: isVi ? "BÁO CÁO THU HOẠCH SỰ KIỆN" : "EVENT HARVEST REPORT",
    badgeCategory: "Cloud Computing, Cloud Security & AI Agents",
    badgeOfficial: isVi ? "Chính thức • AWS FCAJ" : "Official • AWS FCAJ",
    title: "FIRST CLOUD AI JOURNEY MEETUP",
    subtitle: isVi 
      ? "Khám phá AWS Cloud, Cloud Security và Tương lai của AI Agents"
      : "Exploring AWS Cloud, Cloud Security, and the Future of AI Agents",
    eventName: "First Cloud AI Journey Meetup – 24/10/2026",
    dateTime: isVi ? "08:00 – 12:00, 24/10/2026" : "08:00 AM – 12:00 PM, October 24, 2026",
    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    speakers: "Kiệt Trần, Long Huỳnh, Thịnh Nguyễn, Xuân An, Khoa Kiều, Nghi Danh",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",
  };

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${escapeHtml(t.breadcrumbEvents)}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(t.breadcrumbCurrent)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(t.badgeReport)}</span>
          <span class="badge badge-blue">${escapeHtml(t.badgeCategory)}</span>
          <span class="badge badge-gray">${escapeHtml(t.badgeOfficial)}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(t.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(t.subtitle)}</p>

        <!-- Standardized Compact Event Metadata Strip -->
        <div class="report-meta-compact-strip">
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Tên sự kiện:' : 'Event Name:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.eventName)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Thời gian:' : 'Date & Time:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.dateTime)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Diễn giả:' : 'Speakers:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.speakers)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.role)}</strong></span>
          </div>
        </div>
      </header>

      <!-- Event 2 Check-in Photo -->
      <div id="event-3-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0;">
        <div class="event-uploaded-img-wrap" onclick="openBlogImageModal('assets/images/events/event-3.jpg', '${escapeHtml(t.eventName)}')" title="${isVi ? 'Nhấp để xem ảnh độ nét cao (HD)' : 'Click to view high-definition image'}">
          <img id="event-3-cover-img"
               src="assets/images/events/event-3.jpg"
               alt="${escapeHtml(t.eventName)}"
               class="event-uploaded-img"
               onload="const w = document.getElementById('event-3-cover-wrap'); if (w) w.style.display='block';"
               onerror="const w = document.getElementById('event-3-cover-wrap'); if (w) w.style.display='none';"
               loading="eager" />
        </div>
        <div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
          ${isVi ? 'Ảnh check-in thực tế của sinh viên tại sự kiện First Cloud AI Journey Meetup (24/10/2026) – Tầng 26, Bitexco Financial Tower' : 'Authentic attendee check-in photograph at First Cloud AI Journey Meetup (October 24, 2026) – 26th Floor, Bitexco Financial Tower'}
        </div>
      </div>

      <!-- SECTION I – EVENT OVERVIEW -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">01</span>
          <h2 class="report-section-title">${isVi ? 'I. Tổng quan sự kiện (Event Overview)' : 'I. Event Overview'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? '<strong>First Cloud AI Journey Meetup</strong> tập trung vào năm chủ đề chính: <strong>Voice AI</strong>, <strong>AWS Resource Access Manager (RAM)</strong>, <strong>AI-assisted Penetration Testing</strong>, <strong>Amazon Bedrock AgentCore</strong> và <strong>Kiro Crew</strong>.'
            : 'The <strong>First Cloud AI Journey Meetup</strong> focused on five core technical domains: <strong>Voice AI</strong>, <strong>AWS Resource Access Manager (RAM)</strong>, <strong>AI-assisted Penetration Testing</strong>, <strong>Amazon Bedrock AgentCore</strong>, and <strong>Kiro Crew</strong>.'}</p>
          
          <div class="report-quote-box" style="border-left-color: #171717;">
            ${isVi
              ? '“Sự kiện quy tụ các chuyên gia công nghệ, kỹ sư giải pháp và cộng đồng AWS tại Việt Nam, mang đến chuỗi bài trình bày kỹ thuật chuyên sâu, phiên live demo kiến trúc và thảo luận mở về ứng dụng thực tiễn của Cloud Computing và Trí tuệ nhân tạo trong doanh nghiệp.”'
              : '“The meetup gathered technology leaders, solutions engineers, and the AWS community in Vietnam, presenting technical lectures, live architecture demonstrations, and discussions on practical cloud and artificial intelligence applications in enterprise environments.”'}
          </div>

          <p>${isVi
            ? 'Nội dung kỹ thuật xuyên suốt sự kiện bao quát từ các giải pháp xử lý giọng nói thời gian thực với độ trễ thấp, cơ chế chia sẻ tài nguyên đám mây đa tài khoản, kiểm thử an ninh tự động dịch chuyển trái (Shift-Left Security), đến môi trường thực thi và quản lý ngữ cảnh cho các AI Agent cấp sản xuất.'
            : 'The technical scope spanned real-time low-latency voice AI systems, secure cross-account cloud resource sharing, Shift-Left automated penetration testing, and production runtime environments and memory management for AI Agents.'}</p>
        </div>
      </section>

      <!-- SECTION II – EVENT OBJECTIVES -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">02</span>
          <h2 class="report-section-title">${isVi ? 'II. Mục tiêu sự kiện (Event Objectives)' : 'II. Event Objectives'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Các mục tiêu kỹ thuật và nội dung chuyên môn trọng tâm được giới thiệu tại buổi meetup bao gồm:'
            : 'Core technical and architectural objectives established during the meetup:'}</p>
          <ul>
            <li>${isVi ? '<strong>Khám phá các ứng dụng thực tiễn của AWS Cloud và Trí tuệ nhân tạo:</strong> Giới thiệu các giải pháp công nghệ tiên tiến đang được áp dụng trực tiếp vào sản phẩm thực tế.' : '<strong>Explore practical applications of AWS Cloud and Artificial Intelligence:</strong> Present cutting-edge cloud and AI services deployed directly into production systems.'}</li>
            <li>${isVi ? '<strong>Nắm vững cơ chế chia sẻ tài nguyên đám mây và quản trị an ninh tập trung:</strong> Phân tích cơ chế tối ưu hóa hạ tầng đa tài khoản với AWS RAM, AWS Organizations và SCPs.' : '<strong>Understand cloud resource sharing and security management:</strong> Analyze multi-account governance structured via AWS RAM, AWS Organizations, and SCPs.'}</li>
            <li>${isVi ? '<strong>Tìm hiểu kiến trúc Voice AI và hệ thống AI Agents:</strong> Khảo sát mô hình đàm thoại hai chiều thời gian thực và kiến trúc thực thi tác tử thông minh.' : '<strong>Learn about Voice AI and AI Agent architectures:</strong> Examine real-time bidirectional conversational workflows and agentic execution engines.'}</li>
            <li>${isVi ? '<strong>Khám phá kiểm thử an ninh tự động và phát triển phần mềm bằng AI:</strong> Tiếp cận tư duy Shift-Left Security và các tác tử AI hỗ trợ chu trình kỹ thuật phần mềm liên tục.' : '<strong>Explore automated security testing and AI-powered development:</strong> Review Shift-Left Security methodologies and AI agents accelerating software engineering lifecycles.'}</li>
            <li>${isVi ? '<strong>Kết nối cộng đồng kỹ sư AWS:</strong> Tạo không gian trao đổi kỹ thuật thực chiến giữa các kiến trúc sư, kỹ sư đầu ngành và cộng đồng sinh viên.' : '<strong>Connect with the AWS engineering community:</strong> Provide an open technical exchange among architects, industry engineers, and builders.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION III – KEY TOPICS AND KNOWLEDGE ACQUIRED -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">03</span>
          <h2 class="report-section-title">${isVi ? 'III. Nội dung chuyên môn tại sự kiện (Event Content & Technical Sessions)' : 'III. Event Content & Technical Sessions'}</h2>
        </div>
        <div class="report-prose">

          <!-- 1. Voice AI Contact Center -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '1. Hear, Think, Speak – Xây dựng Contact Center Voice-AI tiếng Việt trên AWS (Hear, Think, Speak – Building a Vietnamese Voice-AI Contact Center on AWS)' : '1. Hear, Think, Speak – Building a Vietnamese Voice-AI Contact Center on AWS'}</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Kiệt Trần – Revve AI
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ tập trung vào ba yếu tố chính trong quá trình xây dựng hệ thống Voice AI: <strong>Response Accuracy</strong>, <strong>Low Latency</strong> và <strong>Natural Conversational Experience</strong>.'
            : 'The session focused on three primary criteria in engineering production Voice AI systems: <strong>Response Accuracy</strong>, <strong>Low Latency</strong>, and <strong>Natural Conversational Experience</strong>.'}</p>
          <p>${isVi
            ? 'Nội dung trình diễn trực tiếp bao gồm hệ thống AI thực hiện cuộc gọi phỏng vấn sơ tuyển ứng viên Cloud Engineer bằng tiếng Việt, với mục tiêu tối ưu độ trễ phản hồi toàn trình xuống khoảng <strong>1,8 giây</strong> nhằm duy trì nhịp đối thoại tự nhiên giữa người và máy.'
            : 'The live demonstration showcased an AI-powered voice interview screening Cloud Engineer candidates in Vietnamese, engineered to reduce end-to-end response latency to approximately <strong>1.8 seconds</strong> for smooth conversational turn-taking.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Quy trình xử lý Voice AI (Voice AI Processing Workflow)' : 'Voice AI Processing Workflow'}</h4>
          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi 
              ? 'Voice Input (Âm thanh vào) → Speech Recognition (Nhận dạng STT) → AI Processing (Xử lý LLM) → Speech Generation (Tổng hợp TTS) → Voice Response (Âm thanh ra)'
              : 'Voice Input → Speech Recognition → AI Processing → Speech Generation → Voice Response'}
          </div>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 25%;">${isVi ? 'Thành phần (Component)' : 'Component'}</th>
                  <th style="width: 75%;">${isVi ? 'Chức năng kỹ thuật (Technical Function)' : 'Technical Function'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hear</strong></td>
                  <td>${isVi ? 'Tiếp nhận và xử lý tín hiệu âm thanh giọng nói của người dùng thời gian thực.' : 'Receive and process incoming user speech streams in real time.'}</td>
                </tr>
                <tr>
                  <td><strong>Think</strong></td>
                  <td>${isVi ? 'Phân tích ngữ nghĩa yêu cầu, tra cứu tri thức và sinh phản hồi phù hợp với ngữ cảnh hội thoại.' : 'Interpret requests, query contextual knowledge, and generate appropriate responses.'}</td>
                </tr>
                <tr>
                  <td><strong>Speak</strong></td>
                  <td>${isVi ? 'Chuyển đổi câu trả lời dạng văn bản thành giọng nói tự nhiên để phát hồi tiếp cho người dùng.' : 'Synthesize generated text responses into natural spoken language for playback.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 2. AWS Resource Access Manager (AWS RAM) -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">2. AWS Resource Access Manager (AWS RAM)</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Long Huỳnh – Styl Solution
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ thứ hai tập trung vào giải pháp chia sẻ tài nguyên an toàn giữa nhiều tài khoản AWS khác nhau trong cùng một tổ chức (Cross-Account Resource Sharing).'
            : 'The second session addressed secure cross-account resource sharing across multiple AWS accounts within an enterprise organization.'}</p>
          <p>${isVi
            ? 'AWS Resource Access Manager (AWS RAM) cho phép chia sẻ các tài nguyên được hỗ trợ (Subnet VPC, Transit Gateway, Route 53 Resolver Rules...) mà không yêu cầu mỗi tài khoản AWS con phải khởi tạo hạ tầng trùng lặp, giúp giảm thiểu chi phí dư thừa, đơn giản hóa cấu hình mạng và nâng cao hiệu quả quản trị tập trung.'
            : 'AWS Resource Access Manager allows supported resources (VPC Subnets, Transit Gateways, Route 53 Resolver Rules) to be shared without requiring duplicated infrastructure across sub-accounts, reducing overhead and streamlining centralized management.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Các thành phần chính (Key Components)' : 'Key Components'}</h4>
          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Thành phần (Component)' : 'Component'}</th>
                  <th style="width: 70%;">${isVi ? 'Chức năng chính (Primary Function)' : 'Primary Function'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AWS RAM</strong></td>
                  <td>${isVi ? 'Cho phép chia sẻ tài nguyên đám mây an toàn giữa các tài khoản AWS trong tổ chức.' : 'Enables secure cross-account resource sharing across organizational accounts.'}</td>
                </tr>
                <tr>
                  <td><strong>AWS Organizations</strong></td>
                  <td>${isVi ? 'Hỗ trợ quản trị, cấu trúc phân cấp và kiểm soát tập trung môi trường đa tài khoản.' : 'Supports centralized hierarchy, multi-account governance, and consolidated billing.'}</td>
                </tr>
                <tr>
                  <td><strong>IAM Policies</strong></td>
                  <td>${isVi ? 'Quy định chi tiết quyền hạn truy cập của người dùng và tài nguyên điện toán.' : 'Defines fine-grained access permissions for users and compute resources.'}</td>
                </tr>
                <tr>
                  <td><strong>Service Control Policies (SCPs)</strong></td>
                  <td>${isVi ? 'Thiết lập ranh giới an toàn (guardrails) và giới hạn quyền tối đa trên quy mô toàn tổ chức.' : 'Establishes organization-level permission guardrails and maximum permission boundaries.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 3. AWS Pentest with AWS Continuum / Security Agent -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '3. AWS Pentest với AWS Continuum / Security Agent (AWS Pentest with AWS Continuum / Security Agent)' : '3. AWS Pentest with AWS Continuum / Security Agent'}</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Thịnh Nguyễn – Styl Solution
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ thứ ba giới thiệu phương pháp đánh giá an ninh hạ tầng tự động và kiểm thử thâm nhập (penetration testing) với sự hỗ trợ của các AI Security Agent, nhấn mạnh việc phát hiện sớm lỗ hổng ngay từ giai đoạn đầu của vòng đời phát triển phần mềm (SDLC).'
            : 'The third session introduced automated infrastructure security assessment and penetration testing assisted by AI Security Agents, emphasizing early vulnerability identification during the software development lifecycle (SDLC).'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Bảo mật dịch chuyển trái (Shift-Left Security)' : 'Shift-Left Security'}</h4>
          <p>${isVi
            ? 'Phương pháp tiếp cận Shift-Left Security được phân tích qua bốn bước kiểm soát an ninh:'
            : 'The Shift-Left Security methodology was outlined through four progressive validation checkpoints:'}</p>
          <ul>
            <li>${isVi ? 'Rà soát và đánh giá an ninh trực tiếp trên mã nguồn hạ tầng Terraform (IaC Review).' : 'Reviewing Terraform infrastructure-as-code (IaC) definitions.'}</li>
            <li>${isVi ? 'Tích hợp các bước kiểm tra an ninh tự động vào Pull Request trên GitHub và GitLab.' : 'Integrating automated security checks into GitHub and GitLab pull requests.'}</li>
            <li>${isVi ? 'Phát hiện sớm các cấu hình sai lệch và lỗ hổng tiềm ẩn trước khi tiến hành triển khai.' : 'Pinpointing misconfigurations and security exposures prior to deployment.'}</li>
            <li>${isVi ? 'Sử dụng AI Security Agent để thực hiện kiểm thử thâm nhập tự động trong các môi trường SIT và UAT được cấp phép.' : 'Deploying AI Security Agents to execute automated penetration tests in authorized SIT and UAT environments.'}</li>
          </ul>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? 'Quy trình đánh giá an ninh (Security Assessment Workflow)' : 'Security Assessment Workflow'}</h4>
          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi
              ? 'Mã nguồn (Source Code) → Đánh giá an ninh (Security Review) → Môi trường thử nghiệm (Testing Env) → Xác thực bảo mật (Security Validation) → Triển khai Production'
              : 'Source Code → Security Review → Testing Environment → Security Validation → Production Deployment'}
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 4. Amazon Bedrock AgentCore -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">4. Amazon Bedrock AgentCore</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speaker:'}</strong> Xuân An – Leader AWS Student Builder Group HCMUTE
          </p>
          <p>${isVi
            ? 'Nội dung phiên chia sẻ tập trung vào hai thành phần cốt lõi của Amazon Bedrock AgentCore: <strong>AgentCore Runtime</strong> và <strong>AgentCore Memory</strong>.'
            : 'The session focused on two primary architectural components of Amazon Bedrock AgentCore: <strong>AgentCore Runtime</strong> and <strong>AgentCore Memory</strong>.'}</p>
          <p>${isVi
            ? 'Các nội dung kỹ thuật liên quan bao gồm môi trường thực thi, quản lý ngữ cảnh, khả năng mở rộng và vận hành AI Agent trong môi trường Production.'
            : 'Associated technical topics addressed execution environments, context management, scalability, and operating AI Agents within production workloads.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">4.1. AgentCore Runtime</h4>
          <p>${isVi
            ? 'AgentCore Runtime cung cấp môi trường thực thi được quản trị (managed runtime) chuyên biệt cho việc triển khai và vận hành các AI Agent. Các yếu tố kiến trúc quan trọng bao gồm:'
            : 'AgentCore Runtime provides a managed execution environment for deploying and operating AI Agents. Key architectural factors include:'}</p>
          <ul>
            <li>${isVi ? 'Khả năng cô lập phiên thực thi và phân tách khối lượng công việc của từng Agent (Agent execution & workload isolation).' : 'Agent execution and workload isolation.'}</li>
            <li>${isVi ? 'Khả năng mở rộng hạ tầng tính toán tự động và linh hoạt (Infrastructure scalability).' : 'Elastic infrastructure scalability matching demand.'}</li>
            <li>${isVi ? 'Tối ưu hóa hiệu suất sử dụng tài nguyên điện toán (Resource utilization).' : 'Optimized compute resource utilization.'}</li>
            <li>${isVi ? 'Đáp ứng các yêu cầu khắt khe khi đưa tác tử AI vào vận hành sản xuất thực tế (Production deployment requirements).' : 'Enterprise production deployment requirements.'}</li>
          </ul>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">4.2. AgentCore Memory</h4>
          <p>${isVi
            ? 'AgentCore Memory đảm bảo việc lưu trữ, quản trị ngữ cảnh hội thoại và thông tin liên quan xuyên suốt chuỗi tương tác nhiều lượt của AI Agent.'
            : 'AgentCore Memory manages conversational context and persistent interaction states across multi-turn AI Agent workflows.'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Loại bộ nhớ (Memory Type)' : 'Memory Type'}</th>
                  <th style="width: 70%;">${isVi ? 'Mô tả chức năng (Description)' : 'Description'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Short-term Memory</strong></td>
                  <td>${isVi ? 'Duy trì ngữ cảnh trao đổi gần nhất và lịch sử tương tác ngắn hạn giữa người dùng và Agent.' : 'Maintains recent conversational context and immediate interaction history.'}</td>
                </tr>
                <tr>
                  <td><strong>Long-term Memory</strong></td>
                  <td>${isVi ? 'Lưu trữ bền vững các thông tin quan trọng để tái sử dụng và tham chiếu cho các phiên tương tác trong tương lai.' : 'Retains persistent knowledge and preferences for cross-session retrieval.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- 5. Kiro Crew -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '5. Kiro Crew – Tự động hóa và Phát triển phần mềm bằng AI (Kiro Crew – AI-Powered Development and Automation)' : '5. Kiro Crew – AI-Powered Development and Automation'}</h3>
          <p style="font-size:14px; color:#555555; margin-bottom:12px;">
            <strong>${isVi ? 'Diễn giả:' : 'Speakers:'}</strong> Khoa Kiều – Tech Lead, ACB &amp; Nghi Danh – AWS Community Builder
          </p>
          <p>${isVi
            ? 'Phiên chia sẻ cuối cùng khám phá cách các nhóm AI Agent (AI Agent Crew) phối hợp hỗ trợ chu trình phát triển phần mềm liên tục, rà soát mã nguồn tự động và kiểm tra trạng thái vận hành hệ thống.'
            : 'The final session explored how autonomous AI Agent groups support continuous software development, automated code inspection, and system status monitoring.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? '5.1. Khởi tạo Artifact trực quan (Artifact Generation)' : '5.1. Artifact Generation'}</h4>
          <p>${isVi
            ? 'Phiên demo thực tế minh họa cách AI Agent tự động thu thập thông tin tuyển dụng việc làm, xử lý dữ liệu và trực tiếp sinh các báo cáo trực quan, biểu đồ thống kê tương tác ngay trong giao diện làm việc.'
            : 'The live demonstration showed AI Agents collecting real-world job postings, parsing data streams, and generating interactive visual reports and analytical charts directly within the workspace.'}</p>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? '5.2. Quản trị cửa sổ ngữ cảnh (Context Window Management)' : '5.2. Context Window Management'}</h4>
          <p>${isVi
            ? 'Các diễn giả phân tích các kỹ thuật tối ưu hóa khối lượng thông tin xử lý trong các luồng tương tác dài hạn qua hai khái niệm then chốt:'
            : 'The speakers analyzed context window optimization techniques for long-running workflows via two core mechanisms:'}</p>
          <ul>
            <li>${isVi ? '<strong>Auto Compact:</strong> Tự động nén và cô đọng ngữ cảnh cuộc trò chuyện khi dung lượng chạm ngưỡng giới hạn của Context Window.' : '<strong>Auto Compact:</strong> Automatically condenses conversation context as token usage approaches context limits.'}</li>
            <li>${isVi ? '<strong>Context Breakdown:</strong> Phân tích chi tiết mức độ đóng góp của từng thành phần vào lượng token tiêu thụ, giúp định vị chính xác nguyên nhân phình to ngữ cảnh.' : '<strong>Context Breakdown:</strong> Analyzes token distribution across components to isolate context expansion factors.'}</li>
          </ul>

          <h4 style="font-size:14.5px; font-weight:700; color:#171717; margin:18px 0 8px 0;">${isVi ? '5.3. Quản lý bộ nhớ và Ranh giới an ninh (Memory Management &amp; Security Guardrails)' : '5.3. Memory Management &amp; Security Guardrails'}</h4>
          <p>${isVi
            ? 'Phiên chia sẻ nhấn mạnh tầm quan trọng của việc duy trì bộ nhớ chọn lọc và thiết lập các ranh giới bảo mật (Security Guardrails) nhằm ngăn chặn AI Agent:'
            : 'The presentation emphasized selective memory retention and establishing strict security guardrails preventing AI Agents from:'}</p>
          <ul>
            <li>${isVi ? 'Tự ý xóa bỏ tài nguyên hoặc phá hủy hạ tầng đám mây khi chưa có ủy quyền rõ ràng.' : 'Deleting cloud infrastructure without explicit authorization.'}</li>
            <li>${isVi ? 'Làm lộ lọt các khóa bí mật, API credentials và thông tin định danh nhạy cảm.' : 'Exposing sensitive secrets, access keys, or API credentials.'}</li>
            <li>${isVi ? 'Thực hiện các thao tác sửa đổi cấu hình hệ thống ngoài phạm vi cho phép.' : 'Performing unauthorized system or configuration modifications.'}</li>
            <li>${isVi ? 'Thực thi các hoạt động có tính chất phá hoại hoặc nguy hiểm mà thiếu cơ chế kiểm soát của con người.' : 'Executing destructive or high-risk operations without human oversight.'}</li>
          </ul>

        </div>
      </section>

      <!-- SECTION IV – KEY TAKEAWAYS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">04</span>
          <h2 class="report-section-title">${isVi ? 'IV. Bài học cốt lõi (Key Takeaways)' : 'IV. Key Takeaways'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Năm phiên chia sẻ kỹ thuật tại sự kiện đã tổng kết khối lượng kiến thức thực tiễn trải rộng trên các lĩnh vực then chốt của Cloud Computing, AI và An ninh đám mây:'
            : 'The five technical sessions consolidated practical knowledge across foundational areas of Cloud Computing, AI, and Cloud Security:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Lĩnh vực kỹ thuật (Technical Area)' : 'Technical Area'}</th>
                  <th style="width: 70%;">${isVi ? 'Kiến thức cốt lõi (Key Architectural Concepts)' : 'Key Architectural Concepts'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Voice AI</strong></td>
                  <td>${isVi ? 'Xử lý giọng nói thời gian thực và kỹ thuật tối ưu hóa độ trễ phản hồi (< 2s).' : 'Real-time voice processing and latency optimization (< 2s).'}</td>
                </tr>
                <tr>
                  <td><strong>AWS RAM</strong></td>
                  <td>${isVi ? 'Cơ chế chia sẻ tài nguyên an toàn giữa các tài khoản AWS trong tổ chức.' : 'Secure cross-account resource sharing across organizational accounts.'}</td>
                </tr>
                <tr>
                  <td><strong>AWS Organizations</strong></td>
                  <td>${isVi ? 'Quản trị và phân cấp tập trung kiến trúc đa tài khoản đám mây.' : 'Centralized multi-account governance and organizational guardrails.'}</td>
                </tr>
                <tr>
                  <td><strong>Cloud Security</strong></td>
                  <td>${isVi ? 'Bảo mật dịch chuyển trái (Shift-Left Security) và kiểm thử thâm nhập tự động.' : 'Shift-Left Security and automated penetration testing.'}</td>
                </tr>
                <tr>
                  <td><strong>AgentCore Runtime</strong></td>
                  <td>${isVi ? 'Môi trường thực thi độc lập, ổn định và co giãn cho AI Agents trên Production.' : 'Production execution environments and workload isolation for AI Agents.'}</td>
                </tr>
                <tr>
                  <td><strong>AgentCore Memory</strong></td>
                  <td>${isVi ? 'Cơ chế quản trị bộ nhớ ngắn hạn và dài hạn cho tương tác tác tử nhiều lượt.' : 'Short-term and long-term memory governance for multi-turn agent interactions.'}</td>
                </tr>
                <tr>
                  <td><strong>Kiro Crew</strong></td>
                  <td>${isVi ? 'Tự động hóa phát triển phần mềm và rà soát hệ thống liên tục bằng AI Agents.' : 'AI-powered continuous development, code reviews, and system inspection.'}</td>
                </tr>
                <tr>
                  <td><strong>Context Management</strong></td>
                  <td>${isVi ? 'Kiểm soát mức tiêu thụ token và tối ưu hóa cửa sổ ngữ cảnh (Auto Compact, Context Breakdown).' : 'Token consumption governance and context optimization (Auto Compact, Context Breakdown).'}</td>
                </tr>
                <tr>
                  <td><strong>Security Guardrails</strong></td>
                  <td>${isVi ? 'Thiết lập rào chắn an ninh ngăn chặn các hành vi phá hoại hoặc sửa đổi trái phép của AI.' : 'Enforcing security guardrails preventing unauthorized or destructive AI actions.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="font-weight:700; color:#171717; margin-top:20px;">
            ${isVi ? 'Các nguyên tắc kiến trúc cốt lõi:' : 'Core architectural principles established:'}
          </p>
          <ul>
            <li>${isVi ? 'Kiến trúc Cloud và AI bắt buộc phải dung hòa giữa hiệu năng cao, an ninh nghiêm ngặt và hiệu quả vận hành kinh tế.' : 'Cloud and AI architectures must balance performance, security, and operational efficiency.'}</li>
            <li>${isVi ? 'Cơ chế chia sẻ tài nguyên tập trung giúp loại bỏ hạ tầng dư thừa và tinh gọn hóa công tác quản trị.' : 'Centralized resource sharing simplifies multi-account infrastructure management.'}</li>
            <li>${isVi ? 'Kiểm định an ninh cần được dịch chuyển về phía trước (Shift-Left), tích hợp ngay vào chu trình phát triển phần mềm.' : 'Security assessments should be integrated directly into the software development lifecycle.'}</li>
            <li>${isVi ? 'AI Agent trong sản xuất đòi hỏi nền tảng thực thi ổn định và cơ chế quản trị bộ nhớ đáng tin cậy.' : 'Production AI Agents depend on reliable runtime environments and structured memory management.'}</li>
            <li>${isVi ? 'Tự động hóa bằng AI phải luôn vận hành trong ranh giới an ninh kiểm soát được và có sự giám sát của con người.' : 'AI automation must operate strictly within verified security guardrails.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION V – LESSONS LEARNED & PERSONAL CONTRIBUTIONS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">05</span>
          <h2 class="report-section-title">${isVi ? 'V. Bài học rút ra & Đóng góp cá nhân (Lessons Learned & Personal Contributions)' : 'V. Lessons Learned & Personal Contributions'}</h2>
        </div>
        <div class="report-prose">
          
          <!-- 1. Lessons Learned -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:16px 0 8px 0;">
            ${isVi ? '1. Bài học rút ra (Lessons Learned)' : '1. Lessons Learned'}
          </h3>
          <ul>
            <li>${isVi ? 'Thấu hiểu tầm quan trọng của việc tối ưu hóa độ trễ phản hồi trong các hệ thống Voice AI để mang lại trải nghiệm đàm thoại tự nhiên.' : 'Understand the importance of latency optimization in Voice AI systems.'}</li>
            <li>${isVi ? 'Nhận thức rõ lợi ích của cơ chế chia sẻ tài nguyên tập trung và quản trị đám mây đa tài khoản (AWS RAM, AWS Organizations, SCPs).' : 'Recognize the benefits of centralized resource sharing and cloud governance.'}</li>
            <li>${isVi ? 'Hiểu sâu sắc tầm quan trọng của việc tích hợp bảo mật sớm vào từng giai đoạn của vòng đời phát triển phần mềm (Shift-Left Security).' : 'Understand the importance of integrating security into the software development lifecycle.'}</li>
            <li>${isVi ? 'Nhận biết vai trò sống còn của môi trường thực thi (Runtime) và cơ chế quản trị bộ nhớ (Memory) đối với các AI Agent trong môi trường sản xuất.' : 'Recognize the role of Runtime and Memory in production AI Agents.'}</li>
            <li>${isVi ? 'Thấu hiểu sự cần thiết của các ranh giới bảo vệ an ninh (Security Guardrails) trong tự động hóa bằng AI để ngăn ngừa các tác vụ phá hoại hoặc trái phép.' : 'Understand the importance of security guardrails in AI automation.'}</li>
          </ul>

          <!-- 2. Practical Applications -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '2. Khả năng vận dụng (Practical Applications)' : '2. Practical Applications'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Tối ưu hóa pipeline xử lý giọng nói:</strong> Nghiên cứu và ứng dụng mô hình cascade (STT → LLM → TTS) kết hợp bộ đệm thời gian thực và WebRTC vào các bài toán xây dựng trợ lý ảo tương tác hai chiều.' : '<strong>Voice processing pipeline optimization:</strong> Research and apply cascade architectures (STT → LLM → TTS) with real-time buffering and WebRTC protocols in interactive conversational applications.'}</li>
            <li>${isVi ? '<strong>Áp dụng chia sẻ tài nguyên an toàn:</strong> Vận dụng AWS RAM và Service Control Policies (SCPs) để thiết kế mô hình phân quyền và chia sẻ VPC Subnets trong các bài thực hành kiến trúc đa tài khoản.' : '<strong>Implement secure resource sharing:</strong> Apply AWS RAM and SCP guardrails to design secure multi-account VPC sharing topologies in cloud architecture coursework.'}</li>
            <li>${isVi ? '<strong>Tích hợp rà soát an ninh vào CI/CD:</strong> Áp dụng công cụ kiểm tra bảo mật mã nguồn IaC Terraform vào quy trình GitHub Actions cá nhân để phát hiện lỗ hổng cấu hình trước khi triển khai.' : '<strong>Embed security linting in CI/CD:</strong> Incorporate automated Terraform IaC security checks into personal GitHub Actions workflows to identify misconfigurations before deployment.'}</li>
            <li>${isVi ? '<strong>Quản trị ngữ cảnh và guardrails cho AI Agent:</strong> Ứng dụng các kỹ thuật Auto Compact, phân tích token và Bedrock Guardrails khi phát triển các tác tử AI phục vụ hỗ trợ kỹ thuật và học tập.' : '<strong>Govern context and guardrails for AI Agents:</strong> Implement Auto Compact, token breakdown metrics, and security guardrails when building AI agents on Amazon Bedrock.'}</li>
          </ul>

          <!-- 3. Personal Contributions -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '3. Đóng góp cá nhân (Personal Contributions)' : '3. Personal Contributions'}
          </h3>
          <ul>
            <li>${isVi ? 'Tham gia sự kiện meetup với tư cách người tham dự (Attendee) đầy đủ và nghiêm túc từ 08:00 đến 12:00 ngày 24/10/2026 tại Bitexco Financial Tower.' : 'Participated in the meetup as an Attendee from 08:00 AM to 12:00 PM on October 24, 2026, at Bitexco Financial Tower.'}</li>
            <li>${isVi ? 'Tích cực theo dõi các bài thuyết trình chuyên sâu và các phiên demo kỹ thuật trực tiếp.' : 'Followed technical presentations and live demonstrations across all technical sessions.'}</li>
            <li>${isVi ? 'Hệ thống hóa và đúc kết toàn bộ kiến thức chuyên môn tiếp thu được vào báo cáo sự kiện cá nhân.' : 'Consolidated technical knowledge into a personal event report.'}</li>
            <li>${isVi ? 'Xác định các cơ hội ứng dụng kiến thức về an ninh đám mây và tự động hóa AI vào các hoạt động học tập và dự án tương lai.' : 'Identified opportunities to apply cloud security and AI automation concepts in future learning activities.'}</li>
            <li>${isVi ? 'Xây dựng bài báo cáo sự kiện chi tiết và lưu trữ, chia sẻ kiến thức thông qua website cá nhân và kho lưu trữ mã nguồn mở trên GitHub.' : 'Built a detailed event report and published, shared technical knowledge transparently via the personal website and GitHub repository.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION VI – CONCLUSION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">06</span>
          <h2 class="report-section-title">${isVi ? 'VI. Kết luận (Conclusion)' : 'VI. Conclusion'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'First Cloud AI Journey Meetup ngày 24/10/2026 mang lại giá trị kiến thức thực tiễn phong phú về sự giao thoa giữa Cloud Computing, Cloud Security và Trí tuệ nhân tạo.'
            : 'The First Cloud AI Journey Meetup on October 24, 2026, delivered substantial practical value regarding the convergence of Cloud Computing, Cloud Security, and Artificial Intelligence.'}</p>

          <p>${isVi
            ? 'Qua sự kiện, tư duy kỹ thuật của bản thân được mở rộng rõ rệt: nhận thức rõ việc triển khai AI trong thực tế không chỉ dừng lại ở các tương tác hỏi đáp đơn giản, mà đòi hỏi hạ tầng thực thi tin cậy, khả năng quản trị ngữ cảnh và ranh giới an toàn nghiêm ngặt. Đồng thời, tư duy DevSecOps và phương pháp kiểm thử thâm nhập tự động Shift-Left củng cố thêm ý thức về an ninh đám mây ngay từ những dòng mã đầu tiên.'
            : 'The meetup substantially broadened my technical mindset: recognizing that real-world AI deployment extends beyond simple conversational prompts to require reliable runtimes, structured context governance, and rigorous security boundaries. Furthermore, Shift-Left security practices and automated penetration testing reinforced the discipline of embedding cloud security directly into code from the start.'}</p>

          <p>${isVi
            ? 'Đây là những định hướng kiến thức quan trọng để tiếp tục đào sâu nghiên cứu về AI Agents và an ninh hạ tầng AWS trong các giai đoạn học tập tiếp theo.'
            : 'These insights establish vital guidance for advancing my specialized studies in AI Agents and AWS cloud infrastructure security in future learning milestones.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717; font-weight:700; color:#171717; font-size:15px; margin:22px 0;">
            ${isVi
              ? '“Hành trình chinh phục điện toán đám mây không chỉ dừng lại ở việc làm chủ công nghệ, mà quan trọng hơn là thấu hiểu cách ứng dụng công nghệ một cách an toàn, bền vững và hiệu quả vào thực tiễn doanh nghiệp.”'
              : '“The journey to the cloud is not only about mastering technology, but also about understanding how to apply it securely and effectively in real-world environments.”'}
          </div>

          <!-- Tags -->
          <div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
            #AWS #AWSStudyGroup #FirstCloudAIJourney #VoiceAI #AWSRAM #CloudSecurity #DevSecOps #AmazonBedrock #AIAgents #KiroCrew
          </div>
        </div>
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${isVi ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}


function renderEnterpriseAIEventDetail(container, lang = 'vi') {
  const isVi = lang === 'vi';

  const t = {
    breadcrumbEvents: isVi ? "Sự kiện tham gia" : "Events Participated",
    breadcrumbCurrent: isVi ? "Sự kiện 4 - Enterprise AI on AWS Cloud (14/11/2026)" : "Event 4 - Enterprise AI on AWS Cloud (November 14, 2026)",
    btnBack: isVi ? "← Quay lại sự kiện" : "← Back to Events",
    badgeReport: isVi ? "BÁO CÁO THU HOẠCH SỰ KIỆN" : "EVENT HARVEST REPORT",
    badgeCategory: "Artificial Intelligence & Cloud Computing",
    badgeOfficial: isVi ? "Chính thức • AWS FCAJ" : "Official • AWS FCAJ",
    title: "FROM AI PROTOTYPE TO PRODUCTION: DEPLOYING AND OPERATING ENTERPRISE AI ON AWS CLOUD",
    subtitle: isVi 
      ? "Chiến lược chuyển đổi từ mô hình AI thử nghiệm sang hệ thống sản xuất cấp doanh nghiệp vận hành trên AWS Cloud"
      : "From AI Prototype to Production: Deploying and Operating Enterprise AI on AWS Cloud",
    eventName: "Enterprise AI on AWS Cloud – 14/11/2026",
    dateTime: isVi ? "09:00 – 12:00, 14/11/2026" : "09:00 AM – 12:00 PM, November 14, 2026",
    location: isVi ? "Tầng 26, Bitexco Financial Tower, TP. Hồ Chí Minh, Việt Nam" : "26th Floor, Bitexco Financial Tower, Ho Chi Minh City, Vietnam",
    speakers: "Khang Duong, Phuong Huyen, Bao Nguyen, Khuong Huynh",
    role: isVi ? "Người tham dự (Attendee)" : "Attendee",
  };

  container.innerHTML = `
    <article class="event-report-article">
      <!-- Breadcrumb & Back Navigation Bar -->
      <nav class="report-nav-bar" aria-label="Breadcrumb">
        <div class="report-breadcrumbs">
          <a href="#/events" onclick="event.preventDefault(); navigateTo('events');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>${escapeHtml(t.breadcrumbEvents)}</span>
          </a>
          <span class="sep">/</span>
          <span class="current">${escapeHtml(t.breadcrumbCurrent)}</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
      </nav>

      <!-- Hero Header -->
      <header class="report-hero">
        <div class="report-hero-badge-row">
          <span class="badge badge-purple">${escapeHtml(t.badgeReport)}</span>
          <span class="badge badge-blue">${escapeHtml(t.badgeCategory)}</span>
          <span class="badge badge-gray">${escapeHtml(t.badgeOfficial)}</span>
        </div>
        <h1 class="report-main-title">${escapeHtml(t.title)}</h1>
        <p class="report-main-subtitle">${escapeHtml(t.subtitle)}</p>

        <!-- Standardized Compact Event Metadata Strip -->
        <div class="report-meta-compact-strip">
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Tên sự kiện:' : 'Event Name:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.eventName)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Thời gian:' : 'Date & Time:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.dateTime)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Địa điểm:' : 'Location:'}</span>
            <span class="meta-strip-val">${escapeHtml(t.location)}</span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Diễn giả:' : 'Speakers:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.speakers)}</strong></span>
          </div>
          <div class="meta-strip-item">
            <span class="meta-strip-label">${isVi ? 'Vai trò:' : 'Role:'}</span>
            <span class="meta-strip-val"><strong>${escapeHtml(t.role)}</strong></span>
          </div>
        </div>
      </header>

      <!-- Event 3 Check-in Photo -->
      <div id="event-4-cover-wrap" class="event-uploaded-photo-box" style="margin: 20px 0 28px 0;">
        <div class="event-uploaded-img-wrap" onclick="openBlogImageModal('assets/images/events/event-4.jpg', '${escapeHtml(t.eventName)}')" title="${isVi ? 'Nhấp để xem ảnh độ nét cao (HD)' : 'Click to view high-definition image'}">
          <img id="event-4-cover-img"
               src="assets/images/events/event-4.jpg"
               alt="${escapeHtml(t.eventName)}"
               class="event-uploaded-img"
               onload="const w = document.getElementById('event-4-cover-wrap'); if (w) w.style.display='block';"
               onerror="const w = document.getElementById('event-4-cover-wrap'); if (w) w.style.display='none';"
               loading="eager" />
        </div>
        <div style="font-size: 13px; color: #555555; margin-top: 10px; font-style: italic;">
          ${isVi ? 'Ảnh check-in thực tế của sinh viên tại sự kiện Enterprise AI on AWS Cloud (14/11/2026) – Tầng 26, Bitexco Financial Tower' : 'Authentic attendee check-in photograph at Enterprise AI on AWS Cloud (November 14, 2026) – 26th Floor, Bitexco Financial Tower'}
        </div>
      </div>

      <!-- SECTION I – EVENT OVERVIEW -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">01</span>
          <h2 class="report-section-title">${isVi ? 'I. Tổng quan sự kiện (Event Overview)' : 'I. Event Overview'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo <strong>Enterprise AI on AWS Cloud</strong> tập trung vào các thách thức kỹ thuật cốt lõi khi chuyển đổi một giải pháp Trí tuệ nhân tạo (AI) từ phiên bản thử nghiệm (prototype) sang hệ thống sản xuất cấp doanh nghiệp (production-ready enterprise system).'
            : 'The <strong>Enterprise AI on AWS Cloud</strong> workshop addressed the paramount engineering challenges of transitioning artificial intelligence from an experimental prototype into a production-grade enterprise system.'}</p>

          <p>${isVi
            ? 'Sự kiện quy tụ các diễn giả giàu kinh nghiệm từ AWS và cộng đồng công nghệ: <strong>Khang Duong</strong>, <strong>Phuong Huyen</strong>, <strong>Bao Nguyen</strong> và <strong>Khuong Huynh</strong>, cùng chia sẻ về chiến lược kiến trúc và bài học thực tiễn khi đưa AI vào vận hành thực tế.'
            : 'The event featured experienced speakers from AWS and the tech community: <strong>Khang Duong</strong>, <strong>Phuong Huyen</strong>, <strong>Bao Nguyen</strong>, and <strong>Khuong Huynh</strong>, who shared architectural strategies and practical lessons for bringing AI into production.'}</p>
          
          <div class="report-quote-box" style="border-left-color: #171717;">
            ${isVi
              ? '“Nội dung sự kiện đi sâu phân tích 4 trụ cột vận hành sản xuất: An ninh (Security), Độ tin cậy (Reliability), Khả năng mở rộng (Scalability) và Tối ưu chi phí (Cost Optimization). Đồng thời, hội thảo làm sáng tỏ vai trò của nền tảng AWS Cloud trong việc cung cấp hạ tầng tính toán co giãn linh hoạt và điều phối các quy trình nghiệp vụ phức tạp thông qua các mô hình kiến trúc Multi-Agent.”'
              : '“The session analyzed the four core operational pillars of production AI: Security, Reliability, Scalability, and Cost Optimization. In addition, the presentations highlighted the strategic role of AWS Cloud infrastructure in delivering elastic compute scalability and coordinating complex enterprise workflows through Multi-Agent architecture patterns.”'}
          </div>

          <p>${isVi
            ? 'Các phiên chia sẻ làm rõ sự khác biệt giữa mô hình AI hoạt động trong môi trường nghiên cứu có kiểm soát với một hệ thống sản xuất liên tục phục vụ hàng triệu người dùng, nơi các yếu tố về đường ống dữ liệu (Data Pipelines), an ninh bảo mật và giám sát vận hành (Monitoring) giữ vai trò quyết định tính bền vững của giải pháp.'
            : 'The presentations clearly differentiated AI models running in controlled academic environments from production systems serving millions of real-world users, where continuous data pipelines, robust security frameworks, and proactive operational monitoring dictate project success.'}</p>
        </div>
      </section>

      <!-- SECTION II – EVENT OBJECTIVES -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">02</span>
          <h2 class="report-section-title">${isVi ? 'II. Mục tiêu sự kiện (Event Objectives)' : 'II. Event Objectives'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Các mục tiêu học thuật và nội dung kiến trúc trọng tâm được thiết lập xuyên suốt phiên hội thảo bao gồm:'
            : 'Core technical and architectural objectives established during the session:'}</p>
          <ul>
            <li>${isVi ? '<strong>Khác biệt giữa Academic AI và Enterprise AI:</strong> Phân tích sự chuyển dịch từ mục tiêu tối ưu độ chính xác mô hình sang giá trị kinh doanh và khả năng vận hành sản xuất liên tục.' : '<strong>Understand Academic AI vs Enterprise AI:</strong> Differentiate experimental model accuracy from production business value and continuous operations.'}</li>
            <li>${isVi ? '<strong>Thành phần nền tảng của hệ thống AI:</strong> Giới thiệu chuỗi mắt xích liên kết giữa Data, Model, Feature và User.' : '<strong>Fundamental Components of an AI System:</strong> Analyze the value chain linking Data, Model, Feature, and User.'}</li>
            <li>${isVi ? '<strong>Phân định Training, Inference, LLMs và Tokens:</strong> Nắm vững cơ chế vận hành, sự khác biệt tài nguyên và tác động kinh tế của tokens.' : '<strong>Training, Inference, LLMs, and Tokens:</strong> Understand operational differences, computing requirements, and token economics.'}</li>
            <li>${isVi ? '<strong>Yêu cầu vận hành của Production AI:</strong> Phân tích 4 trụ cột an ninh, độ tin cậy, khả năng mở rộng và tối ưu chi phí.' : '<strong>Operational Requirements of Production AI:</strong> Explore the operational principles across security, reliability, scalability, and cost optimization.'}</li>
            <li>${isVi ? '<strong>Co giãn linh hoạt trên AWS:</strong> Khảo sát cách các dịch vụ AWS Lambda, Auto Scaling và Elastic Load Balancing hỗ trợ co giãn theo tải thực tế.' : '<strong>Elastic Scalability on AWS:</strong> Learn how AWS services support dynamic and automated workload scaling.'}</li>
            <li>${isVi ? '<strong>Mô hình kiến trúc Multi-Agent phổ biến:</strong> Tiếp cận 4 mô hình điều phối: Routing/Supervisor, Sequential, Parallel và Evaluator–Optimizer.' : '<strong>Multi-Agent Architecture Patterns:</strong> Understand common multi-agent coordination patterns and their practical application.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION III – KEY TOPICS AND KNOWLEDGE ACQUIRED -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">03</span>
          <h2 class="report-section-title">${isVi ? 'III. Nội dung chuyên môn tại sự kiện (Event Content & Technical Sessions)' : 'III. Event Content & Technical Sessions'}</h2>
        </div>
        <div class="report-prose">
          
          <!-- III.1 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '1. Từ Academic AI đến Enterprise AI (From Academic AI to Enterprise AI)' : '1. From Academic AI to Enterprise AI'}</h3>
          <p>${isVi
            ? 'Để phân định rõ nét sự khác biệt giữa AI thử nghiệm và AI quy mô doanh nghiệp, diễn giả đã sử dụng phép ẩn dụ trực quan giữa <strong>Bếp ăn gia đình (Home Kitchen)</strong> và <strong>Chuỗi nhà hàng tiêu chuẩn (Restaurant Chain)</strong>:'
            : 'The speaker used the vivid analogy of a home kitchen and a restaurant chain to explain the fundamental differences between experimental AI and enterprise AI:'}</p>

          <div class="minimal-table-wrap" style="overflow-x:auto;">
            <table class="minimal-table" style="min-width:640px;">
              <thead>
                <tr>
                  <th style="width: 20%;">${isVi ? 'Tiêu chí' : 'Criteria'}</th>
                  <th style="width: 40%;">Academic AI (${isVi ? 'AI Hàn lâm / Thử nghiệm' : 'Experimental'})</th>
                  <th style="width: 40%;">Enterprise AI (${isVi ? 'AI Doanh nghiệp' : 'Production'})</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>${isVi ? 'Phép so sánh (Analogy)' : 'Analogy'}</strong></td>
                  <td>${isVi ? 'Bếp ăn gia đình (Home Kitchen)' : 'Home Kitchen'}</td>
                  <td>${isVi ? 'Chuỗi nhà hàng quy chuẩn (Restaurant Chain)' : 'Restaurant Chain'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Mục tiêu tối thượng' : 'Primary Goal'}</strong></td>
                  <td>${isVi ? 'Độ chính xác cao nhất trên tập dữ liệu cố định (Benchmark / Accuracy)' : 'Highest accuracy on fixed benchmark datasets (Benchmark / Accuracy)'}</td>
                  <td>${isVi ? 'Giá trị kinh doanh liên tục, tính sẵn sàng cao và ROI bền vững (Business Value & High ROI)' : 'Continuous Business Value, High Availability & High ROI'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Môi trường vận hành' : 'Operating Environment'}</strong></td>
                  <td>${isVi ? 'Môi trường thử nghiệm tĩnh, có kiểm soát, tài nguyên biệt lập' : 'Static, controlled experimental environment with isolated resources'}</td>
                  <td>${isVi ? 'Môi trường động, lưu lượng truy cập biến động, phục vụ khách hàng theo thời gian thực (Real-time Customer Facing)' : 'Dynamic, Unpredictable Traffic, Real-time Customer Facing'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Quy chuẩn an ninh' : 'Security Standard'}</strong></td>
                  <td>${isVi ? 'Tối thiểu, ưu tiên tốc độ ra kết quả nghiên cứu' : 'Minimal, prioritizing research speed and experimentation'}</td>
                  <td>${isVi ? 'Tuân thủ nghiêm ngặt (GDPR, HIPAA, SOC 2), IAM, mã hóa dữ liệu khi lưu trữ và truyền tải (Encryption at Rest/Transit)' : 'Strict Compliance (GDPR, HIPAA, SOC 2), IAM, Encryption at Rest/Transit'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Chi phí vận hành' : 'Operational Cost'}</strong></td>
                  <td>${isVi ? 'Chi trả một lần theo đợt huấn luyện nghiên cứu' : 'One-time expenditure per research training run'}</td>
                  <td>${isVi ? 'Chi phí liên tục tính theo từng token tiêu thụ, co giãn linh hoạt và quản trị ngân sách chặt chẽ (Cost per Token & Elastic Scaling)' : 'Continuous Cost per Token, Elastic Scaling, Budget Governance'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.2 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '2. 4 Thành phần nền tảng của hệ thống AI (4 Fundamental Components of an AI System)' : '2. 4 Fundamental Components of an AI System'}</h3>
          <p>${isVi
            ? 'Một hệ thống AI toàn diện trong doanh nghiệp được cấu thành từ chuỗi mắt xích liên kết chặt chẽ gồm 4 thành phần:'
            : 'An enterprise AI system relies on an interconnected 4-part value chain:'}</p>

          <div class="minimal-formula-box" style="text-align: center; font-weight: 600; overflow-x: auto;">
            ${isVi 
              ? 'Dữ liệu (Data) → Mô hình (Model) → Tính năng nghiệp vụ (Feature) → Người dùng (User)'
              : 'Data → Model → Feature → User'}
          </div>

          <ul>
            <li>${isVi ? '<strong>Dữ liệu (Data):</strong> Nguồn nguyên liệu thô đầu vào quyết định trực tiếp chất lượng đầu ra của mọi thuật toán học máy, đòi hỏi thu thập, làm sạch và gán nhãn bài bản.' : '<strong>Data:</strong> The foundational fuel determining algorithm quality. Requires structured ingestion, curation, and governance.'}</li>
            <li>${isVi ? '<strong>Mô hình (Model):</strong> Thuật toán máy học đã được huấn luyện hoặc tinh chỉnh (Fine-tuned/Pre-trained LLM) để chuyển hóa dữ liệu đầu vào thành tri thức và dự đoán.' : '<strong>Model:</strong> Machine learning algorithms or foundation LLMs transforming data inputs into predictions and reasoning.'}</li>
            <li>${isVi ? '<strong>Tính năng (Feature):</strong> Lớp giao diện nghiệp vụ đóng gói mô hình thành chức năng hữu ích (như gợi ý sản phẩm, tóm tắt tài liệu, phát hiện gian lận).' : '<strong>Feature:</strong> The business application layer encapsulating models into actionable services (e.g. recommendation, document summarization).'}</li>
            <li>${isVi ? '<strong>Người dùng (User):</strong> Đối tượng trực tiếp thụ hưởng giá trị, đồng thời liên tục cung cấp dữ liệu phản hồi (Feedback Loop) để tinh chỉnh hệ thống ngày càng hoàn thiện.' : '<strong>User:</strong> The end beneficiary whose continuous interactions provide essential feedback loops to iteratively improve the entire system.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.3 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '3. Phân định Training, Inference, LLMs và Tokens' : '3. Training, Inference, LLMs and Tokens'}</h3>
          <p>${isVi
            ? 'Hội thảo làm rõ sự khác biệt bản chất giữa hai chu trình tính toán cơ bản trong vòng đời AI:'
            : 'The workshop clearly delineated the operational differences between the two core computing phases in the AI lifecycle:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 20%;">${isVi ? 'Tiêu chí' : 'Criteria'}</th>
                  <th style="width: 40%;">${isVi ? 'Training (Huấn luyện)' : 'Training'}</th>
                  <th style="width: 40%;">${isVi ? 'Inference (Suy luận)' : 'Inference'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>${isVi ? 'Bản chất' : 'Nature'}</strong></td>
                  <td>${isVi ? 'Dạy mô hình học hỏi từ khối lượng dữ liệu khổng lồ trong quá khứ' : 'Teach the model to learn from large volumes of historical data'}</td>
                  <td>${isVi ? 'Áp dụng mô hình đã học để đưa ra câu trả lời cho yêu cầu mới' : 'Apply the learned model to answer new, real-time requests'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Tần suất &amp; Thời gian' : 'Frequency &amp; Duration'}</strong></td>
                  <td>${isVi ? 'Không liên tục (định kỳ theo mẻ, vài ngày đến vài tháng)' : 'Intermittent (periodic batches, from days to months)'}</td>
                  <td>${isVi ? 'Liên tục 24/7/365 theo thời gian thực' : 'Continuous, 24/7/365 in real time'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Tài nguyên tính toán' : 'Compute Resources'}</strong></td>
                  <td>${isVi ? 'Cụm GPU/Trainium công suất lớn, xử lý tập trung' : 'Large GPU/Trainium clusters with centralized processing'}</td>
                  <td>${isVi ? 'Cụm suy luận nhẹ hơn (EC2 Inf2/G5, Serverless Bedrock)' : 'Lighter inference fleets (EC2 Inf2/G5, serverless Amazon Bedrock)'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Độ trễ yêu cầu' : 'Latency Requirement'}</strong></td>
                  <td>${isVi ? 'Chấp nhận kéo dài nhiều giờ hoặc nhiều tuần' : 'Can run for hours or even weeks'}</td>
                  <td>${isVi ? 'Rất khắt khe (từ mili-giây đến vài giây)' : 'Very strict (milliseconds to a few seconds)'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>${isVi
            ? '<strong>Kinh tế học về Tokens (Token Economics):</strong> Đối với các mô hình ngôn ngữ lớn (LLMs), token là đơn vị cơ bản cấu thành văn bản. Số lượng tokens truyền vào (Input Tokens) và sinh ra (Output Tokens) tỷ lệ thuận trực tiếp với độ trễ phản hồi và chi phí vận hành hóa đơn đám mây. Do đó, việc tối ưu hóa prompt, nén ngữ cảnh và quản lý bộ nhớ đệm (Prompt Caching) là yêu cầu kỹ thuật sống còn.'
            : '<strong>Token Economics:</strong> In foundation LLMs, tokens represent text chunks. Input and output tokens directly dictate API costs and inference latency. Prompt optimization, context window compression, and prompt caching are essential architectural capabilities.'}</p>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.4 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '4. 4 Trụ cột Vận hành của Production AI (4 Production AI Pillars)' : '4. 4 Production AI Pillars'}</h3>
          <p>${isVi
            ? 'Một hệ thống AI muốn tồn tại và phục vụ khách hàng trên môi trường sản xuất phải thỏa mãn 4 trụ cột kiến trúc cốt lõi:'
            : 'Operating enterprise AI in production requires four foundational architectural pillars:'}</p>

          <ul>
            <li>${isVi ? '<strong>1. An toàn &amp; Bảo mật (Security):</strong> Bảo vệ quyền riêng tư dữ liệu khách hàng, mã hóa hai chiều (KMS), kiểm soát truy cập nghiêm ngặt (IAM, VPC Endpoints) và thiết lập rào chắn an toàn (Bedrock Guardrails) ngăn chặn rò rỉ dữ liệu hoặc đầu ra độc hại.' : '<strong>1. Security:</strong> Protect customer privacy, end-to-end encryption (KMS), fine-grained access control (IAM), and guardrails preventing prompt injection or data leakage.'}</li>
            <li>${isVi ? '<strong>2. Độ tin cậy &amp; Sẵn sàng cao (Reliability):</strong> Đảm bảo hệ thống duy trì thời gian hoạt động (Uptime) theo cam kết SLA, triển khai kiến trúc đa vùng khả dụng (Multi-AZ), cơ chế thử lại tự động (Exponential Backoff) và dự phòng chuyển đổi vùng linh hoạt.' : '<strong>2. Reliability:</strong> Maintain high availability across Multi-AZ deployments, resilient fallback mechanisms, and circuit breakers.'}</li>
            <li>${isVi ? '<strong>3. Khả năng mở rộng (Scalability):</strong> Hệ thống tự động co giãn thích ứng mượt mà khi lưu lượng người dùng tăng đột biến mà không bị nghẽn cổ chai hay suy giảm tốc độ xử lý.' : '<strong>3. Scalability:</strong> Seamlessly handle unpredictable traffic surges via horizontal elastic compute without performance degradation.'}</li>
            <li>${isVi ? '<strong>4. Tối ưu hóa chi phí (Cost Optimization):</strong> Sử dụng đúng loại tài nguyên (Right-sizing), tận dụng tính năng Serverless (trả tiền theo mức sử dụng thực tế), định tuyến mô hình linh hoạt (Model Routing: dùng mô hình nhỏ cho câu hỏi dễ và mô hình lớn cho bài toán phức tạp).' : '<strong>4. Cost Optimization:</strong> Right-size inference instances, leverage serverless architectures, and use dynamic model routing (lightweight models for routine tasks, frontier models for complex reasoning).'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.5 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '5. Co giãn linh hoạt trên AWS (Elastic Scalability on AWS)' : '5. Elastic Scalability on AWS'}</h3>
          <p>${isVi
            ? 'Diễn giả đã phân tích cơ chế co giãn đàn hồi của AWS giúp giải quyết bài toán tải biến động mạnh trong các ứng dụng AI:'
            : 'The speaker analyzed AWS elastic infrastructure components that address fluctuating AI workloads:'}</p>

          <ul>
            <li>${isVi ? '<strong>AWS Lambda:</strong> Kiến trúc tính toán không máy chủ (Serverless), tự động nhân bản tức thì theo từng yêu cầu đến và tự động hạ về 0 khi không có lưu lượng, triệt tiêu chi phí tài nguyên nhàn rỗi.' : '<strong>AWS Lambda:</strong> Serverless compute automatically scaling to zero during idle periods, eliminating overprovisioning costs.'}</li>
            <li>${isVi ? '<strong>Auto Scaling Groups (ASG):</strong> Tự động bổ sung hoặc giảm bớt số lượng máy chủ ảo Amazon EC2 (GPU/Inference instances) dựa trên các chỉ số giám sát thời gian thực như CPU Utilization, GPU Memory hoặc hàng đợi tin nhắn.' : '<strong>Auto Scaling Groups:</strong> Automatically adjust EC2 compute instances based on real-time CloudWatch metrics.'}</li>
            <li>${isVi ? '<strong>Elastic Load Balancing (ALB/NLB):</strong> Phân phối đồng đều lưu lượng truy cập khổng lồ đến cụm máy chủ suy luận, đồng thời tự động kiểm tra tình trạng sức khỏe (Health Check) để cô lập các node gặp lỗi.' : '<strong>Elastic Load Balancing:</strong> Distributes user traffic evenly across inference targets while performing continuous health checks.'}</li>
          </ul>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.6 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '6. 4 Mô hình Kiến trúc Multi-Agent phổ biến (4 Common Multi-Agent Architecture Patterns)' : '6. 4 Common Multi-Agent Architecture Patterns'}</h3>
          <p>${isVi
            ? 'Khi một tác vụ kinh doanh trở nên quá phức tạp đối với một mô hình LLM đơn lẻ, kiến trúc Multi-Agent cho phép chia nhỏ bài toán và điều phối nhiều tác tử chuyên biệt cùng phối hợp xử lý:'
            : 'When complex enterprise workflows exceed single-prompt capabilities, Multi-Agent patterns coordinate specialized agents:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 25%;">${isVi ? 'Mô hình Multi-Agent' : 'Pattern'}</th>
                  <th style="width: 40%;">${isVi ? 'Cơ chế điều phối' : 'Coordination Mechanism'}</th>
                  <th style="width: 35%;">${isVi ? 'Trường hợp ứng dụng tối ưu' : 'Best Use Case'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Routing / Supervisor</strong></td>
                  <td>${isVi ? 'Một Agent giám sát trung tâm phân tích câu hỏi người dùng và định tuyến đến đúng Agent chuyên môn tương ứng.' : 'Central supervisor inspects queries and routes to domain-specific specialist agents.'}</td>
                  <td>${isVi ? 'Cổng chăm sóc khách hàng đa dịch vụ, tổng đài hỏi đáp đa lĩnh vực.' : 'Enterprise multi-service customer portals.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Sequential (Tuần tự)' : 'Sequential'}</strong></td>
                  <td>${isVi ? 'Các Agent hoạt động như một dây chuyền lắp ráp: kết quả đầu ra của Agent này là đầu vào của Agent tiếp theo.' : 'Agents execute in a linear pipeline: Agent A output becomes Agent B input.'}</td>
                  <td>${isVi ? 'Quy trình thẩm định hồ sơ vay vốn, phân tích báo cáo tài chính qua nhiều bước.' : 'Multi-step financial loan appraisal and document processing.'}</td>
                </tr>
                <tr>
                  <td><strong>${isVi ? 'Parallel (Song song)' : 'Parallel'}</strong></td>
                  <td>${isVi ? 'Nhiều Agent cùng thực thi đồng thời các tác vụ độc lập trên cùng một yêu cầu, sau đó một Agent tổng hợp gom kết quả.' : 'Multiple agents execute independent sub-tasks concurrently, aggregated by a final synthesizer.'}</td>
                  <td>${isVi ? 'Phân tích dữ liệu từ nhiều nguồn độc lập, rà soát mã nguồn từ nhiều góc độ.' : 'Concurrent research across independent data repositories.'}</td>
                </tr>
                <tr>
                  <td><strong>Evaluator – Optimizer</strong></td>
                  <td>${isVi ? 'Một Agent sinh kết quả và một Agent đánh giá đóng vai trò kiểm định, lặp lại quy trình cho đến khi đạt chuẩn chất lượng.' : 'One agent generates output while an evaluator critiques it in an iterative loop until passing.'}</td>
                  <td>${isVi ? 'Viết mã nguồn phần mềm tự động, soạn thảo văn bản pháp lý đòi hỏi độ chính xác tuyệt đối.' : 'Automated software code generation and legal document drafting.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr style="border:0; border-top:1px solid #E5E5E5; margin:32px 0;" />

          <!-- III.7 -->
          <h3 style="font-size:16px; font-weight:800; color:#0F172A; margin:24px 0 10px 0;">${isVi ? '7. Vai trò của AWS Cloud trong Triển khai Enterprise AI (The Role of AWS Cloud in Enterprise AI)' : '7. The Role of AWS Cloud in Enterprise AI'}</h3>
          <p>${isVi
            ? 'AWS Cloud cung cấp hệ sinh thái dịch vụ hoàn chỉnh, khép kín từ hạ tầng phần cứng chuyên biệt (Trainium/Inferentia), nền tảng dịch vụ mô hình nền tảng toàn diện (Amazon Bedrock, Amazon SageMaker), đến các công cụ tích hợp dữ liệu và quản trị an ninh cấp cao (AWS IAM, KMS, CloudTrail).'
            : 'AWS Cloud provides a comprehensive ecosystem bridging hardware accelerators, foundation models (Amazon Bedrock, SageMaker), and centralized governance tools (IAM, KMS, CloudTrail).'}</p>
          <p>${isVi
            ? 'Nền tảng này giúp doanh nghiệp rút ngắn đáng kể thời gian đưa sản phẩm AI ra thị trường, kiểm soát chi phí vận hành minh bạch và bảo vệ an toàn dữ liệu khách hàng theo các tiêu chuẩn khắt khe nhất.'
            : 'This foundation accelerates enterprise time-to-market, ensures transparent cost governance, and protects sensitive customer data under strict compliance frameworks.'}</p>
        </div>
      </section>

      <!-- SECTION IV – KEY TAKEAWAYS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">04</span>
          <h2 class="report-section-title">${isVi ? 'IV. Bài học cốt lõi (Key Takeaways)' : 'IV. Key Takeaways'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Nội dung hội thảo đã đúc kết các bài học kiến trúc mang tính sống còn đối với việc đưa AI vào môi trường sản xuất:'
            : 'The session crystallized vital architectural lessons for bringing AI systems into real-world production:'}</p>

          <div class="minimal-table-wrap">
            <table class="minimal-table">
              <thead>
                <tr>
                  <th style="width: 30%;">${isVi ? 'Lĩnh vực kiến trúc' : 'Architectural Area'}</th>
                  <th style="width: 70%;">${isVi ? 'Kiến thức cốt lõi (Key Architectural Concepts)' : 'Key Architectural Concepts'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Academic vs Enterprise AI</strong></td>
                  <td>${isVi ? 'Chuyển đổi trọng tâm từ độ chính xác thuần túy sang giá trị kinh doanh, tính sẵn sàng cao và khả năng duy trì vận hành liên tục.' : 'Shifting focus from model accuracy to continuous business value and high availability.'}</td>
                </tr>
                <tr>
                  <td><strong>AI System Components</strong></td>
                  <td>${isVi ? 'Nắm vững chuỗi giá trị Data → Model → Feature → User và vòng lặp phản hồi cải tiến hệ thống.' : 'Mastering the Data → Model → Feature → User value chain and continuous feedback loops.'}</td>
                </tr>
                <tr>
                  <td><strong>Training vs Inference</strong></td>
                  <td>${isVi ? 'Phân định rõ yêu cầu tài nguyên không liên tục của Training và tính liên tục, yêu cầu độ trễ thấp của Inference.' : 'Differentiating batch periodic training compute from real-time low-latency inference demands.'}</td>
                </tr>
                <tr>
                  <td><strong>Token Economics</strong></td>
                  <td>${isVi ? 'Hiểu rõ tác động của Input/Output Tokens đến độ trễ và chi phí hóa đơn, áp dụng kỹ thuật tối ưu prompt và caching.' : 'Managing prompt token consumption to control operating expenses and inference latency.'}</td>
                </tr>
                <tr>
                  <td><strong>4 Production Pillars</strong></td>
                  <td>${isVi ? 'Xây dựng hệ thống vững chắc dựa trên 4 trụ cột: An ninh (Security), Độ tin cậy (Reliability), Mở rộng (Scalability) và Tối ưu chi phí (Cost).' : 'Ensuring systems meet Security, Reliability, Scalability, and Cost Optimization criteria.'}</td>
                </tr>
                <tr>
                  <td><strong>Elastic Scalability</strong></td>
                  <td>${isVi ? 'Tận dụng AWS Lambda, Auto Scaling và ALB để hệ thống co giãn tự động thích ứng với lưu lượng biến động.' : 'Employing AWS Lambda, ASGs, and ALB to adapt dynamically to unpredictable traffic.'}</td>
                </tr>
                <tr>
                  <td><strong>Multi-Agent Patterns</strong></td>
                  <td>${isVi ? 'Ứng dụng 4 mô hình: Supervisor, Sequential, Parallel và Evaluator-Optimizer để giải quyết quy trình nghiệp vụ phức tạp.' : 'Applying Supervisor, Sequential, Parallel, and Evaluator-Optimizer coordination patterns.'}</td>
                </tr>
                <tr>
                  <td><strong>AWS Cloud Role</strong></td>
                  <td>${isVi ? 'Đám mây AWS là bệ phóng hạ tầng, dữ liệu và công cụ quản trị giúp hiện thực hóa các giải pháp Enterprise AI quy mô lớn.' : 'AWS Cloud serves as the foundational compute, database, and governance engine for enterprise AI.'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="font-weight:700; color:#171717; margin-top:20px;">
            ${isVi ? 'Những nguyên lý vận hành cốt lõi:' : 'Core operational principles:'}
          </p>
          <ul>
            <li>${isVi ? 'Độ chính xác của mô hình đơn thuần là chưa đủ cho các hệ thống AI cấp sản xuất.' : 'Model accuracy alone is insufficient for production AI systems.'}</li>
            <li>${isVi ? 'Enterprise AI đòi hỏi một kiến trúc đám mây toàn diện đảm bảo tính tin cậy, an toàn, có khả năng mở rộng cao và tối ưu chi phí.' : 'Enterprise AI requires reliable, secure, scalable, and cost-effective architecture.'}</li>
            <li>${isVi ? 'Hiệu năng suy luận và mức tiêu thụ token ảnh hưởng trực tiếp đến chi phí vận hành và trải nghiệm khách hàng.' : 'Inference performance and token consumption influence operational costs.'}</li>
            <li>${isVi ? 'Kiến trúc Multi-Agent là chìa khóa phân rã và tự động hóa các luồng quy trình nghiệp vụ phức tạp.' : 'Multi-Agent architecture supports complex AI workflows.'}</li>
            <li>${isVi ? 'Hạ tầng điện toán đám mây đóng vai trò nền tảng không thể thiếu trong việc triển khai và duy trì các hệ thống AI doanh nghiệp.' : 'Cloud infrastructure plays an important role in enterprise AI operations.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION V – LESSONS LEARNED & PERSONAL CONTRIBUTIONS -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">05</span>
          <h2 class="report-section-title">${isVi ? 'V. Bài học rút ra & Đóng góp cá nhân (Lessons Learned & Personal Contributions)' : 'V. Lessons Learned & Personal Contributions'}</h2>
        </div>
        <div class="report-prose">
          
          <!-- 1. Lessons Learned -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:16px 0 8px 0;">
            ${isVi ? '1. Bài học rút ra (Lessons Learned)' : '1. Lessons Learned'}
          </h3>
          <ul>
            <li>${isVi ? 'Độ chính xác của mô hình đơn thuần là chưa đủ cho các hệ thống AI cấp sản xuất.' : 'Model accuracy alone is insufficient for production AI systems.'}</li>
            <li>${isVi ? 'Enterprise AI đòi hỏi một kiến trúc đám mây toàn diện đảm bảo tính tin cậy, an toàn, có khả năng mở rộng cao và tối ưu chi phí.' : 'Enterprise AI requires reliable, secure, scalable, and cost-effective architecture.'}</li>
            <li>${isVi ? 'Hiệu năng suy luận và mức tiêu thụ token ảnh hưởng trực tiếp đến chi phí vận hành.' : 'Inference performance and token consumption influence operational costs.'}</li>
            <li>${isVi ? 'Kiến trúc Multi-Agent hỗ trợ giải quyết hiệu quả các luồng quy trình nghiệp vụ phức tạp.' : 'Multi-Agent architecture supports complex AI workflows.'}</li>
            <li>${isVi ? 'Hạ tầng điện toán đám mây đóng vai trò quan trọng trong việc vận hành các hệ thống AI doanh nghiệp.' : 'Cloud infrastructure plays an important role in enterprise AI operations.'}</li>
          </ul>

          <!-- 2. Practical Applications -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '2. Khả năng vận dụng (Practical Applications)' : '2. Practical Applications'}
          </h3>
          <ul>
            <li>${isVi ? '<strong>Đánh giá hệ thống theo 4 trụ cột vận hành:</strong> Vận dụng khung 4 trụ cột (Security, Reliability, Scalability, Cost) vào việc phân tích và thiết kế các ứng dụng AI trong quá trình thực tập và đồ án.' : '<strong>Apply 4-pillar production framework:</strong> Apply the 4 operational pillars (Security, Reliability, Scalability, Cost) to evaluate and architect production AI applications in internship projects.'}</li>
            <li>${isVi ? '<strong>Kiểm soát chi phí suy luận và token:</strong> Áp dụng các kỹ thuật nén ngữ cảnh, tối ưu prompt và prompt caching nhằm kiểm soát hóa đơn tài nguyên và cải thiện độ trễ khi gọi mô hình trên Amazon Bedrock.' : '<strong>Govern token and inference economics:</strong> Implement context window compression, prompt optimization, and caching strategies to control resource costs and reduce latency on Amazon Bedrock.'}</li>
            <li>${isVi ? '<strong>Thiết kế điều phối Multi-Agent:</strong> Ứng dụng các mô hình phối hợp Supervisor và Evaluator-Optimizer để phân tách các bài toán tự động hóa dữ liệu và kiểm thử phần mềm đa bước.' : '<strong>Design Multi-Agent workflows:</strong> Leverage Supervisor and Evaluator-Optimizer coordination patterns to automate multi-stage data processing and software testing tasks.'}</li>
            <li>${isVi ? '<strong>Tận dụng co giãn linh hoạt trên AWS:</strong> Khai thác các dịch vụ Serverless (AWS Lambda) và Auto Scaling Groups để xây dựng hạ tầng suy luận tự động thích ứng với biến động lưu lượng.' : '<strong>Leverage elastic AWS scaling:</strong> Utilize serverless services (AWS Lambda) and Auto Scaling Groups to host inference pipelines that dynamically scale with traffic.'}</li>
          </ul>

          <!-- 3. Personal Contributions -->
          <h3 style="font-size:15px; font-weight:700; color:#0F172A; margin:24px 0 8px 0;">
            ${isVi ? '3. Đóng góp cá nhân (Personal Contributions)' : '3. Personal Contributions'}
          </h3>
          <ul>
            <li>${isVi ? 'Tham gia sự kiện với vai trò người tham dự (Attendee) nghiêm túc từ 09:00 đến 12:00 ngày 14/11/2026 tại tầng 26, Bitexco Financial Tower.' : 'Participated in the event as an attendee.'}</li>
            <li>${isVi ? 'Nghiên cứu và tiếp thu các khái niệm kỹ thuật chuyên môn được giới thiệu trong các bài chia sẻ.' : 'Studied the technical concepts introduced during the presentations.'}</li>
            <li>${isVi ? 'Hệ thống hóa và tổng hợp kiến thức về Enterprise AI và AWS Cloud vào bài báo cáo kỹ thuật cá nhân.' : 'Consolidated knowledge of enterprise AI and AWS Cloud into a personal technical report.'}</li>
            <li>${isVi ? 'Xác định các cơ hội ứng dụng tiềm năng của kiến trúc Multi-Agent và hạ tầng đám mây vào các dự án trong tương lai.' : 'Identified potential applications of Multi-Agent architectures and cloud infrastructure in future projects.'}</li>
            <li>${isVi ? 'Lưu trữ và chia sẻ kiến thức thu hoạch được thông qua website cá nhân và kho lưu trữ mã nguồn mở trên GitHub.' : 'Stored and shared the acquired technical knowledge via the personal website and open GitHub repository.'}</li>
          </ul>
        </div>
      </section>

      <!-- SECTION VI – CONCLUSION -->
      <section class="report-section-block">
        <div class="report-section-header">
          <span class="report-section-num">06</span>
          <h2 class="report-section-title">${isVi ? 'VI. Kết luận (Conclusion)' : 'VI. Conclusion'}</h2>
        </div>
        <div class="report-prose">
          <p>${isVi
            ? 'Hội thảo Enterprise AI on AWS Cloud ngày 14/11/2026 mang lại bước ngoặt quan trọng trong nhận thức về Trí tuệ nhân tạo cấp doanh nghiệp.'
            : 'The Enterprise AI on AWS Cloud workshop on November 14, 2026, marked a significant milestone in my understanding of production-grade artificial intelligence.'}</p>

          <p>${isVi
            ? 'Sự kiện đã dịch chuyển hoàn toàn tư duy của bản thân từ việc chỉ quan tâm đến độ chính xác thuần túy của mô hình (Model Accuracy) sang tư duy kỹ sư giải pháp đám mây toàn diện — nơi kiến trúc hạ tầng, tính bảo mật dữ liệu, độ ổn định và chi phí vận hành mới là nền tảng quyết định sự thành bại của dự án. Các mô hình kiến trúc Multi-Agent mở ra hướng tiếp cận thực tiễn trong việc tự động hóa các bài toán nghiệp vụ phức tạp.'
            : 'The event fundamentally evolved my engineering perspective: moving beyond isolated model benchmark accuracy to a comprehensive cloud solutions architecture mindset — where infrastructure reliability, data privacy, scalability, and cost optimization dictate real-world success. The Multi-Agent architecture patterns provided a practical and robust paradigm for decomposing complex enterprise workflows.'}</p>

          <p>${isVi
            ? 'Những kiến thức thu hoạch được từ sự kiện sẽ là kim chỉ nam quan trọng cho các hoạt động nghiên cứu, thực hành và định hướng phát triển sự nghiệp chuyên sâu về Cloud Architecture và Enterprise AI trên nền tảng AWS.'
            : 'These insights establish vital guidance for advancing my specialized studies in Cloud Architecture and Enterprise AI on AWS in upcoming learning milestones.'}</p>

          <div class="report-quote-box" style="border-left-color: #171717; font-weight:700; color:#171717; font-size:15px; margin:22px 0;">
            ${isVi
              ? '“Sự thành công của Enterprise AI không chỉ phụ thuộc vào sự thông minh của mô hình, mà phụ thuộc vào kiến trúc đám mây nâng đỡ phía sau nó.”'
              : '“The success of enterprise AI depends not only on the intelligence of the model, but also on the architecture that supports it.”'}
          </div>

          <!-- Tags -->
          <div style="margin:24px 0 10px 0; font-size:13px; color:#555555; line-height:1.8; word-spacing:4px; border-top:1px solid #E5E5E5; padding-top:16px;">
            #AWS #AWSStudyGroup #EnterpriseAI #ArtificialIntelligence #CloudArchitecture #MultiAgent #LLM #Scalability #FirstCloudAIJourney
          </div>
        </div>
      </section>

      <!-- Bottom Navigation Actions -->
      <div class="report-bottom-actions">
        <button type="button" class="btn btn-outline" onclick="navigateTo('events')">
          <span>${escapeHtml(t.btnBack)}</span>
        </button>
        <button type="button" class="btn btn-primary" onclick="window.scrollTo({top:0, behavior:'smooth'})">
          <span>↑ ${isVi ? 'Lên đầu trang' : 'Back to top'}</span>
        </button>
      </div>
    </article>
  `;
}

function setupEvents() {}

// ==========================================
// 11. 5. WORKSHOP STEPS
// ==========================================
// Workshop Full Implementation
let currentWorkshopStepId = 'ws-5-1';

function switchWorkshopTab(stepId) {
  currentWorkshopStepId = stepId;
  const tabs = document.querySelectorAll('.ws-tab-btn');
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-step') === stepId);
  });

  const panes = document.querySelectorAll('.ws-module-pane');
  panes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${stepId}`);
  });

  const container = document.getElementById('workshop-content-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function copyCodeSnippet(btn) {
  const wrap = btn.closest('.code-snippet-wrap');
  if (!wrap) return;
  const code = wrap.querySelector('code');
  if (!code) return;

  const text = (code.innerText || code.textContent || '').trim();
  const isEn = btn.textContent.trim().toLowerCase() === 'copy';
  const copiedMsg = isEn ? 'Copied!' : 'Đã sao chép!';
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.textContent;
    btn.textContent = copiedMsg;
    btn.style.borderColor = '#10B981';
    btn.style.color = '#10B981';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Copy failed: ', err);
  });
}

function renderEvidenceBox(path, title, caption, isVi) {
  const clickTooltip = isVi ? 'Nhấp để xem ảnh phóng to' : 'Click to enlarge image';
  const tagLabel = isVi ? 'Ảnh minh chứng' : 'Evidence Screenshot';
  const placeholderNote = isVi 
    ? 'Hình ảnh minh chứng sẽ được bổ sung.' 
    : 'Evidence screenshot will be updated.';

  return `
    <div class="ws-evidence-box">
      <div class="ws-evidence-header">
        <span class="ws-evidence-tag">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span>${tagLabel}</span>
        </span>
        <span class="ws-evidence-path">${path}</span>
      </div>
      <div class="ws-evidence-preview" onclick="openBlogImageModal('${path}', '${title}')" title="${clickTooltip}">
        <img src="${path}" alt="${title}" class="ws-evidence-img" 
             onload="this.style.display='inline-block'; const p = this.nextElementSibling; if (p) p.style.display='none';" 
             onerror="this.style.display='none'; const p = this.nextElementSibling; if (p) p.style.display='flex';" 
             loading="lazy" />
        <div class="ws-evidence-placeholder">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <div class="ws-placeholder-title">${title}</div>
          <div class="ws-placeholder-desc">${placeholderNote}</div>
        </div>
      </div>
      <div class="ws-evidence-caption">
        <strong>${title}:</strong> ${caption}
      </div>
    </div>
  `;
}

function renderPrevNextBar(prevId, prevTitle, nextId, nextTitle) {
  return `
    <div class="ws-prev-next-bar">
      ${prevId 
        ? `<button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('${prevId}')">← ${prevTitle}</button>` 
        : `<span></span>`}
      ${nextId 
        ? `<button type="button" class="ws-nav-btn" onclick="switchWorkshopTab('${nextId}')">${nextTitle} →</button>` 
        : `<span></span>`}
    </div>
  `;
}


function getWorkshopViHtml() {
  return `
    <div class="tech-report">
      <!-- HEADER -->
      <header>
        <div class="report-eyebrow">Technical Workshop Guide</div>
        <h1 class="report-title">Triển khai Nền tảng Dinh dưỡng Cá nhân hóa trên AWS</h1>
        <p class="report-subtitle">Hands-on Deployment Guide: Spring Boot 4, React 19, ECS Fargate, RDS PostgreSQL, Bedrock AI & Terraform</p>
        <p class="report-intro">
          Tài liệu hướng dẫn kỹ thuật thực hành từng bước (Step-by-Step Lab Guide) giúp kỹ sư và sinh viên triển khai hoàn chỉnh 
          hệ thống thương mại điện tử dinh dưỡng thông minh trên hạ tầng đám mây AWS. Toàn bộ hạ tầng được tự động hóa bằng Terraform, 
          ứng dụng chạy trên container không máy chủ ECS Fargate, cơ sở dữ liệu quan hệ RDS PostgreSQL và tích hợp trợ lý AI Amazon Bedrock Nova 2 Lite.
        </p>
      </header>

      <!-- NAVIGATION TABS -->
      <nav class="ws-nav-tabs">
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" data-step="ws-5-1" onclick="switchWorkshopTab('ws-5-1')">5.1 Giới thiệu</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" data-step="ws-5-2" onclick="switchWorkshopTab('ws-5-2')">5.2 Điều kiện chuẩn bị</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" data-step="ws-5-3" onclick="switchWorkshopTab('ws-5-3')">5.3 Xây dựng hạ tầng</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" data-step="ws-5-4" onclick="switchWorkshopTab('ws-5-4')">5.4 Triển khai ứng dụng</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" data-step="ws-5-5" onclick="switchWorkshopTab('ws-5-5')">5.5 Tích hợp Bedrock</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-6' ? 'active' : ''}" data-step="ws-5-6" onclick="switchWorkshopTab('ws-5-6')">5.6 Giám sát & Chi phí</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-7' ? 'active' : ''}" data-step="ws-5-7" onclick="switchWorkshopTab('ws-5-7')">5.7 Dọn dẹp tài nguyên</button>
      </nav>

            <!-- MODULE 5.1 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" id="pane-ws-5-1">
        <section class="report-section">
          <h2 class="report-h2">5.1. Giới thiệu Workshop</h2>
          
          <h3 class="report-h3" style="margin-top:0;">Xây dựng Nền tảng Thương mại Điện tử Dinh dưỡng Cá nhân hóa trên AWS</h3>
          <p class="report-p">
            Workshop hướng dẫn triển khai nền tảng thương mại điện tử dinh dưỡng trên AWS, sử dụng React, Spring Boot và PostgreSQL, kết hợp Amazon Bedrock để hỗ trợ tra cứu thông tin thực phẩm bằng ngôn ngữ tự nhiên.
          </p>
          <p class="report-p">
            Người học sẽ thực hành xây dựng hạ tầng, triển khai ứng dụng, tích hợp AI, giám sát hệ thống và quản lý chi phí trên AWS.
          </p>

          <h3 class="report-h3">Mục tiêu Workshop</h3>
          <ul class="report-list">
            <li>Hiểu kiến trúc ứng dụng web trên AWS.</li>
            <li>Triển khai frontend, backend và database.</li>
            <li>Tích hợp Amazon Bedrock để hỗ trợ tra cứu dinh dưỡng.</li>
            <li>Thiết lập giám sát, bảo mật và tối ưu chi phí.</li>
          </ul>

          <h3 class="report-h3">Kiến trúc tổng quan</h3>
          <div class="report-figure" style="margin: 18px 0;">
            <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/proposal/aws-architecture.png', 'Kiến trúc tổng quan hệ thống Nutrition E-Commerce trên AWS')" title="Nhấp để phóng to">
              <img src="assets/images/proposal/aws-architecture.png" alt="Kiến trúc tổng quan hệ thống Nutrition E-Commerce trên AWS" class="report-figure-img" loading="lazy" />
            </div>
            <div class="report-figure-caption"><em>Kiến trúc tổng quan hệ thống Nutrition E-Commerce trên AWS.</em></div>
          </div>
          <p class="report-p">
            Ứng dụng React được phân phối qua CloudFront và S3. Các yêu cầu API được chuyển đến Spring Boot trên ECS Fargate thông qua ALB. PostgreSQL được lưu trữ trên Amazon RDS, Cognito cung cấp xác thực người dùng và Amazon Bedrock hỗ trợ tra cứu dinh dưỡng. Hạ tầng ứng dụng đặt tại Singapore, riêng Bedrock và Guardrails sử dụng Tokyo.
          </p>

          <h3 class="report-h3">Lộ trình thực hành</h3>
          <ul class="report-list">
            <li><strong>5.2. Điều kiện chuẩn bị:</strong> Chuẩn bị AWS Account và công cụ phát triển.</li>
            <li><strong>5.3. Hạ tầng cốt lõi:</strong> Triển khai tài nguyên AWS bằng Terraform.</li>
            <li><strong>5.4. Triển khai ứng dụng:</strong> Đưa React và Spring Boot lên AWS.</li>
            <li><strong>5.5. Amazon Bedrock:</strong> Tích hợp AI tra cứu dinh dưỡng.</li>
            <li><strong>5.6. Giám sát và chi phí:</strong> Theo dõi hệ thống, bảo mật và ngân sách.</li>
            <li><strong>5.7. Dọn tài nguyên:</strong> Dừng hoặc xóa tài nguyên sau workshop.</li>
          </ul>

          <h3 class="report-h3">Kết quả mong đợi</h3>
          <p class="report-p">
            Sau workshop, người học có thể triển khai và vận hành thử nghiệm một ứng dụng thương mại điện tử dinh dưỡng tích hợp AI trên AWS, đồng thời hiểu cách theo dõi và kiểm soát chi phí.
          </p>

          ${renderPrevNextBar('', '', 'ws-5-2', '5.2 Điều kiện chuẩn bị')}
        </section>
      </div>

            <!-- MODULE 5.2 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" id="pane-ws-5-2">
        <section class="report-section">
          <h2 class="report-h2">5.2 – Điều kiện chuẩn bị</h2>
          <p class="report-p">
            Trước khi triển khai nền tảng Nutrition E-Commerce trên AWS, người học cần chuẩn bị tài khoản AWS, các công cụ phát triển, quyền truy cập IAM và nơi lưu trữ Terraform State.
          </p>
          <p class="report-p">
            Bài thực hành hướng dẫn kiểm tra môi trường, cấu hình AWS IAM Identity Center và khởi tạo Terraform Backend trên Amazon S3.
          </p>

          <h3 class="report-h3">5.2.1. Chuẩn bị công cụ</h3>
          <p class="report-p">
            Bảng dưới đây liệt kê các công cụ và runtime bắt buộc để thực hiện bài thực hành:
          </p>

          <div class="report-table-wrapper">
            <table class="report-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Công cụ</th>
                  <th style="width: 75%;">Yêu cầu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold">AWS Account</td>
                  <td>Có quyền cấu hình các dịch vụ cần thiết (VPC, ECS, RDS, IAM, CloudFront, Bedrock)</td>
                </tr>
                <tr>
                  <td class="font-bold">AWS CLI</td>
                  <td>Phiên bản 2 (AWS CLI v2.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">Terraform</td>
                  <td>Phiên bản ≥ 1.10 (dự án kiểm thử với Terraform v1.10.5)</td>
                </tr>
                <tr>
                  <td class="font-bold">Java</td>
                  <td>JDK 21 (Eclipse Temurin hoặc OpenJDK 21)</td>
                </tr>
                <tr>
                  <td class="font-bold">Node.js & npm</td>
                  <td>Phiên bản tương thích với repository (Node.js ≥ 20.x hoặc 22.x LTS, npm ≥ 10.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">Docker</td>
                  <td>Docker Desktop hoặc Docker Engine hỗ trợ build container đa nền tảng (<code>linux/arm64</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Git</td>
                  <td>Quản lý mã nguồn (Git ≥ 2.40.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">PowerShell</td>
                  <td>PowerShell 7 hoặc Windows PowerShell để chạy lệnh minh họa và script vòng đời trên Windows</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="report-h3">5.2.2. Cấu hình quyền truy cập AWS</h3>
          <p class="report-p">
            Hạ tầng dự án được phân quyền dựa trên nguyên tắc đặc quyền tối thiểu (Least Privilege) với các thành phần chính:
          </p>
          <ul class="report-list">
            <li><strong>AWS IAM Identity Center:</strong> Quản lý quyền truy cập tập trung vào tài khoản AWS thông qua xác thực Single Sign-On (SSO).</li>
            <li><strong>Permission set <code>nutrition-plan</code>:</strong> Chỉ gồm chính sách <code>ReadOnlyAccess</code> của AWS, dùng để kiểm tra cú pháp, validate và lập kế hoạch thực thi (<code>terraform plan</code>).</li>
            <li><strong>Permission set <code>nutrition-apply</code>:</strong> Gồm chính sách <code>ReadOnlyAccess</code> kết hợp cùng Inline Policy <code>nutrition-apply-policy.json</code> để triển khai tài nguyên được phê duyệt.</li>
            <li><strong>Chính sách <code>nutrition-boundary</code>:</strong> Đóng vai trò trần quyền tối đa (Permission Boundary) cho toàn bộ IAM Role do Terraform khởi tạo (ECS Task Role, Execution Role, GitHub Actions OIDC Role).</li>
          </ul>

          <p class="report-p">
            <strong>Các bước cấu hình và xác minh trong IAM Identity Center (theo <code>docs/aws-setup/README.md</code>):</strong>
          </p>
          <ol class="report-list" style="list-style-type: decimal; padding-left: 20px;">
            <li>Đăng nhập AWS Management Console với tài khoản quản trị (Root hoặc Admin).</li>
            <li>Mở <strong>IAM Policies</strong> và tạo chính sách <code>nutrition-boundary</code> từ file <code>docs/aws-setup/nutrition-boundary-policy.json</code>. Kiểm tra Access Analyzer / Policy Validation không báo lỗi cú pháp.</li>
            <li>Mở <strong>IAM Identity Center &rarr; Permission sets</strong>:
              <ul style="list-style-type: circle; padding-left: 20px; margin-top: 4px;">
                <li>Tạo permission set <code>nutrition-plan</code> với AWS managed policy <code>ReadOnlyAccess</code>.</li>
                <li>Tạo permission set <code>nutrition-apply</code> với <code>ReadOnlyAccess</code> và dán nội dung từ <code>docs/aws-setup/nutrition-apply-policy.json</code> vào Inline policy. Thời hạn phiên (Session duration) thiết lập 4 giờ.</li>
              </ul>
            </li>
            <li>Gán (Assign) cả hai permission set trên cho người dùng trên tài khoản AWS đích.</li>
            <li>Xác minh các ngoại lệ theo Region: Toàn bộ dịch vụ dự án giới hạn tại <code>ap-southeast-1</code> (Singapore); CloudFront là dịch vụ toàn cầu và S3 giới hạn theo tên bucket <code>nutrition-*</code>; ngoại lệ <code>ap-northeast-1</code> (Tokyo) được mở riêng cho Amazon Bedrock và Guardrails.</li>
          </ol>

          <p class="report-p" style="font-size: 13.5px; color: #B45309; background: #FFFBEB; padding: 10px 14px; border-left: 3px solid #F59E0B; border-radius: 2px;">
            <strong>Lưu ý bảo mật:</strong> Tuyệt đối không cấp quyền <code>AdministratorAccess</code> không giới hạn. Dự án sử dụng Permission Boundary để khóa trần quyền và ngăn chặn việc gán quyền leo thang ngoài ý muốn.
          </p>

          ${renderEvidenceBox(
            'assets/images/workshop/5.2-prerequisites/iam-permission-sets.png',
            'Hình 5.2.1. Permission Sets trong AWS IAM Identity Center',
            'Cấu hình permission sets nutrition-plan và nutrition-apply trong Identity Center.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.2-prerequisites/iam-permission-boundary.png',
            'Hình 5.2.2. IAM Permission Boundary của dự án',
            'Chính sách nutrition-boundary giới hạn trần quyền tối đa cho các role của ứng dụng.',
            true
          )}

          <h3 class="report-h3">5.2.3. Đăng nhập AWS CLI bằng SSO</h3>
          <p class="report-p">
            Đăng nhập vào phiên làm việc SSO qua cấu hình session <code>nutrition</code> đã thiết lập trên AWS CLI:
          </p>

          <div class="code-snippet-wrap">
            <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
            <pre><code>aws sso login --sso-session nutrition</code></pre>
          </div>

          <p class="report-p">
            Sau khi trình duyệt xác thực thành công, xác minh danh tính đang hoạt động bằng profile <code>nutrition-plan</code>:
          </p>

          <div class="code-snippet-wrap">
            <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
            <pre><code>aws sts get-caller-identity --profile nutrition-plan</code></pre>
          </div>

          <p class="report-p">
            <strong>Kết quả mong đợi:</strong> Lệnh trả về cấu trúc JSON hợp lệ chứa các trường <code>UserId</code>, <code>Account</code> và <code>Arn</code> tương ứng với permission set đang đăng nhập. (Để đảm bảo nguyên tắc bảo mật, thông tin Account ID và Arn thực tế được bảo vệ và không đưa vào tài liệu công khai).
          </p>

          <p class="report-p" style="font-size: 13.5px; color: #475569;">
            <strong>Xử lý lỗi <code>InvalidGrantException</code>:</strong> Lỗi này xuất hiện khi token của phiên SSO đã hết thời hạn hợp lệ. Thực hiện đăng nhập lại bằng lệnh <code>aws sso login --sso-session nutrition</code> để cấp token mới.
          </p>

          <h3 class="report-h3">5.2.4. Khởi tạo Terraform Backend trên S3</h3>
          <p class="report-p">
            Terraform State lưu trữ toàn bộ trạng thái tài nguyên AWS do Terraform quản lý. Dự án sử dụng Amazon S3 làm Remote Backend với mã hóa tĩnh SSE-S3 (AES256), bật tính năng kiểm soát phiên bản (Versioning) và khóa trạng thái đồng thời bằng tham số native <code>use_lockfile = true</code> của Terraform 1.10+.
          </p>

          <p class="report-p">
            Các bước thực hiện theo hướng dẫn tại <code>infra/README.md</code>:
          </p>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Khởi tạo Terraform Bootstrap</div>
            <p class="report-p">Di chuyển vào thư mục bootstrap và tải AWS provider:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>terraform -chdir=infra/bootstrap init</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Kiểm tra Terraform Plan</div>
            <p class="report-p">Gán biến định danh người sở hữu và xuất bản kế hoạch triển khai ra file nhị phân:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>$env:TF_VAR_owner = "your-name"
terraform -chdir=infra/bootstrap plan -out=tfplan</code></pre>
            </div>
            <p class="report-p" style="font-size: 13.5px; color: #64748B;">
              <em>Người học đọc kỹ danh sách tài nguyên S3 bucket dự kiến tạo và kiểm tra không có tài nguyên lạ trước khi thực hiện apply.</em>
            </p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Triển khai Bootstrap</div>
            <p class="report-p">Chuyển sang profile <code>nutrition-apply</code> để áp dụng bản kế hoạch:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>$env:AWS_PROFILE = "nutrition-apply"
terraform -chdir=infra/bootstrap apply tfplan</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Lấy thông tin State Bucket</div>
            <p class="report-p">Truy vấn tên bucket S3 vừa được tạo từ output của Terraform:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>terraform -chdir=infra/bootstrap output state_bucket</code></pre>
            </div>
            <p class="report-p">Tên bucket có định dạng duy nhất: <code>nutrition-dev-tfstate-&lt;account-id&gt;</code>.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Cấu hình Terraform Backend</div>
            <p class="report-p">Sao chép file mẫu <code>backend.hcl.example</code> có sẵn trong thư mục môi trường dev và điền tên bucket thực tế:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>cp infra/envs/dev/backend.hcl.example infra/envs/dev/backend.hcl</code></pre>
            </div>
            <p class="report-p">Nội dung file <code>infra/envs/dev/backend.hcl</code> sau khi điền:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>bucket = "nutrition-dev-tfstate-&lt;account-id&gt;"</code></pre>
            </div>
          </div>

          <p class="report-p">
            <strong>Đặc tính bảo vệ của S3 State Backend:</strong>
          </p>
          <ul class="report-list">
            <li>Terraform State được lưu trữ an toàn trong bucket S3 với mã hóa phía máy chủ (SSE-S3).</li>
            <li>Tham số <code>use_lockfile = true</code> kích hoạt cơ chế khóa native của S3, loại bỏ hoàn toàn nguy cơ ghi đè đồng thời mà không cần bảng DynamoDB bổ sung.</li>
            <li>Bucket được cấu hình <code>prevent_destroy = true</code> trong Terraform bootstrap để bảo vệ khỏi các thao tác xóa nhầm ngoài ý muốn.</li>
          </ul>

          <p class="report-p" style="font-size: 13.5px; color: #1E293B; background: #F1F5F9; padding: 12px 14px; border-left: 3px solid #3B82F6; border-radius: 2px;">
            <strong>Lưu ý về AWS Budgets:</strong> Trước khi triển khai các dịch vụ tính phí, người học nên thiết lập ngân sách cảnh báo trên AWS Budgets. Dự án sử dụng mức ngân sách tham chiếu 100 USD. Hướng dẫn chi tiết cấu hình ngân sách, thông báo email và ảnh minh chứng sẽ được trình bày trong bài <strong>5.6 – Giám sát, bảo mật và chi phí</strong>. Module bootstrap hiện tại không tạo AWS Budgets tự động.
          </p>

          ${renderEvidenceBox(
            'assets/images/workshop/5.2-prerequisites/terraform-state-s3.png',
            'Hình 5.2.3. Amazon S3 Bucket lưu Terraform State',
            'Bucket S3 nutrition-dev-tfstate bật mã hóa SSE-S3 và cơ chế khóa use_lockfile.',
            true
          )}

          <h3 class="report-h3">5.2.5. Kiểm tra kết quả</h3>
          <p class="report-p">
            Xác nhận danh sách các tiêu chí trước khi chuyển sang bài thực hành tiếp theo:
          </p>
          <ul class="report-list">
            <li>&#10003; AWS CLI đăng nhập thành công qua phiên SSO và phản hồi mã thoát 0.</li>
            <li>&#10003; Cả hai profile <code>nutrition-plan</code> và <code>nutrition-apply</code> được cấu hình đúng.</li>
            <li>&#10003; Chính sách <code>nutrition-boundary</code> tồn tại và hợp lệ trong AWS IAM Policies.</li>
            <li>&#10003; Khởi tạo và triển khai Terraform Bootstrap thành công mà không có lỗi phân quyền.</li>
            <li>&#10003; Bucket lưu trữ Terraform State đã được tạo tại vùng <code>ap-southeast-1</code> với đầy đủ mã hóa và chặn public access.</li>
            <li>&#10003; File cấu hình <code>infra/envs/dev/backend.hcl</code> trỏ chính xác đến tên bucket thực tế.</li>
            <li>&#10003; Các thông tin nhạy cảm (Account ID thực tế, khóa truy cập) không xuất hiện trong tài liệu hoặc git commit.</li>
          </ul>

          <h3 class="report-h3">5.2.6. Lưu ý và lỗi thường gặp</h3>
          <ul class="report-list">
            <li>
              <strong>Phiên AWS SSO hết hạn (<code>InvalidGrantException</code> / <code>ExpiredToken</code>):</strong>
              Thực hiện đăng nhập lại bằng lệnh <code>aws sso login --sso-session nutrition</code> để cấp token phiên mới.
            </li>
            <li>
              <strong>Lỗi khóa trạng thái (Terraform State Lock):</strong>
              Nếu state bị khóa do phiên apply trước đó bị gián đoạn đột ngột, hãy xác minh kỹ lưỡng không còn bất kỳ tiến trình Terraform nào đang thao tác trên tài nguyên. Chỉ thực hiện lệnh <code>terraform force-unlock &lt;LOCK-ID&gt;</code> khi đã xác minh an toàn và có đủ quyền hạn. Tuyệt đối không xóa file state hoặc bucket lưu trữ.
            </li>
            <li>
              <strong>Lỗi quyền AWS không đủ (<code>AccessDeniedException</code>):</strong>
              Kiểm tra biến môi trường <code>$env:AWS_PROFILE</code> xem đã chuyển sang profile <code>nutrition-apply</code> hay chưa. Đối chiếu quyền còn thiếu với tài liệu <code>docs/aws-setup/README.md</code>, không tự ý cấp quyền <code>AdministratorAccess</code> toàn bộ.
            </li>
          </ul>

          ${renderPrevNextBar('ws-5-1', '5.1 Giới thiệu Workshop', 'ws-5-3', '5.3 Xây dựng hạ tầng AWS')}
        </section>
      </div>

            <!-- MODULE 5.3 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" id="pane-ws-5-3">
        <section class="report-section">
          <h2 class="report-h2">5.3 – Hạ tầng cốt lõi</h2>
          <p class="report-p">
            Bài thực hành này hướng dẫn triển khai mạng VPC, cơ sở dữ liệu Amazon RDS PostgreSQL và dịch vụ xác thực Amazon Cognito bằng Terraform. Đây là những thành phần nền tảng để triển khai backend Spring Boot trong các bước tiếp theo.
          </p>

          <!-- 5.3.1. TẠO MẠNG VPC -->
          <h3 class="report-h3">5.3.1. Tạo mạng VPC</h3>
          
          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">A. Mục tiêu</h4>
          <p class="report-p">
            Triển khai hạ tầng mạng phân vùng phục vụ backend và database, bảo đảm Application Load Balancer (ALB), ECS Fargate và RDS có phạm vi truy cập phù hợp, đồng thời tối ưu chi phí bằng cách loại bỏ NAT Gateway.
          </p>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">B. Kiến trúc mạng</h4>
          <p class="report-p">
            Theo thiết kế của nhóm (Quyết định D15 & D19), hạ tầng mạng bao gồm:
          </p>
          <ul class="report-list">
            <li>Một VPC tại Region Singapore (<code>ap-southeast-1</code>), dải mạng mặc định <code>10.0.0.0/16</code> trải rộng trên 2 Availability Zones.</li>
            <li>Hai Public Subnets (<code>10.0.0.0/24</code> và <code>10.0.1.0/24</code>) dành cho ALB và các container ECS Fargate.</li>
            <li>Hai Private Database Subnets (<code>10.0.100.0/24</code> và <code>10.0.101.0/24</code>) dành riêng cho Amazon RDS, hoàn toàn không có route ra Internet.</li>
            <li>Một Internet Gateway (IGW) kết nối VPC với mạng Internet công cộng.</li>
            <li>Bảng định tuyến (Route Tables): Bảng public trỏ <code>0.0.0.0/0</code> ra IGW; bảng database chỉ định tuyến nội bộ VPC.</li>
            <li><strong>S3 Gateway Endpoint:</strong> Cho phép ECS task truyền nhận dữ liệu với Amazon S3 (ảnh sản phẩm) qua mạng nội bộ AWS hoàn toàn miễn phí, không đi qua Internet Gateway.</li>
            <li><strong>Managed Prefix List của CloudFront:</strong> Chỉ cho phép các dải địa chỉ IP xuất phát từ CloudFront truy cập vào ALB.</li>
          </ul>

          <p class="report-p">
            <strong>Phân tách Security Groups 3 lớp độc lập:</strong>
          </p>
          <ul class="report-list">
            <li><strong>ALB Security Group (<code>nutrition-dev-alb</code>):</strong> Ingress chỉ nhận HTTP (cổng 80) từ CloudFront Managed Prefix List; Egress chỉ chuyển tiếp tới Security Group của ECS trên cổng <code>8080</code>.</li>
            <li><strong>ECS Security Group (<code>nutrition-dev-ecs</code>):</strong> Ingress chỉ nhận lưu lượng ứng dụng (cổng <code>8080</code>) từ ALB SG; Egress cho phép cổng <code>5432</code> tới RDS SG và HTTPS (cổng <code>443</code>) ra ngoài để gọi ECR, Bedrock, Cognito JWKS và CloudWatch.</li>
            <li><strong>RDS Security Group (<code>nutrition-dev-rds</code>):</strong> Ingress chỉ cho phép kết nối PostgreSQL (cổng <code>5432</code>) duy nhất từ ECS SG; nghiêm cấm mọi truy cập từ Internet.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">C. Các bước thực hành</h4>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Kiểm tra cấu hình Terraform Network</div>
            <p class="report-p">Mở file <code>infra/modules/network/main.tf</code> để kiểm tra khai báo prefix list của CloudFront và định tuyến S3 Gateway Endpoint:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>data "aws_ec2_managed_prefix_list" "cloudfront" {
  name = "com.amazonaws.global.cloudfront.origin-facing"
}</code></pre>
            </div>
            <p class="report-p">Đoạn mã trên đảm bảo ALB chỉ chấp nhận các gói tin được định tuyến qua mạng phân phối CDN của CloudFront.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Kiểm tra Terraform Variables</div>
            <p class="report-p">Đối chiếu các biến đầu vào từ <code>infra/envs/dev/main.tf</code> được truyền cho module network:</p>
            <ul class="report-list">
              <li><code>name_prefix = "nutrition-dev"</code>: Tiền tố định danh tài nguyên thống nhất.</li>
              <li><code>enable_nat = false</code>: Mặc định tắt NAT Gateway để tiết kiệm chi phí vận hành (~32 USD/tháng). ECS Fargate sẽ sử dụng Public IP trong Public Subnet để giao tiếp ra các API của AWS.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Kiểm tra Terraform Plan</div>
            <p class="report-p">Sử dụng profile <code>nutrition-plan</code> đã chuẩn bị ở Bài 5.2 để kiểm tra kế hoạch triển khai tài nguyên:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>$env:AWS_PROFILE = "nutrition-plan"
terraform -chdir=infra/envs/dev init
terraform -chdir=infra/envs/dev plan -var="app_running=false" -out=tfplan</code></pre>
            </div>
            <p class="report-p" style="font-size: 13.5px; color: #64748B;">
              <em>Người học đọc kỹ danh sách tài nguyên mạng dự kiến được tạo: 1 VPC, 4 Subnets, 1 Internet Gateway, 2 Route Tables, 3 Security Groups và 1 VPC Endpoint.</em>
            </p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Triển khai hạ tầng (Apply)</div>
            <p class="report-p">Chuyển sang profile <code>nutrition-apply</code> và áp dụng bản kế hoạch vừa kiểm tra:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>$env:AWS_PROFILE = "nutrition-apply"
terraform -chdir=infra/envs/dev apply tfplan</code></pre>
            </div>
            <p class="report-p" style="font-size: 13.5px; color: #1E293B; background: #F1F5F9; padding: 10px 14px; border-left: 3px solid #3B82F6; border-radius: 2px;">
              <strong>Lưu ý kiến trúc:</strong> Root module tại <code>infra/envs/dev/main.tf</code> quản lý đồng bộ toàn bộ tài nguyên nền tảng. Khi chạy apply, Terraform sẽ triển khai đồng thời cả mạng VPC, cơ sở dữ liệu RDS và Cognito (ở trạng thái chờ <code>app_running = false</code>). Không nên sử dụng cờ <code>-target</code> vì có thể gây sai lệch phụ thuộc state.
            </p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Kiểm tra kết quả trên AWS Console</div>
            <p class="report-p">Đăng nhập AWS Management Console, điều hướng tới <strong>VPC &rarr; Your VPCs</strong> và kiểm tra:</p>
            <ul class="report-list">
              <li>VPC <code>nutrition-dev-vpc</code> đã sẵn sàng với dải mạng <code>10.0.0.0/16</code>.</li>
              <li>2 Public Subnets và 2 Private Database Subnets trải đều trên 2 Availability Zones.</li>
              <li>Internet Gateway <code>nutrition-dev-igw</code> đã đính kèm (attached) vào VPC.</li>
              <li>Route table cho database subnets không có route trỏ ra <code>0.0.0.0/0</code>.</li>
              <li>3 Security Groups (<code>nutrition-dev-alb</code>, <code>nutrition-dev-ecs</code>, <code>nutrition-dev-rds</code>) đã được liên kết chính xác.</li>
              <li>VPC Endpoint cho S3 ở trạng thái <strong>Available</strong>.</li>
            </ul>
          </div>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">D. Hình ảnh minh chứng</h4>

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/vpc-resource-map.png',
            'Hình 5.3.1.1. VPC Resource Map',
            'Sơ đồ phân bổ tài nguyên VPC, subnets và bảng định tuyến trên AWS Console.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/vpc-security-groups.png',
            'Hình 5.3.1.2. Security Groups của hệ thống',
            'Danh sách và quy tắc kiểm soát lưu lượng ingress/egress cho ALB, ECS và RDS.',
            true
          )}

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">E. Kiểm tra kết quả</h4>
          <ul class="report-list">
            <li>&#10003; VPC và các subnets đã được tạo đúng cấu trúc 2 Availability Zones.</li>
            <li>&#10003; ALB và ECS sử dụng Security Groups đúng vai trò và cổng chỉ định.</li>
            <li>&#10003; RDS chỉ cho phép kết nối PostgreSQL từ ECS tasks.</li>
            <li>&#10003; Route tables phân tách nghiêm ngặt vùng public và private database.</li>
            <li>&#10003; S3 Gateway Endpoint ở trạng thái Available.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">F. Lưu ý bảo mật</h4>
          <p class="report-p" style="font-size: 13.5px; color: #64748B;">
            <em>Tuyệt đối không lưu trữ Account ID, IP nhạy cảm hoặc thông tin định danh nội bộ vào ảnh chụp minh chứng hoặc tài liệu công khai.</em>
          </p>

          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />

          <!-- 5.3.2. TẠO CƠ SỞ DỮ LIỆU AMAZON RDS -->
          <h3 class="report-h3">5.3.2. Tạo cơ sở dữ liệu Amazon RDS</h3>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">A. Mục tiêu</h4>
          <p class="report-p">
            Triển khai hệ quản trị cơ sở dữ liệu quan hệ PostgreSQL 17 trên Amazon RDS, thiết lập cô lập bảo mật tuyệt đối và tự động hóa quản lý lược đồ dữ liệu bằng Flyway.
          </p>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">B. Cấu hình cơ sở dữ liệu</h4>
          <p class="report-p">
            Bảng thông số kỹ thuật của Amazon RDS PostgreSQL trong môi trường dev:
          </p>

          <div class="report-table-wrapper">
            <table class="report-table">
              <thead>
                <tr>
                  <th style="width: 30%;">Thuộc tính</th>
                  <th style="width: 70%;">Giá trị cấu hình</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold">Dịch vụ</td>
                  <td>Amazon RDS for PostgreSQL (Engine version 17.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">Instance Class</td>
                  <td><code>db.t4g.micro</code> (Kiến trúc AWS Graviton2 ARM, tối ưu chi phí)</td>
                </tr>
                <tr>
                  <td class="font-bold">Storage</td>
                  <td>20 GB gp3 (Hỗ trợ autoscaling tối đa 100 GB)</td>
                </tr>
                <tr>
                  <td class="font-bold">Availability</td>
                  <td>Single-AZ (mặc định tiết kiệm chi phí demo, hỗ trợ chuyển Multi-AZ qua biến <code>rds_multi_az</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Phân vùng mạng</td>
                  <td>Private database subnets (<code>nutrition-dev-db</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Truy cập công khai</td>
                  <td>Tắt hoàn toàn (<code>publicly_accessible = false</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Mã hóa dữ liệu</td>
                  <td>Bật mã hóa tĩnh với AWS KMS (<code>storage_encrypted = true</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Quản lý xác thực</td>
                  <td>AWS Secrets Manager tự sinh và xoay vòng mật khẩu (<code>manage_master_user_password = true</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Quản lý Lược đồ</td>
                  <td>Flyway migrations V1–V11 tích hợp sẵn trong Spring Boot</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="report-p">
            <strong>Đặc tính bảo vệ chính:</strong>
          </p>
          <ul class="report-list">
            <li>RDS không thể bị truy cập trực tiếp từ Internet, ngăn chặn hoàn toàn nguy cơ rò rỉ dữ liệu qua tấn công mạng công cộng.</li>
            <li>Security Group chỉ chấp nhận kết nối qua cổng PostgreSQL tiêu chuẩn (<code>5432</code>) từ các ECS tasks mang nhãn <code>nutrition-dev-ecs</code>.</li>
            <li>Mật khẩu master được tạo tự động bởi Secrets Manager, không bao giờ xuất hiện dưới dạng văn bản thô (plaintext) trong code hay state file.</li>
            <li>Flyway đảm bảo tính bất biến và đồng bộ phiên bản của cấu trúc cơ sở dữ liệu.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">C. Các bước thực hành</h4>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Kiểm tra Terraform RDS Module</div>
            <p class="report-p">Mở <code>infra/modules/rds/main.tf</code> và đối chiếu các thiết lập bảo mật cốt lõi:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>manage_master_user_password = true

db_subnet_group_name   = aws_db_subnet_group.main.name
vpc_security_group_ids = [var.security_group_id]
publicly_accessible    = false
multi_az               = var.multi_az</code></pre>
            </div>
            <p class="report-p">Thiết lập <code>manage_master_user_password = true</code> kích hoạt tính năng tích hợp trực tiếp với Secrets Manager của RDS mà không cần quản lý secret thủ công.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Kiểm tra DB Subnet Group và Security Group</div>
            <p class="report-p">Đảm bảo tài nguyên <code>aws_db_subnet_group.main</code> liên kết đầy đủ 2 subnet ID thuộc vùng private và gắn đúng Security Group ID của RDS từ module network.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Triển khai qua Terraform</div>
            <p class="report-p">Cơ sở dữ liệu RDS đã được tạo tự động khi áp dụng kế hoạch tại thư mục <code>infra/envs/dev</code> trong Bước 4 của mục 5.3.1. Quá trình tạo RDS PostgreSQL thường mất khoảng 5–8 phút.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Kiểm tra RDS trên AWS Console</div>
            <p class="report-p">Mở <strong>Amazon RDS &rarr; Databases</strong> và chọn cơ sở dữ liệu <code>nutrition-dev-postgres</code>. Kiểm tra các thông số:</p>
            <ul class="report-list">
              <li>Status: <strong>Available</strong> (khi bật app) hoặc <strong>Stopped</strong> (ở trạng thái tiết kiệm chi phí demo).</li>
              <li>Engine version: PostgreSQL 17.x.</li>
              <li>Instance: <code>db.t4g.micro</code> | Storage: 20 GB gp3.</li>
              <li>Multi-AZ: No (Single-AZ).</li>
              <li>Public access: <strong>No</strong>.</li>
              <li>Security Group: <code>nutrition-dev-rds</code>.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Kiểm tra AWS Secrets Manager</div>
            <p class="report-p">Mở <strong>AWS Secrets Manager</strong> và tìm kiếm secret có định dạng <code>rds!db-...</code> được liên kết với instance RDS. Kiểm tra metadata của secret; tuyệt đối không mở hoặc chụp màn hình giá trị mật khẩu (Plaintext Secret).</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">6</span> Kiểm tra cấu trúc Flyway Migrations</div>
            <p class="report-p">Kiểm tra thư mục mã nguồn <code>backend/src/main/resources/db/migration/</code> để xem các tệp di chuyển lược đồ từ V1 đến V11:</p>
            <ul class="report-list">
              <li><code>V1__catalog.sql</code>: Khởi tạo bảng danh mục sản phẩm (categories), sản phẩm (products) và chất gây dị ứng (allergens).</li>
              <li><code>V3__commerce.sql</code>: Khởi tạo bảng đơn hàng (orders), giỏ hàng (carts) và chi tiết đơn hàng (order_items).</li>
              <li><code>V4__chat_usage.sql</code>: Bảng ghi nhận giới hạn sử dụng chatbot AI.</li>
              <li><code>V5__product_images.sql</code>: Quản lý ảnh sản phẩm lưu trữ trên S3.</li>
              <li><code>V6–V8</code>: Bổ sung chất gây dị ứng và hàm tìm kiếm tiếng Việt không dấu (unaccent).</li>
              <li><code>V9__payments.sql</code>: Cấu trúc dữ liệu thanh toán.</li>
              <li><code>V10__payment_events.sql</code>: Xử lý idempotent sự kiện thanh toán từ cổng thanh toán.</li>
              <li><code>V11__nutrition_profiles.sql</code>: Hồ sơ dinh dưỡng cá nhân hóa của người dùng.</li>
            </ul>
            <p class="report-p">Khi backend Spring Boot khởi chạy trên ECS, Flyway sẽ tự động kiểm tra bảng <code>flyway_schema_history</code> và thực thi tuần tự các migration chưa áp dụng.</p>
          </div>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">D. Hình ảnh minh chứng</h4>

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/rds-configuration.png',
            'Hình 5.3.2.1. Cấu hình Amazon RDS PostgreSQL',
            'Bảng điều khiển RDS hiển thị phiên bản PostgreSQL 17, instance db.t4g.micro và trạng thái mã hóa.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/rds-connectivity.png',
            'Hình 5.3.2.2. Kết nối và bảo mật RDS',
            'Cấu hình Subnet Group private, Security Group cô lập và Public access bị vô hiệu hóa.',
            true
          )}

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">E. Kiểm tra kết quả</h4>
          <ul class="report-list">
            <li>&#10003; RDS PostgreSQL 17 được khởi tạo thành công với instance <code>db.t4g.micro</code>.</li>
            <li>&#10003; Tính năng truy cập công khai bị tắt (Public access = No).</li>
            <li>&#10003; Mã hóa lưu trữ bằng KMS được kích hoạt.</li>
            <li>&#10003; Cổng 5432 mở duy nhất cho Security Group của ECS.</li>
            <li>&#10003; Flyway migration scripts sẵn sàng thực thi khi ứng dụng khởi chạy.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">F. Lỗi thường gặp & Xử lý vận hành</h4>
          <p class="report-p">
            <strong>Terraform không tự khởi động RDS đang dừng (Stopped):</strong> Theo thiết kế của AWS API, Terraform không thể tự động chuyển trạng thái instance từ <code>stopped</code> sang <code>available</code> khi chạy apply thông thường.
          </p>
          <p class="report-p">
            <strong>Giải pháp chuẩn (theo <code>docs/runbook.md</code>):</strong> Sử dụng kịch bản điều khiển vòng đời demo do nhóm xây dựng:
          </p>
          <div class="code-snippet-wrap">
            <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
            <pre><code>powershell -ExecutionPolicy Bypass -File .\scripts\demo-infra.ps1 up</code></pre>
          </div>
          <p class="report-p" style="font-size: 13.5px; color: #64748B;">
            <em>Script sẽ sử dụng AWS CLI để khởi động RDS, chờ đợi cho đến khi instance chuyển sang trạng thái Available hoàn tất rồi mới thực thi các thao tác Terraform tiếp theo.</em>
          </p>

          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />

          <!-- 5.3.3. CẤU HÌNH AMAZON COGNITO -->
          <h3 class="report-h3">5.3.3. Cấu hình Amazon Cognito</h3>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">A. Mục tiêu</h4>
          <p class="report-p">
            Xây dựng hệ thống nhận thực người dùng tập trung, cấp phát mã thông báo JWT và phân quyền truy cập ứng dụng theo vai trò (Role-Based Access Control).
          </p>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">B. Cấu hình Cognito</h4>
          <p class="report-p">
            Theo thiết kế bảo mật của hệ thống:
          </p>
          <ul class="report-list">
            <li><strong>User Pool (<code>nutrition-dev-users</code>):</strong> Định danh người dùng bằng địa chỉ Email; kích hoạt tự động gửi mã xác thực email; áp dụng chính sách mật khẩu mạnh (tối thiểu 8 ký tự, có ký tự in hoa, in thường, chữ số và ký tự đặc biệt).</li>
            <li><strong>App Client (<code>nutrition-dev-spa</code>):</strong> Dành cho ứng dụng Single Page Application (React SPA), cấu hình <code>generate_secret = false</code> vì ứng dụng chạy phía trình duyệt của người dùng không thể giữ bí mật Client Secret.</li>
            <li><strong>Luồng xác thực:</strong> Sử dụng giao thức Secure Remote Password (<code>ALLOW_USER_SRP_AUTH</code>) và làm mới phiên qua <code>ALLOW_REFRESH_TOKEN_AUTH</code>. Không sử dụng Cognito Hosted UI mà tích hợp giao diện đăng nhập trực tiếp trong React.</li>
            <li><strong>Nhóm người dùng (User Groups):</strong> Thiết lập 2 nhóm chính gồm <code>USER</code> (khách hàng tiêu dùng) và <code>ADMIN</code> (quản trị viên cửa hàng).</li>
            <li><strong>Xác thực phía Backend:</strong> Spring Boot Resource Server kiểm tra chữ ký số của JWT token thông qua JWKS endpoint của Cognito, giải mã định danh người dùng từ claim <code>sub</code> và phân quyền hạn từ claim <code>cognito:groups</code>.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">C. Các bước thực hành</h4>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Kiểm tra Cognito Terraform Module</div>
            <p class="report-p">Mở <code>infra/modules/cognito/main.tf</code> để xem định nghĩa User Pool, App Client và thiết lập khôi phục tài khoản qua email:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>resource "aws_cognito_user_pool_client" "spa" {
  name            = "\${var.name_prefix}-spa"
  user_pool_id    = aws_cognito_user_pool.users.id
  generate_secret = false

  explicit_auth_flows = [
    "ALLOW_USER_SRP_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_ADMIN_USER_PASSWORD_AUTH",
  ]
}</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Kiểm tra các nhóm USER và ADMIN</div>
            <p class="report-p">Khai báo nhóm người dùng trong <code>infra/modules/cognito/main.tf</code>:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>resource "aws_cognito_user_group" "admin" {
  name         = "ADMIN"
  user_pool_id = aws_cognito_user_pool.users.id
}

resource "aws_cognito_user_group" "user" {
  name         = "USER"
  user_pool_id = aws_cognito_user_pool.users.id
}</code></pre>
            </div>
            <p class="report-p">Người dùng sau khi đăng ký sẽ được gán vào nhóm <code>USER</code>. Chỉ những tài khoản được chỉ định trong nhóm <code>ADMIN</code> mới có quyền truy cập vào các API quản lý sản phẩm và đơn hàng.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Triển khai Cognito</div>
            <p class="report-p">Module Cognito được quản lý hoàn toàn bằng mã nguồn Terraform và đã được áp dụng trong lệnh apply tổng thể. Tuyệt đối không tạo User Pool thủ công qua Console để tránh tình trạng lệch trạng thái (drift state).</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Kiểm tra trên AWS Console</div>
            <p class="report-p">Điều hướng tới <strong>Amazon Cognito &rarr; User pools</strong> và chọn <code>nutrition-dev-users</code>. Xác minh:</p>
            <ul class="report-list">
              <li>User Pool ID có tiền tố dạng <code>ap-southeast-1_...</code>.</li>
              <li>Tại thẻ <strong>App integration &rarr; App clients</strong>: Có client <code>nutrition-dev-spa</code> với thiết lập <em>Client secret: No client secret</em>.</li>
              <li>Tại thẻ <strong>Groups</strong>: Xuất hiện đầy đủ 2 nhóm <code>ADMIN</code> và <code>USER</code>.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Kiểm tra phân quyền API (theo docs/demo.md)</div>
            <p class="report-p">Xác nhận cơ chế bảo vệ phân quyền của backend Spring Boot đối với các lệnh gọi API:</p>
            <ul class="report-list">
              <li><strong>Yêu cầu không có Token:</strong> Gửi request tới các endpoint được bảo vệ mà thiếu header <code>Authorization: Bearer &lt;token&gt;</code> &rarr; Backend lập tức từ chối và phản hồi <code>HTTP 401 Unauthorized</code>.</li>
              <li><strong>Khách hàng thông thường (USER) gọi API quản trị:</strong> Tài khoản thuộc nhóm <code>USER</code> gọi các endpoint <code>/api/admin/**</code> &rarr; Backend kiểm tra claim <code>cognito:groups</code> và phản hồi <code>HTTP 403 Forbidden</code>.</li>
              <li><strong>Quản trị viên (ADMIN):</strong> Xác thực thành công và được phép thao tác toàn quyền trên các API quản lý.</li>
            </ul>
          </div>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">D. Hình ảnh minh chứng</h4>

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/cognito-user-groups.png',
            'Hình 5.3.3.1. Hai nhóm USER và ADMIN trong Amazon Cognito',
            'Bảng điều khiển Cognito User Pool hiển thị danh sách các nhóm người dùng đã được định cấu hình.',
            true
          )}

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">E. Kiểm tra kết quả</h4>
          <ul class="report-list">
            <li>&#10003; Cognito User Pool và App Client SPA được triển khai thành công.</li>
            <li>&#10003; Client Secret được tắt nhằm bảo đảm an toàn cho ứng dụng phía trình duyệt.</li>
            <li>&#10003; Hai nhóm <code>USER</code> và <code>ADMIN</code> được tạo đầy đủ.</li>
            <li>&#10003; JWT Token được backend xác thực và phân quyền chuẩn HTTP 401 / 403.</li>
          </ul>

          ${renderPrevNextBar('ws-5-2', '5.2 Điều kiện chuẩn bị', 'ws-5-4', '5.4 Triển khai ứng dụng')}
        </section>
      </div>

      <!-- MODULE 5.4 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" id="pane-ws-5-4">
        <section class="report-section">
          <h2 class="report-h2">5.4 – Triển khai ứng dụng</h2>

          <h3 class="report-h3">1. Mục tiêu học tập</h3>
          <ul class="report-list">
            <li>Đóng gói backend Spring Boot 4 thành Docker image tối ưu cho kiến trúc ARM64 (tiết kiệm 20% chi phí điện toán).</li>
            <li>Đăng nhập và đẩy image lên Amazon ECR repository.</li>
            <li>Khởi động ECS Fargate service với 1 task hoạt động và kết nối ALB.</li>
            <li>Build frontend React 19 và đồng bộ mã nguồn tĩnh lên Amazon S3, làm mới cache CloudFront.</li>
          </ul>

          <h3 class="report-h3">2. Điều kiện chuẩn bị</h3>
          <p class="report-p">Đã hoàn thành bài 5.3 (đã có ECR, ECS cluster, S3 buckets, ALB).</p>

          <h3 class="report-h3">3. Các bước thực hành chi tiết</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Đóng gói Backend Spring Boot và đẩy Docker Image lên ECR</div>
            <p class="report-p">Mở terminal tại thư mục gốc của repository, build file JAR và đóng gói container ARM64:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code># 1. Di chuyển vào thư mục backend và build file JAR
cd backend
./mvnw clean package -DskipTests

# 2. Lấy URL của ECR Repository
cd ../infra/envs/dev
ECR_URL=$(terraform output -raw ecr_repository_url)
cd ../../../backend

# 3. Đăng nhập Docker CLI vào ECR Registry
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin $ECR_URL

# 4. Build Docker container image cho kiến trúc linux/arm64
docker build --platform linux/arm64 -t $ECR_URL:latest .

# 5. Đẩy image lên ECR
docker push $ECR_URL:latest</code></pre>
            </div>
            <p class="report-p">Sau khi đẩy xong, Amazon ECR sẽ tự động quét bảo mật (scan-on-push) để rà soát các lỗ hổng CVE tiềm ẩn trong image.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Bật hạ tầng ứng dụng và khởi động ECS Task</div>
            <p class="report-p">Chuyển sang thư mục <code>infra/envs/dev</code> và chạy apply với biến <code>app_running=true</code>:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>cd ../infra/envs/dev
terraform apply -var="app_running=true" -var="api_desired_count=1" -auto-approve</code></pre>
            </div>
            <p class="report-p">Thao tác này sẽ thực hiện:</p>
            <ul class="report-list">
              <li>Khởi động instance Amazon RDS PostgreSQL từ trạng thái stopped sang available.</li>
              <li>Tạo Application Load Balancer (ALB), Target Group, Listener Rules và Custom Header <code>X-Origin-Verify</code>.</li>
              <li>Tạo ECS Task Definition và kích hoạt ECS Fargate Service chạy 1 active task kéo image <code>:latest</code> từ ECR.</li>
              <li>Chạy Flyway migrations tự động nạp 152 sản phẩm và hồ sơ dinh dưỡng USDA vào cơ sở dữ liệu.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Build và Deploy Frontend React lên Amazon S3</div>
            <p class="report-p">Biên dịch frontend React 19 và tải lên S3 bucket, sau đó xóa cache CloudFront Edge PoPs:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>cd ../../../frontend
npm install
npm run build

# Lấy tên Bucket và Distribution ID từ terraform output
cd ../infra/envs/dev
FRONTEND_BUCKET=$(terraform output -raw frontend_bucket_name)
DIST_ID=$(terraform output -raw cloudfront_distribution_id)
cd ../../../frontend

# Đồng bộ file build lên S3
aws s3 sync dist/ s3://$FRONTEND_BUCKET/ --delete

# Làm mới cache CloudFront toàn cầu
aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"</code></pre>
            </div>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.4-deployment/ecr-image-push.png',
            'Image backend đẩy thành công lên Amazon ECR với tag latest',
            'Giao diện ECR Console hiển thị image digest và kết quả quét lỗ hổng bảo mật.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.4-deployment/ecs-task-running.png',
            'ECS Fargate Task ở trạng thái RUNNING và Health Check Passed',
            'Màn hình ECS Console hiển thị 1 task hoạt động trong cluster nutrition-dev-cluster.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.4-deployment/cloudfront-app-live.png',
            'Trang web Nutrition E-Commerce hoạt động trực tiếp trên domain CloudFront',
            'Giao diện website tải danh mục sản phẩm 152 món ăn với bộ lọc dinh dưỡng đầy đủ.',
            true
          )}

          <h3 class="report-h3">4. Kết quả mong đợi & Xác minh</h3>
          <ul class="report-list">
            <li>Truy cập địa chỉ <code>https://&lt;cloudfront_domain&gt;/</code> hiển thị giao diện bán hàng hoàn chỉnh.</li>
            <li>Kiểm tra trạng thái backend qua API Actuator:
              <div class="code-snippet-wrap">
                <div class="code-snippet-header"><span>Health Check</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
                <pre><code>curl -s https://<cloudfront_domain>/api/actuator/health
# Kết quả phản hồi: {"status":"UP"}</code></pre>
              </div>
            </li>
            <li>Kiểm tra API danh mục 152 sản phẩm: <code>curl -s https://<cloudfront_domain>/api/products</code> trả về danh sách JSON sản phẩm cùng dữ liệu calo, protein, carbs, fat chuẩn xác.</li>
          </ul>

          <h3 class="report-h3">5. Lỗi thường gặp & Cách xử lý</h3>
          <ul class="report-list">
            <li><strong>Lỗi "no basic auth credentials" khi push Docker:</strong> Lệnh đăng nhập ECR có hạn sử dụng 12 tiếng. Hãy chạy lại lệnh <code>aws ecr get-login-password</code> để làm mới token đăng nhập.</li>
            <li><strong>ECS Task dừng liên tục với exit code 1:</strong> Mở CloudWatch Logs nhóm <code>/ecs/nutrition-dev-backend</code> để xem chi tiết. Thường do RDS chưa kết nối được (kiểm tra Security Group) hoặc thiếu biến môi trường bí mật từ Secrets Manager.</li>
          </ul>

          ${renderPrevNextBar('ws-5-3', '5.3 Xây dựng hạ tầng', 'ws-5-5', '5.5 Tích hợp Bedrock')}
        </section>
      </div>

      <!-- MODULE 5.5 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" id="pane-ws-5-5">
        <section class="report-section">
          <h2 class="report-h2">5.5 – Tích hợp Amazon Bedrock</h2>

          <h3 class="report-h3">1. Mục tiêu học tập</h3>
          <ul class="report-list">
            <li>Kích hoạt và cấp quyền truy cập mô hình nền tảng Amazon Nova 2 Lite tại vùng Tokyo (<code>ap-northeast-1</code>).</li>
            <li>Cấu hình Bedrock Guardrails nhằm ngăn chặn prompt injection và chặn thông tin tư vấn y khoa sai lệch.</li>
            <li>Kiểm thử luồng AI Assistant: xử lý ngôn ngữ tự nhiên -> trích xuất tham số dinh dưỡng -> truy vấn PostgreSQL -> trả kết quả cho người dùng.</li>
          </ul>

          <h3 class="report-h3">2. Điều kiện chuẩn bị</h3>
          <p class="report-p">Đã hoàn thành bài 5.4. Tài khoản AWS có quyền gọi Bedrock API tại khu vực Châu Á Thái Bình Dương (Tokyo).</p>

          <h3 class="report-h3">3. Các bước thực hành chi tiết</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Kích hoạt Model Access trên Amazon Bedrock Console</div>
            <p class="report-p">Đăng nhập AWS Management Console, chuyển vùng sang <strong>Tokyo (ap-northeast-1)</strong>:</p>
            <ol class="report-list">
              <li>Truy cập dịch vụ <strong>Amazon Bedrock</strong> → Chọn mục <strong>Model access</strong> ở menu bên trái.</li>
              <li>Nhấp nút <strong>Modify model access</strong>.</li>
              <li>Tìm nhà cung cấp <strong>Amazon</strong> và tích chọn mô hình <strong>Amazon Nova 2 Lite</strong> (hoặc inference profile <code>jp.amazon.nova-lite-v1:0</code>).</li>
              <li>Nhấp <strong>Next</strong> và <strong>Submit</strong> để hoàn tất cấp quyền truy cập (thường được phê duyệt tức thì).</li>
            </ol>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Cấu hình Bedrock Guardrails trong Terraform</div>
            <p class="report-p">Hạ tầng Terraform của dự án đã tích hợp sẵn module <code>infra/modules/guardrail</code> để bảo vệ an toàn nội dung. Kiểm tra cấu hình trong <code>infra/envs/dev/terraform.tfvars</code>:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>terraform.tfvars</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>bedrock_region               = "ap-northeast-1"
bedrock_model_id             = "amazon.nova-lite-v1:0"
bedrock_inference_profile_id = "jp.amazon.nova-lite-v1:0"
guardrail_tier               = "STANDARD"</code></pre>
            </div>
            <p class="report-p">Cấu hình này thiết lập các bộ lọc:</p>
            <ul class="report-list">
              <li><strong>Content Filters:</strong> Chặn các nội dung thù ghét, bạo lực và hành vi độc hại với ngưỡng HIGH.</li>
              <li><strong>Sensitive Information Filters:</strong> Ngăn chặn việc làm lộ số thẻ tín dụng, mật khẩu hay dữ liệu cá nhân.</li>
              <li><strong>Topic Deny:</strong> Ngăn AI đưa ra các phác đồ điều trị bệnh lý hoặc chẩn đoán thay thế bác sĩ (tuân thủ Medical Disclaimer).</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Phân tích luồng xử lý AI trong Spring Boot Backend</div>
            <p class="report-p">Backend Spring Boot 4 gọi Bedrock Converse API với prompt định chuẩn để trích xuất JSON có cấu trúc:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Java / Spring Boot Logic</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>// 1. Nhận câu hỏi tự nhiên: "tìm bữa tối dưới 500 calo giàu protein không có gluten"
// 2. Gửi request đến Bedrock Nova 2 Lite (Tokyo) với Guardrail ID
ConverseResponse response = bedrockClient.converse(req -> req
    .modelId("jp.amazon.nova-lite-v1:0")
    .guardrailConfig(g -> g.guardrailIdentifier(guardrailId).guardrailVersion(guardrailVer))
    .messages(userMessage)
);

// 3. AI trả về kết quả JSON tham số lọc (Parameter Extraction):
// { "maxCalories": 500, "minProtein": 25, "excludedAllergens": ["GLUTEN"] }

// 4. Backend dùng JPA Specification / SQL truy vấn trực tiếp bảng products trong PostgreSQL:
// SELECT * FROM products WHERE calories <= 500 AND protein >= 25 AND NOT ('GLUTEN' = ANY(allergens));</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Kiểm thử thực tế API tra cứu dinh dưỡng</div>
            <p class="report-p">Thực hiện gọi API kiểm thử từ dòng lệnh để xác minh chức năng:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>curl -X POST "https://<cloudfront_domain>/api/ai/nutrition-lookup" \
  -H "Content-Type: application/json" \
  -d '{"query": "gợi ý món ăn ít carb dưới 350 calo cho người tập gym"}'</code></pre>
            </div>
            <p class="report-p">Kết quả JSON trả về danh sách các món ăn thực tế (ví dụ: Salad ức gà áp chảo, Thịt bò phi lê nướng măng tây) kèm số liệu calo và macro chuẩn xác từ cơ sở dữ liệu USDA.</p>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.5-bedrock/bedrock-model-access.png',
            'Xác nhận trạng thái Model Access của Amazon Nova 2 Lite tại Tokyo',
            'Màn hình Bedrock Console hiển thị Access granted cho mô hình Amazon Nova 2 Lite.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.5-bedrock/bedrock-guardrail.png',
            'Cấu hình Bedrock Guardrail ngăn ngừa nội dung độc hại và tư vấn y tế sai lệch',
            'Giao diện Bedrock Guardrails hiển thị các bộ lọc Content filter và Topic Deny.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.5-bedrock/ai-lookup-test.png',
            'Kết quả kiểm thử API AI Nutrition Lookup trên Terminal / Postman',
            'Phản hồi JSON chứa intent, tham số lọc và danh sách sản phẩm chuẩn hóa.',
            true
          )}

          <h3 class="report-h3">4. Kết quả mong đợi & Xác minh</h3>
          <ul class="report-list">
            <li>AI nhận diện chính xác các từ khóa dinh dưỡng và chuyển đổi thành bộ lọc SQL hợp lệ.</li>
            <li>Khi người dùng cố tình hỏi câu hỏi độc hại hoặc yêu cầu kê đơn thuốc, Bedrock Guardrail sẽ chặn và trả về thông báo: <em>"Yêu cầu không phù hợp với chính sách an toàn thông tin dinh dưỡng của hệ thống."</em></li>
          </ul>

          <h3 class="report-h3">5. Lỗi thường gặp & Cách xử lý</h3>
          <ul class="report-list">
            <li><strong>Lỗi "AccessDeniedException: You don't have access to the model":</strong> Bạn chưa kích hoạt Model Access trên AWS Console ở vùng Tokyo (<code>ap-northeast-1</code>). Hãy vào Bedrock Console Tokyo để yêu cầu quyền truy cập.</li>
            <li><strong>Lỗi "ValidationException: Guardrail not found":</strong> Guardrail ID chưa khớp hoặc chưa được tạo. Hãy chạy lệnh <code>terraform apply</code> để Terraform hoàn tất việc provisioning module guardrail.</li>
          </ul>

          ${renderPrevNextBar('ws-5-4', '5.4 Triển khai ứng dụng', 'ws-5-6', '5.6 Giám sát & Chi phí')}
        </section>
      </div>

      <!-- MODULE 5.6 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6' ? 'active' : ''}" id="pane-ws-5-6">
        <section class="report-section">
          <h2 class="report-h2">5.6 – Giám sát, bảo mật và chi phí</h2>

          <h3 class="report-h3">1. Mục tiêu học tập</h3>
          <ul class="report-list">
            <li>Cấu hình Amazon CloudWatch Logs theo dõi hoạt động container và phát hiện lỗi hệ thống.</li>
            <li>Thiết lập CloudWatch Alarms và cảnh báo qua Amazon SNS khi CPU/RAM cao hoặc có lỗi 5XX.</li>
            <li>Cấu hình AWS Budgets với hạn mức 10 USD để tự động gửi email cảnh báo khi vượt ngân sách.</li>
            <li>Nắm vững quy trình vận hành demo với script <code>demo-infra.ps1</code> và phân tích chi phí thực tế từ AWS Cost Explorer.</li>
          </ul>

          <h3 class="report-h3">2. Điều kiện chuẩn bị</h3>
          <p class="report-p">Đã hoàn thành bài 5.5. Hệ thống đang hoạt động trên AWS.</p>

          <h3 class="report-h3">3. Các bước thực hành chi tiết</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Cấu hình Email nhận cảnh báo CloudWatch & AWS Budgets</div>
            <p class="report-p">Thiết lập biến môi trường email nhận cảnh báo và cập nhật Terraform:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>cd infra/envs/dev
export TF_VAR_alert_email="your-email@example.com"
terraform apply -auto-approve</code></pre>
            </div>
            <p class="report-p">Sau khi apply, AWS SNS sẽ gửi một bức thư có tiêu đề <em>"AWS Notification - Subscription Confirmation"</em>. Hãy mở hộp thư cá nhân và nhấp vào liên kết <strong>Confirm subscription</strong> để kích hoạt.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Theo dõi Real-Time CloudWatch Logs</div>
            <p class="report-p">Xem luồng nhật ký log thời gian thực của backend Spring Boot trực tiếp từ terminal:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>aws logs tail /ecs/nutrition-dev-backend --follow --region ap-southeast-1</code></pre>
            </div>
            <p class="report-p">Mọi thao tác truy vấn sản phẩm, xác thực JWT Cognito hay gọi Bedrock AI đều được ghi vết rõ ràng tại đây mà không làm lộ các dữ liệu nhạy cảm.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Kiểm tra CloudWatch Alarms</div>
            <p class="report-p">Các chỉ số cảnh báo được khởi tạo sẵn trong Terraform:</p>
            <ul class="report-list">
              <li><strong>ALB 5XX Errors:</strong> Cảnh báo khi tỷ lệ lỗi máy chủ vượt 1% trong 5 phút.</li>
              <li><strong>ECS CPU Utilization:</strong> Cảnh báo khi mức sử dụng CPU của container vượt 80%.</li>
              <li><strong>ECS Memory Utilization:</strong> Cảnh báo khi RAM vượt 85%.</li>
              <li><strong>RDS Free Storage Space:</strong> Cảnh báo khi dung lượng ổ cứng gp3 còn dưới 2 GB.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Vận hành hạ tầng linh hoạt theo buổi Demo</div>
            <p class="report-p">Để tối ưu hóa chi phí và không lãng phí tài nguyên khi không có người sử dụng, hãy sử dụng script tự động hóa:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code># Trước buổi demo (~10-15 phút): Bật RDS và tạo ECS task
powershell -ExecutionPolicy Bypass -File .\scripts\demo-infra.ps1 up

# Sau khi kết thúc buổi demo (~5-10 phút): Dừng RDS và xóa ECS task để ngừng tính phí
powershell -ExecutionPolicy Bypass -File .\scripts\demo-infra.ps1 down</code></pre>
            </div>
            <p class="report-p"><em>Toàn bộ dữ liệu 152 sản phẩm, người dùng Cognito và image ECR vẫn được bảo lưu an toàn 100% giữa các lần bật/tắt.</em></p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Đối chiếu chi phí thực tế (AWS Cost Explorer)</div>
            <p class="report-p">Bảng tổng hợp chi phí thực tế phát sinh trong kỳ phát triển 01–21/11/2026 của nhóm:</p>
            <div class="report-table-wrapper">
              <table class="report-table">
                <thead>
                  <tr>
                    <th>Dịch vụ AWS</th>
                    <th class="text-right">Chi phí thực tế (USD)</th>
                    <th>Nhận xét vận hành</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amazon RDS PostgreSQL (db.t4g.micro)</td>
                    <td class="text-right font-bold">2,77</td>
                    <td>Chạy cơ sở dữ liệu khi demo và lưu trữ 20 GB gp3.</td>
                  </tr>
                  <tr>
                    <td>Application Load Balancer (ALB)</td>
                    <td class="text-right font-bold">1,29</td>
                    <td>Thời gian hoạt động trong các đợt kiểm thử tích hợp.</td>
                  </tr>
                  <tr>
                    <td>Amazon ECS Fargate (0,5 vCPU / 1 GB RAM)</td>
                    <td class="text-right font-bold">1,21</td>
                    <td>Tài nguyên container tính toán thực tế.</td>
                  </tr>
                  <tr>
                    <td>Public IPv4 Address</td>
                    <td class="text-right font-bold">0,74</td>
                    <td>Phí địa chỉ IPv4 công cộng cho task trong public subnet.</td>
                  </tr>
                  <tr>
                    <td>Amazon Bedrock (Nova 2 Lite)</td>
                    <td class="text-right font-bold">0,21</td>
                    <td>Chi phí token gọi AI phân tích ý đồ dinh dưỡng.</td>
                  </tr>
                  <tr>
                    <td>AWS Secrets Manager</td>
                    <td class="text-right font-bold">0,20</td>
                    <td>Phí lưu trữ khóa bí mật hệ thống.</td>
                  </tr>
                  <tr class="total-row">
                    <td>Tổng chi phí phát sinh</td>
                    <td class="text-right">6,44</td>
                    <td>Được bù đắp 100% bằng AWS Credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.6-monitoring/cloudwatch-logs.png',
            'Theo dõi nhật ký container trên Amazon CloudWatch Logs',
            'Màn hình Log streams /ecs/nutrition-dev-backend ghi nhận các request thành công HTTP 200.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.6-monitoring/cloudwatch-alarms.png',
            'Trạng thái các chỉ số cảnh báo CloudWatch Alarms',
            'Danh sách các Alarms hiển thị trạng thái OK xanh lá cây.',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.6-monitoring/aws-budgets.png',
            'Theo dõi ngân sách trên AWS Budgets và Cost Explorer',
            'Báo cáo chi phí thực tế 6,44 USD nằm dưới ngưỡng dự toán 10 USD.',
            true
          )}

          <h3 class="report-h3">4. Kết quả mong đợi & Xác minh</h3>
          <ul class="report-list">
            <li>Đã xác nhận subscription qua email; các chỉ số CloudWatch Alarms ở trạng thái <code>OK</code>.</li>
            <li>Script <code>demo-infra.ps1 down</code> giảm chi phí theo giờ về mức tối thiểu mà không làm mất dữ liệu.</li>
          </ul>

          <h3 class="report-h3">5. Lỗi thường gặp & Cách xử lý</h3>
          <ul class="report-list">
            <li><strong>AWS tự động bật lại RDS sau 7 ngày:</strong> Đây là cơ chế mặc định của AWS RDS đối với instance ở trạng thái stopped. Nếu chưa cần demo tiếp, hãy chạy lại lệnh <code>demo-infra.ps1 down</code> để tiếp tục dừng DB.</li>
          </ul>

          ${renderPrevNextBar('ws-5-5', '5.5 Tích hợp Bedrock', 'ws-5-7', '5.7 Dọn dẹp tài nguyên')}
        </section>
      </div>

      <!-- MODULE 5.7 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-7' ? 'active' : ''}" id="pane-ws-5-7">
        <section class="report-section">
          <h2 class="report-h2">5.7 – Dọn dẹp tài nguyên</h2>

          <h3 class="report-h3">1. Mục tiêu học tập</h3>
          <ul class="report-list">
            <li>Nắm vững quy trình teardown toàn diện, an toàn và đúng thứ tự phụ thuộc tài nguyên.</li>
            <li>Xóa sạch các S3 buckets, RDS database, ECS service, ECR images và Cognito User Pool khi kết thúc khóa học hoặc kỳ thực tập.</li>
            <li>Kiểm tra và xác minh trên AWS Console để đảm bảo không còn tài nguyên chạy ngầm gây phát sinh chi phí bất ngờ.</li>
          </ul>

          <h3 class="report-h3">2. Điều kiện chuẩn bị</h3>
          <p class="report-p">Đã lưu trữ toàn bộ bằng chứng, ảnh chụp và dữ liệu báo cáo nghiệm thu đồ án.</p>

          <h3 class="report-h3">3. Các bước thực hành chi tiết</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Sao lưu Snapshot cơ sở dữ liệu cuối cùng (Tùy chọn)</div>
            <p class="report-p">Nếu bạn muốn lưu trữ lại toàn bộ dữ liệu đơn hàng và sản phẩm phục vụ cho tương lai:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>aws rds create-db-snapshot \
  --db-instance-identifier nutrition-dev-postgres \
  --db-snapshot-identifier nutrition-dev-final-backup \
  --region ap-southeast-1</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Làm rỗng các S3 Buckets</div>
            <p class="report-p">AWS không cho phép xóa các bucket S3 nếu bên trong vẫn còn chứa tệp tin hoặc các version cũ. Hãy làm rỗng nội dung các buckets trước:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code># Lấy danh sách tên bucket từ terraform output
cd infra/envs/dev
FRONTEND_BUCKET=$(terraform output -raw frontend_bucket_name)
IMAGES_BUCKET=$(terraform output -raw images_bucket_name)

# Xóa toàn bộ tệp trong các bucket
aws s3 rm s3://$FRONTEND_BUCKET/ --recursive
aws s3 rm s3://$IMAGES_BUCKET/ --recursive</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Hủy toàn bộ hạ tầng Dev bằng Terraform Destroy</div>
            <p class="report-p">Thực thi lệnh hủy diệt toàn bộ hạ tầng đám mây đã tạo:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>terraform destroy -auto-approve</code></pre>
            </div>
            <p class="report-p">Quá trình này sẽ giải phóng CloudFront distribution, ALB, ECS service/task, RDS instance, ECR repository, Cognito User Pool, VPC và các Security Groups.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Hủy Terraform Bootstrap State Bucket</div>
            <p class="report-p">Xóa nốt S3 bucket lưu trữ state file ở thư mục bootstrap:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Sao chép</button></div>
              <pre><code>cd ../bootstrap
# Lấy tên state bucket và xóa
TF_STATE_BUCKET=$(terraform output -raw state_bucket_name)
aws s3 rm s3://$TF_STATE_BUCKET/ --recursive
terraform destroy -auto-approve</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Kiểm tra xác minh trên AWS Management Console</div>
            <p class="report-p">Đăng nhập AWS Console và kiểm tra lần lượt các dịch vụ tại vùng <strong>Singapore (ap-southeast-1)</strong>:</p>
            <ul class="report-list">
              <li><strong>Amazon ECS:</strong> Clusters rỗng, không còn Task nào chạy ngầm.</li>
              <li><strong>Amazon RDS:</strong> Databases rỗng (chỉ còn final snapshot nếu bạn chủ động giữ lại).</li>
              <li><strong>Amazon EC2:</strong> Load Balancers và Target Groups đã bị xóa; không có Elastic IP nào bị giữ lại mà không gắn vào instance.</li>
              <li><strong>Amazon VPC:</strong> Không còn NAT Gateway nào đang chạy.</li>
              <li><strong>CloudFront:</strong> Distribution đã bị vô hiệu hóa hoặc xóa hoàn toàn.</li>
            </ul>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.7-cleanup/terraform-destroy-success.png',
            'Lệnh Terraform Destroy hoàn tất giải phóng toàn bộ tài nguyên',
            'Màn hình terminal thông báo "Destroy complete! Resources: XX destroyed".',
            true
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.7-cleanup/console-clean-verification.png',
            'Xác minh tài nguyên rỗng trên AWS Management Console',
            'Màn hình RDS và ECS Console hiển thị 0 resources, không còn tài nguyên tính phí.',
            true
          )}

          <h3 class="report-h3">4. Kết quả mong đợi & Xác minh</h3>
          <p class="report-p">Lệnh <code>terraform destroy</code> kết thúc với mã thoát 0; bảng điều khiển AWS Console không còn bất kỳ tài nguyên nào phát sinh chi phí; hóa đơn trên AWS Cost Explorer dừng hoàn toàn.</p>

          <h3 class="report-h3">5. Lỗi thường gặp & Cách xử lý</h3>
          <ul class="report-list">
            <li><strong>Lỗi "RDS instance has deletion protection enabled":</strong> Nếu RDS có bật cờ bảo vệ chống xóa, hãy mở file <code>infra/modules/rds/main.tf</code> sửa <code>deletion_protection = false</code>, chạy <code>terraform apply -auto-approve</code> rồi mới thực hiện <code>terraform destroy</code>.</li>
            <li><strong>Lỗi "BucketNotEmpty":</strong> Vẫn còn đối tượng hoặc delete markers trong S3 bucket. Hãy sử dụng lệnh <code>aws s3api delete-objects</code> hoặc mở S3 Console để chọn nút "Empty bucket".</li>
          </ul>

          ${renderPrevNextBar('ws-5-6', '5.6 Giám sát & Chi phí', '', '')}
        </section>
      </div>
    </div>
  `;
}


function getWorkshopEnHtml() {
  return `
    <div class="tech-report">
      <!-- HEADER -->
      <header>
        <div class="report-eyebrow">Technical Workshop Guide</div>
        <h1 class="report-title">Deploying Personalized Nutrition E-Commerce Platform on AWS</h1>
        <p class="report-subtitle">Hands-on Deployment Guide: Spring Boot 4, React 19, ECS Fargate, RDS PostgreSQL, Bedrock AI & Terraform</p>
        <p class="report-intro">
          A comprehensive step-by-step practical lab guide enabling engineers and students to deploy an end-to-end cloud-native 
          nutrition e-commerce platform on Amazon Web Services. The entire infrastructure is automated via Terraform, running containerized 
          Spring Boot 4 backend on serverless ECS Fargate, managed PostgreSQL on RDS, and generative AI intent parsing with Amazon Bedrock Nova 2 Lite.
        </p>
      </header>

      <!-- NAVIGATION TABS -->
      <nav class="ws-nav-tabs">
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" data-step="ws-5-1" onclick="switchWorkshopTab('ws-5-1')">5.1 Overview</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" data-step="ws-5-2" onclick="switchWorkshopTab('ws-5-2')">5.2 Prerequisites</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" data-step="ws-5-3" onclick="switchWorkshopTab('ws-5-3')">5.3 Core Infra</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" data-step="ws-5-4" onclick="switchWorkshopTab('ws-5-4')">5.4 App Deployment</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" data-step="ws-5-5" onclick="switchWorkshopTab('ws-5-5')">5.5 Bedrock AI</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-6' ? 'active' : ''}" data-step="ws-5-6" onclick="switchWorkshopTab('ws-5-6')">5.6 Monitoring & Cost</button>
        <button type="button" class="ws-tab-btn ${currentWorkshopStepId === 'ws-5-7' ? 'active' : ''}" data-step="ws-5-7" onclick="switchWorkshopTab('ws-5-7')">5.7 Clean-up</button>
      </nav>

            <!-- MODULE 5.1 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-1' ? 'active' : ''}" id="pane-ws-5-1">
        <section class="report-section">
          <h2 class="report-h2">5.1. Workshop Overview</h2>
          
          <h3 class="report-h3" style="margin-top:0;">Building a Personalized Nutrition E-Commerce Platform on AWS</h3>
          <p class="report-p">
            This workshop guides you through deploying a cloud-native nutrition e-commerce platform on AWS using React, Spring Boot, and PostgreSQL, integrated with Amazon Bedrock for natural language food search.
          </p>
          <p class="report-p">
            Learners will practice provisioning infrastructure, deploying application workloads, integrating AI capabilities, monitoring systems, and managing AWS cloud costs.
          </p>

          <h3 class="report-h3">Workshop Objectives</h3>
          <ul class="report-list">
            <li>Understand cloud web application architecture on AWS.</li>
            <li>Deploy frontend, backend, and managed database tiers.</li>
            <li>Integrate Amazon Bedrock for AI-assisted nutritional queries.</li>
            <li>Establish monitoring, security controls, and cost optimization.</li>
          </ul>

          <h3 class="report-h3">Overall Architecture</h3>
          <div class="report-figure" style="margin: 18px 0;">
            <div class="report-figure-img-wrap" onclick="openBlogImageModal('assets/images/proposal/aws-architecture.png', 'Overall Architecture Diagram of Nutrition E-Commerce on AWS')" title="Click to enlarge">
              <img src="assets/images/proposal/aws-architecture.png" alt="Overall Architecture Diagram of Nutrition E-Commerce on AWS" class="report-figure-img" loading="lazy" />
            </div>
            <div class="report-figure-caption"><em>Overall Architecture Diagram of Nutrition E-Commerce on AWS.</em></div>
          </div>
          <p class="report-p">
            The React application is distributed globally via CloudFront and S3. API requests are routed through an Application Load Balancer to Spring Boot on ECS Fargate. PostgreSQL is hosted on Amazon RDS, Cognito manages user authentication, and Amazon Bedrock powers nutritional intent extraction. Core application infrastructure is hosted in Singapore, with Bedrock and Guardrails operating in Tokyo.
          </p>

          <h3 class="report-h3">Workshop Roadmap</h3>
          <ul class="report-list">
            <li><strong>5.2. Prerequisites:</strong> Prepare AWS Account and developer toolchain.</li>
            <li><strong>5.3. Core Infrastructure:</strong> Provision cloud resources using Terraform.</li>
            <li><strong>5.4. Application Deployment:</strong> Deploy React and Spring Boot to AWS.</li>
            <li><strong>5.5. Amazon Bedrock:</strong> Integrate AI conversational nutrition search.</li>
            <li><strong>5.6. Monitoring & Cost:</strong> Configure observability, security, and budgets.</li>
            <li><strong>5.7. Resource Cleanup:</strong> Stop or tear down resources after the workshop.</li>
          </ul>

          <h3 class="report-h3">Expected Outcome</h3>
          <p class="report-p">
            Upon completing this workshop, learners will be capable of deploying, operating, and testing an AI-enabled nutrition e-commerce system on AWS while understanding how to monitor and control cloud expenditures.
          </p>

          ${renderPrevNextBar('', '', 'ws-5-2', '5.2 Prerequisites')}
        </section>
      </div>

            <!-- MODULE 5.2 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-2' ? 'active' : ''}" id="pane-ws-5-2">
        <section class="report-section">
          <h2 class="report-h2">5.2 – Prerequisites & Environment Setup</h2>
          <p class="report-p">
            Before deploying the Nutrition E-Commerce platform on AWS, learners must prepare an AWS account, developer toolchains, IAM access permissions, and a remote storage backend for Terraform State.
          </p>
          <p class="report-p">
            This hands-on lab guides you through environment verification, configuring AWS IAM Identity Center, and bootstrapping the Terraform Backend on Amazon S3.
          </p>

          <h3 class="report-h3">5.2.1. Tooling Preparation</h3>
          <p class="report-p">
            The table below lists the required developer toolchains and runtimes:
          </p>

          <div class="report-table-wrapper">
            <table class="report-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Tool</th>
                  <th style="width: 75%;">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold">AWS Account</td>
                  <td>Permissions to configure required AWS services (VPC, ECS, RDS, IAM, CloudFront, Bedrock)</td>
                </tr>
                <tr>
                  <td class="font-bold">AWS CLI</td>
                  <td>Version 2 (AWS CLI v2.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">Terraform</td>
                  <td>Version ≥ 1.10 (tested with Terraform v1.10.5)</td>
                </tr>
                <tr>
                  <td class="font-bold">Java</td>
                  <td>JDK 21 (Eclipse Temurin or OpenJDK 21)</td>
                </tr>
                <tr>
                  <td class="font-bold">Node.js & npm</td>
                  <td>Compatible with repository (Node.js ≥ 20.x or 22.x LTS, npm ≥ 10.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">Docker</td>
                  <td>Docker Desktop or Docker Engine with multi-platform container build support (<code>linux/arm64</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Git</td>
                  <td>Source code version control (Git ≥ 2.40.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">PowerShell</td>
                  <td>PowerShell 7 or Windows PowerShell for running verification commands and lifecycle scripts on Windows</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="report-h3">5.2.2. Configure AWS Access & IAM</h3>
          <p class="report-p">
            Infrastructure provisioning adheres strictly to the Least Privilege principle with the following IAM components:
          </p>
          <ul class="report-list">
            <li><strong>AWS IAM Identity Center:</strong> Centrally manages user authentication and role assignments to AWS accounts via Single Sign-On (SSO).</li>
            <li><strong>Permission set <code>nutrition-plan</code>:</strong> Attached with AWS managed policy <code>ReadOnlyAccess</code>, used for daily inspection, syntax validation, and planning (<code>terraform plan</code>).</li>
            <li><strong>Permission set <code>nutrition-apply</code>:</strong> Combines <code>ReadOnlyAccess</code> with an inline policy from <code>nutrition-apply-policy.json</code> to apply approved infrastructure changes.</li>
            <li><strong>Policy <code>nutrition-boundary</code>:</strong> Enforces a maximum permission boundary (<code>nutrition-boundary-policy.json</code>) on all IAM roles generated by Terraform (ECS task roles, execution roles, GitHub Actions OIDC roles).</li>
          </ul>

          <p class="report-p">
            <strong>Configuration and Verification Steps (per <code>docs/aws-setup/README.md</code>):</strong>
          </p>
          <ol class="report-list" style="list-style-type: decimal; padding-left: 20px;">
            <li>Log in to the AWS Management Console with administrative privileges (Root or Admin).</li>
            <li>Open <strong>IAM Policies</strong> and create policy <code>nutrition-boundary</code> pasting <code>docs/aws-setup/nutrition-boundary-policy.json</code>. Verify that Access Analyzer reports zero validation errors.</li>
            <li>Open <strong>IAM Identity Center &rarr; Permission sets</strong>:
              <ul style="list-style-type: circle; padding-left: 20px; margin-top: 4px;">
                <li>Create permission set <code>nutrition-plan</code> attaching AWS managed policy <code>ReadOnlyAccess</code>.</li>
                <li>Create permission set <code>nutrition-apply</code> attaching <code>ReadOnlyAccess</code> and pasting <code>docs/aws-setup/nutrition-apply-policy.json</code> into the Inline Policy. Set session duration to 4 hours.</li>
              </ul>
            </li>
            <li>Assign both permission sets to your designated IAM Identity Center user on the target AWS account.</li>
            <li>Verify regional isolation constraints: Core services are restricted to <code>ap-southeast-1</code> (Singapore); CloudFront is global and S3 is restricted to <code>nutrition-*</code> buckets; an exception in <code>ap-northeast-1</code> (Tokyo) is granted exclusively for Amazon Bedrock and Guardrails.</li>
          </ol>

          <p class="report-p" style="font-size: 13.5px; color: #B45309; background: #FFFBEB; padding: 10px 14px; border-left: 3px solid #F59E0B; border-radius: 2px;">
            <strong>Security Notice:</strong> Never attach unrestricted <code>AdministratorAccess</code>. The project enforces an IAM Permission Boundary to cap maximum permissions and prevent unintended privilege escalation.
          </p>

          ${renderEvidenceBox(
            'assets/images/workshop/5.2-prerequisites/iam-permission-sets.png',
            'Figure 5.2.1. Permission Sets in AWS IAM Identity Center',
            'Configuration of nutrition-plan and nutrition-apply permission sets in Identity Center.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.2-prerequisites/iam-permission-boundary.png',
            'Figure 5.2.2. IAM Permission Boundary for Project Roles',
            'The nutrition-boundary policy bounding maximum permissions for application roles.',
            false
          )}

          <h3 class="report-h3">5.2.3. AWS CLI SSO Login</h3>
          <p class="report-p">
            Authenticate your AWS CLI session using the pre-configured SSO session name <code>nutrition</code>:
          </p>

          <div class="code-snippet-wrap">
            <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
            <pre><code>aws sso login --sso-session nutrition</code></pre>
          </div>

          <p class="report-p">
            After completing browser authentication, verify your active identity with profile <code>nutrition-plan</code>:
          </p>

          <div class="code-snippet-wrap">
            <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
            <pre><code>aws sts get-caller-identity --profile nutrition-plan</code></pre>
          </div>

          <p class="report-p">
            <strong>Expected Output:</strong> The command responds with a valid JSON document containing <code>UserId</code>, <code>Account</code>, and <code>Arn</code> corresponding to your permission set. (For security reasons, actual Account IDs and sensitive data are sanitized and omitted from public documentation).
          </p>

          <p class="report-p" style="font-size: 13.5px; color: #475569;">
            <strong>Troubleshooting <code>InvalidGrantException</code>:</strong> This error indicates an expired SSO token session. Re-authenticate by executing <code>aws sso login --sso-session nutrition</code> to obtain a fresh token.
          </p>

          <h3 class="report-h3">5.2.4. Bootstrap Terraform Backend on S3</h3>
          <p class="report-p">
            Terraform State preserves the current state of AWS infrastructure managed by Terraform. The project uses Amazon S3 as a Remote Backend with server-side encryption (SSE-S3 AES256), Versioning enabled, and native state locking via <code>use_lockfile = true</code> (introduced in Terraform 1.10+, eliminating the need for a DynamoDB table).
          </p>

          <p class="report-p">
            Follow the step-by-step instructions from <code>infra/README.md</code>:
          </p>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Initialize Terraform Bootstrap</div>
            <p class="report-p">Navigate to the bootstrap directory and download required providers:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>terraform -chdir=infra/bootstrap init</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Review Terraform Plan</div>
            <p class="report-p">Set the owner variable and save the binary execution plan:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>$env:TF_VAR_owner = "your-name"
terraform -chdir=infra/bootstrap plan -out=tfplan</code></pre>
            </div>
            <p class="report-p" style="font-size: 13.5px; color: #64748B;">
              <em>Review the planned resources carefully to confirm that only intended S3 state bucket components will be created before proceeding to apply.</em>
            </p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Deploy Bootstrap</div>
            <p class="report-p">Switch to the <code>nutrition-apply</code> profile and apply the saved plan:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>$env:AWS_PROFILE = "nutrition-apply"
terraform -chdir=infra/bootstrap apply tfplan</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Retrieve State Bucket Name</div>
            <p class="report-p">Query the created S3 state bucket name from Terraform output:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>terraform -chdir=infra/bootstrap output state_bucket</code></pre>
            </div>
            <p class="report-p">The output displays a unique bucket name formatted as: <code>nutrition-dev-tfstate-&lt;account-id&gt;</code>.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Configure Dev Environment Backend</div>
            <p class="report-p">Copy the backend template file from the dev environment folder and populate the bucket name:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>cp infra/envs/dev/backend.hcl.example infra/envs/dev/backend.hcl</code></pre>
            </div>
            <p class="report-p">Configured content inside <code>infra/envs/dev/backend.hcl</code>:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>bucket = "nutrition-dev-tfstate-&lt;account-id&gt;"</code></pre>
            </div>
          </div>

          <p class="report-p">
            <strong>Key S3 Remote Backend Features:</strong>
          </p>
          <ul class="report-list">
            <li>Terraform State is stored securely with server-side encryption (SSE-S3 AES256) and TLS enforcement.</li>
            <li><code>use_lockfile = true</code> provides robust native state locking directly on S3 objects, preventing concurrent write collisions.</li>
            <li>The bucket is protected by <code>prevent_destroy = true</code> in the bootstrap definition to guard against accidental removal.</li>
          </ul>

          <p class="report-p" style="font-size: 13.5px; color: #1E293B; background: #F1F5F9; padding: 12px 14px; border-left: 3px solid #3B82F6; border-radius: 2px;">
            <strong>AWS Budgets Advisory:</strong> Prior to deploying chargeable resources, learners should configure budget alert thresholds in AWS Budgets. The team project adheres to a 100 USD benchmark limit. Detailed step-by-step setup, email alerts, and screenshot evidence are covered in <strong>Module 5.6 – Monitoring, Security & Cost</strong>. Note that the bootstrap module does not automatically create AWS Budgets.
          </p>

          ${renderEvidenceBox(
            'assets/images/workshop/5.2-prerequisites/terraform-state-s3.png',
            'Figure 5.2.3. Amazon S3 Bucket for Terraform State',
            'S3 bucket nutrition-dev-tfstate with SSE-S3 encryption and use_lockfile native locking.',
            false
          )}

          <h3 class="report-h3">5.2.5. Results Verification</h3>
          <p class="report-p">
            Verify the following checklist before proceeding to infrastructure provisioning:
          </p>
          <ul class="report-list">
            <li>&#10003; AWS CLI successfully authenticated via SSO with return exit code 0.</li>
            <li>&#10003; Profiles <code>nutrition-plan</code> and <code>nutrition-apply</code> configured correctly in AWS config.</li>
            <li>&#10003; The <code>nutrition-boundary</code> policy exists and passes IAM Policy Validation.</li>
            <li>&#10003; Terraform Bootstrap initialized and applied without permission errors.</li>
            <li>&#10003; S3 Remote State bucket created in Singapore (<code>ap-southeast-1</code>) with encryption and public access blocks.</li>
            <li>&#10003; Configuration in <code>infra/envs/dev/backend.hcl</code> correctly matches the actual state bucket name.</li>
            <li>&#10003; No sensitive access keys or real account IDs are committed to version control.</li>
          </ul>

          <h3 class="report-h3">5.2.6. Common Errors & Troubleshooting</h3>
          <ul class="report-list">
            <li>
              <strong>Expired AWS SSO Session (<code>InvalidGrantException</code> / <code>ExpiredToken</code>):</strong>
              Re-authenticate by running <code>aws sso login --sso-session nutrition</code> to refresh your temporary session token.
            </li>
            <li>
              <strong>Terraform State Lock:</strong>
              If state locking errors occur due to an aborted execution, verify that no other terraform processes are active. Only execute <code>terraform force-unlock &lt;LOCK-ID&gt;</code> after ensuring safety and proper permissions. Never manually delete the state bucket or state file.
            </li>
            <li>
              <strong>Insufficient AWS Permissions (<code>AccessDeniedException</code>):</strong>
              Check your current active profile via <code>$env:AWS_PROFILE</code> to ensure it is set to <code>nutrition-apply</code>. Compare the missing permissions against <code>docs/aws-setup/README.md</code>; never grant full <code>AdministratorAccess</code> as a workaround.
            </li>
          </ul>

          ${renderPrevNextBar('ws-5-1', '5.1 Workshop Overview', 'ws-5-3', '5.3 Core Infrastructure')}
        </section>
      </div>

            <!-- MODULE 5.3 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-3' ? 'active' : ''}" id="pane-ws-5-3">
        <section class="report-section">
          <h2 class="report-h2">5.3 – Core Infrastructure</h2>
          <p class="report-p">
            This hands-on lab guides you through provisioning the VPC network, Amazon RDS PostgreSQL database, and Amazon Cognito authentication service using Terraform. These components provide the foundational infrastructure required for deploying the Spring Boot backend in subsequent steps.
          </p>

          <!-- 5.3.1. VPC NETWORKING -->
          <h3 class="report-h3">5.3.1. VPC Networking</h3>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">A. Learning Objectives</h4>
          <p class="report-p">
            Deploy segmented network infrastructure for backend services and databases, ensuring Application Load Balancer (ALB), ECS Fargate, and RDS operate within appropriate network boundaries while eliminating NAT Gateway costs.
          </p>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">B. Network Architecture</h4>
          <p class="report-p">
            According to project architectural decisions (D15 & D19), the network comprises:
          </p>
          <ul class="report-list">
            <li>One VPC in Singapore (<code>ap-southeast-1</code>), with default CIDR <code>10.0.0.0/16</code> spanned across 2 Availability Zones.</li>
            <li>Two Public Subnets (<code>10.0.0.0/24</code> and <code>10.0.1.0/24</code>) hosting the ALB and ECS Fargate container tasks.</li>
            <li>Two Private Database Subnets (<code>10.0.100.0/24</code> and <code>10.0.101.0/24</code>) dedicated to Amazon RDS with zero direct Internet routing.</li>
            <li>An Internet Gateway (IGW) attached to the VPC.</li>
            <li>Route Tables: Public route table directs <code>0.0.0.0/0</code> to IGW; database route table restricts traffic strictly to internal VPC CIDRs.</li>
            <li><strong>S3 Gateway Endpoint:</strong> Enables ECS tasks to transfer product media with Amazon S3 over AWS internal network at zero hourly cost, bypassing the Internet Gateway.</li>
            <li><strong>CloudFront Origin-Facing Managed Prefix List:</strong> Restricts ALB ingress exclusively to CloudFront CDN origin-facing IP ranges.</li>
          </ul>

          <p class="report-p">
            <strong>Three-Tier Security Group Isolation:</strong>
          </p>
          <ul class="report-list">
            <li><strong>ALB Security Group (<code>nutrition-dev-alb</code>):</strong> Ingress accepts HTTP (port 80) only from CloudFront Managed Prefix List; Egress forwards traffic only to ECS tasks on port <code>8080</code>.</li>
            <li><strong>ECS Security Group (<code>nutrition-dev-ecs</code>):</strong> Ingress accepts application traffic (port <code>8080</code>) only from ALB SG; Egress allows port <code>5432</code> to RDS SG and HTTPS (port <code>443</code>) outbound to AWS APIs (ECR, Bedrock, Cognito JWKS, CloudWatch).</li>
            <li><strong>RDS Security Group (<code>nutrition-dev-rds</code>):</strong> Ingress permits PostgreSQL traffic (port <code>5432</code>) strictly from ECS SG; direct Internet ingress is completely forbidden.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">C. Step-by-Step Implementation</h4>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Review Terraform Network Configuration</div>
            <p class="report-p">Inspect <code>infra/modules/network/main.tf</code> to review CloudFront prefix list and S3 gateway endpoint definitions:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>data "aws_ec2_managed_prefix_list" "cloudfront" {
  name = "com.amazonaws.global.cloudfront.origin-facing"
}</code></pre>
            </div>
            <p class="report-p">This ensures ALB only accepts incoming requests originating from CloudFront edge distributions.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Review Terraform Variables</div>
            <p class="report-p">Verify parameters passed into module network from <code>infra/envs/dev/main.tf</code>:</p>
            <ul class="report-list">
              <li><code>name_prefix = "nutrition-dev"</code>: Unified naming prefix.</li>
              <li><code>enable_nat = false</code>: Disables NAT Gateway by default to prevent hourly billing (~$32/month). ECS tasks assign public IPs in public subnets to communicate outbound with AWS APIs.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Generate and Review Terraform Plan</div>
            <p class="report-p">Authenticate with profile <code>nutrition-plan</code> and generate an execution plan:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>$env:AWS_PROFILE = "nutrition-plan"
terraform -chdir=infra/envs/dev init
terraform -chdir=infra/envs/dev plan -var="app_running=false" -out=tfplan</code></pre>
            </div>
            <p class="report-p" style="font-size: 13.5px; color: #64748B;">
              <em>Review the staged resources: 1 VPC, 4 Subnets, 1 Internet Gateway, 2 Route Tables, 3 Security Groups, and 1 S3 Gateway Endpoint.</em>
            </p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Apply Core Infrastructure</div>
            <p class="report-p">Switch to profile <code>nutrition-apply</code> and apply the plan:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>$env:AWS_PROFILE = "nutrition-apply"
terraform -chdir=infra/envs/dev apply tfplan</code></pre>
            </div>
            <p class="report-p" style="font-size: 13.5px; color: #1E293B; background: #F1F5F9; padding: 10px 14px; border-left: 3px solid #3B82F6; border-radius: 2px;">
              <strong>Architecture Note:</strong> The dev root module simultaneously provisions network, RDS, and Cognito in an idle state (<code>app_running = false</code>). Do not use <code>-target</code> flags as this can disrupt Terraform state dependency graphs.
            </p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Verify Resources in AWS Console</div>
            <p class="report-p">Sign in to AWS Console and navigate to <strong>VPC &rarr; Your VPCs</strong>:</p>
            <ul class="report-list">
              <li>Confirm VPC <code>nutrition-dev-vpc</code> exists with CIDR <code>10.0.0.0/16</code>.</li>
              <li>Confirm 2 Public Subnets and 2 Private DB Subnets across 2 Availability Zones.</li>
              <li>Confirm Internet Gateway attached to the VPC.</li>
              <li>Verify DB route table contains no routes toward <code>0.0.0.0/0</code>.</li>
              <li>Verify the 3 Security Groups: <code>nutrition-dev-alb</code>, <code>nutrition-dev-ecs</code>, and <code>nutrition-dev-rds</code>.</li>
              <li>Confirm S3 Gateway Endpoint status is <strong>Available</strong>.</li>
            </ul>
          </div>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">D. Evidence Screenshots</h4>

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/vpc-resource-map.png',
            'Figure 5.3.1.1. VPC Resource Map',
            'AWS VPC console displaying VPC CIDR, subnets, and routing table associations.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/vpc-security-groups.png',
            'Figure 5.3.1.2. System Security Groups',
            'Ingress and egress rules for ALB, ECS, and RDS security groups.',
            false
          )}

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">E. Results Verification</h4>
          <ul class="report-list">
            <li>&#10003; VPC and subnets deployed across 2 Availability Zones.</li>
            <li>&#10003; ALB and ECS enforce proper security group isolation and designated ports.</li>
            <li>&#10003; RDS allows PostgreSQL connections exclusively from ECS tasks.</li>
            <li>&#10003; Route tables strictly separate public and database tiers.</li>
            <li>&#10003; S3 Gateway Endpoint status is Available.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">F. Security Notice</h4>
          <p class="report-p" style="font-size: 13.5px; color: #64748B;">
            <em>Never include real AWS Account IDs, sensitive IPs, or internal secrets in public documentation or screenshots.</em>
          </p>

          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />

          <!-- 5.3.2. AMAZON RDS DATABASE -->
          <h3 class="report-h3">5.3.2. Amazon RDS PostgreSQL Database</h3>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">A. Learning Objectives</h4>
          <p class="report-p">
            Provision PostgreSQL 17 on Amazon RDS, enforce zero public exposure, and automate database schema evolution using Flyway migrations.
          </p>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">B. Database Specifications</h4>
          <p class="report-p">
            Amazon RDS PostgreSQL configuration parameters in the dev environment:
          </p>

          <div class="report-table-wrapper">
            <table class="report-table">
              <thead>
                <tr>
                  <th style="width: 30%;">Property</th>
                  <th style="width: 70%;">Configured Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold">Service</td>
                  <td>Amazon RDS for PostgreSQL (Engine version 17.x)</td>
                </tr>
                <tr>
                  <td class="font-bold">Instance Class</td>
                  <td><code>db.t4g.micro</code> (AWS Graviton2 ARM architecture, cost-optimized)</td>
                </tr>
                <tr>
                  <td class="font-bold">Storage</td>
                  <td>20 GB gp3 (Autoscaling up to 100 GB)</td>
                </tr>
                <tr>
                  <td class="font-bold">Availability</td>
                  <td>Single-AZ (default for demo savings, supports Multi-AZ via <code>rds_multi_az</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Subnet Group</td>
                  <td>Private database subnets (<code>nutrition-dev-db</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Public Access</td>
                  <td>Disabled (<code>publicly_accessible = false</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Encryption</td>
                  <td>Enabled with AWS KMS (<code>storage_encrypted = true</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Credential Management</td>
                  <td>AWS Secrets Manager managed password (<code>manage_master_user_password = true</code>)</td>
                </tr>
                <tr>
                  <td class="font-bold">Schema Migration</td>
                  <td>Flyway migrations V1–V11 executed by Spring Boot</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="report-p">
            <strong>Key Security Properties:</strong>
          </p>
          <ul class="report-list">
            <li>RDS cannot be reached from the Internet, preventing public exposure and credential attacks.</li>
            <li>Security Group accepts inbound traffic on PostgreSQL port (<code>5432</code>) exclusively from <code>nutrition-dev-ecs</code> tasks.</li>
            <li>Master password is generated and rotated automatically by Secrets Manager, never stored as plaintext in code or tfstate.</li>
            <li>Flyway guarantees deterministic, versioned schema state.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">C. Step-by-Step Implementation</h4>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Review Terraform RDS Module</div>
            <p class="report-p">Inspect <code>infra/modules/rds/main.tf</code> for essential security directives:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>manage_master_user_password = true

db_subnet_group_name   = aws_db_subnet_group.main.name
vpc_security_group_ids = [var.security_group_id]
publicly_accessible    = false
multi_az               = var.multi_az</code></pre>
            </div>
            <p class="report-p"><code>manage_master_user_password = true</code> delegates database credentials to Secrets Manager directly.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Verify DB Subnet Group and Security Group</div>
            <p class="report-p">Ensure <code>aws_db_subnet_group.main</code> binds the 2 private DB subnets and attaches the RDS security group from the network module.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Deploy via Terraform</div>
            <p class="report-p">RDS PostgreSQL was provisioned during the root apply step in Lab 5.3.1. Initialization typically takes 5–8 minutes.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Inspect RDS in AWS Console</div>
            <p class="report-p">Navigate to <strong>Amazon RDS &rarr; Databases</strong> and select <code>nutrition-dev-postgres</code>:</p>
            <ul class="report-list">
              <li>Status: <strong>Available</strong> (when app is running) or <strong>Stopped</strong> (during idle demo periods).</li>
              <li>Engine version: PostgreSQL 17.x.</li>
              <li>Instance: <code>db.t4g.micro</code> | Storage: 20 GB gp3.</li>
              <li>Multi-AZ: No (Single-AZ).</li>
              <li>Public access: <strong>No</strong>.</li>
              <li>Security Group: <code>nutrition-dev-rds</code>.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Verify Secrets Manager Metadata</div>
            <p class="report-p">Navigate to <strong>AWS Secrets Manager</strong> and verify the managed secret matching <code>rds!db-...</code>. Do not open or reveal the plaintext secret value.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">6</span> Review Flyway Migration Structure</div>
            <p class="report-p">Inspect <code>backend/src/main/resources/db/migration/</code> for SQL migration files V1 through V11:</p>
            <ul class="report-list">
              <li><code>V1__catalog.sql</code>: Categories, products, and allergens tables.</li>
              <li><code>V3__commerce.sql</code>: Orders, order items, and shopping cart tables.</li>
              <li><code>V4__chat_usage.sql</code>: Chatbot usage limits table.</li>
              <li><code>V5__product_images.sql</code>: Product image S3 keys.</li>
              <li><code>V6–V8</code>: Expanded allergens and Vietnamese unaccent search.</li>
              <li><code>V9__payments.sql</code>: Payment transaction entities.</li>
              <li><code>V10__payment_events.sql</code>: Idempotent payment webhook events.</li>
              <li><code>V11__nutrition_profiles.sql</code>: Personalized user nutrition profiles.</li>
            </ul>
            <p class="report-p">When backend tasks launch on ECS, Flyway reads <code>flyway_schema_history</code> and automatically applies pending migrations.</p>
          </div>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">D. Evidence Screenshots</h4>

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/rds-configuration.png',
            'Figure 5.3.2.1. Amazon RDS PostgreSQL Configuration',
            'RDS dashboard displaying PostgreSQL 17, db.t4g.micro instance class, and encryption status.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/rds-connectivity.png',
            'Figure 5.3.2.2. RDS Connectivity & Security',
            'Private subnet group binding, security group isolation, and disabled public accessibility.',
            false
          )}

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">E. Results Verification</h4>
          <ul class="report-list">
            <li>&#10003; RDS PostgreSQL 17 provisioned with instance class <code>db.t4g.micro</code>.</li>
            <li>&#10003; Public access is disabled.</li>
            <li>&#10003; Storage encryption with AWS KMS is active.</li>
            <li>&#10003; Port 5432 ingress permitted strictly from ECS security group.</li>
            <li>&#10003; Flyway migrations ready to execute upon application startup.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">F. Common Issues & Operational Runbook</h4>
          <p class="report-p">
            <strong>Terraform cannot resume stopped RDS instances:</strong> The AWS RDS API prevents Terraform from transitioning an instance from <code>stopped</code> to <code>available</code> during standard apply calls.
          </p>
          <p class="report-p">
            <strong>Operational Solution (per <code>docs/runbook.md</code>):</strong> Use the automated lifecycle script:
          </p>
          <div class="code-snippet-wrap">
            <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
            <pre><code>powershell -ExecutionPolicy Bypass -File .\scripts\demo-infra.ps1 up</code></pre>
          </div>
          <p class="report-p" style="font-size: 13.5px; color: #64748B;">
            <em>The script invokes AWS CLI to start the RDS instance, awaits Available state, and then invokes Terraform apply.</em>
          </p>

          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />

          <!-- 5.3.3. AMAZON COGNITO -->
          <h3 class="report-h3">5.3.3. Amazon Cognito Authentication</h3>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">A. Learning Objectives</h4>
          <p class="report-p">
            Provision a centralized user authentication system, issue JWT tokens, and enforce Role-Based Access Control (RBAC).
          </p>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">B. Cognito Architecture</h4>
          <p class="report-p">
            According to system security architecture:
          </p>
          <ul class="report-list">
            <li><strong>User Pool (<code>nutrition-dev-users</code>):</strong> Email-based user identification, automated verification email dispatch, and strong password enforcement (8+ chars, uppercase, lowercase, numbers, symbols).</li>
            <li><strong>App Client (<code>nutrition-dev-spa</code>):</strong> Designed for Single Page Applications (React SPA) with <code>generate_secret = false</code> because browser clients cannot securely hold secret keys.</li>
            <li><strong>Authentication Flows:</strong> Utilizes Secure Remote Password protocol (<code>ALLOW_USER_SRP_AUTH</code>) and refresh tokens (<code>ALLOW_REFRESH_TOKEN_AUTH</code>). Does not use Cognito Hosted UI, opting for embedded React authentication screens.</li>
            <li><strong>User Groups:</strong> Two pre-configured groups: <code>USER</code> (customers) and <code>ADMIN</code> (store administrators).</li>
            <li><strong>Backend JWT Verification:</strong> Spring Boot Resource Server verifies JWT cryptographic signatures against Cognito JWKS, extracting user identity from claim <code>sub</code> and authorities from claim <code>cognito:groups</code>.</li>
          </ul>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">C. Step-by-Step Implementation</h4>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Review Cognito Terraform Module</div>
            <p class="report-p">Inspect <code>infra/modules/cognito/main.tf</code> for User Pool, App Client, and recovery settings:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>resource "aws_cognito_user_pool_client" "spa" {
  name            = "\${var.name_prefix}-spa"
  user_pool_id    = aws_cognito_user_pool.users.id
  generate_secret = false

  explicit_auth_flows = [
    "ALLOW_USER_SRP_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_ADMIN_USER_PASSWORD_AUTH",
  ]
}</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Review USER and ADMIN User Groups</div>
            <p class="report-p">Verify user group definitions in <code>infra/modules/cognito/main.tf</code>:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>HCL</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>resource "aws_cognito_user_group" "admin" {
  name         = "ADMIN"
  user_pool_id = aws_cognito_user_pool.users.id
}

resource "aws_cognito_user_group" "user" {
  name         = "USER"
  user_pool_id = aws_cognito_user_pool.users.id
}</code></pre>
            </div>
            <p class="report-p">Registered users belong to <code>USER</code>. Only users assigned to <code>ADMIN</code> are granted access to administrative order and catalog endpoints.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Deploy Cognito Module</div>
            <p class="report-p">Cognito is managed as code and provisioned during the root apply step. Do not manually create user pools in the AWS Console to avoid state drift.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Inspect Cognito in AWS Console</div>
            <p class="report-p">Navigate to <strong>Amazon Cognito &rarr; User pools</strong> and select <code>nutrition-dev-users</code>:</p>
            <ul class="report-list">
              <li>Verify User Pool ID prefix: <code>ap-southeast-1_...</code>.</li>
              <li>Under <strong>App integration &rarr; App clients</strong>: Verify client <code>nutrition-dev-spa</code> with <em>No client secret</em>.</li>
              <li>Under <strong>Groups</strong>: Verify <code>ADMIN</code> and <code>USER</code> groups exist.</li>
            </ul>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Verify API Authorization Enforcement (per docs/demo.md)</div>
            <p class="report-p">Verify backend Spring Boot RBAC enforcement against incoming API calls:</p>
            <ul class="report-list">
              <li><strong>Unauthenticated Requests:</strong> Calling protected endpoints without an <code>Authorization: Bearer &lt;token&gt;</code> header responds with <code>HTTP 401 Unauthorized</code>.</li>
              <li><strong>Standard User accessing Admin API:</strong> A user in group <code>USER</code> attempting to access <code>/api/admin/**</code> triggers a claim inspection on <code>cognito:groups</code> and responds with <code>HTTP 403 Forbidden</code>.</li>
              <li><strong>Admin User:</strong> Validated successfully and granted administrative permissions.</li>
            </ul>
          </div>

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">D. Evidence Screenshots</h4>

          ${renderEvidenceBox(
            'assets/images/workshop/5.3-core-infra/cognito-user-groups.png',
            'Figure 5.3.3.1. USER and ADMIN Groups in Amazon Cognito',
            'AWS Cognito console displaying configured user pool groups.',
            false
          )}

          <h4 class="report-h4" style="margin-top: 14px; font-size: 15px; font-weight: 600; color: #1E293B;">E. Results Verification</h4>
          <ul class="report-list">
            <li>&#10003; Cognito User Pool and SPA Client provisioned.</li>
            <li>&#10003; Client Secret disabled for browser client security.</li>
            <li>&#10003; <code>USER</code> and <code>ADMIN</code> groups created.</li>
            <li>&#10003; JWT tokens validated by backend with HTTP 401 / 403 access control.</li>
          </ul>

          ${renderPrevNextBar('ws-5-2', '5.2 Prerequisites', 'ws-5-4', '5.4 App Deployment')}
        </section>
      </div>

      <!-- MODULE 5.4 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-4' ? 'active' : ''}" id="pane-ws-5-4">
        <section class="report-section">
          <h2 class="report-h2">5.4 – Application Deployment</h2>

          <h3 class="report-h3">1. Learning Objectives</h3>
          <ul class="report-list">
            <li>Package Spring Boot 4 into an ARM64-optimized Docker container image.</li>
            <li>Authenticate with Amazon ECR and push the backend container image.</li>
            <li>Deploy the ECS Fargate service with 1 active task wired to the ALB.</li>
            <li>Compile the React 19 frontend and synchronize assets to Amazon S3 / CloudFront.</li>
          </ul>

          <h3 class="report-h3">2. Prerequisites</h3>
          <p class="report-p">Completed Lab 5.3 (infrastructure outputs available).</p>

          <h3 class="report-h3">3. Step-by-Step Practical Steps</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Package Spring Boot Backend & Push to ECR</div>
            <p class="report-p">Compile the JAR file and build the linux/arm64 Docker image:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code># 1. Build JAR package
cd backend
./mvnw clean package -DskipTests

# 2. Extract ECR URL
cd ../infra/envs/dev
ECR_URL=$(terraform output -raw ecr_repository_url)
cd ../../../backend

# 3. Authenticate Docker with ECR
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin $ECR_URL

# 4. Build ARM64 Docker container image
docker build --platform linux/arm64 -t $ECR_URL:latest .

# 5. Push image to Amazon ECR
docker push $ECR_URL:latest</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Start ECS Service & Launch Active Task</div>
            <p class="report-p">Apply Terraform with <code>app_running=true</code> to spin up the ALB and ECS Fargate task:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>cd ../infra/envs/dev
terraform apply -var="app_running=true" -var="api_desired_count=1" -auto-approve</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Build & Deploy React Frontend to S3</div>
            <p class="report-p">Build the React SPA bundle and invalidate the CloudFront edge cache:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>cd ../../../frontend
npm install
npm run build

cd ../infra/envs/dev
FRONTEND_BUCKET=$(terraform output -raw frontend_bucket_name)
DIST_ID=$(terraform output -raw cloudfront_distribution_id)
cd ../../../frontend

aws s3 sync dist/ s3://$FRONTEND_BUCKET/ --delete
aws cloudfront create-invalidation --distribution-id $DIST_ID --paths "/*"</code></pre>
            </div>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.4-deployment/ecr-image-push.png',
            'Backend Image Pushed to Amazon ECR',
            'ECR Console displaying the pushed container image with latest tag and scan results.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.4-deployment/ecs-task-running.png',
            'ECS Fargate Task in RUNNING State',
            'ECS Console displaying 1 healthy running container task in nutrition-dev-cluster.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.4-deployment/cloudfront-app-live.png',
            'Live Application on CloudFront Domain',
            'Browser viewing the live React e-commerce application with 152 USDA products.',
            false
          )}

          <h3 class="report-h3">4. Verification & Expected Output</h3>
          <ul class="report-list">
            <li>Navigating to <code>https://&lt;cloudfront_domain&gt;/</code> displays the storefront.</li>
            <li>Backend Actuator health check returns healthy:
              <div class="code-snippet-wrap">
                <div class="code-snippet-header"><span>Health Check</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
                <pre><code>curl -s https://<cloudfront_domain>/api/actuator/health
# Returns: {"status":"UP"}</code></pre>
              </div>
            </li>
          </ul>

          <h3 class="report-h3">5. Common Errors & Troubleshooting</h3>
          <ul class="report-list">
            <li><strong>Login Denied on ECR:</strong> The ECR authorization token expires after 12 hours. Refresh token via <code>aws ecr get-login-password</code>.</li>
            <li><strong>ECS Task Exits with Crash:</strong> Check CloudWatch Log Group <code>/ecs/nutrition-dev-backend</code> for database connectivity issues.</li>
          </ul>

          ${renderPrevNextBar('ws-5-3', '5.3 Core Infra', 'ws-5-5', '5.5 Bedrock AI')}
        </section>
      </div>

      <!-- MODULE 5.5 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-5' ? 'active' : ''}" id="pane-ws-5-5">
        <section class="report-section">
          <h2 class="report-h2">5.5 – Amazon Bedrock Integration</h2>

          <h3 class="report-h3">1. Learning Objectives</h3>
          <ul class="report-list">
            <li>Request model access for Amazon Nova 2 Lite in Tokyo (<code>ap-northeast-1</code>).</li>
            <li>Configure Bedrock Guardrails to mitigate prompt injection and medical diagnostic queries.</li>
            <li>Validate the end-to-end AI intent parsing and PostgreSQL SQL lookup workflow.</li>
          </ul>

          <h3 class="report-h3">2. Prerequisites</h3>
          <p class="report-p">Completed Lab 5.4. Active AWS credentials with Bedrock access in Asia Pacific (Tokyo).</p>

          <h3 class="report-h3">3. Step-by-Step Practical Steps</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Enable Model Access in Tokyo (ap-northeast-1)</div>
            <p class="report-p">In the AWS Management Console, switch your region to <strong>Tokyo (ap-northeast-1)</strong>:</p>
            <ol class="report-list">
              <li>Open <strong>Amazon Bedrock</strong> → Click <strong>Model access</strong>.</li>
              <li>Click <strong>Modify model access</strong>.</li>
              <li>Locate provider <strong>Amazon</strong> and select <strong>Amazon Nova 2 Lite</strong> (or inference profile <code>jp.amazon.nova-lite-v1:0</code>).</li>
              <li>Click <strong>Next</strong> and <strong>Submit</strong> to finalize access approval.</li>
            </ol>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Configure Guardrails via Terraform</div>
            <p class="report-p">Verify Guardrail variables in <code>infra/envs/dev/terraform.tfvars</code>:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>terraform.tfvars</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>bedrock_region               = "ap-northeast-1"
bedrock_model_id             = "amazon.nova-lite-v1:0"
bedrock_inference_profile_id = "jp.amazon.nova-lite-v1:0"
guardrail_tier               = "STANDARD"</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Test AI Nutrition Intent Query API</div>
            <p class="report-p">Execute a test cURL request to verify conversational parameter extraction:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>curl -X POST "https://<cloudfront_domain>/api/ai/nutrition-lookup" \
  -H "Content-Type: application/json" \
  -d '{"query": "find dinner under 450 calories with over 30g protein and gluten free"}'</code></pre>
            </div>
            <p class="report-p">Expected JSON response containing verified USDA food items matching criteria:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Response JSON</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>{
  "intent": "FIND_FOOD",
  "extractedFilters": {
    "maxCalories": 450,
    "minProtein": 30,
    "excludedAllergens": ["GLUTEN"]
  },
  "products": [
    {
      "id": 18,
      "name": "Grilled Chicken Breast with Steamed Asparagus",
      "calories": 310,
      "protein": 36.5,
      "carbohydrates": 3.8,
      "fat": 4.5,
      "allergens": []
    }
  ]
}</code></pre>
            </div>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.5-bedrock/bedrock-model-access.png',
            'Amazon Nova 2 Lite Model Access in Tokyo',
            'AWS Bedrock Console displaying Access granted for Amazon Nova 2 Lite.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.5-bedrock/bedrock-guardrail.png',
            'Bedrock Guardrail Safety Filters Configuration',
            'Bedrock Guardrails Console displaying content filtering and topic deny policies.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.5-bedrock/ai-lookup-test.png',
            'AI Nutrition Lookup API Response',
            'Terminal / Postman screenshot displaying the structured JSON payload.',
            false
          )}

          <h3 class="report-h3">4. Verification & Expected Output</h3>
          <p class="report-p">AI extracts search parameters cleanly; backend returns verified PostgreSQL items; clinical advice queries are intercepted by Guardrails.</p>

          <h3 class="report-h3">5. Common Errors & Troubleshooting</h3>
          <ul class="report-list">
            <li><strong>AccessDeniedException:</strong> Model access was not granted in Tokyo (<code>ap-northeast-1</code>). Request model access in the Bedrock Console.</li>
          </ul>

          ${renderPrevNextBar('ws-5-4', '5.4 App Deployment', 'ws-5-6', '5.6 Monitoring & Cost')}
        </section>
      </div>

      <!-- MODULE 5.6 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-6' ? 'active' : ''}" id="pane-ws-5-6">
        <section class="report-section">
          <h2 class="report-h2">5.6 – Monitoring, Security & Cost Management</h2>

          <h3 class="report-h3">1. Learning Objectives</h3>
          <ul class="report-list">
            <li>Stream and inspect live container logs with Amazon CloudWatch Logs.</li>
            <li>Configure metric alarms and email notifications via Amazon SNS.</li>
            <li>Enforce budget guardrails using AWS Budgets ($10 threshold).</li>
            <li>Operate the demo lifecycle script <code>demo-infra.ps1</code> and reconcile empirical costs from AWS Cost Explorer.</li>
          </ul>

          <h3 class="report-h3">2. Prerequisites</h3>
          <p class="report-p">Completed Lab 5.5. Live application on AWS.</p>

          <h3 class="report-h3">3. Step-by-Step Practical Steps</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Configure Alert Email for CloudWatch & Budgets</div>
            <p class="report-p">Set your notification email and apply Terraform configuration:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>cd infra/envs/dev
export TF_VAR_alert_email="your-email@example.com"
terraform apply -auto-approve</code></pre>
            </div>
            <p class="report-p">Check your email inbox for <em>"AWS Notification - Subscription Confirmation"</em> and click <strong>Confirm subscription</strong>.</p>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Inspect Real-Time CloudWatch Logs</div>
            <p class="report-p">Tail live container logs from your terminal:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>aws logs tail /ecs/nutrition-dev-backend --follow --region ap-southeast-1</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Operate the Automated Demo Lifecycle Script</div>
            <p class="report-p">Control active compute costs using the demo script:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>PowerShell</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code># Before presentation (~10-15 mins): Spin up RDS & ECS tasks
powershell -ExecutionPolicy Bypass -File .\scripts\demo-infra.ps1 up

# After presentation (~5-10 mins): Stop RDS & destroy ECS tasks to cease hourly compute fees
powershell -ExecutionPolicy Bypass -File .\scripts\demo-infra.ps1 down</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Empirical AWS Cost Explorer Spending Summary</div>
            <p class="report-p">Active development spend from Nov 01 to Nov 21, 2026:</p>
            <div class="report-table-wrapper">
              <table class="report-table">
                <thead>
                  <tr>
                    <th>AWS Service</th>
                    <th class="text-right">Actual Cost (USD)</th>
                    <th>Operational Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amazon RDS PostgreSQL (db.t4g.micro)</td>
                    <td class="text-right font-bold">2.77</td>
                    <td>Instance hours during demo + 20 GB gp3 storage.</td>
                  </tr>
                  <tr>
                    <td>Application Load Balancer (ALB)</td>
                    <td class="text-right font-bold">1.29</td>
                    <td>Active load balancer hours during integration testing.</td>
                  </tr>
                  <tr>
                    <td>Amazon ECS Fargate (0.5 vCPU / 1 GB RAM)</td>
                    <td class="text-right font-bold">1.21</td>
                    <td>Serverless container compute runtime.</td>
                  </tr>
                  <tr>
                    <td>Public IPv4 Address</td>
                    <td class="text-right font-bold">0.74</td>
                    <td>Public IPv4 allocation fees for task in public subnet.</td>
                  </tr>
                  <tr>
                    <td>Amazon Bedrock (Nova 2 Lite)</td>
                    <td class="text-right font-bold">0.21</td>
                    <td>Token usage for conversational intent extraction.</td>
                  </tr>
                  <tr>
                    <td>AWS Secrets Manager</td>
                    <td class="text-right font-bold">0.20</td>
                    <td>Encrypted credential vault storage and lookups.</td>
                  </tr>
                  <tr class="total-row">
                    <td>Total Actual Spend</td>
                    <td class="text-right">6.44</td>
                    <td>100% Offset by Promotional AWS Credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.6-monitoring/cloudwatch-logs.png',
            'Real-Time CloudWatch Logs Inspection',
            'CloudWatch Logs stream recording HTTP 200 responses.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.6-monitoring/cloudwatch-alarms.png',
            'CloudWatch Alarms Dashboard Status',
            'CloudWatch Alarms dashboard displaying all metrics in healthy OK status.',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.6-monitoring/aws-budgets.png',
            'AWS Budgets & Cost Explorer Reconciled',
            'AWS Budgets dashboard showing $6.44 spend well within the $10 budget ceiling.',
            false
          )}

          <h3 class="report-h3">4. Verification & Expected Output</h3>
          <p class="report-p">Alarms indicate OK; email notification received; demo script successfully starts and halts running compute on demand.</p>

          <h3 class="report-h3">5. Common Errors & Troubleshooting</h3>
          <ul class="report-list">
            <li><strong>AWS Automatically Restarts Stopped RDS After 7 Days:</strong> AWS automatically starts stopped DB instances after 7 days. Re-run <code>demo-infra.ps1 down</code> if not presenting.</li>
          </ul>

          ${renderPrevNextBar('ws-5-5', '5.5 Bedrock AI', 'ws-5-7', '5.7 Clean-up')}
        </section>
      </div>

      <!-- MODULE 5.7 -->
      <div class="ws-module-pane ${currentWorkshopStepId === 'ws-5-7' ? 'active' : ''}" id="pane-ws-5-7">
        <section class="report-section">
          <h2 class="report-h2">5.7 – Resource Cleanup & Teardown</h2>

          <h3 class="report-h3">1. Learning Objectives</h3>
          <ul class="report-list">
            <li>Master the complete, safe, and dependency-ordered infrastructure teardown procedure.</li>
            <li>Purge S3 buckets, RDS database, ECS service, ECR images, and Cognito User Pool upon course completion.</li>
            <li>Validate on the AWS Console that zero active billable resources remain.</li>
          </ul>

          <h3 class="report-h3">2. Prerequisites</h3>
          <p class="report-p">All final project report artifacts, screenshots, and evaluations have been safely exported.</p>

          <h3 class="report-h3">3. Step-by-Step Practical Steps</h3>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">1</span> Final Database Snapshot (Optional)</div>
            <p class="report-p">Preserve database records for future reference:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>aws rds create-db-snapshot \
  --db-instance-identifier nutrition-dev-postgres \
  --db-snapshot-identifier nutrition-dev-final-backup \
  --region ap-southeast-1</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">2</span> Empty Private S3 Buckets</div>
            <p class="report-p">AWS prevents deletion of non-empty buckets. Purge all bucket contents:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>cd infra/envs/dev
FRONTEND_BUCKET=$(terraform output -raw frontend_bucket_name)
IMAGES_BUCKET=$(terraform output -raw images_bucket_name)

aws s3 rm s3://$FRONTEND_BUCKET/ --recursive
aws s3 rm s3://$IMAGES_BUCKET/ --recursive</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">3</span> Destroy Dev Infrastructure with Terraform</div>
            <p class="report-p">Destroy all cloud infrastructure provisioned in the dev environment:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>terraform destroy -auto-approve</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">4</span> Destroy Bootstrap State Storage</div>
            <p class="report-p">Purge and destroy the bootstrap S3 remote state bucket:</p>
            <div class="code-snippet-wrap">
              <div class="code-snippet-header"><span>Terminal</span><button type="button" class="code-copy-btn" onclick="copyCodeSnippet(this)">Copy</button></div>
              <pre><code>cd ../bootstrap
TF_STATE_BUCKET=$(terraform output -raw state_bucket_name)
aws s3 rm s3://$TF_STATE_BUCKET/ --recursive
terraform destroy -auto-approve</code></pre>
            </div>
          </div>

          <div class="ws-step-block">
            <div class="ws-step-title"><span class="ws-step-badge">5</span> Validate Resource Deletion in AWS Console</div>
            <p class="report-p">Check each service in Singapore (<code>ap-southeast-1</code>):</p>
            <ul class="report-list">
              <li><strong>ECS:</strong> Zero active clusters or tasks.</li>
              <li><strong>RDS:</strong> Zero databases (only manual snapshot if created).</li>
              <li><strong>EC2 / VPC:</strong> Load Balancers and Target Groups deleted; zero unattached Elastic IPs.</li>
              <li><strong>CloudFront:</strong> Distribution disabled and removed.</li>
            </ul>
          </div>

          ${renderEvidenceBox(
            'assets/images/workshop/5.7-cleanup/terraform-destroy-success.png',
            'Terraform Destroy Completion',
            'Terminal displaying "Destroy complete! Resources: XX destroyed".',
            false
          )}

          ${renderEvidenceBox(
            'assets/images/workshop/5.7-cleanup/console-clean-verification.png',
            'AWS Console Post-Cleanup Verification',
            'RDS and ECS Consoles confirming 0 active resources.',
            false
          )}

          <h3 class="report-h3">4. Verification & Expected Output</h3>
          <p class="report-p"><code>terraform destroy</code> exits with code 0; AWS Console reflects zero lingering resources; AWS Cost Explorer flatlines to $0.00.</p>

          <h3 class="report-h3">5. Common Errors & Troubleshooting</h3>
          <ul class="report-list">
            <li><strong>RDS Deletion Protection Enabled:</strong> In <code>infra/modules/rds/main.tf</code> set <code>deletion_protection = false</code>, apply, then re-run destroy.</li>
          </ul>

          ${renderPrevNextBar('ws-5-6', '5.6 Monitoring & Cost', '', '')}
        </section>
      </div>
    </div>
  `;
}

function renderWorkshopView() {
  const container = document.getElementById('workshop-content-container');
  if (!container) return;

  const lang = (window.app && window.app.currentLang) || 'vi';
  container.innerHTML = lang === 'en' ? getWorkshopEnHtml() : getWorkshopViHtml();
}

function setupWorkshopSteps() {
  renderWorkshopView();
}

// ==========================================
// 12. 6. SELF-ASSESSMENT
// ==========================================
function renderCriteriaTable() {
  const tbody = document.getElementById('criteria-tbody');
  if (!tbody) return;

  const isVi = app.currentLang === 'vi';
  tbody.innerHTML = app.data.criteria.map((c) => `
    <tr>
      <td style="text-align:center; font-weight:700;">${c.id}</td>
      <td><strong>${escapeHtml(isVi ? c.title_vi : c.title_en)}</strong></td>
      <td>${escapeHtml(isVi ? c.desc_vi : c.desc_en)}</td>
      <td style="text-align:center; font-weight:700; color:${c.rating === 'good' ? '#16A34A' : '#94A3B8'}; font-size:15px;">
        ${c.rating === 'good' ? '✓' : '—'}
      </td>
      <td style="text-align:center; font-weight:700; color:${c.rating === 'fair' ? '#2563EB' : '#94A3B8'}; font-size:15px;">
        ${c.rating === 'fair' ? '✓' : '—'}
      </td>
      <td style="text-align:center; font-weight:700; color:${c.rating === 'avg' ? '#D97706' : '#94A3B8'}; font-size:15px;">
        ${c.rating === 'avg' ? '✓' : '—'}
      </td>
    </tr>
  `).join('');
}

function renderSelfAssessmentInputs() {
  const lang = app.currentLang;
  setContent('assess-narrative', app.data.selfNarrative[lang] || '');
  setContent('assess-improvement', app.data.needsImprovement[lang] || '');
}

function setupSelfAssessment() {}

// ==========================================
// 13. 7. SHARING AND FEEDBACK (READ-ONLY)
// ==========================================
function renderFeedbackInputs() {
  const lang = app.currentLang;
  const fb = app.data.feedback[lang] || app.data.feedback.vi;

  setContent('fb-env', fb.env);
  setContent('fb-mentor', fb.mentor);
  setContent('fb-relevance', fb.relevance);
  setContent('fb-learning', fb.learning);
  setContent('fb-culture', fb.culture);
  setContent('fb-policies', fb.policies);
  setContent('fb-suggestions', fb.suggestions);
}

function setupFeedback() {}

// ==========================================
// 14. SETTINGS & PRINT
// ==========================================
function setupSettingsAndPrint() {
  const btnExport = document.getElementById('btn-export-json');
  const btnPrint = document.getElementById('btn-quick-print');

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(app.data, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = `internship-report-fcaj-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast(t('toastExportJson'));
    });
  }

  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
}

// ==========================================
// 15. LANGUAGE SWITCHER & SEARCH
// ==========================================
function setupLanguageSwitcher() {
  const btnVi = document.getElementById('btn-lang-vi');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnVi) {
    btnVi.addEventListener('click', () => {
      if (app.currentLang !== 'vi') {
        app.setLang('vi');
        showToast(t('toastLangSwitch'));
      }
    });
  }

  if (btnEn) {
    btnEn.addEventListener('click', () => {
      if (app.currentLang !== 'en') {
        app.setLang('en');
        showToast(t('toastLangSwitch'));
      }
    });
  }
}

function setupSearchAndMobile() {
  const searchInput = document.getElementById('sidebar-quick-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) return;

      if (q.includes('worklog') || q.includes('tuần') || q.includes('week') || q.includes('nhật ký')) navigateTo('worklog');
      else if (q.includes('proposal') || q.includes('đồ án') || q.includes('weather') || q.includes('đề xuất')) navigateTo('proposal');
      else if (q.includes('s3 express') || q.includes('one zone') || q.includes('amdahl') || q.includes('storage')) navigateTo('blogs/s3-express-one-zone');
      else if (q.includes('event-driven') || q.includes('race condition') || q.includes('dynamodb cas')) navigateTo('blogs/aws-event-driven-architecture');
      else if (q.includes('cô lập ec2') || q.includes('identity') || q.includes('containment') || q.includes('quarantine') || q.includes('imds')) navigateTo('blogs/aws-ec2-identity-containment');
      else if (q.includes('blog') || q.includes('bài viết')) navigateTo('blogs-posted');
      else if (q.includes('cloud and ai day') || q.includes('hanoi') || q.includes('watch party') || q.includes('sự kiện 1') || q.includes('event 1')) navigateTo('events/aws-cloud-ai-day-hanoi-2026');
  else if (q.includes('werner') || q.includes('fireside') || q.includes('renaissance') || q.includes('sự kiện 2') || q.includes('event 2')) navigateTo('events/fireside-chat-dr-werner-vogels');
  else if (q.includes('enterprise ai') || q.includes('multi-agent') || q.includes('multi agent') || q.includes('prototype to production') || q.includes('sự kiện 4') || q.includes('event 4')) navigateTo('events/enterprise-ai-on-aws-cloud');
  else if (q.includes('voice ai') || q.includes('contact center') || q.includes('kiệt trần') || q.includes('meet up') || q.includes('meetup') || q.includes('aws ram') || q.includes('ram') || q.includes('agentcore') || q.includes('kiro crew') || q.includes('pentest') || q.includes('sự kiện 3') || q.includes('event 3')) navigateTo('events/first-cloud-ai-journey-24-10-2026');
      else if (q.includes('event') || q.includes('sự kiện') || q.includes('bitexco')) navigateTo('events');
      else if (q.includes('workshop') || q.includes('s3') || q.includes('endpoint') || q.includes('thực hành')) navigateTo('workshop');
      else if (q.includes('đánh giá') || q.includes('self') || q.includes('assessment')) navigateTo('self-evaluation');
      else if (q.includes('feedback') || q.includes('góp ý') || q.includes('chia sẻ')) navigateTo('feedback');
    });
  }

  const toggleBtn = document.getElementById('btn-toggle-menu');
  const sidebar = document.getElementById('sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
        sidebar.classList.remove('open');
      }
    });
  }
}

// ==========================================
// 16. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleHashChange);
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateTo(page);
    });
  });

  setupStudentInfo();
  setupWorklog();
  setupProposal();
  setupBlogs();
  setupEvents();
  setupWorkshopSteps();
  setupSelfAssessment();
  setupFeedback();
  setupSettingsAndPrint();
  setupLanguageSwitcher();
  setupSearchAndMobile();

  // Apply initial language from localStorage or default
  app.applyLanguage();

  // Navigate to current hash
  const currentHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'thong-tin';
  navigateTo(currentHash);
});

// Expose functions globally for HTML onclick and event listeners
window.app = app;
window.navigateTo = navigateTo;
window.renderEventsList = renderEventsList;
window.renderEventDetail = renderEventDetail;
window.renderModernizationEventDetail = renderModernizationEventDetail;
window.renderCloudAIDayEventDetail = renderCloudAIDayEventDetail;
window.renderFiresideChatEventDetail = renderFiresideChatEventDetail;
window.renderMeetupEventDetail = renderMeetupEventDetail;
window.renderEnterpriseAIEventDetail = renderEnterpriseAIEventDetail;
window.selectWeek = selectWeek;
window.exportWorklogJson = exportWorklogJson;
window.showExportCodeModal = showExportCodeModal;
window.closeExportCodeModal = closeExportCodeModal;
window.renderBlogDetail = renderBlogDetail;
window.renderEventDrivenBlogDetail = renderEventDrivenBlogDetail;
window.renderIdentityContainmentBlogDetail = renderIdentityContainmentBlogDetail;
window.renderBlogsList = renderBlogsList;
window.renderProposalView = renderProposalView;
window.renderWorkshopView = renderWorkshopView;
window.switchWorkshopTab = switchWorkshopTab;
window.copyCodeSnippet = copyCodeSnippet;
window.openBlogImageModal = openBlogImageModal;
window.closeBlogImageModal = closeBlogImageModal;
window.toggleBlogSnippet = toggleBlogSnippet;
