const About: React.FC = () => {
  return (
    <section className="">
      <h2>Layout Example (About)</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we&apos;re returning a
        function, we can have complex nested layouts if desired.
      </p>
      <p>
        When navigating between pages, we want to persist page state (input
        values, scroll position, etc.) for a Single-Page Application (SPA)
        experience.
      </p>
      <p>
        This layout pattern will allow for state persistence because the React
        component tree is persisted between page transitions. To preserve state,
        we need to prevent the React component tree from being discarded between
        page transitions.
      </p>
      <h3>Try It Out</h3>
      <p>
        To visualize this, try tying in the search input in the{' '}
        <code>Sidebar</code> and then changing routes. You&apos;ll notice the
        input state is persisted.
      </p>
      <p className="font-arabic">
        مسؤول بالناتو: على الدول اتخاذ قرارها بمفردها بشأن إرسال دبابات
        لأوكرانيا قال الأدميرال روب باور رئيس اللجنة العسكرية لحلف شمال الأطلسي
        اليوم الجمعة إن ألمانيا والدول الأخرى التي تدعم أوكرانيا في جهودها لصد
        الغزو الروسي يجب أن تقرر بشكل فردي ما إذا كانت ستزود كييف بالدبابات.
        وفشل اجتماع عقده الحلفاء الغربيون في وقت سابق من اليوم بقاعدة رامشتاين
        الجوية في ألمانيا في التوصل إلى قرار بشأن تسليم دبابات ليوبارد 2 ألمانية
        الصنع إلى أوكرانيا، لكن وزير الدفاع البولندي قال إنه لا يزال متفائلا بأن
        الجهود المبذولة لتقديم الدبابات إلى كييف ستكلل بالنجاح.
      </p>
    </section>
  );
};

export default About;
