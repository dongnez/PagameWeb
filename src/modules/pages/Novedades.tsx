
const Novedades: React.FC = () => {
  const newsData = [
    {
      date: "27-07-2023",
      title: "Mejoras en la interfaz de usuario",
      description:
        "Hemos realizado mejoras en la interfaz de usuario para hacerla más intuitiva y atractiva. ¡Disfruta de una experiencia aún más fluida! Mejoras en la navegación y nuevos colores.",
    },
    {
      date: "27-07-2023",
      title: "Función de recordatorio de pagos",
      description:
        "Hemos agregado una nueva función que te permite enviar recordatorios de pagos a tus amigos. Nunca más olvides recibir lo que te deben. ¡Recibe notificaciones personalizadas para los pagos pendientes!",
    },
    {
      date: "27-07-2023",
      title: "Soporte para monedas internacionales",
      description:
        "Ahora puedes realizar el seguimiento de tus gastos en diferentes monedas. ¡Pagame se adapta a tus necesidades globales! Soporta todas las principales monedas del mundo.",
    },
    {
      date: "27-07-2023",
      title: "Nuevas funcionalidades de reportes",
      description:
        "Ahora puedes generar reportes detallados de tus gastos en grupos. Obtén información clara sobre tus finanzas y toma decisiones informadas.",
    },
    {
      date: "27-07-2023",
      title: "Mayor seguridad y privacidad",
      description:
        "Hemos reforzado la seguridad de la aplicación para proteger tus datos financieros. Tu privacidad es nuestra máxima prioridad.",
    },
    {
      date: "27-07-2023",
      title: "Optimización para dispositivos tablet",
      description:
        "Pagame ahora es compatible con dispositivos tablet. Disfruta de la misma experiencia en una pantalla más grande.",
    },
    {
      date: "27-07-2023",
      title: "Nuevo diseño de iconos",
      description:
        "Hemos rediseñado los iconos de la aplicación para que sean más modernos y estilizados. Una experiencia visual mejorada.",
    },
    {
      date: "27-07-2023",
      title: "Mejora en la velocidad de carga",
      description:
        "Hemos optimizado el rendimiento de Pagame, lo que significa que la aplicación carga más rápido y responde de manera más ágil.",
    },
    {
      date: "27-07-2023",
      title: "Notificaciones personalizables",
      description:
        "Ahora puedes personalizar las notificaciones de Pagame según tus preferencias. No te pierdas ninguna alerta importante.",
    },
    {
      date: "27-07-2023",
      title: "Compatibilidad con sistemas iOS",
      description:
        "Pagame ahora es totalmente compatible con los dispositivos iOS, incluidos iPhone y iPad. Disfruta de una experiencia completa en iOS.",
    },
    {
      date: "27-07-2023",
      title: "Chat en tiempo real",
      description:
        "Hemos añadido una función de chat en tiempo real para que puedas comunicarte con los miembros de tus grupos de manera instantánea.",
    },
    {
      date: "27-07-2023",
      title: "Acceso sin conexión",
      description:
        "Ahora puedes acceder a tus datos y gastos incluso cuando no tienes conexión a internet. Perfecto para situaciones sin acceso a la red.",
    },
    {
      date: "27-07-2023",
      title: "Nuevos temas de interfaz",
      description:
        "Hemos agregado nuevos temas de interfaz para que puedas personalizar el aspecto de Pagame según tus preferencias de color.",
    },
    {
      date: "27-07-2023",
      title: "Mejoras en la función de búsqueda",
      description:
        "Hemos mejorado la función de búsqueda para que puedas encontrar rápidamente transacciones y gastos específicos.",
    },
    {
      date: "27-07-2023",
      title: "Múltiples administradores de grupo",
      description:
        "Ahora puedes asignar varios administradores a un grupo, lo que facilita la gestión y el control de los gastos compartidos.",
    },
    {
      date: "27-07-2023",
      title: "Nuevas opciones de categorías",
      description:
        "Hemos agregado nuevas opciones de categorías para que puedas organizar tus gastos de manera más detallada y precisa.",
    },
    {
      date: "27-07-2023",
      title: "Acceso mediante huella dactilar",
      description:
        "Añadimos la opción de acceso mediante huella dactilar para una mayor seguridad y comodidad al ingresar a la aplicación.",
    },
    {
      date: "27-07-2023",
      title: "Sincronización con Google Calendar",
      description:
        "Pagame ahora se sincroniza con tu calendario de Google para que puedas ver los eventos y gastos planificados en un solo lugar.",
    },
  ];

  return (
    <div className="p-4 max-w-6xl text-white">
      <div className="sticky top-0 bg-black p-2 font-bold mb-8">
        <h2 className="text-4xl font-bold">Novedades y Actualizaciones</h2>
      </div>
      <div className="flex flex-col">
        {newsData.map((item, index) => (
          <div key={index} className="mb-6 text-lg">
            <div className="flex justify-between  bg-black text-gray-400  text-sm sm:text-base mb-4">
              <div className="text-right">{item.title}</div>
              <div className="text-center">{item.date}</div>
            </div>
            <div className="border-l-2 border-black pl-6 ml-4 mb-4">
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Novedades;
