import { Component } from "react";
import PagameTitle from "../../components/PagameTitle";

export class PoliticaPrivacidad extends Component {
  render() {
    return (
      <div className="p-4 text-white max-w-6xl text-justify">
        <div className="flex">
          <h2 className="text-4xl font-bold mb-4 mr-2 right">
            Política de Privacidad de
          </h2>
          <PagameTitle className="text-4xl" />
        </div>
        <p className="mb-4 underline text-md">
          Última actualización: [27-07-2023]
        </p>

        <h2 className="text-2xl font-bold mb-6">
          Política de Privacidad de Pagame
        </h2>

        <p>
          Bienvenido(a) a Pagame, una aplicación diseñada para simplificar la
          gestión de gastos en grupos. En Pagame, valoramos y respetamos tu
          privacidad. Esta Política de Privacidad explica cómo recopilamos,
          utilizamos, compartimos y protegemos tus datos personales cuando
          utilizas nuestra aplicación en las plataformas móviles iOS y Android.
          Al acceder y utilizar Pagame, aceptas los términos descritos en esta
          política.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          1. Información que Recopilamos
        </h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            a) Información de Registro: Cuando creas una cuenta en Pagame,
            solicitamos información básica como tu nombre de usuario, dirección
            de correo electrónico y contraseña.
          </li>
          <li className="mb-2">
            b) Información de Transacciones: Al utilizar la aplicación para
            compartir gastos en grupos, recopilamos información sobre las
            transacciones y los gastos compartidos entre los miembros del grupo.
          </li>
          <li className="mb-2">
            c) Información de Contacto: Si decides invitar a otros a unirse a tu
            grupo en Pagame, podemos recopilar información de contacto,
            incluyendo nombres y direcciones de correo electrónico.
          </li>
          <li className="mb-2">
            d) Información del Dispositivo: Recopilamos datos técnicos, como la
            dirección IP, tipo de dispositivo, versión del sistema operativo y
            configuración de idioma, con el propósito de mejorar la calidad y
            seguridad de nuestros servicios.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          2. Uso de la Información
        </h3>
        <p>
          Utilizamos la información recopilada para los siguientes propósitos:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Proporcionar y mejorar nuestros servicios, incluyendo la
            personalización de tu experiencia en la aplicación.
          </li>
          <li className="mb-2">
            Administrar tu cuenta y brindar soporte al cliente cuando sea
            necesario.
          </li>
          <li className="mb-2">
            Facilitar la división de gastos y llevar un registro de las
            transacciones dentro de los grupos.
          </li>
          <li className="mb-2">
            Enviarte notificaciones pertinentes sobre tus actividades en Pagame.
          </li>
          <li className="mb-2">
            Enviar información y promociones relacionadas con nuestra
            aplicación, siempre y cuando hayas otorgado tu consentimiento previo
            para recibir dichas comunicaciones.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          3. Compartir de la Información
        </h3>
        <p>
          Nos comprometemos a proteger tu privacidad y no compartimos tus datos
          personales con terceros sin tu consentimiento, excepto en los
          siguientes casos:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Con proveedores de servicios que trabajan en nuestro nombre y están
            sujetos a acuerdos de confidencialidad.
          </li>
          <li className="mb-2">
            Cuando sea necesario para cumplir con la ley, regulaciones o
            solicitudes legales.
          </li>
          <li className="mb-2">
            En caso de fusión, adquisición o venta de activos, donde la
            información del usuario pueda ser transferida como parte de dicha
            transacción.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          4. Seguridad de los Datos
        </h3>
        <p>
          Mantenemos medidas de seguridad técnicas y organizativas para proteger
          tu información contra el acceso no autorizado, la pérdida y la
          alteración. Sin embargo, es importante recordar que ninguna
          transmisión de datos por Internet o método de almacenamiento
          electrónico es completamente seguro.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">5. Pagos Integrados</h3>
        <p>
          Pagame puede incluir funcionalidades de pagos integrados para
          facilitar transacciones entre los miembros del grupo. Para ello,
          utilizamos proveedores de servicios de pago confiables que cumplen con
          estándares de seguridad de la industria.
        </p>

        <p className="mt-6">
          Si tienes preguntas o inquietudes sobre esta Política de Privacidad,
          contáctanos en:{" "}
          <a href="mailto:pagame.me@proton.me">pagame.me@proton.me</a>.
        </p>

        <p className="mt-6">
          Al utilizar Pagame, aceptas los términos y condiciones de esta
          Política de Privacidad. Gracias por confiar en nosotros para gestionar
          tus finanzas en grupo de manera segura y eficiente.
        </p>

{/*         <p className="mt-6">
          Fecha de entrada en vigor: [Fecha de entrada en vigor]
        </p> */}

      </div>
    );
  }
}

export default PoliticaPrivacidad;
