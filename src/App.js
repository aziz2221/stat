import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const StudentStatistics = () => {
  const students = [
    { name: "آدم زارعي", reading: 17.00, writing: 16.00, composition: 15.50, math: 16.00, science: 14.50 },
    { name: "آدم علبوشي", reading: 15.50, writing: 16.00, composition: 13.50, math: 11.50, science: 15.00 },
    { name: "آلاء عوادي", reading: 16.00, writing: 16.00, composition: 15.50, math: 10.00, science: 13.50 },
    { name: "آمنة الحمداني", reading: 15.50, writing: 16.00, composition: 13.50, math: 14.00, science: 16.50 },
    { name: "آمنة فقراوي", reading: 18.00, writing: 16.00, composition: 15.00, math: 17.50, science: 19.50 },
    { name: "آيـة كرومة", reading: 16.50, writing: 16.00, composition: 14.00, math: 10.50, science: 17.50 },
    { name: "أحمد محمد شارني", reading: 16.50, writing: 16.00, composition: 15.50, math: 16.00, science: 15.50 },
    { name: "أسيل الخنوسي", reading: 18.00, writing: 16.00, composition: 15.50, math: 17.50, science: 17.00 },
    { name: "أسيل العميري", reading: 18.50, writing: 18.00, composition: 17.50, math: 17.00, science: 18.50 },
    { name: "أمان الله الضياف", reading: 8.00, writing: 13.00, composition: 8.00, math: 9.50, science: 16.00 },
    { name: "أمير حدوق", reading: 17.00, writing: 17.50, composition: 17.50, math: 18.00, science: 19.00 },
    { name: "أميمة جراد", reading: 17.50, writing: 17.00, composition: 12.00, math: 18.00, science: 17.00 },
    { name: "إيوان الشاوش", reading: 18.00, writing: 18.00, composition: 14.50, math: 18.50, science: 20.00 },
    { name: "حسناء بنمذكور", reading: 20.00, writing: 18.00, composition: 18.00, math: 16.00, science: 20.00 },
    { name: "رتاج كرائدي", reading: 11.50, writing: 17.50, composition: 11.50, math: 9.50, science: 12.50 },
    { name: "روند الولهازي", reading: 16.00, writing: 18.00, composition: 16.50, math: 18.00, science: 18.50 },
    { name: "روان الفرشيشي", reading: 17.00, writing: 16.00, composition: 15.00, math: 18.00, science: 19.00 },
    { name: "زيدان الخموري", reading: 11.00, writing: 15.00, composition: 9.00, math: 5.50, science: 16.50 },
    { name: "فردوس القاسمي", reading: 16.50, writing: 16.00, composition: 15.50, math: 15.50, science: 18.50 },
    { name: "لينة علولو", reading: 7.50, writing: 13.00, composition: 10.50, math: 5.00, science: 10.50 },
    { name: "ليندا الكعبي", reading: 16.50, writing: 17.00, composition: 16.50, math: 15.00, science: 19.00 },
    { name: "لينا عياري", reading: 11.50, writing: 18.00, composition: 11.50, math: 12.00, science: 18.50 },
    { name: "مؤمن البحري", reading: 14.50, writing: 18.00, composition: 12.00, math: 17.00, science: 19.00 },
    { name: "مازن ابن حسن", reading: 17.00, writing: 16.00, composition: 13.00, math: 18.00, science: 17.00 },
    { name: "مالك بن طراد", reading: 8.00, writing: 15.00, composition: 10.00, math: 10.50, science: 10.00 },
    { name: "محمد التونسي", reading: 12.00, writing: 18.00, composition: 13.00, math: 15.00, science: 20.00 },
    { name: "محمد عزيز الهدار", reading: 15.50, writing: 15.00, composition: 16.50, math: 18.00, science: 17.00 },
    { name: "محمد هارون ريابي", reading: 19.50, writing: 18.00, composition: 18.00, math: 19.00, science: 20.00 },
    { name: "مريم بن الرشيد", reading: 15.50, writing: 14.00, composition: 12.00, math: 15.00, science: 12.50 },
    { name: "مريم الطرهوني", reading: 18.50, writing: 16.50, composition: 18.00, math: 19.50, science: 20.00 },
    { name: "مهدي شوشان", reading: 15.50, writing: 16.00, composition: 14.00, math: 12.00, science: 19.00 },
    { name: "ميار القبو", reading: 14.50, writing: 17.00, composition: 14.00, math: 17.50, science: 16.00 },
    { name: "معتز بالله بن يدر", reading: 7.00, writing: 18.00, composition: 9.00, math: 6.50, science: 11.00 },
    { name: "ملكة عوني", reading: 18.00, writing: 18.00, composition: 15.00, math: 20.00, science: 19.00 },
    { name: "نورسين الحداد", reading: 19.50, writing: 18.00, composition: 18.00, math: 19.00, science: 18.50 },
    { name: "يحيى عفلي", reading: 19.00, writing: 18.00, composition: 16.00, math: 20.00, science: 18.00 },
    { name: "يقين البلدي", reading: 15.50, writing: 18.00, composition: 15.00, math: 15.50, science: 19.50 },
    { name: "يوسف الماجري", reading: 16.00, writing: 16.00, composition: 16.00, math: 14.50, science: 18.00 },
    { name: "يعقوب بن عثمان", reading: 16.50, writing: 18.00, composition: 12.00, math: 15.00, science: 13.50 },
    { name: "يونس بن سلامة", reading: 11.50, writing: 12.50, composition: 9.00, math: 5.00, science: 13.50 }
  ];

  const calculateAverage = (field) => {
    const sum = students.reduce((acc, student) => acc + student[field], 0);
    return (sum / students.length).toFixed(2);
  };

  const getDistribution = (field) => {
    const ranges = {
      'ممتاز (18-20)': 0,
      'جيد جدا (16-17.99)': 0,
      'جيد (14-15.99)': 0,
      'متوسط (12-13.99)': 0,
      'ضعيف (10-11.99)': 0,
      'ضعيف جدا (أقل من 10)': 0
    };

    students.forEach(student => {
      const score = student[field];
      if (score >= 18) ranges['ممتاز (18-20)']++;
      else if (score >= 16) ranges['جيد جدا (16-17.99)']++;
      else if (score >= 14) ranges['جيد (14-15.99)']++;
      else if (score >= 12) ranges['متوسط (12-13.99)']++;
      else if (score >= 10) ranges['ضعيف (10-11.99)']++;
      else ranges['ضعيف جدا (أقل من 10)']++;
    });

    return Object.entries(ranges).map(([range, count]) => ({
      name: range,
      value: count,
      percentage: ((count / students.length) * 100).toFixed(1)
    }));
  };

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  const subjects = [
    { key: 'reading', name: 'القراءة', color: '#3b82f6' },
    { key: 'writing', name: 'الخط والإملاء', color: '#10b981' },
    { key: 'composition', name: 'الإنتاج الكتابي', color: '#f59e0b' },
    { key: 'math', name: 'الرياضيات', color: '#8b5cf6' },
    { key: 'science', name: 'الإيقاظ العلمي', color: '#ec4899' }
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* صفحة الغلاف */}
        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden min-h-screen sm:min-h-[800px]">
          {/* خلفية ديكورية */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-300 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-purple-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 p-6 sm:p-12 md:p-16 text-white text-center flex flex-col justify-center min-h-screen sm:min-h-[800px]">
            {/* شعار وهمي */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 sm:border-4 border-white/40 shadow-2xl">
                <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
            </div>

            {/* العنوان الرئيسي */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-8 sm:py-3 mb-4 sm:mb-6 border border-white/30">
                <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wide">🇹🇳 الجمهورية التونسية 🇹🇳</p>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 tracking-tight drop-shadow-2xl px-4">وزارة التربية</h1>
              <div className="h-1 w-20 sm:w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-3 sm:mb-4"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold opacity-90 px-4">المندوبية الجهوية للتربية بأريانة</h2>
            </div>
            
            {/* البطاقة المركزية */}
            <div className="max-w-3xl mx-auto bg-white/15 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 my-8 sm:my-12 border border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="mb-6 sm:mb-8">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-bold text-xs sm:text-sm mb-3 sm:mb-4 shadow-lg">
                  📊 تقرير رسمي
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
                  التقرير الإحصائي
                </h1>
                <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mb-4 sm:mb-6"></div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">نتائج التلاميذ</h2>
                <p className="text-xl sm:text-2xl font-semibold text-blue-200">الثلاثي الأول</p>
              </div>
              
              {/* المعلومات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-right">
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-xs sm:text-sm text-blue-200 mb-1 sm:mb-2">📚 الصف</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">الثانية ب</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-xs sm:text-sm text-blue-200 mb-1 sm:mb-2">👥 عدد التلاميذ</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">{students.length} تلميذاً</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all sm:col-span-2">
                  <p className="text-xs sm:text-sm text-blue-200 mb-1 sm:mb-2">🏫 المدرسة</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold">برج الوزير حي التعمير 5</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-xs sm:text-sm text-blue-200 mb-1 sm:mb-2">📅 السنة الدراسية</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">2025 - 2026</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-xs sm:text-sm text-blue-200 mb-1 sm:mb-2">👩‍🏫 المربية</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">بسمة سلطاني</p>
                </div>
              </div>
            </div>
            
            {/* الزخرفة السفلية */}
            <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8">
              <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-200 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-200 rounded-full animate-pulse"></div>
              <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent to-white"></div>
            </div>
          </div>
        </div>

        {/* صفحة لكل مادة */}
        {subjects.map((subject, index) => {
          const sortedStudents = [...students].sort((a, b) => b[subject.key] - a[subject.key]);
          const distribution = getDistribution(subject.key);
          const average = calculateAverage(subject.key);
          const maxScore = Math.max(...students.map(s => s[subject.key]));
          const minScore = Math.min(...students.map(s => s[subject.key]));
          
          return (
            <div key={subject.key} className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 space-y-6 sm:space-y-8">
              
              {/* الرأسية */}
              <div className="border-b-4 pb-4 sm:pb-6 mb-6 sm:mb-8" style={{ borderColor: subject.color }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3" style={{ color: subject.color }}>
                  {subject.name}
                </h1>
                <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg">
                  الصف الثانية ب - الثلاثي الأول - السنة الدراسية 2025/2026
                </p>
              </div>

              {/* المؤشرات الرئيسية */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg" style={{ background: `linear-gradient(135deg, ${subject.color} 0%, ${subject.color}dd 100%)` }}>
                  <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2 opacity-90">المعدل العام</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{average}</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg">
                  <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2 opacity-90">أعلى علامة</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{maxScore.toFixed(2)}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg">
                  <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2 opacity-90">أدنى علامة</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{minScore.toFixed(2)}</p>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg">
                  <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2 opacity-90">عدد التلاميذ</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{students.length}</p>
                </div>
              </div>

              {/* التوزيع والرسم الدائري */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* الرسم الدائري */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">التوزيع النسبي</h2>
                  <div className="h-64 sm:h-80 md:h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={distribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percentage }) => `${percentage}%`}
                          outerRadius="70%"
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {distribution.map((entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1e293b', 
                            border: 'none', 
                            borderRadius: '12px',
                            padding: '8px 12px',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '12px'
                          }}
                          formatter={(value) => `${value} تلميذ`}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* الإحصائيات التفصيلية */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">الإحصائيات التفصيلية</h2>
                  <div className="space-y-2 sm:space-y-3">
                    {distribution.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-lg sm:rounded-xl p-3 sm:p-4 flex justify-between items-center shadow-md bg-white border-r-4"
                        style={{ borderColor: COLORS[idx] }}
                      >
                        <div>
                          <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-600">{item.percentage}% من المجموع</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: COLORS[idx] }}>
                            {item.value}
                          </p>
                          <p className="text-xs text-gray-500">تلميذ</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* رسم بياني للنتائج */}
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                  توزيع العلامات على التلاميذ (أعلى 12 تلميذاً)
                </h2>
                <div className="h-80 sm:h-96 md:h-[450px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={sortedStudents.slice(0, 12)}
                      margin={{ top: 20, right: 10, left: 10, bottom: 100 }}
                      barSize={40}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" strokeWidth={1.5} />
                      <XAxis 
                        dataKey="name" 
                        angle={-45} 
                        textAnchor="end" 
                        height={100}
                        interval={0}
                        tick={{ fontSize: window.innerWidth < 640 ? 9 : window.innerWidth < 768 ? 11 : 13, fontWeight: 700, fill: '#374151' }}
                        stroke="#6b7280"
                        strokeWidth={2}
                      />
                      <YAxis 
                        domain={[0, 20]} 
                        ticks={[0, 5, 10, 15, 20]}
                        tick={{ fontSize: window.innerWidth < 640 ? 10 : 14, fontWeight: 700, fill: '#374151' }}
                        stroke="#6b7280"
                        strokeWidth={2}
                        label={{ 
                          value: 'العلامة', 
                          angle: -90, 
                          position: 'insideLeft', 
                          style: { fontSize: window.innerWidth < 640 ? 12 : 16, fontWeight: 'bold', fill: '#1f2937' } 
                        }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: 'none', 
                          borderRadius: '12px',
                          padding: '12px',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: window.innerWidth < 640 ? '12px' : '14px'
                        }}
                        formatter={(value) => [`${value}/20`, 'العلامة']}
                        labelStyle={{ color: '#f1f5f9', fontWeight: 'bold', marginBottom: '4px' }}
                      />
                      <Bar 
                        dataKey={subject.key} 
                        fill={subject.color}
                        name="العلامة"
                        radius={[12, 12, 0, 0]}
                        label={{ 
                          position: 'top', 
                          fill: '#1f2937',
                          fontSize: window.innerWidth < 640 ? 10 : 14,
                          fontWeight: 'bold'
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* الذيل */}
              <div className="text-center text-gray-500 text-xs sm:text-sm border-t pt-4 sm:pt-6">
                <p className="font-semibold">المربية: بسمة سلطاني</p>
                <p className="text-xs">المدرسة الابتدائية: برج الوزير حي التعمير 5 - أريانة</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentStatistics;