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
    <div dir="rtl" className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* صفحة الغلاف */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-16 text-white text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">الجمهورية التونسية</h1>
            <h2 className="text-3xl font-semibold mb-2">وزارة التربية</h2>
            <h3 className="text-2xl mb-8">المندوبية الجهوية للتربية بأريانة</h3>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 my-12">
            <h1 className="text-4xl font-bold mb-6">تقرير إحصائي</h1>
            <h2 className="text-3xl font-semibold mb-8">نتائج التلاميذ - الثلاثي الأول</h2>
            <div className="text-xl space-y-4">
              <p>الصف: <span className="font-bold">الثانية ب</span></p>
              <p>المدرسة: <span className="font-bold">برج الوزير حي التعمير 5</span></p>
              <p>السنة الدراسية: <span className="font-bold">2025 - 2026</span></p>
              <p>المربية: <span className="font-bold">بسمة سلطاني</span></p>
            </div>
          </div>
          
          <p className="text-xl mt-8">عدد التلاميذ: {students.length}</p>
        </div>

        {/* صفحة لكل مادة */}
        {subjects.map((subject, index) => {
          const sortedStudents = [...students].sort((a, b) => b[subject.key] - a[subject.key]);
          const distribution = getDistribution(subject.key);
          const average = calculateAverage(subject.key);
          const maxScore = Math.max(...students.map(s => s[subject.key]));
          const minScore = Math.min(...students.map(s => s[subject.key]));
          
          return (
            <div key={subject.key} className="bg-white rounded-3xl shadow-2xl p-12 space-y-8">
              
              {/* الرأسية */}
              <div className="border-b-4 pb-6 mb-8" style={{ borderColor: subject.color }}>
                <h1 className="text-5xl font-bold text-center mb-3" style={{ color: subject.color }}>
                  {subject.name}
                </h1>
                <p className="text-center text-gray-600 text-lg">
                  الصف الثانية ب - الثلاثي الأول - السنة الدراسية 2025/2026
                </p>
              </div>

              {/* المؤشرات الرئيسية */}
              <div className="grid grid-cols-4 gap-6">
                <div className="rounded-2xl p-6 text-white text-center shadow-lg" style={{ background: `linear-gradient(135deg, ${subject.color} 0%, ${subject.color}dd 100%)` }}>
                  <p className="text-base mb-2 opacity-90">المعدل العام</p>
                  <p className="text-5xl font-bold">{average}</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <p className="text-base mb-2 opacity-90">أعلى علامة</p>
                  <p className="text-5xl font-bold">{maxScore.toFixed(2)}</p>
                </div>

     
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <p className="text-base mb-2 opacity-90">أدنى علامة</p>
                  <p className="text-5xl font-bold">{minScore.toFixed(2)}</p>
                </div>


                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 text-white text-center shadow-lg">
                  <p className="text-base mb-2 opacity-90">عدد التلاميذ</p>
                  <p className="text-5xl font-bold">{students.length}</p>
                </div>
              </div>

              {/* التوزيع والرسم الدائري */}
              <div className="grid grid-cols-2 gap-8">
                {/* الرسم الدائري */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">التوزيع النسبي</h2>
                  <div style={{ height: '350px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={distribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percentage }) => `${percentage}%`}
                          outerRadius={110}
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
                            padding: '12px',
                            color: 'white',
                            fontWeight: 'bold'
                          }}
                          formatter={(value) => `${value} تلميذ`}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* الإحصائيات التفصيلية */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">الإحصائيات التفصيلية</h2>
                  <div className="space-y-3">
                    {distribution.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-xl p-4 flex justify-between items-center shadow-md bg-white border-r-4"
                        style={{ borderColor: COLORS[idx] }}
                      >
                        <div>
                          <p className="text-base font-bold text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.percentage}% من المجموع</p>
                        </div>
                        <div className="text-center">
                          <p className="text-4xl font-bold" style={{ color: COLORS[idx] }}>
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
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  توزيع العلامات على التلاميذ (أعلى 12 تلميذاً)
                </h2>
                <div style={{ height: '450px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={sortedStudents.slice(0, 12)}
                      margin={{ top: 30, right: 40, left: 40, bottom: 120 }}
                      barSize={50}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" strokeWidth={1.5} />
                      <XAxis 
                        dataKey="name" 
                        angle={-45} 
                        textAnchor="end" 
                        height={120}
                        interval={0}
                        tick={{ fontSize: 13, fontWeight: 700, fill: '#374151' }}
                        stroke="#6b7280"
                        strokeWidth={2}
                      />
                      <YAxis 
                        domain={[0, 20]} 
                        ticks={[0, 5, 10, 15, 20]}
                        tick={{ fontSize: 14, fontWeight: 700, fill: '#374151' }}
                        stroke="#6b7280"
                        strokeWidth={2}
                        label={{ 
                          value: 'العلامة', 
                          angle: -90, 
                          position: 'insideLeft', 
                          style: { fontSize: 16, fontWeight: 'bold', fill: '#1f2937' } 
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
                          fontSize: '14px'
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
                          fontSize: 14,
                          fontWeight: 'bold'
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* الذيل */}
              <div className="text-center text-gray-500 text-sm border-t pt-6">
                <p className="font-semibold">المربية: بسمة سلطاني</p>
                <p>المدرسة الابتدائية: برج الوزير حي التعمير 5 - أريانة</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentStatistics;