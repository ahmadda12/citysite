// هذا الكود يعمل فقط داخل صفحة event.html
if (window.location.pathname.includes("event.html")) {
    // قراءة رقم الكرت من الرابط

    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("event");

    // بيانات الكروت
    const events = {
        1: {
            title: "حفلة موسيقية",
            desc: "حفلة بمشاركة فرق موسيقية محلية وعالمية.",
            date: "30-01-2026",
            place: "المسرح الوطني",
            image: "2.jpg"
        },
        2: {
            title: "رياضة",
            desc: "مارثون جري لجميع الفئات العمرية"
            date: "05-02-2026",
            place: "ساحة الأمويين",
            image: "3.jpg"                           
        },
        3: {
            title: "معرض الكتاب",
            desc: "فعالية ثقافية تضم كتب ومعارض مختلفة لجميع الأعمار.",
            date: "25-01-2026",
            place: "مركز المدينة",
            image: "4.jpg"              
        }  
    };

    // إذا كان رقم الكرت صحيح
    if (events[eventId]) {
        document.getElementById("title").innerText = events[eventId].title;
        document.getElementById("desc").innerText = events[eventId].desc;
        document.getElementById("date").innerText = events[eventId].date;
        document.getElementById("place").innerText = events[eventId].place;
        document.getElementById("image").src = events[eventId].image;
    }
}
// التحقق من نموذج اتصل بنا
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message){
        // عرض رسالة نجاح باستخدام Bootstrap Alert
        document.getElementById('alertPlaceholder').innerHTML = 
            <div class="alert alert-success" role="alert">
                تم إرسال رسالتك بنجاح!
            </div>;
        // إعادة تعيين الحقول
        this.reset();
    } else {
        document.getElementById('alertPlaceholder').innerHTML = 
            <div class="alert alert-danger" role="alert">
                يرجى ملء جميع الحقول.
            </div>;
    }
});

